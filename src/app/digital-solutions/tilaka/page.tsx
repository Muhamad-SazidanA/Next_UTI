import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.tilaka-page, .tilaka-page *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.tilaka-page{
    font-family:'Inter', sans-serif;
    background:#F5F7FB;
    color:#0F172A;
}

.tilaka-page .container-custom{
    width:100%;
    max-width:1250px;
    margin:auto;
    padding:0 32px;
}

/* HERO */
.tilaka-page .hero-section{
    background:#0F3D99;
    padding:90px 0;
    overflow:hidden;
}

.tilaka-page .hero-wrapper{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:70px;
}

.tilaka-page .hero-left{ max-width:560px; }

.tilaka-page .hero-title{
    font-size:64px;
    line-height:1.08;
    font-weight:800;
    color:white;
    margin-bottom:22px;
    letter-spacing:-2px;
}

.tilaka-page .hero-desc{
    color:rgba(255,255,255,0.75);
    font-size:15px;
    line-height:1.8;
    max-width:470px;
    margin-bottom:34px;
}

.tilaka-page .hero-btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:14px 30px;
    background:#0B2D72;
    border:1px solid rgba(255,255,255,0.12);
    border-radius:12px;
    color:white;
    text-decoration:none;
    font-size:14px;
    font-weight:500;
    transition:.3s ease;
}

.tilaka-page .hero-btn:hover{
    transform:translateY(-2px);
    background:#123B92;
}

.tilaka-page .hero-right{
    width:100%;
    max-width:520px;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:16px;
}

.tilaka-page .info-card{
    background:white;
    border-radius:14px;
    padding:22px;
    min-height:145px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}

