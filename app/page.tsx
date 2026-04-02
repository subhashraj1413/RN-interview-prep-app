import Link from "next/link";

const interviewPacks = [
  {
    href: "/interviews/react-native-techlead",
    label: "React Native Tech Lead",
    title: "Leadership, architecture, testing, CI/CD, and mobile system design.",
    description:
      "A broad senior-to-tech-lead interview pack covering React Native, React, JS/TS, performance, state management, testing, CI/CD, and leadership scenarios.",
    stats: "50 questions across 8 domains"
  },
  {
    href: "/interviews/rn-sdk-bundle",
    label: "SDK + Bundle + Coding",
    title: "Deep systems questions for SDKs, bundle internals, and coding pressure rounds.",
    description:
      "An advanced SDK route that now includes both a clearer 3-step SDK integration visual flow and the deeper bundle/coding interview pack.",
    stats: "3-step explainer + 23 advanced questions"
  },
  {
    href: "/interviews/typescript-deep",
    label: "TypeScript Deep Dive",
    title: "Type-system internals, inference, API design, and build strategy at expert level.",
    description:
      "A deep TypeScript pack covering conditional types, variance, inference, runtime boundaries, declaration design, and compiler-scale tooling concerns.",
    stats: "30 deep questions across 6 domains"
  },
  {
    href: "/interviews/jsi-fabric-explainer",
    label: "JSI + Fabric Explainer",
    title: "A visual step-by-step walkthrough of JSI, Codegen, TurboModules, and Fabric.",
    description:
      "An animated explainer page covering the old bridge, JSI, Codegen, TurboModules, Fabric, and how the pieces fit together through diagrams and narrative captions.",
    stats: "7-step visual architecture explainer"
  },
  {
    href: "/interviews/rn-js-coding-challenges",
    label: "RN + JS Challenges",
    title: "Interview-standard coding tasks with inputs, outputs, and review signals.",
    description:
      "A focused prep route with five JavaScript challenges, four React Native tasks, interview standards, and a suggested practice order.",
    stats: "9 coding challenges in one route"
  }
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 sm:py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <section className="glass-panel overflow-hidden rounded-[32px] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-skyglass-300/25 bg-slate-950/30 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                <span className="h-2 w-2 rounded-full bg-skyglass-300 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
                Interview Prep Hub
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.05em] text-slate-50 sm:text-6xl">
                One landing page for five focused interview prep routes.
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-300 sm:text-base">
                This Next.js entry point gives you a clean index to launch each
                preparation pack, including the new JavaScript and React Native
                coding challenges page, while keeping the original self-contained
                HTML interview content intact.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Stack
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                  Next.js + Tailwind
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Landing page and viewer routes are built in the app router,
                  while several deeper interview packs remain directly
                  executable HTML.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Access
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                  Five focused routes
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Open each pack inside a dedicated viewer page or jump straight
                  to the raw HTML route when needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {interviewPacks.map((pack) => (
            <article
              key={pack.href}
              className="glass-panel rounded-[30px] p-6 sm:p-7"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-100/80">
                {pack.label}
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-3xl">
                {pack.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {pack.description}
              </p>
              <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200">
                {pack.stats}
              </div>
              <div className="mt-6">
                <Link
                  href={pack.href}
                  className="inline-flex items-center rounded-full border border-skyglass-300/25 bg-skyglass-400/15 px-4 py-2 text-sm font-medium text-sky-50 transition hover:border-skyglass-300/40 hover:bg-skyglass-400/25"
                >
                  Open pack
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
