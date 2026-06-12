import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.cyclone-page, .cyclone-page *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.cyclone-page{
    font-family:'Inter', sans-serif;
    background:#fff;
    color:#111827;
}

/* HERO */
.cyclone-page .hero{
    display:flex;
    justify-content:space-between;
    gap:70px;
    padding:90px 60px;
    background:#fff;
    color:#111827;
    align-items:center;
}

.cyclone-page .hero-left{ max-width:620px; }

.cyclone-page .label{
    font-size:12px;
    color:#FF5722;
    margin-bottom:22px;
    letter-spacing:2px;
    font-weight:700;
}

.cyclone-page .hero h1{
    font-size:64px;
    line-height:1.08;
    font-weight:800;
    letter-spacing:-2px;
}

.cyclone-page .highlight{ color:#FF5722; }

.cyclone-page .desc{
    margin-top:22px;
    color:#4B5563;
    font-size:15px;
    line-height:1.8;
    max-width:520px;
}

.cyclone-page .hero-right{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:30px;
    width:520px;
}

.cyclone-page .stat{
    padding:35px 0;
}

.cyclone-page .stat h2{
    font-size:42px;
    font-weight:800;
    line-height:1;
}

.cyclone-page .stat span{ color:#FF5722; }

.cyclone-page .stat p{
    font-size:12px;
    color:#64748B;
    margin-top:10px;
    letter-spacing:1px;
    font-weight:600;
}

/* LIGHT */
.cyclone-page .section-light{
    background:#F5F7FB;
    padding:100px 60px;
}

.cyclone-page .section-light h2{
    font-size:52px;
    line-height:1.1;
    font-weight:800;
    letter-spacing:-2px;
    margin-bottom:22px;
    color:#111827;
}

.cyclone-page .sub{
    color:#64748B;
    max-width:650px;
    margin-bottom:50px;
    font-size:15px;
    line-height:1.8;
}

.cyclone-page .features{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:22px;
}

.cyclone-page .feature{
    display:flex;
    gap:18px;
    background:white;
    padding:28px;
    border-radius:16px;
    border:1px solid #E5E7EB;
}

.cyclone-page .icon{
    width:52px;
    height:52px;
    min-width:52px;
    background:#FF5722;
    border-radius:14px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-size:20px;
}

.cyclone-page .feature h4{
    margin-bottom:8px;
    font-size:17px;
    font-weight:700;
    color:#111827;
}

.cyclone-page .feature p{
    font-size:13px;
    color:#64748B;
    line-height:1.7;
}

/* DARK */
.cyclone-page .section-white{
    background:#fff;
    color:#111827;
    padding:100px 60px;
}

.cyclone-page .small-label{
    color:#FF5722;
    font-size:12px;
    margin-bottom:14px;
    letter-spacing:2px;
    font-weight:700;
}

.cyclone-page .section-white h2{
    font-size:52px;
    line-height:1.1;
    font-weight:800;
    letter-spacing:-2px;
    margin-bottom:20px;
}

.cyclone-page .desc-dark{
    color:#4B5563;
    max-width:650px;
    margin-bottom:50px;
    font-size:15px;
    line-height:1.8;
}

.cyclone-page .layers{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    border:1px solid #E5E7EB;
}

.cyclone-page .layer{
    padding:35px;
    border-right:1px solid #E5E7EB;
}

.cyclone-page .layer:last-child{ border-right:none; }

.cyclone-page .layer-label{
    font-size:11px;
    color:#FF5722;
    margin-bottom:14px;
    letter-spacing:1px;
    font-weight:700;
}

.cyclone-page .layer h3{
    margin-bottom:12px;
    font-size:24px;
    font-weight:700;
}

.cyclone-page .layer p{
    font-size:13px;
    color:#9CA3AF;
    margin-bottom:24px;
    line-height:1.8;
}

.cyclone-page .layer button{
    background:transparent;
    border:1px solid #FF5722;
    color:#FF5722;
    padding:9px 16px;
    font-size:11px;
    cursor:pointer;
    border-radius:8px;
    font-weight:700;
    letter-spacing:1px;
    transition:.3s;
}

.cyclone-page .layer button:hover{
    background:#FF5722;
    color:white;
}

/* USE CASE */
.cyclone-page .section-usecase{
    background:#F8FAFC;
    padding:100px 60px;
}

.cyclone-page .section-usecase h2{
    font-size:52px;
    line-height:1.1;
    font-weight:800;
    letter-spacing:-2px;
    margin:10px 0 20px;
    max-width:650px;
}

.cyclone-page .section-usecase .desc{
    color:#64748B;
    margin-bottom:40px;
    max-width:650px;
    font-size:15px;
    line-height:1.8;
}

.cyclone-page .table{
    background:white;
    border-radius:18px;
    overflow:hidden;
    border:1px solid #E5E7EB;
    width:100%;
}

.cyclone-page .table-header{
    display:grid;
    grid-template-columns:minmax(0,2.5fr) minmax(0,1.5fr) minmax(0,1fr);
    padding:14px 32px;
    border-bottom:1px solid #E5E7EB;
    background:#FAFAFA;
    align-items:center;
}

.cyclone-page .table-header span{
    font-size:11px;
    color:#94A3B8;
    font-weight:700;
    letter-spacing:1.2px;
}

.cyclone-page .row{
    display:grid;
    grid-template-columns:minmax(0,2.5fr) minmax(0,1.5fr) minmax(0,1fr);
    padding:18px 32px;
    border-bottom:1px solid #F1F5F9;
    align-items:center;
    transition:background .15s;
}

.cyclone-page .row:last-child{ border-bottom:none; }

.cyclone-page .row:hover{ background:#FFF8F6; }

.cyclone-page .row .row-name{
    font-size:14px;
    font-weight:500;
    color:#111827;
}

.cyclone-page .row .row-industry{
    font-size:13px;
    color:#64748B;
}

.cyclone-page .dot-group{
    display:flex;
    gap:6px;
    align-items:center;
}

.cyclone-page .dot{
    width:9px;
    height:9px;
    border-radius:50%;
    display:inline-block;
    flex-shrink:0;
}

.cyclone-page .dot-filled{
    background:#FF5722;
}

.cyclone-page .dot-empty{
    border:1.5px solid #FF5722;
    opacity:0.35;
}

/* ORANGE */
.cyclone-page .section-orange{
    background:#FF5722;
    color:white;
    padding:100px 60px;
}

.cyclone-page .section-orange h2{
    font-size:52px;
    line-height:1.1;
    font-weight:800;
    letter-spacing:-2px;
    margin-bottom:50px;
}

.cyclone-page .cards{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:22px;
}

.cyclone-page .card{
    background:white;
    color:#111;
    padding:30px;
    border-radius:18px;
}

.cyclone-page .card h3{
    color:#FF5722;
    font-size:34px;
    font-weight:800;
}

.cyclone-page .title{
    font-weight:700;
    margin:14px 0;
    font-size:17px;
    line-height:1.5;
}

.cyclone-page .desc-small{
    font-size:13px;
    color:#64748B;
    line-height:1.8;
}


@media(max-width:1100px){
    .cyclone-page .hero{ flex-direction:column; align-items:flex-start; }
    .cyclone-page .hero-right{ width:100%; max-width:100%; }
    .cyclone-page .features{ grid-template-columns:1fr; }
    .cyclone-page .layers{ grid-template-columns:1fr; }
    .cyclone-page .layer{ border-right:none; border-bottom:1px solid #E5E7EB; }
    .cyclone-page .cards{ grid-template-columns:1fr 1fr; }
}

@media(max-width:768px){
    .cyclone-page .hero,
    .cyclone-page .section-light,
    .cyclone-page .section-white,
    .cyclone-page .section-usecase,
    .cyclone-page .section-orange{ padding:70px 24px; }

    .cyclone-page .hero h1,
    .cyclone-page .section-light h2,
    .cyclone-page .section-white h2,
    .cyclone-page .section-usecase h2,
    .cyclone-page .section-orange h2{ font-size:40px; }

    .cyclone-page .hero-right,
    .cyclone-page .cards{ grid-template-columns:1fr; }

    .cyclone-page .table-header,
    .cyclone-page .row{
        grid-template-columns:1fr;
        gap:8px;
        padding:16px 20px;
    }
}

@media (min-width: 1320px) {
    .cyclone-page .hero,
    .cyclone-page .section-light,
    .cyclone-page .section-white,
    .cyclone-page .section-usecase,
    .cyclone-page .section-orange {
        padding-left: max(60px, calc((100% - 1200px) / 2 + 60px));
        padding-right: max(60px, calc((100% - 1200px) / 2 + 60px));
    }
}
`;

const stats = [
    { value: "1000", suffix: "+", label: "ENTERPRISE CLIENTS" },
    { value: "24", suffix: "/7", label: "ZERO DOWNTIME" },
    { value: "65", suffix: "%", label: "COST REDUCTION" },
    { value: "190", suffix: "M", label: "SERIES C FUNDING" },
];

const features = [
    { icon: "fa-plug", title: "Non-Intrusive Deployment", desc: "Tidak memerlukan perubahan pada sistem atau API yang ada." },
    { icon: "fa-brain", title: "Intelligent Process Learning", desc: "Bot mempelajari pola kerja dan beradaptasi otomatis." },
    { icon: "fa-shield-halved", title: "Enterprise-Grade Security", desc: "Audit trail lengkap dan enkripsi end-to-end." },
    { icon: "fa-layer-group", title: "Scalable Architecture", desc: "Dari pilot hingga ribuan robot terkoordinasi." },
];

const layers = [
    { label: "LAYER 01 · EXECUTE", title: "Cyclone Robot", desc: "Digital employee yang menjalankan tugas 7×24 jam. Attended & unattended mode untuk berbagai skenario operasional.", btn: "EXECUTOR" },
    { label: "LAYER 02 · DESIGN", title: "Cyclone Designer", desc: "Studio visual low-code untuk membangun dan mengelola workflow automasi tanpa keahlian pemrograman mendalam.", btn: "DESIGNER" },
    { label: "LAYER 03 · CONTROL", title: "Cyclone Controller", desc: "Dashboard terpusat untuk scheduling, monitoring real-time, dan orkestrasi kolaborasi robot-robot maupun robot-manusia.", btn: "CONTROLLER" },
];

const usecases = [
    { proses: "Data Consolidation",        industri: "All Industries",          score: 3 },
    { proses: "Invoice Processing (IDP)",  industri: "Finance & Banking",        score: 3 },
    { proses: "Account Reconciliation",    industri: "Banking & FSI",            score: 3 },
    { proses: "Order Entry Automation",    industri: "Retail & Manufacturing",   score: 2 },
    { proses: "Compliance Reporting",      industri: "All Industries",           score: 2 },
    { proses: "Customer Onboarding",       industri: "Telco & BFSI",             score: 2 },
    { proses: "Shipment Tracking",         industri: "Logistics",                score: 1 },
    { proses: "Fraud Detection Triggers",  industri: "Banking",                  score: 3 },
];

const valueCards = [
    { value: "65%",    title: "Pengurangan Biaya Operasional", desc: "Otomasi proses manual menurunkan biaya operasional signifikan." },
    { value: "100%",   title: "Akurasi Zero Human Error",      desc: "Robot tidak pernah lelah, tidak pernah salah." },
    { value: "7×24",   title: "Jam Operasi Tanpa Henti",       desc: "Berjalan terus tanpa downtime." },
    { value: "US$190M",title: "Series C Funding",              desc: "Didukung investasi besar untuk pengembangan." },
];

function DotGroup({ score }) {
    return (
        <span className="dot-group">
            {[1, 2, 3].map((n) => (
                <span
                    key={n}
                    className={`dot ${n <= score ? "dot-filled" : "dot-empty"}`}
                />
            ))}
        </span>
    );
}

export default function Page() {
    return (
        <>
            <div className="cyclone-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                {/* HERO */}
                <section className="hero">
                    <div className="hero-left">
                        <p className="label">ENTERPRISE HYPERAUTOMATION PLATFORM</p>
                        <h1>
                            Automate <br />
                            the <span className="highlight">Repetitive.</span><br />
                            Amplify the <br />
                            Strategic.
                        </h1>
                        <p className="desc">
                            Cyclone Robotics menghadirkan platform RPA kelas enterprise
                            yang mengotomasi proses bisnis kompleks secara akurat, terukur,
                            dan beroperasi tanpa henti 24 jam.
                        </p>
                    </div>

                    <div className="hero-right">
                        {stats.map((s) => (
                            <div key={s.label} className="stat">
                                <h2>{s.value}<span>{s.suffix}</span></h2>
                                <p>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FEATURES */}
                <section className="section-light">
                    <h2>Teknologi di Balik <br /> Efisiensi Bisnis Anda</h2>
                    <p className="sub">
                        Platform Cyclone dirancang untuk masuk ke lingkungan enterprise
                        yang kompleks tanpa mengganggu sistem yang sudah berjalan.
                    </p>

                    <div className="features">
                        {features.map((f) => (
                            <div key={f.title} className="feature">
                                <div className="icon"><i className={`fa-solid ${f.icon}`}></i></div>
                                <div>
                                    <h4>{f.title}</h4>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ARCHITECTURE */}
                <section className="section-white">
                    <p className="small-label">02 · PLATFORM ARCHITECTURE</p>
                    <h2>
                        Tiga Layer Platform <br />
                        yang Terintegrasi Penuh
                    </h2>
                    <p className="desc-dark">
                        Dari desain workflow hingga eksekusi dan monitoring semua dalam
                        satu ekosistem terpadu.
                    </p>

                    <div className="layers">
                        {layers.map((l) => (
                            <div key={l.title} className="layer">
                                <p className="layer-label">{l.label}</p>
                                <h3>{l.title}</h3>
                                <p>{l.desc}</p>
                                <button>{l.btn}</button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* USE CASES */}
                <section className="section-usecase">
                    <p className="small-label">03 · USE CASES</p>
                    <h2>Proses Prioritas <br /> untuk Diotomasi</h2>
                    <p className="desc">
                        Berdasarkan tingkat ROI dan kemudahan implementasi di lingkungan enterprise Indonesia.
                    </p>

                    <div className="table">
                        <div className="table-header">
                            <span>PROSES</span>
                            <span>INDUSTRI</span>
                            <span>IMPACT</span>
                        </div>

                        {usecases.map((u) => (
                            <div key={u.proses} className="row">
                                <span className="row-name">{u.proses}</span>
                                <span className="row-industry">{u.industri}</span>
                                <DotGroup score={u.score} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* VALUE */}
                <section className="section-orange">
                    <h2>Nilai Bisnis yang <br /> Terukur & Nyata</h2>

                    <div className="cards">
                        {valueCards.map((c) => (
                            <div key={c.title} className="card">
                                <h3>{c.value}</h3>
                                <p className="title">{c.title}</p>
                                <p className="desc-small">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
            <CTAForm backgroundColor="#FF5722" brandColor="#FF5722" />
        </>
    );
}