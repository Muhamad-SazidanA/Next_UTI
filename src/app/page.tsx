"use client";

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
} from "../lib/data";
import {
  Cpu,
  Laptop,
  MessageSquare,
  Network,
  Server,
  ShieldCheck,
  Video,
  Wrench,
  type LucideIcon,
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
        <Stats />
        <Clients />
        <Solutions />
        <TechExpertise />
        <Infrastructure />
        <Partners />
        <News />
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
  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-[url('/images/home/BannerHome.webp')] bg-cover"
        style={{ backgroundPosition: "75% center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/0 pointer-events-none" />
      <div className="container-uti relative py-24 md:py-32">
        <div className="max-w-3xl">
          <h1
            className="text-2xl md:text-4xl font-extrabold leading-tight"
            data-reveal="fade-up"
          >
            Enterprise Intelligence &<br className="hidden md:block" />
            Infrastructure Ecosystem
          </h1>
          <p
            className="mt-4 text-xs md:text-sm text-white/85 max-w-xl leading-relaxed"
            data-reveal="fade-up"
            data-reveal-delay="120ms"
          >
            UTI siap mengawal transformasi digital perusahaan Anda melalui perpaduan
            Intelligent Automation dan arsitektur IT yang mutakhir.
          </p>
          <Link
            href="/request-demo"
            className="mt-6 inline-flex items-center gap-2 bg-white text-brand font-semibold rounded-full px-6 py-3 text-xs md:text-sm hover:bg-white/90 transition"
            data-reveal="zoom"
            data-reveal-delay="220ms"
          >
            Start for free →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { icon: "/images/home/Icon-Business.svg", label: "Ratusan Pelanggan" },
    { icon: "/images/home/Icon-Award.svg", label: "20+ Tahun Berpengalaman" },
    { icon: "/images/home/Icon-Leadership.svg", label: "Tim Tersertifikasi" },
    { icon: "/images/home/Icon-AI.svg", label: "Solusi AI & Automasi" },
    { icon: "/images/home/Icon-Document.svg", label: "Support 24/7" },
  ];

  return (
    <section className="relative -mt-10 md:-mt-12 pb-10 md:pb-12">
      <div className="container-uti">
        <div
          className="mx-auto max-w-3xl rounded-2xl px-2 py-2 md:px-3 md:py-3 text-white grid grid-cols-5 gap-0"
          data-reveal="fade-up"
          data-reveal-delay="120ms"
          style={{
            background: "linear-gradient(135deg, #0b4d99, #0d5fb3)",
            boxShadow:
              "inset 2.63px 2.63px 5.25px rgba(255,255,255,0.24), 0 2.63px 7.88px rgba(10,124,255,0.24), 0 5.25px 15.76px rgba(10,124,255,0.24), 0 10.51px 21.01px rgba(10,124,255,0.12), 0 42.02px 84.04px -21.01px rgba(10,124,255,0.48)",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1.5 px-1 py-2 text-center"
            >
              <img
                src={s.icon}
                alt={s.label}
                className="h-8 w-8 md:h-10 md:w-10"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="text-[10px] md:text-[11px] font-semibold leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const clientTabs = [
    "Asuransi",
    "Fintech",
    "Perbankan & MultiFinance",
    "Pendidikan",
    "Kesehatan",
    "SDM & Tenaga Kerja",
  ];

  const clientLogos = [
    "/images/home/client/Zurich.svg",
    "/images/home/client/BRILife.svg",
    "/images/home/client/Prudential.svg",
    "/images/home/client/AXA.svg",
    "/images/home/client/Avrist.svg",
  ];

  const [active, setActive] = useState(clientTabs[0]);

  return (
    <section className="py-16 md:py-24 text-center">
      <div className="container-uti">
        <h2 className="section-title text-ink text-xl md:text-2xl" data-reveal="fade-up">
          Dipercaya oleh <span className="text-brand">500+</span> Client Kami
        </h2>

        <div
          className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-medium"
          data-reveal="fade-up"
          data-reveal-delay="120ms"
        >
          {clientTabs.map((tab) => {
            const isActive = tab === active;
            return (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative pb-1 transition ${isActive ? "text-brand" : "text-muted hover:text-ink"
                  }`}
              >
                {tab}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-brand rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        <div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7 items-center justify-items-center"
          data-reveal="fade-up"
          data-reveal-delay="220ms"
        >
          {clientLogos.map((logo) => (
            <img
              key={logo}
              src={logo}
              alt=""
              className="h-9 md:h-11 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
            />
          ))}
        </div>

        <Link
          href="/clients"
          className="inline-block mt-6 text-xs font-semibold text-brand hover:underline"
          data-reveal="fade-up"
          data-reveal-delay="320ms"
        >
          Temukan Klien Kami →
        </Link>
      </div>
    </section>
  );
}

function Solutions() {
  const solutions = [
    {
      title: "Intelligent Automation",
      body: "Otomatisasi proses bisnis untuk efisiensi operasional maksimal. Kami mengintegrasikan Nanonets untuk pemrosesan dokumen cerdas, platform Cyclone (RPA) untuk tugas administratif repetitif, dan Syclus untuk otomatisasi Accounts Payable. Solusi ini dirancang untuk mengurangi human error dan mengakselerasi alur kerja perusahaan Anda.",
      image: "/images/home/intelligentAutomation.webp",
      icon: "/images/home/Icon-InAu.svg",
      href: "/digital-solutions/intelligent-automation",
    },
    {
      title: "IT Infrastructure & Security",
      body: "Bangun fondasi digital yang tangguh dan aman. Solusi infrastruktur kami mencakup penyediaan Server, Storage (HCI), Cloud Services, dan arsitektur Data Center. Ditunjang dengan perlindungan Cyber Security menyeluruh seperti Firewall, Data Loss Prevention, hingga Privilege Access Management untuk mengamankan aset data perusahaan Anda.",
      image: "/images/home/ItInfrastructureSecurity.webp",
      icon: "/images/home/Icon-IIS.svg",
      href: "/digital-solutions/it-infrastructure-security",
    },
  ];

  return (
    <section className="py-16 md:py-24 text-center">
      <div className="container-uti">
        <h2 className="section-title text-xl md:text-2xl" data-reveal="fade-up">
          Solusi Digital Komprehensif
          <br />
          Untuk Berbagai Skala Enterprise
        </h2>
        <p
          className="section-subtitle mt-3 text-xs md:text-sm"
          data-reveal="fade-up"
          data-reveal-delay="120ms"
        >
          Kami menyediakan ekosistem terpadu yang dirancang untuk mempercepat
          alur kerja, meningkatkan keamanan, dan mendorong pengambilan keputusan
          berbasis data.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {solutions.map((s, index) => (
            <article
              key={s.title}
              className="group relative rounded-2xl bg-white border border-line text-left overflow-hidden transition hover:-translate-y-1"
              data-reveal="fade-up"
              data-reveal-delay={index === 0 ? "200ms" : "280ms"}
            >
              <div className="relative" style={{ aspectRatio: "16 / 7" }}>
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
                <img
                  src={s.icon}
                  alt=""
                  className="absolute left-1/2 bottom-0 w-11 h-11 -translate-x-1/2 translate-y-1/2 z-10"
                />
              </div>
              <div className="px-5 pt-8 pb-5 text-center">
                <h3 className="text-sm md:text-base font-bold text-brand mb-1.5">
                  {s.title}
                </h3>
                <p className="text-[11px] md:text-xs text-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechExpertise() {
  type TechProduct = {
    key: string;
    label: string;
    color: string;
    route: string;
    brandLogo: string;
    mediaImage: string;
    title: string;
    sub: string;
    copy: string;
    features: { title: string; desc: string }[];
  };

  type NonEmptyArray<T> = [T, ...T[]];

  const techProducts: NonEmptyArray<TechProduct> = [
    {
      key: "manusia.ai",
      label: "Manusia AI",
      color: "#12509D",
      route: "/digital-solutions/manusia-ai",
      brandLogo: "/images/home/product/before/manusia.ai-before.svg",
      mediaImage: "/images/home/product/Home-ManusiaAi.webp",
      title: "AI Consulting & Customisation",
      sub: "Tailored AI Solutions for Enterprise",
      copy:
        "Manusia.AI adalah layanan konsultasi dan pengembangan solusi kecerdasan buatan yang dirancang khusus untuk kebutuhan unik setiap perusahaan. Kami membantu organisasi memahami potensi AI, merancang strategi implementasi, serta membangun solusi custom yang relevan dengan tantangan bisnis Anda.",
      features: [
        {
          title: "AI Strategy & Roadmap",
          desc: "Pendampingan dalam menyusun strategi adopsi AI sesuai tujuan bisnis.",
        },
        {
          title: "Custom AI Development",
          desc: "Pembuatan solusi AI kustom yang terintegrasi dengan sistem perusahaan.",
        },
        {
          title: "Proof of Concept",
          desc: "Uji coba cepat untuk membuktikan efektivitas solusi AI sebelum implementasi penuh.",
        },
      ],
    },
    {
      key: "nanonets",
      label: "Nanonets",
      color: "#546FFF",
      route: "/digital-solutions/nanonets",
      brandLogo: "/images/home/product/before/nanonets-before.svg",
      mediaImage: "/images/home/product/Home-Nanonets.webp",
      title: "Intelligent Document Processing",
      sub: "AI-Powered Document Automation Platform",
      copy:
        "Nanonets adalah platform cerdas untuk otomatisasi dokumen, dirancang untuk mengekstrak informasi penting dari berbagai dokumen seperti receipt, invoice, surat medis, dan formulir. Cocok untuk perusahaan di banyak sektor seperti keuangan, kesehatan, logistik, dan banyak lagi.",
      features: [
        {
          title: "Classification",
          desc: "Mengidentifikasi dan mengelompokkan jenis dokumen secara otomatis.",
        },
        {
          title: "Handwriting",
          desc: "Mengenali tulisan tangan pada dokumen dan mengubahnya menjadi data digital yang siap digunakan.",
        },
        {
          title: "Object Detection",
          desc: "Mengidentifikasi elemen penting dalam dokumen, termasuk tanda tangan, stamp, Checklist dan elemen lainnya.",
        },
      ],
    },
    {
      key: "brilian.ai",
      label: "Brilian AI",
      color: "#4A9DFF",
      route: "/digital-solutions/brilian-ai",
      brandLogo: "/images/home/product/before/brilian.ai-before.svg",
      mediaImage: "/images/home/product/Home-BrilianAi.webp",
      title: "Knowledge Intelligence Platform",
      sub: "AI-Powered Knowledge Assistant for Enterprise",
      copy:
        "Brilian.AI adalah asisten AI cerdas untuk perusahaan yang mampu memahami dokumen internal, menjawab pertanyaan, menyusun laporan, hingga melakukan analisa data semua dalam satu platform. Dirancang untuk membantu tim dalam mengambil keputusan cepat berbasis data, tanpa harus membaca ratusan halaman atau mencari file secara manual.",
      features: [
        {
          title: "Tanya Apa Saja",
          desc: "Ajukan pertanyaan dan dapatkan jawaban dari seluruh dokumen perusahaan Anda.",
        },
        {
          title: "Laporan & Insight Otomatis",
          desc: "Hasilkan ringkasan laporan, analisis data, hingga highlight penting tanpa membuka file satu per satu.",
        },
        {
          title: "Meeting & Transkrip Ringkas",
          desc: "Ubah percakapan rapat menjadi catatan penting, action point, dan insight otomatis.",
        },
      ],
    },
    {
      key: "cyclone",
      label: "Cyclone",
      color: "#FC6D2D",
      route: "/digital-solutions/cyclone",
      brandLogo: "/images/home/product/before/cyclone-before.svg",
      mediaImage: "/images/home/product/Home-Cyclone.webp",
      title: "Robotic Process Automation",
      sub: "Automating Repetitive Tasks with Speed & Accuracy",
      copy:
        "Cyclone adalah platform Robotic Process Automation(RPA) yang dirancang untuk mengotomatisasi pekerjaan administratif yang repetitif, seperti input data, proses laporan, hingga integrasi antar sistem.Dengan Cyclone, perusahaan dapat bekerja lebih cepat, mengurangi human error.",
      features: [
        {
          title: "Process Automation",
          desc: "Menyelesaikan pekerjaan manual repetitif secara otomatis dan konsisten.",
        },
        {
          title: "Seamless Integration",
          desc: "Terhubung dengan berbagai sistem bisnis tanpa mengganggu infrastruktur yang ada.",
        },
        {
          title: "Scalable & Flexible",
          desc: "Dapat diperluas sesuai kebutuhan, dari proses sederhana hingga kompleks.",
        },
      ],
    },
    {
      key: "tilaka",
      label: "Tilaka",
      color: "#0D5FB3",
      route: "/digital-solutions/tilaka",
      brandLogo: "/images/home/product/before/tilaka-before.svg",
      mediaImage: "/images/home/product/Home-Tilaka.webp",
      title: "Digital Signature",
      sub: "Secure & Legally Binding E-Signature Solution",
      copy:
        "Tilaka adalah solusi tanda tangan digital yang aman, legal, dan sesuai regulasi Indonesia. Dengan Tilaka, perusahaan dapat mempercepat proses persetujuan dokumen tanpa kertas, menjaga kepatuhan hukum, sekaligus meningkatkan efisiensi operasional di era digital.",
      features: [
        {
          title: "Legally Compliant",
          desc: "Mendukung regulasi dan standar hukum Indonesia untuk validitas dokumen.",
        },
        {
          title: "Secure Encryption",
          desc: "Menjamin keamanan dokumen dengan teknologi enkripsi end-to-end.",
        },
        {
          title: "Seamless Integration",
          desc: "Mudah diintegrasikan dengan workflow bisnis dan sistem existing perusahaan.",
        },
      ],
    },
    {
      key: "docuflo",
      label: "Docuflo",
      color: "#FE0000",
      route: "/digital-solutions/docuflo",
      brandLogo: "/images/home/product/before/docuflo-before.svg",
      mediaImage: "/images/home/product/Home-Docuflo.webp",
      title: "Document Management System",
      sub: "Smart & Secure Document Control",
      copy:
        "Docuflo adalah sistem manajemen dokumen digital yang membantu perusahaan menyimpan, mengelola, dan mengakses dokumen dengan lebih mudah dan aman.Dengan Docuflo, organisasi dapat mengurangi ketergantungan pada dokumen fisik, meningkatkan kolaborasi, serta memastikan kepatuhan terhadap standar regulasi.",
      features: [
        { title: "Centralized Repository", desc: "Penyimpanan terpusat untuk semua dokumen perusahaan." },
        { title: "Smart Search", desc: "Pencarian cepat dan kontrol akses berbasis peran untuk keamanan data." },
        { title: "Compliance & Security", desc: "Mendukung standar regulasi dan audit trail untuk menjaga integritas dokumen." },
      ],
    },
    {
      key: "intalks",
      label: "InTalks",
      color: "#01B574",
      route: "/digital-solutions/intalks",
      brandLogo: "/images/home/product/before/intalks-before.svg",
      mediaImage: "/images/home/product/Home-Intalks.webp",
      title: "Intelligent WhatsApp Sales & Customer Insight Platform",
      sub: "AI-Powered Sales & Communication Assistant",
      copy:
        "InTalks adalah platform Business Intelligence untuk WhatsApp, dirancang khusus untuk membantu perusahaan mengubah percakapan sehari-hari menjadi data, insight, dan strategi yang actionable.",
      features: [
        { title: "Analitik Real-Time", desc: "Pantau jumlah pesan, reply rate, response time, hingga engagement index secara langsung." },
        { title: "Dasbor Multi-Level", desc: "Kendalikan ribuan percakapan dari level HQ, area, cabang, hingga individual sales." },
        { title: "Keamanan & Compliance", desc: "Data disimpan aman sesuai regulasi Indonesia, dengan enkripsi end-to-end dan opsi cloud/on-prem." },
      ],
    },
    {
      key: "syclus",
      label: "Syclus",
      color: "#457FBF",
      route: "/digital-solutions/syclus",
      brandLogo: "/images/home/product/before/syclus-before.svg",
      mediaImage: "/images/home/product/Home-Syclus.webp",
      title: "AP Automation",
      sub: "Automating Finance for Faster Payments",
      copy:
        "Syclus adalah solusi otomatisasi Accounts Payable yang mempercepat pembayaran, mengurangi kesalahan, dan menjaga arus kas tetap sehat melalui 4-Way Matching otomatis. Syclus memverifikasi invoice, purchase order, penerimaan barang, dan kontrak secara otomatis.",
      features: [
        { title: "Smart Invoice Capture", desc: "Ekstraksi data invoice secara otomatis." },
        { title: "4-Way Matching", desc: "Verifikasi invoice, PO, penerimaan barang, dan kontrak otomatis." },
        { title: "Approval Workflow", desc: "Proses persetujuan pembayaran lebih cepat dan transparan." },
      ],
    },
    {
      key: "disply",
      label: "Disply",
      color: "#2448C3",
      route: "/digital-solutions/disply",
      brandLogo: "/images/home/product/before/disply-before.svg",
      mediaImage: "/images/home/product/Home-Disply.webp",
      title: "Smart Display Solutions",
      sub: "Smart Displays for Smarter Business",
      copy:
        "Disply adalah solusi digital signage & smart display yang dirancang untuk mendukung komunikasi visual dan interaksi digital di berbagai sektor bisnis, dengan layar interaktif berkualitas tinggi dan desain elegan, serta dukungan teknologi terkini.",
      features: [
        { title: "Interactive Display", desc: "Visual tajam dengan layar sentuh responsif untuk interaksi digital." },
        { title: "Flexible Applications", desc: "Cocok untuk retail, perkantoran, pendidikan, hospitality, dan event pameran." },
        { title: "Modern Design", desc: "Desain elegan dengan konstruksi tangguh yang siap mendukung operasional bisnis." },
      ],
    },
    {
      key: "orionstar",
      label: "OrionStar",
      color: "#12509D",
      route: "/digital-solutions/orionstar",
      brandLogo: "/images/home/product/before/orionstar-before.svg",
      mediaImage: "/images/home/product/Home-Orionstar.webp",
      title: "Smart Service Robot",
      sub: "Intelligent Robots for Modern Business",
      copy:
        "Orionstar adalah robot layanan pintar yang dirancang untuk membantu bisnis meningkatkan interaksi dengan pelanggan secara lebih modern, efisien, dan menarik. Dengan kemampuan AI, sensor cerdas, serta desain futuristik, Oriostar dapat digunakan di retail, hospitality, perkantoran, hingga layanan publik.",
      features: [
        { title: "AI-Powered Interaction", desc: "Memberikan layanan interaktif seperti menyapa, menjawab pertanyaan, dan membantu navigasi pelanggan." },
        { title: "Flexible Applications", desc: "Cocok untuk retail, perkantoran, pendidikan, hospitality, dan event pameran." },
        { title: "Modern Design", desc: "Desain elegan dengan konstruksi tangguh yang siap mendukung operasional bisnis." },
      ],
    },
  ];

  const [active, setActive] = useState(techProducts[0].key);
  const product =
    techProducts.find((p: TechProduct) => p.key === active) ?? techProducts[0];

  return (
    <section className="py-16 md:py-24 text-center">
      <div className="container-uti">
        <h2 className="section-title text-xl md:text-2xl" data-reveal="fade-up">
          Technology Expertise
        </h2>
        <p
          className="section-subtitle mt-2 text-xl md:text-2xl"
          data-reveal="fade-up"
          data-reveal-delay="120ms"
        >
          Digitalization and Automation Solution
        </p>

        <div
          className="mx-auto mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-7 max-w-sm sm:max-w-lg md:max-w-[760px] justify-items-center px-2 sm:px-0"
          data-reveal="zoom"
          data-reveal-delay="180ms"
        >
          {techProducts.map((p: TechProduct, index: number) => {
            const isActive = p.key === active;
            const before = `/images/home/product/before/${p.key}-before.svg`;
            const after = `/images/home/product/after/${p.key}-after.svg`;
            const rowStartClass =
              index === 6
                ? "md:col-start-2"
                : index === 7
                  ? "md:col-start-3"
                  : index === 8
                    ? "md:col-start-4"
                    : index === 9
                      ? "md:col-start-5"
                      : "";
            return (
              <button
                key={p.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(p.key)}
                className={`flex items-center justify-center rounded-xl border w-[112px] h-10 px-3 py-1.5 transition shadow-soft hover:-translate-y-0.5 ${isActive ? "border-transparent" : "bg-white border-line"
                  } ${rowStartClass}`}
                style={
                  isActive ? { background: p.color, borderColor: p.color } : undefined
                }
              >
                <img
                  src={isActive ? after : before}
                  alt={p.label}
                  className="max-h-7 max-w-full object-contain pointer-events-none"
                />
              </button>
            );
          })}
        </div>

        <article
          className="mt-7 grid gap-6 text-left items-start"
          style={
            {
              gridTemplateColumns: "1fr 380px",
              ["--feat-color" as string]: product.color,
            } as CSSProperties
          }
        >
          <div data-reveal="fade-right" data-reveal-delay="220ms">
            <span className="inline-flex mb-2">
              <img src={product.brandLogo} alt={product.label} className="h-7 w-auto" />
            </span>
            <h3 className="text-base font-extrabold text-ink leading-snug">
              {product.title}
            </h3>
            <p
              className="text-[11px] md:text-xs font-semibold mt-1 mb-2"
              style={{ color: product.color }}
            >
              {product.sub}
            </p>
            <p className="text-[11px] md:text-xs leading-relaxed text-muted max-w-xl mb-3">
              {product.copy}
            </p>

            <div className="text-xs font-bold text-ink mb-2">Fitur Utama</div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {product.features.map((f: { title: string; desc: string }) => (
                <div
                  key={f.title}
                  className="rounded-lg border border-line bg-white p-2.5"
                >
                  <h4 className="text-[11px] font-bold text-ink leading-tight mb-1">
                    {f.title}
                  </h4>
                  <p className="text-[10px] text-muted leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href={product.route}
              className="cta-pill-sm"
              style={{ background: product.color }}
            >
              Learn More →
            </Link>
          </div>

          <div
            className="rounded-xl overflow-hidden flex items-stretch self-center min-h-0 w-full"
            data-reveal="fade-left"
            data-reveal-delay="260ms"
          >
            <img
              src={product.mediaImage}
              alt={product.label}
              className="w-full h-full object-cover"
            />
          </div>
        </article>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          article {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function Infrastructure() {
  const iconMap: Record<string, LucideIcon> = {
    server: Server,
    network: Network,
    shield: ShieldCheck,
    cpu: Cpu,
    comments: MessageSquare,
    video: Video,
    wrench: Wrench,
    laptop: Laptop,
  };

  const infraCards = [
    {
      icon: "server",
      title: "IT Infrastructure",
      desc: "Infrastruktur komputasi kelas enterprise, meliputi penyediaan Server, Storage, dan arsitektur Hyperconverged (HCI).",
    },
    {
      icon: "network",
      title: "Network & Security",
      desc: "Solusi infrastruktur jaringan andal yang mencakup penyediaan Router, Switch, Access Point, dan perlindungan Firewall.",
    },
    {
      icon: "shield",
      title: "Cyber Security",
      desc: "Pengamanan aset digital melalui Data Loss Prevention, Privilege Access Management (PAM), kontrol jaringan, dan Mail Protection.",
    },
    {
      icon: "cpu",
      title: "Internet of Things",
      desc: "Ekosistem cerdas terintegrasi untuk kebutuhan Digital Banking, Smart Store, Smart Logistic, Smart Medical, hingga Smart Manufacturing.",
    },
    {
      icon: "comments",
      title: "Unified Communication",
      desc: "Sistem komunikasi bisnis terpadu untuk mendukung kolaborasi dan interaksi tim yang efisien tanpa batas lokasi.",
    },
    {
      icon: "video",
      title: "Security System",
      desc: "Solusi pengawasan dan sistem keamanan fisik yang komprehensif untuk melindungi seluruh aset operasional perusahaan Anda.",
    },
    {
      icon: "wrench",
      title: "Third Party Maintenance",
      desc: "Layanan pemeliharaan IT profesional dari pihak ketiga untuk memastikan performa perangkat keras dan sistem tetap optimal.",
    },
    {
      icon: "laptop",
      title: "PC / Laptop",
      desc: "Penyediaan perangkat kerja kelas enterprise yang andal untuk mendukung mobilitas dan produktivitas harian karyawan Anda",
    },
  ];

  return (
    <section
      className="bg-brand text-white py-16 md:py-24"
      style={{ backgroundColor: "#004799" }}
    >
      <div className="container-uti">
        <h2
          className="text-xl md:text-2xl font-extrabold text-center"
          data-reveal="fade-up"
        >
          Technology Expertise
        </h2>
        <p
          className="text-center mt-2 text-white/80 text-xs"
          data-reveal="fade-up"
          data-reveal-delay="120ms"
        >
          Infrastructure Solutions and Services
        </p>

        <div className="mt-10 grid gap-5 grid-cols-2 md:grid-cols-4">
          {infraCards.map((c, index) => {
            const Icon = iconMap[c.icon] ?? Server;
            return (
              <article
                key={c.title}
                className="bg-white/10 border border-white/15 rounded-xl p-6 backdrop-blur-sm hover:bg-white/15 transition"
                data-reveal="fade-up"
                data-reveal-delay={`${index * 60}ms`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-xs mb-2">{c.title}</h3>
                <p className="text-[11px] text-white/75 leading-relaxed">{c.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    "Aruba-Logo.svg",
    "Hikvision-Logo.svg",
    "LenovoM-Logo.svg",
    "Fortinet-Logo.svg",
    "HPE-Logo.svg",
    "Sangfor-Logo.svg",
    "UiPath-Logo.svg",
    "Cisco-Logo.svg",
    "Veeam-Logo.svg",
    "XFusion-Logo.svg",
    "Huawei-Logo.svg",
    "Microsoft-Logo.svg",
    "LenovoB-Logo.svg",
    "Cyclone-Logo.svg",
    "NetApp-Logo.svg",
  ];

  return (
    <section className="py-16 md:py-24 text-center">
      <div className="container-uti">
        <p
          className="text-xs font-semibold tracking-wider uppercase text-brand mb-3"
          data-reveal="fade-up"
        >
          Kemitraan
        </p>
        <h2
          className="section-title text-ink text-xl md:text-2xl"
          data-reveal="fade-up"
          data-reveal-delay="120ms"
        >
          Partner Kami
        </h2>

        <div className="mt-10 grid gap-7 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 items-center justify-items-center">
          {partners.map((logo, index) => (
            <span
              key={logo}
              className="flex items-center justify-center p-1 w-full h-16"
              data-reveal="fade-up"
              data-reveal-delay={`${120 + index * 40}ms`}
            >
              <img
                src={`/images/home/partner/${logo}`}
                alt={logo.replace(/-Logo\.svg$/, "")}
                className="max-h-9 w-auto opacity-80"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  const newsItems = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "02 Desember 2025",
  }));

  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-10">
      <div className="container-uti">
        <h2 className="section-title text-xl md:text-2xl" data-reveal="fade-up">
          News and Event
        </h2>
        <p
          className="section-subtitle mt-2 text-xs md:text-sm"
          data-reveal="fade-up"
          data-reveal-delay="120ms"
        >
          Our Latest Update and Information
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {newsItems.map((n, index) => (
            <Link
              key={n.id}
              href="/news"
              className="block rounded-2xl bg-white border border-line overflow-hidden hover:-translate-y-1 transition shadow-soft"
              data-reveal="fade-up"
              data-reveal-delay={`${180 + index * 80}ms`}
            >
              <div className="aspect-[16/9] bg-surface flex items-center justify-center">
                <img
                  src="/images/home/Dummy-News&Event.svg"
                  alt="News"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xs text-ink leading-snug mb-2">
                  {n.title}
                </h3>
                <p className="text-[11px] text-muted mb-3">{n.date}</p>
                <span className="text-[11px] font-semibold text-brand">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="mt-12 md:mt-16 flex justify-center"
          data-reveal="fade-up"
          data-reveal-delay="320ms"
        >
          <img
            src="/images/home/maps-home.svg"
            alt="Indonesia Map"
            className="w-full max-w-3xl"
          />
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
