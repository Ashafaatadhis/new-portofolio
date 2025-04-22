"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Spotlight } from "@/components/ui/spotlight";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export function CTASection() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // atau skeleton/placeholder

  return (
    <section
      id="cta"
      className="min-h-screen flex items-center justify-center relative"
    >
      <Spotlight
        className="top-0 left-0 md:-top-20 md:left-60"
        fill={theme === "dark" ? "white" : "black"}
      />
      {/* <BackgroundBeams /> */}
      <GridPattern />
      <div className="absolute  inset-0 bottom-[40%] bg-gradient-to-b from-background/80 via-background/40 to-transparent" />
      <div className="absolute inset-0 top-[40%] bg-gradient-to-t from-background/80 via-background/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className=" rounded-3xl z-10 p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Let&apos;s collaborate and turn your ideas into reality. Whether you
          need a website, web application, or technical consultation, I&apos;m
          here to help.
        </p>
        <Link href="#contact">
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
