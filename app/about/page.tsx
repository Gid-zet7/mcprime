import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen px-6">
            <div className="container mx-auto">
                {/* Intro */}
                <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-800">
                            {/* Placeholder image from unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
                                alt="Filmmaking set"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-5xl font-bold mb-6">Storytellers at Heart. <br />Technologists by Design.</h1>
                        <p className="text-xl text-neutral-400 mb-6 leading-relaxed">
                            Founded in 2024, MC PRIME was born from a desire to bridge the gap between cinematic tradition and the explosive potential of generative AI.
                        </p>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            We believe that the future of filmmaking isn't about choosing between human creativity and machine efficiency—it's about combining them. Our team consists of veteran directors, cinematographers, and AI prompt engineers working in perfect harmony.
                        </p>
                    </div>
                </div>

                {/* Team / Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-neutral-800 pt-16">
                    <div>
                        <h3 className="text-4xl font-bold mb-2 text-white">50+</h3>
                        <p className="text-neutral-500 uppercase tracking-widest text-sm">Projects Completed</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2 text-white">12</h3>
                        <p className="text-neutral-500 uppercase tracking-widest text-sm">International Awards</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2 text-white">100%</h3>
                        <p className="text-neutral-500 uppercase tracking-widest text-sm">Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
