import type { Metadata } from "next";
import Image from "next/image";
import MobileMenu from "./components/MobileMenu";
import Reveal from "./components/Reveal";

export const metadata: Metadata = {
  title: "Luce Marketing | Web3 Marketing Agency for Crypto Projects",
  description:
    "Luce Marketing helps Web3 projects grow through KOL campaigns, community growth and market entry strategy — with deep access to the Turkish crypto market, one of the most crypto-native audiences in the world.",
  openGraph: {
    title: "Luce Marketing | Web3 Marketing Agency",
    description:
      "Premium marketing, KOL campaigns, community growth and brand strategy for Web3 projects that want visibility, trust and momentum.",
    images: ["/logo3.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luce Marketing | Web3 Marketing Agency",
    description:
      "Premium marketing, KOL campaigns, community growth and brand strategy for Web3 projects.",
    images: ["/logo3.png"],
  },
};

const CONTACT_HREF = "https://t.me/CreedBTX";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    title: "KOL Marketing",
    description:
      "We connect your project with vetted, crypto-native KOLs and micro-influencers who reach real holders — not bots — driving authentic engagement and organic reach.",
  },
  {
    title: "Market Entry Strategy",
    description:
      "A tailored roadmap for entering new markets, starting with Türkiye — pairing local creators, channels and messaging with the audiences that actually convert there.",
  },
  {
    title: "Targeted Project Promotion",
    description:
      "Precision-placed campaigns across Telegram, X and crypto media to put your launch, listing or milestone in front of the people most likely to act on it.",
  },
  {
    title: "Community Growth",
    description:
      "We grow and activate your Telegram community and X presence with real conversation, moderation support and engagement strategies that keep holders around.",
  },
  {
    title: "Campaign Management",
    description:
      "End-to-end execution — briefing, creator selection, content approval and reporting — so you get a fully managed campaign, not just a list of contacts.",
  },
  {
    title: "Exchange Visibility",
    description:
      "Strategic support around listing announcements and exchange campaigns to maximize visibility exactly when trading volume and attention matter most.",
  },
];

const stats = [
  ["4M+", "Combined Influencer Reach"],
  ["20+", "Partner Influencers"],
  ["19.3%", "Turkish Crypto Ownership Rate"],
  ["Web3", "Crypto-Native Network"],
];

const process = [
  {
    title: "Discovery",
    description:
      "We start with your project, your audience and your goals — not a generic package. Every campaign is scoped around what you're actually trying to achieve.",
  },
  {
    title: "Vetting & Strategy",
    description:
      "We hand-pick creators and channels that fit your niche, checked against real audience signals — not just follower counts — then map out the campaign plan.",
  },
  {
    title: "Execution",
    description:
      "Briefing, content approval, scheduling and publishing across Telegram, X and Turkish crypto media, run end-to-end by our desk.",
  },
  {
    title: "Reporting",
    description:
      "You get clear, transparent reporting on reach, engagement and delivery — so you know exactly what your campaign did, not just what it cost.",
  },
];

