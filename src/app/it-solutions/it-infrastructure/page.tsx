import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.infra-page, .infra-page *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.infra-page{
    font-family:'Inter', sans-serif;
}

/* HERO */
.infra-page .hero-section{
    position:relative;
    background:#0b1c3d;
    padding:130px 70px 80px;
    overflow:hidden;
}

.infra-page .hero-section::before{
    content:'';
    position:absolute;
    top:-20%;
    right:-10%;
    width:70%;
    height:70%;
    border-radius:50%;
    background:rgba(37,99,235,0.2);
    filter:blur(120px);
    z-index:0;
}

.infra-page .hero-section::after{
    content:'';
    position:absolute;
    top:40%;
    left:-10%;
    width:50%;
    height:50%;
    border-radius:50%;
    background:rgba(8,145,178,0.1);
    filter:blur(100px);
    z-index:0;
}

.infra-page .hero-wrapper{
    position:relative;
    z-index:1;
    display:grid;
    grid-template-columns:1.1fr 1fr;
    gap:60px;
    align-items:center;
    max-width:1200px;
    margin:0 auto;
}

.infra-page .hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:6px 14px;
    border-radius:999px;
    background:rgba(30,58,122,0.5);
    border:1px solid rgba(59,130,246,0.3);
    color:#93c5fd;
    font-size:13px;
    font-weight:500;
    margin-bottom:24px;
    backdrop-filter:blur(8px);
}

.infra-page .hero-badge::before{
    content:'';
    width:8px;
    height:8px;
    border-radius:50%;
    background:#60a5fa;
}

.infra-page .hero-left h1{
    color:white;
    font-size:56px;
    line-height:1.1;
    font-weight:700;
    margin-bottom:24px;
    max-width:580px;
}

.infra-page .hero-left p{
    color:rgba(191,219,254,0.8);
    font-size:17px;
    line-height:1.8;
    max-width:540px;
    margin-bottom:40px;
}

.infra-page .hero-buttons{
    display:flex;
    flex-wrap:wrap;
    gap:16px;
    align-items:center;
    margin-bottom:60px;
}

.infra-page .btn-white{
    background:white;
    color:#0b1c3d;
    padding:14px 32px;
    border-radius:6px;
    font-weight:700;
    font-size:14px;
    text-decoration:none;
    border:none;
    cursor:pointer;
    transition:.3s;
}

.infra-page .btn-white:hover{ background:#eff6ff; }

.infra-page .btn-ghost{
    background:none;
    border:none;
    color:white;
    font-size:14px;
    font-weight:500;
    cursor:pointer;
    display:flex;
    align-items:center;
    gap:8px;
    padding:14px 24px;
    transition:.3s;
}

.infra-page .btn-ghost:hover{ color:#bfdbfe; }

.infra-page .hero-stats{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:32px;
    border-top:1px solid rgba(255,255,255,0.1);
    padding-top:32px;
    max-width:420px;
}

.infra-page .hero-stats h3{
    font-size:30px;
    font-weight:700;
    color:white;
    margin-bottom:4px;
}

.infra-page .hero-stats p{
    color:rgba(191,219,254,0.7);
    font-size:13px;
    margin:0;
}

/* Infrastructure Stack Card */
.infra-page .stack-card{
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.1);
    border-radius:16px;
    padding:32px;
    backdrop-filter:blur(12px);
}

.infra-page .stack-header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:32px;
}

.infra-page .stack-header span{
    color:#93c5fd;
    font-size:11px;
    font-weight:600;
    letter-spacing:2px;
    text-transform:uppercase;
}

.infra-page .stack-dots{
    display:flex;
    gap:4px;
}

.infra-page .stack-dots span{
    width:8px;
    height:8px;
    border-radius:50%;
}

