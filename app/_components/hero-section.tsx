"use client";

import { GridPattern } from "@/components/magicui/grid-pattern";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { Available } from "./ui/available";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center  relative"
    >
      {/* <BackgroundBeams /> */}
      <GridPattern />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />

      <div className="text-center relative z-10">
        <Available />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-5"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4">
            Hi, I&apos;m Adhis
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8">
            Full Stack Developer | Web Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-4"
        >
          {[
            { Icon: GithubIcon, href: "https://github.com/ashafaatadhis" },
            {
              Icon: LinkedinIcon,
              href: "https://id.linkedin.com/in/adhis-mauliyahsa-ashafaat-2446781bb",
            },
            { Icon: MailIcon, href: "mailto:ashafaatadhis@gmail.com" },
          ].map(({ Icon, href }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 text-foreground hover:text-background bg-background/20 hover:bg-foreground transition-all duration-300 rounded-xl"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
