const domains = [
  {
    icon: "💡",
    title: "Product & Innovation Hub",
    description: "Drive product thinking and innovation culture across teams.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: "🤖",
    title: "Gen-AI Mastery",
    description: "Harness the power of generative AI for enterprise transformation.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: "🏆",
    title: "Leadership Elevation",
    description: "Develop next-gen leaders with strategic thinking and people skills.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: "💻",
    title: "Tech & Data Insights",
    description: "Build deep technical capabilities in data science, ML, and analytics.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: "⚙️",
    title: "Operations Excellence",
    description: "Optimize processes and drive operational efficiency at scale.",
    color: "from-rose-500 to-red-600",
  },
  {
    icon: "🌐",
    title: "Digital Enterprise",
    description: "Lead digital transformation with modern tech adoption strategies.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: "🏦",
    title: "Fintech Innovation Lab",
    description: "Explore cutting-edge financial technology and digital banking.",
    color: "from-violet-500 to-purple-600",
  },
];

export default function DomainExpertise() {
  return (
    <section id="domains" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Domain Expertise
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="group relative bg-white rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.color}`}
              />
              <div className="text-3xl mb-4">{domain.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {domain.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
