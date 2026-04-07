import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TryHackMe",
    period: "Nov 2022 – Present",
    achievements: [
      "Developed full-stack features using React, Node.js, and cloud services",
      "Implemented AI-powered features and optimized platform performance",
      "Collaborated with cross-functional teams on cybersecurity education tools",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Empower Associates",
    period: "May 2022 – Aug 2024",
    achievements: [
      "Built scalable web applications using React, Next.js, and Node.js",
      "Implemented RESTful APIs and GraphQL endpoints",
      "Optimized database queries improving response time by 40%",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "D4 Interactive",
    period: "Jun 2021 – Apr 2022",
    achievements: [
      "Developed enterprise-level applications with Angular and Laravel",
      "Integrated third-party APIs and payment gateways",
      "Led code reviews and mentored junior developers",
    ],
  },
  {
    role: "Software Engineer",
    company: "Silah Report",
    period: "Sep 2020 – May 2021",
    achievements: [
      "Built data-driven dashboards and analytics interfaces",
      "Implemented real-time data processing pipelines",
      "Worked with Python, Django, and PostgreSQL",
    ],
  },
  {
    role: "Web Developer",
    company: "VQode Solutions",
    period: "Aug 2019 – May 2020",
    achievements: [
      "Developed custom CMS and e-commerce solutions",
      "Created responsive UIs with Vue.js and TailwindCSS",
      "Managed deployment pipelines with Docker and AWS",
    ],
  },
  {
    role: "Junior Developer",
    company: "Smart Engineering",
    period: "Jul 2017 – Jul 2019",
    achievements: [
      "Built web applications using PHP/Laravel and jQuery",
      "Designed and optimized MySQL database schemas",
      "Delivered 15+ client projects across various industries",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col md:flex-row gap-4 mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10 shadow-[0_0_10px_hsl(168,76%,50%,0.4)]" />

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
