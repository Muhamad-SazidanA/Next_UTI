import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.manusia-page *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.manusia-page .hero-section{
    width:100%;
    min-height: 580px;
    background-image: url('/images/product/manusia-ai/BannerImageManusia.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    align-items:center;
    position:relative;
    font-family:'Inter', sans-serif;
    overflow:hidden;
}

.manusia-page .hero-section::before{
    content:'';
    position:absolute;
    inset:0;
    background: rgba(0,0,0,0.30);
}

.manusia-page .hero-content{
    position:relative;
    z-index:2;
    max-width:700px;
    padding:0 50px;
    color:white;
}

@media (min-width: 1320px) {
    .manusia-page .hero-content{
        padding:0;
    }
}

.manusia-page .hero-badge{
    display:inline-flex;
    align-items:center;
    gap:10px;
    background: rgba(46,117,255,0.25);
    border:1px solid rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    padding:10px 18px;
    border-radius:999px;
    font-size:14px;
    margin-bottom:18px;
    box-shadow:0 4px 20px rgba(0,0,0,0.2);
}

.manusia-page .hero-badge span{
    color:#fff;
    font-weight:500;
}

.manusia-page .hero-star{
    color:#6ec1ff;
    font-size:14px;
    text-shadow:0 0 10px rgba(110,193,255,0.8);
}

.manusia-page .hero-title{
    font-size:64px;
    font-weight:800;
    line-height:1.05;
    margin-bottom:14px;
    letter-spacing:-2px;
}

.manusia-page .hero-subtitle{
    font-size:18px;
    font-weight:400;
    line-height:1.5;
    color:#e7eefc;
    max-width:560px;
    margin-bottom:24px;
}

.manusia-page .hero-btn{
    display:inline-block;
    background: linear-gradient(180deg,#4fa2ff,#2b6eff);
    color:white;
    text-decoration:none;
    padding:14px 26px;
    border-radius:12px;
    font-size:20px;
    font-weight:500;
    box-shadow:0 10px 25px rgba(43,110,255,0.35);
    transition:.25s;
}

.manusia-page .hero-btn:hover{
    transform:translateY(-2px);
}

@media(max-width:768px){
    .manusia-page .hero-content{ padding:30px; }
    .manusia-page .hero-title{ font-size:42px; }
    .manusia-page .hero-subtitle{ font-size:16px; }
    .manusia-page .hero-btn{ font-size:18px; }
}

.manusia-page .about-section{
    width:100%;
    background:#f5f7fb;
    padding:90px 50px;
    font-family:'Inter', sans-serif;
}

.manusia-page .about-container{
    max-width:1300px;
    margin:auto;
    display:grid;
    grid-template-columns: 1.1fr 1fr;
    gap:60px;
    align-items:start;
}

.manusia-page .about-label{
    color:#2563eb;
    font-size:13px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:20px;
}

.manusia-page .about-title{
    font-size:58px;
    line-height:1.08;
    font-weight:800;
    color:#0f172a;
    margin-bottom:24px;
    letter-spacing:-2px;
}

.manusia-page .about-title span{ color:#2563eb; }

.manusia-page .about-text{
    color:#667085;
    font-size:17px;
    line-height:1.8;
    margin-bottom:22px;
    max-width:620px;
}

.manusia-page .about-right{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:22px;
}

.manusia-page .about-card{
    background:white;
    border-radius:18px;
    padding:28px;
    box-shadow:0 8px 25px rgba(15,23,42,0.06);
    transition:.25s;
}

.manusia-page .about-card:hover{ transform:translateY(-5px); }

.manusia-page .card-line{
    width:28px;
    height:3px;
    background:#2563eb;
    border-radius:20px;
    margin-bottom:18px;
}

.manusia-page .card-icon{
    color:#2563eb;
    font-size:20px;
    margin-bottom:16px;
}

.manusia-page .about-card h4{
    font-size:18px;
    font-weight:700;
    color:#0f172a;
    margin-bottom:12px;
}

.manusia-page .about-card p{
    color:#667085;
    font-size:14px;
    line-height:1.7;
}

@media(max-width:992px){
    .manusia-page .about-container{ grid-template-columns:1fr; }
    .manusia-page .about-title{ font-size:42px; }
    .manusia-page .about-right{ grid-template-columns:1fr; }
}

.manusia-page .products-section{
    padding:100px 50px;
    background:#f8fafc;
    font-family:'Inter', sans-serif;
}

.manusia-page .products-header{
    text-align:center;
    max-width:850px;
    margin:auto;
    margin-bottom:70px;
}

.manusia-page .products-label{
    color:#2563eb;
    font-size:13px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:18px;
}

.manusia-page .products-title{
    font-size:58px;
    font-weight:800;
    line-height:1.05;
    color:#0f172a;
    letter-spacing:-2px;
    margin-bottom:20px;
}

.manusia-page .products-title span{ color:#2563eb; }

.manusia-page .products-subtitle{
    color:#667085;
    font-size:17px;
    line-height:1.8;
    max-width:720px;
    margin:auto;
}

.manusia-page .products-grid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:28px;
    max-width:1400px;
    margin:auto;
}

.manusia-page .product-card{
    background:#fff;
    border:1px solid #e7edf7;
    border-radius:24px;
    padding:30px;
    box-shadow:0 8px 24px rgba(15,23,42,0.04);
    transition:.3s;
}

.manusia-page .product-card:hover{ transform:translateY(-5px); }

.manusia-page .dark-card{
    background:#081c63;
    color:white;
    border:1px solid #0d56ff;
}

.manusia-page .product-top{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:24px;
}

.manusia-page .product-icon{
    width:52px;
    height:52px;
    border-radius:14px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
}

.manusia-page .product-icon.pink{ background:rgba(255,255,255,0.12); color:#ff6ac2; }
.manusia-page .product-icon.gray{ background:#f1f5f9; color:#64748b; }
.manusia-page .product-icon.green{ background:#ecfdf3; color:#16a34a; }
.manusia-page .product-icon.orange{ background:#fff7ed; color:#f97316; }

.manusia-page .product-badge{
    padding:8px 14px;
    border-radius:999px;
    font-size:12px;
    font-weight:600;
}

.manusia-page .blue{ background:#163b91; color:#93c5fd; }
.manusia-page .soft-blue{ background:#eff6ff; color:#2563eb; }
.manusia-page .green-badge{ background:#ecfdf3; color:#16a34a; }
.manusia-page .orange-badge{ background:#fff7ed; color:#f97316; }

.manusia-page .product-card h3{
    font-size:36px;
    font-weight:800;
    margin-bottom:12px;
    color:#0B1F5C;
}

.manusia-page .dark-card h3{ color:#fff; }

.manusia-page .product-category{
    font-size:13px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:20px;
}

.manusia-page .blue-text{ color:#60a5fa; }
.manusia-page .blue2{ color:#2563eb; }
.manusia-page .green-text{ color:#16a34a; }
.manusia-page .orange-text{ color:#f97316; }

.manusia-page .product-desc{
    font-size:15px;
    line-height:1.8;
    color:#667085;
    margin-bottom:24px;
}

.manusia-page .dark-card .product-desc{ color:#c7d2fe; }

.manusia-page .product-list{
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:14px;
    margin-bottom:28px;
}

.manusia-page .product-list li{
    display:flex;
    align-items:flex-start;
    gap:12px;
    font-size:14px;
    color:#667085;
    line-height:1.6;
}

.manusia-page .dark-card .product-list li{ color:#dbeafe; }

.manusia-page .product-list i{
    width:22px;
    height:22px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:10px;
    flex-shrink:0;
    margin-top:2px;
    background:#e0edff;
    color:#2563eb;
}

.manusia-page .dark-card .product-list i{
    background:rgba(96,165,250,0.15);
    color:#60a5fa;
}

.manusia-page .green-list i{ background:#dcfce7; color:#16a34a; }
.manusia-page .orange-list i{ background:#ffedd5; color:#f97316; }

.manusia-page .product-stats{
    border-top:1px solid rgba(255,255,255,0.12);
    padding-top:22px;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:18px;
}

.manusia-page .light-border{ border-top:1px solid #e5e7eb; }
.manusia-page .green-border{ border-top:1px solid #dcfce7; }
.manusia-page .orange-border{ border-top:1px solid #fed7aa; }

.manusia-page .product-stats h4{
    font-size:28px;
    font-weight:800;
    margin-bottom:6px;
    color:#0B1F5C;
    line-height:1;
}

.manusia-page .product-stats h4 span{
    font-size:28px;
    font-weight:800;
}

.manusia-page .light-border h4 span{ color:#60A5FA; }
.manusia-page .green-border h4 span{ color:#16A34A; }
.manusia-page .orange-border h4 span{ color:#F97316; }

.manusia-page .product-stats p{
    font-size:11px;
    color:#667085;
    line-height:1.4;
    margin-top:4px;
}

.manusia-page .dark-card .product-stats p{ color:#bfdbfe; }

@media(max-width:992px){
    .manusia-page .products-grid{ grid-template-columns:1fr; }
    .manusia-page .products-title{ font-size:42px; }
}

@media(max-width:768px){
    .manusia-page .products-section{ padding:80px 20px; }
    .manusia-page .products-title{ font-size:36px; }
    .manusia-page .product-card{ padding:24px; }
    .manusia-page .product-card h3{ font-size:30px; }
    .manusia-page .product-stats{ grid-template-columns:1fr; }
}

.manusia-page .services-section{
    padding:100px 50px;
    background:#f8fafc;
    font-family:'Inter', sans-serif;
}

.manusia-page .services-container{
    max-width:1400px;
    margin:auto;
    display:grid;
    grid-template-columns:0.9fr 1.4fr;
    gap:70px;
    align-items:start;
}

.manusia-page .services-label{
    color:#2563eb;
    font-size:13px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:18px;
}

.manusia-page .services-title{
    font-size:62px;
    font-weight:800;
    line-height:1.05;
    letter-spacing:-2px;
    color:#0B1F5C;
    margin-bottom:24px;
}

.manusia-page .services-title span{ color:#2563eb; }

.manusia-page .services-desc{
    font-size:18px;
    line-height:1.8;
    color:#667085;
    max-width:420px;
}

.manusia-page .services-right{
    display:flex;
    flex-direction:column;
    gap:16px;
}

.manusia-page .service-item{
    background:#fff;
    border:1px solid #dbe7ff;
    border-radius:18px;
    padding:24px;
    display:flex;
    gap:18px;
    align-items:flex-start;
    transition:.3s;
}

.manusia-page .service-item:hover{
    transform:translateY(-3px);
    box-shadow:0 10px 25px rgba(37,99,235,0.08);
}

.manusia-page .service-item.active{
    background:#eef5ff;
    border:1px solid #bfd7ff;
}

.manusia-page .service-number{
    min-width:42px;
    height:42px;
    border-radius:12px;
    background:#eff6ff;
    color:#2563eb;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:700;
    box-shadow:0 4px 12px rgba(37,99,235,0.08);
}

.manusia-page .service-item.active .service-number{
    background:#2563eb;
    color:white;
}

.manusia-page .service-content h4{
    font-size:19px;
    font-weight:800;
    color:#0B1F5C;
    margin-bottom:8px;
}

.manusia-page .service-content p{
    font-size:14px;
    line-height:1.7;
    color:#667085;
    max-width:700px;
}

@media(max-width:992px){
    .manusia-page .services-container{ grid-template-columns:1fr; gap:50px; }
    .manusia-page .services-title{ font-size:44px; }
}

@media(max-width:768px){
    .manusia-page .services-section{ padding:80px 20px; }
    .manusia-page .services-title{ font-size:38px; }
    .manusia-page .service-item{ padding:20px; }
    .manusia-page .service-content h4{ font-size:17px; }
}

.manusia-page .why-section{
    padding:100px 50px;
    background:#f8fafc;
    font-family:'Inter', sans-serif;
}

.manusia-page .why-header{
    text-align:center;
    margin-bottom:70px;
}

.manusia-page .why-label{
    color:#2563eb;
    font-size:13px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:18px;
}

.manusia-page .why-title{
    font-size:58px;
    font-weight:800;
    line-height:1.1;
    letter-spacing:-2px;
    color:#0B1F5C;
}

.manusia-page .why-title span{ color:#2563eb; }

.manusia-page .why-grid{
    max-width:1450px;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:18px;
}

.manusia-page .why-card{
    background:#fff;
    border:1px solid #e5edf9;
    border-radius:22px;
    padding:24px;
    transition:.3s;
    position:relative;
    overflow:hidden;
}

.manusia-page .why-card:hover{
    transform:translateY(-5px);
    box-shadow:0 10px 25px rgba(15,23,42,0.06);
}

.manusia-page .why-top{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
}

.manusia-page .why-line{
    width:24px;
    height:3px;
    border-radius:20px;
    background:#2563eb;
}

.manusia-page .why-top span{
    font-size:38px;
    font-weight:800;
    color:#e2e8f0;
    line-height:1;
}

.manusia-page .why-icon{
    width:48px;
    height:48px;
    border-radius:14px;
    background:#f1f5ff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:18px;
}

.manusia-page .why-icon i{
    color:#2563eb;
    font-size:18px;
}

.manusia-page .why-card h4{
    font-size:20px;
    line-height:1.4;
    font-weight:800;
    color:#0B1F5C;
    margin-bottom:14px;
}

.manusia-page .why-card p{
    font-size:14px;
    line-height:1.8;
    color:#667085;
}

@media(max-width:1200px){
    .manusia-page .why-grid{ grid-template-columns:repeat(3,1fr); }
}

@media(max-width:768px){
    .manusia-page .why-section{ padding:80px 20px; }
    .manusia-page .why-title{ font-size:40px; }
    .manusia-page .why-grid{ grid-template-columns:1fr; }
}

.manusia-page .industry-section{
    padding:100px 50px;
    background:#f8fafc;
    font-family:'Inter', sans-serif;
}

.manusia-page .industry-header{
    text-align:center;
    margin-bottom:70px;
}

.manusia-page .industry-label{
    color:#2563eb;
    font-size:13px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:18px;
}

.manusia-page .industry-title{
    font-size:58px;
    font-weight:800;
    line-height:1.1;
    letter-spacing:-2px;
    color:#0B1F5C;
}

.manusia-page .industry-title span{ color:#2563eb; }

.manusia-page .industry-grid{
    max-width:1000px;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(6,1fr);
    gap:18px;
}

.manusia-page .industry-card{
    background:#fff;
    border:1px solid #e4ebf7;
    border-radius:22px;
    padding:34px 26px;
    text-align:center;
    transition:.3s;
    min-height:220px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}

.manusia-page .industry-card:nth-child(1){ grid-column:1/3; }
.manusia-page .industry-card:nth-child(2){ grid-column:3/5; }
.manusia-page .industry-card:nth-child(3){ grid-column:5/7; }
.manusia-page .industry-card:nth-child(4){ grid-column:2/4; }
.manusia-page .industry-card:nth-child(5){ grid-column:4/6; }

.manusia-page .industry-icon{
    width:58px;
    height:58px;
    border-radius:16px;
    background:#f1f5ff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
}

.manusia-page .industry-icon i{
    font-size:22px;
    color:#2563eb;
}

.manusia-page .industry-card h4{
    font-size:20px;
    font-weight:800;
    color:#0B1F5C;
    margin-bottom:18px;
    line-height:1.4;
}

.manusia-page .industry-tags{
    display:flex;
    justify-content:center;
    gap:10px;
    flex-wrap:wrap;
}

.manusia-page .industry-tags span{
    padding:8px 14px;
    border-radius:999px;
    border:1px solid #bfd7ff;
    background:#f5f9ff;
    color:#2563eb;
    font-size:12px;
    font-weight:600;
    line-height:1;
}

@media(max-width:992px){
    .manusia-page .industry-grid{ grid-template-columns:1fr 1fr; }
    .manusia-page .industry-card:nth-child(4),
    .manusia-page .industry-card:nth-child(5){ grid-column:auto; margin:0; }
}

@media(max-width:768px){
    .manusia-page .industry-section{ padding:80px 20px; }
    .manusia-page .industry-title{ font-size:40px; }
    .manusia-page .industry-grid{ grid-template-columns:1fr; }
}


.manusia-page .capability-icon{
    width:70px;
    height:70px;
    border-radius:20px;
    background:rgba(200,16,46,0.08);
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:25px;
}

.manusia-page .capability-icon i{
    font-size:32px;
    color:#1A3CC8;
}

@media (min-width: 1320px) {
    .manusia-page .hero-section,
    .manusia-page .products-section,
    .manusia-page .services-section,
    .manusia-page .why-section,
    .manusia-page .industry-section {
        padding-left: max(50px, calc((100% - 1200px) / 2 + 50px));
        padding-right: max(50px, calc((100% - 1200px) / 2 + 50px));
    }
}
`;

export default function Page() {
    return (
        <>
            <div className="manusia-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <section className="hero-section">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <i className="fa-solid fa-star hero-star"></i>
                            <span>New: Our AI Integration Just landed</span>
                        </div>

                        <h1 className="hero-title">
                            Custom AI for Your <br />
                            Real Business Challenges
                        </h1>

                        <p className="hero-subtitle">
                            From Data to Insights: Tailored AI Solutions for Enterprise Growth
                        </p>

                        <a href="#" className="hero-btn">Star for free</a>
                    </div>
                </section>

                <section className="about-section">
                    <div className="about-container">
                        <div className="about-left">
                            <div className="about-label">— ABOUT MANUSIA.AI</div>

                            <h2 className="about-title">
                                Your Partner for <br />
                                <span>Custom AI Platform</span> <br />
                                &amp; Consulting
                            </h2>

                            <p className="about-text">
                                Manusia.AI adalah AI Consulting dan Custom Platform company yang
                                membantu perusahaan Indonesia menghadirkan efisiensi, inovasi, dan
                                keputusan berbasis data secara menyeluruh.
                            </p>

                            <p className="about-text">
                                Kami percaya teknologi AI harus mudah diakses, relevan dengan konteks
                                lokal, dan berdampak langsung bagi bisnis — bukan hanya eksperimen
                                laboratorium.
                            </p>
                        </div>

                        <div className="about-right">
                            <div className="about-card">
                                <div className="card-line"></div>
                                <i className="fa-solid fa-bullseye card-icon"></i>
                                <h4>Expertise</h4>
                                <p>
                                    Kombinasi konsultasi strategis dan tim teknis AI, kami membantu
                                    solusi AI konkret sesuai kebutuhan nyata.
                                </p>
                            </div>

                            <div className="about-card">
                                <div className="card-line"></div>
                                <i className="fa-solid fa-link card-icon"></i>
                                <h4>Integrasi Seamless</h4>
                                <p>
                                    AI yang terhubung langsung dengan sistem Anda. Tidak perlu ganti
                                    infrastruktur — kami integrasikan ke sistem yang sudah berjalan.
                                </p>
                            </div>

                            <div className="about-card">
                                <div className="card-line"></div>
                                <i className="fa-solid fa-bolt card-icon"></i>
                                <h4>Efisiensi 60–80%</h4>
                                <p>
                                    Hemat waktu, tenaga, dan biaya operasional dengan AI untuk otomasi
                                    tugas manual dan knowledge discovery.
                                </p>
                            </div>

                            <div className="about-card">
                                <div className="card-line"></div>
                                <i className="fa-solid fa-shield-halved card-icon"></i>
                                <h4>Keamanan &amp; Kepatuhan</h4>
                                <p>
                                    Sistem AI yang aman sesuai regulasi PDPL/GDPR, dan praktik keamanan
                                    data terbaik untuk bisnis modern.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="products-section">
                    <div className="products-header">
                        <div className="products-label">— OUR PRODUCTS</div>
                        <h2 className="products-title">
                            4 AI Products. <br />
                            <span>One Powerful Ecosystem.</span>
                        </h2>
                        <p className="products-subtitle">
                            Dari manajemen pengetahuan hingga rekrutmen otomatis — semua produk
                            Manusia.AI dirancang untuk memberikan dampak nyata pada operasional
                            bisnis Anda.
                        </p>
                    </div>

                    <div className="products-grid">
                        {/* CARD 1 */}
                        <div className="product-card dark-card">
                            <div className="product-top">
                                <div className="product-icon pink">
                                    <i className="fa-solid fa-brain"></i>
                                </div>
                                <div className="product-badge blue">AI Knowledge Mgmt</div>
                            </div>

                            <h3>Brilian.AI</h3>
                            <div className="product-category blue-text">
                                AI-POWERED KNOWLEDGE MANAGEMENT
                            </div>

                            <p className="product-desc">
                                Platform manajemen pengetahuan berbasis AI yang memungkinkan akses
                                cepat dan aman ke informasi internal, serta otomatisasi dokumen
                                untuk efisiensi dan pengambilan keputusan lebih cerdas.
                            </p>

                            <ul className="product-list">
                                <li><i className="fa-solid fa-check"></i> Tanya apa aja dengan natural language</li>
                                <li><i className="fa-solid fa-check"></i> Buatin &amp; analisa laporan otomatis</li>
                                <li><i className="fa-solid fa-check"></i> Riset market dari ribuan dokumen</li>
                                <li><i className="fa-solid fa-check"></i> Rangkumin meeting otomatis</li>
                                <li><i className="fa-solid fa-check"></i> Pikirin ide berbasis konteks kerja</li>
                            </ul>

                            <div className="product-stats">
                                <div>
                                    <h4>80 <span>%</span></h4>
                                    <p>Waktu akses informasi berkurang</p>
                                </div>
                                <div>
                                    <h4>100 <span>%</span></h4>
                                    <p>Data lokal Indonesia</p>
                                </div>
                                <div>
                                    <h4>6 <span>+</span></h4>
                                    <p>Fitur AI unggulan</p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="product-card">
                            <div className="product-top">
                                <div className="product-icon gray">
                                    <i className="fa-solid fa-file-lines"></i>
                                </div>
                                <div className="product-badge soft-blue">Intelligent Doc Processing</div>
                            </div>

                            <h3>Snapint</h3>
                            <div className="product-category blue2">SMART OCR &amp; DOCUMENT AI PLATFORM</div>

                            <p className="product-desc">
                                Platform Intelligent Document Processing (IDP) berbasis AI yang
                                membantu organisasi mengotomatisasi ekstraksi, pemrosesan, dan
                                ringkasan dokumen.
                            </p>

                            <ul className="product-list light">
                                <li><i className="fa-solid fa-check"></i> Ekstraksi data adaptif tanpa template</li>
                                <li><i className="fa-solid fa-check"></i> Klasifikasi dokumen otomatis</li>
                                <li><i className="fa-solid fa-check"></i> Pengenalan tabel &amp; struktur kompleks</li>
                                <li><i className="fa-solid fa-check"></i> Pengenalan tulisan tangan</li>
                                <li><i className="fa-solid fa-check"></i> Multibahasa Indonesia &amp; Inggris</li>
                            </ul>

                            <div className="product-stats light-border">
                                <div>
                                    <h4>99 <span>%</span></h4>
                                    <p>Akurasi ekstraksi</p>
                                </div>
                                <div>
                                    <h4>0 <span>s</span></h4>
                                    <p>Setup template</p>
                                </div>
                                <div>
                                    <h4>5 <span>+</span></h4>
                                    <p>Format dokumen</p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="product-card">
                            <div className="product-top">
                                <div className="product-icon green">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="product-badge green-badge">AI Recruitment</div>
                            </div>

                            <h3>Advin.AI</h3>
                            <div className="product-category green-text">AI-BASED RECRUITMENT PLATFORM</div>

                            <p className="product-desc">
                                Platform rekrutmen berbasis AI untuk mengoptimalkan, mempercepat,
                                dan mengobjektifkan proses hiring.
                            </p>

                            <ul className="product-list green-list">
                                <li><i className="fa-solid fa-check"></i> AI CV Analysis ribuan CV</li>
                                <li><i className="fa-solid fa-check"></i> Automated interview analysis</li>
                                <li><i className="fa-solid fa-check"></i> AI personality test objektif</li>
                                <li><i className="fa-solid fa-check"></i> Detailed scoring report</li>
                                <li><i className="fa-solid fa-check"></i> High volume hiring</li>
                            </ul>

                            <div className="product-stats green-border">
                                <div>
                                    <h4>70-80 <span>%</span></h4>
                                    <p>Lebih hemat waktu</p>
                                </div>
                                <div>
                                    <h4>80 <span>%</span></h4>
                                    <p>Akurasi match kandidat</p>
                                </div>
                                <div>
                                    <h4>50 <span>%</span></h4>
                                    <p>Hemat biaya</p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="product-card">
                            <div className="product-top">
                                <div className="product-icon orange">
                                    <i className="fa-solid fa-comment-dots"></i>
                                </div>
                                <div className="product-badge orange-badge">WhatsApp BI</div>
                            </div>

                            <h3>InTalks</h3>
                            <div className="product-category orange-text">INTELLIGENT WHATSAPP SALES PLATFORM</div>

                            <p className="product-desc">
                                Platform Business Intelligence berbasis WhatsApp untuk membantu
                                perusahaan mengubah percakapan menjadi data.
                            </p>

                            <ul className="product-list orange-list">
                                <li><i className="fa-solid fa-check"></i> Real-time analytics</li>
                                <li><i className="fa-solid fa-check"></i> Centralized sales dashboard</li>
                                <li><i className="fa-solid fa-check"></i> Broadcast massal dengan tracking</li>
                                <li><i className="fa-solid fa-check"></i> CRM &amp; API integration</li>
                                <li><i className="fa-solid fa-check"></i> Transparansi aktivitas cabang</li>
                            </ul>

                            <div className="product-stats orange-border">
                                <div>
                                    <h4>100 <span>%</span></h4>
                                    <p>Chat visibility</p>
                                </div>
                                <div>
                                    <h4>Real <span>-Time</span></h4>
                                    <p>Dashboard analytics</p>
                                </div>
                                <div>
                                    <h4>3<span>+</span></h4>
                                    <p>CRM integrations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services-section">
                    <div className="services-container">
                        <div className="services-left">
                            <div className="services-label">— OUR SERVICES</div>
                            <h2 className="services-title">
                                Tailored AI <br />
                                <span>Solutions</span> <br />
                                End-to-End
                            </h2>
                            <p className="services-desc">
                                Dari assessment kesiapan digital hingga deployment skala enterprise —
                                kami cover seluruh siklus AI journey Anda.
                            </p>
                        </div>

                        <div className="services-right">
                            {[
                                {
                                    num: "01",
                                    title: "AI Readiness & Opportunity Assessment",
                                    desc: "Evaluasi kesiapan digital dan identifikasi potensi penerapan AI di berbagai fungsi bisnis Anda.",
                                    active: true,
                                },
                                {
                                    num: "02",
                                    title: "Custom AI Development",
                                    desc: "Pengembangan model AI custom seperti NLP, OCR, prediction model, hingga LLM tuning.",
                                },
                                {
                                    num: "03",
                                    title: "Integration with Existing Systems",
                                    desc: "Integrasi AI dengan ERP, CRM, RPA, atau sistem internal tanpa mengganti infrastruktur.",
                                },
                                {
                                    num: "04",
                                    title: "Proof-of-Concept & Scalable Deployment",
                                    desc: "Uji coba awal (POC) hingga deployment skala besar untuk memastikan AI memberikan dampak nyata.",
                                },
                                {
                                    num: "05",
                                    title: "AI Lifecycle Support & Optimisation",
                                    desc: "Monitoring, retraining, dan pengembangan berkelanjutan agar performa AI tetap optimal.",
                                },
                            ].map((s) => (
                                <div
                                    key={s.num}
                                    className={`service-item${s.active ? " active" : ""}`}
                                >
                                    <div className="service-number">{s.num}</div>
                                    <div className="service-content">
                                        <h4>{s.title}</h4>
                                        <p>{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="why-section">
                    <div className="why-header">
                        <div className="why-label">— WHY CHOOSE US</div>
                        <h2 className="why-title">
                            10 Reasons to Partner <br />
                            <span>with Manusia.AI</span>
                        </h2>
                    </div>

                    <div className="why-grid">
                        {[
                            { n: "01", icon: "fa-chart-line", t: "Measurable Business Impact", d: "Semua solusi dirancang untuk meningkatkan efisiensi, memangkas biaya, dan menghasilkan insight yang terukur." },
                            { n: "02", icon: "fa-graduation-cap", t: "Deep Industry & Technical Expertise", d: "Tim kami menggabungkan pengalaman konsultasi mendalam dengan pemahaman domain industri." },
                            { n: "03", icon: "fa-layer-group", t: "End-to-End Solutions", d: "Dari strategi dan perencanaan hingga deployment dan integrasi penuh di seluruh AI journey." },
                            { n: "04", icon: "fa-scissors", t: "Customized to Your Business", d: "Setiap solusi AI disesuaikan dengan data, workflow, dan konteks bisnis spesifik Anda." },
                            { n: "05", icon: "fa-bolt", t: "Faster Time to Value", d: "Framework akselerasi kami memperpendek jarak dari ide ke implementasi nyata." },
                            { n: "06", icon: "fa-plug", t: "Easy Integration with Existing Systems", d: "AI bekerja bersama infrastruktur lama tanpa mengganggu proses bisnis yang berjalan." },
                            { n: "07", icon: "fa-shield-halved", t: "Enterprise-Grade Security", d: "Dibangun dengan standar keamanan, privasi, dan kepatuhan regulasi modern." },
                            { n: "08", icon: "fa-eye", t: "Human-Centered Approach", d: "AI yang explainable, intuitif, dan membantu manusia bekerja lebih optimal." },
                            { n: "09", icon: "fa-rocket", t: "Innovation with Stability", d: "Kami tetap agile sambil menjaga stabilitas, keamanan, dan performa sistem." },
                            { n: "10", icon: "fa-handshake", t: "Dedicated Partnership", d: "Kami menjadi partner AI jangka panjang untuk support, update, dan optimasi terus-menerus." },
                        ].map((c) => (
                            <div key={c.n} className="why-card">
                                <div className="why-top">
                                    <div className="why-line"></div>
                                    <span>{c.n}</span>
                                </div>
                                <div className="why-icon">
                                    <i className={`fa-solid ${c.icon}`}></i>
                                </div>
                                <h4>{c.t}</h4>
                                <p>{c.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="industry-section">
                    <div className="industry-header">
                        <div className="industry-label">— INDUSTRIES WE SERVE</div>
                        <h2 className="industry-title">
                            AI Solutions Across <br />
                            <span>Every Industry</span>
                        </h2>
                    </div>

                    <div className="industry-grid">
                        {[
                            { icon: "fa-building-columns", t: "Banking & Multifinance", tags: ["Brilian.AI", "SnapInt", "Advin"] },
                            { icon: "fa-hospital", t: "Health Care", tags: ["Brilian.AI", "SnapInt"] },
                            { icon: "fa-shield-halved", t: "Insurance", tags: ["Brilian.AI", "SnapInt", "Advin"] },
                            { icon: "fa-users", t: "Human Resource", tags: ["Advin", "Brilian.AI"] },
                            { icon: "fa-cart-shopping", t: "FMCG & Retail", tags: ["InTalks", "Advin"] },
                        ].map((c) => (
                            <div key={c.t} className="industry-card">
                                <div className="industry-icon">
                                    <i className={`fa-solid ${c.icon}`}></i>
                                </div>
                                <h4>{c.t}</h4>
                                <div className="industry-tags">
                                    {c.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
            <CTAForm backgroundColor="#1A3CC8" brandColor="#1A3CC8" />
        </>
    );
}
