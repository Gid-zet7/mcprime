import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Video from '@/models/Video';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { deleteFileFromS3 } from '@/lib/s3';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    await connectDB();
    const { id } = await params;
    const video = await Video.findById(id);
    if (!video) {
        return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }
    return NextResponse.json(video);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;
    try {
        const body = await req.json();
        const video = await Video.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!video) {
            return NextResponse.json({ error: 'Video not found' }, { status: 404 });
        }
        return NextResponse.json(video);
    } catch (error) {
        return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;
    try {
        const video = await Video.findById(id);
        if (!video) {
            return NextResponse.json({ error: 'Video not found' }, { status: 404 });
        }

        // Delete from S3
        if (video.s3Key) {
            await deleteFileFromS3(video.s3Key);
        }

        await video.deleteOne();
        return NextResponse.json({ message: 'Video deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
    }
}
