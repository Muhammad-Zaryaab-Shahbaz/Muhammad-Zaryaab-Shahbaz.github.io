import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Replug",
    description: "URL shortener and link management platform with advanced analytics, retargeting pixels, and branded links for marketing teams.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
  },
  {
    title: "ContentIdeas",
    description: "AI-powered content ideation tool that helps marketers generate topic ideas, headlines, and content strategies using NLP.",
    tech: ["Next.js", "Python", "TensorFlow", "MongoDB", "OpenAI"],
  },
  {
    title: "e-CRM",
    description: "Enterprise customer relationship management system with automated workflows, lead scoring, and reporting dashboards.",
    tech: ["Angular", "Laravel", "MySQL", "Docker", "ElasticSearch"],
  },
  {
    title: "Usermaven",
    description: "Privacy-friendly web analytics platform providing real-time insights, user tracking, and conversion funnels without cookies.",
    tech: ["Vue.js", "Node.js", "ClickHouse", "Redis", "Docker"],
  },
  {
    title: "Myiceberg",
    description: "Social media analytics and competitor analysis tool with AI-driven insights for Instagram and Twitter growth strategies.",
    tech: ["React", "Python", "MongoDB", "GraphQL", "AWS"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs font-mono text-primary/80 bg-primary/5 rounded border border-primary/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
