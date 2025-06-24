import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 text-white"
    >
      <RevealOnScroll>
        <div className="px-6 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {/* Contact Info */}
            <div className="text-left pt-6 h-full flex flex-col bg-black/95 rounded-xl p-6">
                <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                    Contact Info
                </h2>

                <div className="flex items-start gap-3">
                    <div className="p-3 rounded-full bg-black/40">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="pb-8">
                        <h4 className="font-medium">Email</h4>
                        <a
                            href="mailto:mdgarc67@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            mdgarc67@gmail.com
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                    <div className="p-3 rounded-full bg-black/40">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="font-medium">Location</h4>
                        <span className="text-muted-foreground">Houston, Texas</span>
                    </div>
                </div>

                {/* Social icons at the bottom, centered */}
                <div className="mt-10 pt-8 flex justify-center space-x-10">
                    <a
                        href="https://linkedin.com/in/manuel-de-garcia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition"
                    >
                        <FaLinkedin className="text-3xl" />
                        <span className="text-white">LinkedIn</span>
                    </a>
                    
                    <a
                        href="https://github.com/mdgarc22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition"
                    >
                        <FaGithub className="text-3xl" />
                        <span className="text-white">GitHub</span>
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-xl space-y-6 bg-black/95 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold">Get in Touch</h3>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                autoComplete="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-white/15 border border-white/10 rounded px-6 py-3 text-white transition focus:outline-none focus:border-white focus:bg-black/80"
              />

              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-white/15 border border-white/10 rounded px-6 py-3 text-white transition focus:outline-none focus:border-white focus:bg-black/80"
              />

              <textarea
                id="message"
                name="message"
                placeholder="Your Message..."
                autoComplete="off"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                required
                className="w-full bg-white/15 border border-white/10 rounded px-6 py-3 text-white transition focus:outline-none focus:border-white focus:bg-black/80"
              />

              <button
                type="submit"
                className="max-w-2xl bg-[var(--color-gold)] text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,.2)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};