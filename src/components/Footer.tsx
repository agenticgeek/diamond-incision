"use client";

import Reveal from "./Reveal";

export default function FinalCTA() {
  const cards = [
    { id: "patient", num: "F / 01", label: "Patient", title: "Je suis\npatient", cta: "Accéder", icon: "pi-1" },
    { id: "pro", num: "F / 02", label: "Pro", title: "Je suis\nprofessionnel", cta: "Formations", icon: "pi-2" },
    { id: "chirurgien", num: "F / 03", label: "Surgeon", title: "Je suis\nchirurgien", cta: "Candidature", icon: "pi-3" },
    { id: "protocoles", num: "F / 04", label: "Boutique", title: "Protocoles\n& solutions", cta: "Découvrir", icon: "pi-4" },
  ];

  return (
    <section className="py-[140px] pb-[100px] bg-ink text-snow relative overflow-hidden sect-final" id="final">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(106,136,164,0.18),transparent_60%)] pointer-events-none"></div>
      
      <div className="absolute top-8 left-8 md:top-[32px] md:left-[32px] flex items-center gap-[10px]">
        <span className="w-1.5 h-1.5 rounded-full bg-silver"></span>
        <span className="font-mono text-[11px] tracking-[0.18em] text-silver">09</span>
        <span className="font-mono text-[11px] tracking-[0.18em] opacity-55 text-[rgba(236,235,233,0.55)]">— Découvrez votre parcours</span>
      </div>
      
      <div className="max-w-[1380px] mx-auto px-8 md:px-[32px]">
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(46px,6.8vw,118px)] leading-[0.9] tracking-[-0.03em] uppercase text-center text-balance">
            Découvrez<br />votre <span className="chrome-text-final italic">parcours.</span>
          </h2>
          <p className="text-center max-w-[620px] mx-auto mt-6 text-[rgba(236,235,233,0.7)] font-sans font-light text-[17px] leading-[1.6]">
            Quatre destinations, un écosystème. Choisissez le parcours qui vous ressemble — patients, professionnels, chirurgiens, protocoles.
          </p>
        </Reveal>
        
        <div className="mt-[70px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {cards.map((card, idx) => (
            <Reveal key={card.id} delay={idx * 100}>
              <a
                href={`#${card.id}`}
                className="group relative p-8 md:p-6 pb-[26px] min-h-[280px] rounded-[18px] bg-[rgba(236,235,233,0.04)] border-(rule-light) flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-400 hover:bg-[rgba(236,235,233,0.08)] hover:-translate-y-1"
              >
                <div className="flex justify-between font-mono text-[10px] tracking-[0.2em] text-beige uppercase">
                  <span>{card.num}</span>
                  <span>{card.label}</span>
                </div>
                
                <div className="h-[54px] my-[18px] mb-2 text-beige">
                  <div className={`w-12 h-12 relative ${card.icon}`}>
                    {card.icon === "pi-1" && (
                      <>
                        <span className="absolute inset-1.5 rounded-full border-[1.5px] border-current opacity-70"></span>
                        <span className="absolute left-1/2 top-2.5 w-4 h-4 bg-current rounded-full -translate-x-1/2 opacity-85"></span>
                        <span className="absolute left-1/2 bottom-1.5 w-[30px] h-[18px] rounded-t-2xl rounded-b-[3px] bg-current -translate-x-1/2 opacity-85"></span>
                      </>
                    )}
                    {card.icon === "pi-2" && (
                      <>
                        <span className="absolute inset-x-2 inset-y-1 border-[1.5px] border-current opacity-55"></span>
                        <span className="absolute top-[14px] left-3.5 right-3.5 h-[1.5px] bg-current shadow-[0_6px_0_currentColor,0_12px_0_currentColor] opacity-85"></span>
                      </>
                    )}
                    {card.icon === "pi-3" && (
                      <div className="grid place-items-center w-full h-full">
                        <span className="w-8 h-8 bg-current rotate-45 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)] opacity-90"></span>
                        <span className="absolute w-2.5 h-2.5 bg-silver rounded-full top-1 right-1"></span>
                      </div>
                    )}
                    {card.icon === "pi-4" && (
                      <div className="grid place-items-center w-full h-full">
                        <span className="w-9 h-9 border-[1.5px] border-current rounded-lg opacity-70"></span>
                        <span className="absolute w-4 h-4 bg-current rounded-sm opacity-85"></span>
                      </div>
                    )}
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-[15px] leading-[1.15] tracking-[-0.01em] uppercase text-balance whitespace-pre-line">
                  {card.title}
                </h3>
                
                <div className="mt-[18px] pt-4 border-t border-(rule-light) flex justify-between items-center font-mono text-[10px] tracking-[0.2em] uppercase">
                  <b>{card.cta}</b>
                  <span className="w-6 h-[1.5px] bg-current relative">
                    <span className="absolute right-0 top-1/2 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-current -translate-y-1/2 rotate-45"></span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-[72px] flex justify-center items-center gap-10 pt-10 border-t border-(rule-light) flex-wrap">
          <div className="flex items-center gap-2.5 font-display font-bold text-sm tracking-[0.06em] uppercase">
            <span className="w-[26px] h-[26px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff,#c9d3de_40%,#7b95ad_78%,#3f546a)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"></span>
            <span>METCARE®</span>
          </div>
          <span className="font-mono text-lg text-silver">×</span>
          <div className="flex items-center gap-2.5 font-display font-bold text-sm tracking-[0.06em] uppercase">
            <span className="w-[26px] h-[26px] grid place-items-center relative">
              <span className="w-[14px] h-[14px] bg-linear-to-br from-white via-[#c9d3de_30%] via-[#6a88a4_70%] to-[#1b2d4f] rotate-45 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4),0_4px_14px_rgba(106,136,164,0.4)]"></span>
            </span>
            <span>Diamond Incision®</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-[rgba(236,235,233,0.7)] py-[60px] pb-10 border-t border-(rule-light)">
      <div className="max-w-[1380px] mx-auto px-8 md:px-[32px]">
        <div className="flex justify-between items-center gap-[30px] flex-wrap">
          <div className="flex items-center gap-[18px] text-snow">
            <div className="flex items-center gap-2 font-display font-bold text-[13px] tracking-[0.06em]">
              <span className="w-[26px] h-[26px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff,#c9d3de_40%,#7b95ad_78%,#3f546a)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"></span>
              <span>METCARE<sup className="text-[8px]">®</sup></span>
            </div>
            <span className="w-px h-[18px] bg-[rgba(236,235,233,0.3)]"></span>
            <div className="flex items-center gap-2 font-display font-bold text-[13px] tracking-[0.06em]">
              <span className="w-[26px] h-[26px] grid place-items-center relative">
                <span className="w-[14px] h-[14px] bg-linear-to-br from-white via-[#c9d3de_30%] via-[#6a88a4_70%] to-[#1b2d4f] rotate-45 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4),0_4px_14px_rgba(106,136,164,0.4)]"></span>
              </span>
              <span>Diamond Incision<sup className="text-[8px]">®</sup></span>
            </div>
          </div>
          
          <div className="flex gap-[22px] font-mono text-[11px] tracking-[0.16em] uppercase flex-wrap">
            <a href="#" className="opacity-65 hover:opacity-100 transition-opacity">Mentions légales</a>
            <a href="#" className="opacity-65 hover:opacity-100 transition-opacity">Politique de confidentialité</a>
            <a href="#" className="opacity-65 hover:opacity-100 transition-opacity">Contact</a>
            <a href="#" className="text-snow opacity-90">FR / EN</a>
          </div>
        </div>
        
        <div className="mt-[30px] pt-6 border-t border-(rule-light) font-mono text-[10px] tracking-[0.18em] text-[rgba(236,235,233,0.45)] flex justify-between flex-wrap gap-3.5">
          <span>© 2026 METCARE® / My Esthetic Travel® — Mila Pecheu. Tous droits réservés.</span>
          <span>Diamond Incision® × METCARE® · Édition 2026 · Confidential</span>
        </div>
      </div>
    </footer>
  );
}
