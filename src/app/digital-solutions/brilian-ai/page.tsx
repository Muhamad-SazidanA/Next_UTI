import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.brilian-page *{ margin:0; padding:0; box-sizing:border-box; }

.brilian-page .brilian-hero{
    background:#f5f5f5;
    padding:70px 70px 30px;
    font-family:'Inter', sans-serif;
    overflow:hidden;
}

.brilian-page .brilian-container{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:60px;
}

.brilian-page .brilian-left{ width:50%; }

.brilian-page .brilian-title{
    font-size:68px;
    line-height:1.05;
    font-weight:800;
    color:#111827;
    margin-bottom:24px;
}

.brilian-page .brilian-title span{ color:#2563eb; }

.brilian-page .brilian-desc{
    font-size:17px;
    line-height:1.9;
    color:#6b7280;
    max-width:620px;
    margin-bottom:35px;
}

.brilian-page .brilian-buttons{
    display:flex;
    align-items:center;
    gap:16px;
    margin-bottom:45px;
}

.brilian-page .btn-primary-custom{
    background:#2563eb;
    color:white;
    padding:16px 30px;
    border-radius:14px;
    text-decoration:none;
    font-weight:600;
    font-size:15px;
    display:inline-flex;
    align-items:center;
    gap:10px;
    transition:.3s;
}

.brilian-page .btn-primary-custom:hover{
    background:#1e4fd8;
    color:white;
}

.brilian-page .btn-secondary-custom{
    border:1.5px solid #2563eb;
    color:#2563eb;
    padding:16px 30px;
    border-radius:14px;
    text-decoration:none;
    font-weight:600;
    font-size:15px;
    transition:.3s;
}

.brilian-page .btn-secondary-custom:hover{
    background:#2563eb;
    color:white;
}

.brilian-page .brilian-divider{
    width:100%;
    height:1px;
    background:#dcdcdc;
    margin-bottom:25px;
}

.brilian-page .brilian-label{
    font-size:12px;
    color:#9ca3af;
    letter-spacing:2px;
    font-weight:700;
    margin-bottom:18px;
    text-transform:uppercase;
}

.brilian-page .brilian-tags{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
}

.brilian-page .brilian-tag{
    background:white;
    border:1px solid #e5e7eb;
    padding:10px 18px;
    border-radius:999px;
    font-size:14px;
    font-weight:600;
    color:#374151;
    display:flex;
    align-items:center;
    gap:8px;
}

.brilian-page .brilian-tag i{
    color:#2563eb;
    font-size:7px;
}

.brilian-page .brilian-right{
    width:50%;
    position:relative;
    display:flex;
    justify-content:center;
}

.brilian-page .brilian-right img{
    width:100%;
    max-width:620px;
    object-fit:contain;
}

.brilian-page .brilian-sector{
    margin-top:45px;
    border-top:1px solid #e5e7eb;
    padding-top:20px;
    display:flex;
    align-items:center;
    gap:30px;
    flex-wrap:wrap;
}

.brilian-page .brilian-sector-title{
    font-size:12px;
    color:#9ca3af;
    letter-spacing:2px;
    font-weight:700;
    text-transform:uppercase;
}

.brilian-page .brilian-sector-items{
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    gap:24px;
}

.brilian-page .brilian-sector-item{
    display:flex;
    align-items:center;
    gap:10px;
    color:#6b7280;
    font-weight:600;
    font-size:15px;
}

.brilian-page .brilian-sector-item i{
    width:28px;
    height:28px;
    border-radius:8px;
    background:white;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#2563eb;
    border:1px solid #e5e7eb;
    font-size:13px;
}

@media(max-width:991px){
    .brilian-page .brilian-hero{ padding:50px 25px; }
    .brilian-page .brilian-container{ flex-direction:column; }
    .brilian-page .brilian-left,
    .brilian-page .brilian-right{ width:100%; }
    .brilian-page .brilian-title{ font-size:48px; }
    .brilian-page .brilian-right{ margin-top:20px; }
}

@media(max-width:576px){
    .brilian-page .brilian-title{ font-size:38px; }
    .brilian-page .brilian-desc{ font-size:15px; }
    .brilian-page .brilian-buttons{ flex-direction:column; align-items:stretch; }
    .brilian-page .btn-primary-custom,
    .brilian-page .btn-secondary-custom{ justify-content:center; }
}

.brilian-page .why-brilian{
    background:#0B1D3A;
    padding:90px 70px;
    font-family:'Inter', sans-serif;
    overflow:hidden;
}

.brilian-page .why-brilian-container{
    display:flex;
    justify-content:space-between;
    gap:60px;
    align-items:center;
}

.brilian-page .why-left{ width:38%; }

.brilian-page .why-mini-title{
    color:#00BFFF;
    font-size:12px;
    font-weight:700;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:18px;
}

.brilian-page .why-title{
    font-size:58px;
    line-height:1.05;
    font-weight:800;
    color:white;
    margin-bottom:30px;
}

.brilian-page .why-desc{
    font-size:16px;
    line-height:1.9;
    color:#8EA3C2;
    max-width:500px;
}

.brilian-page .why-right{
    width:62%;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:22px;
}

.brilian-page .why-card{
    background:#13284B;
    border-radius:22px;
    padding:28px;
    position:relative;
    overflow:hidden;
    border:1px solid rgba(255,255,255,0.05);
    transition:.3s;
}

.brilian-page .why-card::before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:3px;
    background:#00BFFF;
}

