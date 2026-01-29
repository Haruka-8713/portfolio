import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff3f7] text-[#2b1b22]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#ffc1d6]/60 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#ff8fb8]/40 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-80 w-80 rounded-full bg-[#ffd6e6]/50 blur-3xl" />
      </div>
      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-xl font-semibold tracking-tight">HM</div>
          <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a5263]">
            <a className="transition-colors hover:text-[#2b1b22]" href="#">
              Home
            </a>
            <a className="transition-colors hover:text-[#2b1b22]" href="#">
              Work
            </a>
            <a className="transition-colors hover:text-[#2b1b22]" href="#">
              Blog
            </a>
            <a className="transition-colors hover:text-[#2b1b22]" href="#">
              Contact
            </a>
          </nav>
        </header>
        <main className="mx-auto flex w-full max-w-6xl flex-col items-start px-6 pb-24 pt-16">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8a5263]">
                Portfolio
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Hi! I&apos;m Haruka Mibuchi
                <span className="mt-2 block text-2xl font-medium text-[#8a5263] sm:text-3xl">
                  nice to meet u
                </span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-[#4a2d38] sm:text-lg">
                A pink, minimal home for my work, thoughts, and collaborations.
                Simple layouts, soft gradients, and crisp details.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="rounded-full bg-[#2b1b22] px-6 py-3 text-sm font-semibold text-[#fff3f7] transition-colors hover:bg-[#47232f]"
                  href="#work"
                >
                  See work
                </a>
                <a
                  className="rounded-full border border-[#2b1b22]/20 bg-white/40 px-6 py-3 text-sm font-semibold text-[#2b1b22] backdrop-blur transition-colors hover:border-[#2b1b22]/40"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-[32px] border border-white/70 bg-white/30" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_30px_80px_-50px_rgba(80,20,40,0.6)]">
                <Image
                  src="/haruka.jpg"
                  alt="Haruka Mibuchi"
                  width={720}
                  height={960}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <section
            className="mt-14 grid w-full gap-6 sm:grid-cols-3"
            id="work"
          >
            {[
              "Visual design",
              "Web experiences",
              "Brand identity",
            ].map((item) => (
              <div
                className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_-40px_rgba(80,20,40,0.4)] backdrop-blur"
                key={item}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a5263]">
                  Focus
                </p>
                <h3 className="mt-3 text-lg font-semibold">{item}</h3>
                <p className="mt-2 text-sm text-[#5f3a49]">
                  Curated projects with soft gradients, bold type, and careful
                  interaction details.
                </p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
