"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Streaming Locator",
    description:
      "Helps users quickly find where a movie or TV show is streaming across major platforms.",
    image: "/streaming.png",
    liveUrl: "https://sifrult.github.io/streaming_locator/",
    githubUrl: "https://github.com/sifrult/streaming_locator",
  },
  {
    id: 2,
    title: "Cozy Book Club",
    description:
      "A personal reading tracker that lets users search for books and organize them into reading lists.",
    image: "/book.png",
    liveUrl: "https://brenda255.github.io/cozy-book-club/",
    githubUrl: "https://github.com/brenda255/cozy-book-club",
  },
  {
    id: 3,
    title: "Ollisanders",
    description:
      "A collaborative e-commerce site for a fictional wand store, built with Stripe integration for payments.",
    image: "/ollisander.png",
    liveUrl: "https://wizard-wands-production.up.railway.app/",
    githubUrl: "https://github.com/Ksteed8859/wizard-wands",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather app that shows current conditions and a 5-day forecast based on user-searched cities.",
    image: "/weather.png",
    liveUrl: "https://brenda255.github.io/weather-dashboard/",
    githubUrl: "https://github.com/brenda255/weather-dashboard",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
            />{" "}
			
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  View Project
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  {" "}
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
