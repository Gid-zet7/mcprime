import { HeroSection } from "@/components/hero-section";
import { VideoGrid } from "@/components/ui/VideoGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Brief */}
      <section className="py-24 px-6 bg-neutral-950 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-100">
            We are filmmakers for the digital age.
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            MC PRIME combines traditional cinematic techniques with cutting-edge AI technology to create visual content that doesn't just look good—it performs. From high-energy commercials to emotional brand stories, we handle it all.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <VideoGrid />

      {/* Services Brief */}
      <section className="py-24 px-6 bg-neutral-50/5 dark:bg-neutral-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Commercial Production", desc: "TV and Social Media ads that convert." },
              { title: "AI-Enhanced Video", desc: "Generative AI video content for rapid conceptualization." },
              { title: "Brand Documentary", desc: "Long-form storytelling for brand identity." }
            ].map((s, i) => (
              <div key={i} className="p-8 border border-neutral-800 rounded-2xl hover:bg-neutral-800/50 transition-colors">
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-neutral-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to create?</h2>
        <a href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
          Start a Project
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-800 text-center text-neutral-500">
        <p>&copy; {new Date().getFullYear()} MC PRIME. All rights reserved.</p>
      </footer>
    </div>
  );
}
