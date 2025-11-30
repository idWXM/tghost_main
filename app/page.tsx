// app/page.tsx
// Landing do TGhosT™ – inspirada em layout cosmic, full-screen e minimalista.

import React from "react";

const navItems = [
  { label: "TGhosT", href: "#hero" },
  { label: "API", href: "#api" },
  { label: "Company", href: "#company" },
  { label: "News", href: "#news" },
];

const featureCards = [
  {
    id: "gpt",
    title: "TGhosT",
    badge: "Cosmic agent",
    description:
      "Seu operador multimodal pessoal. Voz, texto, arquivos e automação de funções – tudo em um único ghost.",
    cta: "Use now",
  },
  {
    id: "api",
    title: "API",
    badge: "Developers",
    description:
      "Conecte o TGhosT aos seus apps, backends e painéis. Webhooks, tools e function-calling prontos para produção.",
    cta: "Build now",
  },
  {
    id: "docs",
    title: "Developer Docs",
    badge: "Docs",
    description:
      "Guia para integrar, testar e colocar o TGhosT em modo beta ou produção com segurança de nível corporativo.",
    cta: "Learn more",
  },
];

const universeQuestions = [
  "What’s your next disruption?",
  "Can one ghost protect a whole stack?",
  "Do your systems really talk to each other?",
  "How far can voice + data go?",
  "What happens when compliance meets chaos?",
  "Is your company ready for multimodal ops?",
];

