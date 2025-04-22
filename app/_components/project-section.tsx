"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features modern UI/UX design and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.com",
  },
  {
    title: "Coming Soon",
    description: "An exciting new project is in development. Stay tuned!",
    tech: ["???"],
    image: "/coming-soon.png",
    github: "#",
    demo: "#",
  },
  {
    title: "Coming Soon",
    description: "An exciting new project is in development. Stay tuned!",
    tech: ["???"],
    image: "/coming-soon.png",
    github: "#",
    demo: "#",
  },
];

export function ProjectSection() {
  return (
    <Container>
      <section id="projects" className=" py-10 relative">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-foreground/60 max-w-2xl mx-auto mb-10"
        >
          Here are some of my recent projects that showcase my skills and
          experience. Each project reflects my passion for clean code and modern
          design principles.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="h-full"
            >
              <Card
                className={cn(
                  "border  backdrop-blur-sm transition-all duration-300 h-full",
                  project.title === "Coming Soon"
                    ? "opacity-50"
                    : "hover:border-black/20"
                )}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-transparent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        project.title === "Coming Soon"
                          ? "pointer-events-none"
                          : ""
                      }
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        project.title === "Coming Soon"
                          ? "pointer-events-none"
                          : ""
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
}
