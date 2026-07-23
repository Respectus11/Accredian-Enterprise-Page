"use client";

import { useState } from "react";

const categories = [
  "All",
  "Program Specific",
  "Industry Specific",
  "Topic Specific",
  "Level Specific",
];

const courses = [
  {
    title: "Data Science & Analytics",
    category: "Topic Specific",
    level: "Intermediate",
    duration: "12 Weeks",
    credential: "IIT Certification",
    description:
      "Master data analytics, visualization, and statistical modeling for enterprise decision-making.",
  },
  {
    title: "Product Management Excellence",
    category: "Program Specific",
    level: "Advanced",
    duration: "16 Weeks",
    credential: "Executive Certificate",
    description:
      "End-to-end product strategy, discovery, roadmapping, and growth frameworks.",
  },
  {
    title: "Gen-AI for Business Leaders",
    category: "Topic Specific",
    level: "Beginner",
    duration: "8 Weeks",
    credential: "Professional Certificate",
    description:
      "Understand and leverage generative AI tools and strategies for business transformation.",
  },
  {
    title: "Leadership in Digital Age",
    category: "Level Specific",
    level: "Senior Leadership",
    duration: "10 Weeks",
    credential: "IIM Certification",
    description:
      "Strategic leadership, change management, and organizational transformation.",
  },
  {
    title: "Cloud Architecture & DevOps",
    category: "Topic Specific",
    level: "Advanced",
    duration: "14 Weeks",
    credential: "Technical Certificate",
    description:
      "Design scalable cloud architectures and implement modern DevOps practices.",
  },
  {
    title: "Fintech & Digital Banking",
    category: "Industry Specific",
    level: "Intermediate",
    duration: "10 Weeks",
    credential: "Industry Certificate",
    description:
      "Explore payments, lending, blockchain, and regulatory frameworks in fintech.",
  },
  {
    title: "Machine Learning Operations",
    category: "Topic Specific",
    level: "Advanced",
    duration: "12 Weeks",
    credential: "Technical Certificate",
    description:
      "End-to-end ML lifecycle management, deployment, monitoring, and governance.",
  },
  {
    title: "Cybersecurity Strategy",
    category: "Industry Specific",
    level: "Intermediate",
    duration: "8 Weeks",
    credential: "Professional Certificate",
    description:
      "Enterprise security architecture, threat intelligence, and incident response.",
  },
];

export default function CourseSegmentation() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? courses
      : courses.filter((c) => c.category === active);

  return (
    <section id="courses" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Course Catalog
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Tailored Course Segmentation
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Explore Custom-fit Courses Designed to Address Every Professional
            Focus
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-accent text-white shadow-md"
                  : "bg-surface-alt text-muted hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((course) => (
            <div
              key={course.title}
              className="bg-surface rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  {course.level}
                </span>
                <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {course.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {course.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-medium text-accent">
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-3.02 1.302 2.47 1.061a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3z" />
                  <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z" />
                </svg>
                {course.credential}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
