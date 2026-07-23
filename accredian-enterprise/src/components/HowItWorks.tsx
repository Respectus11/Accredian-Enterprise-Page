const steps = [
  {
    step: "01",
    title: "Skill Gap Analysis",
    description:
      "Our L&D consultants meet with your leadership team to map skill gaps, business objectives, and workforce requirements.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Customized Training Plan",
    description:
      "We co-design a curriculum with your academic partners — tailored to your industry, tech stack, and team's competency level.",
    icon: "📋",
  },
  {
    step: "03",
    title: "Flexible Program Delivery",
    description:
      "Your teams join structured cohorts with live sessions, mentorship, and hands-on capstone projects from day one.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            How We Deliver Results That Matter
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A Structured Three-Step Approach to Skill Development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-accent/30" />
              )}
              <div className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="text-3xl">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
