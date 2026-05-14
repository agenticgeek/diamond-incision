import Link from "next/link";

export default function ChirurgienCandidaturePage() {
  return (
    <main className="min-h-screen bg-slate text-snow px-8 py-[140px] md:px-[32px]">
      <div className="mx-auto max-w-[720px]">
        <p className="mb-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-beige">
          Section 06 · Candidature Diamond
        </p>
        <h1 className="font-display text-[clamp(40px,5.4vw,80px)] font-bold uppercase leading-[0.9] tracking-tight text-balance">
          Diamond candidature formation
        </h1>
        <p className="mt-6 max-w-[560px] font-sans text-[clamp(17px,1.3vw,20px)] font-light leading-[1.7] text-[rgba(236,235,233,0.78)] text-pretty">
          Découvrez la technique Diamond Incision, les formations avancées et une approche innovante dédiée au traitement de la cellulite et des fibroses cicatricielles.
        </p>
        <Link
          href="/#chirurgien"
          className="mt-10 inline-flex items-center gap-3.5 rounded-full border border-[rgba(236,235,233,0.7)] px-7 py-[18px] font-display text-xs font-bold uppercase tracking-[0.14em] transition-all hover:-translate-y-0.5 hover:bg-snow hover:text-cherry"
        >
          Retour à l&apos;écosystème
        </Link>
      </div>
    </main>
  );
}
