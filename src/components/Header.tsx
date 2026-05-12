"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOnDark, setIsOnDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = document.querySelectorAll(".sect-dark, .sect-navy, .sect-slate, .sect-final, footer");
      let dark = false;
      
      // Convert NodeList to Array and reverse it to check top-most sections first
      const sectionsArray = Array.from(darkSections).reverse();
      
      for (const section of sectionsArray) {
        const rect = section.getBoundingClientRect();
        // For stacked sections, the one currently "on top" will have its top <= 0
        // and its bottom > 80.
        if (rect.top <= 80 && rect.bottom > 80) {
          dark = true;
          break; // Found the active section, stop checking
        }
      }
      setIsOnDark(dark);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="topbar"
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-8 py-[18px] backdrop-blur-[14px] saturate-[1.2] border-b transition-all duration-400 ${
        isOnDark
          ? "bg-linear-to-b from-[rgba(16,24,43,0.72)] to-[rgba(16,24,43,0.3)] border-(--rule-light) text-snow"
          : "bg-linear-to-b from-[rgba(236,235,233,0.78)] to-[rgba(236,235,233,0.4)] border-(--rule) text-cherry"
      }`}
    >
      <div className="flex items-center gap-[18px]">
        <Link href="#top" onClick={(e) => scrollToSection(e, "#top")} className="flex items-center gap-2 font-display font-bold text-[13px] tracking-[0.06em]">
          <span className="w-[26px] height-[26px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff,#c9d3de_40%,#7b95ad_78%,#3f546a)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] block aspect-square"></span>
          <span>METCARE<sup className="text-[8px]">®</sup></span>
        </Link>
        <span className="w-px h-[18px] bg-current opacity-25"></span>
        <Link href="#top" onClick={(e) => scrollToSection(e, "#top")} className="flex items-center gap-2 font-display font-bold text-[13px] tracking-[0.06em]">
          <span className="w-[26px] h-[26px] grid place-items-center relative">
            <span className="w-[14px] h-[14px] bg-linear-to-br from-white via-[#c9d3de_30%] via-[#6a88a4_70%] to-[#1b2d4f] rotate-45 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4),0_4px_14px_rgba(106,136,164,0.4)]"></span>
          </span>
          <span>Diamond Incision<sup className="text-[8px]">®</sup></span>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-7">
        {["Parcours", "Patient", "Professionnel", "Chirurgien", "Protocoles", "Immersion"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
            className="font-mono text-[11px] tracking-[0.16em] uppercase opacity-70 hover:opacity-100 transition-opacity"
          >
            {item}
          </Link>
        ))}
      </nav>
      <div className="font-mono text-[11px] tracking-[0.16em] uppercase flex items-center gap-1.5">
        <b className="opacity-100">FR</b>
        <span className="opacity-40">/ EN</span>
      </div>
    </header>
  );
}
