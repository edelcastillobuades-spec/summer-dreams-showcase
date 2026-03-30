import { Wifi, Sparkles, Waves, Car, Wind, UtensilsCrossed, ShieldCheck, Phone } from "lucide-react";

const services = [
  { icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected with complimentary fiber-optic internet." },
  { icon: Sparkles, title: "Daily Cleaning", desc: "Professional housekeeping to keep your space pristine." },
  { icon: Waves, title: "Swimming Pool", desc: "Enjoy our heated pools with panoramic views." },
  { icon: Car, title: "Private Parking", desc: "Secure underground parking for all guests." },
  { icon: Wind, title: "Air Conditioning", desc: "Climate control for year-round comfort." },
  { icon: UtensilsCrossed, title: "Gourmet Kitchen", desc: "Fully equipped kitchens with premium appliances." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Round-the-clock security for your peace of mind." },
  { icon: Phone, title: "Concierge", desc: "Personal concierge service for any request." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-accent text-lg text-gold italic mb-2">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-dark mb-4">Our Services</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-card p-6 rounded-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-dark mb-4 group-hover:gold-gradient transition-all duration-300">
                <s.icon size={24} className="text-gold group-hover:text-dark transition-colors duration-300" />
              </div>
              <h3 className="font-display text-sm font-semibold text-dark mb-2">{s.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