.infra-page .stack-dots span:nth-child(1){ background:#f87171; }
.infra-page .stack-dots span:nth-child(2){ background:#fbbf24; }
.infra-page .stack-dots span:nth-child(3){ background:#4ade80; }

.infra-page .stack-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px;
}

.infra-page .stack-item{
    background:rgba(11,28,61,0.8);
    border:1px solid rgba(59,130,246,0.2);
    padding:16px;
    border-radius:12px;
    display:flex;
    align-items:center;
    gap:14px;
    transition:.3s;
    cursor:pointer;
}

.infra-page .stack-item:hover{
    border-color:rgba(96,165,250,0.5);
}

.infra-page .stack-icon{
    width:44px;
    height:44px;
    min-width:44px;
    border-radius:10px;
    background:rgba(30,58,122,0.5);
    display:flex;
    align-items:center;
    justify-content:center;
    color:#60a5fa;
    font-size:18px;
}

.infra-page .stack-item span{
    color:white;
    font-weight:500;
    font-size:14px;
}

.infra-page .stack-item .sub-label{
    color:#93c5fd;
    font-size:11px;
    font-weight:400;
}

@media(max-width:1100px){
    .infra-page .hero-wrapper{ grid-template-columns:1fr; }
    .infra-page .hero-left h1{ font-size:44px; }
}

@media(max-width:768px){
    .infra-page .hero-section{ padding:100px 24px 60px; }
    .infra-page .hero-left h1{ font-size:36px; }
    .infra-page .hero-stats{ grid-template-columns:1fr; gap:20px; }
    .infra-page .hero-buttons{ flex-direction:column; }
}

/* SECOND SECTION */
.infra-page .value-section{
    background:#f8fafc;
    padding:100px 70px;
}

.infra-page .value-wrapper{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:80px;
    align-items:center;
    max-width:1200px;
    margin:0 auto;
}

/* Performance Card */
.infra-page .perf-card{
    background:white;
    border-radius:16px;
    box-shadow:0 20px 50px rgba(8,112,184,0.07);
    border:1px solid #f1f5f9;
    padding:32px;
}

.infra-page .perf-header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:32px;
    padding-bottom:16px;
    border-bottom:1px solid #f1f5f9;
}

.infra-page .perf-header-left{
    display:flex;
    align-items:center;
    gap:12px;
}

.infra-page .perf-icon{
    width:36px;
    height:36px;
    background:#eff6ff;
    color:#2563eb;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:16px;
}

.infra-page .perf-header-left h4{
    font-size:15px;
    font-weight:700;
    color:#1e293b;
}

.infra-page .perf-status{
    font-size:11px;
    font-weight:600;
    color:#16a34a;
    background:#f0fdf4;
    padding:4px 10px;
    border-radius:999px;
}

.infra-page .perf-bars{
    display:flex;
    flex-direction:column;
    gap:14px;
    margin-bottom:32px;
}

.infra-page .perf-bar{
    height:8px;
    background:#f1f5f9;
    border-radius:999px;
    overflow:hidden;
}

.infra-page .perf-bar-fill{
    height:100%;
    border-radius:999px;
}

.infra-page .perf-bar:nth-child(1) .perf-bar-fill{
    width:75%;
    background:#3b82f6;
}

.infra-page .perf-bar:nth-child(2) .perf-bar-fill{
    width:50%;
    background:#60a5fa;
}

.infra-page .perf-bar:nth-child(3) .perf-bar-fill{
    width:83%;
    background:#93c5fd;
}

.infra-page .perf-stats{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:16px;
}

.infra-page .perf-stat{
    background:#f8fafc;
    padding:16px;
    border-radius:12px;
    border:1px solid #f1f5f9;
}

.infra-page .perf-stat p:first-child{
    font-size:10px;
    font-weight:600;
    color:#64748b;
    margin-bottom:6px;
    letter-spacing:1px;
}

.infra-page .perf-stat p:last-child{
    font-size:24px;
    font-weight:700;
    color:#1e293b;
}

/* Right Content */
.infra-page .value-right h2{
    font-size:36px;
    line-height:1.2;
    font-weight:700;
    color:#0f172a;
    margin-bottom:24px;
}

.infra-page .value-right > p{
    font-size:17px;
    color:#475569;
    line-height:1.8;
    margin-bottom:40px;
}

.infra-page .value-features{
    display:flex;
    flex-direction:column;
    gap:32px;
}

.infra-page .value-feature{
    display:flex;
    gap:20px;
    align-items:flex-start;
}

.infra-page .vf-icon{
    width:48px;
    height:48px;
    min-width:48px;
    background:#eff6ff;
    border-radius:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#2563eb;
    font-size:20px;
}

.infra-page .vf-text h4{
    font-size:18px;
    font-weight:700;
    color:#0f172a;
    margin-bottom:8px;
}

.infra-page .vf-text p{
    font-size:15px;
    color:#475569;
    line-height:1.7;
}

@media(max-width:1100px){
    .infra-page .value-wrapper{ grid-template-columns:1fr; gap:50px; }
}

@media(max-width:768px){
    .infra-page .value-section{ padding:70px 24px; }
    .infra-page .value-right h2{ font-size:28px; }
}

@media (min-width: 1320px) {
    .infra-page .hero-section,
    .infra-page .value-section {
        padding-left: max(70px, calc((100% - 1200px) / 2 + 70px));
        padding-right: max(70px, calc((100% - 1200px) / 2 + 70px));
    }
}
`;

const stackItems = [
    { icon: "fa-server", label: "Server" },
    { icon: "fa-database", label: "Storage" },
    { icon: "fa-cloud", label: "Cloud" },
    { icon: "fa-microchip", label: "HCI" },
    { icon: "fa-rotate", label: "Backup", sub: "& DRaaS" },
    { icon: "fa-building", label: "Data Center" },
];

const heroStats = [
    { value: "20+", desc: "Tahun Pengalaman" },
    { value: "500+", desc: "Klien Percaya" },
    { value: "24/7", desc: "Support Coverage" },
];

const valueFeatures = [
    {
        icon: "fa-shield-halved",
        title: "Konsultasi & Asesmen Mendalam",
        desc: "Kami mengevaluasi kebutuhan spesifik bisnis Anda sebelum merekomendasikan solusi apa pun.",
    },
    {
        icon: "fa-circle-check",
        title: "Vendor-Neutral & Multi-Brand",
        desc: "Kami bekerja dengan banyak partner teknologi terkemuka, memastikan Anda mendapatkan solusi yang paling tepat, bukan sekadar titipan merk.",
    },
    {
        icon: "fa-headset",
        title: "After-Sales Support 24/7",
        desc: "Tim NOC dan tim ahli kami memantau dan menangani setiap insiden kapan pun — memastikan sistem Anda terus berjalan.",
    },
];

export default function Page() {
    return (
        <>
            <div className="infra-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <section className="hero-section">
                    <div className="hero-wrapper">
                        <div className="hero-left">
                            <div className="hero-badge">
                                Infrastruktur Terkelola &amp; Sertifikasi
                            </div>

                            <h1>
                                Fondasi IT yang Andal untuk Bisnis Masa Depan
                            </h1>

                            <p>
                                PT. United Teknologi Integrasi menghadirkan solusi IT infrastructure
                                terintegrasi - dari server, storage, cloud, hingga data center - yang
                                dirancang untuk efisiensi, keamanan, dan skalabilitas penuh.
                            </p>

                            <div className="hero-buttons">
                                <button className="btn-white">Konsultasi Gratis</button>
                                <button className="btn-ghost">
                                    Lihat Solusi <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>

                            <div className="hero-stats">
                                {heroStats.map((s) => (
                                    <div key={s.desc}>
                                        <h3>{s.value}</h3>
                                        <p>{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hero-right">
                            <div className="stack-card">
                                <div className="stack-header">
                                    <span>Infrastructure Stack</span>
                                    <div className="stack-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div className="stack-grid">
                                    {stackItems.map((item) => (
                                        <div key={item.label} className="stack-item">
                                            <div className="stack-icon">
                                                <i className={`fa-solid ${item.icon}`}></i>
                                            </div>
                                            <div>
                                                <span>{item.label}</span>
                                                {item.sub && (
                                                    <>
                                                        <br />
                                                        <span className="sub-label">{item.sub}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="value-section">
                    <div className="value-wrapper">
                        <div className="value-left">
                            <div className="perf-card">
                                <div className="perf-header">
                                    <div className="perf-header-left">
                                        <div className="perf-icon">
                                            <i className="fa-solid fa-chart-line"></i>
                                        </div>
                                        <h4>System Performance</h4>
                                    </div>
                                    <span className="perf-status">Optimal</span>
                                </div>

                                <div className="perf-bars">
                                    <div className="perf-bar">
                                        <div className="perf-bar-fill"></div>
                                    </div>
                                    <div className="perf-bar">
                                        <div className="perf-bar-fill"></div>
                                    </div>
                                    <div className="perf-bar">
                                        <div className="perf-bar-fill"></div>
                                    </div>
                                </div>

                                <div className="perf-stats">
                                    <div className="perf-stat">
                                        <p>UPTIME</p>
                                        <p>99.9%</p>
                                    </div>
                                    <div className="perf-stat">
                                        <p>LATENCY</p>
                                        <p>12ms</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="value-right">
                            <h2>IT Infrastructure Bukan Sekadar Hardware</h2>
                            <p>
                                UTI memahami bahwa infrastruktur IT yang baik adalah pondasi dari
                                seluruh operasional bisnis. Kami tidak hanya menjual perangkat - kami
                                membangun ekosistem teknologi yang tumbuh bersama bisnis Anda.
                            </p>

                            <div className="value-features">
                                {valueFeatures.map((f) => (
                                    <div key={f.title} className="value-feature">
                                        <div className="vf-icon">
                                            <i className={`fa-solid ${f.icon}`}></i>
                                        </div>
                                        <div className="vf-text">
                                            <h4>{f.title}</h4>
                                            <p>{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <CTAForm backgroundColor="#0b1c3d" brandColor="#0b1c3d" />
        </>
    );
}
