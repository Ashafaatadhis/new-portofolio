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
                      {categoryIcons[typedCategory]}
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

const categoryIcons = {
  Frontend: (
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
  ),
  Backend: (
    <path d="M21 3H3C1.9 3 1 3.9 1 5v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5zm0-3h9v2H5zm0 6h9v2H5zm14-3h-2V7h2v3zm0 3h-2v3h2v-3z" />
  ),
  Tools: (
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
  ),
  Other: (
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
  ),
};
