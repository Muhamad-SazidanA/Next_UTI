import { Fragment } from "react";
import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.syclus-pg, .syclus-pg *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.syclus-pg{
    font-family:'Inter', sans-serif;
    background:white;
}

/* HERO */
.syclus-pg .hero{ padding:80px 70px 40px; }

.syclus-pg .hero-wrapper{
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:60px;
}

.syclus-pg .hero-left{ max-width:580px; }

.syclus-pg .hero-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:8px 16px;
    border:1px solid #D7E3F5;
    border-radius:999px;
    background:#fff;
    margin-bottom:26px;
}

.syclus-pg .hero-badge span{
    font-size:12px;
    font-weight:600;
    letter-spacing:1px;
    color:#457FBF;
}

.syclus-pg .hero-badge .dot{
    width:8px;
    height:8px;
    border-radius:50%;
    background:#457FBF;
}

.syclus-pg .hero-title{
    font-size:68px;
    line-height:1.05;
    font-weight:800;
    color:#111827;
    margin-bottom:26px;
}

.syclus-pg .hero-title .blue{ color:#457FBF; }

.syclus-pg .hero-desc{
    font-size:19px;
    line-height:1.8;
    color:#6B7280;
    max-width:540px;
    margin-bottom:40px;
}

.syclus-pg .hero-buttons{
    display:flex;
    align-items:center;
    gap:18px;
    margin-bottom:60px;
}

.syclus-pg .btn-primary{
    background:#457FBF;
    color:#fff;
    padding:18px 34px;
    border-radius:14px;
    text-decoration:none;
    font-size:16px;
    font-weight:600;
    transition:.3s;
    box-shadow:0 10px 25px rgba(69,127,191,.25);
}

.syclus-pg .btn-primary:hover{ transform:translateY(-3px); }

.syclus-pg .btn-secondary{
    background:#fff;
    border:1px solid #D9DEE7;
    color:#1F2937;
    padding:18px 34px;
    border-radius:14px;
    text-decoration:none;
    font-size:16px;
    font-weight:600;
    transition:.3s;
}

.syclus-pg .btn-secondary:hover{ background:#F3F4F6; }

.syclus-pg .hero-stats{
    display:flex;
    align-items:center;
    gap:60px;
    padding-top:35px;
    border-top:1px solid #E5E7EB;
}

.syclus-pg .stat h2{
    font-size:42px;
    color:#111827;
    font-weight:800;
    margin-bottom:6px;
}

.syclus-pg .stat h2 span{ color:#457FBF; }

.syclus-pg .stat p{
    font-size:14px;
    line-height:1.5;
    color:#9CA3AF;
}

.syclus-pg .hero-right{
    flex:1;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    padding-top:10px;
}

.syclus-pg .dashboard-card{
    width:540px;
    background:#fff;
    border-radius:26px;
    padding:22px;
    padding-bottom:55px;
    margin-top:-200px;
    box-shadow:
        0 18px 45px rgba(15,23,42,.08),
        0 4px 12px rgba(15,23,42,.05);
    position:relative;
}

.syclus-pg .card-top{
    position:relative;
    margin-bottom:22px;
}

.syclus-pg .window-dots{
    display:flex;
    gap:6px;
    margin-bottom:10px;
}

.syclus-pg .window-dots span{
    width:8px;
    height:8px;
    border-radius:50%;
}

.syclus-pg .window-dots span:nth-child(1){ background:#FF5F57; }
.syclus-pg .window-dots span:nth-child(2){ background:#FEBC2E; }
.syclus-pg .window-dots span:nth-child(3){ background:#28C840; }

.syclus-pg .dashboard-title{
    font-size:11px;
    font-weight:600;
    color:#9CA3AF;
    letter-spacing:.2px;
}

.syclus-pg .approved-box{
    position:absolute;
    top:-50px;
    right:-35px;
    background:#fff;
    border:1px solid #E7EDF5;
    border-radius:16px;
    padding:12px 16px;
    display:flex;
    align-items:center;
    gap:12px;
    box-shadow:
        0 14px 35px rgba(0,0,0,.08),
        0 4px 12px rgba(0,0,0,.05);
    z-index:10;
}

.syclus-pg .approved-box i{
    width:34px;
    height:34px;
    border-radius:10px;
    background:#22C55E;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
}

.syclus-pg .approved-box h4{
    font-size:14px;
    line-height:1;
    font-weight:700;
    color:#111827;
    margin-bottom:5px;
}

.syclus-pg .approved-box p{
    font-size:10px;
    color:#A1A1AA;
    line-height:1;
}

.syclus-pg .info-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:12px;
    margin-bottom:18px;
}

.syclus-pg .info-box{
    background:#F6F8FB;
    border-radius:14px;
    padding:14px;
}

.syclus-pg .info-box span{
    display:block;
    font-size:9px;
    font-weight:700;
    letter-spacing:.7px;
    color:#A1A1AA;
    margin-bottom:8px;
}

.syclus-pg .info-box h3{
    font-size:28px;
    line-height:1;
    font-weight:800;
    color:#111827;
    margin-bottom:8px;
}

.syclus-pg .info-box p{
    font-size:10px;
    font-weight:600;
    color:#00C2A8;
}

.syclus-pg .info-box:last-child p{ color:#0057FF; }

.syclus-pg .invoice-title{
    font-size:10px;
    font-weight:700;
    letter-spacing:.8px;
    color:#A1A1AA;
    margin-bottom:12px;
}

.syclus-pg .invoice-list{
    display:flex;
    flex-direction:column;
    gap:12px;
}

.syclus-pg .invoice-item{
    border:1px solid #EDF1F5;
    border-radius:14px;
    padding:13px 15px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:#fff;
}

.syclus-pg .invoice-left{
    display:flex;
    align-items:center;
    gap:12px;
}

.syclus-pg .invoice-icon{
    width:38px;
    height:38px;
    border-radius:10px;
    background:#F4F7FC;
    color:#457FBF;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:15px;
}

.syclus-pg .invoice-name{
    font-size:13px;
    font-weight:700;
    color:#111827;
    margin-bottom:4px;
}

.syclus-pg .invoice-id{
    font-size:10px;
    color:#A1A1AA;
}

.syclus-pg .invoice-right{
    display:flex;
    align-items:center;
    gap:14px;
}

.syclus-pg .invoice-price{
    font-size:13px;
    font-weight:700;
    color:#111827;
}

.syclus-pg .status{
    padding:6px 10px;
    border-radius:999px;
    font-size:9px;
    font-weight:700;
    letter-spacing:.5px;
}

.syclus-pg .auto{ background:#ECFDF3; color:#16A34A; }
.syclus-pg .review{ background:#FFF7ED; color:#F59E0B; }
.syclus-pg .verified{ background:#EEF4FF; color:#457FBF; }

.syclus-pg .ai-box{
    position:absolute;
    bottom:-20px;
    left:-20px;
    background:linear-gradient(135deg,#457FBF,#2E5F94);
    padding:12px 18px;
    border-radius:14px;
    color:#fff;
    display:flex;
    align-items:center;
    gap:12px;
    box-shadow:0 18px 30px rgba(69,127,191,.30);
    z-index:5;
}

.syclus-pg .ai-box i{
    width:34px;
    height:34px;
    border-radius:10px;
    background:rgba(255,255,255,.18);
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
}

.syclus-pg .ai-box h5{
    font-size:15px;
    line-height:1;
    margin-bottom:4px;
    font-weight:700;
}

.syclus-pg .ai-box p{
    font-size:10px;
    opacity:.85;
}

.syclus-pg .brand-section{
    margin-top:70px;
    padding-top:26px;
    border-top:1px solid #E5E7EB;
    display:flex;
    gap:40px;
    flex-wrap:wrap;
}

.syclus-pg .brand-section span{
    font-size:12px;
    font-weight:700;
    letter-spacing:.7px;
    color:#B3BAC6;
}

@media(max-width:1100px){
    .syclus-pg .hero-wrapper{ flex-direction:column; }
    .syclus-pg .hero-title{ font-size:54px; }
    .syclus-pg .dashboard-card{ width:100%; margin-top:0; }
}

@media(max-width:768px){
    .syclus-pg .hero{ padding:60px 24px; }
    .syclus-pg .hero-title{ font-size:42px; }
    .syclus-pg .hero-buttons{ flex-direction:column; align-items:flex-start; }
    .syclus-pg .hero-stats{ flex-wrap:wrap; gap:30px; }
    .syclus-pg .info-grid{ grid-template-columns:1fr; }
    .syclus-pg .invoice-item{ flex-direction:column; align-items:flex-start; gap:14px; }
    .syclus-pg .invoice-right{ width:100%; justify-content:space-between; }
    .syclus-pg .ai-box{ position:static; margin-top:20px; }
}

/* IMPACT */
.syclus-pg .impact-section{
    background:#0A1628;
    padding:90px 70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:50px;
    overflow:hidden;
}

.syclus-pg .impact-left{ min-width:260px; }

.syclus-pg .impact-badge{
    display:flex;
    align-items:center;
    gap:12px;
    margin-bottom:22px;
    font-size:13px;
    font-weight:700;
    letter-spacing:1px;
    color:rgba(255,255,255,.45);
}

.syclus-pg .impact-badge span{
    width:18px;
    height:2px;
    background:#457FBF;
    border-radius:999px;
}

.syclus-pg .impact-left h2{
    font-size:64px;
    line-height:1.02;
    font-weight:800;
    color:#fff;
}

.syclus-pg .impact-cards{
    display:flex;
    gap:22px;
    flex:1;
    justify-content:flex-end;
}

.syclus-pg .impact-card{
    width:260px;
    padding:28px;
    border-radius:24px;
    background:rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.06);
    backdrop-filter:blur(10px);
    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.04),
        0 10px 30px rgba(0,0,0,.18);
    transition:.3s ease;
}

.syclus-pg .impact-card:hover{
    transform:translateY(-6px);
    border-color:rgba(69,127,191,.35);
}

.syclus-pg .impact-icon{
    width:42px;
    height:42px;
    border-radius:12px;
    background:rgba(255,255,255,.05);
    display:flex;
    align-items:center;
    justify-content:center;
    color:#457FBF;
    font-size:16px;
    margin-bottom:28px;
}

.syclus-pg .impact-card h3{
    font-size:68px;
    line-height:1;
    font-weight:800;
    color:#fff;
    margin-bottom:16px;
}

.syclus-pg .impact-card h3 span{ color:#457FBF; }

.syclus-pg .impact-card p{
    font-size:14px;
    line-height:1.8;
    color:rgba(255,255,255,.48);
}

@media(max-width:1100px){
    .syclus-pg .impact-section{ flex-direction:column; align-items:flex-start; }
    .syclus-pg .impact-cards{ width:100%; flex-wrap:wrap; justify-content:flex-start; }
}

@media(max-width:768px){
    .syclus-pg .impact-section{ padding:70px 24px; }
    .syclus-pg .impact-left h2{ font-size:46px; }
    .syclus-pg .impact-cards{ flex-direction:column; }
    .syclus-pg .impact-card{ width:100%; }
}

/* WORKFLOW */
.syclus-pg .workflow-section{
    padding:100px 70px 90px;
    background:white;
    overflow:hidden;
}

.syclus-pg .workflow-top{
    text-align:center;
    max-width:850px;
    margin:auto;
    margin-bottom:80px;
}

.syclus-pg .workflow-badge{
    display:inline-flex;
    align-items:center;
    gap:12px;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    color:#457FBF;
    margin-bottom:28px;
}

.syclus-pg .workflow-badge span{
    width:18px;
    height:2px;
    background:#457FBF;
    border-radius:999px;
}

.syclus-pg .workflow-top h2{
    font-size:64px;
    line-height:1.1;
    font-weight:800;
    color:#111827;
    margin-bottom:28px;
}

.syclus-pg .workflow-top h2 span{ color:#457FBF; }

.syclus-pg .workflow-top p{
    font-size:18px;
    line-height:1.9;
    color:#6B7280;
}

.syclus-pg .workflow-flow{
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-wrap:wrap;
    gap:10px;
}

.syclus-pg .workflow-item{
    text-align:center;
    position:relative;
    min-width:120px;
}

.syclus-pg .workflow-circle{
    width:82px;
    height:82px;
    border-radius:50%;
    background:#fff;
    border:2px solid #E5EAF2;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:auto;
    margin-bottom:18px;
    position:relative;
    box-shadow:
        0 10px 25px rgba(15,23,42,.06),
        inset 0 2px 6px rgba(255,255,255,.7);
}

.syclus-pg .workflow-number{
    position:absolute;
    top:-6px;
    right:-2px;
    width:22px;
    height:22px;
    border-radius:50%;
    background:#457FBF;
    color:#fff;
    font-size:11px;
    font-weight:700;
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid #fff;
}

.syclus-pg .workflow-circle i{
    font-size:28px;
    color:#457FBF;
}

.syclus-pg .workflow-item h4{
    font-size:15px;
    font-weight:700;
    color:#111827;
    margin-bottom:6px;
}

.syclus-pg .workflow-item span{
    font-size:12px;
    color:#9CA3AF;
}

.syclus-pg .workflow-arrow{
    margin-top:32px;
    color:#C7D2E3;
    font-size:16px;
    padding:0 2px;
}

@media(max-width:1100px){
    .syclus-pg .workflow-flow{ row-gap:40px; }
    .syclus-pg .workflow-arrow{ display:none; }
}

@media(max-width:768px){
    .syclus-pg .workflow-section{ padding:80px 24px; }
    .syclus-pg .workflow-top{ margin-bottom:60px; }
    .syclus-pg .workflow-top h2{ font-size:44px; }
    .syclus-pg .workflow-top p{ font-size:16px; }
    .syclus-pg .workflow-flow{ gap:30px; }
    .syclus-pg .workflow-item{ width:45%; }
}

@media(max-width:500px){
    .syclus-pg .workflow-item{ width:100%; }
}

/* WHY */
.syclus-pg .why-automation{
    padding:100px 70px;
    background:white;
}

.syclus-pg .why-top{
    max-width:700px;
    margin-bottom:55px;
}

.syclus-pg .why-badge{
    display:flex;
    align-items:center;
    gap:12px;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    color:#457FBF;
    margin-bottom:22px;
}

.syclus-pg .why-badge span{
    width:18px;
    height:2px;
    background:#457FBF;
    border-radius:999px;
}

.syclus-pg .why-top h2{
    font-size:64px;
    line-height:1.05;
    font-weight:800;
    color:#111827;
    margin-bottom:24px;
}

.syclus-pg .why-top h2 span{ color:#457FBF; }

.syclus-pg .why-top p{
    max-width:560px;
    font-size:17px;
    line-height:1.9;
    color:#6B7280;
}

.syclus-pg .why-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:22px;
}

.syclus-pg .why-card{
    position:relative;
    background:#fff;
    border:1px solid #E6EBF2;
    border-radius:20px;
    padding:28px;
    transition:.3s ease;
    box-shadow:0 6px 20px rgba(15,23,42,.03);
    overflow:hidden;
}

.syclus-pg .why-card::before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:3px;
    background:linear-gradient(90deg,#0057FF,#00C2A8);
}

.syclus-pg .why-card:hover{
    transform:translateY(-5px);
    box-shadow:0 18px 35px rgba(15,23,42,.08);
}

.syclus-pg .why-icon{
    width:46px;
    height:46px;
    border-radius:14px;
    background:#F2F5FB;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#7B8794;
    font-size:16px;
    margin-bottom:26px;
}

.syclus-pg .why-card h3{
    font-size:20px;
    line-height:1.4;
    font-weight:700;
    color:#111827;
    margin-bottom:16px;
}

.syclus-pg .why-card p{
    font-size:14px;
    line-height:1.9;
    color:#6B7280;
}

@media(max-width:1100px){
    .syclus-pg .why-grid{ grid-template-columns:1fr; }
}

@media(max-width:768px){
    .syclus-pg .why-automation{ padding:80px 24px; }
    .syclus-pg .why-top h2{ font-size:44px; }
    .syclus-pg .why-top p{ font-size:16px; }
}

/* FEATURES */
.syclus-pg .features-section{
    padding:100px 70px;
    background:white;
}

.syclus-pg .features-top{ margin-bottom:60px; }

.syclus-pg .features-badge{
    display:flex;
    align-items:center;
    gap:12px;
    margin-bottom:18px;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    color:#457FBF;
}

.syclus-pg .features-badge span{
    width:18px;
    height:2px;
    background:#457FBF;
    border-radius:999px;
}

.syclus-pg .features-top h2{
    font-size:62px;
    line-height:1.05;
    font-weight:800;
    color:#111827;
}

.syclus-pg .features-top h2 span{ color:#5E8FD0; }

.syclus-pg .features-wrapper{
    display:grid;
    grid-template-columns:1fr 1.2fr;
    gap:36px;
    align-items:start;
}

.syclus-pg .features-left{
    display:flex;
    flex-direction:column;
}

.syclus-pg .feature-item{
    display:flex;
    gap:18px;
    padding:22px 0;
    border-bottom:1px solid #E8EDF5;
}

.syclus-pg .feature-item.active h3{ color:#5E8FD0; }

.syclus-pg .feature-icon{
    min-width:28px;
    width:28px;
    height:28px;
    border-radius:8px;
    background:#EFF4FB;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#93A4BC;
    font-size:12px;
}

.syclus-pg .feature-item.active .feature-icon{
    background:#457FBF;
    color:#fff;
}

.syclus-pg .feature-content h3{
    font-size:15px;
    font-weight:700;
    color:#111827;
    margin-bottom:10px;
}

.syclus-pg .feature-content p{
    font-size:13px;
    line-height:1.8;
    color:#6B7280;
}

.syclus-pg .pipeline-card{
    background:#F3F5F9;
    border:1px solid #E7ECF4;
    border-radius:22px;
    padding:22px;
}

.syclus-pg .pipeline-title{
    font-size:10px;
    font-weight:700;
    letter-spacing:1px;
    color:#B3BAC6;
    margin-bottom:18px;
}

.syclus-pg .pipeline-item{
    background:#fff;
    border:1px solid #E7ECF4;
    border-radius:14px;
    padding:14px 16px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:10px;
}

.syclus-pg .pipeline-left{
    display:flex;
    align-items:center;
    gap:12px;
}

.syclus-pg .pipeline-icon{
    width:34px;
    height:34px;
    border-radius:10px;
    background:#F5F7FB;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#B0BAC9;
    font-size:14px;
}

.syclus-pg .pipeline-icon.orange{ background:#FFF4E8; color:#F59E0B; }
.syclus-pg .pipeline-icon.blue{ background:#EEF4FF; color:#3B82F6; }
.syclus-pg .pipeline-icon.yellow{ background:#FFF7E8; color:#FBBF24; }
.syclus-pg .pipeline-icon.green{ background:#ECFDF3; color:#22C55E; }

.syclus-pg .pipeline-left h4{
    font-size:13px;
    font-weight:700;
    color:#111827;
    margin-bottom:4px;
}

.syclus-pg .pipeline-left span{
    font-size:10px;
    color:#9CA3AF;
}

.syclus-pg .pipeline-status{
    padding:6px 10px;
    border-radius:999px;
    font-size:9px;
    font-weight:700;
    letter-spacing:.5px;
}

.syclus-pg .matched{ background:#ECFDF3; color:#22C55E; }
.syclus-pg .confirmed{ background:#ECFDF3; color:#16A34A; }
.syclus-pg .processing{ background:#EEF4FF; color:#3B82F6; }
.syclus-pg .validating{ background:#EEF2FF; color:#6366F1; }
.syclus-pg .approved{ background:#ECFDF3; color:#16A34A; }

.syclus-pg .pipeline-line{
    display:flex;
    align-items:center;
    gap:8px;
    padding:2px 4px 14px 6px;
    font-size:11px;
    color:#A1A1AA;
}

.syclus-pg .pipeline-line i{
    font-size:10px;
    color:#C3CBD8;
}

@media(max-width:1100px){
    .syclus-pg .features-wrapper{ grid-template-columns:1fr; }
}

@media(max-width:768px){
    .syclus-pg .features-section{ padding:80px 24px; }
    .syclus-pg .features-top h2{ font-size:42px; }
    .syclus-pg .pipeline-item{ flex-direction:column; align-items:flex-start; gap:14px; }
    .syclus-pg .pipeline-status{ align-self:flex-start; }
}

/* AI LEARNING */
.syclus-pg .ai-learning-section{
    padding:100px 70px;
    background:white;
}

.syclus-pg .ai-learning-wrapper{
    display:grid;
    grid-template-columns:1fr 520px;
    gap:40px;
    align-items:start;
}

.syclus-pg .ai-learning-left{ max-width:620px; }

.syclus-pg .ai-learning-badge{
    display:flex;
    align-items:center;
    gap:12px;
    margin-bottom:24px;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    color:#457FBF;
}

.syclus-pg .ai-learning-badge span{
    width:18px;
    height:2px;
    background:#457FBF;
    border-radius:999px;
}

.syclus-pg .ai-learning-left h2{
    font-size:58px;
    line-height:1.05;
    font-weight:800;
    color:#111827;
    margin-bottom:24px;
}

.syclus-pg .ai-learning-desc{
    font-size:17px;
    line-height:1.9;
    color:#6B7280;
    max-width:540px;
    margin-bottom:40px;
}

.syclus-pg .ai-learning-item{
    display:flex;
    gap:18px;
    padding:22px;
    background:#fff;
    border:1px solid #E8EDF5;
    border-radius:18px;
    margin-bottom:16px;
    transition:.3s ease;
    box-shadow:0 6px 18px rgba(15,23,42,.03);
}

.syclus-pg .ai-learning-item:hover{
    transform:translateY(-4px);
    box-shadow:0 16px 30px rgba(15,23,42,.07);
}

.syclus-pg .ai-learning-icon{
    min-width:46px;
    width:46px;
    height:46px;
    border-radius:14px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:16px;
}

.syclus-pg .ai-learning-icon.pink{ background:#FCE7F3; color:#EC4899; }
.syclus-pg .ai-learning-icon.blue{ background:#EEF4FF; color:#3B82F6; }
.syclus-pg .ai-learning-icon.yellow{ background:#FFF7E8; color:#F59E0B; }
.syclus-pg .ai-learning-icon.gray{ background:#F3F4F6; color:#6B7280; }

.syclus-pg .ai-learning-item h4{
    font-size:15px;
    font-weight:700;
    color:#111827;
    margin-bottom:8px;
}

.syclus-pg .ai-learning-item p{
    font-size:13px;
    line-height:1.8;
    color:#6B7280;
}

.syclus-pg .ai-learning-right{
    display:flex;
    justify-content:flex-end;
}

.syclus-pg .ai-quote-card{
    width:100%;
    background:linear-gradient(135deg,#5E8FD0,#457FBF);
    border-radius:26px;
    padding:40px;
    color:#fff;
    box-shadow:0 20px 45px rgba(69,127,191,.25);
}

.syclus-pg .quote-mark{
    font-size:54px;
    line-height:1;
    opacity:.25;
    margin-bottom:10px;
}

.syclus-pg .ai-quote-card p{
    font-size:16px;
    line-height:2;
    color:rgba(255,255,255,.92);
    margin-bottom:40px;
}

.syclus-pg .ai-quote-stats{
    display:flex;
    gap:34px;
    flex-wrap:wrap;
}

.syclus-pg .ai-quote-stats h3{
    font-size:42px;
    line-height:1;
    font-weight:800;
    margin-bottom:8px;
}

.syclus-pg .ai-quote-stats span{
    font-size:12px;
    color:rgba(255,255,255,.75);
}

@media(max-width:1100px){
    .syclus-pg .ai-learning-wrapper{ grid-template-columns:1fr; }
    .syclus-pg .ai-learning-right{ justify-content:flex-start; }
}

@media(max-width:768px){
    .syclus-pg .ai-learning-section{ padding:80px 24px; }
    .syclus-pg .ai-learning-left h2{ font-size:42px; }
    .syclus-pg .ai-quote-card{ padding:30px; }
    .syclus-pg .ai-quote-stats{ gap:24px; }
    .syclus-pg .ai-quote-stats h3{ font-size:34px; }
}

@media (min-width: 1320px) {
    .syclus-pg .hero,
    .syclus-pg .impact-section,
    .syclus-pg .workflow-section,
    .syclus-pg .why-automation,
    .syclus-pg .features-section,
    .syclus-pg .ai-learning-section {
        padding-left: max(70px, calc((100% - 1200px) / 2 + 70px));
        padding-right: max(70px, calc((100% - 1200px) / 2 + 70px));
    }
}
`;

const heroStats = [
    { value: "95", suffix: "%", desc: "Entri Data Dikurangi" },
    { value: "80", suffix: "%", desc: "Persetujuan Lebih Cepat" },
    { value: "100", suffix: "%", desc: "Penipuan Telah Dihilangkan" },
];

const invoices = [
    { name: "PT Sumber Rejeki", id: "INV-2025-00391", price: "Rp 24.750.000", status: "auto", label: "AUTO ✓" },
    { name: "CV Maju Bersama", id: "INV-2025-00390", price: "Rp 8.200.000", status: "review", label: "REVIEW" },
    { name: "PT Global Supply", id: "INV-2025-00389", price: "Rp 112.000.000", status: "verified", label: "VERIFIED" },
];

const impactCards = [
    { icon: "fa-chart-column", num: "58", suffix: "%", desc: "sekitar 70% faktur B2B di seluruh dunia akan diproses tanpa campur tangan manusia pada tahun 2025 — Sumber: Gartner" },
    { icon: "fa-bolt", num: "95", suffix: "%", desc: "Pengurangan entri data secara manual berkat teknologi pengambilan data cerdas SYCLUS" },
    { icon: "fa-shield-halved", num: "100", suffix: "%", desc: "Penghapusan penipuan melalui verifikasi digital berlapis dan alur kerja persetujuan" },
];

const workflow = [
    { icon: "fa-inbox", title: "Capture & Code", desc: "AI dapat membaca dokumen apa pun" },
    { icon: "fa-square-check", title: "Verify & Approve", desc: "Validasi otomatis" },
    { icon: "fa-link", title: "Send to ERP", desc: "Integrasi langsung" },
    { icon: "fa-key", title: "Authorize Payment", desc: "Otentikasi berlapis yang aman" },
    { icon: "fa-regular fa-credit-card", title: "Payment Channel", desc: "Dukungan multi-bank" },
    { icon: "fa-floppy-disk", title: "Archive for Audit", desc: "Riwayat audit lengkap" },
];

const whyCards = [
    { icon: "fa-regular fa-file-lines", title: "Eliminate Paper & Manual Data Entry", desc: "SYCLUS mendigitalkan seluruh proses AP Anda — mulai dari faktur cetak hingga dokumen digital — dengan kecerdasan buatan canggih yang membaca dan mengekstrak data secara otomatis, serta terintegrasi dengan sistem ERP Anda." },
    { icon: "fa-regular fa-clock", title: "Dramatically Cut Audit Prep Time", desc: "Audit tidak harus merepotkan. Temukan faktur apa pun dengan cepat dalam arsip digital yang aman dan teratur, yang hanya dapat diakses oleh pengguna yang berwenang — sudah disusun sebelumnya dan siap untuk ditinjau." },
    { icon: "fa-solid fa-gear", title: "Automate Workflow & Exception Handling", desc: "Tetapkan aturan persetujuan cerdas berdasarkan jumlah, vendor, atau jenis data. Salurkan faktur ke pengambil keputusan yang tepat secara otomatis dan tangani pengecualian untuk memastikan tidak ada kesalahan." },
];

const featureItems = [
    { icon: "fa-solid fa-database", title: "Central Repository Storage", desc: "Penyimpanan terpusat meminimalkan risiko kerusakan, kehilangan, atau duplikasi berkas. Semua dokumen — baik cetak maupun digital — disimpan di satu lokasi yang aman dan dapat dicari.", active: true },
    { icon: "fa-regular fa-folder-open", title: "Full Audit Trail Accessibility", desc: "Setiap tindakan dilacak dan diberi cap waktu. Dukung kepatuhan serta cegah konsekuensi hukum dengan pelacakan dokumen yang lengkap dan catatan pertanggungjawaban." },
    { icon: "fa-solid fa-magnifying-glass", title: "Fast Retrieval of Information", desc: "Pengindeksan AI yang sistematis memungkinkan konten berharga yang tersimpan di berbagai repositori dapat ditemukan dan diakses dalam hitungan detik — bukan berjam-jam." },
    { icon: "fa-regular fa-file-lines", title: "Paperless Environment", desc: "Digitalisasi dokumen secara menyeluruh dapat mengurangi biaya operasional dan limbah. Kurangi jejak lingkungan Anda sekaligus menekan biaya operasional." },
];

const pipeline: Array<{ icon: string; iconCls?: string; title: string; sub: string; status: string; statusLabel: string; line?: string }> = [
    { icon: "fa-regular fa-file", title: "Purchase Order", sub: "PO-2025-0847", status: "matched", statusLabel: "MATCHED ✓", line: "Delivery verified against PO" },
    { icon: "fa-solid fa-box", iconCls: "orange", title: "Delivery Notes", sub: "DN-2025-114", status: "confirmed", statusLabel: "CONFIRMED ✓", line: "Invoice matched against PO + DN" },
    { icon: "fa-regular fa-file-lines", iconCls: "blue", title: "Invoice", sub: "INV-2025-0384", status: "processing", statusLabel: "PROCESSING...", line: "Tax document validation" },
    { icon: "fa-solid fa-receipt", iconCls: "yellow", title: "Tax Document", sub: "FP-2025-0001", status: "validating", statusLabel: "VALIDATING...", line: "Vendor master cross-check" },
    { icon: "fa-solid fa-check", iconCls: "green", title: "Vendor Master Check", sub: "VND-PT-SUMBER-001", status: "approved", statusLabel: "APPROVED ✓" },
];

const aiItems = [
    { color: "pink", icon: "fa-solid fa-brain", title: "AI That Continuously Improves", desc: "Seiring pertumbuhan bisnis Anda, AI pun ikut berkembang. Setiap dokumen baru yang diproses meningkatkan akurasi model — sehingga model tersebut semakin memahami format unik para pemasok Anda seiring berjalannya waktu." },
    { color: "blue", icon: "fa-regular fa-file-lines", title: "Understand Semi-Structured Documents", desc: "Tidak seperti OCR pada umumnya, SYCLUS mampu membaca dan menginterpretasikan dokumen yang tidak mengikuti templat standar, serta menangani kompleksitas dokumen vendor yang sebenarnya." },
    { color: "yellow", icon: "fa-solid fa-bolt", title: "Slash Turnaround Time", desc: "Hilangkan sepenuhnya proses entri data yang membosankan. Tim Anda dapat fokus pada hal-hal yang penting, sementara SYCLUS memproses faktur dalam hitungan menit, bukan hari." },
    { color: "gray", icon: "fa-solid fa-magnifying-glass", title: "Validate Extracted Data Instantly", desc: "Lakukan validasi silang terhadap data yang diambil dari dokumen dengan daftar vendor, pesanan pembelian, dan catatan ERP Anda — tanpa campur tangan manual sama sekali." },
];

export default function Page() {
    return (
        <>
            <div className="syclus-pg">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <section className="hero">
                    <div className="hero-wrapper">
                        <div className="hero-left">
                            <div className="hero-badge">
                                <div className="dot"></div>
                                <span>24/7 AI DELIVERY ROBOT</span>
                            </div>

                            <h1 className="hero-title">
                                Transform Your <br />
                                <span className="blue">Accounts Payable</span><br />
                                With Intelligent AI
                            </h1>

                            <p className="hero-desc">
                                SYCLUS mengotomatiskan seluruh proses AP Anda, mulai dari
                                pengambilan dokumen cerdas hingga integrasi dengan ERP — sehingga mengurangi
                                pekerjaan manual hingga 95% dan sepenuhnya menghilangkan risiko penipuan.
                            </p>

                            <div className="hero-buttons">
                                <a href="#" className="btn-primary">Request A Demo →</a>
                                <a href="#" className="btn-secondary">Explore Features</a>
                            </div>

                            <div className="hero-stats">
                                {heroStats.map((s) => (
                                    <div key={s.desc} className="stat">
                                        <h2>{s.value}<span>{s.suffix}</span></h2>
                                        <p>{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hero-right">
                            <div className="dashboard-card">
                                <div className="card-top">
                                    <div>
                                        <div className="window-dots">
                                            <span></span><span></span><span></span>
                                        </div>
                                        <div className="dashboard-title" style={{ marginTop: 10 }}>
                                            SYCLUS — AP Automation Dashboard
                                        </div>
                                    </div>

                                    <div className="approved-box">
                                        <i className="fa-solid fa-check"></i>
                                        <div>
                                            <h4>Auto-Approved</h4>
                                            <p>INV-2025-00384 • Rp 48.500.000</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="info-grid">
                                    <div className="info-box">
                                        <span>INVOICES PROCESSED</span>
                                        <h3>1,284</h3>
                                        <p>↗ 32% this month</p>
                                    </div>
                                    <div className="info-box">
                                        <span>AVG PROCESSING</span>
                                        <h3>4 min</h3>
                                        <p>↓ 80% faster</p>
                                    </div>
                                    <div className="info-box">
                                        <span>ACCURACY RATE</span>
                                        <h3>99.2%</h3>
                                        <p>AI verified</p>
                                    </div>
                                </div>

                                <div className="invoice-title">RECENT INVOICES</div>

                                <div className="invoice-list">
                                    {invoices.map((inv) => (
                                        <div key={inv.id} className="invoice-item">
                                            <div className="invoice-left">
                                                <div className="invoice-icon">
                                                    <i className="fa-regular fa-file-lines"></i>
                                                </div>
                                                <div>
                                                    <div className="invoice-name">{inv.name}</div>
                                                    <div className="invoice-id">{inv.id}</div>
                                                </div>
                                            </div>
                                            <div className="invoice-right">
                                                <div className="invoice-price">{inv.price}</div>
                                                <div className={`status ${inv.status}`}>{inv.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="ai-box">
                                    <i className="fa-solid fa-robot"></i>
                                    <div>
                                        <h5>AI Extract</h5>
                                        <p>12 fields • 100% accuracy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="brand-section">
                        <span>DITERAPKAN DI</span>
                        <span>COSTA COFFEE</span>
                        <span>RESTAURAN • MALAYSIA</span>
                        <span>TAIWAN</span>
                        <span>PRAGUE</span>
                        <span>LEBIH DARI 10 NEGARA</span>
                    </div>
                </section>

                <section className="impact-section">
                    <div className="impact-left">
                        <div className="impact-badge">
                            <span></span>
                            BY THE NUMBERS
                        </div>
                        <h2>
                            The AP <br />
                            Automation <br />
                            Impact
                        </h2>
                    </div>

                    <div className="impact-cards">
                        {impactCards.map((c, i) => (
                            <div key={i} className="impact-card">
                                <div className="impact-icon">
                                    <i className={`fa-solid ${c.icon}`}></i>
                                </div>
                                <h3>{c.num}<span>{c.suffix}</span></h3>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="workflow-section">
                    <div className="workflow-top">
                        <div className="workflow-badge">
                            <span></span>
                            HOW IT WORKS
                        </div>
                        <h2>
                            The SYCLUS <br />
                            <span>AP Automation</span> Approach
                        </h2>
                        <p>
                            Siklus AP yang sepenuhnya otomatis dan menyeluruh — mulai dari
                            pengambilan dokumen hingga pembayaran, terintegrasi langsung ke dalam sistem ERP Anda.
                        </p>
                    </div>

                    <div className="workflow-flow">
                        {workflow.map((w, i) => (
                            <Fragment key={w.title}>
                                <div className="workflow-item">
                                    <div className="workflow-circle">
                                        <div className="workflow-number">{i + 1}</div>
                                        <i className={w.icon.startsWith("fa-") && !w.icon.includes(" ") ? `fa-solid ${w.icon}` : w.icon}></i>
                                    </div>
                                    <h4>{w.title}</h4>
                                    <span>{w.desc}</span>
                                </div>
                                {i < workflow.length - 1 && (
                                    <div className="workflow-arrow">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </div>
                </section>

                <section className="why-automation">
                    <div className="why-top">
                        <div className="why-badge">
                            <span></span>
                            WHY AP AUTOMATION
                        </div>
                        <h2>
                            Why Your Business <br />
                            Needs <span>Automation</span>
                        </h2>
                        <p>
                            Proses AP manual cenderung lambat, rentan terhadap kesalahan, dan mahal.
                            SYCLUS mengubah cara kerja operasional Anda dengan otomatisasi cerdas.
                        </p>
                    </div>

                    <div className="why-grid">
                        {whyCards.map((c) => (
                            <div key={c.title} className="why-card">
                                <div className="why-icon">
                                    <i className={c.icon}></i>
                                </div>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="features-section">
                    <div className="features-top">
                        <div className="features-badge">
                            <span></span>
                            KEY FEATURES
                        </div>
                        <h2>
                            Features Built for{" "}
                            <span>Enterprise Scale</span>
                        </h2>
                    </div>

                    <div className="features-wrapper">
                        <div className="features-left">
                            {featureItems.map((f) => (
                                <div key={f.title} className={`feature-item${f.active ? " active" : ""}`}>
                                    <div className="feature-icon">
                                        <i className={f.icon}></i>
                                    </div>
                                    <div className="feature-content">
                                        <h3>{f.title}</h3>
                                        <p>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="features-right">
                            <div className="pipeline-card">
                                <div className="pipeline-title">DOCUMENT PROCESSING PIPELINE</div>

                                {pipeline.map((p, i) => (
                                    <Fragment key={p.title}>
                                        <div className="pipeline-item">
                                            <div className="pipeline-left">
                                                <div className={`pipeline-icon${p.iconCls ? " " + p.iconCls : ""}`}>
                                                    <i className={p.icon}></i>
                                                </div>
                                                <div>
                                                    <h4>{p.title}</h4>
                                                    <span>{p.sub}</span>
                                                </div>
                                            </div>
                                            <div className={`pipeline-status ${p.status}`}>{p.statusLabel}</div>
                                        </div>
                                        {p.line && (
                                            <div className="pipeline-line">
                                                <i className="fa-solid fa-arrow-down"></i>
                                                {p.line}
                                            </div>
                                        )}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ai-learning-section">
                    <div className="ai-learning-wrapper">
                        <div className="ai-learning-left">
                            <div className="ai-learning-badge">
                                <span></span>
                                INTELLIGENT TECHNOLOGY
                            </div>
                            <h2>
                                AI That Learns With <br />
                                Every Document
                            </h2>
                            <p className="ai-learning-desc">
                                SYCLUS menggunakan pembelajaran mesin untuk memahami dan mengekstrak
                                data dari faktur, nota pengiriman, pesanan pembelian,
                                dan dokumen perpajakan apa pun — bahkan yang tidak terstruktur sekalipun.
                            </p>

                            {aiItems.map((a) => (
                                <div key={a.title} className="ai-learning-item">
                                    <div className={`ai-learning-icon ${a.color}`}>
                                        <i className={a.icon}></i>
                                    </div>
                                    <div>
                                        <h4>{a.title}</h4>
                                        <p>{a.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="ai-learning-right">
                            <div className="ai-quote-card">
                                <div className="quote-mark">“</div>
                                <p>
                                    Keunggulan solusi kami dimulai dari fitur pengambilan data cerdas —
                                    sistem pembelajaran mesin yang mampu memahami dan mengekstrak
                                    data dari faktur, nota pengiriman, pesanan pembelian,
                                    serta dokumen pajak apa pun secara otomatis.
                                </p>

                                <div className="ai-quote-stats">
                                    <div>
                                        <h3>95%</h3>
                                        <span>Less data entry</span>
                                    </div>
                                    <div>
                                        <h3>4 min</h3>
                                        <span>Avg processing time</span>
                                    </div>
                                    <div>
                                        <h3>100%</h3>
                                        <span>Fraud elimination</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <CTAForm backgroundColor="#457FBF" brandColor="#457FBF" />
        </>
    );
}
