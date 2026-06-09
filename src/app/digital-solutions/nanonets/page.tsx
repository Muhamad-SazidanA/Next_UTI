import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.nanonets-page, .nanonets-page *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.nanonets-page{ font-family:'Inter', sans-serif; }

/* HERO */
.nanonets-page .hero{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:80px 60px;
    font-family:'Inter', sans-serif;
}

.nanonets-page .hero-left{ max-width:550px; }

.nanonets-page .badge{
    display:flex;
    align-items:center;
    gap:10px;
    background:#F4F1FF;
    color:#546FFF;
    padding:8px 16px;
    border-radius:999px;
    font-size:14px;
    width:fit-content;
    margin-bottom:20px;
    border:1px solid #DDD6FE;
}

.nanonets-page .badge img{
    width:18px;
    height:18px;
    object-fit:contain;
    display:block;
}

.nanonets-page .hero-title{
    font-size:48px;
    font-weight:700;
    line-height:1.2;
    margin-bottom:20px;
    color:#1D1135;
}

.nanonets-page .hero-title span{ color:#546FFF; }

.nanonets-page .hero-desc{
    font-size:16px;
    color:#666;
    margin-bottom:30px;
    line-height:1.7;
}

.nanonets-page .hero-buttons{
    display:flex;
    gap:15px;
}

.nanonets-page .btn-primary{
    background:#546FFF;
    color:white;
    padding:12px 20px;
    border-radius:10px;
    text-decoration:none;
    font-weight:500;
}

.nanonets-page .btn-secondary{
    border:1px solid #ddd;
    padding:12px 20px;
    border-radius:10px;
    text-decoration:none;
    color:#333;
    font-weight:500;
}

.nanonets-page .hero-right img{
    width:500px;
    max-width:100%;
}

/* PRODUCT */
.nanonets-page .product-section{
    padding:80px 60px;
    font-family:'Inter', sans-serif;
}

.nanonets-page .product-subtitle{
    font-size:12px;
    letter-spacing:2px;
    color:#546FFF;
    font-weight:600;
    margin-bottom:10px;
}

.nanonets-page .product-title{
    font-size:52px;
    font-weight:700;
    line-height:1.1;
    margin-bottom:20px;
    color:#1D1135;
}

.nanonets-page .product-title span{ color:#546FFF; }

.nanonets-page .product-desc{
    color:#777;
    max-width:620px;
    margin-bottom:45px;
    line-height:1.8;
}

.nanonets-page .product-wrapper{
    border:1px solid #e8e8e8;
    border-radius:24px;
    overflow:hidden;
    display:grid;
    grid-template-columns:1fr 1fr;
    background:white;
}

.nanonets-page .product-card{
    padding:45px;
    min-height:360px;
    background:#ffffff;
}

.nanonets-page .product-card:first-child{
    border-right:1px solid #e8e8e8;
}

.nanonets-page .card-label{
    font-size:11px;
    color:#8b7dff;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:14px;
}

.nanonets-page .card-title{
    font-size:40px;
    font-weight:600;
    color:#1D1135;
    margin-bottom:20px;
    line-height:1.2;
}

.nanonets-page .card-desc{
    font-size:15px;
    color:#666;
    line-height:1.8;
    margin-bottom:28px;
}

.nanonets-page .tags{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    margin-bottom:30px;
}

.nanonets-page .tag{
    background:#DDD6FE;
    color:#546FFF;
    padding:7px 12px;
    border-radius:8px;
    font-size:12px;
    font-weight:500;
}

.nanonets-page .card-link{
    color:#546FFF;
    font-weight:600;
    text-decoration:none;
    font-size:14px;
}

@media(max-width:900px){
    .nanonets-page .hero{ flex-direction:column; text-align:center; }
    .nanonets-page .hero-right{ margin-top:40px; }
    .nanonets-page .hero-buttons{ justify-content:center; }
    .nanonets-page .badge{ margin:0 auto 20px; }
    .nanonets-page .product-wrapper{ grid-template-columns:1fr; }
    .nanonets-page .product-card:first-child{
        border-right:none;
        border-bottom:1px solid #e8e8e8;
    }
    .nanonets-page .product-title{ font-size:38px; }
}

/* CAPABILITIES */
.nanonets-page .capabilities-section{
    padding:80px 60px;
    font-family:'Inter', sans-serif;
}

.nanonets-page .capabilities-subtitle{
    font-size:12px;
    letter-spacing:2px;
    color:#546FFF;
    font-weight:700;
    margin-bottom:12px;
}

.nanonets-page .capabilities-title{
    font-size:52px;
    line-height:1.1;
    font-weight:700;
    color:#1D1135;
    margin-bottom:20px;
}

.nanonets-page .capabilities-title span{ color:#546FFF; }

.nanonets-page .capabilities-desc{
    max-width:650px;
    color:#777;
    line-height:1.8;
    margin-bottom:50px;
}

.nanonets-page .capabilities-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    border:1px solid #e8e8e8;
    border-radius:24px;
    overflow:hidden;
}

.nanonets-page .capability-card{
    padding:40px;
    border-right:1px solid #e8e8e8;
    border-bottom:1px solid #e8e8e8;
    background:#fff;
}

.nanonets-page .capability-card:nth-child(3),
.nanonets-page .capability-card:nth-child(6){
    border-right:none;
}

.nanonets-page .capability-card:nth-child(4),
.nanonets-page .capability-card:nth-child(5),
.nanonets-page .capability-card:nth-child(6){
    border-bottom:none;
}

.nanonets-page .capability-icon{
    width:48px;
    height:48px;
    background:#F4F1FF;
    border-radius:14px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:25px;
}

.nanonets-page .capability-icon i{
    font-size:20px;
    color:#546FFF;
}

.nanonets-page .capability-icon img{
    width:24px;
    height:24px;
    object-fit:contain;
}

.nanonets-page .capability-title-small{
    font-size:18px;
    font-weight:700;
    color:#1D1135;
    margin-bottom:15px;
}

.nanonets-page .capability-text{
    color:#777;
    font-size:14px;
    line-height:1.8;
}

@media(max-width:900px){
    .nanonets-page .capabilities-grid{ grid-template-columns:1fr; }
    .nanonets-page .capability-card{
        border-right:none !important;
        border-bottom:1px solid #e8e8e8 !important;
    }
    .nanonets-page .capability-card:last-child{ border-bottom:none !important; }
    .nanonets-page .capabilities-title{ font-size:38px; }
}

/* USE CASE */
.nanonets-page .usecase-section{
    padding:80px 60px;
    background:linear-gradient(135deg,#546FFF 0%,#6C7CFF 100%);
    font-family:'Inter', sans-serif;
    color:white;
}

.nanonets-page .usecase-subtitle{
    font-size:12px;
    letter-spacing:2px;
    font-weight:700;
    margin-bottom:12px;
    opacity:0.9;
}

.nanonets-page .usecase-title{
    font-size:52px;
    line-height:1.1;
    font-weight:700;
    margin-bottom:20px;
}

.nanonets-page .usecase-desc{
    max-width:650px;
    line-height:1.8;
    opacity:0.85;
    margin-bottom:45px;
}

.nanonets-page .usecase-grid{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    border:1px solid rgba(255,255,255,0.15);
    border-radius:24px;
    overflow:hidden;
}

.nanonets-page .usecase-card{
    padding:40px;
    background:rgba(255,255,255,0.06);
    backdrop-filter:blur(10px);
    border-right:1px solid rgba(255,255,255,0.12);
    border-bottom:1px solid rgba(255,255,255,0.12);
}

.nanonets-page .usecase-card:nth-child(2),
.nanonets-page .usecase-card:nth-child(4){ border-right:none; }

.nanonets-page .usecase-card:nth-child(3),
.nanonets-page .usecase-card:nth-child(4){ border-bottom:none; }

.nanonets-page .usecase-label{
    font-size:11px;
    letter-spacing:1px;
    opacity:0.7;
    margin-bottom:16px;
    font-weight:600;
}

.nanonets-page .usecase-card-title{
    font-size:28px;
    font-weight:600;
    margin-bottom:18px;
    line-height:1.3;
}

.nanonets-page .usecase-text{
    font-size:14px;
    line-height:1.8;
    opacity:0.85;
    margin-bottom:25px;
}

.nanonets-page .usecase-tags{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}

.nanonets-page .usecase-tags span{
    padding:7px 12px;
    border-radius:999px;
    background:rgba(255,255,255,0.12);
    font-size:12px;
    border:1px solid rgba(255,255,255,0.1);
}

@media(max-width:900px){
    .nanonets-page .usecase-grid{ grid-template-columns:1fr; }
    .nanonets-page .usecase-card{
        border-right:none !important;
        border-bottom:1px solid rgba(255,255,255,0.12) !important;
    }
    .nanonets-page .usecase-card:last-child{ border-bottom:none !important; }
    .nanonets-page .usecase-title{ font-size:38px; }
}

/* MODELS */
.nanonets-page .models-section{
    padding:80px 60px;
    font-family:'Inter', sans-serif;
    background:#fff;
}

.nanonets-page .models-subtitle{
    font-size:12px;
    letter-spacing:2px;
    color:#546FFF;
    font-weight:700;
    margin-bottom:12px;
}

.nanonets-page .models-title{
    font-size:52px;
    line-height:1.1;
    font-weight:700;
    color:#1D1135;
    margin-bottom:20px;
}

.nanonets-page .models-title span{ color:#546FFF; }

.nanonets-page .models-desc{
    max-width:650px;
    color:#777;
    line-height:1.8;
    margin-bottom:45px;
}

.nanonets-page .models-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    border:1px solid #e8e8e8;
    border-radius:24px;
    overflow:hidden;
}

.nanonets-page .models-card{
    padding:35px;
    border-right:1px solid #e8e8e8;
    border-bottom:1px solid #e8e8e8;
    background:#fff;
}

.nanonets-page .models-card:nth-child(3),
.nanonets-page .models-card:nth-child(6){ border-right:none; }

.nanonets-page .models-card:nth-child(4),
.nanonets-page .models-card:nth-child(5),
.nanonets-page .models-card:nth-child(6){ border-bottom:none; }

.nanonets-page .models-label{
    font-size:11px;
    letter-spacing:1px;
    color:#546FFF;
    font-weight:700;
    margin-bottom:18px;
    display:flex;
    align-items:center;
    gap:7px;
}

.nanonets-page .models-label i{
    font-size:13px;
}

.nanonets-page .models-card ul{
    padding-left:0;
    margin:0;
    list-style:none;
}

.nanonets-page .models-card ul li{
    margin-bottom:10px;
    color:#4b4b4b;
    line-height:1.6;
    display:flex;
    align-items:baseline;
    gap:7px;
}

.nanonets-page .models-card ul li::before{
    content:"•";
    color:#546FFF;
    font-size:14px;
    flex-shrink:0;
}

.nanonets-page .models-highlight{
    background:#F4F1FF;
    border-left:3px solid #546FFF;
}

.nanonets-page .models-highlight ul li{
    color:#546FFF;
    font-weight:500;
}

@media(max-width:900px){
    .nanonets-page .models-grid{ grid-template-columns:1fr; }
    .nanonets-page .models-card{
        border-right:none !important;
        border-bottom:1px solid #e8e8e8 !important;
    }
    .nanonets-page .models-card:last-child{ border-bottom:none !important; }
    .nanonets-page .models-title{ font-size:38px; }
}

/* LEADERBOARD */
.nanonets-page .leaderboard-section{
    padding:80px 60px;
    font-family:'Inter', sans-serif;
    background:#fff;
}

.nanonets-page .leaderboard-wrapper{
    display:grid;
    grid-template-columns:1fr 1fr;
    border:1px solid #e8e8e8;
    border-radius:24px;
    overflow:hidden;
    background:#F7F5FF;
}

.nanonets-page .leaderboard-left{
    padding:50px;
    border-right:1px solid #e8e8e8;
}

.nanonets-page .leaderboard-badge{
    display:flex;
    align-items:center;
    gap:10px;
    background:#546FFF;
    color:#fff;
    width:fit-content;
    padding:8px 14px;
    border-radius:999px;
    font-size:11px;
    font-weight:700;
    letter-spacing:.5px;
    margin-bottom:24px;
}

.nanonets-page .leaderboard-badge img{
    width:16px;
    height:16px;
    object-fit:contain;
}

.nanonets-page .leaderboard-title{
    font-size:46px;
    line-height:1.1;
    font-weight:700;
    color:#1D1135;
    margin-bottom:20px;
}

.nanonets-page .leaderboard-title span{ color:#546FFF; }

.nanonets-page .leaderboard-desc{
    color:#7a7a7a;
    line-height:1.8;
    max-width:430px;
}

.nanonets-page .leaderboard-right{
    padding:50px;
    display:flex;
    flex-direction:column;
    gap:14px;
}

.nanonets-page .leaderboard-item{
    display:flex;
    align-items:center;
    background:#fff;
    border:1px solid #e8e8e8;
    border-radius:14px;
    padding:18px 22px;
}

.nanonets-page .leaderboard-item.active{
    background:linear-gradient(135deg,#546FFF 0%,#6C7CFF 100%);
    color:#fff;
    border:none;
}

.nanonets-page .leaderboard-rank{
    width:32px;
    font-size:14px;
    font-weight:600;
    opacity:.9;
}

.nanonets-page .leaderboard-name{
    flex:1;
    font-size:15px;
    font-weight:500;
}

.nanonets-page .leaderboard-score{
    font-size:14px;
    font-weight:700;
}

@media(max-width:900px){
    .nanonets-page .leaderboard-wrapper{ grid-template-columns:1fr; }
    .nanonets-page .leaderboard-left{
        border-right:none;
        border-bottom:1px solid #e8e8e8;
    }
    .nanonets-page .leaderboard-title{ font-size:36px; }
    .nanonets-page .leaderboard-section{ padding:60px 20px; }
}

@media (min-width: 1320px) {
    .nanonets-page .hero,
    .nanonets-page .product-section,
    .nanonets-page .capabilities-section,
    .nanonets-page .usecase-section,
    .nanonets-page .models-section,
    .nanonets-page .leaderboard-section {
        padding-left: max(60px, calc((100% - 1200px) / 2 + 60px));
        padding-right: max(60px, calc((100% - 1200px) / 2 + 60px));
    }
}
`;

const capabilities = [
    { icon: "fa-bolt", title: "Non-Intrusive Deployment", desc: "Tidak perlu mengubah sistem atau API existing. Agent berjalan di atas layer aplikasi yang ada — SAP, Oracle, web, desktop." },
    { icon: "fa-brain", title: "Intelligent Process Learning", desc: "AI mempelajari pola dokumen dan terus beradaptasi. Model makin akurat setiap kali dokumen baru diproses — tanpa retraining manual." },
    { icon: "fa-chart-line", title: "Enhanced Table Extraction", desc: "Ekstraksi baris-kolom presisi untuk tabel kompleks. AI mendeteksi header, merged cells, dan hierarki data secara otomatis." },
    { icon: "fa-code", title: "JSON API Ready", desc: "Output terstruktur key-value dan table cell langsung via API. Mendukung kustomisasi penuh dan bekerja out-of-the-box untuk semua tipe dokumen." },
    { icon: "fa-arrow-trend-up", title: "GenAI + AI Model", desc: "Pilih antara AI Model (training 100 file, akurasi tinggi) atau GenAI Model (zero training, ekstrak langsung). Keduanya dalam satu platform." },
    { icon: "fa-circle-check", title: "Human-in-the-loop", desc: "UI review intuitif untuk koreksi massal. Edge case dirouting ke Slack, Teams, atau email — model belajar dari setiap koreksi secara otomatis." },
];

const usecases = [
    { label: "FINANCE & BANKING", title: "Invoice Processing Otomatis", desc: "Invoice dan receipt dalam format apa pun. Agent memvalidasi PO, mencocokkan vendor, mendeteksi approval, lalu men-trigger ke ERP secara otomatis.", tags: ["Multi-format capture", "Pay matching", "ERP posting", "OCR cost reduction"] },
    { label: "ONBOARDING / KYC", title: "ID & Document Verification", desc: "KTP, NPWP, Kartu Keluarga, Paspor, SIM, Bank Statement. Pre-built model untuk dokumen Indonesia siap pakai tanpa konfigurasi tambahan.", tags: ["KTP parsing", "Passport OCR", "OCR bank statement"] },
    { label: "RETAIL & MANUFACTURING", title: "Order Entry & PO Automation", desc: "Purchase Order, Delivery Order, BAST, BAPP otomatis diproses dan dimasukkan ke sistem — dari inbox email langsung ke ERP tanpa sentuhan manusia.", tags: ["Purchase Order", "Delivery Order", "BAST", "BAPP"] },
    { label: "AI INDUSTRIES", title: "Faktur Pajak & Finance Docs", desc: "Faktur Pajak, Invoice, Kwitansi, Receipt — semua format Indonesia dan finance documents dengan ekstraksi tinggi dan output JSON terstruktur.", tags: ["Faktur Pajak", "Kwitansi", "Receipt", "Compliance ready"] },
];

const models: Array<{ icon: string; label: string; items: string[]; highlight?: boolean }> = [
    { icon: "fa-id-card", label: "ONBOARDING / KYC", items: ["KTP", "NPWP", "Kartu Keluarga", "Bank Statement", "SIM", "Passport", "SLIK"] },
    { icon: "fa-file-invoice-dollar", label: "FINANCE DOCUMENT", items: ["Invoice", "Faktur Pajak", "Purchase Order", "Delivery Order", "BAST · BAPP", "Kwitansi · Receipt"] },
    { icon: "fa-scale-balanced", label: "LEGAL & OWNERSHIP", items: ["SIUP · NIB · TDP", "Akta Perusahaan", "BPKB · SIM", "Sertifikat Tanah", "Akta Kelahiran", "Akta Pernikahan"] },
    { icon: "fa-user-tie", label: "RECRUITMENT", items: ["CV", "Ijazah", "Transkrip Nilai"] },
    { icon: "fa-file-pen", label: "CUSTOM DOCUMENT", items: ["FDM", "SKPR", "PKS", "Medical Claim", "Any custom template"] },
    { icon: "fa-bolt", label: "ZERO SETUP REQUIRED", items: ["GenAI Model: mulai dari 0 dokumen", "AI Model: 100 file, 15 menit training", "Free 25x return per year", "Hybrid & On-premise tersedia", "Free trial portal included"], highlight: true },
];

const leaderboard = [
    { rank: 1, name: "Nanonets OCR-3", score: "98.7%", active: true },
    { rank: 2, name: "GPT-5", score: "94.2%" },
    { rank: 3, name: "Gemini", score: "92.8%" },
    { rank: 4, name: "Claude", score: "91.5%" },
];

export default function Page() {
    return (
        <>
            <div className="nanonets-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <div className="hero">
                    <div className="hero-left">
                        <div className="badge">
                            <img src="/images/product/nanonets/IconMedali.png" alt="" />
                            <span>Ranked #1 on the IDP Leaderboard 2024 — ahead of GPT-5 &amp; Gemini</span>
                        </div>

                        <div className="hero-title">
                            Dropping agents<br />
                            into your <span>most<br />complex processes</span>
                        </div>

                        <div className="hero-desc">
                            Agents yang bekerja di ERP, inbox, dan approval chains —
                            menyelesaikan proses yang masih dijalankan tim Anda secara manual.
                            Jutaan halaman diproses setiap hari.
                        </div>

                        <div className="hero-buttons">
                            <a href="#" className="btn-primary">Book a Demo</a>
                            <a href="#" className="btn-secondary">Start for free →</a>
                        </div>
                    </div>

                    <div className="hero-right">
                        <img src="/images/product/nanonets/Extracting.svg" alt="" />
                    </div>
                </div>

                <div className="product-section">
                    <div className="product-subtitle">— TWO PRODUCTS · ONE PLATFORM</div>
                    <div className="product-title">
                        Agents yang <span>menyelesaikan</span><br />
                        pekerjaan. Data yang siap dipakai.
                    </div>
                    <div className="product-desc">
                        Satu workforce menutup proses di dalam sistem Anda.
                        Satu API mengubah dokumen apa pun menjadi data siap agent.
                    </div>

                    <div className="product-wrapper">
                        <div className="product-card">
                            <div className="card-label">FOR BUSINESS TEAMS</div>
                            <div className="card-title">Nanonets Agents</div>
                            <div className="card-desc">
                                Agents yang membaca input messy, menerapkan aturan bisnis Anda,
                                dan menyelesaikan pekerjaan di dalam systems of record —
                                tanpa konfigurasi template, tanpa aturan manual.
                            </div>
                            <div className="tags">
                                {["Accounts Payable", "Order Management", "Healthcare RCM", "Logistics", "Contracts", "Vendor Onboarding", "ID & Insurance"].map((t) => (
                                    <div key={t} className="tag">{t}</div>
                                ))}
                            </div>
                            <a href="#" className="card-link">Learn more →</a>
                        </div>

                        <div className="product-card">
                            <div className="card-label">FOR DEVELOPERS</div>
                            <div className="card-title">Agentic Data Extraction</div>
                            <div className="card-desc">
                                Document extraction API yang dibangun untuk LLM dan agent pipelines.
                                Ranked #1 pada IDP Leaderboard. Ekstrak tabel, key-value pairs,
                                dan struktur kompleks dari dokumen apa pun.
                            </div>
                            <div className="tags">
                                {["Markdown + JSON", "Tables Preserved", "No Templates", "Low Latency", "Open Source", "LangChain & LlamaIndex"].map((t) => (
                                    <div key={t} className="tag">{t}</div>
                                ))}
                            </div>
                            <a href="#" className="card-link">View product →</a>
                        </div>
                    </div>
                </div>

                <div className="capabilities-section">
                    <div className="capabilities-subtitle">— CORE CAPABILITIES</div>
                    <div className="capabilities-title">
                        Teknologi di balik <span>akurasi</span><br />
                        yang tidak tertandingi
                    </div>
                    <div className="capabilities-desc">
                        Platform Nanonets dirancang untuk masuk ke lingkungan enterprise
                        yang kompleks tanpa mengganggu sistem yang sudah berjalan.
                    </div>

                    <div className="capabilities-grid">
                        {capabilities.map((c) => (
                            <div key={c.title} className="capability-card">
                                <div className="capability-icon">
                                    <i className={`fa-solid ${c.icon}`}></i>
                                </div>
                                <div className="capability-title-small">{c.title}</div>
                                <div className="capability-text">{c.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="usecase-section">
                    <div className="usecase-subtitle">— USE CASES</div>
                    <div className="usecase-title">
                        Proses yang tidak bisa<br />
                        diotomasi platform lain.
                    </div>
                    <div className="usecase-desc">
                        Berjalan di production. Jutaan halaman per hari.
                        Tingkat ROI tertinggi untuk enterprise Indonesia.
                    </div>

                    <div className="usecase-grid">
                        {usecases.map((u) => (
                            <div key={u.title} className="usecase-card">
                                <div className="usecase-label">{u.label}</div>
                                <div className="usecase-card-title">{u.title}</div>
                                <div className="usecase-text">{u.desc}</div>
                                <div className="usecase-tags">
                                    {u.tags.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="models-section">
                    <div className="models-subtitle">— PRE-BUILT MODELS</div>
                    <div className="models-title">
                        Model siap pakai untuk<br />
                        <span>dokumen Indonesia</span>
                    </div>
                    <div className="models-desc">
                        Coverage dokumen enterprise Indonesia yang komprehensif.
                        Langsung ekstrak tanpa setup tambahan —
                        dari KYC hingga dokumen legal korporat.
                    </div>

                    <div className="models-grid">
                        {models.map((m) => (
                            <div key={m.label} className={`models-card${m.highlight ? " models-highlight" : ""}`}>
                                <div className="models-label"><i className={`fa-solid ${m.icon}`}></i>{m.label}</div>
                                <ul>
                                    {m.items.map((it) => (
                                        <li key={it}>{it}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="leaderboard-section">
                    <div className="leaderboard-wrapper">
                        <div className="leaderboard-left">
                            <div className="leaderboard-badge">
                                <img src="/images/product/nanonets/IconMedali.png" alt="" />
                                <span>IDP LEADERBOARD 2024</span>
                            </div>

                            <div className="leaderboard-title">
                                Ranked <span>#1</span> — lebih<br />
                                akurat dari GPT-5,<br />
                                Gemini, dan Claude.
                            </div>

                            <div className="leaderboard-desc">
                                Input yang salah merusak semua downstream pipeline.
                                Nanonets OCR-3 adalah model ekstraksi paling akurat —
                                membuat seluruh pipeline aman untuk diotomasi sepenuhnya.
                            </div>
                        </div>

                        <div className="leaderboard-right">
                            {leaderboard.map((l) => (
                                <div key={l.rank} className={`leaderboard-item${l.active ? " active" : ""}`}>
                                    <div className="leaderboard-rank">{l.rank}</div>
                                    <div className="leaderboard-name">{l.name}</div>
                                    <div className="leaderboard-score">{l.score}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <CTAForm backgroundColor="#546FFF" brandColor="#546FFF" />
        </>
    );
}
