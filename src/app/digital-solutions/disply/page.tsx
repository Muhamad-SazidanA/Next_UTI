import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.disply-page, .disply-page *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.disply-page{ font-family:'Inter', sans-serif; }

/* BANNER */
.disply-page .display-banner{
    position:relative;
    width:100%;
    height:620px;
    overflow:hidden;
    font-family:'Inter', sans-serif;
}

.disply-page .display-banner img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.disply-page .display-overlay{
    position:absolute;
    inset:0;
    background:rgba(0,0,0,0.55);
}

.disply-page .display-content{
    position:absolute;
    top:50%;
    left:70px;
    right:70px;
    transform:translateY(-50%);
    max-width:620px;
    color:#fff;
    z-index:2;
}

@media (min-width: 1320px) {
    .disply-page .display-content{
        left: max(70px, calc((100vw - 1200px) / 2 + 70px));
        right: auto;
    }
}

.disply-page .display-content h1{
    font-size:54px;
    line-height:1.1;
    font-weight:800;
    margin-bottom:20px;
}

.disply-page .display-content p{
    font-size:18px;
    line-height:1.7;
    color:rgba(255,255,255,0.9);
    margin-bottom:35px;
    max-width:560px;
}

.disply-page .display-btn{
    display:inline-flex;
    align-items:center;
    gap:12px;
    padding:14px 28px;
    background:#fff;
    color:#1d2b64;
    text-decoration:none;
    border-radius:999px;
    font-size:15px;
    font-weight:600;
    transition:0.3s ease;
}

.disply-page .display-btn:hover{
    transform:translateY(-2px);
    background:#f1f1f1;
}

.disply-page .display-btn i{ font-size:14px; }

.disply-page .display-sector{
    position:absolute;
    bottom:0;
    width:100%;
    background:#fff;
    padding:18px 40px;
    display:flex;
    justify-content:center;
    gap:38px;
    flex-wrap:wrap;
    z-index:3;
    border-top:1px solid #ececec;
}

.disply-page .sector-item{
    display:flex;
    align-items:center;
    gap:8px;
    font-size:13px;
    font-weight:500;
    color:#555;
}

.disply-page .sector-item i{
    color:#1d2b64;
    font-size:13px;
}

.disply-page .sector-label{
    font-size:11px;
    font-weight:700;
    letter-spacing:2px;
    color:#999;
    margin-right:10px;
    text-transform:uppercase;
}

@media(max-width:992px){
    .disply-page .display-banner{ height:720px; }
    .disply-page .display-content{ left:30px !important; right:30px; max-width:100%; }
    .disply-page .display-content h1{ font-size:40px; }
    .disply-page .display-content p{ font-size:16px; }
    .disply-page .display-sector{ gap:20px; padding:18px 20px; }
}

@media(max-width:576px){
    .disply-page .display-banner{ height:760px; }
    .disply-page .display-content h1{ font-size:32px; }
    .disply-page .display-content p{ font-size:14px; }
    .disply-page .display-btn{ padding:12px 22px; font-size:14px; }
    .disply-page .display-sector{ justify-content:flex-start; }
}

/* ABOUT */
.disply-page .about-display{
    padding:100px 70px;
    background:#f5f5f5;
    font-family:'Inter', sans-serif;
}

.disply-page .about-display-container{
    display:grid;
    grid-template-columns:1.1fr 1fr;
    align-items:center;
    gap:70px;
}

.disply-page .about-display-image img{
    width:100%;
    border-radius:22px;
    display:block;
}

.disply-page .about-mini-title{
    display:flex;
    align-items:center;
    gap:10px;
    font-size:11px;
    font-weight:700;
    letter-spacing:2px;
    color:#2341b0;
    margin-bottom:18px;
}

.disply-page .about-mini-title span{
    width:22px;
    height:2px;
    background:#2341b0;
    display:block;
}

.disply-page .about-display-content h2{
    font-size:54px;
    line-height:1;
    font-weight:800;
    margin-bottom:28px;
}

