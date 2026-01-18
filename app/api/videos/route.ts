import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Video from '@/models/Video';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
    await connectDB();
    // Public access: fetch only published videos
    // Admin might want all, but for this route let's serve public content primarily.
    // We can add a query param ?all=true if admin.

    // For now, let's just return all published videos sorted by creation date
    const videos = await Video.find({ isPublished: true }).sort({ createdAt: -1 });
    return NextResponse.json(videos);
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    try {
        const body = await req.json();
        const video = await Video.create(body);
        return NextResponse.json(video, { status: 201 });
    } catch (error) {
        console.error('Create video error:', error);
        return NextResponse.json({ error: 'Failed to create video' }, { status: 500 });
    }
}