.tilaka-page .info-card.blue{
    background:linear-gradient(135deg,#0A2C6E 0%, #1346B4 100%);
    position:relative;
    overflow:hidden;
}

.tilaka-page .info-card.blue::after{
    content:'';
    position:absolute;
    width:170px;
    height:170px;
    border-radius:50%;
    background:radial-gradient(
        circle,
        rgba(255,255,255,0.18) 0%,
        rgba(255,255,255,0.05) 45%,
        rgba(255,255,255,0) 70%
    );
    right:-70px;
    bottom:-70px;
}

.tilaka-page .card-number{
    font-size:34px;
    font-weight:800;
    line-height:1;
    color:white;
    position:relative;
    z-index:2;
}

.tilaka-page .card-title{
    font-size:15px;
    font-weight:600;
    line-height:1.5;
    color:#0F172A;
}

.tilaka-page .card-desc{
    font-size:13px;
    line-height:1.6;
    color:#64748B;
}

.tilaka-page .info-card.blue .card-title,
.tilaka-page .info-card.blue .card-desc{
    color:rgba(255,255,255,0.9);
    position:relative;
    z-index:2;
}

/* IDENTITY */
.tilaka-page .identity-section{
    padding:95px 0;
    background:#F5F7FB;
}

.tilaka-page .identity-wrapper{
    display:flex;
    justify-content:space-between;
    gap:70px;
    align-items:center;
}

.tilaka-page .identity-left{ max-width:480px; }

.tilaka-page .identity-label{
    font-size:12px;
    font-weight:700;
    letter-spacing:2px;
    color:#2563EB;
    display:inline-block;
    margin-bottom:16px;
}

.tilaka-page .identity-title{
    font-size:52px;
    line-height:1.1;
    font-weight:800;
    color:#0F172A;
    margin-bottom:24px;
    letter-spacing:-2px;
}

.tilaka-page .identity-title span{ color:#1D4ED8; }

.tilaka-page .identity-desc{
    color:#64748B;
    font-size:15px;
    line-height:1.9;
}

.tilaka-page .identity-right{
    flex:1;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:18px;
}

.tilaka-page .identity-card{
    background:white;
    border-radius:14px;
    padding:24px;
    border:1px solid #EAECEF;
}

.tilaka-page .icon-box{
    width:44px;
    height:44px;
    border-radius:12px;
    background:#1147B4;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    margin-bottom:18px;
    font-size:15px;
}

.tilaka-page .identity-card h4{
    font-size:17px;
    font-weight:700;
    color:#0F172A;
    margin-bottom:12px;
}

.tilaka-page .identity-card p{
    font-size:14px;
    line-height:1.7;
    color:#64748B;
}

/* PRODUCT */
.tilaka-page .product-section{
    padding:90px 0 110px;
    background:white;
}

.tilaka-page .product-header{
    text-align:center;
    margin-bottom:60px;
}

.tilaka-page .product-label{
    font-size:12px;
    letter-spacing:2px;
    color:#2563EB;
    font-weight:700;
    margin-bottom:16px;
    display:inline-block;
}

.tilaka-page .product-title{
    font-size:52px;
    line-height:1.1;
    font-weight:800;
    color:#0F172A;
    margin-bottom:18px;
    letter-spacing:-2px;
}

.tilaka-page .product-title span{ color:#2563EB; }

.tilaka-page .product-desc{
    font-size:15px;
    color:#64748B;
    line-height:1.8;
}

.tilaka-page .product-wrapper{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:24px;
}

.tilaka-page .product-card{
    background:white;
    border:1px solid #E5E7EB;
    border-radius:18px;
    overflow:hidden;
}

.tilaka-page .card-top{
    position:relative;
    overflow:hidden;
    padding:28px;
    background:linear-gradient(135deg, #0A2C6E 0%, #1346B4 100%);
}

.tilaka-page .blur-circle{
    position:absolute;
    width:180px;
    height:180px;
    border-radius:50%;
    background:radial-gradient(
        circle,
        rgba(255,255,255,0.18) 0%,
        rgba(255,255,255,0.05) 45%,
        rgba(255,255,255,0) 70%
    );
    right:-70px;
    bottom:-70px;
}

.tilaka-page .card-top .card-number{
    font-size:11px;
    letter-spacing:2px;
    color:#7DD3FC;
    margin-bottom:18px;
    display:inline-block;
}

.tilaka-page .card-top h3{
    font-size:26px;
    font-weight:700;
    color:white;
    margin-bottom:12px;
    position:relative;
    z-index:2;
    white-space:nowrap;
}

.tilaka-page .card-subtitle{
    color:rgba(255,255,255,0.75);
    font-size:14px;
    line-height:1.7;
    position:relative;
    z-index:2;
}

.tilaka-page .card-body{ padding:28px; }

.tilaka-page .body-desc{
    font-size:13px;
    color:#64748B;
    line-height:1.8;
    margin-bottom:22px;
}

.tilaka-page .card-body ul{ list-style:none; }

.tilaka-page .card-body ul li{
    display:flex;
    align-items:flex-start;
    gap:10px;
    margin-bottom:12px;
    font-size:13px;
    line-height:1.6;
    color:#0F172A;
}

.tilaka-page .card-body ul li i{
    color:#0EA5E9;
    margin-top:4px;
}

@media(max-width:1100px){
    .tilaka-page .hero-wrapper,
    .tilaka-page .identity-wrapper{
        flex-direction:column;
        align-items:flex-start;
    }
    .tilaka-page .hero-right{ max-width:100%; }
    .tilaka-page .product-wrapper{ grid-template-columns:1fr; }
}

@media(max-width:768px){
    .tilaka-page .container-custom{ padding:0 22px; }
    .tilaka-page .hero-section,
    .tilaka-page .identity-section,
    .tilaka-page .product-section{ padding:70px 0; }
    .tilaka-page .hero-title,
    .tilaka-page .identity-title,
    .tilaka-page .product-title{ font-size:38px; }
    .tilaka-page .hero-right,
    .tilaka-page .identity-right{ grid-template-columns:1fr; }
}

/* FEATURE */
.tilaka-page .feature-section{
    background:#0B348C;
    padding:90px 0;
    overflow:hidden;
}

.tilaka-page .feature-container{
    width:100%;
    max-width:1250px;
    margin:auto;
    padding:0 32px;
    display:grid;
    grid-template-columns: 1fr 560px;
    gap:50px;
    align-items:start;
}

.tilaka-page .feature-right{
    width:100%;
    padding-top:140px;
}

.tilaka-page .feature-left{ width:100%; }

.tilaka-page .feature-label{
    font-size:10px;
    letter-spacing:2px;
    color:#3CCBFF;
    font-weight:700;
    display:inline-block;
    margin-bottom:18px;
}

.tilaka-page .feature-title{
    font-size:58px;
    line-height:1.05;
    font-weight:800;
    color:white;
    margin-bottom:18px;
    letter-spacing:-2px;
}

.tilaka-page .feature-title span{ color:#11C5FF; }

.tilaka-page .feature-desc{
    color:rgba(255,255,255,0.6);
    font-size:14px;
    line-height:1.8;
    max-width:470px;
    margin-bottom:42px;
}

.tilaka-page .feature-list{
    display:flex;
    flex-direction:column;
    gap:18px;
}

.tilaka-page .feature-item{
    display:flex;
    align-items:flex-start;
    gap:16px;
}

.tilaka-page .feature-icon{
    width:38px;
    min-width:38px;
    height:38px;
    border-radius:10px;
    background:rgba(255,255,255,0.08);
    display:flex;
    align-items:center;
    justify-content:center;
    color:#23C8FF;
    font-size:14px;
}

.tilaka-page .feature-item h4{
    color:white;
    font-size:15px;
    font-weight:600;
    margin-bottom:5px;
}

.tilaka-page .feature-item p{
    color:rgba(255,255,255,0.55);
    font-size:12px;
    line-height:1.7;
}

.tilaka-page .platform-card{
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.05);
    border-radius:16px;
    padding:26px;
}

.tilaka-page .platform-card h3{
    color:white;
    font-size:24px;
    font-weight:700;
    margin-bottom:10px;
}

.tilaka-page .platform-card p{
    color:rgba(255,255,255,0.55);
    font-size:13px;
    line-height:1.7;
    margin-bottom:22px;
}

.tilaka-page .platform-list{
    display:flex;
    flex-direction:column;
    gap:12px;
}

.tilaka-page .platform-item{
    display:flex;
    align-items:flex-start;
    gap:14px;
    background:rgba(255,255,255,0.05);
    border-radius:12px;
    padding:15px 16px;
}

.tilaka-page .platform-icon{
    width:38px;
    min-width:38px;
    height:38px;
    border-radius:10px;
    background:rgba(255,255,255,0.08);
    display:flex;
    align-items:center;
    justify-content:center;
    color:#23C8FF;
    font-size:14px;
}

.tilaka-page .platform-item h5{
    color:white;
    font-size:14px;
    font-weight:600;
    margin-bottom:4px;
}

.tilaka-page .platform-item span{
    color:rgba(255,255,255,0.55);
    font-size:12px;
    line-height:1.6;
}

@media(max-width:1100px){
    .tilaka-page .feature-container{ grid-template-columns:1fr; }
    .tilaka-page .feature-right{ padding-top:0; }
}

@media(max-width:768px){
    .tilaka-page .feature-section{ padding:70px 0; }
    .tilaka-page .feature-container{ padding:0 22px; }
    .tilaka-page .feature-title{ font-size:40px; }
}

/* TRUST */
.tilaka-page .trust-section{
    background:white;
    padding:95px 0;
}

.tilaka-page .trust-top{ margin-bottom:70px; }

.tilaka-page .trust-badge,
.tilaka-page .deploy-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:#0F52BA;
    color:white;
    font-size:11px;
    font-weight:600;
    padding:6px 14px;
    border-radius:999px;
    margin-bottom:18px;
}

.tilaka-page .trust-badge::before,
.tilaka-page .deploy-badge::before{
    content:'';
    width:6px;
    height:6px;
    border-radius:50%;
    background:white;
    display:block;
}

.tilaka-page .trust-flow{
    font-size:34px;
    line-height:1.3;
    font-weight:800;
    color:#1147B4;
    margin-bottom:16px;
    letter-spacing:-1px;
}

.tilaka-page .trust-desc{
    font-size:14px;
    color:#64748B;
    line-height:1.7;
    margin-bottom:32px;
}

.tilaka-page .trust-steps{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:16px;
}

.tilaka-page .trust-step{
    background:#F3F6FB;
    border-radius:12px;
    padding:22px;
    position:relative;
    min-height:105px;
}

.tilaka-page .trust-step span{
    font-size:13px;
    color:#1147B4;
    font-weight:800;
    display:block;
    margin-bottom:16px;
    letter-spacing:.5px;
}

.tilaka-page .trust-step h5{
    font-size:19px;
    font-weight:800;
    color:#1147B4;
}

.tilaka-page .trust-step i{
    position:absolute;
    top:24px;
    right:18px;
    color:#1147B4;
    font-size:15px;
}

/* DEPLOYMENT */
.tilaka-page .deployment-wrapper{
    display:grid;
    grid-template-columns:340px 1fr;
    gap:40px;
    align-items:start;
}

.tilaka-page .deployment-left h2{
    font-size:21px;
    line-height:1.35;
    font-weight:700;
    color:#0F172A;
    margin-bottom:14px;
    letter-spacing:-0.3px;
}

.tilaka-page .deployment-left p{
    font-size:14px;
    line-height:1.8;
    color:#64748B;
    max-width:320px;
}

.tilaka-page .deployment-cards{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:16px;
}

.tilaka-page .deploy-card{
    background:#FFFFFF;
    border:1px solid #F1F5F9;
    border-radius:16px;
    overflow:hidden;
    padding:12px;
    transition:.3s ease;
    box-shadow:0 1px 4px rgba(0,0,0,0.04);
}

.tilaka-page .deploy-card:hover{
    transform:translateY(-4px);
    box-shadow:0 8px 24px rgba(0,0,0,0.08);
}

.tilaka-page .deploy-card img{
    width:100%;
    height:130px;
    object-fit:cover;
    border-radius:12px;
    margin-bottom:14px;
}

.tilaka-page .deploy-card span{
    font-size:9px;
    font-weight:800;
    color:#2563EB;
    display:block;
    margin-bottom:6px;
    letter-spacing:1.5px;
}

.tilaka-page .deploy-card h4{
    font-size:22px;
    font-weight:700;
    color:#0F172A;
    margin-bottom:8px;
}

.tilaka-page .deploy-card p{
    font-size:12.5px;
    line-height:1.65;
    color:#64748B;
}

@media(max-width:1100px){
    .tilaka-page .trust-steps{ grid-template-columns:repeat(2,1fr); }
    .tilaka-page .deployment-wrapper{ grid-template-columns:1fr; }
    .tilaka-page .deployment-cards{ grid-template-columns:1fr; }
}

@media(max-width:768px){
    .tilaka-page .trust-flow{ font-size:26px; }
    .tilaka-page .deployment-left h2{ font-size:24px; }
    .tilaka-page .trust-steps{ grid-template-columns:1fr; }
}

@media (min-width: 1320px) {
    .tilaka-page .hero-section,
    .tilaka-page .identity-section,
    .tilaka-page .product-section,
    .tilaka-page .trust-section,
    .tilaka-page .feature-section,
    .tilaka-page .deployment-section {
        padding-left: max(60px, calc((100% - 1200px) / 2 + 60px));
        padding-right: max(60px, calc((100% - 1200px) / 2 + 60px));
    }
}
`;

const products = [
    {
        num: "01 — PRODUK",
        title: "Digital Signature",
        subtitle: "Fast • Secure • Easy • Comply • Efficient",
        desc: "Stempel elektronik terenkripsi pada informasi digital seperti email, makro, atau dokumen elektronik. Memiliki validitas hukum dan validasi jangka panjang.",
        items: [
            "Tanda tangan dari perangkat apapun, kapanpun",
            "Enkripsi kuat anti-pemalsuan dokumen",
            "Tracking & auditing setiap aksi dokumen",
            "Multi-factor authentication (PIN, OTP, Biometrik)",
            "Multi-dokumen & multi-tanda tangan",
            "Integrasi dengan sistem bisnis existing",
        ],
    },
    {
        num: "02 — PRODUK",
        title: "E-Meterai",
        subtitle: "Resmi • Legal • Tersertifikasi Peemrintah",
        desc: "Meterai elektronik berfitur keamanan khusus yang diterbitkan pemerintah Republik Indonesia. Teknologi enkapsulasi PERURI cloud untuk proteksi data klien.",
        items: [
            "X.509 SHA 521 teknologi enkripsi",
            "22 Digit Serial Number alphanumerik",
            "QR Code unik 70% spesimen",
            "Timestamp & Bind to Document",
            "Monitoring Inventory",
            "Proses: Upload → Embed → Download",
        ],
    },
    {
        num: "03 — PRODUK",
        title: "ID Proofing",
        subtitle: "AI-Powered • Biometric • Real-time",
        desc: "Verifikasi identitas warga negara secara seamless, terhubung langsung ke Database Kependudukan Nasional dengan AI biometric security terdepan.",
        items: [
            "Face Recognition & AI Anti-Spoof",
            "Liveness Detection real-time",
            "AI Face Compare dengan database NIK",
            "Terhubung ke Dukcapil Nasional",
            "Tilaka AI Platform terintegrasi",
            "Authorization otomatis",
        ],
    },
];

const identityCards = [
    { icon: "fa-building-columns", title: "Berlisensi Resmi", desc: "Mendapat lisensi operasional di Indonesia sejak 2022, sesuai regulasi pemerintah." },
    { icon: "fa-lock", title: "Keamanan Tinggi", desc: "Enkripsi X.509 SHA 521 dan biometric security untuk perlindungan maksimal." },
    { icon: "fa-bolt", title: "Proses Cepat", desc: "Tanda tangani dokumen dalam hitungan menit, tanpa perlu cetak atau kirim fisik." },
    { icon: "fa-hospital", title: "Multi Industri", desc: "Melayani industri keuangan, kesehatan, dan berbagai sektor bisnis lainnya." },
];

const featureItems = [
    { icon: "fa-shield-halved", title: "Multi Factor Authentication", desc: "PIN, OTP, dan biometrik berlapis sebelum akses sistem diberikan." },
    { icon: "fa-chart-column", title: "User Management Dashboard", desc: "Kelola akun pengguna, role, dan akses kontrol dalam satu panel admin." },
    { icon: "fa-file-signature", title: "Document Pre-Sign Preview", desc: "Lihat dan validasi dokumen sebelum proses penandatangan dilakukan." },
    { icon: "fa-users", title: "Document Signing Flow", desc: "Otomatisasi alur dokumen untuk meningkatkan kolaborasi dan efisiensi operasional." },
    { icon: "fa-layer-group", title: "Multi Document & Multi Signature", desc: "Banyak pihak bisa menandatangani satu dokumen sekaligus dalam satu sistem." },
];

const platforms = [
    { icon: "fa-globe", title: "Web Portal", desc: "Akses dari browser manapun tanpa instalasi tambahan" },
    { icon: "fa-mobile-screen-button", title: "Mobile Friendly Application", desc: "Optimasi penuh di perangkat Android dan iOS" },
    { icon: "fa-cloud", title: "Cloud Services API", desc: "Integrasi fleksibel melalui REST API modern" },
    { icon: "fa-desktop", title: "On Premise Service API", desc: "Deployment infrastruktur independen sendiri" },
];

const trustSteps = ["Identity", "Consent", "Certificate", "Signature", "Verification"];

const deployCards = [
    { img: "/images/product/tilaka/Launch.svg", badge: "FAST GO-LIVE", title: "Portal", desc: "Solusi siap pakai untuk tim bisnis yang membutuhkan tanda tangan bersertifikat tanpa integrasi yang rumit." },
    { img: "/images/product/tilaka/Connect.svg", badge: "API-FIRST", title: "API", desc: "Integrasikan e-Consent, tanda tangan, OCR, dan verifikasi ke dalam sistem Anda sendiri dengan SLA perusahaan." },
    { img: "/images/product/tilaka/Security.svg", badge: "DATA SOVEREIGNTY", title: "On-Prem", desc: "Kendalikan data dan kebijakan keamanan dengan penerapan di lingkungan Anda sendiri." },
];

export default function Page() {
    return (
        <>
            <div className="tilaka-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <section className="hero-section">
                    <div className="container-custom">
                        <div className="hero-wrapper">
                            <div className="hero-left">
                                <h1 className="hero-title">
                                    Your Digital ID &amp; <br />
                                    Certificate <br />
                                    Trusted Partner
                                </h1>
                                <p className="hero-desc">
                                    One infrastructure for Digital Life — solusi tanda tangan digital,
                                    e-Meterai, dan verifikasi identitas yang cepat, aman,
                                    dan legal untuk bisnis Anda.
                                </p>
                                <a href="#" className="hero-btn">Star for free</a>
                            </div>

                            <div className="hero-right">
                                <div className="info-card blue">
                                    <div>
                                        <div className="card-number">68+</div>
                                        <div className="card-title">Juta Pengguna</div>
                                    </div>
                                    <div className="card-desc">
                                        Memverifikasi identitas mereka dengan Privy
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="card-title">Juta Dokumen</div>
                                    <div className="card-desc">Diolah dengan aman dan andal</div>
                                </div>

                                <div className="info-card">
                                    <div className="card-title">Perusahaan</div>
                                    <div className="card-desc">Percayakan Privy untuk solusi digital mereka.</div>
                                </div>

                                <div className="info-card">
                                    <div className="card-title">Proses Pendaftaran Pengguna</div>
                                    <div className="card-desc">Diselesaikan di bawah 7 detik.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="identity-section">
                    <div className="container-custom">
                        <div className="identity-wrapper">
                            <div className="identity-left">
                                <span className="identity-label">TENTANG TILAKA</span>
                                <h2 className="identity-title">
                                    Digital Identity <br />
                                    <span>untuk Indonesia</span>
                                </h2>
                                <p className="identity-desc">
                                    Tilaka adalah perusahaan digital ID dan sertifikat digital yang menyediakan layanan
                                    tanda tangan digital dan ID proofing untuk berbagai industri, khususnya Keuangan dan
                                    Kesehatan. Berlisensi penuh beroperasi di Indonesia sejak 2022.
                                </p>
                            </div>

                            <div className="identity-right">
                                {identityCards.map((c) => (
                                    <div key={c.title} className="identity-card">
                                        <div className="icon-box">
                                            <i className={`fa-solid ${c.icon}`}></i>
                                        </div>
                                        <h4>{c.title}</h4>
                                        <p>{c.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product-section">
                    <div className="container-custom">
                        <div className="product-header">
                            <span className="product-label">PRODUK KAMI</span>
                            <h2 className="product-title">
                                Solusi Lengkap untuk <br />
                                <span>Dokumen Digital</span>
                            </h2>
                            <p className="product-desc">
                                Tiga produk unggulan yang saling terintegrasi untuk ekosistem dokumen digital bisnis Anda.
                            </p>
                        </div>

                        <div className="product-wrapper">
                            {products.map((p) => (
                                <div key={p.title} className="product-card">
                                    <div className="card-top">
                                        <div className="blur-circle"></div>
                                        <span className="card-number">{p.num}</span>
                                        <h3>{p.title}</h3>
                                        <p className="card-subtitle">{p.subtitle}</p>
                                    </div>
                                    <div className="card-body">
                                        <p className="body-desc">{p.desc}</p>
                                        <ul>
                                            {p.items.map((item) => (
                                                <li key={item}>
                                                    <i className="fa-solid fa-circle-check"></i> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="feature-section">
                    <div className="feature-container">
                        <div className="feature-left">
                            <span className="feature-label">KEUNGGULAN PLATFORM</span>
                            <h2 className="feature-title">
                                Fitur &amp; <br />
                                <span>Fungsionalitas Lengkap</span>
                            </h2>
                            <p className="feature-desc">
                                Dirancang untuk kebutuhan enterprise — scalable, aman,
                                dan mudah diintegrasikan ke sistem Anda.
                            </p>

                            <div className="feature-list">
                                {featureItems.map((f) => (
                                    <div key={f.title} className="feature-item">
                                        <div className="feature-icon">
                                            <i className={`fa-solid ${f.icon}`}></i>
                                        </div>
                                        <div>
                                            <h4>{f.title}</h4>
                                            <p>{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="feature-right">
                            <div className="platform-card">
                                <h3>Akses Mudah di Semua Platform</h3>
                                <p>
                                    Gunakan layanan Tilaka dari mana saja, kapan saja — sesuai kebutuhan infrastruktur bisnis Anda.
                                </p>

                                <div className="platform-list">
                                    {platforms.map((p) => (
                                        <div key={p.title} className="platform-item">
                                            <div className="platform-icon">
                                                <i className={`fa-solid ${p.icon}`}></i>
                                            </div>
                                            <div>
                                                <h5>{p.title}</h5>
                                                <span>{p.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="trust-section">
                    <div className="container-custom">
                        <div className="trust-top">
                            <span className="trust-badge">Trust Architecture</span>
                            <h2 className="trust-flow">
                                Identity → Consent → Certificate → Signature → Verification
                            </h2>
                            <p className="trust-desc">
                                Arsitektur Tilaka dirancang secara modular dan berbasis API untuk menyatukan siklus hidup kepercayaan dari ujung ke ujung.
                            </p>

                            <div className="trust-steps">
                                {trustSteps.map((title, i) => (
                                    <div key={title} className="trust-step">
                                        <span>STEP {String(i + 1).padStart(2, "0")}</span>
                                        <h5>{title}</h5>
                                        {i < trustSteps.length - 1 && (
                                            <i className="fa-solid fa-arrow-right"></i>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="deployment-wrapper">
                            <div className="deployment-left">
                                <span className="deploy-badge">Deployment Model</span>
                                <h2>
                                    Select an integration scheme according to regulatory and operational requirements
                                </h2>
                                <p>
                                    Tilaka mendukung portal SaaS, API terkelola, dan solusi on-premise
                                    untuk memastikan terpenuhinya kontrol, skalabilitas, dan kepatuhan.
                                </p>
                            </div>

                            <div className="deployment-cards">
                                {deployCards.map((d) => (
                                    <div key={d.title} className="deploy-card">
                                        <img src={d.img} alt="" />
                                        <span>{d.badge}</span>
                                        <h4>{d.title}</h4>
                                        <p>{d.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <CTAForm backgroundColor="#0A2C6E" brandColor="#0A2C6E" />
        </>
    );
}
