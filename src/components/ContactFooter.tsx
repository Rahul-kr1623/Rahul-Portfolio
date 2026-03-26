import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, ArrowUpRight, Phone } from "lucide-react";

export function ContactFooter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const FORMSPREE_URL = "https://formspree.io/f/xbdpljed";

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Error connecting to the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-card/40">
      <div className="max-w-6xl mx-auto pl-10 md:pl-16 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mono text-accent-blue text-sm tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-body-text max-w-xl leading-relaxed">
            Open to internships, collaborations, and frontend roles.
            Drop me a message — I typically reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-accent-blue" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">Location</p>
                <p className="text-sm text-body-text">VIT Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-accent-blue" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">Email</p>
                <a href="mailto:rahulkr23082006@gmail.com" className="text-sm text-accent-blue hover:underline">
                  rahulkr23082006@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-accent-blue" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">Phone</p>
                <a href="tel:+919129484479" className="text-sm text-accent-blue hover:underline">
                  +91 9129484479
                </a>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-semibold text-heading mb-4">Follow me</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/Rahul-kr1623" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rahulkumar-web" },
                  { icon: Mail, label: "Email", href: "mailto:rahulkr23082006@gmail.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl glass border border-border text-body-text hover:text-accent-blue transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-heading mb-1.5">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl glass border border-border bg-transparent text-sm text-heading focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-heading mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl glass border border-border bg-transparent text-sm text-heading focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-heading mb-1.5">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl glass border border-border bg-transparent text-sm text-heading focus:ring-2 focus:ring-primary transition-all resize-none"
              />
            </div>

            <motion.button
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-blue transition-all hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : sent ? "✓ Message Sent!" : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="mono text-xs text-body-text">
            © 2026 <span className="text-accent-blue">Rahul Kumar</span> — Built with React &amp; Tailwind
          </p>
          <a href="#home" className="flex items-center gap-1.5 text-xs font-medium text-body-text hover:text-accent-blue transition-colors">
            Back to top <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}