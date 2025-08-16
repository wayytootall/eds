"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "Repostur",
    url: "https://repostur.com",
    image: "/portfolio/reposturss.png",
    description: "Repostur is like a magic helper that turns one long blog or post into cool Twitter threads, LinkedIn posts, and Instagram cards—so you can share everywhere fast and without getting tired",
  },
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
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-secondary-100 hover:border-primary-300 card-hover flex flex-col overflow-hidden transition-all duration-300"
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
    </section>
  );
}
