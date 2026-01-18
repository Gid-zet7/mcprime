import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getUploadUrl } from '@/lib/s3';


export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session || (session.user as any).role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { filename, contentType } = await req.json();

        // Generate a unique key for S3
        // Simple unique ID generation without extra libs if needed, but uuid is better.
        // I'll use simple random string + timestamp to avoid installing uuid if possible, 
        // but I can install it or use crypto.
        const uniqueId = crypto.randomUUID();
        const extension = filename.split('.').pop();
        const key = `videos/${uniqueId}.${extension}`;

        const { url } = await getUploadUrl(key, contentType);

        return NextResponse.json({ url, key });
    } catch (error) {
        console.error('Upload URL error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
