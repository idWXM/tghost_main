// app/page.tsx

import React from "react";

const COLORS = {
  bg: "#050712",
  bgSoft: "#070A12",
  accent: "#2DD4FF",
  accentSoft: "#1B3B6F",
  text: "#F9FAFB",
  textSoft: "#9CA3AF",
  border: "#1F2933",
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: `radial-gradient(circle at 70% 20%, rgba(45,212,255,0.28), transparent 55%), radial-gradient(circle at 0% 80%, rgba(37,99,235,0.35), transparent 55%), ${COLORS.bg}`,
        color: COLORS.text,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          backdropFilter: "blur(18px)",
          background: "linear-gradient(to bottom, rgba(5,7,18,0.82), transparent)",
          borderBottom: "1px solid rgba(148,163,184,0.15)",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo compacta TG */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "999px",
                background:
                  "radial-gradient(circle at 30% 20%, #38bdf8, #0f172a 70%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                letterSpacing: 1,
                fontSize: 15,
              }}
            >
              TG
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.1,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: COLORS.textSoft,
                }}
              >
                TGHOST™
              </span>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: 2.4,
                  textTransform: "uppercase",
                  color: COLORS.textSoft,
                }}
              >
                No fear / No pain / Built for disruptors
              </span>
            </div>
          </div>

          {/* Menu */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            {["TGhost", "API", "Company", "News"].map((item) => (
              <NavItem key={item}>{item}</NavItem>
            ))}

            <button
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid rgba(148,163,184,0.6)",
                background: "transparent",
                color: COLORS.text,
                fontSize: 11,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 160ms ease-out",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  COLORS.accent;
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 18px rgba(45,212,255,0.38)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(148,163,184,0.6)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              Try TGhost
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "72px 24px 80px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: 32,
          alignItems: "center",
        }}
      >
        {/* Texto + console */}
        <div>
          <p
            style={{
              fontSize: 12,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: COLORS.textSoft,
              marginBottom: 18,
            }}
          >
            TGHOST.AI · PRIVATE ALPHA
          </p>

          <h1
            style={{
              fontSize: 42,
              lineHeight: 1.1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            What do you want to{" "}
            <span style={{ color: COLORS.accent }}>disrupt?</span>
          </h1>

          <p
            style={{
              fontSize: 14,
              color: COLORS.textSoft,
              maxWidth: 520,
              marginBottom: 28,
            }}
          >
            TGhosT™ é o agente multimodal da RunAI Systems — projetado para quem
            opera no limite: voz, texto, dados, arquivos, automação de funções
            e cultura local em uma única camada inteligente.
          </p>

          {/* “Console” de prompt */}
          <div
            style={{
              borderRadius: 18,
              padding: 18,
              background:
                "radial-gradient(circle at 0% 0%, rgba(45,212,255,0.25), transparent 55%), rgba(15,23,42,0.95)",
              border: "1px solid rgba(148,163,184,0.4)",
              boxShadow: "0 18px 55px rgba(15,23,42,0.85)",
              marginBottom: 18,
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: COLORS.textSoft,
                marginBottom: 10,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>tghost@alpha-node · console</span>
              <span>Alpha WXM-9271</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#020617",
                borderRadius: 999,
                padding: "10px 12px 10px 16px",
                border: "1px solid rgba(51,65,85,0.9)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "#22c55e",
                  boxShadow: "0 0 6px rgba(34,197,94,0.7)",
                }}
              />
              <input
                placeholder="Type any mission. TGhosT handles the chaos."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: COLORS.text,
                  fontSize: 13,
                }}
              />
              <button
                style={{
                  borderRadius: 999,
                  padding: "8px 18px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#020617",
                  background:
                    "linear-gradient(135deg, #2DD4FF 0%, #38bdf8 40%, #22c55e 100%)",
                  boxShadow: "0 0 18px rgba(45,212,255,0.7)",
                }}
              >
                Launch
              </button>
            </div>
          </div>

          <p
            style={{
              fontSize: 11,
              color: COLORS.textSoft,
              maxWidth: 480,
            }}
          >
            A versão alpha é privada e protegida por senha. Se você recebeu
            acesso direto do fundador, pode testar automações reais usando a API
            da OpenAI dentro do ecossistema RunAI Systems.
          </p>
        </div>

        {/* Ghost hero ilustrativo */}
        <div
          style={{
            position: "relative",
            height: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Círculo de glow */}
          <div
            style={{
              position: "absolute",
              inset: "18%",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 20%, rgba(56,189,248,0.8), transparent 65%)",
              filter: "blur(26px)",
              opacity: 0.65,
            }}
          />
          {/* Placeholder do ghost – aqui você pode trocar por <Image /> */}
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 20%, #38bdf8, #020617 70%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              border: "2px solid rgba(148,163,184,0.5)",
              boxShadow:
                "0 0 65px rgba(56,189,248,0.85), 0 0 130px rgba(15,23,42,1)",
            }}
          >
            GHO ST
          </div>
        </div>
      </section>

      {/* QUESTIONS SECTION – “Understand / The Universe” */}
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "24px 24px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
            gap: 28,
            alignItems: "flex-start",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 30,
                marginBottom: 6,
              }}
            >
              Understand
            </h2>
            <h2
              style={{
                fontSize: 30,
                color: COLORS.accent,
                marginBottom: 20,
              }}
            >
              The Universe
            </h2>
            <p
              style={{
                fontSize: 13,
                color: COLORS.textSoft,
                maxWidth: 420,
              }}
            >
              TGhosT foi criado para CEOs, engenheiros, analistas e creators
              que precisam transformar perguntas difíceis em movimento real —
              sem perder segurança, rastreabilidade e contexto cultural.
            </p>
          </div>

          <div
            style={{
              borderRadius: 24,
              padding: 22,
              border: `1px solid ${COLORS.border}`,
              background:
                "radial-gradient(circle at 0% 0%, rgba(45,212,255,0.2), transparent 55%), rgba(15,23,42,0.9)",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: 10,
              }}
            >
              {[
                "What’s your next disruption?",
                "Do your systems really talk to each other?",
                "What happens when compliance meets chaos?",
                "Can one ghost protect a whole stack?",
                "How far can voice + data go?",
                "Is your company ready for multimodal ops?",
              ].map((q) => (
                <Bubble key={q}>{q}</Bubble>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NODES SECTION */}
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: COLORS.textSoft,
            marginBottom: 16,
          }}
        >
          TGhost Nodes
        </p>
        <h3
          style={{
            fontSize: 24,
            marginBottom: 8,
          }}
        >
          Born global. Tuned to your culture.
        </h3>
        <p
          style={{
            fontSize: 13,
            color: COLORS.textSoft,
            maxWidth: 520,
            marginBottom: 24,
          }}
        >
          Cada node TGhosT roda sobre a mesma inteligência base, mas fala a
          língua, sente o humor e entende o contexto do lugar onde está
          plugado.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          <NodeCard
            tag="US ALPHA NODE"
            country="United States"
            desc="Baixa latência com a OpenAI e backbone para integrações globais."
          />
          <NodeCard
            tag="LATAM NODE"
            country="Brazil"
            desc="Primeiro stack multimodal desenhado para operações em português."
          />
          <NodeCard
            tag="EU NODE"
            country="Ireland"
            desc="Ponto estratégico para expansão regulatória e compliance europeia."
          />
        </div>
      </section>

      {/* NEWS + FOOTER */}
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px 40px",
        }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: COLORS.textSoft,
            marginBottom: 16,
          }}
        >
          Latest News
        </p>

        <div
          style={{
            borderRadius: 18,
            border: `1px solid ${COLORS.border}`,
            backgroundColor: COLORS.bgSoft,
            overflow: "hidden",
            marginBottom: 40,
          }}
        >
          <NewsItem
            date="November 30, 2025"
            tag="API"
            title="TGhosT private beta powered by OpenAI"
            desc="Primeira versão beta privada do TGhosT™ integrada à API da OpenAI, com foco em automação segura para early adopters."
          />
          <NewsItem
            date="December 15, 2025"
            tag="Infra"
            title="RunAI Systems expands TGhosT nodes"
            desc="Novos nós de execução e segurança em múltiplas regiões para reduzir latência e aumentar a resiliência do ecossistema."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(148,163,184,0.16)",
          background:
            "radial-gradient(circle at 10% 0%, rgba(45,212,255,0.18), transparent 55%), radial-gradient(circle at 90% 100%, rgba(250,204,21,0.18), transparent 60%), #020617",
          marginTop: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "32px 24px 20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 32,
              fontSize: 13,
            }}
          >
            <FooterColumn title="Try TGhost on">
              <FooterLink>Web (tghost.ai)</FooterLink>
              <FooterLink>Mobile (soon)</FooterLink>
              <FooterLink>Desktop console (alpha)</FooterLink>
            </FooterColumn>

            <FooterColumn title="Products">
              <FooterLink>TGhosT™</FooterLink>
              <FooterLink>RunIDzeroTRUST™</FooterLink>
              <FooterLink>vNEXX™ (VENNON DISRUPT)</FooterLink>
              <FooterLink>RunsBI™</FooterLink>
              <FooterLink>dSOCIALBEAST™</FooterLink>
            </FooterColumn>

            <FooterColumn title="Company">
              <FooterLink>RunAI Systems LLC</FooterLink>
              <FooterLink>Careers (soon)</FooterLink>
              <FooterLink>Contact: hello@runaisystems.com</FooterLink>
              <FooterLink>News</FooterLink>
            </FooterColumn>

            <FooterColumn title="Resources">
              <FooterLink>Documentation (soon)</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Security &amp; Safety</FooterLink>
              <FooterLink>Legal &amp; Status</FooterLink>
            </FooterColumn>
          </div>

          <div
            style={{
              marginTop: 26,
              paddingTop: 18,
              borderTop: "1px solid rgba(15,23,42,0.9)",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              fontSize: 11,
              color: COLORS.textSoft,
            }}
          >
            <span>
              © 2025 RunAI Systems LLC · TGhosT™ Alpha WXM-9271. All rights
              reserved.
            </span>
            <span>Inspired by Kawai. Built by Wesley S. Macedo.</span>
            <span>Powered by OpenAI · Deployed on Vercel · Secured by GitHub.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Subcomponentes simples ---------- */

