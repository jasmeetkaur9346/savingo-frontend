
import React, { useMemo } from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import {
  ShieldCheck,
  Wallet,
  LineChart,
  Cloud,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Lock,
  BadgeCheck,
  RefreshCcw,
  FileText,
  Globe,
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { delay: 0.06 * i, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  }),
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur">
        <Sparkles className="h-4 w-4 text-white/80" />
        <span className="font-medium">{eyebrow}</span>
      </div>
      <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
        {desc}
      </p>
    </div>
  )
}

function GlowButton({ children, href = "#", variant = "primary" }) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
  const primary =
    "bg-white text-slate-900 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:translate-y-[-1px] hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
  const ghost =
    "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25"

  return (
    <a href={href} className={cn(base, variant === "primary" ? primary : ghost)}>
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 translate-x-[260%] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-[420%]" />
      </span>
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  )
}

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur transition-transform duration-300 hover:translate-y-[-2px]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  )
}

function StatPill({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <div className="text-xs font-medium text-white/60">{label}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  )
}

function FAQItem({ q, a, i }) {
  return (
    <motion.details
      variants={fadeUp}
      custom={i}
      className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <summary className="cursor-pointer list-none select-none text-base font-semibold text-white/90">
        <div className="flex items-center justify-between gap-3">
          <span>{q}</span>
          <span className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all group-open:rotate-45">
            +
          </span>
        </div>
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-white/70">{a}</p>
    </motion.details>
  )
}

