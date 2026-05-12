"use client";

import Reveal from "./Reveal";

const profiles = [
  {
    id: "patient",
    num: "P / 01 — Patient",
    title: "Je suis\npatient",
    desc: "Parcours esthétique, consultations Diamond et accompagnement avant/après intervention.",
    cta: "Accéder",
    icon: "pi-1",
    className: "bg-snow",
  },
  {
    id: "pro",
    num: "P / 02 — Pro",
    title: "Je suis professionnel du péri-opératoire",
    desc: "Formations avancées Diamond × METCARE et protocoles d'accompagnement.",
    cta: "Formations",
    icon: "pi-2",
    className: "bg-cherry text-snow border-transparent",
  },
  {
    id: "chirurgien",
    num: "P / 03 — Surgeon",
    title: "Je suis chirurgien / médecin",
    desc: "Technique Diamond Incision, formations avancées et écosystème dédié.",
    cta: "Candidature",
    icon: "pi-3",
    className: "bg-slate text-snow border-transparent",
  },
  {
    id: "protocoles",
    num: "P / 04 — Protocols",
    title: "Protocoles & solutions",
    desc: "Produits et protocoles associés à l'écosystème Diamond Incision.",
    cta: "Découvrir",
    icon: "pi-4",
    className: "bg-navy text-snow border-transparent",
  },
];

export default function ProfileSelector() {
  return (
    <section className="py-[120px] md:pb-[140px] bg-snow-warm border-t border-(rule) relative">
      <div className="absolute top-0 left-0 right-0 border-b border-(rule) py-3 overflow-hidden bg-snow-warm">
        <div className="flex gap-[60px] w-max animate-ticker items-center" style={{ animationDuration: "60s" }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className="font-mono text-[11px] tracking-[0.22em] uppercase flex items-center gap-[60px]">
              Choisissez votre parcours · Patient · Professionnel · Chirurgien · Protocoles · Solutions · Diamond × METCARE
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute top-[64px] left-8 md:left-[32px] flex items-center gap-[10px]">
        <span className="w-1.5 h-1.5 rounded-full bg-silver"></span>
        <span className="font-mono text-[11px] tracking-[0.18em]">03</span>
        <span className="font-mono text-[11px] tracking-[0.18em] opacity-55">— Choisissez votre parcours</span>
      </div>
      
      <div className="max-w-[1380px] mx-auto px-8 md:px-[32px] mt-14">
        <div className="flex flex-wrap justify-between items-end gap-10 mb-[60px]">
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(34px,4.4vw,64px)] leading-[0.95] tracking-[-0.02em] uppercase text-balance max-w-[780px]">
              Choisissez<br />votre <em className="not-italic text-silver font-medium">parcours.</em>
            </h2>
          </Reveal>
          <Reveal delay={200} className="max-w-[380px]">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-silver font-medium mb-3.5">
              04 destinations · 1 écosystème
            </div>
            <p className="font-sans font-light text-[15px] leading-[1.6] text-[#3a2326] text-pretty">
              Chaque profil bénéficie d'un accompagnement, de contenus et de solutions adaptés à ses besoins au sein de l'écosystème Diamond Incision × METCARE®.
            </p>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {profiles.map((profile, idx) => (
            <Reveal key={profile.id} delay={idx * 100}>
              <a
                href={`#${profile.id}`}
                className={`group relative flex flex-col justify-between p-7 md:p-6 pb-[26px] min-h-[380px] rounded-[18px] border border-(rule) transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] overflow-hidden cursor-pointer hover:-translate-y-1.5 hover:border-silver ${profile.className}`}
              >
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[rgba(106,136,164,0.06)_60%] pointer-events-none"></div>
                <div className="font-mono text-[11px] tracking-[0.18em] opacity-55 relative z-10">{profile.num}</div>
                
                <div className="h-[88px] flex items-center my-[18px] mb-2 relative z-10">
                  <div className={`w-16 h-16 relative ${profile.icon}`}>
                    {profile.icon === "pi-1" && (
                      <>
                        <span className="absolute inset-2 rounded-full border-[1.5px] border-current opacity-70"></span>
                        <span className="absolute left-1/2 top-3.5 w-5 h-5 bg-current rounded-full -translate-x-1/2 opacity-85"></span>
                        <span className="absolute left-1/2 bottom-2 w-[38px] h-[24px] rounded-t-3xl rounded-b-[4px] bg-current -translate-x-1/2 opacity-85"></span>
                      </>
                    )}
                    {profile.icon === "pi-2" && (
                      <>
                        <span className="absolute inset-x-[10px] inset-y-1.5 border-[1.5px] border-current opacity-55"></span>
                        <span className="absolute top-[22px] left-[18px] right-[18px] h-[1.5px] bg-current shadow-[0_8px_0_currentColor,0_16px_0_currentColor] opacity-85"></span>
                      </>
                    )}
                    {profile.icon === "pi-3" && (
                      <div className="grid place-items-center w-full h-full">
                        <span className="w-[38px] h-[38px] bg-current rotate-45 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] opacity-90"></span>
                        <span className="absolute w-3.5 h-3.5 bg-silver rounded-full top-2 right-1.5"></span>
                      </div>
                    )}
                    {profile.icon === "pi-4" && (
                      <div className="grid place-items-center w-full h-full">
                        <span className="w-[46px] h-[46px] border-[1.5px] border-current rounded-[14px] opacity-70"></span>
                        <span className="absolute w-[22px] h-[22px] bg-current rounded-md opacity-85"></span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-lg leading-[1.05] tracking-[-0.01em] uppercase text-balance whitespace-pre-line">
                    {profile.title}
                  </h3>
                  <p className="font-sans font-light text-[13px] leading-[1.55] opacity-78 mt-2.5">
                    {profile.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-[22px] pt-4 border-t border-current font-mono text-[10px] tracking-[0.2em] uppercase relative z-10">
                  <b className="opacity-80">{profile.cta}</b>
                  <span className="w-6 h-2 relative opacity-70 transition-opacity group-hover:opacity-100">
                    <span className="absolute left-0 right-0 top-1/2 h-[1px] bg-current -translate-y-1/2"></span>
                    <span className="absolute right-0 top-1/2 w-1.5 h-1.5 border-t border-r border-current -translate-y-1/2 rotate-45"></span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
