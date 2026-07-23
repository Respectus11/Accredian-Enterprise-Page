const pillars = [
  {
    letter: "C",
    title: "Comprehensive Assessment",
    description:
      "Deep analysis of current skill levels, business objectives, and organizational readiness to create a data-driven learning roadmap.",
    color: "from-blue-500 to-blue-600",
  },
  {
    letter: "A",
    title: "Aligned Curriculum",
    description:
      "Programs co-designed with IITs, IIMs, and industry experts — directly mapped to your strategic priorities and tech stack.",
    color: "from-accent to-accent-dark",
  },
  {
    letter: "T",
    title: "Transformative Delivery",
    description:
      "Blended learning with live sessions, hands-on projects, and mentorship that drives measurable skill transformation.",
    color: "from-emerald-500 to-emerald-600",
  },
];

export default function CATFramework() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Our Framework
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Strategic Skill Enhancement
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            The CAT Framework — a proven methodology that ensures every learning
            initiative delivers tangible business value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.letter}
              className="bg-white rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}
              >
                <span className="text-3xl font-bold text-white">
                  {pillar.letter}
                </span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
