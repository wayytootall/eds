"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    name: "WayTooTall",
    url: "https://waytootall.com",
    image: "/portfolio/waytootallss.png",
    description: "A bold, creative portfolio for a visual artist and designer, built for impact.",
  },
  {
    name: "Layna Maso",
    url: "https://laynamaso.com",
    image: "/portfolio/laynamasoss.png",
    description: "A personal brand site for a music journalist, focused on clarity and conversion.",
  },
  {
    name: "Hochatown.gov",
    url: "https://hochatown.gov",
    image: "/portfolio/hochatownss.png",
    description: "A fast, accessible government portal for the Hochatown community.",
  },
  {
    name: "Capital Disclosure",
    url: "https://capitaldisclosure.com",
    image: "/portfolio/capitaldisclosuress.png",
    description: "Capitol Disclosure is a woman owned firm specializing in federal lobbying compliance. We advise lobbying firms, corporations, trade associations, and other entities regarding compliance with the Lobbying Disclosure Act (LDA) and the Honest Leadership and Open Government Act of 2007 (HLOGA).",
  },
  {
    name: "Repostur",
    url: "https://repostur.com",
    image: "/portfolio/reposturss.png",
    description: "Repostur is like a magic helper that turns one long blog or post into cool Twitter threads, LinkedIn posts, and Instagram cards—so you can share everywhere fast and without getting tired",
  },
];

function PortfolioCarousel({ items }: { items: typeof projects }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((project, idx) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="min-w-0 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[32vw] xl:w-[24vw] max-w-[400px] mx-auto px-2 mr-8 last:mr-0 group bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-secondary-100 hover:border-primary-300 card-hover flex flex-col overflow-hidden transition-all duration-300"
              style={{ flex: "0 0 auto" }}
            >
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.name + ' screenshot'}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-secondary-600 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <span className="inline-block mt-auto text-primary-600 font-semibold group-hover:underline transition-all duration-300">
                  Visit Site &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-primary-200 to-accent-200 text-primary-700 rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
        aria-label="Previous"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-primary-200 to-accent-200 text-primary-700 rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
        aria-label="Next"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-white to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-primary-700 font-semibold text-sm mb-6">
            Our Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-secondary-900 mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Explore some of our recent projects—each one custom, fast, and designed to stand out.
          </p>
        </motion.div>
        <PortfolioCarousel items={projects} />
      </div>
    </section>
  );
}