const newsItems = [
  {
    date: "NOVEMBER 30, 2025",
    title: "TGhosT private beta powered by OpenAI",
    tag: "API",
    description:
      "Primeira versão beta privada do TGhosT™ integrada à API da OpenAI, com foco em automação segura para early adopters.",
  },
  {
    date: "DECEMBER 15, 2025",
    title: "RunAI Systems expands TGhosT nodes",
    tag: "INFRA",
    description:
      "Novos nós de execução e segurança em múltiplas regiões para reduzir latência e aumentar a resiliência do ecossistema.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col">
      {/* Fundo glow fixo */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#1d4ed833,_transparent_55%),radial-gradient(circle_at_bottom,_#0ea5e933,_transparent_55%)]"
      />

      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-black/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Logo + nome */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 shadow-lg shadow-cyan-500/40">
              <span className="text-xs font-semibold tracking-[0.18em]">
                TG
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                TGhosT™
              </div>
              <div className="text-sm text-white/70">
                No fear. No pain. Built for disruptors.
              </div>
            </div>
          </div>

          {/* Menu desktop */}
          <nav className="hidden gap-8 text-xs font-medium text-white/70 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative whitespace-nowrap transition hover:text-white"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Botão Try TGhosT */}
          <a
            href="#try"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            TRY TGhosT
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
      >
        {/* glow lateral */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-2/3 bg-[radial-gradient(circle_at_center,_#22d3ee33,_transparent_60%)] blur-3xl"
        />
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            TGhosT.AI • PRIVATE BETA
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            What do you want to{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              disrupt
            </span>
            ?
          </h1>
          <p className="mb-10 max-w-2xl text-sm text-white/70 sm:text-base">
            TGhosT™ é o agente multimodal da RunAI Systems – projetado para quem
            opera no limite: voz, texto, dados, arquivos, automação de funções
            e cultura local em uma única camada inteligente.
          </p>

          {/* caixa de prompt fake */}
          <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_0_60px_rgba(34,211,238,0.25)] backdrop-blur">
            <div className="mb-2 flex items-center justify-between text-[11px] text-white/50">
              <span>tghost@alpha-node ▸ console</span>
              <span>WXM-9271-ALPHA-16</span>
            </div>
            <div className="flex items-center rounded-xl bg-white/5 px-4 py-3 text-sm text-white/70">
              <span className="mr-3 h-2 w-2 rounded-full bg-emerald-400" />
              <span className="flex-1 text-left text-white/60">
                Type any mission. TGhosT handles the chaos.
              </span>
              <button className="ml-4 rounded-full bg-cyan-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black hover:bg-cyan-400">
                LAUNCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Produtos (3 cards) */}
      <section
        id="api"
        className="border-y border-white/5 bg-gradient-to-b from-black via-black to-[#020617] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              PRODUCTS
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              AI for real-world disruptors
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/70">
              Do console ao boardroom: um único ghost para operar prompts,
              workflows, voz, APIs e dashboards – conectado ao ecossistema
              RunAI.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:bg-white/10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-60"
                  style={{
                    background:
                      card.id === "api"
                        ? "radial-gradient(circle at bottom, rgba(248,113,113,0.35), transparent 60%)"
                        : "radial-gradient(circle at top, rgba(56,189,248,0.35), transparent 60%)",
                  }}
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {card.badge}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                    <p className="text-xs text-white/70">{card.description}</p>
                  </div>
                  <button className="mt-6 inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300 group-hover:text-cyan-100">
                    {card.cta}
                    <span className="ml-2 text-base">↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Understand the Universe */}
      <section
        id="universe"
        className="relative flex items-center justify-center border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="mr-2">Understand</span>
            <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
              The Universe
            </span>
          </h2>

          {/* “constelação” de pontos */}
          <div className="relative flex h-72 w-full max-w-3xl items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
            {/* linhas */}
            <div className="absolute h-[1px] w-[120%] bg-[radial-gradient(circle,_rgba(148,163,184,0.7),_transparent_70%)] opacity-40" />
            <div className="absolute h-[120%] w-[1px] bg-[radial-gradient(circle,_rgba(148,163,184,0.7),_transparent_70%)] opacity-40" />

            {/* pontos */}
            <div className="relative grid h-[220px] w-[220px] grid-cols-7 grid-rows-7 gap-3">
              {Array.from({ length: 49 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center"
                >
                  <div className="h-1.5 w-1.5 rounded-[3px] bg-slate-400/70 shadow-[0_0_10px_rgba(148,163,184,0.9)]" />
                </div>
              ))}
            </div>

            {/* frases girando */}
            <div className="absolute inset-x-6 bottom-6 mx-auto flex max-w-2xl flex-wrap justify-center gap-2 text-[11px] text-white/60">
              {universeQuestions.map((q) => (
                <span
                  key={q}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>

          <p className="max-w-2xl text-xs text-white/60">
            TGhosT foi criado para CEOs, engenheiros, analistas e creators que
            precisam transformar perguntas difíceis em movimento real – sem
            perder segurança, rastreabilidade e contexto cultural.
          </p>
        </div>
      </section>

      {/* SECTION: SuperGhost / plano beta */}
      <section
        id="try"
        className="border-b border-white/5 bg-[radial-gradient(circle_at_top,_#22d3ee22,_transparent_60%),radial-gradient(circle_at_bottom,_#f9731622,_transparent_60%)] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            SUPERGHOST BETA
          </p>
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
            Do more with TGhosT
          </h2>
          <p className="mb-8 max-w-xl text-sm text-white/70">
            A versão alpha WXM-9271 é privada e protegida por senha. Se você
            recebeu acesso direto do fundador, pode testar automações reais
            usando a API da OpenAI dentro do ecossistema RunAI Systems.
          </p>
          <button className="rounded-full bg-cyan-500 px-8 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-black shadow-lg shadow-cyan-400/40 hover:bg-cyan-400">
            REQUEST ACCESS
          </button>
        </div>
      </section>

      {/* SECTION: News */}
      <section
        id="news"
        className="border-b border-white/5 bg-black px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              LATEST NEWS
            </p>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              TGhosT updates & early signals
            </h2>
          </div>

          <div className="space-y-6">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 sm:flex-row sm:items-center"
              >
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.22em] text-white/40">
                    {item.date}
                  </div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs text-white/65">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-3 sm:items-end">
                  <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                    {item.tag}
                  </span>
                  <button className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300 hover:text-cyan-100">
                    Read
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER estilo 4 colunas */}
      <footer
        id="company"
        className="bg-gradient-to-t from-[#020617] via-black to-black px-4 pb-10 pt-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <div className="grid gap-10 text-sm text-white/70 md:grid-cols-4">
            {/* Coluna Try TGhosT */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                TRY TGhosT ON
              </p>
              <ul className="space-y-2 text-xs">
                <li>Web (tghost.ai)</li>
                <li>Mobile (soon)</li>
                <li>Desktop console (alpha)</li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                PRODUCTS
              </p>
              <ul className="space-y-2 text-xs">
                <li>TGhosT™</li>
                <li>RunIDzeroTrusT™</li>
                <li>vNEXX™ (VENNON DISRUPT)</li>
                <li>RunsBI™</li>
                <li>dSOCIALBEAST™</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                COMPANY
              </p>
              <ul className="space-y-2 text-xs">
                <li>RunAI Systems LLC</li>
                <li>Palo Alto, CA • Delaware, US</li>
                <li>Founder: Wesley S. Macedo</li>
                <li>Contact: hello@runaisystems.com</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                RESOURCES
              </p>
              <ul className="space-y-2 text-xs">
                <li>Documentation (soon)</li>
                <li>Privacy Policy</li>
                <li>Security & Safety</li>
                <li>Legal & Status</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-4 text-[11px] text-white/50 sm:flex-row sm:items-center">
            <span>
              © {new Date().getFullYear()} RunAI Systems LLC • TGhosT™ Alpha
              WXM-9271. All rights reserved.
            </span>
            <span className="text-white/40">
              Powered by OpenAI • Deployed on Vercel • Secured by RunIDzeroTrusT
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
