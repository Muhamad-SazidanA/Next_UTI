"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
    digitalSolutions,
    footerNav,
    itSolutions,
    navLinks,
} from "../../lib/data";

export default function Page() {
    return (
        <>
            <main>
                <Banner />
                <NewsGrid />
            </main>
            <ScrollAnimator />
        </>
    );
}

function Header() {
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
            className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-line"
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
                    <Link href={navLinks[0].href} className="hover:text-brand transition">
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

                    {navLinks.slice(1).map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="hover:text-brand transition"
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <Link href="/request-demo" className="cta-pill text-xs md:text-sm">
                    Request Demo
                </Link>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="bg-[#0b0f1a] text-white/85">
            <div className="container-uti grid gap-10 py-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
                <div>
                    <h4 className="font-bold text-white mb-4">Company</h4>
                    <ul className="space-y-2 text-sm leading-relaxed">
                        <li>Jl. Siantar No.18, Cideng, Gambir</li>
                        <li>Jakarta Pusat, Jakarta</li>
                        <li>
                            <strong className="text-white">WhatsApp:</strong> +62 878-6500-0432
                        </li>
                        <li>
                            <strong className="text-white">Phone:</strong> +62 21 350-5050 (Hunting)
                        </li>
                        <li>
                            <strong className="text-white">Email:</strong> sales@uti.co.id
                        </li>
                        <li>Senin – Jumat (09.00–17.00 WIB)</li>
                    </ul>
                </div>

                <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <h4 className="font-bold text-white mb-4">Menu</h4>
                        <ul className="space-y-2 text-sm">
                            {footerNav.map((n) => (
                                <li key={n.href}>
                                    <Link href={n.href} className="hover:text-white transition">
                                        {n.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Digital Solutions</h4>
                        <ul className="space-y-2 text-sm">
                            {digitalSolutions.map((p) => (
                                <li key={p.href}>
                                    <Link href={p.href} className="hover:text-white transition">
                                        {p.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">IT Solutions</h4>
                        <ul className="space-y-2 text-sm">
                            {itSolutions.map((s) => (
                                <li key={s.href}>
                                    <Link href={s.href} className="hover:text-white transition">
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="container-uti py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-white/60">
                    <span>© Copyright Company All Rights Reserved</span>
                    <span>Design by United Teknologi Integrasi</span>
                </div>
            </div>
        </footer>
    );
}

function ScrollAnimator() {
    const pathname = usePathname();

    useEffect(() => {
        const elements = Array.from(
            document.querySelectorAll<HTMLElement>("[data-reveal]")
        );

        if (!elements.length) {
            return;
        }

        if (!("IntersectionObserver" in window)) {
            elements.forEach((el) => el.classList.add("is-revealed"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const target = entry.target as HTMLElement;
                    const delay = target.dataset.revealDelay;
                    if (delay) {
                        target.style.transitionDelay = delay;
                    }

                    target.classList.add("is-revealed");
                    currentObserver.unobserve(target);
                });
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}

function Banner() {
    return (
        <section className="relative overflow-hidden text-white">
            <div className="absolute inset-0">
                <img
                    src="/images/news/ImgBannerNews.webp"
                    alt="UTI Insights"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/20" />
            <div className="container-uti relative py-16 md:py-20 text-center">
                <h1 className="text-xl md:text-3xl font-extrabold">
                    Stay Ahead with UTI Insights
                </h1>
                <p className="mt-2 text-xs md:text-sm text-white/85 max-w-2xl mx-auto">
                    Stay ahead of the curve with our curated articles on AI,
                    IT trends, automation, and real-world case studies.
                </p>
            </div>
        </section>
    );
}

function NewsGrid() {
    const newsItems = Array.from({ length: 6 }).map((_, index) => ({
        id: index + 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "02 Desember 2025",
    }));

    return (
        <section className="bg-[#F5F7FB] py-14 md:py-16">
            <div className="container-uti">
                <div className="grid gap-6 md:grid-cols-3">
                    {newsItems.map((item) => (
                        <Link
                            key={item.id}
                            href="/news"
                            className="block rounded-2xl border border-line bg-white overflow-hidden shadow-soft transition hover:-translate-y-1"
                        >
                            <div className="aspect-[16/9] bg-surface flex items-center justify-center">
                                <img
                                    src="/images/home/Dummy-News&Event.svg"
                                    alt="News"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-5">
                                <h2 className="text-xs font-bold text-ink leading-snug">
                                    {item.title}
                                </h2>
                                <p className="mt-2 text-[11px] text-muted">{item.date}</p>
                                <span className="mt-3 inline-flex text-[11px] font-semibold text-brand">
                                    Read More →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
