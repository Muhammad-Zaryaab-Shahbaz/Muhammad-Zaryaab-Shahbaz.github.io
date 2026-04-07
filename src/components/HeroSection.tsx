import { motion } from "framer-motion";
import Terminal3D from "./Terminal3D";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary font-mono text-sm mb-3 tracking-wider">
              Hi, I'm
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Muhammad Zaryaab
              <span className="block text-primary glow-text">Shahbaz</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-light">
              Full Stack Developer
            </p>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              7+ years crafting scalable web applications with modern technologies. 
              Gold Medalist. Passionate about clean architecture and exceptional user experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right - 3D Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Terminal3D />
          </motion.div>
        </div>
      </div>

      {/* Gradient orb background */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection;
