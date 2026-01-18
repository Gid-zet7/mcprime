import { VideoGrid } from "@/components/ui/VideoGrid";

export default function PortfolioPage() {
    return (
        <div className="pt-24 min-h-screen">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h1 className="text-5xl font-bold mb-4">Our Work</h1>
                <p className="text-xl text-neutral-400">
                    A collection of our finest cinematic productions.
                </p>
            </div>
            <VideoGrid />
        </div>
    );
}
