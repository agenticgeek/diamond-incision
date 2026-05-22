"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageProvider";

export default function Header() {
  const { locale, setLocale, strings } = useLanguage();
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
          <Image src="/assets/Metcare-logo.svg" alt="METCARE Logo" width={26} height={26} className="w-[26px] h-[26px]" />
          <span>METCARE<sup className="text-[8px]">®</sup></span>
        </Link>
        <span className="w-px h-[18px] bg-current opacity-25"></span>
        <Link href="#top" onClick={(e) => scrollToSection(e, "#top")} className="flex items-center gap-2 font-display font-bold text-[13px] tracking-[0.06em]">
          <Image
            src="/assets/logo.png"
            alt="Diamond Incision Logo"
            width={26}
            height={26}
            className="w-[26px] h-[26px]"
          />
          <span>Diamond Incision<sup className="text-[8px]">®</sup></span>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-7">
        {strings.header.nav.map((item) => (
          <Link
            key={item.label}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, `#${item.id}`)}
            className="font-mono text-[11px] tracking-[0.16em] uppercase opacity-70 hover:opacity-100 transition-opacity"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="font-mono text-[11px] tracking-[0.16em] uppercase flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setLocale("fr")}
          className={`transition-opacity ${locale === "fr" ? "opacity-100" : "opacity-40"}`}
        >
          FR
        </button>
        <span className="opacity-40">/</span>
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={`transition-opacity ${locale === "en" ? "opacity-100" : "opacity-40"}`}
        >
          EN
        </button>
      </div>
    </header>
  );
}
