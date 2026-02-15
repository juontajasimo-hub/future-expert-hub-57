import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Rocket, Lightbulb, Trophy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-sm font-medium text-primary mb-6"
          >
            Demola Future Expert Launchpad
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-8 glow-text"
          >
            YOU ARE FINLAND'S
            <br />
            <span className="text-gradient">MOST IMPORTANT</span>
            <br />
            ASSET.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            8 weeks. Real company challenges. Your expertise unleashed. 
            Join an elite cohort of innovation professionals and build what comes next.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="glow-primary text-lg px-8 py-6 rounded-full font-semibold">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <span className="text-sm text-muted-foreground">Deadline: March 13, 2026</span>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-2xl md:text-4xl font-light leading-relaxed text-foreground/90">
              Finland is in the middle of a transition. The old sources of growth no longer carry us. 
              Markets are cautious. Competition is accelerating.{" "}
              <span className="text-gradient font-semibold">
                The world won't wait for us to find the next direction at our own pace.
              </span>
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            className="mt-12"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              That's why we need concrete action now — action that builds, not talks. 
              Demola brings together growth-driven companies and top talent who won't settle for standing by.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Get - Bento Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-center mb-4"
          >
            What FELP delivers
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-center text-muted-foreground text-lg mb-16 max-w-xl mx-auto"
          >
            Drive matters more than status.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Rocket,
                title: "Real Innovation Work",
                desc: "Develop product & service concepts based on leading companies' actual challenges.",
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
                desc: "New jobs, new businesses, new success stories — with IPR arrangements that benefit you.",
              },
              {
                icon: Users,
                title: "Continuous Coaching",
                desc: "Coached by Demola's global experts, partner companies, and fellow teams throughout.",
              },
              {
                icon: Lightbulb,
                title: "Keep Your Benefits",
                desc: "Participate without losing earnings-related unemployment allowance or other benefits.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className={`group relative rounded-2xl border border-border p-8 transition-all duration-500 hover:border-primary/40 hover:glow-primary ${
                  item.accent ? "md:col-span-2 lg:col-span-1 bg-card" : "bg-card/50"
                }`}
              >
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-center mb-16"
          >
            8 weeks to{" "}
            <span className="text-gradient">launch</span>
          </motion.h2>

          <div className="space-y-0">
            {[
              { date: "March 13", label: "Application Deadline", icon: Clock, desc: "Apply solo or bring your team" },
              { date: "March 16", label: "Kick-off", icon: Rocket, desc: "Meet your team and company challenge" },
              { date: "March 30", label: "Mid-event", icon: Users, desc: "Present progress, pivot if needed" },
              { date: "May 11", label: "Finals", icon: Trophy, desc: "Demo day — show what you've built" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="flex gap-6 md:gap-10 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-primary/50 bg-card flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  {i < 3 && <div className="w-px h-16 bg-gradient-to-b from-primary/40 to-transparent" />}
                </div>
                <div className="pb-12">
                  <p className="text-sm font-medium text-primary uppercase tracking-wider">{item.date}</p>
                  <h3 className="text-2xl font-bold mt-1">{item.label}</h3>
                  <p className="text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Quote / CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8"
          >
            Build with focus.
            <br />
            Build with courage.
            <br />
            <span className="text-gradient">Build what's next.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            Since 2008, Demola has turned market-validated potential into concrete concepts and demos. 
            Now it's your turn.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Button size="lg" className="glow-primary text-lg px-10 py-7 rounded-full font-bold">
              Apply Before March 13 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Location & Partners */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <p className="font-bold text-lg">Oulu, Finland</p>
              <p className="text-muted-foreground text-sm">University of Oulu & OAMK</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-1">Powered by</p>
            <p className="text-2xl font-extrabold text-gradient">DEMOLA</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://demola.net/futureexpert"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            demola.net/futureexpert
          </a>
          <p className="text-muted-foreground text-sm mt-2">
            © {new Date().getFullYear()} Demola. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
