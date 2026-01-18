'use client';

import { X } from 'lucide-react';
import { IVideo } from '@/models/Video'; // We can import Interface from models if it's just a type, but better to duplicate or share types to avoid server code in client
// Creating a local type for props
interface VideoProps {
    _id: string;
    title: string;
    videoUrl: string;
    category: string;
}

interface VideoModalProps {
    video: VideoProps;
    onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            >
                <X size={32} />
            </button>

            <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden relative shadow-2xl shadow-neutral-900/50">
                <video
                    src={video.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/80 backdrop-blur-md">
                    {video.category}
                </span>
            </div>
        </div>
    );
}
