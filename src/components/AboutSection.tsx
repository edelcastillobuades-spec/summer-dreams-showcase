import { Award, Heart, Shield, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "10,000+", label: "Happy Guests" },
  { icon: Shield, value: "100%", label: "Verified Properties" },
  { icon: Heart, value: "98%", label: "Satisfaction Rate" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-accent text-lg text-gold italic mb-2">Who We Are</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">About Summer Dreams</h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto mb-8" />
          <p className="font-body text-primary-foreground/70 leading-relaxed text-base md:text-lg">
            For over 15 years, Summer Dreams has curated an exclusive collection of luxury vacation apartments
            in the world's most desirable destinations. We believe every traveler deserves an extraordinary
            experience — from the moment they book to the moment they leave. Our commitment to quality,
            professionalism, and personalized service sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 mb-4 group-hover:bg-gold/10 transition-colors duration-300">
                <stat.icon size={28} className="text-gold" />
              </div>
              <p className="font-display text-2xl md:text-3xl font-bold gold-text-gradient mb-1">{stat.value}</p>
              <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
