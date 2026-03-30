import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-accent text-lg text-gold italic mb-2">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-dark-surface border border-gold/20 rounded-sm px-5 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-dark-surface border border-gold/20 rounded-sm px-5 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-dark-surface border border-gold/20 rounded-sm px-5 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full gold-gradient text-dark font-body font-semibold text-sm tracking-widest uppercase py-4 rounded-sm hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-gold mt-1" />
              <div>
                <p className="font-display text-primary-foreground font-semibold">Phone</p>
                <p className="font-body text-sm text-primary-foreground/60">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-gold mt-1" />
              <div>
                <p className="font-display text-primary-foreground font-semibold">Email</p>
                <p className="font-body text-sm text-primary-foreground/60">info@summerdreams.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-gold mt-1" />
              <div>
                <p className="font-display text-primary-foreground font-semibold">Address</p>
                <p className="font-body text-sm text-primary-foreground/60">123 Luxury Avenue, Marbella, Spain</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-colors duration-300"
                >
                  <Icon size={18} className="text-gold" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
