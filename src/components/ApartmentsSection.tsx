import apt1 from "@/assets/apt1.jpg";
import apt2 from "@/assets/apt2.jpg";
import apt3 from "@/assets/apt3.jpg";
import apt4 from "@/assets/apt4.jpg";
import apt5 from "@/assets/apt5.jpg";
import apt6 from "@/assets/apt6.jpg";
import { MapPin } from "lucide-react";

const apartments = [
  { img: apt1, name: "Ocean Breeze Suite", price: 320, location: "Marbella, Spain", desc: "Stunning oceanfront suite with panoramic sea views and marble interiors." },
  { img: apt2, name: "Coastal Studio", price: 180, location: "Costa del Sol, Spain", desc: "Cozy beachfront studio perfect for couples, with a private balcony." },
  { img: apt3, name: "Skyline Penthouse", price: 550, location: "Miami, USA", desc: "Rooftop penthouse with infinity pool and breathtaking city views." },
  { img: apt4, name: "Mediterranean Villa", price: 420, location: "Ibiza, Spain", desc: "Rustic luxury villa with private garden and stone architecture." },
  { img: apt5, name: "Urban Loft", price: 250, location: "Barcelona, Spain", desc: "Designer loft with exposed brick, high ceilings, and natural light." },
  { img: apt6, name: "Tropical Retreat", price: 380, location: "Bali, Indonesia", desc: "Open-air tropical villa with plunge pool and palm tree surroundings." },
];

const ApartmentsSection = () => {
  return (
    <section id="apartamentos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-accent text-lg text-gold italic mb-2">Discover</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-dark mb-4">Our Apartments</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apt, i) => (
            <div
              key={i}
              className="group bg-card rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={apt.img}
                  alt={apt.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-dark/80 text-gold font-body text-sm font-semibold px-3 py-1 rounded-sm">
                  ${apt.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-dark mb-1">{apt.name}</h3>
                <p className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <MapPin size={14} className="text-gold" /> {apt.location}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{apt.desc}</p>
                <button className="w-full gold-gradient text-dark font-body font-semibold text-sm tracking-widest uppercase py-3 rounded-sm hover:scale-[1.02] hover:shadow-md transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentsSection;