const boundaries = [
  {
    title: "No bot traffic",
    description:
      "If a number can't survive a manual audit, we don't sell it to you. Every creator we work with is checked by hand.",
  },
  {
    title: "No guaranteed price outcomes",
    description:
      "Marketing builds attention and trust — it doesn't move markets on command. We won't promise what we can't control.",
  },
  {
    title: "No blanket acceptance",
    description:
      "We turn down projects that don't fit our network. A rushed campaign hurts your community and our name — so we're selective on purpose.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030305] text-white">
      <div className="fixed inset-0 bg-black" />
      <div className="fixed top-0 left-0 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[180px]" />
      <div className="fixed bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[180px]" />

      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <Image src="/logo2.png" alt="Luce Marketing" width={65} height={65} />

            <div className="flex flex-col leading-none">
              <span className="flex items-center text-xl font-medium tracking-[0.25em] text-white">
                LUC
                <span className="ml-1 flex flex-col gap-[3px]">
                  <span className="h-[2px] w-[12px] bg-white"></span>
                  <span className="h-[2px] w-[12px] bg-white"></span>
                  <span className="h-[2px] w-[12px] bg-white"></span>
                </span>
              </span>

              <span className="mt-1 text-[10px] tracking-[0.45em] text-blue-400/70">
                MARKETING
              </span>
            </div>
          </div>

          <div className="hidden gap-8 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm text-gray-300 backdrop-blur-xl md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-105 sm:inline-flex"
            >
              Contact Us
            </a>
            <MobileMenu links={navLinks} contactHref={CONTACT_HREF} />
          </div>
        </div>
      </nav>

      <section className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <Reveal className="flex flex-col items-center">
          <Image
            src="/logo3.png"
            alt="Luce Marketing"
            width={800}
            height={800}
            priority
            className="mb-8 h-auto w-full max-w-[450px]"
          />
          <div className="mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-200 backdrop-blur-xl">
            WEB3 MARKETING AGENCY
          </div>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
            We Grow
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
              Your Web3 Project
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Premium marketing, KOL campaigns, community growth and brand strategy
            for Web3 projects that want visibility, trust and momentum.
          </p>

          <div className="mt-4 flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/5 px-5 py-2 text-sm text-blue-200">
            🇹🇷 Turkey: 19.3% crypto ownership — nearly 3x the global average
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={CONTACT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-9 py-4 font-bold text-black transition hover:scale-105"
            >
              Start a Campaign
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/15 bg-white/5 px-9 py-4 text-center font-bold backdrop-blur-xl transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </Reveal>
      </section>

      <section
        id="results"
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-16 sm:grid-cols-2 md:grid-cols-4"
      >
        {stats.map(([number, label], index) => (
          <Reveal key={label} delay={index * 80}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl">
              <h2 className="text-5xl font-black">{number}</h2>
              <p className="mt-3 text-gray-400">{label}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
            Services made for serious Web3 brands.
          </h2>
          <p className="max-w-md text-gray-400">
            We combine storytelling, community, KOLs and strategy to create
            campaigns people actually notice.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 100}>
              <div className="group h-full rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.09]">
                <div className="mb-10 text-sm text-blue-300">0{index + 1}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 text-gray-400">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <Reveal className="mb-14">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-300">
            How We Work
          </p>
          <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            No guesswork. Just a process that holds up.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {process.map((step, index) => (
            <Reveal key={step.title} delay={(index % 2) * 120}>
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-lg font-bold text-blue-200">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 text-gray-400">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="why-luce" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <Reveal className="mb-14">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-300">
            Why Luce?
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Your gateway to the Turkish crypto market.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Turkey is one of the world&rsquo;s strongest crypto markets by
            population penetration. While the global average crypto ownership
            rate is around 6.9%, Turkey reaches 19.3% — nearly 3x the global
            average. This makes Turkey one of the most valuable markets for
            Web3 projects looking to build real community traction.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          <Reveal delay={0}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <h3 className="text-5xl font-black">20+</h3>
              <p className="mt-3 text-gray-400">Turkish Influencer Partners</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <h3 className="text-5xl font-black">4M+</h3>
              <p className="mt-3 text-gray-400">Combined Local Audience</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <h3 className="text-5xl font-black">Türkiye</h3>
              <p className="mt-3 text-gray-400">Crypto-Native Market Access</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-8 rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8 backdrop-blur-xl">
            <p className="max-w-4xl text-lg leading-8 text-gray-300">
              Most global Web3 projects understand the international market, but
              entering Türkiye requires more than translation. It requires local
              trust, the right creators and real community access. Luce Agency
              helps projects connect with Turkish crypto audiences through a
              strong KOL network and market-native campaign strategy.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="boundaries" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <Reveal className="mb-14">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-300">
            What We Won&rsquo;t Do
          </p>
          <h2 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Trust is the actual product.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {boundaries.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white">
                  ✕
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-gray-400">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-10 backdrop-blur-xl md:p-16">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-300">
              About Luce
            </p>
            <h2 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              We help crypto brands look premium, sound trustworthy and grow with
              the right audience.
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              From launch campaigns to long-term community presence, Luce
              Marketing builds clean, strategic and memorable Web3 visibility.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="relative z-10 px-6 py-32 text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="text-5xl font-black md:text-7xl">Ready to grow?</h2>
          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Let&rsquo;s build a campaign that puts your project in front of the
            right people.
          </p>
          <a
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-blue-500 px-10 py-4 font-bold text-white transition hover:scale-105 hover:bg-blue-400"
          >
            Contact Us
          </a>
        </Reveal>
      </section>
    </main>
  );
}
