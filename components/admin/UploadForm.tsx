'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export function UploadForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [thumbFile, setThumbFile] = useState<File | null>(null);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Commercials',
        isPublished: true,
    });

    const handleUpload = async (file: File, folder: string) => {
        // Get presigned URL
        const res = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                filename: file.name,
                contentType: file.type
            }),
        });

        if (!res.ok) throw new Error('Failed to get upload URL');
        const { url, key } = await res.json();

        // Upload to S3
        const uploadRes = await fetch(url, {
            method: 'PUT',
            body: file,
            headers: { 'Content-Type': file.type },
        });

        if (!uploadRes.ok) throw new Error('Failed to upload file to S3');

        // Return the public URL and Key
        const objectUrl = url.split('?')[0];
        return { url: objectUrl, key };
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!videoFile || !thumbFile) {
            alert("Please select both a video and a thumbnail.");
            return;
        }

        try {
            setLoading(true);

            // 1. Upload Video
            const videoData = await handleUpload(videoFile, 'videos');

            // 2. Upload Thumbnail
            const thumbData = await handleUpload(thumbFile, 'thumbnails');

            // 3. Save Metadata
            const res = await fetch('/api/videos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    videoUrl: videoData.url,
                    s3Key: videoData.key, // Store video key for deletion. Thumb key could be stored too if we expand schema.
                    thumbnailUrl: thumbData.url,
                }),
            });

            if (!res.ok) throw new Error('Failed to save metadata');

            alert('Video uploaded successfully!');
            router.refresh();
            // Reset form
            setFormData({ title: '', description: '', category: 'Commercials', isPublished: true });
            setVideoFile(null);
            setThumbFile(null);

        } catch (error) {
            console.error(error);
            alert('Upload failed. See console.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-neutral-900 p-8 rounded-xl max-w-2xl mx-auto space-y-6 border border-neutral-800">
            <h2 className="text-2xl font-bold mb-6">Upload New Project</h2>

            {/* Title */}
            <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                    type="text"
                    required
                    className="w-full bg-neutral-800 border border-neutral-700 rounded p-3 focus:ring-2 focus:ring-white outline-none"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                />
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                    className="w-full bg-neutral-800 border border-neutral-700 rounded p-3 focus:ring-2 focus:ring-white outline-none"
                    rows={4}
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                />
            </div>

            {/* Category */}
            <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                    className="w-full bg-neutral-800 border border-neutral-700 rounded p-3 outline-none"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                >
                    <option>Commercials</option>
                    <option>Short Films</option>
                    <option>UGC</option>
                    <option>AI Films</option>
                    <option>Social Ads</option>
                    <option>Documentary</option>
                    <option>Other</option>
                </select>
            </div>

            {/* Files */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Video File (MP4/MOV)</label>
                    <input
                        type="file"
                        accept="video/*"
                        required
                        className="w-full bg-neutral-800 text-sm p-2 rounded border border-neutral-700"
                        onChange={e => setVideoFile(e.target.files?.[0] || null)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Thumbnail (Image)</label>
                    <input
                        type="file"
                        accept="image/*"
                        required
                        className="w-full bg-neutral-800 text-sm p-2 rounded border border-neutral-700"
                        onChange={e => setThumbFile(e.target.files?.[0] || null)}
                    />
                </div>
            </div>

            {/* Published Status */}
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="published"
                    checked={formData.isPublished}
                    onChange={e => setFormData({ ...formData, isPublished: e.target.checked })}
                    className="w-4 h-4 accent-white"
                />
                <label htmlFor="published" className="text-sm">Publish immediately</label>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-bold py-4 rounded hover:bg-neutral-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
                {loading && <Loader2 className="animate-spin" />}
                {loading ? 'Uploading...' : 'Upload Video'}
            </button>
        </form>
    );
}