.disply-page .about-display-content h2 .dark-text{ color:#0D1F6B; }
.disply-page .about-display-content h2 .blue-text{ color:#1A3CC8; }

.disply-page .about-display-content p{
    font-size:16px;
    line-height:1.9;
    color:#666;
    margin-bottom:24px;
}

.disply-page .about-display-tags{
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    margin-top:30px;
}

.disply-page .display-tag{
    display:flex;
    align-items:center;
    gap:8px;
    padding:12px 18px;
    border:1px solid #e3e3e3;
    border-radius:999px;
    background:#fff;
    font-size:13px;
    font-weight:600;
    color:#0D1F6B;
}

.disply-page .display-tag i{
    font-size:8px;
    color:#0D1F6B;
}

@media(max-width:992px){
    .disply-page .about-display{ padding:80px 30px; }
    .disply-page .about-display-container{ grid-template-columns:1fr; gap:50px; }
    .disply-page .about-display-content h2{ font-size:42px; }
}

@media(max-width:576px){
    .disply-page .about-display-content h2{ font-size:34px; }
    .disply-page .about-display-content p{ font-size:14px; }
    .disply-page .display-tag{ width:100%; justify-content:center; }
}

/* SOLUTION */
.disply-page .display-solution{
    padding:100px 70px;
    background:#f5f5f5;
    font-family:'Inter', sans-serif;
}

.disply-page .display-solution-heading{
    text-align:center;
    max-width:760px;
    margin:auto;
    margin-bottom:70px;
}

.disply-page .solution-mini-title{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    font-size:11px;
    font-weight:700;
    letter-spacing:2px;
    color:#1A3CC8;
    margin-bottom:18px;
}

.disply-page .solution-mini-title span{
    width:24px;
    height:2px;
    background:linear-gradient(90deg,#1A3CC8,#6B7FCC);
}

.disply-page .display-solution-heading h2{
    font-size:52px;
    line-height:1.05;
    font-weight:800;
    margin-bottom:24px;
}

.disply-page .display-solution-heading h2 .dark-title{ color:#0D1F6B; }
.disply-page .display-solution-heading h2 .blue-title{ color:#1A3CC8; }

.disply-page .display-solution-heading p{
    font-size:15px;
    line-height:1.9;
    color:#6d6d6d;
    max-width:600px;
    margin:auto;
}

.disply-page .display-solution-grid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:28px;
}

.disply-page .solution-card{
    background:#fff;
    border-radius:18px;
    padding:30px;
    border-top:4px solid transparent;
    border-image:linear-gradient(90deg,#1A3CC8,#6B7FCC);
    border-image-slice:1;
    box-shadow:0 5px 18px rgba(0,0,0,0.04);
}

.disply-page .solution-top{
    display:flex;
    align-items:flex-start;
    gap:18px;
    margin-bottom:30px;
}

.disply-page .solution-icon{
    width:52px;
    height:52px;
    min-width:52px;
    border-radius:14px;
    background:#f1f3ff;
    display:flex;
    align-items:center;
    justify-content:center;
}

.disply-page .solution-icon i{
    color:#1A3CC8;
    font-size:20px;
}

.disply-page .solution-top h3{
    font-size:22px;
    font-weight:800;
    color:#0D1F6B;
    margin-bottom:10px;
}

.disply-page .solution-top p{
    font-size:14px;
    line-height:1.8;
    color:#707070;
}

.disply-page .solution-bottom{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:30px;
}

.disply-page .solution-bottom h4{
    font-size:11px;
    letter-spacing:1.5px;
    color:#1A3CC8;
    margin-bottom:14px;
    font-weight:800;
}

.disply-page .solution-bottom ul{
    padding:0;
    margin:0;
    list-style:none;
}

.disply-page .solution-bottom ul li{
    position:relative;
    padding-left:16px;
    margin-bottom:10px;
    font-size:13px;
    color:#555;
    line-height:1.7;
}

.disply-page .solution-bottom ul li::before{
    content:'•';
    position:absolute;
    left:0;
    top:0;
    color:#1A3CC8;
    font-size:14px;
}

@media(max-width:992px){
    .disply-page .display-solution{ padding:80px 30px; }
    .disply-page .display-solution-grid{ grid-template-columns:1fr; }
    .disply-page .display-solution-heading h2{ font-size:40px; }
}

@media(max-width:576px){
    .disply-page .display-solution-heading h2{ font-size:32px; }
    .disply-page .solution-top{ flex-direction:column; }
    .disply-page .solution-bottom{ grid-template-columns:1fr; }
}

/* FEATURE PRODUCT */
.disply-page .feature-product{
    padding:100px 70px;
    background:#f7f8fc;
    font-family:'Inter', sans-serif;
}

.disply-page .feature-product-row{
    display:grid;
    grid-template-columns:1fr 1fr;
    align-items:center;
    gap:70px;
    margin-bottom:110px;
}

.disply-page .feature-product-row:last-child{ margin-bottom:0; }

.disply-page .reverse-row{ direction:rtl; }
.disply-page .reverse-row > *{ direction:ltr; }

.disply-page .feature-product-image img{
    width:100%;
    border-radius:22px;
    display:block;
}

.disply-page .feature-mini-title{
    display:flex;
    align-items:center;
    gap:10px;
    font-size:11px;
    font-weight:700;
    letter-spacing:2px;
    color:#1A3CC8;
    margin-bottom:18px;
}

.disply-page .feature-mini-title span{
    width:24px;
    height:2px;
    background:linear-gradient(90deg,#1A3CC8,#6B7FCC);
}

.disply-page .feature-product-content h2{
    font-size:58px;
    line-height:0.95;
    font-weight:800;
    margin-bottom:24px;
}

.disply-page .feature-product-content h2 .dark-title{ color:#0D1F6B; }
.disply-page .feature-product-content h2 .blue-title{ color:#1A3CC8; }

.disply-page .feature-product-content p{
    font-size:15px;
    line-height:1.9;
    color:#6f6f6f;
    margin-bottom:32px;
}

.disply-page .feature-list{
    display:flex;
    flex-direction:column;
    gap:14px;
    margin-bottom:28px;
}

.disply-page .feature-item{
    display:flex;
    align-items:center;
    gap:14px;
    padding:18px 20px;
    border:1px solid #e5e8f3;
    border-radius:14px;
    background:#fff;
    font-size:14px;
    color:#4f4f4f;
    line-height:1.6;
}

.disply-page .feature-item i{
    width:20px;
    height:20px;
    border-radius:50%;
    background:#eef2ff;
    color:#1A3CC8;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:10px;
    min-width:20px;
}

.disply-page .feature-tags{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}

.disply-page .feature-tag{
    padding:8px 14px;
    border-radius:999px;
    background:#eef2ff;
    color:#1A3CC8;
    font-size:12px;
    font-weight:600;
}

@media(max-width:992px){
    .disply-page .feature-product{ padding:80px 30px; }
    .disply-page .feature-product-row{ grid-template-columns:1fr; gap:50px; }
    .disply-page .reverse-row{ direction:ltr; }
    .disply-page .feature-product-content h2{ font-size:44px; }
}

@media(max-width:576px){
    .disply-page .feature-product-content h2{ font-size:36px; }
    .disply-page .feature-item{ align-items:flex-start; }
    .disply-page .feature-tag{ font-size:11px; }
}

/* SERVICE */
.disply-page .display-service{
    position:relative;
    overflow:hidden;
    padding:100px 70px;
    background:#0D1F6B;
    font-family:'Inter', sans-serif;
}

.disply-page .service-bubble{
    position:absolute;
    border-radius:50%;
    background:#1A3CC8;
    opacity:0.18;
    z-index:1;
}

.disply-page .bubble-1{
    width:220px;
    height:220px;
    left:-90px;
    bottom:-90px;
}

.disply-page .bubble-2{
    width:180px;
    height:180px;
    top:-70px;
    right:-70px;
}

.disply-page .display-service-top{
    position:relative;
    z-index:2;
    display:flex;
    justify-content:space-between;
    gap:80px;
    margin-bottom:60px;
}

.disply-page .display-service-heading{ max-width:500px; }

.disply-page .service-mini-title{
    display:flex;
    align-items:center;
    gap:10px;
    font-size:11px;
    font-weight:700;
    letter-spacing:2px;
    color:#8EA2FF;
    margin-bottom:18px;
}

.disply-page .service-mini-title span{
    width:24px;
    height:2px;
    background:linear-gradient(90deg,#1A3CC8,#6B7FCC);
}

.disply-page .display-service-heading h2{
    font-size:56px;
    line-height:1;
    font-weight:800;
    color:#fff;
}

.disply-page .display-service-desc{ max-width:480px; }

.disply-page .display-service-desc p{
    font-size:15px;
    line-height:1.9;
    color:rgba(255,255,255,0.75);
}

.disply-page .display-service-grid{
    position:relative;
    z-index:2;
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:20px;
}

.disply-page .service-card{
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.08);
    border-radius:18px;
    padding:26px 20px;
    text-align:center;
    backdrop-filter:blur(6px);
    transition:0.3s ease;
}

.disply-page .service-card:hover{
    transform:translateY(-6px);
    background:rgba(255,255,255,0.08);
}

.disply-page .service-line{
    width:100%;
    height:2px;
    background:linear-gradient(90deg,#1A3CC8,#6B7FCC);
    border-radius:20px;
    margin-bottom:18px;
}

.disply-page .service-number{
    font-size:11px;
    font-weight:700;
    color:#8EA2FF;
    margin-bottom:18px;
}

.disply-page .service-icon{
    width:52px;
    height:52px;
    margin:auto;
    margin-bottom:20px;
    border-radius:50%;
    background:rgba(26,60,200,0.25);
    display:flex;
    align-items:center;
    justify-content:center;
}

.disply-page .service-icon i{
    color:#FFD37A;
    font-size:18px;
}

.disply-page .service-card h3{
    font-size:16px;
    line-height:1.5;
    font-weight:700;
    color:#fff;
    margin-bottom:14px;
}

.disply-page .service-card p{
    font-size:13px;
    line-height:1.8;
    color:rgba(255,255,255,0.65);
}

@media(max-width:1200px){
    .disply-page .display-service-grid{ grid-template-columns:repeat(3,1fr); }
}

@media(max-width:992px){
    .disply-page .display-service{ padding:80px 30px; }
    .disply-page .display-service-top{ flex-direction:column; gap:30px; }
    .disply-page .display-service-heading h2{ font-size:42px; }
    .disply-page .display-service-grid{ grid-template-columns:repeat(2,1fr); }
}

@media(max-width:576px){
    .disply-page .display-service-heading h2{ font-size:34px; }
    .disply-page .display-service-grid{ grid-template-columns:1fr; }
}

/* ADVANTAGE */
.disply-page .display-advantage{
    padding:100px 70px;
    background:#f5f5f5;
    font-family:'Inter', sans-serif;
}

.disply-page .display-advantage-heading{
    text-align:center;
    margin-bottom:70px;
}

.disply-page .advantage-mini-title{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    font-size:11px;
    font-weight:700;
    letter-spacing:2px;
    color:#1A3CC8;
    margin-bottom:18px;
}

.disply-page .advantage-mini-title span{
    width:24px;
    height:2px;
    background:linear-gradient(90deg,#1A3CC8,#6B7FCC);
}

.disply-page .display-advantage-heading h2{
    font-size:52px;
    line-height:1.05;
    font-weight:800;
}

.disply-page .display-advantage-heading .dark-title{ color:#0D1F6B; }
.disply-page .display-advantage-heading .blue-title{ color:#1A3CC8; }

.disply-page .display-advantage-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:28px;
}

.disply-page .advantage-card{
    position:relative;
    background:#fff;
    border:1px solid #e8ebf5;
    border-radius:22px;
    padding:34px 28px;
    overflow:hidden;
    transition:0.3s ease;
}

.disply-page .advantage-card:hover{
    transform:translateY(-6px);
    box-shadow:0 10px 30px rgba(13,31,107,0.06);
}

.disply-page .advantage-line{
    width:34px;
    height:3px;
    border-radius:20px;
    background:linear-gradient(90deg,#1A3CC8,#6B7FCC);
    margin-bottom:28px;
}

.disply-page .advantage-number{
    position:absolute;
    top:24px;
    right:24px;
    font-size:34px;
    font-weight:800;
    color:#eef1fb;
}

.disply-page .advantage-icon{
    width:50px;
    height:50px;
    border-radius:14px;
    background:#f1f3ff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:22px;
}

.disply-page .advantage-icon i{
    color:#1A3CC8;
    font-size:18px;
}

.disply-page .advantage-card h3{
    font-size:18px;
    line-height:1.5;
    font-weight:800;
    color:#0D1F6B;
    margin-bottom:14px;
}

.disply-page .advantage-card p{
    font-size:14px;
    line-height:1.9;
    color:#6f6f6f;
}

@media(max-width:992px){
    .disply-page .display-advantage{ padding:80px 30px; }
    .disply-page .display-advantage-grid{ grid-template-columns:1fr; }
    .disply-page .display-advantage-heading h2{ font-size:40px; }
}

@media(max-width:576px){
    .disply-page .display-advantage-heading h2{ font-size:32px; }
    .disply-page .advantage-card{ padding:28px 24px; }
}

@media (min-width: 1320px) {
    .disply-page .about-display,
    .disply-page .display-solution,
    .disply-page .feature-product,
    .disply-page .display-service,
    .disply-page .display-advantage {
        padding-left: max(70px, calc((100% - 1200px) / 2 + 70px));
        padding-right: max(70px, calc((100% - 1200px) / 2 + 70px));
    }
}
`;

const sectors = [
    { icon: "fa-building", label: "Korporasi & Enterprise" },
    { icon: "fa-graduation-cap", label: "Pendidikan" },
    { icon: "fa-landmark", label: "Pemerintahan" },
    { icon: "fa-store", label: "Retail & Komersial" },
    { icon: "fa-heart-pulse", label: "Kesehatan" },
    { icon: "fa-bolt", label: "Energi & BUMN" },
];

const aboutTags = ["End-to-End Solution", "Customizable Design", "Technical Support", "Remote Management"];

type SolutionCard = {
    icon: string;
    title: string;
    desc: string;
    features: string[];
    useCase: string[];
};

const solutions: SolutionCard[] = [
    {
        icon: "fa-desktop",
        title: "Interactive Kiosk",
        desc: "Cara modern dan efisien bagi pelanggan untuk mengakses informasi, melakukan transaksi, atau menggunakan layanan secara mandiri.",
        features: ["Touchscreen interactive display", "Customizable design & branding", "Multiple screen size options", "Support berbagai sistem operasi"],
        useCase: ["Self service system", "Visitor information", "Queue management", "Self check-in / check-out"],
    },
    {
        icon: "fa-tv",
        title: "Digital Signage",
        desc: "Menyampaikan informasi dan promosi secara lebih menarik, dinamis, dan mudah diperbarui secara real time dari berbagai lokasi.",
        features: ["Remote content management", "Multimedia support", "Scheduled content display", "Cloud based management"],
        useCase: ["Retail promotion", "Corporate communication", "Information display", "Menu board"],
    },
    {
        icon: "fa-chalkboard",
        title: "Interactive Whiteboard",
        desc: "Pengalaman kolaborasi interaktif dalam ruang meeting, ruang kelas, maupun ruang pelatihan dengan teknologi layar sentuh yang responsif.",
        features: ["Multi touch interactive display", "Wireless screen sharing", "Real-time annotation", "Collaboration tools"],
        useCase: ["Meeting room collaboration", "Corporate presentation", "Training & workshop", "Classroom learning"],
    },
    {
        icon: "fa-lightbulb",
        title: "LED Videotron & Videowall",
        desc: "Solusi display berskala besar dengan teknologi layar seamless dan panel modular untuk tampilan visual yang masif dan impactful.",
        features: ["Seamless Modular Design", "High Impact Visuals", "Professional Controller", "Indoor & Outdoor visibility"],
        useCase: ["Command Center & Control Room", "Corporate Dashboard", "Retail & Outdoor Advertising", "Event & Information Display"],
    },
];

const services = [
    { icon: "fa-message", title: "Consultation & Solution Design", desc: "Analisis kebutuhan dan perancangan solusi optimal untuk bisnis Anda" },
    { icon: "fa-cube", title: "Hardware Supply", desc: "Pengadaan perangkat berkualitas tinggi dari vendor terpercaya" },
    { icon: "fa-screwdriver-wrench", title: "Installation & Deployment", desc: "Pemasangan profesional oleh tim teknis berpengalaman" },
    { icon: "fa-gear", title: "Technical Setup & Calibration", desc: "Konfigurasi sistem dan kalibrasi perangkat untuk performa terbaik" },
    { icon: "fa-shield-halved", title: "Maintenance & Technical Support", desc: "Perawatan berkala dan dukungan teknis responsif pasca-implementasi" },
];

const advantages = [
    { icon: "fa-bullseye", title: "Solusi Terintegrasi Penuh", desc: "Setiap solusi dirancang sebagai sistem terpadu — dari hardware, software, hingga implementasi — memastikan performa optimal dan konsistensi pengalaman pengguna." },
    { icon: "fa-bolt", title: "Implementasi Cepat & Terstruktur", desc: "Proses implementasi yang sistematis dan efisien dengan tim teknis berpengalaman, meminimalkan downtime dan memastikan transisi yang mulus untuk operasional Anda." },
    { icon: "fa-link", title: "Integrasi Sistem Fleksibel", desc: "Setiap perangkat dapat disesuaikan dan diintegrasikan dengan sistem yang sudah berjalan di organisasi Anda — ERP, CRM, maupun aplikasi internal lainnya." },
];

export default function Page() {
    return (
        <>
            <div className="disply-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <section className="display-banner">
                    <img src="/images/product/disply/BannerImageDisply.png" alt="Display Banner" />
                    <div className="display-overlay"></div>

                    <div className="display-content">
                        <h1>
                            Smart Display Solutions <br />
                            untuk Semua Industri
                        </h1>
                        <p>
                            Digital Signage, Smart Kiosk, dan Interactive Whiteboards yang
                            andal untuk ruang publik, kantor, dan sekolah. Tingkatkan
                            engagement dengan teknologi display interaktif modern.
                        </p>
                        <a href="#" className="display-btn">
                            Jadwalkan Demo
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                    <div className="display-sector">
                        <div className="sector-label">MELAYANI SEKTOR</div>
                        {sectors.map((s) => (
                            <div key={s.label} className="sector-item">
                                <i className={`fa-solid ${s.icon}`}></i>
                                {s.label}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-display">
                    <div className="about-display-container">
                        <div className="about-display-image">
                            <img
                                src="/images/product/disply/ProductDisply.png"
                                alt="Product Display"
                            />
                        </div>

                        <div className="about-display-content">
                            <div className="about-mini-title">
                                <span></span>
                                TENTANG DISPLAY
                            </div>

                            <h2>
                                <span className="dark-text">Penyedia Solusi</span><br />
                                <span className="blue-text">Digital Display</span><br />
                                <span className="dark-text">Terpercaya</span>
                            </h2>

                            <p>
                                Display adalah penyedia solusi digital display dan perangkat interaktif
                                yang membantu bisnis, institusi pendidikan, dan layanan publik
                                memperkuat komunikasi visual melalui teknologi layar modern.
                            </p>

                            <p>
                                Kami menghadirkan sistem penyampaian informasi yang lebih efektif,
                                dinamis, dan mudah diintegrasikan — mulai dari analisis kebutuhan,
                                pemilihan perangkat, hingga implementasi penuh.
                            </p>

                            <div className="about-display-tags">
                                {aboutTags.map((t) => (
                                    <div key={t} className="display-tag">
                                        <i className="fa-solid fa-circle"></i>
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="display-solution">
                    <div className="display-solution-heading">
                        <div className="solution-mini-title">
                            <span></span>
                            OUR SOLUTIONS
                        </div>
                        <h2>
                            <span className="dark-title">Solusi Display untuk</span><br />
                            <span className="blue-title">Setiap Kebutuhan Bisnis</span>
                        </h2>
                        <p>
                            Kami menyediakan berbagai solusi digital display dan interactive
                            technology yang dirancang untuk meningkatkan efektivitas komunikasi
                            visual dan operasional bisnis.
                        </p>
                    </div>

                    <div className="display-solution-grid">
                        {solutions.map((s) => (
                            <div key={s.title} className="solution-card">
                                <div className="solution-top">
                                    <div className="solution-icon">
                                        <i className={`fa-solid ${s.icon}`}></i>
                                    </div>
                                    <div>
                                        <h3>{s.title}</h3>
                                        <p>{s.desc}</p>
                                    </div>
                                </div>

                                <div className="solution-bottom">
                                    <div>
                                        <h4>KEY FEATURES</h4>
                                        <ul>
                                            {s.features.map((f) => (
                                                <li key={f}>{f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>USE CASE</h4>
                                        <ul>
                                            {s.useCase.map((u) => (
                                                <li key={u}>{u}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="feature-product">
                    {/* KIOSK */}
                    <div className="feature-product-row">
                        <div className="feature-product-image">
                            <img
                                src="/images/product/disply/ProductKiosk.png"
                                alt="Interactive Kiosk"
                            />
                        </div>

                        <div className="feature-product-content">
                            <div className="feature-mini-title">
                                <span></span>
                                FEATURED PRODUCT
                            </div>

                            <h2>
                                <span className="dark-title">Interactive</span><br />
                                <span className="blue-title">Kiosk</span>
                            </h2>

                            <p>
                                Interactive Kiosk memberikan cara yang modern dan efisien bagi
                                pelanggan maupun pengunjung untuk mengakses informasi, melakukan
                                transaksi, atau menggunakan layanan secara mandiri.
                            </p>

                            <div className="feature-list">
                                {[
                                    "Touchscreen interactive display dengan respons presisi tinggi",
                                    "Customizable design & branding sesuai identitas perusahaan",
                                    "Multiple screen size options untuk berbagai kebutuhan lokasi",
                                    "Dapat diintegrasikan dengan berbagai sistem & aplikasi bisnis",
                                ].map((item) => (
                                    <div key={item} className="feature-item">
                                        <i className="fa-solid fa-check"></i>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="feature-tags">
                                {["Self Service", "Visitor Info", "Queue Management", "Self Check-in", "Product Catalog"].map((t) => (
                                    <div key={t} className="feature-tag">{t}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* DIGITAL SIGNAGE */}
                    <div className="feature-product-row">
                        <div className="feature-product-content">
                            <div className="feature-mini-title">
                                <span></span>
                                FEATURED PRODUCT
                            </div>

                            <h2>
                                <span className="dark-title">Digital</span><br />
                                <span className="blue-title">Signage</span>
                            </h2>

                            <p>
                                Digital Signage memungkinkan perusahaan menyampaikan informasi
                                dan promosi secara lebih menarik, dinamis, dan mudah diperbarui
                                secara real time. Dengan sistem pengelolaan konten yang fleksibel,
                                perusahaan dapat mengatur tampilan dari berbagai lokasi secara
                                terpusat.
                            </p>

                            <div className="feature-list">
                                {[
                                    "Remote content management dari mana saja",
                                    "Multimedia support: video, image, animation",
                                    "Scheduled content display dengan penjadwalan otomatis",
                                    "Cloud based management untuk skalabilitas maksimal",
                                ].map((item) => (
                                    <div key={item} className="feature-item">
                                        <i className="fa-solid fa-check"></i>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="feature-tags">
                                {["Retail Promotion", "Corporate Comm", "Menu Board", "Event Display"].map((t) => (
                                    <div key={t} className="feature-tag">{t}</div>
                                ))}
                            </div>
                        </div>

                        <div className="feature-product-image">
                            <img
                                src="/images/product/disply/ProductDigitalSignage.png"
                                alt="Digital Signage"
                            />
                        </div>
                    </div>
                </section>

                <section className="display-service">
                    <div className="service-bubble bubble-1"></div>
                    <div className="service-bubble bubble-2"></div>

                    <div className="display-service-top">
                        <div className="display-service-heading">
                            <div className="service-mini-title">
                                <span></span>
                                LAYANAN KAMI
                            </div>
                            <h2>
                                End-to-End Service <br />
                                dari Disply
                            </h2>
                        </div>

                        <div className="display-service-desc">
                            <p>
                                Kami tidak hanya menyediakan perangkat display, tetapi juga
                                menghadirkan layanan komprehensif untuk memastikan solusi yang
                                diimplementasikan dapat berjalan optimal dan memberikan nilai
                                maksimal bagi bisnis Anda.
                            </p>
                        </div>
                    </div>

                    <div className="display-service-grid">
                        {services.map((s, i) => (
                            <div key={s.title} className="service-card">
                                <div className="service-line"></div>
                                <div className="service-number">{String(i + 1).padStart(2, "0")}</div>
                                <div className="service-icon">
                                    <i className={`fa-solid ${s.icon}`}></i>
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="display-advantage">
                    <div className="display-advantage-heading">
                        <div className="advantage-mini-title">
                            <span></span>
                            MENGAPA DISPLY
                        </div>
                        <h2>
                            <span className="dark-title">Keunggulan yang Membedakan</span><br />
                            <span className="blue-title">Disply</span>
                        </h2>
                    </div>

                    <div className="display-advantage-grid">
                        {advantages.map((a, i) => (
                            <div key={a.title} className="advantage-card">
                                <div className="advantage-line"></div>
                                <div className="advantage-number">{String(i + 1).padStart(2, "0")}</div>
                                <div className="advantage-icon">
                                    <i className={`fa-solid ${a.icon}`}></i>
                                </div>
                                <h3>{a.title}</h3>
                                <p>{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
            <CTAForm backgroundColor="#1A3CC8" brandColor="#1A3CC8" />
        </>
    );
}
