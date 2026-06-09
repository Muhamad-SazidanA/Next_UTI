import { Fragment } from "react";
import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.intalks-page, .intalks-page *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.intalks-page{
    font-family:'Inter', sans-serif;
    background:#f5f5f5;
}

/* HERO */
.intalks-page .hero-section{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:100px 70px;
    background:#f5f5f5;
}

.intalks-page .hero-container{
    width:100%;
    max-width:1250px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:60px;
}

.intalks-page .hero-left{
    flex:1;
    max-width:560px;
}

.intalks-page .hero-title{
    font-size:64px;
    line-height:1.1;
    font-weight:800;
    color:#111827;
    margin-bottom:28px;
}

.intalks-page .hero-title .green{ color:#1BAA57; }

.intalks-page .hero-desc{
    font-size:18px;
    line-height:1.9;
    color:#6B7280;
    margin-bottom:35px;
    max-width:520px;
}

.intalks-page .hero-buttons{
    display:flex;
    align-items:center;
    gap:16px;
}

.intalks-page .btn-demo{
    background:#1BAA57;
    color:#fff;
    padding:16px 28px;
    border-radius:10px;
    font-size:15px;
    font-weight:600;
    text-decoration:none;
    display:flex;
    align-items:center;
    gap:10px;
    transition:.3s;
}

.intalks-page .btn-demo:hover{ background:#15924b; }

.intalks-page .btn-work{
    background:#fff;
    border:1px solid #D1D5DB;
    color:#111827;
    padding:16px 28px;
    border-radius:10px;
    font-size:15px;
    font-weight:600;
    text-decoration:none;
    display:flex;
    align-items:center;
    gap:10px;
    transition:.3s;
}

.intalks-page .btn-work:hover{ background:#f3f4f6; }

.intalks-page .hero-right{
    flex:1;
    display:flex;
    justify-content:center;
    position:relative;
}

.intalks-page .dashboard-card{
    width:100%;
    max-width:560px;
    background:#fff;
    border:1px solid #E5E7EB;
    border-radius:24px;
    overflow:hidden;
    box-shadow:0 15px 40px rgba(0,0,0,0.05);
}

.intalks-page .dashboard-top{
    background:#F3F4F6;
    padding:16px 22px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid #E5E7EB;
}

.intalks-page .top-left{
    display:flex;
    align-items:center;
    gap:8px;
}

.intalks-page .dot{
    width:10px;
    height:10px;
    border-radius:50%;
}

.intalks-page .red{ background:#FF5F57; }
.intalks-page .yellow{ background:#FEBC2E; }
.intalks-page .green-dot{ background:#28C840; }

.intalks-page .dashboard-title{
    font-size:14px;
    color:#6B7280;
    font-weight:600;
}

.intalks-page .reply-box{
    position:absolute;
    top:-18px;
    right:10px;
    background:#fff;
    border:1px solid #E5E7EB;
    border-radius:14px;
    padding:12px 18px;
    box-shadow:0 10px 25px rgba(0,0,0,0.05);
}

.intalks-page .reply-box p{
    font-size:11px;
    color:#9CA3AF;
    font-weight:700;
    letter-spacing:1px;
}

.intalks-page .dashboard-content{ padding:28px; }

.intalks-page .overview{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:25px;
}

.intalks-page .overview h3{
    font-size:24px;
    font-weight:700;
    color:#111827;
}

.intalks-page .week-box{
    background:#F3F4F6;
    padding:10px 16px;
    border-radius:999px;
    font-size:13px;
    color:#6B7280;
    font-weight:600;
}

.intalks-page .stats{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:16px;
    margin-bottom:28px;
}

.intalks-page .stat-card{
    background:#F9FAFB;
    border:1px solid #E5E7EB;
    border-radius:16px;
    padding:18px;
}

.intalks-page .stat-card span{
    display:block;
    font-size:12px;
    font-weight:700;
    color:#9CA3AF;
    margin-bottom:10px;
    text-transform:uppercase;
}

.intalks-page .stat-card h2{
    font-size:34px;
    color:#111827;
    font-weight:800;
    margin-bottom:6px;
}

.intalks-page .stat-card p{
    font-size:13px;
    color:#1BAA57;
    font-weight:600;
}

.intalks-page .chart-title{
    display:flex;
    justify-content:space-between;
    margin-bottom:18px;
}

.intalks-page .chart-title span{
    font-size:13px;
    color:#6B7280;
    font-weight:600;
}

.intalks-page .progress-group{
    display:flex;
    flex-direction:column;
    gap:16px;
    margin-bottom:30px;
}

.intalks-page .progress-item{
    display:flex;
    align-items:center;
    gap:14px;
}

.intalks-page .progress-item p{
    width:130px;
    font-size:13px;
    color:#374151;
    font-weight:600;
}

.intalks-page .progress{
    flex:1;
    height:8px;
    background:#E5E7EB;
    border-radius:999px;
    overflow:hidden;
}

.intalks-page .progress-bar{
    height:100%;
    background:#1BAA57;
    border-radius:999px;
}

.intalks-page .percent{
    font-size:13px;
    color:#6B7280;
    font-weight:700;
}

.intalks-page .user-list{
    display:flex;
    flex-direction:column;
    gap:14px;
}

.intalks-page .user-card{
    border:1px solid #E5E7EB;
    border-radius:16px;
    padding:16px 18px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:#fff;
}

.intalks-page .user-left{
    display:flex;
    align-items:center;
    gap:14px;
}

.intalks-page .avatar{
    width:42px;
    height:42px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:700;
    color:#fff;
}

.intalks-page .avatar.green{ background:#1BAA57; }
.intalks-page .avatar.blue{ background:#3B82F6; }

.intalks-page .user-info h4{
    font-size:15px;
    color:#111827;
    font-weight:700;
}

.intalks-page .user-info p{
    font-size:12px;
    color:#9CA3AF;
    margin-top:4px;
}

.intalks-page .user-right{
    display:flex;
    align-items:center;
    gap:20px;
}

.intalks-page .user-right .chat{ text-align:right; }

.intalks-page .user-right .chat h5{
    font-size:14px;
    color:#111827;
    font-weight:700;
}

.intalks-page .user-right .chat span{
    font-size:12px;
    color:#9CA3AF;
}

.intalks-page .status{
    padding:8px 14px;
    border-radius:10px;
    font-size:12px;
    font-weight:700;
}

.intalks-page .status.green{
    background:#DCFCE7;
    color:#1BAA57;
}

.intalks-page .status.orange{
    background:#FEF3C7;
    color:#D97706;
}

@media(max-width:992px){
    .intalks-page .hero-container{ flex-direction:column; }
    .intalks-page .hero-title{ font-size:48px; }
    .intalks-page .stats{ grid-template-columns:1fr; }
}

@media(max-width:768px){
    .intalks-page .hero-section{ padding:60px 25px; }
    .intalks-page .hero-title{ font-size:40px; }
    .intalks-page .hero-buttons{ flex-direction:column; align-items:flex-start; }
    .intalks-page .overview{ flex-direction:column; align-items:flex-start; gap:15px; }
    .intalks-page .progress-item{ flex-direction:column; align-items:flex-start; }
    .intalks-page .progress-item p{ width:auto; }
    .intalks-page .user-card{ flex-direction:column; align-items:flex-start; gap:15px; }
    .intalks-page .user-right{ width:100%; justify-content:space-between; }
}

/* PROBLEM */
.intalks-page .problem-section{
    padding:100px 70px;
    background:#f5f5f5;
}

.intalks-page .problem-container{
    max-width:1250px;
    margin:auto;
}

.intalks-page .section-label{
    display:inline-block;
    color:#1BAA57;
    font-size:13px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:22px;
}

.intalks-page .problem-title,
.intalks-page .works-title{
    font-size:52px;
    line-height:1.15;
    font-weight:800;
    color:#111827;
    margin-bottom:22px;
}

.intalks-page .problem-desc,
.intalks-page .works-desc{
    max-width:720px;
    font-size:17px;
    line-height:1.8;
    color:#6B7280;
    margin-bottom:50px;
}

.intalks-page .problem-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:22px;
}

.intalks-page .problem-card{
    background:#fff;
    border:1px solid #E5E7EB;
    border-radius:20px;
    padding:30px;
    transition:.3s;
}

.intalks-page .problem-card:hover{ transform:translateY(-4px); }

.intalks-page .problem-icon{
    width:48px;
    height:48px;
    border-radius:14px;
    background:#EEF9F2;
    color:#1BAA57;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:18px;
    margin-bottom:24px;
}

.intalks-page .problem-card h4{
    font-size:22px;
    font-weight:700;
    color:#111827;
    margin-bottom:14px;
    line-height:1.4;
}

.intalks-page .problem-card p{
    font-size:15px;
    line-height:1.8;
    color:#6B7280;
}

.intalks-page .problem-card.active{
    background:#EAF8F0;
    border-color:#D1F1DD;
}

.intalks-page .active-icon{ background:#fff; }

/* WORKS */
.intalks-page .works-section{
    padding:100px 70px;
    background:#fff;
}

.intalks-page .works-container{
    max-width:1250px;
    margin:auto;
}

.intalks-page .workflow-box{
    width:100%;
    background:#F9FAFB;
    border:1px solid #E5E7EB;
    border-radius:28px;
    padding:40px 35px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    flex-wrap:wrap;
}

.intalks-page .workflow-item{
    flex:1;
    min-width:150px;
    text-align:center;
}

.intalks-page .workflow-icon{
    width:72px;
    height:72px;
    border-radius:50%;
    border:3px solid #1BAA57;
    background:#fff;
    color:#1BAA57;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:auto auto 18px;
    font-size:28px;
}

.intalks-page .workflow-item h5{
    font-size:16px;
    font-weight:700;
    color:#111827;
    margin-bottom:8px;
}

.intalks-page .workflow-item p{
    font-size:13px;
    color:#9CA3AF;
}

.intalks-page .workflow-arrow{
    color:#D1D5DB;
    font-size:18px;
}

@media(max-width:992px){
    .intalks-page .problem-grid{ grid-template-columns:1fr 1fr; }
    .intalks-page .workflow-box{ justify-content:center; }
}

@media(max-width:768px){
    .intalks-page .problem-section,
    .intalks-page .works-section{ padding:70px 25px; }
    .intalks-page .problem-title,
    .intalks-page .works-title{ font-size:38px; }
    .intalks-page .problem-grid{ grid-template-columns:1fr; }
    .intalks-page .workflow-box{ flex-direction:column; }
    .intalks-page .workflow-arrow{ transform:rotate(90deg); }
}

/* CAPABILITIES */
.intalks-page .capabilities-section{
    padding:100px 70px;
    background:#f5f5f5;
}

.intalks-page .capabilities-container{
    max-width:1250px;
    margin:auto;
}

.intalks-page .capabilities-top{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    gap:60px;
    margin-bottom:55px;
}

.intalks-page .capabilities-left{ max-width:650px; }

.intalks-page .capabilities-title{
    font-size:54px;
    line-height:1.15;
    font-weight:800;
    color:#111827;
    margin-top:18px;
}

.intalks-page .capabilities-right{
    max-width:430px;
    padding-top:18px;
}

.intalks-page .capabilities-right p{
    font-size:16px;
    line-height:1.9;
    color:#6B7280;
}

.intalks-page .capabilities-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    border:1px solid #E5E7EB;
    border-radius:26px;
    overflow:hidden;
    background:#fff;
}

.intalks-page .capability-card{
    padding:38px;
    border-right:1px solid #E5E7EB;
    border-bottom:1px solid #E5E7EB;
    min-height:320px;
}

.intalks-page .capability-card:nth-child(3),
.intalks-page .capability-card:nth-child(6){
    border-right:none;
}

.intalks-page .capability-card:nth-child(4),
.intalks-page .capability-card:nth-child(5),
.intalks-page .capability-card:nth-child(6){
    border-bottom:none;
}

.intalks-page .card-number{
    display:block;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    color:#1BAA57;
    margin-bottom:22px;
}

.intalks-page .capability-icon{
    width:52px;
    height:52px;
    border-radius:14px;
    background:#EEF9F2;
    color:#1BAA57;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    margin-bottom:24px;
}

.intalks-page .capability-card h4{
    font-size:24px;
    font-weight:700;
    color:#111827;
    margin-bottom:16px;
    line-height:1.4;
}

.intalks-page .capability-card p{
    font-size:15px;
    line-height:1.9;
    color:#6B7280;
}

@media(max-width:992px){
    .intalks-page .capabilities-top{ flex-direction:column; gap:30px; }
    .intalks-page .capabilities-grid{ grid-template-columns:1fr 1fr; }
    .intalks-page .capability-card:nth-child(2),
    .intalks-page .capability-card:nth-child(4),
    .intalks-page .capability-card:nth-child(6){ border-right:none; }
    .intalks-page .capability-card:nth-child(3){ border-right:1px solid #E5E7EB; }
    .intalks-page .capability-card:nth-child(4){ border-bottom:1px solid #E5E7EB; }
}

@media(max-width:768px){
    .intalks-page .capabilities-section{ padding:70px 25px; }
    .intalks-page .capabilities-title{ font-size:40px; }
    .intalks-page .capabilities-grid{ grid-template-columns:1fr; }
    .intalks-page .capability-card{
        border-right:none !important;
        border-bottom:1px solid #E5E7EB !important;
        min-height:auto;
    }
    .intalks-page .capability-card:last-child{ border-bottom:none !important; }
}

/* ANALYTICS */
.intalks-page .analytics-section{
    padding:100px 70px;
    background:#f5f5f5;
}

.intalks-page .analytics-container{
    max-width:1250px;
    margin:auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:60px;
    align-items:start;
}

.intalks-page .analytics-title{
    font-size:56px;
    line-height:1.15;
    font-weight:800;
    color:#111827;
    max-width:620px;
    margin:18px 0 22px;
}

.intalks-page .analytics-desc{
    max-width:620px;
    font-size:17px;
    line-height:1.9;
    color:#6B7280;
    margin-bottom:42px;
}

.intalks-page .metric-card{
    background:#fff;
    border:1px solid #E5E7EB;
    border-radius:22px;
    padding:28px;
    margin-bottom:20px;
}

.intalks-page .metric-top{
    display:flex;
    align-items:flex-start;
    gap:18px;
    margin-bottom:18px;
}

.intalks-page .metric-icon{
    width:50px;
    height:50px;
    min-width:50px;
    border-radius:14px;
    background:#EEF9F2;
    color:#1BAA57;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
}

.intalks-page .metric-card h4{
    font-size:24px;
    font-weight:700;
    color:#111827;
    margin-bottom:10px;
    line-height:1.4;
}

.intalks-page .metric-card p{
    font-size:15px;
    line-height:1.8;
    color:#6B7280;
}

.intalks-page .metric-badge{
    display:inline-flex;
    align-items:center;
    padding:10px 16px;
    border-radius:999px;
    background:#EAF8F0;
    color:#1BAA57;
    font-size:13px;
    font-weight:700;
}

.intalks-page .analytics-right{
    display:flex;
    flex-direction:column;
    gap:26px;
}

.intalks-page .analytics-box{
    background:#fff;
    border:1px solid #E5E7EB;
    border-radius:26px;
    padding:30px;
}

.intalks-page .analytics-box h3{
    font-size:28px;
    font-weight:800;
    color:#111827;
    margin-bottom:10px;
}

.intalks-page .analytics-subtitle{
    display:block;
    font-size:14px;
    color:#9CA3AF;
    margin-bottom:35px;
}

.intalks-page .chart-bars{
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    gap:14px;
    height:170px;
    margin-bottom:25px;
}

.intalks-page .bar-item{
    flex:1;
    text-align:center;
}

.intalks-page .bar{
    width:100%;
    border-radius:8px 8px 0 0;
}

.intalks-page .bar.green{ background:#38C86B; }
.intalks-page .bar.light{ background:#BFE2D0; }

.intalks-page .bar-item span{
    display:block;
    margin-top:12px;
    font-size:13px;
    color:#6B7280;
}

.intalks-page .chart-legend{
    display:flex;
    gap:24px;
}

.intalks-page .legend-item{
    display:flex;
    align-items:center;
    gap:10px;
}

.intalks-page .legend-dot{
    width:10px;
    height:10px;
    border-radius:50%;
}

.intalks-page .legend-dot.green{ background:#38C86B; }
.intalks-page .legend-dot.light{ background:#BFE2D0; }

.intalks-page .legend-item span{
    font-size:13px;
    color:#6B7280;
}

.intalks-page .layer-list{
    display:flex;
    flex-direction:column;
    gap:16px;
    margin-top:28px;
}

.intalks-page .layer-item{
    border:1px solid #E5E7EB;
    border-radius:18px;
    padding:18px 20px;
    background:#fff;
}

.intalks-page .layer-item.active{
    background:#EAF8F0;
    border-color:#D1F1DD;
}

.intalks-page .layer-left{
    display:flex;
    align-items:center;
    gap:16px;
}

.intalks-page .layer-icon{
    width:48px;
    height:48px;
    border-radius:14px;
    background:#EEF9F2;
    color:#1BAA57;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:18px;
}

.intalks-page .layer-left h5{
    font-size:18px;
    font-weight:700;
    color:#111827;
    margin-bottom:6px;
}

.intalks-page .layer-left p{
    font-size:14px;
    color:#6B7280;
    line-height:1.6;
}

@media(max-width:992px){
    .intalks-page .analytics-container{ grid-template-columns:1fr; }
}

@media(max-width:768px){
    .intalks-page .analytics-section{ padding:70px 25px; }
    .intalks-page .analytics-title{ font-size:40px; }
    .intalks-page .metric-top{ flex-direction:column; }
    .intalks-page .chart-bars{ gap:8px; }
    .intalks-page .analytics-box h3{ font-size:22px; }
}

/* INTEGRATION */
.intalks-page .integration-section{
    padding:100px 70px;
    background:#f5f5f5;
}

.intalks-page .integration-container{
    max-width:1250px;
    margin:auto;
    display:grid;
    grid-template-columns:1.1fr 0.9fr;
    gap:70px;
    align-items:start;
}

.intalks-page .integration-title{
    font-size:54px;
    line-height:1.15;
    font-weight:800;
    color:#111827;
    margin:18px 0 40px;
    max-width:620px;
}

.intalks-page .integration-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:18px;
}

.intalks-page .integration-card{
    background:#fff;
    border:1px solid #E5E7EB;
    border-radius:20px;
    padding:28px;
    min-height:220px;
    transition:.3s;
}

.intalks-page .integration-card:hover{ transform:translateY(-4px); }

.intalks-page .integration-icon{
    width:52px;
    height:52px;
    border-radius:14px;
    background:#EEF9F2;
    color:#1BAA57;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    margin-bottom:22px;
}

.intalks-page .integration-card h4{
    font-size:22px;
    font-weight:700;
    color:#111827;
    margin-bottom:14px;
}

.intalks-page .integration-card p{
    font-size:15px;
    line-height:1.8;
    color:#6B7280;
}

.intalks-page .integration-right{ padding-top:90px; }

.intalks-page .integration-right h3{
    font-size:34px;
    line-height:1.3;
    font-weight:800;
    color:#111827;
    margin-bottom:18px;
}

.intalks-page .integration-desc{
    font-size:16px;
    line-height:1.9;
    color:#6B7280;
    margin-bottom:32px;
}

.intalks-page .crm-tags{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-bottom:40px;
}

.intalks-page .crm-tag{
    padding:12px 18px;
    border-radius:999px;
    background:#fff;
    border:1px solid #E5E7EB;
    font-size:14px;
    font-weight:600;
    color:#374151;
}

.intalks-page .deploy-box{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:16px;
}

.intalks-page .deploy-card{
    background:#fff;
    border:1px solid #E5E7EB;
    border-radius:20px;
    padding:28px;
}

.intalks-page .deploy-card span{
    display:block;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    color:#9CA3AF;
    margin-bottom:12px;
}

.intalks-page .deploy-card h4{
    font-size:24px;
    font-weight:700;
    color:#111827;
}

.intalks-page .deploy-card.active{
    background:#EAF8F0;
    border-color:#D1F1DD;
}

.intalks-page .deploy-card.active span,
.intalks-page .deploy-card.active h4{
    color:#1BAA57;
}

@media(max-width:992px){
    .intalks-page .integration-container{ grid-template-columns:1fr; gap:50px; }
    .intalks-page .integration-right{ padding-top:0; }
}

@media(max-width:768px){
    .intalks-page .integration-section{ padding:70px 25px; }
    .intalks-page .integration-title{ font-size:40px; }
    .intalks-page .integration-grid{ grid-template-columns:1fr; }
    .intalks-page .deploy-box{ grid-template-columns:1fr; }
    .intalks-page .integration-right h3{ font-size:28px; }
}

@media (min-width: 1320px) {
    .intalks-page .hero-section,
    .intalks-page .problem-section,
    .intalks-page .works-section,
    .intalks-page .capabilities-section,
    .intalks-page .analytics-section,
    .intalks-page .integration-section {
        padding-left: max(70px, calc((100% - 1200px) / 2 + 70px));
        padding-right: max(70px, calc((100% - 1200px) / 2 + 70px));
    }
}
`;

const problems = [
    { icon: "fa-solid fa-bars-staggered", title: "High Volume, Zero Data Trail", desc: "Thousands of customer–sales chats happen daily, but all \u201Cdisappear\u201D because there is no tracking system in place." },
    { icon: "fa-regular fa-user", title: "Managers Lose Control", desc: "No way to know individual sales performance. Sales A might be highly active while Sales B is passive — but nothing is measurable." },
    { icon: "fa-regular fa-clock", title: "Response Time Unmonitored", desc: "No data on how long sales take to reply. Slow response equals lost sales opportunity — and no one even knows it\u2019s happening." },
    { icon: "fa-regular fa-star", title: "Prospects Not Identified", desc: "Out of 100 contacted customers, only 20 may be truly interested. Without insight, sales blindly follow up on all of them." },
    { icon: "fa-solid fa-chart-line", title: "Opportunity Loss", desc: "Companies miss out on improving conversion rates simply because they lack granular data from their WhatsApp conversations." },
    { icon: "fa-regular fa-star", title: "InTalks Solves All This", desc: "One platform to track, analyze, and act on every WhatsApp conversation — from chat to insight, automatically.", active: true },
];

const workflow = [
    { icon: "fa-brands fa-whatsapp", title: "WhatsApp Chats", desc: "Sales conversations" },
    { icon: "fa-solid fa-microchip", title: "InTalks Engine", desc: "AI processing" },
    { icon: "fa-solid fa-chart-simple", title: "Dashboard & Reports", desc: "Visual analytics" },
    { icon: "fa-solid fa-link", title: "CRM Integration", desc: "Two-way sync" },
    { icon: "fa-solid fa-bullseye", title: "Manager Insight", desc: "Data-driven action" },
];

const capabilities = [
    { num: "01 — CONTROL", icon: "fa-solid fa-building", title: "Centralized Control", desc: "Multi-level dashboard (HQ + Area + Store + Sales) to manage thousands of WhatsApp conversations from a single system. No more data trapped on individual phones." },
    { num: "02 — ANALYTICS", icon: "fa-solid fa-chart-line", title: "Real-Time Analytics", desc: "Monitor communication performance: message volume, reply rate, response time, and daily/weekly trends. Decisions based on real data, not assumptions." },
    { num: "03 — SCALE", icon: "fa-solid fa-bullhorn", title: "Communication at Scale", desc: "Controlled broadcast: send messages to thousands of contacts at once while tracking effectiveness. Perfect for promos, product announcements, and campaigns." },
    { num: "04 — INTEGRATE", icon: "fa-solid fa-plug", title: "Seamless Integration", desc: "Integrates with CRM and internal systems via API. Available as cloud SaaS or on-premise deployment to match your enterprise infrastructure requirements." },
    { num: "05 — SCALE", icon: "fa-solid fa-shield-halved", title: "Scalability & Security", desc: "Built for enterprise: capable of handling tens of thousands of devices and millions of chats. Data privacy and compliance with WABA standards." },
    { num: "06 — REPORTS", icon: "fa-regular fa-clipboard", title: "Automated Reporting", desc: "Generate daily, weekly, or monthly reports automatically. Export to Excel, PDF, or CSV. Schedule automated email delivery to management every week." },
];

const metrics = [
    { icon: "fa-solid fa-chart-column", title: "Message Volume Tracking", desc: "Track sent, delivered, and replied messages — drilled down per device, store, area, or enterprise level.", badge: "Per device → store → area → enterprise" },
    { icon: "fa-regular fa-message", title: "Reply Rate (Engagement Index)", desc: "Percentage of messages that receive customer replies — the clearest indicator of communication quality.", badge: "Low reply rate = evaluate approach" },
    { icon: "fa-regular fa-clock", title: "Response Time Analysis", desc: "Measure average reply time both ways: Sales → Customer and Customer → Sales. Identify where follow-up speed needs improvement.", badge: "Avg 28 min sales vs 5h customer" },
    { icon: "fa-solid fa-user", title: "Sales Activity Tracker", desc: "Flag active vs. passive sales based on chat volume, response quality, and conversation engagement scores.", badge: "25% of sales send <10 chats/day" },
];

const chartBars = [
    { day: "Mon", height: 95, cls: "light" },
    { day: "Tue", height: 130, cls: "green" },
    { day: "Wed", height: 105, cls: "light" },
    { day: "Thu", height: 140, cls: "green" },
    { day: "Fri", height: 120, cls: "light" },
    { day: "Sat", height: 82, cls: "green" },
    { day: "Sun", height: 48, cls: "light" },
];

const layers = [
    { icon: "fa-solid fa-building", title: "Enterprise Level", desc: "Full org WhatsApp activity overview" },
    { icon: "fa-solid fa-map", title: "Area Level", desc: "Benchmark across branches & areas" },
    { icon: "fa-solid fa-store", title: "Store Level", desc: "Compare individual sales within same store" },
    { icon: "fa-solid fa-user", title: "Sales Level", desc: "Chat count, reply rate, response time, engagement", active: true },
];

const integrations = [
    { icon: "fa-solid fa-code", title: "API Endpoint", desc: "Connect your internal dashboard, ERP, or backend directly to your InTalks system via REST API." },
    { icon: "fa-regular fa-window-maximize", title: "Two-Way Sync", desc: "Sync messages, CRM fields, lead status, and sales notes between your system and the dashboard." },
    { icon: "fa-solid fa-cloud", title: "Cloud Flexible", desc: "Ready for cloud deployment. Ideal for companies managing quick rollout at scale." },
    { icon: "fa-solid fa-server", title: "On-Premise", desc: "Deploy on your own server for full data sovereignty. Ideal for regulated industries." },
];

const stores = [
    { name: "Store BDG-1", pct: 86 },
    { name: "Store JKT-3", pct: 74 },
    { name: "Store SBY-2", pct: 58 },
];

export default function Page() {
    return (
        <>
            <div className="intalks-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <section className="hero-section">
                    <div className="hero-container">
                        <div className="hero-left">
                            <h1 className="hero-title">
                                <span className="green">From Chat to Insight.</span><br />
                                <span className="green">Empower Your Sales</span><br />
                                with Real Data.
                            </h1>

                            <p className="hero-desc">
                                InTalks transforms your team&apos;s daily WhatsApp conversations
                                into actionable business intelligence — giving management full
                                visibility, and sales teams the data they need to win.
                            </p>

                            <div className="hero-buttons">
                                <a href="#" className="btn-demo">
                                    <i className="fa-solid fa-arrow-right"></i>
                                    Get a Free Demo
                                </a>
                                <a href="#" className="btn-work">
                                    <i className="fa-solid fa-play"></i>
                                    See How It Works
                                </a>
                            </div>
                        </div>

                        <div className="hero-right">
                            <div className="reply-box">
                                <p>REPLY RATE TODAY</p>
                            </div>

                            <div className="dashboard-card">
                                <div className="dashboard-top">
                                    <div className="top-left">
                                        <div className="dot red"></div>
                                        <div className="dot yellow"></div>
                                        <div className="dot green-dot"></div>
                                        <div className="dashboard-title">
                                            InTalks Dashboard — Area West Java
                                        </div>
                                    </div>
                                </div>

                                <div className="dashboard-content">
                                    <div className="overview">
                                        <h3>Sales Performance Overview</h3>
                                        <div className="week-box">This Week · May 2025</div>
                                    </div>

                                    <div className="stats">
                                        <div className="stat-card">
                                            <span>Messages Sent</span>
                                            <h2>12,840</h2>
                                            <p><i className="fa-solid fa-arrow-trend-up"></i> 18% WoW</p>
                                        </div>
                                        <div className="stat-card">
                                            <span>Avg Reply Rate</span>
                                            <h2>71%</h2>
                                            <p><i className="fa-solid fa-arrow-trend-up"></i> 8% WoW</p>
                                        </div>
                                        <div className="stat-card">
                                            <span>Avg Response</span>
                                            <h2>28m</h2>
                                            <p><i className="fa-solid fa-bolt"></i> 6m faster</p>
                                        </div>
                                    </div>

                                    <div className="chart-title">
                                        <span>Store Reply Rate Breakdown</span>
                                        <span>This Week</span>
                                    </div>

                                    <div className="progress-group">
                                        {stores.map((s) => (
                                            <div key={s.name} className="progress-item">
                                                <p>{s.name}</p>
                                                <div className="progress">
                                                    <div className="progress-bar" style={{ width: `${s.pct}%` }}></div>
                                                </div>
                                                <div className="percent">{s.pct}%</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="user-list">
                                        <div className="user-card">
                                            <div className="user-left">
                                                <div className="avatar green">RS</div>
                                                <div className="user-info">
                                                    <h4>Rina Safitri</h4>
                                                    <p>Store BDG-1 · Sales</p>
                                                </div>
                                            </div>
                                            <div className="user-right">
                                                <div className="chat"><h5>142</h5><span>chats</span></div>
                                                <div className="chat"><h5>88%</h5><span>reply</span></div>
                                                <div className="status green">Active</div>
                                            </div>
                                        </div>

                                        <div className="user-card">
                                            <div className="user-left">
                                                <div className="avatar blue">DH</div>
                                                <div className="user-info">
                                                    <h4>Dimas Hendra</h4>
                                                    <p>Store JKT-3 · Sales</p>
                                                </div>
                                            </div>
                                            <div className="user-right">
                                                <div className="chat"><h5>61</h5><span>chats</span></div>
                                                <div className="chat"><h5>54%</h5><span>reply</span></div>
                                                <div className="status orange">Low</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="problem-section">
                    <div className="problem-container">
                        <span className="section-label">— THE PROBLEM</span>
                        <h2 className="problem-title">
                            Your WhatsApp conversations<br />
                            are flying under the radar.
                        </h2>
                        <p className="problem-desc">
                            Thousands of customer–sales chats happen every day. But without a tracking
                            system, all of that data disappears — and so does every missed opportunity.
                        </p>

                        <div className="problem-grid">
                            {problems.map((p) => (
                                <div key={p.title} className={`problem-card${p.active ? " active" : ""}`}>
                                    <div className={`problem-icon${p.active ? " active-icon" : ""}`}>
                                        <i className={p.icon}></i>
                                    </div>
                                    <h4>{p.title}</h4>
                                    <p>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="works-section">
                    <div className="works-container">
                        <span className="section-label">— HOW IT WORKS</span>
                        <h2 className="works-title">
                            Five steps from conversation to intelligence.
                        </h2>
                        <p className="works-desc">
                            InTalks sits between your WhatsApp environment and your management layer —
                            transforming raw chat data into structured, actionable insight.
                        </p>

                        <div className="workflow-box">
                            {workflow.map((w, i) => (
                                <Fragment key={w.title}>
                                    <div className="workflow-item">
                                        <div className="workflow-icon">
                                            <i className={w.icon}></i>
                                        </div>
                                        <h5>{w.title}</h5>
                                        <p>{w.desc}</p>
                                    </div>
                                    {i < workflow.length - 1 && (
                                        <div className="workflow-arrow">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="capabilities-section">
                    <div className="capabilities-container">
                        <div className="capabilities-top">
                            <div className="capabilities-left">
                                <span className="section-label">— KEY CAPABILITIES</span>
                                <h2 className="capabilities-title">
                                    Everything your<br />
                                    management team needs.
                                </h2>
                            </div>
                            <div className="capabilities-right">
                                <p>
                                    InTalks is not just monitoring — it analyzes conversations
                                    so your company can objectively understand customer engagement
                                    and sales performance at every level of the organization.
                                </p>
                            </div>
                        </div>

                        <div className="capabilities-grid">
                            {capabilities.map((c) => (
                                <div key={c.title} className="capability-card">
                                    <span className="card-number">{c.num}</span>
                                    <div className="capability-icon">
                                        <i className={c.icon}></i>
                                    </div>
                                    <h4>{c.title}</h4>
                                    <p>{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="analytics-section">
                    <div className="analytics-container">
                        <div className="analytics-left">
                            <span className="section-label">— REAL-TIME ANALYTICS</span>
                            <h2 className="analytics-title">
                                Four metrics that tell the whole story.
                            </h2>
                            <p className="analytics-desc">
                                InTalks tracks the metrics that actually matter for sales
                                performance — not vanity numbers, but signals that directly
                                connect to conversion and revenue.
                            </p>

                            {metrics.map((m) => (
                                <div key={m.title} className="metric-card">
                                    <div className="metric-top">
                                        <div className="metric-icon">
                                            <i className={m.icon}></i>
                                        </div>
                                        <div>
                                            <h4>{m.title}</h4>
                                            <p>{m.desc}</p>
                                        </div>
                                    </div>
                                    <div className="metric-badge">{m.badge}</div>
                                </div>
                            ))}
                        </div>

                        <div className="analytics-right">
                            <div className="analytics-box">
                                <h3>Weekly Message Activity</h3>
                                <span className="analytics-subtitle">
                                    Store BDG-1 · Messages sent vs replied
                                </span>

                                <div className="chart-bars">
                                    {chartBars.map((b) => (
                                        <div key={b.day} className="bar-item">
                                            <div className={`bar ${b.cls}`} style={{ height: `${b.height}px` }}></div>
                                            <span>{b.day}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="chart-legend">
                                    <div className="legend-item">
                                        <div className="legend-dot green"></div>
                                        <span>High activity</span>
                                    </div>
                                    <div className="legend-item">
                                        <div className="legend-dot light"></div>
                                        <span>Standard day</span>
                                    </div>
                                </div>
                            </div>

                            <div className="analytics-box hierarchy-box">
                                <h3>Hierarchical Report Layers</h3>

                                <div className="layer-list">
                                    {layers.map((l) => (
                                        <div key={l.title} className={`layer-item${l.active ? " active" : ""}`}>
                                            <div className="layer-left">
                                                <div className="layer-icon">
                                                    <i className={l.icon}></i>
                                                </div>
                                                <div>
                                                    <h5>{l.title}</h5>
                                                    <p>{l.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="integration-section">
                    <div className="integration-container">
                        <div className="integration-left">
                            <span className="section-label">— INTEGRATION LAYER</span>
                            <h2 className="integration-title">
                                API &amp; CRM Sync — built for your stack.
                            </h2>

                            <div className="integration-grid">
                                {integrations.map((it) => (
                                    <div key={it.title} className="integration-card">
                                        <div className="integration-icon">
                                            <i className={it.icon}></i>
                                        </div>
                                        <h4>{it.title}</h4>
                                        <p>{it.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="integration-right">
                            <h3>Connects to every major CRM your team already uses.</h3>
                            <p className="integration-desc">
                                InTalks integrates with existing enterprise infrastructure
                                via standard API, so there&apos;s no lock-in — just connect
                                and start using data.
                            </p>

                            <div className="crm-tags">
                                {["Salesforce", "HubSpot", "Zoho CRM", "Microsoft Dynamics", "Custom ERP"].map((t) => (
                                    <div key={t} className="crm-tag">{t}</div>
                                ))}
                            </div>

                            <div className="deploy-box">
                                <div className="deploy-card">
                                    <span>OPTION A</span>
                                    <h4>Cloud SaaS</h4>
                                </div>
                                <div className="deploy-card active">
                                    <span>OPTION B</span>
                                    <h4>On-Premise</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <CTAForm backgroundColor="#38C86B" brandColor="#38C86B" />
        </>
    );
}
