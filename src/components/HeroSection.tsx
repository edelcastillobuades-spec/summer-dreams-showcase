import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Luxury beachfront property"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-dark/60" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <img
          src={logo}
          alt="Summer Dreams Logo"
          className="mx-auto mb-8 h-28 w-28 object-contain animate-fade-up"
        />
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-tight mb-4 animate-fade-up">
          Summer Dreams
        </h1>
        <p className="font-accent text-xl md:text-2xl text-gold italic mb-2 animate-fade-in-delay">
          Your Dream Stay Awaits
        </p>
        <p className="font-body text-sm md:text-base text-primary-foreground/70 tracking-widest uppercase mb-10 animate-fade-in-delay-2">
          Luxury Vacation Apartments
        </p>
        <a
          href="#apartamentos"
          className="inline-block gold-gradient text-dark font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 animate-fade-in-delay-2"
        >
          View Apartments
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