export default function SavingoLandingPage() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -140])
  const blob1 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 220])
  const blob2 = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -200])

  const features = useMemo(
    () => [
      {
        icon: Wallet,
        title: "Daily expenses and earnings",
        desc: "Add entries in seconds with clean categories and notes for every transaction.",
      },
      {
        icon: LineChart,
        title: "Clarity, not chaos",
        desc: "See spending patterns, income flow, and what you actually saved this month.",
      },
      {
        icon: Cloud,
        title: "Backup and restore",
        desc: "Keep your data safe with backup support and quick restore when switching phones.",
      },
      {
        icon: Globe,
        title: "Currency support",
        desc: "Track in your preferred currency with simple switching for travel or multi region use.",
      },
      {
        icon: RefreshCcw,
        title: "Fast and frictionless",
        desc: "Designed for speed on real life days, not for accountants with infinite patience.",
      },
      {
        icon: ShieldCheck,
        title: "Privacy first",
        desc: "Your money data stays yours. No weird sharing, no nonsense.",
      },
    ],
    []
  )

  const steps = useMemo(
    () => [
      {
        title: "Create your accounts",
        desc: "Set up salary, cash, wallet, or any account style that matches your real life.",
        icon: Smartphone,
      },
      {
        title: "Add income, then track spending",
        desc: "Quick add, notes on every entry, and clean history you can trust.",
        icon: FileText,
      },
      {
        title: "Review, adjust, save",
        desc: "Spot the leaks early and keep your monthly spending under control.",
        icon: LineChart,
      },
    ],
    []
  )

  const faqs = useMemo(
    () => [
      {
        q: "Is Savingo hard to use",
        a: "No. The UI is designed to be learned in minutes. Most users feel comfortable the same day.",
      },
      {
        q: "How is my data protected",
        a: "We focus on privacy by design. Use backup features when needed and keep your access protected with your phone security.",
      },
      {
        q: "Can I write notes on transactions",
        a: "Yes. Notes are built in so you always remember why that entry happened.",
      },
      {
        q: "Does it support multiple accounts",
        a: "Yes. Track separate accounts like salary, cash, savings, or anything you want.",
      },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_60%_80%,rgba(168,85,247,0.10),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.95))]" />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px] [background-position:0_0]" />
        </motion.div>

        <motion.div
          style={{ y: blob1 }}
          className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-emerald-500/18 blur-[70px]"
        />
        <motion.div
          style={{ y: blob2 }}
          className="absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-blue-500/16 blur-[80px]"
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              <span className="text-base font-black tracking-tight text-white">S</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">Savingo</div>
              <div className="text-xs text-white/60">Personal money tracking</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#how">
              How it works
            </a>
            <a className="hover:text-white" href="#screens">
              Screens
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 md:inline-flex"
            >
              Get the app
            </a>
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:translate-y-[-1px] hover:shadow-[0_16px_50px_rgba(0,0,0,0.45)] transition-all"
            >
              Download
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="relative"
            >
              <motion.div variants={fadeUp} custom={0}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                  <BadgeCheck className="h-4 w-4 text-white/80" />
                  <span>Built for real life spending</span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
              >
                Track expenses and earnings
                <span className="block">
                  <span className="bg-gradient-to-r from-emerald-300 via-white to-blue-300 bg-clip-text text-transparent">
                    without the mental mess
                  </span>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
              >
                Savingo helps you record daily spending and income, add notes, manage multiple accounts,
                and keep your money story clean and readable.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-3">
                <GlowButton href="#download">Download from Google Play</GlowButton>
                <GlowButton href="#features" variant="ghost">
                  Explore features
                </GlowButton>
              </motion.div>

              <motion.div variants={fadeUp} custom={4} className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                <StatPill label="Setup time" value="Under 2 min" />
                <StatPill label="Daily entry" value="10 sec" />
                <StatPill label="Focus" value="Clarity" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={5}
                className="mt-8 flex items-center gap-3 text-sm text-white/70"
              >
                <Lock className="h-4 w-4" />
                <span>Privacy focused design with backup support</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent blur-2xl" />
                <div className="relative rounded-[32px] border border-white/12 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur">
                  <div className="rounded-[28px] bg-slate-900/60 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-white/90">Savingo</div>
                      <div className="text-xs text-white/60">Today</div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs text-white/60">Income</div>
                        <div className="mt-2 text-xl font-semibold text-white">₹ 3,200</div>
                        <div className="mt-2 text-xs text-emerald-300/90">On track</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-xs text-white/60">Expense</div>
                        <div className="mt-2 text-xl font-semibold text-white">₹ 1,180</div>
                        <div className="mt-2 text-xs text-blue-300/90">Controlled</div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-white/90">Recent entries</div>
                        <div className="text-xs text-white/60">Notes supported</div>
                      </div>

                      <div className="mt-3 space-y-2">
                        {[
                          { t: "Groceries", n: "Weekly", v: "₹ 480" },
                          { t: "Fuel", n: "Commute", v: "₹ 250" },
                          { t: "Coffee", n: "Work", v: "₹ 120" },
                        ].map((x) => (
                          <div
                            key={x.t}
                            className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/30 px-3 py-2"
                          >
                            <div>
                              <div className="text-sm text-white/90">{x.t}</div>
                              <div className="text-xs text-white/60">{x.n}</div>
                            </div>
                            <div className="text-sm font-semibold text-white">{x.v}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <button className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition-all hover:translate-y-[-1px] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
                          Add entry
                        </button>
                        <button className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10">
                          View summary
                        </button>
                      </div>
                    </div>

                    <motion.div
                      aria-hidden
                      className="mt-4 flex items-center justify-center gap-2 text-xs text-white/60"
                      animate={prefersReducedMotion ? {} : { opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                      <span>Fast, simple, reliable</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-10 -right-10 hidden h-24 w-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur lg:block"
                animate={prefersReducedMotion ? {} : { rotate: [0, 6, 0], y: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-10 -left-10 hidden h-20 w-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur lg:block"
                animate={prefersReducedMotion ? {} : { rotate: [0, -6, 0], y: [0, 6, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-5 py-16">
          <SectionTitle
            eyebrow="Features"
            title="Everything you need to track money with confidence"
            desc="Designed for speed, clarity, and daily consistency, so your finances stop feeling mysterious."
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div key={f.title} variants={fadeUp} custom={i}>
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon className="h-5 w-5 text-white/85" />
                      </div>
                      <div>
                        <div className="text-base font-semibold text-white/90">{f.title}</div>
                        <div className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        <section id="how" className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                eyebrow="How it works"
                title="A simple loop you can actually stick with"
                desc="Make a habit that takes seconds, then let the app turn it into insight."
              />

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeIn}
                className="mt-10 space-y-4"
              >
                {steps.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <motion.div key={s.title} variants={fadeUp} custom={i}>
                      <Card className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
                            <Icon className="h-5 w-5 text-white/85" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-white/90">{s.title}</span>
                              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
                                Step {i + 1}
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              className="relative"
            >
              <Card className="p-0 overflow-hidden">
                <div className="relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.20),transparent_50%),radial-gradient(circle_at_90%_30%,rgba(59,130,246,0.18),transparent_45%)]" />
                  <div className="relative p-8">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                        <ShieldCheck className="h-5 w-5 text-white/85" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white/90">A calmer money system</div>
                        <div className="text-xs text-white/60">Built to reduce anxiety</div>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4">
                      {[
                        { t: "Notes on every transaction", d: "You always know the story behind the number." },
                        { t: "Multiple accounts", d: "Separate salary, cash, savings, and more." },
                        { t: "Backup ready", d: "Recover safely when devices change." },
                      ].map((x, idx) => (
                        <motion.div key={x.t} variants={fadeUp} custom={idx}>
                          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-300/90" />
                            <div>
                              <div className="text-sm font-semibold text-white/90">{x.t}</div>
                              <div className="mt-1 text-sm text-white/70">{x.d}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                        <Lock className="h-4 w-4" />
                        <span>Privacy focused</span>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                        <Cloud className="h-4 w-4" />
                        <span>Backup support</span>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                        <Wallet className="h-4 w-4" />
                        <span>Daily tracking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="screens" className="mx-auto max-w-7xl px-5 py-16">
          <SectionTitle
            eyebrow="Screens"
            title="Show the app, build trust"
            desc="Replace these placeholders with real Savingo screenshots for maximum conversion."
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {["Dashboard", "Add entry", "Accounts", "History", "Insights", "Backup"].map((t, i) => (
              <motion.div key={t} variants={fadeUp} custom={i}>
                <Card className="p-4">
                  <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.06),transparent_45%)]" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm font-semibold text-white/90">{t}</div>
                    <div className="text-xs text-white/60">Screenshot</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="download" className="mx-auto max-w-7xl px-5 py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur sm:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.16),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.14),transparent_45%)]" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Start tracking today and feel the difference this month
                </h3>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                  Savingo is built for consistent daily tracking, so you always know where your money is going.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <GlowButton href="#">Download from Google Play</GlowButton>
                  <GlowButton href="#faq" variant="ghost">
                    Read FAQ
                  </GlowButton>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
                  <div className="inline-flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-white/80" />
                    <span>Modern UX</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Lock className="h-4 w-4 text-white/80" />
                    <span>Privacy focused</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-white/80" />
                    <span>Backup support</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-b from-white/15 to-transparent blur-2xl" />
                <div className="relative rounded-[32px] border border-white/12 bg-slate-950/40 p-6 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white/90">Monthly snapshot</div>
                    <div className="text-xs text-white/60">Example</div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <StatPill label="Income" value="₹ 62,000" />
                    <StatPill label="Expense" value="₹ 38,450" />
                    <StatPill label="Saved" value="₹ 23,550" />
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold text-white/90">Top categories</div>
                    <div className="mt-3 space-y-3">
                      {[
                        { t: "Food", p: "34%" },
                        { t: "Travel", p: "21%" },
                        { t: "Bills", p: "17%" },
                      ].map((x) => (
                        <div key={x.t} className="space-y-1">
                          <div className="flex items-center justify-between text-xs text-white/70">
                            <span>{x.t}</span>
                            <span>{x.p}</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-2/3 rounded-full bg-white/60" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Replace with real data in screenshots</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-5 py-16">
          <SectionTitle
            eyebrow="FAQ"
            title="Quick answers"
            desc="Keep this short and clear, then add support pages later if needed."
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="mx-auto mt-12 grid max-w-3xl gap-4"
          >
            {faqs.map((x, i) => (
              <FAQItem key={x.q} q={x.q} a={x.a} i={i} />
            ))}
          </motion.div>
        </section>

        <footer className="border-t border-white/10 bg-slate-950/40">
          <div className="mx-auto max-w-7xl px-5 py-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <span className="text-base font-black tracking-tight text-white">S</span>
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-white">Savingo</div>
                  <div className="text-xs text-white/60">Track expenses and earnings</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <Link className="hover:text-white" to="/privacy-policy">
                  Privacy policy
                </Link>
                <Link className="hover:text-white" to="/terms-of-service">
                  Terms
                </Link>
                <a className="hover:text-white" href="mailto:savingo@gmail.com">
                  Contact
                </a>
              </div>
            </div>

            <div className="mt-8 text-xs text-white/50">
              © {new Date().getFullYear()} Savingo. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

/*
Dependencies
npm i framer-motion lucide-react

Tailwind
Ensure Tailwind is set up in your React project.
*/

