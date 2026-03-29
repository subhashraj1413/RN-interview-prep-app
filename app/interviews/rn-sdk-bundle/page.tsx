import Link from "next/link";

const sections = [
  {
    eyebrow: "SDK Integration Flow",
    title: "Visual flow from native SDK to reusable RN SDK to host app.",
    description:
      "A simpler explainer for interview answers: native SDK wrapping, third-party packaging, and host-app integration with code samples.",
    sourcePath: "/raw/rn-sdk-integration-flow",
    cta: "Open visual flow"
  },
  {
    eyebrow: "Interview Pack",
    title: "Advanced RN SDK, bundle, and coding questions.",
    description:
      "The deeper systems pack covering SDK architecture, bundle optimization, host-app compatibility, and coding drills.",
    sourcePath: "/raw/rn-sdk-bundle",
    cta: "Open interview pack"
  }
] as const;

export default function RnSdkBundlePage() {
  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 sm:py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <section className="glass-panel overflow-hidden rounded-[28px] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-skyglass-300/25 bg-slate-950/30 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                <span className="h-2 w-2 rounded-full bg-skyglass-300 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
                SDK + Bundle + Coding
              </div>
              <h1 className="max-w-5xl text-3xl font-bold tracking-[-0.04em] text-slate-50 sm:text-5xl">
                RN SDK interview prep with a visual integration flow and the deep question pack.
              </h1>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
                This route now has two layers: a clearer step-by-step SDK
                integration explainer for architecture answers, and the original
                advanced question pack for deeper interview prep.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
              >
                Back to hub
              </Link>
            </div>
          </div>
        </section>

        {sections.map((section) => (
          <section
            key={section.sourcePath}
            className="glass-panel overflow-hidden rounded-[28px] p-4 sm:p-5"
          >
            <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-100/80">
                  {section.eyebrow}
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-50 sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {section.description}
                </p>
              </div>

              <Link
                href={section.sourcePath}
                target="_blank"
                className="inline-flex items-center rounded-full border border-skyglass-300/25 bg-skyglass-400/15 px-4 py-2 text-sm font-medium text-sky-50 transition hover:border-skyglass-300/40 hover:bg-skyglass-400/25"
              >
                {section.cta}
              </Link>
            </div>

            <iframe
              src={section.sourcePath}
              title={section.title}
              className={`w-full rounded-[22px] border border-white/10 bg-slate-950 ${
                section.sourcePath === "/raw/rn-sdk-integration-flow"
                  ? "h-[calc(100vh-14rem)] min-h-[860px]"
                  : "h-[calc(100vh-12rem)] min-h-[920px]"
              }`}
            />
          </section>
        ))}
      </div>
    </main>
  );
}
