"use client";

const stats = [
  { value: "10,000+", label: "Professionals Trained" },
  { value: "500+", label: "Industry Mentors" },
  { value: "200+", label: "Enterprise Clients" },
  { value: "95%", label: "Completion Rate" },
];

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent opacity-95" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            Enterprise Learning Platform
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Next-Gen Expertise for Your{" "}
            <span className="text-accent">Enterprise</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Cultivate high-performance teams through expert learning. Partner
            with world-class institutions to deliver measurable skill development
            at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors text-center"
            >
              Book a Consultation
            </a>
            <a
              href="#domains"
              className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              Explore Domains
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10"
            >
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
