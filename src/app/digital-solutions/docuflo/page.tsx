import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.docuflo-page, .docuflo-page *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.docuflo-page{
    font-family:'Inter', sans-serif;
}

/* HERO */
.docuflo-page .ecm-section{
    width:100%;
    background:#050505;
    padding:100px 70px;
    display:flex;
    align-items:center;
    justify-content:center;
}

.docuflo-page .ecm-wrapper{
    width:100%;
    max-width:1400px;
    display:grid;
    grid-template-columns:1.1fr 1fr;
    gap:40px;
    align-items:center;
}

.docuflo-page .ecm-left .mini-title{
    display:flex;
    align-items:center;
    gap:10px;
    color:#D92B45;
    font-size:11px;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:25px;
}

.docuflo-page .ecm-left .mini-title::before{
    content:'';
    width:24px;
    height:2px;
    background:#D92B45;
}

.docuflo-page .ecm-left h1{
    color:white;
    font-size:72px;
    line-height:1.05;
    font-weight:700;
    margin-bottom:28px;
    max-width:620px;
}

.docuflo-page .ecm-left h1 span{ color:#D92B45; }

.docuflo-page .ecm-left p{
    color:#8B8B8B;
    font-size:17px;
    line-height:1.8;
    max-width:560px;
    margin-bottom:40px;
}

.docuflo-page .ecm-buttons{
    display:flex;
    gap:18px;
}

.docuflo-page .ecm-buttons a{
    text-decoration:none;
    padding:14px 28px;
    border-radius:3px;
    font-size:14px;
    font-weight:500;
    transition:.3s;
}

.docuflo-page .btn-red{
    background:#D92B45;
    color:white;
}

.docuflo-page .btn-red:hover{ background:#be2139; }

.docuflo-page .btn-dark{
    background:#111111;
    border:1px solid #1E1E1E;
    color:white;
}

.docuflo-page .btn-dark:hover{ background:#191919; }

.docuflo-page .ecm-right{
    position:relative;
    display:flex;
    justify-content:flex-end;
}

.docuflo-page .dashboard-card{
    width:100%;
    max-width:620px;
    background:
        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px),
        #0A0A0A;
    background-size:120px 120px;
    border:1px solid rgba(255,255,255,0.04);
    overflow:hidden;
    position:relative;
}

.docuflo-page .stats-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
}

.docuflo-page .stat-box{
    padding:35px 34px;
    border-right:1px solid rgba(255,255,255,0.04);
    border-bottom:1px solid rgba(255,255,255,0.04);
    min-height:150px;
}

.docuflo-page .stat-box:nth-child(2),
.docuflo-page .stat-box:nth-child(4){
    border-right:none;
}

.docuflo-page .stat-box h2{
    color:white;
    font-size:42px;
    font-weight:700;
    margin-bottom:10px;
}

.docuflo-page .stat-box h2 span{ color:#E23B55; }

.docuflo-page .stat-box p{
    color:#666;
    font-size:13px;
    line-height:1.6;
    max-width:170px;
}

.docuflo-page .bottom-bar{
    background:rgba(122, 8, 24, 0.35);
    border-top:1px solid rgba(255,255,255,0.03);
    padding:18px 28px;
    display:flex;
    align-items:center;
    justify-content:space-between;
}

.docuflo-page .bottom-left h3{
    color:white;
    font-size:28px;
    margin-bottom:4px;
}

.docuflo-page .bottom-left p{
    color:#666;
    font-size:12px;
}

.docuflo-page .bottom-right{
    color:#D92B45;
    font-size:11px;
    letter-spacing:1.5px;
    text-transform:uppercase;
}

@media(max-width:1100px){
    .docuflo-page .ecm-wrapper{ grid-template-columns:1fr; }
    .docuflo-page .ecm-left h1{ font-size:58px; }
    .docuflo-page .ecm-right{ justify-content:flex-start; }
}

@media(max-width:768px){
    .docuflo-page .ecm-section{ padding:60px 24px; }
    .docuflo-page .ecm-left h1{ font-size:44px; }
    .docuflo-page .stats-grid{ grid-template-columns:1fr; }
    .docuflo-page .stat-box{ border-right:none !important; }
    .docuflo-page .bottom-bar{ flex-direction:column; align-items:flex-start; gap:10px; }
    .docuflo-page .ecm-buttons{ flex-wrap:wrap; }
}

/* CHALLENGE */
.docuflo-page .challenge-section{
    background:white;
    padding:90px 70px;
}

.docuflo-page .challenge-header{ margin-bottom:60px; }

.docuflo-page .challenge-mini-title{
    display:flex;
    align-items:center;
    gap:10px;
    color:#D92B45;
    font-size:11px;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:24px;
}

.docuflo-page .challenge-mini-title::before{
    content:'';
    width:24px;
    height:2px;
    background:#D92B45;
}

.docuflo-page .challenge-header h2{
    font-size:64px;
    line-height:1.05;
    color:#111111;
    font-weight:800;
    margin-bottom:26px;
    max-width:720px;
}

.docuflo-page .challenge-header p{
    max-width:620px;
    color:#666666;
    font-size:18px;
    line-height:1.8;
}

.docuflo-page .challenge-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:60px;
}

.docuflo-page .challenge-card{
    display:flex;
    flex-direction:column;
}

.docuflo-page .card-title{
    font-size:11px;
    letter-spacing:3px;
    color:#8B8B8B;
    font-weight:600;
    text-transform:uppercase;
    margin-bottom:0;
    padding-bottom:26px;
    border-bottom:1px solid #E3E3E3;
}

.docuflo-page .challenge-item{
    display:flex;
    align-items:flex-start;
    gap:14px;
    padding:18px 0;
    border-top:1px solid #E5E5E5;
}

.docuflo-page .challenge-item p{
    font-size:14px;
    color:#444444;
    line-height:1.7;
    margin:0;
}

.docuflo-page .dot{
    width:6px;
    height:6px;
    border-radius:50%;
    margin-top:9px;
    flex-shrink:0;
}

.docuflo-page .dot.gray{ background:#CFCFCF; }
.docuflo-page .dot.red{ background:#D92B45; }

@media(max-width:992px){
    .docuflo-page .challenge-grid{ grid-template-columns:1fr; }
    .docuflo-page .challenge-header h2{ font-size:48px; }
}

@media(max-width:768px){
    .docuflo-page .challenge-section{ padding:70px 24px; }
    .docuflo-page .challenge-header h2{ font-size:38px; }
    .docuflo-page .challenge-header p{ font-size:16px; }
}

/* FEATURE */
.docuflo-page .feature-ecm-section{
    background:#050505;
    padding:90px 70px;
}

.docuflo-page .feature-top{ margin-bottom:50px; }

.docuflo-page .feature-mini-title{
    display:flex;
    align-items:center;
    gap:10px;
    color:#D92B45;
    font-size:11px;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:24px;
}

.docuflo-page .feature-mini-title::before{
    content:'';
    width:24px;
    height:2px;
    background:#D92B45;
}

.docuflo-page .feature-top h2{
    color:#fff;
    font-size:64px;
    line-height:1.05;
    font-weight:800;
    max-width:760px;
    margin-bottom:26px;
}

.docuflo-page .feature-top p{
    color:#8B8B8B;
    font-size:17px;
    line-height:1.8;
    max-width:720px;
}

.docuflo-page .feature-stats{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    border:1px solid rgba(255,255,255,0.05);
    margin-bottom:26px;
}

.docuflo-page .feature-stat-box{
    padding:28px 24px;
    border-right:1px solid rgba(255,255,255,0.05);
    background:#0A0A0A;
}

.docuflo-page .feature-stat-box:last-child{ border-right:none; }

.docuflo-page .feature-stat-box h3{
    color:#fff;
    font-size:34px;
    font-weight:800;
    margin-bottom:10px;
}

.docuflo-page .feature-stat-box h3 span{ color:#D92B45; }

.docuflo-page .feature-stat-box p{
    color:#666;
    font-size:12px;
    line-height:1.6;
}

.docuflo-page .feature-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    border:1px solid rgba(255,255,255,0.05);
    border-bottom:none;
    border-right:none;
}

.docuflo-page .feature-card{
    background:#0B0B0B;
    padding:34px 28px;
    border-right:1px solid rgba(255,255,255,0.05);
    border-bottom:1px solid rgba(255,255,255,0.05);
    min-height:210px;
}

.docuflo-page .feature-icon{
    width:34px;
    height:34px;
    background:rgba(217,43,69,0.15);
    border:1px solid rgba(217,43,69,0.25);
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:22px;
}

.docuflo-page .feature-icon i{
    color:#D92B45;
    font-size:15px;
}

.docuflo-page .feature-card h4{
    color:#fff;
    font-size:18px;
    margin-bottom:14px;
    font-weight:700;
}

.docuflo-page .feature-card p{
    color:#7A7A7A;
    font-size:14px;
    line-height:1.8;
}

@media(max-width:1100px){
    .docuflo-page .feature-stats{ grid-template-columns:repeat(2,1fr); }
    .docuflo-page .feature-grid{ grid-template-columns:1fr 1fr; }
}

@media(max-width:768px){
    .docuflo-page .feature-ecm-section{ padding:70px 24px; }
    .docuflo-page .feature-top h2{ font-size:40px; }
    .docuflo-page .feature-stats{ grid-template-columns:1fr; }
    .docuflo-page .feature-grid{ grid-template-columns:1fr; }
}

/* LAYERS */
.docuflo-page .layers-section{
    background:white;
    padding:90px 70px;
}

.docuflo-page .layers-wrapper{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:50px;
    align-items:start;
}

.docuflo-page .layers-left .layers-mini-title{
    display:flex;
    align-items:center;
    gap:10px;
    color:#C61E39;
    font-size:12px;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:20px;
    font-weight:600;
}

.docuflo-page .layers-left .layers-mini-title::before{
    content:'';
    width:24px;
    height:2px;
    background:#C61E39;
}

.docuflo-page .layers-left h2{
    font-size:48px;
    line-height:1.1;
    color:#111;
    font-weight:800;
    margin-bottom:20px;
    letter-spacing:-1px;
}

.docuflo-page .layers-left > p{
    color:#666;
    font-size:15px;
    line-height:1.7;
    margin-bottom:40px;
    max-width:480px;
}

.docuflo-page .layer-stack{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:6px;
}

.docuflo-page .layer-box{
    padding:14px 22px;
    border-radius:4px;
    text-align:left;
}

.docuflo-page .layer-box h4{
    font-size:13px;
    font-weight:700;
    margin-bottom:4px;
}

.docuflo-page .layer-box p{
    font-size:11px;
    line-height:1.5;
    margin:0;
}

.docuflo-page .layer-1{ width:70%; background:#E8E3DB; color:#111; }
.docuflo-page .layer-1 p{ color:#666; }

.docuflo-page .layer-2{ width:78%; background:#DDD7CD; color:#111; }
.docuflo-page .layer-2 p{ color:#666; }

.docuflo-page .layer-3{ width:86%; background:#C8A24B; color:#fff; }
.docuflo-page .layer-3 p{ color:rgba(255,255,255,0.8); }

.docuflo-page .layer-4{ width:94%; background:#D90429; color:#fff; }
.docuflo-page .layer-4 p{ color:rgba(255,255,255,0.8); }

.docuflo-page .layer-5{ width:100%; background:#111111; color:#fff; }
.docuflo-page .layer-5 p{ color:rgba(255,255,255,0.7); }

.docuflo-page .layers-right{
    display:flex;
    flex-direction:column;
    gap:14px;
    position:relative;
    top:135px;
}

.docuflo-page .info-card{
    background:#FFFFFF;
    border:1px solid #E8E5E0;
    border-radius:10px;
    padding:20px 24px;
    display:flex;
    align-items:flex-start;
    gap:16px;
    transition:all 0.2s ease;
}

.docuflo-page .info-card:hover{
    box-shadow:0 8px 20px rgba(0,0,0,0.05);
    transform:translateY(-2px);
}

.docuflo-page .info-icon{
    width:44px;
    height:44px;
    background:#F5F0EA;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-shrink:0;
}

.docuflo-page .info-icon i{
    color:#C61E39;
    font-size:18px;
}

.docuflo-page .info-content h4{
    font-size:16px;
    font-weight:700;
    color:#111;
    margin-bottom:6px;
}

.docuflo-page .info-content p{
    font-size:13px;
    line-height:1.6;
    color:#777;
    margin:0;
}

@media(max-width:1100px){
    .docuflo-page .layers-wrapper{ grid-template-columns:1fr; gap:40px; }
    .docuflo-page .layers-left h2{ font-size:40px; }
    .docuflo-page .layers-right{ position:static; top:auto; }
}

@media(max-width:768px){
    .docuflo-page .layers-section{ padding:60px 24px; }
    .docuflo-page .layers-left h2{ font-size:32px; }
    .docuflo-page .layer-1,
    .docuflo-page .layer-2,
    .docuflo-page .layer-3,
    .docuflo-page .layer-4,
    .docuflo-page .layer-5{ width:100%; }
}

/* SECURITY */
.docuflo-page .security-section{
    background:#050505;
    padding:90px 70px;
}

.docuflo-page .security-top{ margin-bottom:45px; }

.docuflo-page .security-mini-title{
    display:flex;
    align-items:center;
    gap:10px;
    color:#D92B45;
    font-size:10px;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:18px;
}

.docuflo-page .security-mini-title::before{
    content:'';
    width:22px;
    height:1.5px;
    background:#D92B45;
}

.docuflo-page .security-top h2{
    color:#fff;
    font-size:58px;
    line-height:0.98;
    font-weight:800;
    letter-spacing:-2px;
    margin-bottom:22px;
    max-width:500px;
}

.docuflo-page .security-top p{
    color:#7A7A7A;
    font-size:14px;
    line-height:1.9;
    max-width:480px;
}

.docuflo-page .security-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    border:1px solid rgba(255,255,255,0.04);
    border-right:none;
    border-bottom:none;
    margin-bottom:28px;
}

.docuflo-page .security-card{
    background:#0A0A0A;
    padding:34px 26px;
    min-height:185px;
    border-right:1px solid rgba(255,255,255,0.04);
    border-bottom:1px solid rgba(255,255,255,0.04);
}

.docuflo-page .security-icon{
    width:26px;
    height:26px;
    border-radius:6px;
    background:rgba(217,43,69,0.12);
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:22px;
}

.docuflo-page .security-icon i{
    color:#D92B45;
    font-size:11px;
}

.docuflo-page .security-card h4{
    color:#fff;
    font-size:13px;
    font-weight:700;
    margin-bottom:12px;
}

.docuflo-page .security-card p{
    color:#6F6F6F;
    font-size:11px;
    line-height:1.8;
}

.docuflo-page .security-tags{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}

.docuflo-page .security-tags span{
    border:1px solid rgba(255,255,255,0.08);
    background:#0B0B0B;
    color:#7A7A7A;
    padding:8px 14px;
    font-size:10px;
    border-radius:2px;
}

@media(max-width:992px){
    .docuflo-page .security-grid{ grid-template-columns:1fr 1fr; }
    .docuflo-page .security-top h2{ font-size:44px; }
}

@media(max-width:768px){
    .docuflo-page .security-section{ padding:70px 24px; }
    .docuflo-page .security-grid{ grid-template-columns:1fr; }
    .docuflo-page .security-top h2{ font-size:38px; }
}

/* PIPELINE */
.docuflo-page .pipeline-contact-section{ background:white; }

.docuflo-page .pipeline-top{ padding:90px 70px 70px; }

.docuflo-page .pipeline-mini-title{
    display:flex;
    align-items:center;
    gap:10px;
    color:#D92B45;
    font-size:10px;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:18px;
}

.docuflo-page .pipeline-mini-title::before{
    content:'';
    width:22px;
    height:1.5px;
    background:#D92B45;
}

.docuflo-page .pipeline-top h2{
    font-size:56px;
    line-height:1;
    font-weight:800;
    letter-spacing:-2px;
    color:#111;
    margin-bottom:20px;
}

.docuflo-page .pipeline-top p{
    color:#777;
    font-size:14px;
    line-height:1.8;
    max-width:420px;
    margin-bottom:60px;
}

.docuflo-page .pipeline-line{
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    gap:20px;
}

.docuflo-page .pipeline-line::before{
    content:'';
    position:absolute;
    top:14px;
    left:0;
    width:100%;
    height:1.5px;
    background:#D92B45;
    z-index:1;
}

.docuflo-page .pipeline-step{
    position:relative;
    width:20%;
    z-index:2;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
}

.docuflo-page .pipeline-circle{
    width:28px;
    height:28px;
    border-radius:50%;
    border:1.5px solid #D92B45;
    background:white;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#D92B45;
    font-size:11px;
    font-weight:700;
    margin-bottom:22px;
    position:relative;
    z-index:2;
}

.docuflo-page .pipeline-circle.filled{
    background:#D92B45;
    color:white;
    border-color:#D92B45;
}

.docuflo-page .pipeline-step h4{
    font-size:11px;
    font-weight:700;
    color:#111;
    margin-bottom:7px;
}

.docuflo-page .pipeline-step p{
    font-size:9px;
    line-height:1.7;
    color:#8B8B8B;
    margin:0;
}

@media(max-width:992px){
    .docuflo-page .pipeline-top h2{ font-size:44px; }
}

/* DEEPDIVE */
.docuflo-page .deepdive-section{
    background:#FAFAFA;
    padding:90px 40px;
}

.docuflo-page .deepdive-header{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    margin-bottom:50px;
}

.docuflo-page .deepdive-header-left{}

.docuflo-page .deepdive-mini-title{
    display:flex;
    align-items:center;
    gap:10px;
    color:#D92B45;
    font-size:10px;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:20px;
    font-weight:600;
}

.docuflo-page .deepdive-mini-title::before{
    content:'';
    width:22px;
    height:2px;
    background:#D92B45;
}

.docuflo-page .deepdive-header-left h2{
    font-size:46px;
    line-height:1.05;
    font-weight:800;
    color:#111;
    letter-spacing:-1.5px;
}

.docuflo-page .deepdive-header-right{
    text-align:right;
    max-width:260px;
    padding-top:30px;
}

.docuflo-page .deepdive-header-right p{
    font-size:12px;
    line-height:1.7;
    color:#999;
    font-style:italic;
}

.docuflo-page .deepdive-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:14px;
}

.docuflo-page .deepdive-card{
    background:#fff;
    border:1px solid #ECECEC;
    border-radius:12px;
    padding:20px 18px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:170px;
    transition:all 0.25s ease;
}

.docuflo-page .deepdive-card:hover{
    box-shadow:0 6px 20px rgba(0,0,0,0.06);
    transform:translateY(-3px);
}

.docuflo-page .deepdive-card .dd-num{
    font-size:9px;
    letter-spacing:1.5px;
    color:#D92B45;
    text-transform:uppercase;
    font-weight:600;
    margin-bottom:14px;
}

.docuflo-page .deepdive-card h4{
    font-size:15px;
    font-weight:700;
    color:#111;
    margin-bottom:10px;
    line-height:1.3;
}

.docuflo-page .deepdive-card p{
    font-size:12px;
    line-height:1.65;
    color:#777;
    margin-bottom:16px;
    flex-grow:1;
}

.docuflo-page .dd-tags{
    display:flex;
    flex-wrap:wrap;
    gap:6px;
}

.docuflo-page .dd-tags span{
    font-size:9.5px;
    font-weight:600;
    color:#D92B45;
    background:rgba(217,43,69,0.06);
    border:1px solid rgba(217,43,69,0.2);
    border-radius:999px;
    padding:4px 10px;
    white-space:nowrap;
}

@media(max-width:1100px){
    .docuflo-page .deepdive-grid{ grid-template-columns:repeat(2,1fr); }
    .docuflo-page .deepdive-header{ flex-direction:column; gap:16px; }
    .docuflo-page .deepdive-header-right{ text-align:left; }
}

@media(max-width:768px){
    .docuflo-page .deepdive-section{ padding:60px 24px; }
    .docuflo-page .deepdive-grid{ grid-template-columns:1fr; }
    .docuflo-page .deepdive-header-left h2{ font-size:34px; }
}

@media (min-width: 1320px) {
    .docuflo-page .ecm-section,
    .docuflo-page .challenge-section,
    .docuflo-page .feature-ecm-section,
    .docuflo-page .layers-section,
    .docuflo-page .security-section,
    .docuflo-page .pipeline-top {
        padding-left: max(70px, calc((100% - 1200px) / 2 + 70px));
        padding-right: max(70px, calc((100% - 1200px) / 2 + 70px));
    }
    .docuflo-page .deepdive-section {
        padding-left: max(40px, calc((100% - 1400px) / 2 + 40px));
        padding-right: max(40px, calc((100% - 1400px) / 2 + 40px));
    }
}
`;

const heroStats = [
    { value: "55", suffix: "%", desc: "Peningkatan waktu penyelesaian" },
    { value: "75", suffix: "%", desc: "Pengambilan dokumen lebih cepat" },
    { value: "60", suffix: "%", desc: "Pengurangan biaya operasional" },
    { value: "200", suffix: "+", desc: "Data klien didigitalisasi" },
];

const withoutDocuflo = [
    "Dokumen-dokumen tersebar di berbagai drive bersama, email, dan lampiran ERP tanpa struktur yang jelas.",
    "Konvensi penamaan manual tanpa jejak audit atau riwayat versi.",
    "Silo informasi dan kurangnya visibilitas terhadap siklus hidup dokumen.",
    "Tidak memiliki kemampuan alur kerja — sulit untuk dikembangkan di luar departemen.",
    "Kurangnya visibilitas audit menciptakan risiko kepatuhan dan regulasi",
];

const withDocuflo = [
    "Manajemen berbasis metadata dengan pengindeksan dan klasifikasi terstruktur.",
    "Ketertelusuran lengkap, log audit, dan kontrol versi jangka panjang.",
    "Peningkatan visibilitas, kolaborasi, dan proses yang lebih efisien.",
    "Otomatisasi alur kerja bawaan dan arsitektur API siap pakai untuk perusahaan.",
    "Fondasi yang andal untuk inisiatif analitik dan AI",
];

const featureStats = [
    { value: ">55", suffix: "%", desc: "Peningkatan pemulihan" },
    { value: "200", suffix: "+", desc: "Lokasi klien" },
    { value: "10K", suffix: "+", desc: "Pengguna Terdaftar" },
    { value: "300", suffix: "+", desc: "Types Dokumen Didukung" },
    { value: ">60", suffix: "%", desc: "Penghematan Biaya" },
];

const featureCards = [
    { icon: "fa-bolt", title: "Document Capture & Storage", desc: "Pengambilan metadata otomatis, penandaan dokumen, penyimpanan terpusat repositori, dan kontrol versi dari berbagai sumber masukan." },
    { icon: "fa-brain", title: "Retrieval & Accessibility", desc: "Mesin pencari berlapis-lapis — pencarian sederhana, indeks, profil, dan pencarian konten lengkap di semua repositori dokumen." },
    { icon: "fa-chart-line", title: "Collaboration & Workflow", desc: "Alur kerja persetujuan dokumen, integrasi tanda tangan elektronik, berbagi dengan kontrol SLA dan pengelolaan versi." },
    { icon: "fa-box-archive", title: "Archiving & Compliance", desc: "Kebijakan retensi dokumen otomatis, pengingat tanggal kedaluwarsa, dan jejak audit komprehensif untuk setiap tindakan pengguna." },
    { icon: "fa-link", title: "Integration & Connectivity", desc: "Arsitektur siap API yang mendukung penerapan On-Premise dan Cloud. Terintegrasi dengan SAP, HR, dan sistem lama." },
    { icon: "fa-circle-check", title: "AI & Intelligent Processing", desc: "Klasifikasi dokumen cerdas, alat ekstraksi data, dan penemuan pengetahuan berbasis OCR dari konten tidak terstruktur." },
];

const layerStack = [
    { cls: "layer-1", title: "AI & Intelligent Capabilities", desc: "Klasifikasi cerdas, ekstraksi data, penemuan pengetahuan" },
    { cls: "layer-2", title: "Workflow & Process Automation", desc: "Persetujuan digital, routing otomatis, pemantauan proses" },
    { cls: "layer-3", title: "Information Governance & Compliance", desc: "Proteksi pendapatan, jejak audit, kepatuhan regulasi" },
    { cls: "layer-4", title: "Enterprise Search & Retrieval", desc: "Pencarian teks lengkap, filter lanjutan, penandaan metadata, izin yang aman." },
    { cls: "layer-5", title: "Document & Content Management", desc: "Repositori terpusat, kontrol versi, penandaan metadata, izin yang aman." },
];

const infoCards = [
    { icon: "fa-box-archive", title: "Centricated Repository", desc: "Sumber informasi tunggal yang akurat untuk semua konten perusahaan — terstruktur, memiliki versi, dan terkontrol izinnya." },
    { icon: "fa-gear", title: "Document Processing Solution", desc: "Alur kerja otomatis dari pengambilan data hingga ekspor. Persiapan → Pemindaian → Pengindeksan → Verifikasi → Ekspor." },
    { icon: "fa-chart-simple", title: "Dashboard & Analytics", desc: "Visibilitas waktu nyata terhadap penggunaan penyimpanan, ringkasan akun, riwayat unggahan, dan aktivitas dokumen." },
    { icon: "fa-pen-to-square", title: "Web Editor", desc: "Edit dokumen Word dan Excel langsung di browser — tanpa perlu berlangganan Microsoft 365." },
];

const securityCards = [
    { icon: "fa-lock", title: "AES-256 Encryption", desc: "Enkripsi tingkat militer untuk semua data yang tersimpan. Dokumen Anda terlindungi di lapisan penyimpanan, selalu." },
    { icon: "fa-shield-halved", title: "TLS 1.2 Transmission", desc: "Semua data yang sedang ditransmisikan dilindungi dengan kepatuhan TLS 1.2, mencegah penyadapan selama transfer." },
    { icon: "fa-database", title: "SQL Server TDE", desc: "Enkripsi Data Transparan Microsoft SQL Server melindungi seluruh basis data saat tidak digunakan." },
    { icon: "fa-key", title: "LDAP / Single Sign-On", desc: "Dukungan asli untuk penyedia identitas perusahaan — terintegrasi dengan Active Directory dan infrastruktur SSO." },
    { icon: "fa-cloud", title: "Flexible Deployment", desc: "On-Premise atau Cloud — pilihan infrastruktur Anda, dengan kedaulatan data dan kontrol keamanan penuh." },
    { icon: "fa-building-shield", title: "Regulatory Compliance", desc: "Sesuai dengan pedoman kepatuhan peraturan Bank Sentral. Dirancang untuk kebutuhan sektor keuangan." },
];

const securityTags = ["AES-256", "TLS 1.2", "SQL TDE", "LDAP / SSO", "On-Prem + Cloud", "Central Bank Compliant", "200+ Document Types", "API-Ready"];

const deepdiveCards = [
    { num: "01 — CAPTURE", title: "Secured Document Capture", desc: "Multi-channel document ingestion from any source, routed through a quality-controlled digital pipeline.", tags: ["Web Upload", "Hardcopy Scan", "Batch Import", "CM (Outlook)"] },
    { num: "02 — INDEXING", title: "Data Tagging & Indexing", desc: "Shift the indexing burden from manual entry to machine automation using barcodes, OCR, and database lookups.", tags: ["Auto Index", "Barcode", "Zone OCR", "DB Lookup"] },
    { num: "03 — SEARCH", title: "Multi-Layered Search", desc: "Turn document retrieval into knowledge discovery with simple, index, profile, and full in-content search modes.", tags: ["Full-Text", "Metadata", "In-Content", "Profile"] },
    { num: "04 — WORKFLOW", title: "Document Approval Workflow", desc: "Route documents for managerial review with task notifications via email or WhatsApp. E-Signature built in.", tags: ["E-Sign", "WhatsApp", "Routing", "Approvals"] },
    { num: "05 — SHARING", title: "Document Sharing & SLA", desc: "Share via secure link with configurable SLA expiry and watermark protection. Virtual case management for sensitive documents.", tags: ["Link Share", "Watermark", "SLA Control"] },
    { num: "06 — RETENTION", title: "Automated Retention", desc: "Set retention policies with configurable expiry reminders — automated governance that enforces compliance without manual effort.", tags: ["Expiry Rules", "Email Alert", "Lifecycle"] },
    { num: "07 — AUDIT", title: "Complete Audit Trail", desc: "Every user action — view, edit, share, sign — is recorded. Generate comprehensive audit trail reports on demand.", tags: ["Activity Log", "Reports", "Compliance"] },
    { num: "08 — VERSION", title: "Version Control", desc: "View full version history, replace documents with updated versions, or edit directly through the online web editor.", tags: ["History", "Web Edit", "Replace"] },
];

const pipelineSteps = [
    { num: 1, title: "Preparation", desc: "Persiapan dokumen, validasi, pengindeksan, dan penyortiran." },
    { num: 2, title: "Scanning / Upload", desc: "Digitalisasi multi-format dan proses unggah yang aman." },
    { num: 3, title: "Indexing", desc: "Penandaan metadata, klasifikasi, dan ekstraksi OCR." },
    { num: 4, title: "Verification", desc: "Kontrol mutu dan validasi dokumen sebelum persetujuan." },
    { num: 5, title: "Export", desc: "Integrasi dengan sistem perusahaan dan pengiriman yang aman." },
];

export default function Page() {
    return (
        <>
            <div className="docuflo-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <section className="ecm-section">
                    <div className="ecm-wrapper">
                        <div className="ecm-left">
                            <div className="mini-title">ENTERPRISE CONTENT MANAGEMENT</div>

                            <h1>
                                From Document <br />
                                <span>Chaos</span> to <br />
                                Business Control
                            </h1>

                            <p>
                                Docuflo adalah platform ECM komprehensif yang mengubah cara perusahaan menangkap, mengelola,
                                mengotomatiskan, dan mengatur informasi mereka — mempersiapkan organisasi Anda untuk operasi
                                yang siap menghadapi AI.
                            </p>

                            <div className="ecm-buttons">
                                <a href="#" className="btn-red">Request a Demo</a>
                                <a href="#" className="btn-dark">Explore Platform</a>
                            </div>
                        </div>

                        <div className="ecm-right">
                            <div className="dashboard-card">
                                <div className="stats-grid">
                                    {heroStats.map((s) => (
                                        <div key={s.desc} className="stat-box">
                                            <h2>{s.value}<span>{s.suffix}</span></h2>
                                            <p>{s.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bottom-bar">
                                    <div className="bottom-left">
                                        <h3>10,000+</h3>
                                        <p>pengguna terdaftar di seluruh duniay</p>
                                    </div>
                                    <div className="bottom-right">ECM PLATFORM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="challenge-section">
                    <div className="challenge-header">
                        <div className="challenge-mini-title">THE CHALLENGE</div>
                        <h2>
                            Why Traditional Storage <br />
                            Is Not Enough
                        </h2>
                        <p>
                            Shared drive dirancang untuk kesederhanaan — bukan untuk tata kelola perusahaan.
                            Shared drive tidak memiliki kecerdasan terstruktur, keterlacakan, dan otomatisasi yang
                            dibutuhkan bisnis modern.
                        </p>
                    </div>

                    <div className="challenge-grid">
                        <div className="challenge-card">
                            <div className="card-title">TANPA DOCUFLO</div>
                            {withoutDocuflo.map((item) => (
                                <div key={item} className="challenge-item">
                                    <span className="dot gray"></span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="challenge-card">
                            <div className="card-title">Dengan DOCUFLO</div>
                            {withDocuflo.map((item) => (
                                <div key={item} className="challenge-item">
                                    <span className="dot red"></span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="feature-ecm-section">
                    <div className="feature-top">
                        <div className="feature-mini-title">PLATFORM OVERVIEW</div>
                        <h2>
                            The Comprehensive ECM <br />
                            Platform Built for Enterprise
                        </h2>
                        <p>
                            Pengelolaan file saja — mulai dari Pengambilan Informasi
                            hingga Analisis &amp; Intelijen — membentuk rantai nilai informasi
                            perusahaan yang lengkap.
                        </p>
                    </div>

                    <div className="feature-stats">
                        {featureStats.map((s) => (
                            <div key={s.desc} className="feature-stat-box">
                                <h3>{s.value}<span>{s.suffix}</span></h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="feature-grid">
                        {featureCards.map((c) => (
                            <div key={c.title} className="feature-card">
                                <div className="feature-icon">
                                    <i className={`fa-solid ${c.icon}`}></i>
                                </div>
                                <h4>{c.title}</h4>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="layers-section">
                    <div className="layers-wrapper">
                        <div className="layers-left">
                            <div className="layers-mini-title">CORE ARCHITECTURE</div>
                            <h2>
                                Five Layers of <br />
                                Document Intelligence
                            </h2>
                            <p>
                                Docuflow dirancang sebagai tumpukan kemampuan berlapis — mulai dari
                                manajemen konten dasar hingga kecerdasan berbasis AI.
                            </p>

                            <div className="layer-stack">
                                {layerStack.map((l) => (
                                    <div key={l.title} className={`layer-box ${l.cls}`}>
                                        <h4>{l.title}</h4>
                                        <p>{l.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="layers-right">
                            {infoCards.map((c) => (
                                <div key={c.title} className="info-card">
                                    <div className="info-icon">
                                        <i className={`fa-solid ${c.icon}`}></i>
                                    </div>
                                    <div className="info-content">
                                        <h4>{c.title}</h4>
                                        <p>{c.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="deepdive-section">
                    <div className="deepdive-header">
                        <div className="deepdive-header-left">
                            <div className="deepdive-mini-title">FEATURE DEEP DIVE</div>
                            <h2>
                                What Docuflo Does
                            </h2>
                        </div>
                        <div className="deepdive-header-right">
                            <p>
                                Every capability engineered<br />
                                for enterprise-grade<br />
                                reliability and compliance.
                            </p>
                        </div>
                    </div>

                    <div className="deepdive-grid">
                        {deepdiveCards.map((c) => (
                            <div key={c.title} className="deepdive-card">
                                <div>
                                    <div className="dd-num">{c.num}</div>
                                    <h4>{c.title}</h4>
                                    <p>{c.desc}</p>
                                </div>
                                <div className="dd-tags">
                                    {c.tags.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="security-section">
                    <div className="security-top">
                        <div className="security-mini-title">ENTERPRISE SECURITY</div>
                        <h2>
                            Built for Regulated <br />
                            Industries
                        </h2>
                        <p>
                            Docuflo memenuhi tuntutan keamanan dan kepatuhan dari lembaga
                            keuangan, penyedia layanan kesehatan, dan badan pemerintah.
                        </p>
                    </div>

                    <div className="security-grid">
                        {securityCards.map((c) => (
                            <div key={c.title} className="security-card">
                                <div className="security-icon">
                                    <i className={`fa-solid ${c.icon}`}></i>
                                </div>
                                <h4>{c.title}</h4>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="security-tags">
                        {securityTags.map((t) => (
                            <span key={t}>{t}</span>
                        ))}
                    </div>
                </section>

                <section className="pipeline-contact-section">
                    <div className="pipeline-top">
                        <div className="pipeline-mini-title">DIGITAL PIPELINE</div>
                        <h2>
                            From Capture to <br />
                            Searchable Knowledge
                        </h2>
                        <p>
                            Setiap dokumen melewati alur siklus hidup yang terkontrol —
                            memastikan kualitas, akurasi, dan ketertelusuran penuh sejak hari pertama.
                        </p>

                        <div className="pipeline-line">
                            {pipelineSteps.map((s) => (
                                <div key={s.num} className="pipeline-step">
                                    <div className={`pipeline-circle${s.num === 2 ? ' filled' : ''}`}>{s.num}</div>
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
            <CTAForm backgroundColor="#C8102E" brandColor="#C8102E" />
        </>
    );
}
