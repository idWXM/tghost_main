// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#02040A] via-[#050816] to-black text-slate-50">
      {/* NAVBAR */}
      <header className="w-full sticky top-0 z-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Left: logo + wordmark */}
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-cyan-500/10">
              <Image
                src="/tghost-avatar.png"
                alt="TGhosT logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xs font-semibold tracking-[0.32em] text-slate-200">
              TGHOST
            </span>
          </div>

          {/* Center nav */}
          <nav className="hidden gap-10 text-[11px] font-semibold tracking-[0.22em] text-slate-300 sm:flex">
            <a className="nav-item" href="#tghost">
              TGHOST
            </a>
            <a className="nav-item" href="#api">
              API
            </a>
            <a className="nav-item" href="#company">
              COMPANY
            </a>
            <a className="nav-item" href="#news">
              NEWS
            </a>
          </nav>

          {/* Right CTA */}
          <a
            href="#console"
            className="rounded-full border border-cyan-400/60 bg-cyan-500/5 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            TRY TGHOST
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="tghost"
        className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden"
      >
        {/* smoky background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 30%, rgba(44,196,255,0.4), transparent 55%), radial-gradient(circle at 80% 20%, rgba(0,212,255,0.45), transparent 60%), radial-gradient(circle at 50% 100%, rgba(0,0,0,0.9), #02040A 70%)",
          }}
        />

        {/* subtle noise overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0,transparent_60%)] mix-blend-soft-light opacity-40" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 py-20 text-center">
          {/* big ghost logo */}
          <div className="relative h-40 w-40 sm:h-56 sm:w-56 mb-4">
            <Image
              src="/tghost-hero.png"
              alt="TGhosT"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(44,196,255,0.7)]"
              priority
            />
          </div>

          {/* tagline under logo (só inglês pra ficar clean) */}
          <p className="text-[11px] font-semibold tracking-[0.32em] text-cyan-200/80 uppercase">
            NO FEAR. NO PAIN. BUILT FOR DISRUPTORS.
          </p>

          <h1 className="text-balance text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            WHAT DO YOU WANT TO{" "}
            <span className="text-cyan-300">DISRUPT?</span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base text-slate-300">
            TGhosT™ é o agente multimodal da RunAI Systems — projetado para quem
            opera no limite: voz, texto, dados, arquivos, automação de funções
            e cultura local em uma única camada inteligente.
          </p>

          {/* console fake input */}
          <div
            id="console"
            className="mt-4 w-full max-w-3xl rounded-[26px] border border-cyan-400/40 bg-black/60 px-5 py-4 text-left shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur"
          >
            <div className="mb-1 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-slate-400">
              <span>tghost@alpha-node · console</span>
              <span className="text-cyan-300/80">WXM-9271 · ALPHA-16</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-cyan-900/40 px-4 py-3">
              <span className="text-xs text-slate-300">
                Type any mission. TGhosT handles the chaos.
              </span>
              <button className="rounded-full bg-cyan-500 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-black hover:bg-cyan-400">
                LAUNCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* UNDERSTAND THE UNIVERSE SECTION */}
      <section
        aria-label="Universe"
        className="relative w-full border-t border-white/5 bg-gradient-to-b from-black via-[#050716] to-black py-24"
      >
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-16 px-6">
          {/* background network */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-80 w-80 sm:h-[22rem] sm:w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(44,196,255,0.55)_0,transparent_65%)] opacity-40 blur-3xl" />
          </div>

          {/* texts deslocados */}
          <div className="relative flex min-h-[220px] flex-col justify-between">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50 self-start">
              Understand
            </h2>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50 self-end">
              The Universe
            </h2>

            {/* ponto central com “nodes” */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2">
              <div className="h-full w-full rounded-full border border-cyan-400/40 bg-cyan-500/5 shadow-[0_0_30px_rgba(44,196,255,0.4)]" />
              <div className="absolute inset-6 grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-sm bg-cyan-300/80 animate-pulse"
                    style={{ animationDelay: `${i * 80}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* perguntas em “bolhas” */}
          <div className="relative grid gap-3 text-xs sm:text-sm text-slate-200 md:grid-cols-2">
            {[
              "What’s your next disruption?",
              "Can one ghost protect a whole stack?",
              "Do your systems really talk to each other?",
              "How far can voice + data go?",
              "What happens when compliance meets chaos?",
              "Is your company ready for multimodal ops?",
            ].map((q) => (
              <div
                key={q}
                className="rounded-full border border-cyan-400/25 bg-slate-950/70 px-4 py-2 shadow-[0_0_18px_rgba(15,23,42,0.9)]"
              >
                {q}
              </div>
            ))}
          </div>

          <p className="relative max-w-3xl text-xs sm:text-sm text-slate-400">
            TGhosT foi criado para CEOs, engenheiros, analistas e creators que
            precisam transformar perguntas difíceis em movimento real — sem
            perder segurança, rastreabilidade e contexto cultural.
          </p>
        </div>
      </section>

      {/* GLOBAL NODES SECTION (fantasminhas com bandeiras) */}
      <section className="w-full border-t border-white/5 bg-black py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-semibold tracking-[0.32em] text-cyan-300/70 uppercase">
              TGHOST NODES
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Born global. Tuned to your culture.
            </h3>
            <p className="max-w-2xl text-sm text-slate-300">
              Cada node TGhosT roda sobre a mesma inteligência base, mas fala a
              língua, o sotaque e o contexto do lugar onde está plugado.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                country: "United States",
                tag: "US Alpha Node",
                desc: "Baixa latência com a OpenAI e backbone para integrações globais.",
                img: "/ghost-us.png",
              },
              {
                country: "Brazil",
                tag: "LATAM Node",
                desc: "Primeiro stack multimodal desenhado para operações em português.",
                img: "/ghost-br.png",
              },
              {
                country: "Ireland",
                tag: "EU Node",
                desc: "Ponto estratégico para expansão regulatória e compliance europeu.",
                img: "/ghost-ie.png",
              },
            ].map((node) => (
              <div
                key={node.country}
                className="group flex flex-col gap-3 rounded-2xl border border-white/8 bg-gradient-to-b from-slate-900/80 via-slate-950 to-black p-4 shadow-[0_0_30px_rgba(0,0,0,0.7)] transition hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(44,196,255,0.6)]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-cyan-500/10">
                    <Image
                      src={node.img}
                      alt={node.country}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold tracking-[0.22em] text-cyan-300/80 uppercase">
                      {node.tag}
                    </span>
                    <span className="text-sm font-medium text-slate-100">
                      {node.country}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="news"
        className="w-full border-t border-white/5 bg-gradient-to-t from-[#111827] via-[#020617] to-black py-14"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 text-sm">
          {/* News cards placeholder */}
          <div className="space-y-4">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-slate-400 uppercase">
              Latest news
            </p>
            <div className="space-y-3">
              <article className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/50 px-4 py-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>NOVEMBER 30, 2025</span>
                  <span className="rounded-full border border-cyan-400/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                    API
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-slate-50">
                  TGhosT private beta powered by OpenAI
                </h4>
                <p className="text-xs text-slate-300">
                  Primeira versão beta privada do TGhosT™ integrada à API da
                  OpenAI, com foco em automação segura para early adopters.
                </p>
              </article>
            </div>
          </div>

          {/* columns like Grok */}
          <div className="grid gap-10 border-t border-white/10 pt-10 text-xs md:grid-cols-4">
            <div>
              <h5 className="mb-3 text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
                Try TGhosT on
              </h5>
              <ul className="space-y-1 text-slate-200">
                <li>Web (tghost.ai)</li>
                <li>Mobile (soon)</li>
                <li>Desktop console (alpha)</li>
              </ul>
            </div>

            <div>
              <h5 className="mb-3 text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
                Products
              </h5>
              <ul className="space-y-1 text-slate-200">
                <li>TGhosT™</li>
                <li>RunIDzeroTRUST™</li>
                <li>vNEXX™ (VENNON DISRUPT)</li>
                <li>RunsBI™</li>
                <li>dSOCIALBEAST™</li>
              </ul>
            </div>

            <div id="company">
              <h5 className="mb-3 text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
                Company
              </h5>
              <ul className="space-y-1 text-slate-200">
                <li>RunAI Systems LLC</li>
                <li>Careers (soon)</li>
                <li>Contact: hello@runaisystems.com</li>
                <li>News</li>
              </ul>
            </div>

            <div>
              <h5 className="mb-3 text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
                Resources
              </h5>
              <ul className="space-y-1 text-slate-200">
                <li>Documentation (soon)</li>
                <li>Privacy Policy</li>
                <li>Security &amp; Safety</li>
                <li>Legal &amp; Status</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-1 border-t border-white/10 pt-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © 2025 RunAI Systems LLC · TGhosT™ Alpha WXM-9271. All rights
              reserved.
            </span>
            <span>
              Powered by OpenAI · Deployed on Vercel · Secured by GitHub
              workflows
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

// small CSS helpers (use in globals.css or tailwind @layer if quiser):
// .nav-item {
//   @apply relative cursor-pointer transition text-slate-300 hover:text-slate-50;
// }
// .nav-item::after {
//   content: "";
//   @apply pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-slate-100 transition-all duration-200;
// }
// .nav-item:hover::after {
//   @apply w-full;
// }
