const edges = [
  {
    icon: "🎯",
    title: "Tailored Solutions",
    description:
      "Custom-designed programs aligned to your organization's unique skill gaps and strategic goals.",
  },
  {
    icon: "📊",
    title: "Industry Insights",
    description:
      "Leverage deep industry research and data-driven approaches to stay ahead of the curve.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Guidance",
    description:
      "Learn from 500+ industry practitioners with real-world experience across domains.",
  },
  {
    icon: "📈",
    title: "Measurable Impact",
    description:
      "Track progress with real-time analytics dashboards and ROI reporting from day one.",
  },
];

export default function AccreditianEdge() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Why Accredian
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            The Accredian Edge
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We combine academic excellence with industry relevance to deliver
            learning programs that drive real business outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {edges.map((edge) => (
            <div
              key={edge.title}
              className="group p-6 rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-surface"
            >
              <div className="text-4xl mb-4">{edge.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {edge.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {edge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
