import { Play, film, Zap, Globe, Cpu } from 'lucide-react';
// Note: 'film' is not a valid lucide export, usually it is Film. I will double check imports.
import { Film, Aperture, Music, PenTool } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            icon: <Film className="w-10 h-10 mb-4 text-white" />,
            title: "Commercial Production",
            description: "High-end commercials for TV and social media that drive brand awareness and conversion."
        },
        {
            icon: <Cpu className="w-10 h-10 mb-4 text-white" />,
            title: "AI Video Generation",
            description: "Leveraging the latest in Generative AI to create surreal, imaginative visual concepts rapidly."
        },
        {
            icon: <Globe className="w-10 h-10 mb-4 text-white" />,
            title: "Global Documentaries",
            description: "Storytelling that knows no borders. We travel the world to capture authentic human stories."
        },
        {
            icon: <Zap className="w-10 h-10 mb-4 text-white" />,
            title: "Social Media Shorts",
            description: "Snappy, vertical format content designed to go viral on TikTok, Reels, and Shorts."
        },
        {
            icon: <Aperture className="w-10 h-10 mb-4 text-white" />,
            title: "Photography",
            description: "Complementary still photography campaigns to match your video aesthetic."
        },
        {
            icon: <Music className="w-10 h-10 mb-4 text-white" />,
            title: "Sound Design",
            description: "Immersive audio engineering to ensure your video sounds as good as it looks."
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen px-6">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-neutral-400">
                        From concept to final cut, we offer a full spectrum of production services tailored to modern brands.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:bg-neutral-800 transition-colors group">
                            <div className="bg-neutral-800 p-3 w-fit rounded-lg mb-6 group-hover:bg-white/10 transition-colors">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">{s.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
