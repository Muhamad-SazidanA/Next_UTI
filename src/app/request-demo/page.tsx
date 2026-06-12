"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
    digitalSolutions,
    footerNav,
    itSolutions,
    navLinks,
} from "../../lib/data";

const requestFields = [
    { name: "first", label: "Nama Depan", type: "text", required: true },
    { name: "last", label: "Nama Belakang", type: "text" },
    { name: "company", label: "Asal Perusahaan", type: "text", required: true },
    { name: "position", label: "Posisi di Perusahaan", type: "text", required: true },
    { name: "email", label: "Email Kerja", type: "email", required: true },
    { name: "need", label: "Kebutuhan", type: "text", required: true },
    { name: "phone", label: "Nomor Ponsel", type: "tel", required: true, span: 2 },
];

export default function Page() {
    return (
        <>
            <main>
                <section className="bg-white py-16 md:py-20">
                    <div className="container-uti">
                        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] items-start">
                            <Intro />
                            <RequestForm />
                        </div>
                    </div>
                </section>
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
        `absolute left-0 top-full z-50 mt-1 w-[420px] transition duration-200 ease-out ${openMenu === menu
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
                                className={`text-[10px] transition-transform duration-200 ${openMenu === "digital" ? "rotate-180" : ""
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
                                className={`text-[10px] transition-transform duration-200 ${openMenu === "it" ? "rotate-180" : ""
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

function MapEmbed() {
    return (
        <div className="mt-5 rounded-2xl overflow-hidden border border-line bg-white shadow-soft">
            <div className="aspect-[16/9] relative">
                <iframe
                    title="Lokasi UTI"
                    src="https://maps.google.com/maps?q=Jl.+Siantar+No.18+Cideng+Jakarta+Pusat&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

function Intro() {
    return (
        <div className="max-w-xl">
            <h1 className="text-xl md:text-2xl font-extrabold text-brand leading-tight">
                Siap Membangun Masa Depan
                <br />
                Digital Perusahaan Anda?
            </h1>
            <p className="mt-2 text-xs md:text-sm text-muted leading-relaxed">
                Bergabunglah dengan ratusan klien enterprise yang telah mempercepat
                pertumbuhan bisnis mereka melalui infrastruktur TI yang tangguh dan
                solusi otomatisasi cerdas dari UTI.
            </p>

            <MapEmbed />
        </div>
    );
}

function RequestForm() {
    return (
        <div className="rounded-2xl border border-line bg-white p-6 md:p-8 shadow-card">
            <p className="text-[11px] font-semibold tracking-wider uppercase text-muted">
                Hubungi Kami
            </p>
            <h2 className="mt-1 text-base md:text-lg font-extrabold text-brand">
                Diskusikan Solusi Anda
            </h2>

            <form
                className="mt-4 grid gap-4 sm:grid-cols-2"
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                }}
            >
                {requestFields.map((field) => (
                    <label
                        key={field.name}
                        className={`text-[11px] font-medium text-ink/70 grid gap-1 ${field.span === 2 ? "sm:col-span-2" : ""
                            }`}
                    >
                        <span className="inline-flex items-center gap-1">
                            {field.label}
                            {field.required && <span className="text-red-500">*</span>}
                        </span>
                        <input
                            type={field.type}
                            required={field.required}
                            className="rounded-md border border-line bg-white px-3 py-2 text-[13px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-brand transition"
                        />
                    </label>
                ))}
                <button
                    type="submit"
                    className="sm:col-span-2 rounded-md bg-brand py-3 text-xs md:text-sm font-semibold text-white hover:brightness-110 transition"
                >
                    Kirim
                </button>
            </form>
        </div>
    );
}
