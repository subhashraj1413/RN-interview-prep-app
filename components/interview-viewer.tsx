import Link from "next/link";

type InterviewViewerProps = {
  eyebrow: string;
  title: string;
  description: string;
  sourcePath: string;
  backHref?: string;
};

export function InterviewViewer({
  eyebrow,
  title,
  description,
  sourcePath,
  backHref = "/"
}: InterviewViewerProps) {
  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 sm:py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <section className="glass-panel overflow-hidden rounded-[28px] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-skyglass-300/25 bg-slate-950/30 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100">
                <span className="h-2 w-2 rounded-full bg-skyglass-300 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
                {eyebrow}
              </div>
              <h1 className="max-w-4xl text-3xl font-bold tracking-[-0.04em] text-slate-50 sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={backHref}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
              >
                Back to hub
              </Link>
              <Link
                href={sourcePath}
                target="_blank"
                className="rounded-full border border-skyglass-300/25 bg-skyglass-400/15 px-4 py-2 text-sm font-medium text-sky-50 transition hover:border-skyglass-300/40 hover:bg-skyglass-400/25"
              >
                Open raw page
              </Link>
            </div>
          </div>
        </section>

        <section className="glass-panel overflow-hidden rounded-[28px] p-2 sm:p-3">
          <iframe
            src={sourcePath}
            title={title}
            className="h-[calc(100vh-13rem)] min-h-[780px] w-full rounded-[22px] border border-white/10 bg-slate-950"
          />
        </section>
      </div>
    </main>
  );
}
