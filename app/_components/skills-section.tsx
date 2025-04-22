"use client";

import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillCategories {
  Frontend: string[];
  Backend: string[];
  Tools: string[];
  Other: string[];
}

interface CategoryColor {
  bg: string;
  border: string;
  text: string;
}

interface CategoryColors {
  Frontend: CategoryColor;
  Backend: CategoryColor;
  Tools: CategoryColor;
  Other: CategoryColor;
}

const skills: SkillCategories = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"],
  Tools: ["Git", "VS Code", "Figma", "Docker", "Postman"],
  Other: [
    "UI/UX Design",
    "Responsive Design",
    "SEO",
    "Performance Optimization",
  ],
};

const categoryColors: CategoryColors = {
  Frontend: {
    bg: "bg-blue-50/50 dark:bg-blue-950/50",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-600 dark:text-blue-400",
  },
  Backend: {
    bg: "bg-emerald-50/50 dark:bg-emerald-950/50",
    border: "border-emerald-200 dark:border-emerald-800",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  Tools: {
    bg: "bg-violet-50/50 dark:bg-violet-950/50",
    border: "border-violet-200 dark:border-violet-800",
    text: "text-violet-600 dark:text-violet-400",
  },
  Other: {
    bg: "bg-amber-50/50 dark:bg-amber-950/50",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-600 dark:text-amber-400",
  },
};

export function SkillsSection() {
  return (
    <Container>
      <section id="skills" className="py-10 relative">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-foreground/60 max-w-2xl mx-auto mb-10"
        >
          I specialize in full-stack development with a strong foundation in
          modern web technologies. Here&apos;s a comprehensive overview of my
          technical expertise and tools I work with daily.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => {
            const typedCategory = category as keyof CategoryColors;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={cn(
                  "relative bg-background/80 dark:bg-background/20 backdrop-blur-sm p-6 rounded-xl border-2 border-border transition-all duration-300"
                )}
              >
                <div className="absolute -top-6 left-5">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full border-[2px] border-dashed flex items-center justify-center",
                      categoryColors[typedCategory].bg,
                      categoryColors[typedCategory].border
                    )}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={cn(
                        "w-6 h-6",
                        categoryColors[typedCategory].text
                      )}
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 pt-2 text-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill: string) => {
                    return (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