function NavItem({ children }: { children: React.ReactNode }) {
  const base: React.CSSProperties = {
    position: "relative",
    cursor: "pointer",
  };

  return (
    <span
      style={base}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        el.style.color = COLORS.accent;
        (el as any)._underline &&
          ((el as any)._underline.style.opacity = "1");
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        el.style.color = COLORS.text as string;
        (el as any)._underline &&
          ((el as any)._underline.style.opacity = "0");
      }}
      ref={(el) => {
        if (!el) return;
        if ((el as any)._underline) return;
        const underline = document.createElement("span");
        underline.style.position = "absolute";
        underline.style.left = "0";
        underline.style.bottom = "-6px";
        underline.style.width = "100%";
        underline.style.height = "2px";
        underline.style.borderRadius = "999px";
        underline.style.backgroundColor = "#e5e7eb";
        underline.style.opacity = "0";
        underline.style.transition = "opacity 160ms ease-out";
        (el as any)._underline = underline;
        el.appendChild(underline);
      }}
    >
      {children}
    </span>
  );
}

function Bubble({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: 999,
        padding: "8px 14px",
        border: "1px solid rgba(148,163,184,0.4)",
        background:
          "linear-gradient(to right, rgba(15,23,42,0.95), rgba(15,23,42,0.7))",
        fontSize: 12,
        color: COLORS.textSoft,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span>{children}</span>
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: 999,
          backgroundColor: COLORS.accent,
        }}
      />
    </div>
  );
}

