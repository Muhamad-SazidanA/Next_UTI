"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type FormEvent,
} from "react";
import {
    digitalSolutions,
    footerNav,
    itSolutions,
    navLinks,
} from "../../lib/data";
import {
    CheckCircle2,
    Globe,
    Handshake,
    Mail,
    Phone,
    ShieldCheck,
    Target,
    Zap,
} from "lucide-react";

const ctaFields = [
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
                <Hero />
                <Story />
                <WhatWeDo />
                <AboutStats />
                <Offices />
                <AfterSales />
                <CTAForm />
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

function Hero() {
    const heroStats = [
        { value: "20+", label: "Tahun Pengalaman" },
        { value: "500+", label: "Klien Aktif" },
        { value: "8", label: "Sektor Industri" },
    ];

    return (
        <section className="relative overflow-hidden bg-white">
            <div className="container-uti grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] items-center">
                <div data-reveal="fade-up">
                    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand/70">
                        Est. 2005 - Jakarta, Indonesia
                    </span>
                    <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-ink">
                        <span className="block">Building the</span>
                        <span className="block text-brand">Digital Future</span>
                        <span className="block">Together</span>
                    </h1>
                    <p className="mt-4 text-sm md:text-base text-muted leading-relaxed max-w-xl">
                        Sejak 2005, PT. United Teknologi Integrasi hadir sebagai mitra
                        strategis transformasi digital - menghadirkan solusi IT terintegrasi
                        yang inovatif, andal, dan terukur untuk ratusan bisnis di Indonesia.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-6">
                        {heroStats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-xl md:text-2xl font-extrabold text-brand">
                                    {stat.value}
                                </div>
                                <div className="text-[11px] text-muted">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full" data-reveal="fade-left" data-reveal-delay="140ms">
                    <Image
                        src="/images/about/About-CS.webp"
                        alt="UTI Core Services"
                        width={1200}
                        height={900}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

function Story() {
    const storyTimeline = [
        {
            year: "2005",
            badge: "05",
            title: "Berdiri di Jakarta Pusat",
            body: "UTI didirikan dengan visi menjadi penyedia solusi IT terintegrasi yang andal di ibu kota Indonesia.",
        },
        {
            year: "2012",
            badge: "12",
            title: "Ekspansi Branch Office",
            body: "Membuka kantor cabang di Pulo Gadung dan Cikarang untuk melayani industri manufaktur dan logistik.",
        },
        {
            year: "2018",
            badge: "18",
            title: "Digitalization & Automation",
            body: "Memperluas portofolio ke solusi digitalisasi, AI, dan otomasi proses bisnis untuk enterprise.",
        },
        {
            year: "2026",
            badge: "26",
            title: "Building the Digital Future",
            body: "Melayani 500+ klien aktif di 8 sektor industri dengan ekosistem solusi IT dan digital terlengkap.",
            active: true,
        },
    ];

    const storyHighlights = [
        {
            title: "Solution-Focused",
            body: "Solusi terukur, relevan, dan tepat sasaran.",
            icon: Target,
        },
        {
            title: "Trusted & Reliable",
            body: "Komitmen SLA dan keandalan layanan tertinggi.",
            icon: ShieldCheck,
        },
        {
            title: "Agile & Innovative",
            body: "Adaptif terhadap perubahan teknologi terkini.",
            icon: Zap,
        },
        {
            title: "Long-term Partnership",
            body: "Bukan hanya vendor, tapi mitra strategis bisnis.",
            icon: Handshake,
        },
    ];

    return (
        <section className="py-12 md:py-16">
            <div className="container-uti grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-start">
                <div data-reveal="fade-right">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand/70">
                        <span className="h-px w-6 bg-brand/60" />
                        Our Story
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-ink leading-tight">
                        Dua Dekade Membangun
                        <br className="hidden md:block" />
                        <span className="text-brand">Kepercayaan Digital</span>
                    </h2>

                    <div className="mt-8 relative space-y-6">
                        <div className="absolute left-[18px] top-1 bottom-1 w-px bg-line" />
                        {storyTimeline.map((item) => (
                            <div key={item.year} className="relative flex gap-4">
                                <div
                                    className={`h-9 w-9 flex-shrink-0 rounded-full text-xs font-semibold flex items-center justify-center ${item.active
                                            ? "bg-brand text-white"
                                            : "border border-line bg-white text-brand"
                                        }`}
                                >
                                    {item.badge}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-brand">{item.year}</p>
                                    <h3 className="mt-1 text-sm font-bold text-ink">{item.title}</h3>
                                    <p className="mt-1 text-xs text-muted leading-relaxed max-w-sm">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div data-reveal="fade-left" data-reveal-delay="120ms">
                    <h3 className="text-base font-bold text-ink">
                        Mitra Strategis Transformasi Digital Anda
                    </h3>
                    <p className="mt-3 text-xs text-muted leading-relaxed">
                        Menghubungkan solusi IT yang tepat dengan kebutuhan spesifik bisnis
                        adalah inti dari layanan kami. Pengalaman bertahun-tahun memastikan
                        solusi yang kami hadirkan telah teruji - dengan skalabilitas dan
                        fleksibilitas penuh.
                    </p>
                    <p className="mt-3 text-xs text-muted leading-relaxed">
                        Kami tidak hanya berfokus pada teknologi, tetapi juga membangun
                        hubungan jangka panjang. Kepercayaan dan kepuasan pelanggan adalah
                        prioritas utama kami.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {storyHighlights.map((item) => {
                            const Icon = item.icon;
                            return (
                                <article
                                    key={item.title}
                                    className="rounded-2xl border border-line bg-white p-4 shadow-soft"
                                >
                                    <div className="h-9 w-9 rounded-xl bg-brand/10 flex items-center justify-center">
                                        <Icon className="h-4 w-4 text-brand" />
                                    </div>
                                    <h4 className="mt-3 text-xs font-bold text-ink">
                                        {item.title}
                                    </h4>
                                    <p className="mt-1 text-[11px] text-muted leading-relaxed">
                                        {item.body}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhatWeDo() {
    const whatWeDoCards = [
        {
            number: "01",
            title: "Consultancy",
            body: "Analisis mendalam kebutuhan IT bisnis Anda dan rekomendasi solusi yang tepat guna dan efisien.",
            icon: "/images/about/Icon-Consultancy.svg",
        },
        {
            number: "02",
            title: "Design",
            body: "Perancangan arsitektur IT yang scalable, aman, dan selaras dengan roadmap bisnis jangka panjang.",
            icon: "/images/about/Icon-Design.svg",
        },
        {
            number: "03",
            title: "Implementation",
            body: "Eksekusi proyek terstruktur dengan project management profesional dan dokumentasi lengkap.",
            icon: "/images/about/Icon-Implementation.svg",
        },
        {
            number: "04",
            title: "Managed Services",
            body: "Pengelolaan infrastruktur IT berkelanjutan agar bisnis Anda berjalan optimal 24/7.",
            icon: "/images/about/Icon-ManServ.svg",
        },
    ];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container-uti">
                <div className="max-w-2xl">
                    <div
                        className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand/70"
                        data-reveal="fade-up"
                    >
                        <span className="h-px w-6 bg-brand/60" />
                        What We Do
                    </div>
                    <h2
                        className="mt-3 text-2xl md:text-3xl font-extrabold text-ink leading-tight"
                        data-reveal="fade-up"
                        data-reveal-delay="80ms"
                    >
                        Layanan Kami yang
                        <br className="hidden md:block" />
                        <span className="text-brand">Komprehensif</span>
                    </h2>
                    <p
                        className="mt-3 text-sm text-muted leading-relaxed"
                        data-reveal="fade-up"
                        data-reveal-delay="160ms"
                    >
                        Dari konsultasi hingga implementasi dan managed services, kami
                        hadir di setiap tahap perjalanan digital Anda.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {whatWeDoCards.map((card, index) => (
                        <article
                            key={card.title}
                            className="rounded-2xl border border-line bg-white p-6 text-left shadow-soft"
                            data-reveal="fade-up"
                            data-reveal-delay={`${180 + index * 80}ms`}
                        >
                            <p className="text-xs font-semibold text-muted/70">{card.number}</p>
                            <Image
                                src={card.icon}
                                alt={card.title}
                                width={40}
                                height={40}
                                className="mt-4 h-10 w-10"
                            />
                            <h3 className="mt-4 text-base font-bold text-ink">{card.title}</h3>
                            <p className="mt-2 text-xs text-muted leading-relaxed">{card.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutStats() {
    const aboutStats = [
        { value: "20+", label: "Tahun Pengalaman" },
        { value: "500+", label: "Klien Aktif" },
        { value: "8", label: "Sektor Industri" },
        { value: "3", label: "Kantor di Indonesia" },
    ];

    return (
        <section className="bg-brand py-10 md:py-12 text-white" data-reveal="zoom">
            <div className="container-uti">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/15 md:divide-y-0 md:divide-x md:divide-white/15">
                    {aboutStats.map((stat) => (
                        <div key={stat.label} className="p-5 text-center">
                            <div className="text-2xl md:text-3xl font-extrabold">
                                {stat.value}
                            </div>
                            <div className="mt-1 text-xs text-white/80">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Offices() {
    const offices = [
        {
            type: "Head Office",
            city: "Jakarta Pusat",
            address: "Jl. Siantar No. 18, Cideng - Jakarta Pusat 10150",
            contacts: [
                { icon: Phone, value: "+62 21 3505050 (Hunting)" },
                { icon: Mail, value: "sales@uti.co.id" },
                { icon: Globe, value: "www.uti.co.id" },
            ],
            featured: true,
        },
        {
            type: "Branch Office",
            city: "Pulo Gadung",
            address: "Ruko Pulogadung Trade Centre, Blok 8B No. 62, Jakarta Timur 13920",
            contacts: [{ icon: Phone, value: "+62 21 4606498" }],
            featured: false,
        },
        {
            type: "Branch Office",
            city: "Cikarang",
            address: "Ruko Cikarang Square, Blok E No. 36, Cikarang 17550",
            contacts: [
                { icon: Phone, value: "+62 21-89842025" },
                { icon: Phone, value: "+62 21-29612334" },
            ],
            featured: false,
        },
    ];

    return (
        <section className="py-12 md:py-16">
            <div className="container-uti">
                <div className="max-w-2xl">
                    <div
                        className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand/70"
                        data-reveal="fade-up"
                    >
                        <span className="h-px w-6 bg-brand/60" />
                        Our Offices
                    </div>
                    <h2
                        className="mt-3 text-2xl md:text-3xl font-extrabold text-ink leading-tight"
                        data-reveal="fade-up"
                        data-reveal-delay="80ms"
                    >
                        Hadir Dekat
                        <br className="hidden md:block" />
                        <span className="text-brand">Bisnis Anda</span>
                    </h2>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {offices.map((office, index) => (
                        <article
                            key={office.city}
                            className={`rounded-2xl p-6 shadow-soft ${office.featured
                                    ? "bg-brand text-white"
                                    : "border border-line bg-white"
                                }`}
                            data-reveal="fade-up"
                            data-reveal-delay={`${160 + index * 80}ms`}
                        >
                            <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${office.featured
                                        ? "bg-white text-brand"
                                        : "bg-brand/10 text-brand"
                                    }`}
                            >
                                {office.type}
                            </span>
                            <h3
                                className={`mt-3 text-lg font-bold ${office.featured ? "text-white" : "text-ink"
                                    }`}
                            >
                                {office.city}
                            </h3>
                            <p
                                className={`mt-3 text-xs leading-relaxed ${office.featured ? "text-white/85" : "text-muted"
                                    }`}
                            >
                                {office.address}
                            </p>
                            <ul className="mt-4 space-y-2 text-xs">
                                {office.contacts.map((contact) => {
                                    const Icon = contact.icon;
                                    return (
                                        <li key={contact.value} className="flex items-center gap-2">
                                            <Icon
                                                className={`h-3.5 w-3.5 flex-shrink-0 ${office.featured ? "text-white/80" : "text-brand"
                                                    }`}
                                            />
                                            <span
                                                className={
                                                    office.featured ? "text-white/90" : "text-muted"
                                                }
                                            >
                                                {contact.value}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AfterSales() {
    const supportTiers = [
        {
            tier: "Silver",
            title: "Silver Support",
            body: "Business hours coverage",
            badge: "8x5",
            badgeBg: "bg-slate-200",
            badgeText: "text-slate-600",
        },
        {
            tier: "Gold",
            title: "Gold Support",
            body: "Round-the-clock coverage",
            badge: "24x7",
            badgeBg: "bg-amber-100",
            badgeText: "text-amber-700",
        },
        {
            tier: "Platinum",
            title: "Platinum Support",
            body: "Fully customized SLA",
            badge: "Custom",
            badgeBg: "bg-violet-100",
            badgeText: "text-violet-700",
        },
    ];

    const afterSalesPoints = [
        "Sales & Manager sebagai point of contact utama",
        "Technical Support & Support Engineer bersertifikasi",
        "Help Desk terintegrasi untuk respons cepat",
        "Business Consultant untuk optimalisasi investasi IT",
        "Layanan outsourcing dan maintenance tersedia",
    ];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container-uti">
                <div data-reveal="fade-right">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand/70">
                        <span className="h-px w-6 bg-brand/60" />
                        After Sales Support
                    </div>
                    <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-ink leading-tight">
                        Layanan Purna Jual
                        <br className="hidden md:block" />
                        <span className="text-brand">Terdepan</span>
                    </h2>
                </div>

                <div className="mt-8 grid gap-10 md:grid-cols-2 items-start">
                    <div className="space-y-4">
                        {supportTiers.map((tier, index) => (
                            <article
                                key={tier.tier}
                                className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-white p-4 shadow-soft"
                                data-reveal="fade-up"
                                data-reveal-delay={`${120 + index * 80}ms`}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`flex h-12 w-16 items-center justify-center rounded-lg text-[10px] font-bold uppercase tracking-wider ${tier.badgeBg
                                            } ${tier.badgeText}`}
                                    >
                                        {tier.tier}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-ink">{tier.title}</h3>
                                        <p className="mt-0.5 text-xs text-muted">{tier.body}</p>
                                    </div>
                                </div>
                                <span className="inline-flex w-20 items-center justify-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                                    {tier.badge}
                                </span>
                            </article>
                        ))}
                    </div>

                    <div data-reveal="fade-left" data-reveal-delay="120ms">
                        <h3 className="text-xl md:text-2xl font-extrabold text-ink leading-tight">
                            Tim Ahli Siap Membantu Anda
                        </h3>
                        <p className="mt-3 text-sm text-muted leading-relaxed">
                            UTI menyediakan layanan purna jual lengkap mulai dari
                            implementasi, instalasi, project management, maintenance, hingga
                            dokumentasi SLA dan OLA sesuai kebutuhan spesifik bisnis Anda.
                        </p>
                        <ul className="mt-6 space-y-3 text-sm text-muted">
                            {afterSalesPoints.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

type CTAFormProps = {
    backgroundColor?: string;
    brandColor?: string;
};

function CTAForm({
    backgroundColor = "#004799",
    brandColor = "#004799",
}: CTAFormProps) {
    const style = {
        "--cta-bg": backgroundColor,
        "--cta-brand": brandColor,
    } as CSSProperties;

    return (
        <section
            className="relative bg-[var(--cta-bg)] text-white pt-32 pb-20 md:pt-44 md:pb-24"
            style={style}
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-32 bg-white" />
            <div className="container-uti relative">
                <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_560px] items-center">
                    <div className="max-w-xl md:pr-8" data-reveal="fade-right">
                        <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                            Siap Membangun Masa Depan Digital Perusahaan Anda?
                        </h3>
                        <p className="text-xs md:text-sm text-white/90 mt-3 leading-relaxed max-w-md">
                            Bergabunglah dengan ratusan klien enterprise yang telah mempercepat
                            pertumbuhan bisnis mereka melalui infrastruktur TI yang tangguh dan
                            solusi otomatisasi cerdas dari UTI.
                        </p>
                    </div>

                    <div
                        className="bg-white text-ink rounded-2xl p-7 md:p-10 shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.12),0_40px_90px_-30px_rgba(0,0,0,0.35)] w-full md:max-w-[560px] md:justify-self-end md:-mt-32"
                        data-reveal="fade-left"
                        data-reveal-delay="120ms"
                    >
                        <p className="text-xs font-semibold tracking-wider uppercase text-ink/60 mb-1">
                            Hubungi Kami
                        </p>
                        <h3 className="text-lg md:text-xl font-extrabold text-[var(--cta-brand)] mb-3">
                            Diskusikan Solusi Anda
                        </h3>
                        <form
                            className="grid gap-4 sm:grid-cols-2"
                            onSubmit={(e: FormEvent<HTMLFormElement>) => {
                                e.preventDefault();
                            }}
                        >
                            {ctaFields.map((f) => (
                                <label
                                    key={f.name}
                                    className={`text-[11px] font-medium text-[#404040] grid gap-1 ${f.span === 2 ? "sm:col-span-2" : ""
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-1">
                                        {f.label}
                                        {f.required && <span className="text-red-500">*</span>}
                                    </span>
                                    <input
                                        type={f.type}
                                        required={f.required}
                                        className="rounded-md border border-transparent bg-[#f2f2f2] px-4 py-3 text-[13px] text-[#404040] focus:outline-none focus:border-[var(--cta-brand)] transition"
                                    />
                                </label>
                            ))}
                            <button
                                type="submit"
                                className="mt-2 bg-[var(--cta-brand)] text-white font-semibold rounded-md py-3.5 text-xs md:text-sm hover:brightness-110 transition sm:col-span-2"
                            >
                                Kirim
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
