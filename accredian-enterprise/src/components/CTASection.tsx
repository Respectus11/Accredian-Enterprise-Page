export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-light to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Start Your Enterprise Learning Journey Today
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join 200+ enterprises that trust Accredian to upskill their workforce
          with measurable results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            Book a Free Consultation
          </a>
          <a
            href="#domains"
            className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
