const faqs = [
  {
    question:
      "What types of corporate training programs does Accredian offer?",
    answer:
      "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
  },
  {
    question: "What domain specializations are available?",
    answer:
      "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
  },
  {
    question: "How are the programs delivered?",
    answer:
      "Programs are delivered through a blend of live instructor-led sessions, self-paced modules, hands-on projects, and cohort-based learning to ensure maximum engagement and retention.",
  },
  {
    question: "Can programs be customized for our organization?",
    answer:
      "Absolutely. Every program can be tailored to your industry context, technology stack, skill gaps, and strategic business objectives. Our L&D consultants work closely with your team.",
  },
  {
    question: "What certifications will employees receive?",
    answer:
      "Participants receive industry-recognized certifications from partner institutions including IITs, IIMs, and global universities, adding credible credentials to their professional profiles.",
  },
  {
    question: "How do you measure ROI and learning outcomes?",
    answer:
      "We provide real-time analytics dashboards tracking completion rates, skill assessments, engagement metrics, and business impact reports to demonstrate measurable ROI.",
  },
];

export default function FAQ() {
  return (
    <section id="faqs" className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-surface rounded-xl border border-border overflow-hidden"
            >
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-surface-alt transition-colors">
                <span className="text-sm font-semibold text-primary pr-4">
                  {faq.question}
                </span>
                <svg
                  className="w-5 h-5 text-muted group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-sm text-muted leading-relaxed border-t border-border pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
