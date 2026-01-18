'use client';

import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { VideoModal } from './VideoModal';
import { motion } from 'framer-motion';

// Types
interface Video {
    _id: string;
    title: string;
    description: string;
    category: string;
    thumbnailUrl: string;
    videoUrl: string;
}

export function VideoGrid() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const res = await fetch('/api/videos');
                if (res.ok) {
                    const data = await res.json();
                    setVideos(data);
                }
            } catch (error) {
                console.error('Failed to fetch videos', error);
            } finally {
                setLoading(false);
            }
        }
        fetchVideos();
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-neutral-500">Loading portfolio...</div>;
    }

    return (
        <section className="py-20 px-6 container mx-auto" id="portfolio">
            <h2 className="text-4xl font-bold mb-12 text-center">Selected Work</h2>

            {videos.length === 0 ? (
                <div className="text-center py-10 text-neutral-500">
                    <p>No videos uploaded yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedVideo(video)}
                            className="group relative aspect-video bg-neutral-900 rounded-lg overflow-hidden cursor-pointer"
                        >
                            <img
                                src={video.thumbnailUrl}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                                    <Play className="fill-white text-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-bold">{video.title}</h3>
                                <p className="text-neutral-300 text-sm">{video.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {selectedVideo && (
                <VideoModal
                    video={selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                />
            )}
        </section>
    );
}
