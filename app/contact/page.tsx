export default function Contact() {
    return (
        <div className="min-h-screen py-32 px-6 container mx-auto max-w-4xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Get in Touch</h1>
            <p className="text-xl text-neutral-400 text-center mb-16">
                Let's discuss your next project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <p className="text-neutral-400">hello@mcprime.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Studio</h3>
                        <p className="text-neutral-400">
                            123 Creative Blvd<br />
                            Los Angeles, CA 90012
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Socials</h3>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white text-neutral-400 trasition-colors">Instagram</a>
                            <a href="#" className="hover:text-white text-neutral-400 trasition-colors">Twitter</a>
                            <a href="#" className="hover:text-white text-neutral-400 trasition-colors">LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded p-4 outline-none focus:border-white transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded p-4 outline-none focus:border-white transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            rows={4}
                            className="w-full bg-neutral-900 border border-neutral-800 rounded p-4 outline-none focus:border-white transition-colors"
                            placeholder="Tell us about your project..."
                        />
                    </div>
                    <button className="w-full bg-white text-black font-bold py-4 rounded hover:bg-neutral-200 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
