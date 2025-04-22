"use client";

import { Container } from "./ui/container";

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © 2025 Adhis. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
