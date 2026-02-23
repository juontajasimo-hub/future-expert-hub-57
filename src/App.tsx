import { motion } from "framer-motion";
import { ArrowRight, Clock, Lightbulb, MapPin, Rocket, Trophy, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
    icon: Rocket,
    title: "Real Innovation Work",
    desc: "Develop product and service concepts based on leading companies' actual challenges.",
    accent: true,
  },
  {
    icon: Users,
    title: "Expert Cohort",
    desc: "Work alongside highly driven professionals from tech, business, and social sciences.",
  },
  {
    icon: Lightbulb,
    title: "Validated Concepts",
    desc: "Create new product and service concepts with validated market demand.",
  },
  {
    icon: Trophy,
    title: "Career Launchpad",
    desc: "New jobs, new businesses, new success stories, with IPR arrangements that benefit you.",
  },
  {
    icon: Users,
    title: "Continuous Coaching",
    desc: "Get coached by Demola experts, partner companies, and fellow teams throughout.",
  },
  {
    icon: Lightbulb,
    title: "Keep Your Benefits",
    desc: "Participate without losing earnings-related unemployment allowance or other benefits.",
  },
];

const timeline = [
  { date: "March 13", label: "Application Deadline", icon: Clock, desc: "Apply solo or bring your team." },
  { date: "March 16", label: "Kick-off", icon: Rocket, desc: "Meet your team and company challenge." },
  { date: "March 30", label: "Mid-event", icon: Users, desc: "Present progress and pivot if needed." },
  { date: "May 11", label: "Finals", icon: Trophy, desc: "Demo day: show what you've built." },
];

const App = () => (
  <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="FELP event hero" className="h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-base font-semibold uppercase tracking-[0.3em] text-pink-400 md:text-lg"
        >
          Demola Future Expert Launchpad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-8 text-5xl leading-[0.95] font-black drop-shadow-[0_0_40px_rgba(244,114,182,0.45)] md:text-7xl lg:text-8xl"
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
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl"
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
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_40px_-8px_rgba(244,114,182,0.8)] transition hover:bg-pink-400"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <span className="text-sm text-zinc-400">Deadline: March 13, 2026</span>
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
          className="text-2xl leading-relaxed font-light text-zinc-100/90 md:text-4xl"
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
          className="mt-12 text-xl leading-relaxed text-zinc-300 md:text-2xl"
        >
          That&apos;s why we need concrete action now: action that builds, not talks. Demola brings together
          growth and innovation driven organizations and top talent who won&apos;t settle for standing by.
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
          className="mb-4 text-center text-4xl font-black md:text-6xl"
        >
          What FELP delivers
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mx-auto mb-16 max-w-xl text-center text-xl font-semibold tracking-wide text-zinc-400 uppercase md:text-2xl"
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
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="leading-relaxed text-zinc-400">{item.desc}</p>
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
          className="mb-16 text-center text-4xl font-black md:text-6xl"
        >
          8 weeks to <span className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text text-transparent">launch</span>
        </motion.h2>

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
              <p className="text-sm font-medium tracking-wider text-pink-300 uppercase">{item.date}</p>
              <h3 className="mt-1 text-2xl font-bold">{item.label}</h3>
              <p className="mt-1 text-zinc-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 text-4xl leading-tight font-black md:text-6xl lg:text-7xl"
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
          className="mx-auto mb-12 max-w-xl text-xl text-zinc-400"
        >
          Since 2008, Demola has turned market-validated potential into concrete concepts and demos. Now
          it&apos;s your turn.
        </motion.p>
        <motion.button
          type="button"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="inline-flex items-center rounded-full bg-pink-500 px-10 py-5 text-lg font-bold text-white shadow-[0_0_40px_-8px_rgba(244,114,182,0.8)] transition hover:bg-pink-400"
        >
          Apply Before March 13 <ArrowRight className="ml-2 h-5 w-5" />
        </motion.button>
      </div>
    </section>

    <section className="border-t border-zinc-800 px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex items-center gap-4">
          <MapPin className="h-6 w-6 text-pink-300" />
          <div>
            <p className="text-lg font-bold">Oulu, Finland</p>
            <p className="text-sm text-zinc-400">University of Oulu &amp; OAMK</p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="mb-1 text-sm text-zinc-400">Powered by</p>
          <p className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text text-2xl font-black text-transparent">
            DEMOLA
          </p>
        </div>
      </div>
    </section>

    <footer className="border-t border-zinc-800 px-6 py-10">
      <div className="mx-auto max-w-4xl text-center">
        <a
          href="https://demola.net/futureexpert"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-pink-300 transition hover:text-pink-200 hover:underline"
        >
          demola.net/futureexpert
        </a>
        <p className="mt-2 text-sm text-zinc-500">© {new Date().getFullYear()} Demola. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default App;