function NodeCard({
  tag,
  country,
  desc,
}: {
  tag: string;
  country: string;
  desc: string;
}) {
  return (
    <div
      style={{
        borderRadius: 20,
        padding: 18,
        border: `1px solid ${COLORS.border}`,
        background:
          "radial-gradient(circle at 0% 0%, rgba(45,212,255,0.18), transparent 60%), rgba(15,23,42,0.96)",
        boxShadow: "0 18px 40px rgba(15,23,42,0.95)",
      }}
    >
      <p
        style={{
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: COLORS.textSoft,
          marginBottom: 8,
        }}
      >
        {tag}
      </p>
      <p
        style={{
          fontSize: 15,
          marginBottom: 6,
        }}
      >
        {country}
      </p>
      <p
        style={{
          fontSize: 12,
          color: COLORS.textSoft,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

function NewsItem({
  date,
  tag,
  title,
  desc,
}: {
  date: string;
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        padding: "16px 18px",
        borderBottom: `1px solid rgba(15,23,42,0.9)`,
        display: "flex",
        justifyContent: "space-between",
        gap: 18,
      }}
    >
      <div>
        <p
          style={{
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: COLORS.textSoft,
            marginBottom: 4,
          }}
        >
          {date}
        </p>
        <h4
          style={{
            fontSize: 15,
            marginBottom: 4,
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontSize: 12,
            color: COLORS.textSoft,
            maxWidth: 520,
          }}
        >
          {desc}
        </p>
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          borderRadius: 999,
          border: "1px solid rgba(148,163,184,0.5)",
          padding: "4px 12px",
          color: COLORS.textSoft,
        }}
      >
        {tag}
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p
        style={{
          fontSize: 12,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: COLORS.textSoft,
          marginBottom: 10,
        }}
      >
        {title}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: 13,
        color: COLORS.text,
        cursor: "pointer",
        opacity: 0.85,
      }}
      onMouseEnter={(e) => ((e.currentTarget.style.opacity = "1"))}
      onMouseLeave={(e) => ((e.currentTarget.style.opacity = "0.85"))}
    >
      {children}
    </span>
  );
}
