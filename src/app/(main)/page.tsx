"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconExternalLink({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconLightbulb({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
}

function IconRocket({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconTrophy({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 21 12 21 16 21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 4H17L17 11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11Z" />
      <path d="M17 5h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
      <path d="M7 5H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const benefits = [
  {
    icon: IconRocket,
    title: "Real Innovation Work",
    desc: "Develop product and service concepts based on leading companies' actual challenges.",
    accent: true,
  },
  {
    icon: IconUsers,
    title: "Expert Cohort",
    desc: "Work alongside highly driven professionals from tech, business, and social sciences.",
  },
  {
    icon: IconTrophy,
    title: "Career Launchpad",
    desc: "New jobs, new businesses, new success stories, with IPR arrangements that benefit you.",
  },
  {
    icon: IconLightbulb,
    title: "Validated Concepts",
    desc: "Create new product and service concepts with validated market demand.",
  },
  {
    icon: IconUsers,
    title: "Continuous Coaching",
    desc: "Get coached by Demola experts, partner companies, and fellow teams throughout.",
  },
  {
    icon: IconLightbulb,
    title: "Keep Your Benefits",
    desc: "Participate without losing earnings-related unemployment allowance or other benefits.",
  },
];

const applicationDeadline = { label: "Application Deadline", icon: IconClock, desc: "Apply solo or bring your team." };

const timeline = [
  { label: "Kick-off", icon: IconRocket, desc: "Meet your team and company challenge." },
  { label: "Individual Team Work with Coaches", icon: IconLightbulb, desc: "Work hands-on with your team, guided by Demola coaches and partner company mentors." },
  { label: "Mid-event", icon: IconUsers, desc: "Present your progress and pivot if needed." },
  { label: "Finals", icon: IconTrophy, desc: "Demo day: show what you've built." },
];

type City = "Oulu" | "Jyväskylä" | "Riihimäki";

const cityProjects: Record<City, { title: string; category: string; desc: string; deadline: string }[]> = {
  Oulu: [
    {
      title: "Making the City Alive",
      category: "Human Beings in the Modern World",
      desc: "Develop mobile and XR experiences that reveal real-time urban activities and bring city life to the surface.",
      deadline: "29 Mar 2026",
    },
    {
      title: "Wearable Tech for Stress Detection",
      category: "Future of Work",
      desc: "Design wearable solutions that monitor stress levels for emergency professionals in high-pressure environments.",
      deadline: "26 Apr 2026",
    },
    {
      title: "Digital Demining",
      category: "Byte-powered Future",
      desc: "Tackle the global humanitarian challenge of landmine detection using innovative digital and AI-driven approaches.",
      deadline: "26 Apr 2026",
    },
  ],
  Jyväskylä: [
    {
      title: "Edge AI in Vehicles",
      category: "Byte-powered Future",
      desc: "Build adaptive in-car features powered by edge AI that respond intelligently to driver behaviour and environment.",
      deadline: "26 Apr 2026",
    },
    {
      title: "Making the City Alive",
      category: "Human Beings in the Modern World",
      desc: "Develop mobile and XR experiences that reveal real-time urban activities and bring city life to the surface.",
      deadline: "29 Mar 2026",
    },
    {
      title: "Dynamic Art for Citizens",
      category: "Human Beings in the Modern World",
      desc: "Create reactive urban lighting systems that turn public spaces into living, breathing canvases for the city.",
      deadline: "26 Apr 2026",
    },
  ],
  Riihimäki: [],
};

const parseDeadline = (str: string): Date => {
  // "29 Mar 2026" -> reliable Date
  const [day, month, year] = str.split(" ");
  return new Date(`${month} ${day}, ${year}`);
};

const getNextDeadline = (): { city: string; date: string } | null => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let nearest: { city: string; date: string; ts: number } | null = null;
  for (const [city, projects] of Object.entries(cityProjects)) {
    for (const project of projects) {
      const d = parseDeadline(project.deadline);
      if (d >= today && (!nearest || d.getTime() < nearest.ts)) {
        nearest = { city, date: project.deadline, ts: d.getTime() };
      }
    }
  }
  return nearest ? { city: nearest.city, date: nearest.date } : null;
};

const categoryColors: Record<string, string> = {
  "Human Beings in the Modern World": "text-pink-300 bg-pink-400/10 border-pink-400/20",
  "Byte-powered Future": "text-amber-300 bg-amber-400/10 border-amber-400/20",
  "Future of Work": "text-sky-300 bg-sky-400/10 border-sky-400/20",
  "Value Creators of Tomorrow": "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
};

export default function FelpPage() {
  const [activeCity, setActiveCity] = useState<City>("Oulu");

  return (
  <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0">
        <Image src="/assets/hero-bg.jpg" alt="FELP event hero" fill className="object-cover opacity-55" quality={85} />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-base font-semibold uppercase tracking-[0.3em] text-pink-400 md:text-lg font-lato"
        >
          Demola Future Expert Launchpad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-8 text-5xl leading-[0.95] font-black drop-shadow-[0_0_40px_rgba(244,114,182,0.45)] md:text-7xl lg:text-8xl font-poppins"
        >
          YOU ARE FINLAND&apos;S
          <br />
          <span className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text text-transparent">MOST IMPORTANT</span>
          <br />
          ASSET.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl font-lato"
        >
          8 weeks. Co-create with industry-leading companies. Your expertise unleashed. Join an elite cohort
          of innovation professionals and build what comes next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://portal.demola.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_40px_-8px_rgba(244,114,182,0.8)] transition hover:bg-pink-400 font-poppins"
          >
            Apply Now <IconArrowRight className="ml-2 h-5 w-5" />
          </a>
          {(() => {
            const next = getNextDeadline();
            return next ? (
              <span className="flex items-center gap-1.5 text-sm text-zinc-400 font-lato">
                <IconClock className="h-4 w-4 shrink-0" />
                <span>
                  <span className="font-semibold uppercase tracking-wider text-zinc-300">Next deadline</span>
                  {" · "}
                  <span className="text-pink-300">{next.city}</span>
                  {" · "}
                  {next.date}
                </span>
              </span>
            ) : null;
          })()}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-zinc-500/40 pt-2">
          <div className="h-1.5 w-1.5 rounded-full bg-pink-400" />
        </div>
      </motion.div>
    </section>

    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-2xl leading-relaxed font-light text-zinc-100/90 md:text-4xl font-lato"
        >
          Finland is in the middle of a transition. The old sources of growth no longer carry us. Markets are
          cautious. Competition is accelerating.
          <span className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text font-semibold text-transparent">
            {" "}
            The world won&apos;t wait for us to find the next direction at our own pace.
          </span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={1}
          className="mt-12 text-xl leading-relaxed text-zinc-300 md:text-2xl font-lato"
        >
          That&apos;s why we need concrete action now: action that builds, not talks. Demola brings together
          growth and innovation driven organizations and top talent who won&apos;t settle for standing by.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={2}
          className="mt-10 text-4xl font-black uppercase tracking-tight md:text-6xl font-poppins"
        >
          That&apos;s why we need{" "}
          <span className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text text-transparent">
            you!
          </span>
        </motion.p>
      </div>
    </section>

    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 text-center text-4xl font-black md:text-6xl font-poppins"
        >
          Why should you join FELP?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mx-auto mb-16 max-w-xl text-center text-xl font-semibold tracking-wide text-zinc-400 uppercase md:text-2xl font-lato"
        >
          Drive matters more than status.
        </motion.p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.35}
              className={`group relative rounded-2xl border border-zinc-800 p-8 transition-all duration-500 hover:border-pink-400/60 hover:shadow-[0_0_30px_-10px_rgba(244,114,182,0.75)] ${
                item.accent ? "bg-zinc-900 md:col-span-2 lg:col-span-1" : "bg-zinc-900/70"
              }`}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-400/15 text-pink-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold font-poppins">{item.title}</h3>
              <p className="leading-relaxed text-zinc-400 font-lato">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/8 to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-black md:text-6xl font-poppins"
        >
          8 weeks to <span className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text text-transparent">launch</span>
        </motion.h2>

        {/* Application Deadline — separate callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 flex items-center gap-6 rounded-2xl border border-amber-400/25 bg-amber-400/5 px-6 py-5 md:gap-10"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-amber-400/50 bg-zinc-900 text-amber-300">
            <applicationDeadline.icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-lato">Before you begin</p>
            <h3 className="mt-0.5 text-2xl font-bold font-poppins">{applicationDeadline.label}</h3>
            <p className="mt-1 text-zinc-400 font-lato">{applicationDeadline.desc}</p>
          </div>
        </motion.div>

        {/* Simple connector from deadline to the programme */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-2 ml-7 flex flex-col items-center"
        >
          <div className="h-10 w-px bg-gradient-to-b from-amber-400/30 to-transparent" />
        </motion.div>

        {/* 8-week programme label — clearly sits above Kick-off */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-zinc-800" />
          <span className="rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-pink-300 font-lato">
            8-week programme
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
        </motion.div>

        {/* Kick-off → Individual work → Mid-event → Finals */}
        {timeline.map((item, i) => (
          <motion.div
            key={item.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i * 0.35}
            className="flex items-start gap-6 md:gap-10"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-pink-400/60 bg-zinc-900 text-pink-300">
                <item.icon className="h-6 w-6" />
              </div>
              {i < timeline.length - 1 && <div className="h-16 w-px bg-gradient-to-b from-pink-400/40 to-transparent" />}
            </div>
            <div className="pb-12">
              <h3 className="text-2xl font-bold font-poppins">{item.label}</h3>
              <p className="mt-1 text-zinc-400 font-lato">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 text-center text-4xl font-black md:text-6xl font-poppins"
        >
          Projects near you
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mx-auto mb-12 max-w-xl text-center text-lg text-zinc-400 font-lato"
        >
          Pick your city and explore what you could be building.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="mb-10 flex justify-center gap-3"
        >
          {(["Oulu", "Jyväskylä", "Riihimäki"] as City[]).map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setActiveCity(city)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 font-poppins ${
                activeCity === city
                  ? "bg-pink-500 text-white shadow-[0_0_20px_-4px_rgba(244,114,182,0.7)]"
                  : "border border-zinc-700 text-zinc-400 hover:border-pink-400/50 hover:text-zinc-200"
              }`}
            >
              {city}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {cityProjects[activeCity].length > 0 ? (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {cityProjects[activeCity].map((project) => (
                  <div
                    key={project.title}
                    className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all duration-300 hover:border-pink-400/40 hover:shadow-[0_0_25px_-10px_rgba(244,114,182,0.6)]"
                  >
                    <span
                      className={`mb-4 inline-block self-start rounded-full border px-3 py-1 text-xs font-semibold font-lato ${
                        categoryColors[project.category] ?? "text-zinc-400 bg-zinc-800 border-zinc-700"
                      }`}
                    >
                      {project.category}
                    </span>
                    <h3 className="mb-3 text-lg font-bold leading-snug font-poppins">{project.title}</h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400 font-lato">{project.desc}</p>
                    {(() => {
                      const next = getNextDeadline();
                      return (
                        <div className="flex items-center justify-between gap-3">
                          {next && (
                            <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-lato">
                              <IconClock className="h-3.5 w-3.5 shrink-0" />
                              <span>
                                <span className="font-semibold uppercase tracking-wider text-zinc-400">Next deadline</span>
                                {" · "}
                                <span className="text-pink-300">{next.city}</span>
                                {" · "}
                                {next.date}
                              </span>
                            </span>
                          )}
                          <a
                            href="https://portal.demola.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto flex shrink-0 items-center gap-1 text-xs font-semibold text-pink-400 transition hover:text-pink-300 font-poppins"
                          >
                            Apply <IconExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      );
                    })()}
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 py-16 text-center">
                <p className="text-lg font-semibold text-zinc-300 font-poppins">Projects coming soon to Riihimäki!</p>
                <p className="mt-2 text-sm text-zinc-500 font-lato">Check the portal for the latest listings.</p>
                <a
                  href="https://portal.demola.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-pink-400/50 hover:text-pink-300 font-poppins"
                >
                  Browse all projects <IconExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="mt-10 text-center"
        >
          <a
            href="https://portal.demola.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-pink-300 font-lato"
          >
            See all projects on the portal <IconExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>

    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 text-4xl leading-tight font-black md:text-6xl lg:text-7xl font-poppins"
        >
          Build with focus.
          <br />
          Build with courage.
          <br />
          <span className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text text-transparent">Build what&apos;s next.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mx-auto mb-12 max-w-xl text-xl text-zinc-400 font-lato"
        >
          Since 2008, Demola has facilitated nearly 10,000 projects and professionals reach their potential. Now it&apos;s your turn.
        </motion.p>
        <motion.a
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          href="https://portal.demola.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-pink-500 px-10 py-5 text-lg font-bold text-white shadow-[0_0_40px_-8px_rgba(244,114,182,0.8)] transition hover:bg-pink-400 font-poppins"
        >
          Apply Now <IconArrowRight className="ml-2 h-5 w-5" />
        </motion.a>
      </div>
    </section>

    <section className="border-t border-zinc-800 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-zinc-500 font-lato"
        >
          In Collaboration with
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          <img
            src="https://www.businessoulu.com/app/uploads/sites/8/2023/03/BusinessOulu_logo_rgb_white.svg"
            alt="BusinessOulu"
            className="h-10 w-auto opacity-70 transition hover:opacity-100"
          />
          <img
            src="https://www.riihimaki.fi/uploads/2021/04/8e61f827-riihimaki_neg_rgb.svg"
            alt="City of Riihimäki"
            className="h-10 w-auto opacity-70 transition hover:opacity-100"
          />
          <img
            src="https://www.jyvaskyla.fi/themes/custom/jyvaskyla/images/jyvaskyla-logo.png"
            alt="City of Jyväskylä"
            className="h-10 w-auto opacity-70 brightness-0 invert transition hover:opacity-100"
          />
        </motion.div>
      </div>
    </section>

    <footer className="border-t border-zinc-800 px-6 py-10">
      <div className="mx-auto max-w-4xl text-center">
        <a
          href="https://demola.net/futureexpert"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-pink-300 transition hover:text-pink-200 hover:underline font-lato"
        >
          demola.net/futureexpert
        </a>
        <p className="mt-2 text-sm text-zinc-500 font-lato">© {new Date().getFullYear()} Demola. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}
