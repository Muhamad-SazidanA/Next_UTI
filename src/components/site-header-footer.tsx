"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { digitalSolutions, footerNav, itSolutions, navLinks } from "~/lib/data";

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const dropdownClass = (menu: string) =>
    `absolute left-0 top-full z-50 mt-1 w-[420px] transition duration-200 ease-out ${
      openMenu === menu
        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
        : "opacity-0 translate-y-2 scale-[0.98] pointer-events-none"
    }`;

  return (
    <header
      ref={headerRef}
      className="site-header sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-line"
    >
      <div className="container-uti flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/layout/Logo-Uti.svg"
            alt="UTI Logo"
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-ink/80">
          <Link href={navLinks[0].href} className="hover:text-brand transition font-medium">
            {navLinks[0].label}
          </Link>

          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-2 font-medium text-ink/80 hover:text-brand transition"
              aria-haspopup="true"
              aria-expanded={openMenu === "digital"}
              onClick={() => toggleMenu("digital")}
            >
              Digital Solutions
              <span
                className={`text-[10px] transition-transform duration-200 ${
                  openMenu === "digital" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            <div className={dropdownClass("digital")}>
              <div className="rounded-2xl border border-line/80 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.5)]">
                <div className="flex items-center justify-between px-4 pt-4 pb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                    Digital Solutions
                  </span>
                  <span className="text-[11px] text-muted">10 Products</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 px-4 pb-4">
                  {digitalSolutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-center justify-between rounded-xl px-3 py-2 text-sm text-ink/80 hover:bg-brand/5 hover:text-brand transition"
                      onClick={() => setOpenMenu(null)}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-brand opacity-0 translate-x-1 transition group-hover/item:opacity-100 group-hover/item:translate-x-0">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-2 font-medium text-ink/80 hover:text-brand transition"
              aria-haspopup="true"
              aria-expanded={openMenu === "it"}
              onClick={() => toggleMenu("it")}
            >
              IT Solutions
              <span
                className={`text-[10px] transition-transform duration-200 ${
                  openMenu === "it" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            <div className={dropdownClass("it")}>
              <div className="rounded-2xl border border-line/80 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.5)]">
                <div className="flex items-center justify-between px-4 pt-4 pb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                    IT Solutions
                  </span>
                  <span className="text-[11px] text-muted">
                    {itSolutions.length} Products
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 px-4 pb-4">
                  {itSolutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-center justify-between rounded-xl px-3 py-2 text-sm text-ink/80 hover:bg-brand/5 hover:text-brand transition"
                      onClick={() => setOpenMenu(null)}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-brand opacity-0 translate-x-1 transition group-hover/item:opacity-100 group-hover/item:translate-x-0">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href={navLinks[1]!.href}
            className="hover:text-brand transition font-medium"
          >
            {navLinks[1]!.label}
          </Link>
        </nav>

        <Link href="/request-demo" className="cta-pill text-xs md:text-sm">
          Request Demo
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer bg-[#0b0f1a] text-[#9CA3AF]">
      <div className="container-uti grid gap-10 py-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <h4 className="font-bold text-white mb-6">Company</h4>
          <ul className="text-sm leading-relaxed">
            <li className="mb-4">
              Jl. Siantar No.18, Cideng, Gambir<br />
              Jakarta Pusat, Jakarta
            </li>
            <li className="mb-3">
              <strong className="text-white">WhatsApp:</strong> +62 878-6500-0432
            </li>
            <li className="mb-3">
              <strong className="text-white">Phone:</strong> +62 21 350-5050 (Hunting)
            </li>
            <li className="mb-3">
              <strong className="text-white">Email:</strong> sales@uti.co.id
            </li>
            <li>Senin – Jumat (09.00–17.00 WIB)</li>
          </ul>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <h4 className="font-bold text-white mb-6">Menu</h4>
            <ul className="space-y-3 text-sm">
              {footerNav.map((navItem) => (
                <li key={navItem.href}>
                  <Link href={navItem.href} className="hover:text-white transition">
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Digital Solutions</h4>
            <ul className="space-y-3 text-sm">
              {digitalSolutions.map((product) => (
                <li key={product.href}>
                  <Link href={product.href} className="hover:text-white transition">
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">IT Solutions</h4>
            <ul className="space-y-3 text-sm">
              {itSolutions.map((solution) => (
                <li key={solution.href}>
                  <Link href={solution.href} className="hover:text-white transition">
                    {solution.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-uti py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-[#9CA3AF]/80">
          <span>© Copyright Company All Rights Reserved</span>
          <span>Design by United Teknologi Integrasi</span>
        </div>
      </div>
    </footer>
  );
}
