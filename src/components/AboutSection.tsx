import { motion } from "framer-motion";
import { Code2, Trophy, Briefcase, Layers } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "7+" },
  { icon: Trophy, label: "Gold Medalist", value: "BSCS" },
  { icon: Code2, label: "Tech Stacks", value: "10+" },
  { icon: Layers, label: "Projects Delivered", value: "20+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a results-driven Full Stack Developer with over 7 years of experience 
                building scalable, high-performance web applications. My expertise spans 
                across modern frameworks like React, Angular, Vue.js, and Next.js on the 
                frontend, paired with robust backend technologies including Node.js, Python, 
                PHP/Laravel, and cloud platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've worked on diverse projects—from AI-powered SaaS platforms and 
                analytics tools to e-commerce systems and real-time applications. 
                I'm passionate about writing clean, maintainable code and delivering 
                solutions that make a real impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-3" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
