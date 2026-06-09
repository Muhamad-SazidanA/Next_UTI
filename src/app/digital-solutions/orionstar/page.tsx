import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.orionstar-page, .orionstar-page *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

/* HERO */
.orionstar-page .robot-hero{
    width:100%;
    background:#f7f7f8;
    padding:70px 60px 30px;
    font-family:'Inter', sans-serif;
}

.orionstar-page .robot-wrapper{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:60px;
}

.orionstar-page .robot-left{ max-width:560px; }

.orionstar-page .robot-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:6px 14px;
    border:1px solid #dbe3ff;
    border-radius:999px;
    font-size:12px;
    font-weight:600;
    color:#4f6cff;
    background:#fff;
    margin-bottom:22px;
}

.orionstar-page .robot-badge::before{
    content:'';
    width:8px;
    height:8px;
    border-radius:50%;
    background:#4f6cff;
}

.orionstar-page .robot-title{
    font-size:68px;
    line-height:1.05;
    font-weight:900;
    color:#101828;
    margin-bottom:22px;
    letter-spacing:-2px;
}

.orionstar-page .robot-title span{ color:#3366ff; }

.orionstar-page .robot-desc{
    font-size:17px;
    line-height:1.9;
    color:#667085;
    max-width:520px;
    margin-bottom:35px;
}

.orionstar-page .robot-buttons{
    display:flex;
    align-items:center;
    gap:16px;
    margin-bottom:55px;
}

.orionstar-page .btn-primary{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    padding:16px 28px;
    background:#3366ff;
    color:#fff;
    border-radius:10px;
    text-decoration:none;
    font-size:15px;
    font-weight:700;
    transition:0.3s;
}

.orionstar-page .btn-primary:hover{ background:#1f52f0; }

.orionstar-page .btn-secondary{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:16px 28px;
    background:#fff;
    border:1px solid #e4e7ec;
    color:#101828;
    border-radius:10px;
    text-decoration:none;
    font-size:15px;
    font-weight:700;
    transition:0.3s;
}

.orionstar-page .btn-secondary:hover{ background:#f3f4f6; }

.orionstar-page .robot-right{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
}

.orionstar-page .robot-image{ position:relative; }

.orionstar-page .robot-image img{
    width:520px;
    max-width:100%;
    object-fit:contain;
}

.orionstar-page .robot-floating{
    position:absolute;
    bottom:40px;
    left:50%;
    transform:translateX(-50%);
    display:flex;
    gap:16px;
}

.orionstar-page .robot-stat-box{
    background:#fff;
    border-radius:14px;
    padding:14px 20px;
    text-align:center;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
    min-width:120px;
}

.orionstar-page .robot-stat-box h4{
    font-size:22px;
    color:#3366ff;
    font-weight:800;
    margin-bottom:4px;
}

.orionstar-page .robot-stat-box p{
    font-size:11px;
    color:#98a2b3;
    font-weight:600;
    letter-spacing:1px;
}

.orionstar-page .bottom-info{
    margin-top:55px;
    padding-top:35px;
    border-top:1px solid #e5e7eb;
}

.orionstar-page .bottom-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:30px;
}

.orionstar-page .info-item h2{
    font-size:42px;
    font-weight:900;
    color:#101828;
    margin-bottom:5px;
}

.orionstar-page .info-item span{ color:#3366ff; }

.orionstar-page .info-item p{
    font-size:13px;
    color:#98a2b3;
    font-weight:700;
    letter-spacing:1px;
}

.orionstar-page .deploy-info{
    margin-top:28px;
    padding:14px 35px;
    background:#f1f3f5;
    border-radius:4px;
    display:flex;
    align-items:center;
    gap:40px;
    flex-wrap:wrap;
}

.orionstar-page .deploy-info span{
    font-size:10px;
    font-weight:700;
    letter-spacing:1px;
    color:#98a2b3;
    text-transform:uppercase;
}

@media(max-width:1100px){
    .orionstar-page .robot-wrapper{ flex-direction:column; text-align:center; }
    .orionstar-page .robot-left{ max-width:100%; }
    .orionstar-page .robot-buttons{ justify-content:center; }
    .orionstar-page .robot-title{ font-size:54px; }
    .orionstar-page .robot-image img{ width:430px; }
}

@media(max-width:768px){
    .orionstar-page .deploy-info{ gap:20px; padding:14px 20px; }
    .orionstar-page .robot-hero{ padding:50px 25px; }
    .orionstar-page .robot-title{ font-size:42px; }
    .orionstar-page .robot-buttons{ flex-direction:column; align-items:center; }
    .orionstar-page .bottom-grid{ grid-template-columns:repeat(2,1fr); gap:25px; }
    .orionstar-page .robot-floating{
        position:static;
        transform:none;
        margin-top:20px;
        justify-content:center;
        flex-wrap:wrap;
    }
    .orionstar-page .robot-image img{ width:340px; }
}

@media(max-width:500px){
    .orionstar-page .robot-title{ font-size:34px; }
    .orionstar-page .bottom-grid{ grid-template-columns:1fr; }
    .orionstar-page .robot-image img{ width:280px; }
}

/* OVERVIEW */
.orionstar-page .overview-section{
    background:#f7f7f8;
    padding:95px 60px 40px;
    font-family:'Inter', sans-serif;
}

.orionstar-page .overview-grid{
    display:grid;
    grid-template-columns:1.1fr 1fr;
    gap:70px;
    align-items:start;
}

.orionstar-page .overview-left{ padding-top:10px; }

.orionstar-page .overview-mini{
    display:flex;
    align-items:center;
    gap:10px;
    font-size:10px;
    letter-spacing:2px;
    font-weight:700;
    color:#4f6cff;
    margin-bottom:22px;
    text-transform:uppercase;
}

.orionstar-page .overview-mini span{
    width:14px;
    height:1.5px;
    background:#4f6cff;
    display:block;
}

.orionstar-page .overview-title{
    font-size:58px;
    line-height:1.03;
    font-weight:900;
    color:#0f172a;
    letter-spacing:-2px;
    margin-bottom:20px;
}

.orionstar-page .overview-desc{
    max-width:560px;
    font-size:16px;
    line-height:1.9;
    color:#667085;
    margin-bottom:80px;
}

.orionstar-page .overview-text-group{
    display:flex;
    flex-direction:column;
    gap:55px;
    margin-bottom:28px;
}

.orionstar-page .overview-text-group p{
    max-width:570px;
    font-size:15px;
    line-height:2;
    color:#667085;
}

.orionstar-page .overview-tags{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}

.orionstar-page .overview-tag{
    padding:9px 16px;
    border-radius:999px;
    background:#eef2ff;
    border:1px solid #dbe4ff;
    color:#3366ff;
    font-size:11px;
    font-weight:700;
    letter-spacing:.2px;
}

.orionstar-page .overview-right{
    width:96%;
    margin-left:-10px;
    display:grid;
    grid-template-columns:2fr 1fr;
    grid-template-rows:repeat(2,118px);
    border:1px solid #e5e7eb;
    overflow:hidden;
    margin-top:355px;
}

.orionstar-page .overview-card{
    background:#fafbfc;
    padding:20px 24px;
    border-right:1px solid #e5e7eb;
    border-bottom:1px solid #e5e7eb;
}

.orionstar-page .overview-card:nth-child(2),
.orionstar-page .overview-card:nth-child(4){ border-right:none; }

.orionstar-page .overview-card:nth-child(3),
.orionstar-page .overview-card:nth-child(4){ border-bottom:none; }

.orionstar-page .overview-card h3{
    font-size:30px;
    line-height:1;
    font-weight:900;
    margin-bottom:8px;
    color:#101828;
}

.orionstar-page .overview-card h3 span{
    font-size:28px;
    color:#3366ff;
}

.orionstar-page .overview-card h5{
    font-size:12px;
    font-weight:700;
    color:#475467;
    margin-bottom:3px;
}

.orionstar-page .overview-card p{
    font-size:10px;
    color:#98a2b3;
}

@media(max-width:768px){
    .orionstar-page .overview-section{ padding:70px 25px 30px; }
    .orionstar-page .overview-title{ font-size:42px; }
    .orionstar-page .overview-desc{ margin-bottom:50px; }
    .orionstar-page .overview-right{
        grid-template-columns:1fr;
        grid-template-rows:auto;
        margin-top:40px;
    }
    .orionstar-page .overview-card{ border-right:none !important; }
    .orionstar-page .overview-card:not(:last-child){ border-bottom:1px solid #e5e7eb !important; }
    .orionstar-page .overview-card h3{ font-size:44px; }
}

/* HARDWARE */
.orionstar-page .hardware-section{
    padding:90px 60px 40px;
    background:#f7f7f8;
    font-family:'Inter', sans-serif;
}

.orionstar-page .hardware-top{ margin-bottom:42px; }

.orionstar-page .hardware-mini{
    display:flex;
    align-items:center;
    gap:10px;
    font-size:10px;
    font-weight:700;
    letter-spacing:2px;
    color:#4f6cff;
    text-transform:uppercase;
    margin-bottom:20px;
}

.orionstar-page .hardware-mini span{
    width:14px;
    height:1.5px;
    background:#4f6cff;
    display:block;
}

.orionstar-page .hardware-title{
    font-size:64px;
    line-height:1.05;
    font-weight:900;
    letter-spacing:-2px;
    color:#0f172a;
    margin-bottom:20px;
}

.orionstar-page .hardware-desc{
    max-width:650px;
    font-size:16px;
    line-height:1.9;
    color:#667085;
}

.orionstar-page .hardware-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:14px;
}

.orionstar-page .hardware-card{
    background:#fafbfc;
    border:1px solid #e5e7eb;
    border-radius:8px;
    padding:16px 16px 12px;
    min-height:136px;
    transition:.3s;
}

.orionstar-page .hardware-card:hover{ transform:translateY(-3px); }

.orionstar-page .hardware-icon{
    width:26px;
    height:26px;
    border-radius:7px;
    background:#eef2ff;
    border:1px solid #dbe4ff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:12px;
}

.orionstar-page .hardware-icon i{
    font-size:11px;
    color:#3366ff;
}

.orionstar-page .hardware-card h4{
    font-size:12px;
    font-weight:800;
    color:#101828;
    margin-bottom:8px;
}

.orionstar-page .hardware-card p{
    font-size:9px;
    line-height:1.8;
    color:#98a2b3;
    margin-bottom:12px;
}

.orionstar-page .hardware-bottom{
    border-top:1px solid #eceff3;
    padding-top:10px;
    font-size:10px;
    font-weight:700;
    color:#3366ff;
}

@media(max-width:991px){
    .orionstar-page .hardware-grid{ grid-template-columns:1fr 1fr; }
}

@media(max-width:768px){
    .orionstar-page .hardware-section{ padding:70px 25px 30px; }
    .orionstar-page .hardware-title{ font-size:42px; }
    .orionstar-page .hardware-grid{ grid-template-columns:1fr; }
}

/* MODES */
.orionstar-page .modes-section{
    padding:95px 60px 70px;
    background:#f7f7f8;
    font-family:'Inter', sans-serif;
}

.orionstar-page .modes-top{
    text-align:center;
    margin-bottom:42px;
}

.orionstar-page .modes-mini{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    font-size:10px;
    font-weight:700;
    letter-spacing:2px;
    color:#4f6cff;
    text-transform:uppercase;
    margin-bottom:18px;
}

.orionstar-page .modes-mini span{
    width:14px;
    height:1.5px;
    background:#4f6cff;
    display:block;
}

.orionstar-page .modes-title{
    font-size:58px;
    line-height:1.05;
    font-weight:900;
    letter-spacing:-2px;
    color:#0f172a;
    margin-bottom:18px;
}

.orionstar-page .modes-desc{
    max-width:600px;
    margin:auto;
    font-size:16px;
    line-height:1.9;
    color:#667085;
}

.orionstar-page .modes-grid{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:10px;
}

.orionstar-page .mode-card{
    background:#fafbfc;
    border:1px solid #e5e7eb;
    border-radius:8px;
    padding:16px 14px;
    min-height:148px;
    transition:.3s;
}

.orionstar-page .mode-card:hover{ transform:translateY(-3px); }

.orionstar-page .mode-number{
    font-size:8px;
    font-weight:700;
    letter-spacing:1px;
    color:#98a2b3;
    margin-bottom:10px;
}

.orionstar-page .mode-icon{
    width:28px;
    height:28px;
    border-radius:8px;
    background:#eef2ff;
    border:1px solid #dbe4ff;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:12px;
}

.orionstar-page .mode-icon i{
    font-size:12px;
    color:#3366ff;
}

.orionstar-page .mode-card h4{
    font-size:12px;
    font-weight:800;
    color:#101828;
    margin-bottom:8px;
}

.orionstar-page .mode-card p{
    font-size:9px;
    line-height:1.8;
    color:#98a2b3;
    margin-bottom:14px;
}

.orionstar-page .mode-tag{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:5px 10px;
    border-radius:999px;
    font-size:8px;
    font-weight:700;
}

.orionstar-page .mode-tag.blue{ background:#eef2ff; color:#3366ff; }
.orionstar-page .mode-tag.purple{ background:#f3e8ff; color:#9333ea; }
.orionstar-page .mode-tag.orange{ background:#fff3e8; color:#ea580c; }
.orionstar-page .mode-tag.green{ background:#e8fff1; color:#059669; }
.orionstar-page .mode-tag.teal{ background:#e6fffb; color:#0f766e; }

@media(max-width:1200px){
    .orionstar-page .modes-grid{ grid-template-columns:repeat(3,1fr); }
}

@media(max-width:768px){
    .orionstar-page .modes-section{ padding:70px 25px 40px; }
    .orionstar-page .modes-title{ font-size:42px; }
    .orionstar-page .modes-grid{ grid-template-columns:1fr; }
}

/* NAVIGATION */
.orionstar-page .navigation-section{
    padding:95px 60px 70px;
    background:#f7f7f8;
    font-family:'Inter', sans-serif;
}

.orionstar-page .navigation-top{ margin-bottom:45px; }

.orionstar-page .navigation-mini{
    display:flex;
    align-items:center;
    gap:10px;
    font-size:10px;
    font-weight:700;
    letter-spacing:2px;
    color:#4f6cff;
    text-transform:uppercase;
    margin-bottom:18px;
}

.orionstar-page .navigation-mini span{
    width:14px;
    height:1.5px;
    background:#4f6cff;
    display:block;
}

.orionstar-page .navigation-title{
    font-size:62px;
    line-height:1.03;
    font-weight:900;
    letter-spacing:-2px;
    color:#0f172a;
    margin-bottom:18px;
}

.orionstar-page .navigation-desc{
    max-width:640px;
    font-size:16px;
    line-height:1.9;
    color:#667085;
}

.orionstar-page .navigation-wrapper{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:50px;
    align-items:center;
}

.orionstar-page .navigation-image-box{ width:100%; }

.orionstar-page .navigation-image-box img{
    width:100%;
    display:block;
    object-fit:contain;
}

.orionstar-page .navigation-right{
    display:flex;
    flex-direction:column;
    gap:12px;
}

.orionstar-page .navigation-card{
    background:#fafbfc;
    border:1px solid #e5e7eb;
    border-radius:8px;
    padding:16px 18px;
    display:flex;
    align-items:flex-start;
    gap:18px;
}

.orionstar-page .navigation-number{
    font-size:10px;
    font-weight:800;
    color:#3366ff;
    margin-top:2px;
      
}

.orionstar-page .navigation-content h4{
    font-size:12px;
    font-weight:800;
    color:#101828;
    margin-bottom:6px;
}

.orionstar-page .navigation-content p{
    font-size:9px;
    line-height:1.8;
    color:#98a2b3;
}

.orionstar-page .navigation-tag{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    padding:5px 10px;
    border-radius:999px;
    background:#eef2ff;
    font-size:8px;
    font-weight:700;
    color:#3366ff;
}

@media(max-width:991px){
    .orionstar-page .navigation-wrapper{ grid-template-columns:1fr; }
}

@media(max-width:768px){
    .orionstar-page .navigation-section{ padding:70px 25px 40px; }
    .orionstar-page .navigation-title{ font-size:42px; }
}

@media (min-width: 1320px) {
    .orionstar-page .robot-hero,
    .orionstar-page .overview-section,
    .orionstar-page .hardware-section,
    .orionstar-page .modes-section,
    .orionstar-page .navigation-section {
        padding-left: max(60px, calc((100% - 1200px) / 2 + 60px));
        padding-right: max(60px, calc((100% - 1200px) / 2 + 60px));
    }
}
`;

const heroStats = [
    { value: "40kg", label: "MAX LOAD" },
    { value: "14H", label: "BATTERY" },
    { value: "0.5s", label: "RESPONSE" },
];

const bottomInfo = [
    { num: "400", suffix: "+", label: "HIDANGAN / HARI" },
    { num: "3", suffix: "×", label: "EFISIENSI PERGERAKAN" },
    { num: "94", suffix: "%", label: "AKURASI SUARA" },
    { num: "10", suffix: "+", label: "SKENARIO" },
];

const overviewTags = ["New Interaction", "Dynamic Promotion", "3× Efficiency", "10+ Scenarios", "24 / 7 Operation", "Visual SLAM"];

const overviewCards = [
    { value: "400", suffix: "+", title: "Dishes per day", desc: "Dalam penerapan di restoran" },
    { value: "4", suffix: "", title: "Tables per single trip", desc: "Pengiriman bersamaan" },
    { value: "40", suffix: " kg", title: "Total load capacity", desc: "10 kg per baki × 4 tingkat" },
    { value: "14", suffix: " H", title: "Battery life", desc: "Waktu pengisian daya 3,5 jam" },
];

const hardware = [
    { icon: "fa-display", title: "Full HD Display", desc: "Layar sentuh 10,1 inci 1080P untuk interaksi dengan pelanggan, promosi, dan informasi status secara real-time.", bottom: "10.1\" · 1080P · Touch" },
    { icon: "fa-microchip", title: "Qualcomm 8-Core CPU", desc: "Prosesor Snapdragon berkinerja tinggi yang dipadukan dengan MCU 32-bit untuk pengoperasian AI dan navigasi yang lancar.", bottom: "8-Core · Snapdragon" },
    { icon: "fa-microphone", title: "6-Mic Ring Array", desc: "Jangkauan 360° dengan jangkauan efektif 5 meter. Dapat beroperasi di lingkungan dengan tingkat kebisingan latar belakang hingga 75 dB.", bottom: "94% Accuracy · 360° · 75dB" },
    { icon: "fa-battery-three-quarters", title: "LG Battery System", desc: "Sel LG berkualitas industri mampu beroperasi secara terus-menerus selama 10–14 jam dengan sekali pengisian daya.", bottom: "10–14H · 3.5H Charge" },
    { icon: "fa-satellite-dish", title: "LiDAR + RGBD Sensing", desc: "LiDAR 210° yang dipadukan dengan kamera kedalaman RGBD terintegrasi untuk mendeteksi rintangan dari segala arah.", bottom: "210° LiDAR · RGBD · 0.5s" },
    { icon: "fa-gear", title: "Multi-Link Suspension", desc: "Sistem suspensi tautan independen dengan penyeimbang otomatis menjaga stabilitas bak pada permukaan lantai yang tidak rata.", bottom: "Auto-Level · Bump Isolation" },
];

const modes = [
    { icon: "fa-utensils", title: "Delivery Mode", desc: "Mengantarkan hidangan ke maksimal 4 meja dalam sekali perjalanan. Mengurus lebih dari 400 hidangan per hari di restoran yang ramai.", tag: "Primary", tagCls: "blue" },
    { icon: "fa-image", title: "Guidance Mode", desc: "Mengantar tamu ke meja mereka dengan sambutan yang disesuaikan, sehingga mengurangi beban kerja petugas penerima tamu.", tag: "Hospitality", tagCls: "purple" },
    { icon: "fa-bullhorn", title: "Promotion Mode", desc: "Mendeteksi pelanggan yang mendekat, merekomendasikan hidangan, serta membagikan kupon dan sampel secara proaktif.", tag: "Marketing", tagCls: "orange" },
    { icon: "fa-car-side", title: "Cruise Mode", desc: "Rute patroli telah ditentukan sebelumnya, menampilkan iklan, dan membagikan camilan di titik-titik pemberhentian yang telah ditentukan.", tag: "Advertising", tagCls: "green" },
    { icon: "fa-broom", title: "Table-Bussing Mode", desc: "Mengumpulkan peralatan makan dan mendukung pengembalian hidangan dari beberapa meja secara bersamaan — sehingga mempercepat perputaran meja.", tag: "Efficiency", tagCls: "teal" },
];

const navItems: Array<{ title: string; desc: string; tag?: string }> = [
    { title: "210° LiDAR + 3D Omnidirectional Sensor", desc: "Pemindaian laser sudut lebar untuk pemantauan kedalaman seluruh ruangan — navigasi yang lebih aman di lingkungan restoran yang ramai." },
    { title: "RGBD Depth Camera", desc: "Mendeteksi rintangan kecil yang berada di permukaan rendah — tas, anak-anak, hewan peliharaan — yang mungkin terlewatkan oleh LiDAR saja." },
    { title: "LiDAR + Vision Combination SLAM", desc: "Metode navigasi Fusion memastikan deteksi yang akurat dan penghentian darurat.", tag: "0.5s obstacle response" },
    { title: "Auto-Level Suspension", desc: "Sistem suspensi multi-link pada kendaraan meredam guncangan dan menjaga stabilitas bak pada permukaan yang tidak rata atau basah." },
];

export default function Page() {
    return (
        <>
            <div className="orionstar-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <section className="robot-hero">
                    <div className="robot-wrapper">
                        <div className="robot-left">
                            <div className="robot-badge">24/7 AI DELIVERY ROBOT</div>

                            <h1 className="robot-title">
                                Meet <span>LuckiBot</span> —<br />
                                Your Reliable<br />
                                AI Assistant
                            </h1>

                            <p className="robot-desc">
                                Robot pengiriman AI kelas perusahaan yang dirancang untuk lingkungan komersial dengan lalu lintas tinggi.
                                Beroperasi di lebih dari 10 skenario dengan navigasi, interaksi suara, dan efisiensi pengiriman yang terdepan di industri.
                            </p>

                            <div className="robot-buttons">
                                <a href="#" className="btn-primary">Request a Demo →</a>
                                <a href="#" className="btn-secondary">Explore Features</a>
                            </div>
                        </div>

                        <div className="robot-right">
                            <div className="robot-image">
                                <img src="/images/product/orionstar/robbot.svg" alt="Robot" />
                            </div>

                            <div className="robot-floating">
                                {heroStats.map((s) => (
                                    <div key={s.label} className="robot-stat-box">
                                        <h4>{s.value}</h4>
                                        <p>{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bottom-info">
                        <div className="bottom-grid">
                            {bottomInfo.map((b) => (
                                <div key={b.label} className="info-item">
                                    <h2>{b.num}<span>{b.suffix}</span></h2>
                                    <p>{b.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="deploy-info">
                        <span>DITERAPKAN DI</span>
                        <span>COSTA COFFEE</span>
                        <span>RESTAURAN · MALAYSIA</span>
                        <span>TAIWAN</span>
                        <span>PRAGUE</span>
                        <span>LEBIH DARI 10 NEGARA</span>
                    </div>
                </section>

                <section className="overview-section">
                    <div className="overview-grid">
                        <div className="overview-left">
                            <div className="overview-mini">
                                <span></span>
                                PRODUCT OVERVIEW
                            </div>

                            <h2 className="overview-title">
                                Automate delivery.<br />
                                Elevate service.
                            </h2>

                            <p className="overview-desc">
                                LuckiBot menangani tugas pengiriman yang berulang sepanjang waktu,
                                sehingga tim Anda dapat fokus menciptakan pengalaman pelanggan
                                yang luar biasa — siang dan malam.
                            </p>

                            <div className="overview-text-group">
                                <p>
                                    Dilengkapi dengan susunan cincin 6 mikrofon dan kemampuan deteksi spasial 360°,
                                    LuckiBot menghadirkan perekaman suara yang akurat dan pengalaman interaksi yang imersif.
                                    Algoritme Visual SLAM terbaru meningkatkan efisiensi pergerakan hingga 3 kali lipat.
                                </p>
                                <p>
                                    Dapat digunakan di restoran, hotel, rumah sakit, kantor,
                                    dan 6 lingkungan lainnya — LuckiBot langsung siap digunakan
                                    dan dapat disesuaikan dengan kebutuhan operasional Anda.
                                </p>
                            </div>

                            <div className="overview-tags">
                                {overviewTags.map((t) => (
                                    <div key={t} className="overview-tag">{t}</div>
                                ))}
                            </div>
                        </div>

                        <div className="overview-right">
                            {overviewCards.map((c) => (
                                <div key={c.title} className="overview-card">
                                    <div>
                                        <h3>{c.value}{c.suffix && <span>{c.suffix}</span>}</h3>
                                        <h5>{c.title}</h5>
                                        <p>{c.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="hardware-section">
                    <div className="hardware-top">
                        <div className="hardware-mini">
                            <span></span>
                            HARDWARE FEATURES
                        </div>
                        <h2 className="hardware-title">
                            Precision-engineered<br />
                            for commercial demands
                        </h2>
                        <p className="hardware-desc">
                            Setiap komponen dipilih berdasarkan keandalan, kinerja,
                            dan daya tahan dalam lingkungan layanan dengan lalu lintas tinggi.
                        </p>
                    </div>

                    <div className="hardware-grid">
                        {hardware.map((h) => (
                            <div key={h.title} className="hardware-card">
                                <div className="hardware-icon">
                                    <i className={`fa-solid ${h.icon}`}></i>
                                </div>
                                <h4>{h.title}</h4>
                                <p>{h.desc}</p>
                                <div className="hardware-bottom">{h.bottom}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="modes-section">
                    <div className="modes-top">
                        <div className="modes-mini">
                            <span></span>
                            OPERATING MODES
                        </div>
                        <h2 className="modes-title">One robot. Five modes.</h2>
                        <p className="modes-desc">
                            Beralih dengan mulus antar mode melalui
                            dasbor manajemen — tanpa perlu mengubah perangkat keras.
                        </p>
                    </div>

                    <div className="modes-grid">
                        {modes.map((m, i) => (
                            <div key={m.title} className="mode-card">
                                <div className="mode-number">MODE {String(i + 1).padStart(2, "0")}</div>
                                <div className="mode-icon">
                                    <i className={`fa-solid ${m.icon}`}></i>
                                </div>
                                <h4>{m.title}</h4>
                                <p>{m.desc}</p>
                                <div className={`mode-tag ${m.tagCls}`}>{m.tag}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="navigation-section">
                    <div className="navigation-top">
                        <div className="navigation-mini">
                            <span></span>
                            PRECISION NAVIGATION
                        </div>
                        <h2 className="navigation-title">
                            See clearly.<br />
                            Navigate safely.
                        </h2>
                        <p className="navigation-desc">
                            Kombinasi LiDAR + Vision SLAM terdepan di industri —
                            LuckiBot membuat peta lingkungan sekitarnya secara real-time
                            dan bereaksi terhadap rintangan dalam waktu 0,5 detik.
                        </p>
                    </div>

                    <div className="navigation-wrapper">
                        <div className="navigation-image-box">
                            <img
                                src="/images/product/orionstar/robbotSmart.svg"
                                alt="Robot Smart Navigation"
                            />
                        </div>

                        <div className="navigation-right">
                            {navItems.map((it, i) => (
                                <div key={it.title} className="navigation-card">
                                    <div className="navigation-number">{String(i + 1).padStart(2, "0")}</div>
                                    <div className="navigation-content">
                                        <h4>{it.title}</h4>
                                        <p>{it.desc}</p>
                                        {it.tag && <div className="navigation-tag">{it.tag}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
            <CTAForm backgroundColor="#1849C6" brandColor="#1849C6" />
        </>
    );
}