.brilian-page .why-card:hover{
    transform:translateY(-5px);
    border-color:rgba(0,191,255,0.4);
}

.brilian-page .why-icon{
    width:48px;
    height:48px;
    border-radius:14px;
    background:#19345E;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#FFD84D;
    font-size:18px;
    margin-bottom:24px;
}

.brilian-page .why-card:nth-child(2) .why-icon{ color:#ff4d6d; }
.brilian-page .why-card:nth-child(3) .why-icon{ color:#8ab4ff; }
.brilian-page .why-card:nth-child(4) .why-icon{ color:#6ec6ff; }

.brilian-page .why-card-title{
    color:white;
    font-size:20px;
    font-weight:700;
    margin-bottom:14px;
}

.brilian-page .why-card-desc{
    color:#8EA3C2;
    font-size:15px;
    line-height:1.8;
}

@media(max-width:991px){
    .brilian-page .why-brilian{ padding:70px 25px; }
    .brilian-page .why-brilian-container{ flex-direction:column; }
    .brilian-page .why-left,
    .brilian-page .why-right{ width:100%; }
    .brilian-page .why-title{ font-size:42px; }
}

@media(max-width:768px){
    .brilian-page .why-right{ grid-template-columns:1fr; }
}

.brilian-page .fitur-section{
    background:#f5f5f5;
    padding:90px 70px;
    font-family:'Inter', sans-serif;
    overflow:hidden;
}

.brilian-page .fitur-heading{
    text-align:center;
    margin-bottom:60px;
}

.brilian-page .fitur-mini-title{
    color:#2563eb;
    font-size:12px;
    font-weight:700;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:18px;
}

.brilian-page .fitur-title{
    font-size:58px;
    line-height:1.05;
    font-weight:800;
    color:#0f172a;
    margin-bottom:24px;
}

.brilian-page .fitur-title span{ color:#2563eb; }

.brilian-page .fitur-desc{
    color:#6b7280;
    font-size:16px;
    line-height:1.9;
    max-width:720px;
    margin:auto;
}

.brilian-page .fitur-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:22px;
}

.brilian-page .fitur-card{
    background:white;
    border-radius:22px;
    padding:28px;
    border:1px solid #e5e7eb;
    transition:.3s;
    position:relative;
    overflow:hidden;
}

.brilian-page .fitur-card:hover{
    transform:translateY(-6px);
    box-shadow:0 20px 40px rgba(0,0,0,0.06);
}

.brilian-page .fitur-number{
    color:#2563eb;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:22px;
}

.brilian-page .fitur-icon{
    width:48px;
    height:48px;
    border-radius:14px;
    background:#f1f5f9;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:24px;
    color:#2563eb;
    font-size:18px;
}

.brilian-page .fitur-card-title{
    font-size:22px;
    font-weight:700;
    color:#0f172a;
    margin-bottom:8px;
}

.brilian-page .fitur-card-sub{
    color:#2563eb;
    font-size:11px;
    font-weight:700;
    letter-spacing:1px;
    text-transform:uppercase;
    margin-bottom:18px;
}

.brilian-page .fitur-card-desc{
    color:#6b7280;
    font-size:15px;
    line-height:1.8;
    margin-bottom:22px;
}

.brilian-page .fitur-tags{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}

.brilian-page .fitur-tag{
    background:#eef4ff;
    color:#2563eb;
    padding:8px 12px;
    border-radius:999px;
    font-size:11px;
    font-weight:600;
}

.brilian-page .idea-wrapper{
    display:flex;
    flex-direction:column;
    gap:16px;
}

.brilian-page .idea-box{
    background:#f8fafc;
    border:1px solid #e5e7eb;
    border-radius:16px;
    padding:18px;
}

.brilian-page .idea-box-title{
    font-size:16px;
    font-weight:700;
    color:#0f172a;
    margin-bottom:10px;
}

.brilian-page .idea-box-desc{
    color:#6b7280;
    font-size:13px;
    line-height:1.7;
    margin-bottom:12px;
}

.brilian-page .idea-score{
    color:#2563eb;
    font-size:12px;
    font-weight:700;
}

@media(max-width:1200px){
    .brilian-page .fitur-grid{ grid-template-columns:repeat(2,1fr); }
}

@media(max-width:768px){
    .brilian-page .fitur-section{ padding:70px 25px; }
    .brilian-page .fitur-title{ font-size:40px; }
    .brilian-page .fitur-grid{ grid-template-columns:1fr; }
}

.brilian-page .security-section{
    background:#f5f5f5;
    padding:90px 70px;
    font-family:'Inter', sans-serif;
    overflow:hidden;
}

.brilian-page .security-container{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:60px;
}

.brilian-page .security-left{ width:48%; }

.brilian-page .security-mini-title{
    color:#2563eb;
    font-size:12px;
    font-weight:700;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:18px;
}

.brilian-page .security-title{
    font-size:58px;
    line-height:1.05;
    font-weight:800;
    color:#0f172a;
    margin-bottom:24px;
}

.brilian-page .security-title span{ color:#2563eb; }

.brilian-page .security-desc{
    color:#6b7280;
    font-size:16px;
    line-height:1.9;
    max-width:620px;
    margin-bottom:40px;
}

.brilian-page .security-features{
    display:flex;
    flex-direction:column;
    gap:16px;
}

.brilian-page .security-feature{
    background:white;
    border:1px solid #e5e7eb;
    border-radius:20px;
    padding:22px;
    display:flex;
    align-items:flex-start;
    gap:18px;
    transition:.3s;
}

.brilian-page .security-feature:hover{
    transform:translateY(-4px);
    box-shadow:0 15px 30px rgba(0,0,0,0.05);
}

.brilian-page .security-icon{
    width:48px;
    height:48px;
    border-radius:14px;
    background:#f1f5f9;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#2563eb;
    font-size:18px;
    flex-shrink:0;
}

.brilian-page .security-feature-title{
    font-size:18px;
    font-weight:700;
    color:#0f172a;
    margin-bottom:8px;
}

.brilian-page .security-feature-desc{
    color:#6b7280;
    font-size:14px;
    line-height:1.8;
}

.brilian-page .security-right{ width:52%; }

.brilian-page .security-dashboard{
    background:white;
    border-radius:28px;
    padding:30px;
    border:1px solid #e5e7eb;
    box-shadow:0 20px 40px rgba(0,0,0,0.05);
}

.brilian-page .dashboard-title{
    font-size:18px;
    font-weight:700;
    color:#0f172a;
    margin-bottom:24px;
}

.brilian-page .dashboard-list{
    display:flex;
    flex-direction:column;
    gap:14px;
}

.brilian-page .dashboard-item{
    background:#f8fafc;
    border:1px solid #e5e7eb;
    border-radius:16px;
    padding:14px 18px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:15px;
}

.brilian-page .dashboard-left{
    display:flex;
    align-items:center;
    gap:12px;
}

.brilian-page .dashboard-check{
    width:28px;
    height:28px;
    border-radius:999px;
    background:#dcfce7;
    color:#16a34a;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;
}

.brilian-page .dashboard-text{
    font-size:14px;
    font-weight:600;
    color:#0f172a;
}

.brilian-page .dashboard-badge{
    padding:8px 14px;
    border-radius:999px;
    font-size:11px;
    font-weight:700;
}

.brilian-page .badge-green{ background:#dcfce7; color:#16a34a; }
.brilian-page .badge-blue{ background:#dbeafe; color:#2563eb; }
.brilian-page .badge-yellow{ background:#fef3c7; color:#d97706; }

.brilian-page .dashboard-progress{ margin-top:28px; }

.brilian-page .progress-label{
    display:flex;
    justify-content:space-between;
    margin-bottom:12px;
    font-size:13px;
    font-weight:600;
    color:#475569;
}

.brilian-page .progress-bar{
    width:100%;
    height:10px;
    background:#e2e8f0;
    border-radius:999px;
    overflow:hidden;
}

.brilian-page .progress-fill{
    width:68%;
    height:100%;
    border-radius:999px;
    background:linear-gradient(90deg, #1D6AF5 0%, #13C4D4 100%);
}

@media(max-width:991px){
    .brilian-page .security-section{ padding:70px 25px; }
    .brilian-page .security-container{ flex-direction:column; }
    .brilian-page .security-left,
    .brilian-page .security-right{ width:100%; }
    .brilian-page .security-title{ font-size:42px; }
}

@media (min-width: 1320px) {
    .brilian-page .brilian-hero,
    .brilian-page .why-brilian,
    .brilian-page .fitur-section,
    .brilian-page .security-section {
        padding-left: max(70px, calc((100% - 1200px) / 2 + 70px));
        padding-right: max(70px, calc((100% - 1200px) / 2 + 70px));
    }
}
`;

const sectors = [
    { icon: "fa-building-columns", label: "Pemerintahan" },
    { icon: "fa-money-bill-trend-up", label: "Perbankan & Keuangan" },
    { icon: "fa-heart-pulse", label: "Kesehatan" },
    { icon: "fa-industry", label: "Manufaktur" },
    { icon: "fa-bolt", label: "Energi & BUMN" },
    { icon: "fa-graduation-cap", label: "Pendidikan" },
];

const whyCards = [
    { icon: "fa-bolt", title: "Proses Setup Sangat Cepat", desc: "Dari registrasi hingga AI siap digunakan dalam hitungan jam, bukan bulan. Tidak perlu tim IT khusus." },
    { icon: "fa-flag", title: "Model AI Ada di Indonesia", desc: "Mematuhi regulasi data nasional. Seluruh proses AI dijalankan di cloud Indonesia — data tidak keluar." },
    { icon: "fa-desktop", title: "Instalasi On-Premise", desc: "Tersedia opsi deployment langsung di infrastruktur milik organisasi Anda untuk keamanan maksimal." },
    { icon: "fa-link", title: "Integrasi Mudah", desc: "Terhubung dengan sistem yang sudah berjalan — ERP, HRM, SharePoint, Google Workspace, dan lainnya." },
];

const fiturCards: Array<{
    number: string;
    icon?: string;
    title?: string;
    sub?: string;
    desc?: string;
    tags?: string[];
    ideas?: { title: string; desc: string; score: string }[];
}> = [
        { number: "01 / 08", icon: "fa-folder", title: "Manajemen KB", sub: "Knowledge Base", desc: "Sistem penyimpanan dokumen internal yang terstruktur, dapat diproses otomatis menjadi embeddings untuk pencarian cerdas.", tags: ["Embedding Otomatis", "Folder & Metadata", "Access Control"] },
        { number: "02 / 08", icon: "fa-comments", title: "Tanya Apa Aja", sub: "Chat with AI from KB", desc: "Antarmuka percakapan berbasis AI yang memahami konteks dokumen dan memberikan jawaban akurat dari knowledge base.", tags: ["Bahasa Manusia", "Respons Kontekstual", "Referensi Dokumen"] },
        { number: "03 / 08", icon: "fa-wand-magic-sparkles", title: "Buatin Laporan", sub: "Generate Report from KB", desc: "Beri perintah, AI menyusun laporan terstruktur dari ringkasan data internal yang ada di knowledge base secara otomatis.", tags: ["AI Generation", "Template Flexible", "Siap Dibagikan"] },
        { number: "04 / 08", icon: "fa-chart-simple", title: "Analisa Laporan", sub: "Analyze Reports in KB", desc: "AI menganalisis laporan internal dan menyajikan insight visual, pola, anomali, dan tren strategis terdeteksi otomatis.", tags: ["Analisis Otomatis", "Visualisasi", "Deteksi Pola"] },
        { number: "05 / 08", icon: "fa-lightbulb", title: "Pikirin Ide", sub: "Related Idea Generation", desc: "AI membantu brainstorming strategis dengan menggabungkan informasi internal dan sumber eksternal untuk menghasilkan ide relevan.", tags: ["Ide Kontekstual", "Internal & Eksternal", "Multi-Topik"] },
        {
            number: "06 / 08",
            ideas: [
                { title: "Ekspansi ke Segmen UKM Digital", desc: "Berdasarkan tren pasar Q3 + data internal.", score: "95% relevan" },
                { title: "Partnership Ekosistem Fintech Lokal", desc: "Berdasarkan riset kompetitor + SOP.", score: "88% relevan" },
                { title: "Bundling Produk untuk Pemerintah", desc: "Analisa regulasi + portofolio internal.", score: "82% relevan" },
            ],
        },
        { number: "07 / 08", icon: "fa-globe", title: "Terjemahin Aja", sub: "Translate from KB", desc: "Terjemahan multi-bahasa otomatis berbasis AI dengan pemahaman konteks profesional — dokumen bisnis, teknis, dan hukum.", tags: ["Multi-Bahasa", "Konteks Profesional", "Format Dokumen"] },
        { number: "08 / 08", icon: "fa-microphone-lines", title: "Rangkumin Meeting", sub: "Speech to Text", desc: "Rekam, transkripsi, dan ringkas rapat otomatis. Hasil langsung masuk ke knowledge base untuk referensi tindak lanjut.", tags: ["Transkripsi Otomatis", "Ringkasan AI", "Simpan ke KB"] },
        { number: "08 / 08", icon: "fa-magnifying-glass", title: "Riset Market", sub: "Related Market Research", desc: "Gabungkan data internal dengan sumber publik untuk insight kompetitif yang relevan dengan sektor industri dan lokasi Anda.", tags: ["Analisis Eksternal", "Insight Pasar", "Format Visual"] },
    ];

const securityFeatures = [
    { icon: "fa-flag", title: "Lokal di Cloud Indonesia", desc: "Semua proses AI berjalan di infrastruktur cloud dalam yurisdiksi nasional. Tidak ada transfer data keluar negeri." },
    { icon: "fa-lock", title: "Enkripsi End-to-End", desc: "Data dienkripsi saat transit maupun saat diam menggunakan standar enkripsi industri AES-256." },
    { icon: "fa-users", title: "Role Based Access Control", desc: "Kontrol akses granular per divisi, tim, dan pengguna — tidak semua bisa baca semua dokumen." },
    { icon: "fa-scroll", title: "Audit Trail Lengkap", desc: "Setiap akses, query, dan perubahan dicatat dalam log audit yang dapat diekspor untuk compliance review." },
];

const compliance: Array<{ text: string; badge: string; badgeClass: string }> = [
    { text: "Data Residency Indonesia", badge: "Aktif", badgeClass: "badge-green" },
    { text: "Model AI Lokal — Tidak Keluar Negeri", badge: "Lokal", badgeClass: "badge-blue" },
    { text: "Enkripsi AES-256 Aktif", badge: "Terenkripsi", badgeClass: "badge-yellow" },
    { text: "Role Based Access Control", badge: "Dikonfigurasi", badgeClass: "badge-green" },
    { text: "Audit Trail — 90 Hari Retensi", badge: "Recording", badgeClass: "badge-green" },
    { text: "On-Premise Available", badge: "Opsional", badgeClass: "badge-blue" },
];

export default function Page() {
    return (
        <>
            <div className="brilian-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <section className="brilian-hero">
                    <div className="brilian-container">
                        <div className="brilian-left">
                            <h1 className="brilian-title">
                                <span>Knowledge<br />Management</span><br />
                                yang Benar-benar<br />
                                Cerdas.
                            </h1>

                            <p className="brilian-desc">
                                brilian.ai membantu organisasi mengakses informasi internal secara cepat,
                                cerdas, dan aman — dengan pencarian kontekstual, otomatisasi dokumen,
                                dan AI yang berjalan sepenuhnya di Indonesia.
                            </p>

                            <div className="brilian-buttons">
                                <a href="#" className="btn-primary-custom">
                                    <i className="fa-solid fa-arrow-right"></i>
                                    Mulai Gratis
                                </a>
                                <a href="#" className="btn-secondary-custom">Lihat Fitur</a>
                            </div>

                            <div className="brilian-divider"></div>
                            <div className="brilian-label">Pilihan Untuk</div>

                            <div className="brilian-tags">
                                {["Pemerintahan", "Keuangan", "Enterprise", "BUMN"].map((t) => (
                                    <div key={t} className="brilian-tag">
                                        <i className="fa-solid fa-circle"></i>
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="brilian-right">
                            <img
                                src="/images/product/brilian-ai/ProductBrilian.png"
                                alt="Brilian Product"
                            />
                        </div>
                    </div>

                    <div className="brilian-sector">
                        <div className="brilian-sector-title">Sektor Yang Dilayani</div>
                        <div className="brilian-sector-items">
                            {sectors.map((s) => (
                                <div key={s.label} className="brilian-sector-item">
                                    <i className={`fa-solid ${s.icon}`}></i>
                                    {s.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="why-brilian">
                    <div className="why-brilian-container">
                        <div className="why-left">
                            <div className="why-mini-title">Mengapa Brilian.ai?</div>
                            <h2 className="why-title">
                                Lebih dari sekadar<br />
                                sistem pencarian.
                            </h2>
                            <p className="why-desc">
                                brilian.ai adalah platform kecerdasan pengetahuan yang dirancang
                                untuk menjawab kebutuhan operasional organisasi modern — cepat di-setup,
                                aman secara regulasi, dan AI-nya ada di Indonesia.
                            </p>
                        </div>

                        <div className="why-right">
                            {whyCards.map((c) => (
                                <div key={c.title} className="why-card">
                                    <div className="why-icon">
                                        <i className={`fa-solid ${c.icon}`}></i>
                                    </div>
                                    <div className="why-card-title">{c.title}</div>
                                    <div className="why-card-desc">{c.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="fitur-section">
                    <div className="fitur-heading">
                        <div className="fitur-mini-title">8 Fitur Utama</div>
                        <h2 className="fitur-title">
                            Semua yang Dibutuhkan<br />
                            untuk <span>Organisasi Cerdas</span>
                        </h2>
                        <p className="fitur-desc">
                            Dari manajemen dokumen hingga riset pasar otomatis —
                            semua terintegrasi dalam satu platform berbasis knowledge base Anda.
                        </p>
                    </div>

                    <div className="fitur-grid">
                        {fiturCards.map((c, i) => (
                            <div key={i} className="fitur-card">
                                <div className="fitur-number">{c.number}</div>

                                {c.ideas ? (
                                    <div className="idea-wrapper">
                                        {c.ideas.map((idea) => (
                                            <div key={idea.title} className="idea-box">
                                                <div className="idea-box-title">{idea.title}</div>
                                                <div className="idea-box-desc">{idea.desc}</div>
                                                <div className="idea-score">{idea.score}</div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        <div className="fitur-icon">
                                            <i className={`fa-solid ${c.icon}`}></i>
                                        </div>
                                        <div className="fitur-card-title">{c.title}</div>
                                        <div className="fitur-card-sub">{c.sub}</div>
                                        <div className="fitur-card-desc">{c.desc}</div>
                                        <div className="fitur-tags">
                                            {c.tags?.map((t) => (
                                                <div key={t} className="fitur-tag">{t}</div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="security-section">
                    <div className="security-container">
                        <div className="security-left">
                            <div className="security-mini-title">Keamanan &amp; Kepatuhan</div>
                            <h2 className="security-title">
                                Enterprise-Grade<br />
                                <span>Data Security</span>
                            </h2>
                            <p className="security-desc">
                                Dibangun dengan standar keamanan tinggi dan mematuhi regulasi
                                data Indonesia — untuk sektor pemerintahan dan keuangan sekalipun.
                            </p>

                            <div className="security-features">
                                {securityFeatures.map((f) => (
                                    <div key={f.title} className="security-feature">
                                        <div className="security-icon">
                                            <i className={`fa-solid ${f.icon}`}></i>
                                        </div>
                                        <div>
                                            <div className="security-feature-title">{f.title}</div>
                                            <div className="security-feature-desc">{f.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="security-right">
                            <div className="security-dashboard">
                                <div className="dashboard-title">Compliance Dashboard</div>

                                <div className="dashboard-list">
                                    {compliance.map((c) => (
                                        <div key={c.text} className="dashboard-item">
                                            <div className="dashboard-left">
                                                <div className="dashboard-check">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div className="dashboard-text">{c.text}</div>
                                            </div>
                                            <div className={`dashboard-badge ${c.badgeClass}`}>{c.badge}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="dashboard-progress">
                                    <div className="progress-label">
                                        <span>Knowledge Base Usage</span>
                                        <span>68% dari 100GB</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="progress-fill"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <CTAForm backgroundColor="#1D6AF5" brandColor="#1D6AF5" />
        </>
    );
}
