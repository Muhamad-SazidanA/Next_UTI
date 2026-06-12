import CTAForm from "../../../components/CTAForm";

const pageStyles = `
.pss-page, .pss-page *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Inter',sans-serif;
}

.pss-page .security-hero{
    position:relative;
    min-height:720px;
    display:flex;
    align-items:center;
    overflow:hidden;
    background: linear-gradient(135deg, #0A1A3A 0%, #0D1F42 100%);
}
.pss-page .security-hero img.bg-image{
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:0.5;
}
.pss-page .security-overlay{
    position:absolute;
    inset:0;
}
.pss-page .security-container{
    position:relative;
    z-index:2;
    max-width:1400px;
    width:100%;
    margin:auto;
    padding:0 80px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:60px;
}
.pss-page .security-left{
    max-width:580px;
    flex-shrink:0;
}
.pss-page .security-badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:10px 18px;
    border:1px solid rgba(255,153,77,.35);
    border-radius:50px;
    background:rgba(255,153,77,.08);
    color:#FF9B54;
    font-size:14px;
    font-weight:600;
    margin-bottom:28px;
}
.pss-page .security-title{
    font-size:64px;
    line-height:1.08;
    font-weight:900;
    color:#fff;
    margin-bottom:24px;
}
.pss-page .security-title span{
    color:#FFB56B;
}
.pss-page .security-desc{
    font-size:18px;
    line-height:1.7;
    color:rgba(255,255,255,.78);
    margin-bottom:40px;
}
.pss-page .security-buttons{
    display:flex;
    gap:16px;
    flex-wrap:wrap;
}
.pss-page .btn-primary{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:16px 28px;
    background:#fff;
    color:#0F2458;
    border-radius:12px;
    text-decoration:none;
    font-weight:700;
    transition:.3s;
    border: none;
    cursor: pointer;
}
.pss-page .btn-primary:hover{
    transform:translateY(-2px);
    background:#f5f5f5;
}
.pss-page .btn-secondary{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:16px 28px;
    border:1px solid rgba(255,255,255,.3);
    color:#fff;
    border-radius:12px;
    text-decoration:none;
    font-weight:700;
    backdrop-filter:blur(10px);
    background:rgba(255,255,255,.05);
    transition:.3s;
    cursor: pointer;
}
.pss-page .btn-secondary:hover{
    background:rgba(255,255,255,.15);
    border-color:rgba(255,255,255,.5);
}
.pss-page .security-right{
    flex:1;
    display:flex;
    justify-content:flex-end;
}
.pss-page .security-dashboard{
    width:500px;
    padding:24px;
    border-radius:28px;
    backdrop-filter:blur(20px);
    background:rgba(255,255,255,.06);
    border:1px solid rgba(255,255,255,.12);
    box-shadow: 0 25px 50px -12px rgba(0,0,0,.5);
}
.pss-page .dashboard-header{
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
    color:#fff;
    font-size:11px;
    font-weight:700;
    letter-spacing:1px;
    opacity:0.8;
}
.pss-page .monitoring{
    color:#FF9A52;
}
.pss-page .monitoring i{
    font-size:8px;
    margin-right:6px;
    color:#FF5E5E;
}
.pss-page .camera-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px;
}
.pss-page .camera-box{
    height:110px;
    border-radius:14px;
    background:rgba(0,8,19,.7);
    border:1px solid rgba(255,255,255,.08);
    color:#9AA5C3;
    padding:12px;
    display:flex;
    align-items:flex-end;
    font-size:11px;
    font-weight:600;
    backdrop-filter:blur(4px);
    position: relative;
}
.pss-page .camera-box::before {
    content: "📷";
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 20px;
    opacity: 0.5;
}
.pss-page .camera-box.active{
    border:2px solid #FF6D4D;
    background:rgba(255,109,77,.08);
}
.pss-page .camera-box.active::before {
    opacity: 1;
}
.pss-page .event-list{
    margin-top:18px;
}
.pss-page .event-item{
    display:flex;
    align-items:center;
    gap:10px;
    padding:12px;
    margin-bottom:8px;
    border-radius:12px;
    background:rgba(255,255,255,.04);
    color:rgba(255,255,255,.85);
    font-size:12px;
    font-weight:500;
}
.pss-page .dot{
    width:8px;
    height:8px;
    border-radius:50%;
    flex-shrink:0;
}
.pss-page .red{
    background:#ff5b5b;
    box-shadow:0 0 6px #ff5b5b;
}
.pss-page .yellow{
    background:#ffd43b;
    box-shadow:0 0 6px #ffd43b;
}
.pss-page .green{
    background:#42d392;
    box-shadow:0 0 6px #42d392;
}
.pss-page .stats-row{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
    margin-top:15px;
}
.pss-page .stat-box{
    padding:14px 10px;
    text-align:center;
    border-radius:12px;
    background:rgba(255,255,255,.04);
}
.pss-page .stat-box h3{
    color:#fff;
    font-size:24px;
    margin-bottom:4px;
    font-weight:800;
}
.pss-page .stat-box p{
    color:#9AA5C3;
    font-size:10px;
    font-weight:600;
    letter-spacing:0.5px;
}
.pss-page .ai-detection{
    margin-top:18px;
    background:rgba(255,255,255,.1);
    border-radius:16px;
    padding:14px 16px;
    display:flex;
    gap:12px;
    align-items:center;
    backdrop-filter:blur(10px);
    border:1px solid rgba(255,255,255,.1);
}
.pss-page .ai-detection i{
    color:#ff914d;
    font-size:22px;
}
.pss-page .ai-detection strong{
    display:block;
    color:#fff;
    font-size:13px;
}
.pss-page .ai-detection span{
    display:block;
    color:#9AA5C3;
    font-size:11px;
}
@media(max-width:1200px){
    .pss-page .security-container{
        padding:0 40px;
        gap:40px;
    }
    .pss-page .security-title{
        font-size:52px;
    }
    .pss-page .security-dashboard{
        width:440px;
    }
}
@media(max-width:991px){
    .pss-page .security-container{
        flex-direction:column;
        text-align:center;
        padding:60px 30px;
    }
    .pss-page .security-left{
        max-width:100%;
    }
    .pss-page .security-buttons{
        justify-content:center;
    }
    .pss-page .security-title{
        font-size:44px;
    }
    .pss-page .security-right{
        justify-content:center;
        width:100%;
    }
    .pss-page .security-dashboard{
        width:100%;
        max-width:500px;
    }
}
@media(max-width:576px){
    .pss-page .security-hero{
        min-height:auto;
    }
    .pss-page .security-title{
        font-size:32px;
    }
    .pss-page .security-desc{
        font-size:15px;
        line-height:1.6;
    }
    .pss-page .btn-primary,
    .pss-page .btn-secondary{
        width:100%;
        justify-content:center;
    }
    .pss-page .security-container{
        padding:40px 20px;
    }
    .pss-page .camera-grid{
        gap:8px;
    }
    .pss-page .camera-box{
        height:90px;
        font-size:9px;
    }
    .pss-page .stats-row{
        gap:6px;
    }
    .pss-page .stat-box h3{
        font-size:18px;
    }
}
.pss-page .security-foundation{
    padding:120px 0;
    background:#F7F7F8;
}
.pss-page .foundation-container{
    max-width:1400px;
    margin:auto;
    padding:0 60px;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:60px;
    align-items:start;
}
.pss-page .risk-card{
    background:#EFE6D1;
    border:1px solid #E6D8B6;
    border-radius:24px;
    padding:30px;
}
.pss-page .risk-percent{
    font-size:72px;
    font-weight:900;
    color:#F16300;
    line-height:1;
    margin-bottom:10px;
}
.pss-page .risk-desc{
    color:#384152;
    font-size:14px;
    margin-bottom:24px;
}
.pss-page .risk-list{
    display:flex;
    flex-direction:column;
    gap:12px;
}
.pss-page .risk-item{
    background:#F8F8F8;
    border-radius:12px;
    padding:14px 18px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.pss-page .risk-item-left{
    display:flex;
    align-items:center;
    gap:10px;
}
.pss-page .risk-item-left i{
    color:#F16300;
}
.pss-page .risk-item span{
    font-size:13px;
    color:#24314E;
    font-weight:500;
}
.pss-page .risk-item strong{
    color:#F16300;
    font-size:12px;
}
.pss-page .risk-stats{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px;
    margin-top:14px;
}
.pss-page .risk-stat{
    background:#F8F8F8;
    border-radius:12px;
    padding:20px;
}
.pss-page .risk-stat h3{
    font-size:34px;
    color:#18316D;
    font-weight:800;
    margin-bottom:6px;
}
.pss-page .risk-stat p{
    font-size:12px;
    color:#97A1B3;
}
.pss-page .section-label{
    color:#5D7EF7;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:12px;
}
.pss-page .foundation-right h2{
    font-size:52px;
    line-height:1.1;
    font-weight:800;
    color:#102B68;
    margin-bottom:18px;
    max-width:650px;
}
.pss-page .section-desc{
    font-size:16px;
    line-height:1.8;
    color:#6B7280;
    margin-bottom:30px;
    max-width:620px;
}
.pss-page .feature-card{
    display:flex;
    gap:18px;
    background:#F1F2F4;
    border-radius:16px;
    padding:22px;
    margin-bottom:16px;
}
.pss-page .feature-icon{
    min-width:42px;
    width:42px;
    height:42px;
    border-radius:12px;
    background:#FFF3E9;
    display:flex;
    align-items:center;
    justify-content:center;
}
.pss-page .feature-icon i{
    color:#F16300;
}
.pss-page .feature-card h4{
    color:#102B68;
    font-size:18px;
    font-weight:700;
    margin-bottom:8px;
}
.pss-page .feature-card p{
    color:#6B7280;
    font-size:14px;
    line-height:1.7;
}
@media(max-width:991px){
    .pss-page .foundation-container{
        grid-template-columns:1fr;
    }
    .pss-page .foundation-right h2{
        font-size:38px;
    }
}
.pss-page .security-solutions{
    padding:120px 0;
    background:#F7F8FA;
}
.pss-page .solution-container{
    max-width:1400px;
    margin:auto;
    padding:0 60px;
}
.pss-page .solution-header{
    max-width:700px;
    margin-bottom:50px;
}
.pss-page .solution-label{
    color:#4D7BFF;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    display:block;
    margin-bottom:14px;
}
.pss-page .solution-header h2{
    font-size:54px;
    line-height:1.1;
    color:#112C6A;
    font-weight:800;
    margin-bottom:20px;
}
.pss-page .solution-header p{
    font-size:16px;
    line-height:1.8;
    color:#6B7280;
    max-width:650px;
}
.pss-page .solution-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:22px;
}
.pss-page .solution-card{
    background:#fff;
    border:1px solid #E7EBF2;
    border-radius:18px;
    padding:28px;
    transition:.3s;
}
.pss-page .solution-card:hover{
    transform:translateY(-5px);
}
.pss-page .solution-number{
    color:#FF7A21;
    font-size:13px;
    font-weight:700;
    margin-bottom:14px;
}
.pss-page .solution-icon{
    width:54px;
    height:54px;
    border-radius:14px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
    font-size:20px;
}
.pss-page .orange{
    background:#FFF1E7;
    color:#FF7A21;
}
.pss-page .blue{
    background:#EEF4FF;
    color:#2962FF;
}
.pss-page .red{
    background:#FFF0F0;
    color:#FF4D4F;
}
.pss-page .green{
    background:#EEFFF4;
    color:#16A34A;
}
.pss-page .purple{
    background:#F2F0FF;
    color:#6D5DF6;
}
.pss-page .yellow{
    background:#FFF7E8;
    color:#F59E0B;
}
.pss-page .solution-card h3{
    font-size:22px;
    color:#112C6A;
    font-weight:700;
    margin-bottom:12px;
}
.pss-page .solution-card p{
    color:#6B7280;
    line-height:1.8;
    font-size:14px;
    margin-bottom:20px;
}
.pss-page .solution-tags{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
}
.pss-page .solution-tags span{
    padding:7px 12px;
    border-radius:30px;
    font-size:12px;
    font-weight:600;
    background:#FFF1E7;
    color:#FF7A21;
}
.pss-page .blue-tags span{
    background:#EEF4FF;
    color:#2962FF;
}
.pss-page .red-tags span{
    background:#FFF0F0;
    color:#FF4D4F;
}
.pss-page .green-tags span{
    background:#EEFFF4;
    color:#16A34A;
}
.pss-page .purple-tags span{
    background:#F2F0FF;
    color:#6D5DF6;
}
.pss-page .yellow-tags span{
    background:#FFF7E8;
    color:#F59E0B;
}
@media(max-width:991px){
    .pss-page .solution-grid{
        grid-template-columns:1fr;
    }
    .pss-page .solution-header h2{
        font-size:38px;
    }
}
.pss-page .industry-section{
    padding:120px 0;
    background:#F7F8FA;
}
.pss-page .industry-container{
    max-width:1400px;
    margin:auto;
    padding:0 60px;
}
.pss-page .industry-header{
    max-width:620px;
    margin-bottom:50px;
}
.pss-page .industry-label{
    display:block;
    color:#4D7BFF;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:12px;
}
.pss-page .industry-header h2{
    font-size:54px;
    line-height:1.1;
    font-weight:800;
    color:#0E2B69;
    margin-bottom:20px;
}
.pss-page .industry-header p{
    color:#6B7280;
    font-size:16px;
    line-height:1.8;
}
.pss-page .industry-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:20px;
}
.pss-page .industry-card{
    background:#fff;
    border:1px solid #E7EBF2;
    border-radius:18px;
    padding:24px;
    transition:.3s;
}
.pss-page .industry-card:hover{
    transform:translateY(-4px);
}
.pss-page .industry-icon{
    width:48px;
    height:48px;
    border-radius:14px;
    background:#F4F7FC;
    color:#5B6B87;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:18px;
    margin-bottom:18px;
}
.pss-page .industry-card h3{
    color:#0E2B69;
    font-size:18px;
    font-weight:700;
    margin-bottom:12px;
}
.pss-page .industry-card p{
    color:#6B7280;
    font-size:13px;
    line-height:1.8;
    margin-bottom:18px;
}
.pss-page .industry-tags{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
}
.pss-page .industry-tags span{
    background:#FFF2E8;
    color:#F97316;
    border:1px solid #FFD9BE;
    border-radius:30px;
    padding:6px 10px;
    font-size:11px;
    font-weight:600;
}
@media(max-width:1200px){
    .pss-page .industry-grid{
        grid-template-columns:repeat(2,1fr);
    }
}
@media(max-width:768px){
    .pss-page .industry-section{
        padding:80px 0;
    }
    .pss-page .industry-container{
        padding:0 20px;
    }
    .pss-page .industry-grid{
        grid-template-columns:1fr;
    }
    .pss-page .industry-header h2{
        font-size:38px;
    }
}
.pss-page .security-process{
    padding:120px 0;
    background:#071633;
    overflow:hidden;
}
.pss-page .process-container{
    max-width:1400px;
    margin:auto;
    padding:0 60px;
}
.pss-page .process-header{
    text-align:center;
    max-width:760px;
    margin:0 auto 60px;
}
.pss-page .process-label{
    display:inline-block;
    color:#FFB15D;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:14px;
}
.pss-page .process-header h2{
    color:#fff;
    font-size:52px;
    font-weight:800;
    line-height:1.15;
    margin-bottom:20px;
}
.pss-page .process-header p{
    color:rgba(255,255,255,.70);
    font-size:16px;
    line-height:1.8;
}
.pss-page .process-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:18px;
}
.pss-page .process-card{
    position:relative;
    background:rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.08);
    border-radius:18px;
    padding:28px;
    min-height:240px;
    overflow:hidden;
}
.pss-page .process-number{
    position:absolute;
    top:10px;
    right:20px;
    font-size:64px;
    font-weight:900;
    color:rgba(255,255,255,.04);
    line-height:1;
}
.pss-page .process-icon{
    width:42px;
    height:42px;
    border-radius:12px;
    background:rgba(255,153,77,.12);
    border:1px solid rgba(255,153,77,.2);
    display:flex;
    align-items:center;
    justify-content:center;
    color:#FFA154;
    font-size:16px;
    margin-bottom:20px;
}
.pss-page .process-card h3{
    color:#fff;
    font-size:18px;
    font-weight:700;
    margin-bottom:14px;
    line-height:1.4;
}
.pss-page .process-card p{
    color:rgba(255,255,255,.65);
    font-size:14px;
    line-height:1.8;
}
@media(max-width:1200px){
    .pss-page .process-grid{
        grid-template-columns:repeat(2,1fr);
    }
}
@media(max-width:768px){
    .pss-page .security-process{
        padding:80px 0;
    }
    .pss-page .process-container{
        padding:0 20px;
    }
    .pss-page .process-grid{
        grid-template-columns:1fr;
    }
    .pss-page .process-header h2{
        font-size:34px;
    }
}
.pss-page .security-platform{
    padding:120px 0;
    background:#F7F8FA;
}
.pss-page .platform-container{
    max-width:1400px;
    margin:auto;
    padding:0 60px;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:50px;
    align-items:start;
}
.pss-page .platform-diagram{
    background:#F4EEDB;
    border:1px solid #E7D9B7;
    border-radius:24px;
    padding:40px 20px 26px;
    text-align:center;
}
.pss-page .platform-center{
    margin-bottom:24px;
}
.pss-page .platform-circle{
    width:90px;
    height:90px;
    border-radius:50%;
    background:#0D2C73;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:34px;
    margin:0 auto 16px;
    box-shadow:0 0 0 12px rgba(13,44,115,.08);
}
.pss-page .platform-center h4{
    color:#102B68;
    font-size:14px;
    font-weight:700;
    line-height:1.5;
}
.pss-page .platform-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
}
.pss-page .platform-item{
    background:#fff;
    border:1px solid #E7EBF2;
    border-radius:12px;
    padding:18px 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:8px;
}
.pss-page .platform-item i{
    color:#F97316;
    font-size:18px;
}
.pss-page .platform-item span{
    font-size:12px;
    font-weight:600;
    color:#102B68;
}
.pss-page .platform-label{
    display:block;
    color:#4D7BFF;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:12px;
}
.pss-page .platform-content h2{
    color:#102B68;
    font-size:52px;
    font-weight:800;
    line-height:1.15;
    margin-bottom:18px;
}
.pss-page .platform-content p{
    color:#6B7280;
    line-height:1.8;
    margin-bottom:30px;
}
.pss-page .integration-list{
    display:flex;
    flex-direction:column;
    gap:12px;
}
.pss-page .integration-card{
    display:flex;
    gap:16px;
    align-items:flex-start;
    background:#fff;
    border:1px solid #E6EAF2;
    border-radius:14px;
    padding:18px;
}
.pss-page .integration-icon{
    min-width:38px;
    width:38px;
    height:38px;
    border-radius:10px;
    background:#FFF3E9;
    color:#F97316;
    display:flex;
    align-items:center;
    justify-content:center;
}
.pss-page .integration-card h4{
    color:#102B68;
    font-size:15px;
    font-weight:700;
    margin-bottom:4px;
}
.pss-page .integration-card p{
    margin:0;
    font-size:13px;
    color:#6B7280;
    line-height:1.7;
}
@media(max-width:991px){
    .pss-page .platform-container{
        grid-template-columns:1fr;
    }
    .pss-page .platform-content h2{
        font-size:38px;
    }
}
@media(max-width:768px){
    .pss-page .security-platform{
        padding:80px 0;
    }
    .pss-page .platform-container{
        padding:0 20px;
    }
    .pss-page .platform-grid{
        grid-template-columns:repeat(2,1fr);
    }
}
`;

const solutions = [
    {
        num: "01",
        icon: "fa-camera",
        iconClass: "orange",
        title: "CCTV & Video Surveillance",
        desc: "Sistem pengawasan video HD hingga 4K dengan AI analytics, face recognition, people counting, object detection, dan behavioral analysis.",
        tags: ["Hikvision", "Dahua", "Axis", "Hanwha"],
        tagClass: "",
    },
    {
        num: "02",
        icon: "fa-lock",
        iconClass: "blue",
        title: "Access Control System",
        desc: "Kendalikan akses ke setiap area dengan teknologi kartu, PIN, biometrik sidik jari, face recognition, hingga mobile credential.",
        tags: ["HID Global", "Suprema", "ZKTeco", "Honeywell"],
        tagClass: "blue-tags",
    },
    {
        num: "03",
        icon: "fa-triangle-exclamation",
        iconClass: "red",
        title: "Alarm & Intrusion Detection",
        desc: "Sistem deteksi intrusi dengan sensor gerak PIR, sensor pintu/jendela, vibration sensor, dan glass break detector.",
        tags: ["Bosch", "DSC", "Paradox", "Honeywell"],
        tagClass: "red-tags",
    },
    {
        num: "04",
        icon: "fa-door-open",
        iconClass: "green",
        title: "Intercom & Video Door Phone",
        desc: "Sistem komunikasi dua arah antar penghuni dan pengunjung dari video intercom sederhana hingga enterprise.",
        tags: ["Hikvision", "2N", "Aiphone", "Fermax"],
        tagClass: "green-tags",
    },
    {
        num: "05",
        icon: "fa-desktop",
        iconClass: "purple",
        title: "Video Management System (VMS)",
        desc: "Platform manajemen video terpusat yang mengkonsolidasikan ratusan kamera dari berbagai merek dalam satu antarmuka.",
        tags: ["Milestone", "Genetec", "Avigilon"],
        tagClass: "purple-tags",
    },
    {
        num: "06",
        icon: "fa-layer-group",
        iconClass: "yellow",
        title: "Integrated Security Command Center",
        desc: "Ruang kontrol keamanan terpadu yang menyatukan CCTV, access control, alarm, dan sistem lain dalam satu layar.",
        tags: ["Genetec", "Lenel", "Gallagher"],
        tagClass: "yellow-tags",
    },
];

const industries = [
    {
        icon: "fa-building-columns",
        title: "Perbankan & Keuangan",
        desc: "Pengamanan brankas, ATM, area teller, dan ruang data dengan standar keamanan tertinggi dan audit trail lengkap.",
        tags: ["ATM Surveillance", "Vault Security", "Anti-skimming"],
    },
    {
        icon: "fa-heart-pulse",
        title: "Healthcare & Rumah Sakit",
        desc: "Keamanan area neonatal, farmasi, kamar pasien, dan akses kontrol staf medis vs non-medis.",
        tags: ["Patient Wandering", "Baby Protection", "Drug Room Access"],
    },
    {
        icon: "fa-industry",
        title: "Manufaktur & Industri",
        desc: "Pengamanan zona produksi, gudang, dan asset tracking termasuk HSE monitoring dan deteksi pelanggaran safety.",
        tags: ["PPE Detection", "Perimeter Security", "Asset Tracking"],
    },
    {
        icon: "fa-cart-shopping",
        title: "Retail & Mall",
        desc: "Anti-shoplifting, analisis perilaku pelanggan, people counting, dan manajemen antrian.",
        tags: ["Anti-theft", "Heatmap", "Queue Mgmt"],
    },
    {
        icon: "fa-building",
        title: "Gedung & Perkantoran",
        desc: "Sistem keamanan gedung bertingkat terintegrasi untuk lobby, parkir, lift, dan area kerja.",
        tags: ["Visitor Management", "Lift Access", "Parking Security"],
    },
    {
        icon: "fa-server",
        title: "Data Center",
        desc: "Multi-layer physical security mulai dari biometric access, mantrap, hingga monitoring lingkungan 24/7.",
        tags: ["Biometric Mantrap", "Rack Lock", "Environment Monitor"],
    },
    {
        icon: "fa-bolt",
        title: "Energi & Infrastruktur",
        desc: "Pengamanan fasilitas pembangkit, tower, pipeline, dan infrastruktur kritis lainnya.",
        tags: ["Thermal Camera", "Perimeter Fence", "Remote Monitor"],
    },
    {
        icon: "fa-hotel",
        title: "Hotel & Hospitality",
        desc: "Sistem keamanan hotel terintegrasi mulai dari akses kamar, CCTV area publik, hingga emergency response.",
        tags: ["Room Key Card", "Guest Privacy", "Emergency Call"],
    },
];

const processes = [
    {
        num: "01",
        icon: "fa-solid fa-location-dot",
        title: "Site Survey & Risk Assessment",
        desc: "Survey fisik lokasi, pemetaan titik rawan, analisis risiko, dan kebutuhan cakupan kamera serta access point untuk desain sistem yang optimal.",
    },
    {
        num: "02",
        icon: "fa-regular fa-square",
        title: "Desain & Engineering",
        desc: "Perancangan layout kamera, titik access control, rute kabel, dan arsitektur sistem — dilengkapi drawing teknis dan bill of materials yang detail.",
    },
    {
        num: "03",
        icon: "fa-solid fa-wrench",
        title: "Instalasi & Konfigurasi",
        desc: "Pemasangan hardware oleh teknisi bersertifikat, konfigurasi sistem, integrasi antar subsistem, dan commissioning test sebelum handover ke klien.",
    },
    {
        num: "04",
        icon: "fa-solid fa-check",
        title: "Maintenance & Support",
        desc: "Program pemeliharaan preventif berkala, monitoring sistem 24/7, response cepat saat insiden, dan upgrade sistem sesuai perkembangan teknologi keamanan terbaru.",
    },
];

const integrations = [
    {
        icon: "fa-regular fa-eye",
        title: "Deteksi — CCTV & Sensor Alarm",
        desc: "Sistem mendeteksi aktivitas mencurigakan secara real-time dengan AI.",
    },
    {
        icon: "fa-solid fa-bolt",
        title: "Trigger — Respons Otomatis",
        desc: "Alarm berbunyi, pintu terkunci, notifikasi terkirim ke petugas & ponsel.",
    },
    {
        icon: "fa-solid fa-display",
        title: "Kendali — Command Center",
        desc: "Operator melihat feed CCTV, mengonfirmasi kejadian, dan mengoordinasi respons.",
    },
    {
        icon: "fa-regular fa-file",
        title: "Audit — Laporan & Forensik",
        desc: "Rekaman tersimpan di cloud, dapat diakses kapan pun untuk investigasi.",
    },
];

const features = [
    {
        icon: "fa-regular fa-eye",
        title: "Visibilitas Penuh 24/7",
        desc: "CCTV AI modern tidak hanya merekam — ia menganalisis, mendeteksi anomali, dan memberi alert otomatis saat ada aktivitas mencurigakan di mana pun.",
    },
    {
        icon: "fa-regular fa-lock",
        title: "Kontrol Akses Granular",
        desc: "Tentukan siapa yang bisa masuk ke mana, kapan, dan dengan otorisasi apa — dari pintu lobby hingga server room.",
    },
    {
        icon: "fa-regular fa-phone",
        title: "Respons Cepat & Terintegrasi",
        desc: "Sistem terintegrasi antara CCTV, alarm, dan access control memungkinkan respons otomatis dalam hitungan detik.",
    },
];

export default function Page() {
    return (
        <>
            <div className="pss-page">
                <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

                <section className="security-hero">
                    <img src="/images/it-solutions/physical-security-system.png" alt="Security System" className="bg-image" />
                    <div className="security-overlay"></div>

                    <div className="security-container">
                        <div className="security-left">
                            <div className="security-badge">
                                <i className="fa-solid fa-shield-halved"></i>
                                Physical Security System
                            </div>

                            <h1 className="security-title">
                                Amankan Aset &amp;
                                <span>Fasilitas Bisnis</span>
                                Anda 24/7
                            </h1>

                            <p className="security-desc">
                                PT. United Teknologi Integrasi menghadirkan solusi Security
                                System terintegrasi — CCTV, Access Control, Alarm System,
                                hingga Command Center — untuk melindungi orang, aset,
                                dan operasional bisnis Anda dari ancaman fisik.
                            </p>

                            <div className="security-buttons">
                                <a href="#" className="btn-primary">
                                    <i className="fa-regular fa-circle-check"></i>
                                    Security Assessment Gratis
                                </a>
                                <a href="#" className="btn-secondary">
                                    Lihat Solusi
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        <div className="security-right">
                            <div className="security-dashboard">
                                <div className="dashboard-header">
                                    <span>SECURITY COMMAND CENTER</span>
                                    <span className="monitoring">
                                        <i className="fa-solid fa-circle"></i>
                                        MONITORING
                                    </span>
                                </div>

                                <div className="camera-grid">
                                    <div className="camera-box">CAM-01 · LOBBY</div>
                                    <div className="camera-box active">CAM-04 · PARKING</div>
                                    <div className="camera-box">CAM-07 · SERVER ROOM</div>
                                    <div className="camera-box">CAM-12 · WAREHOUSE</div>
                                </div>

                                <div className="event-list">
                                    <div className="event-item">
                                        <span className="dot red"></span>
                                        Motion detected — Parking Area
                                    </div>
                                    <div className="event-item">
                                        <span className="dot yellow"></span>
                                        Tailgating alert — Gate 2
                                    </div>
                                    <div className="event-item">
                                        <span className="dot green"></span>
                                        Visitor access granted
                                    </div>
                                </div>

                                <div className="stats-row">
                                    <div className="stat-box">
                                        <h3>48</h3>
                                        <p>EVENTS</p>
                                    </div>
                                    <div className="stat-box">
                                        <h3>2</h3>
                                        <p>ALERTS TODAY</p>
                                    </div>
                                    <div className="stat-box">
                                        <h3>100%</h3>
                                        <p>COVERAGE</p>
                                    </div>
                                </div>

                                <div className="ai-detection">
                                    <i className="fa-solid fa-shield-halved"></i>
                                    <div>
                                        <strong>AI-Powered Detection</strong>
                                        <span>Face recognition &amp; anomaly alert</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="security-foundation">
                    <div className="foundation-container">
                        <div className="foundation-left">
                            <div className="risk-card">
                                <div className="risk-percent">62%</div>
                                <p className="risk-desc">
                                    Kejahatan fisik bisa dicegah dengan sistem keamanan yang tepat
                                </p>

                                <div className="risk-list">
                                    <div className="risk-item">
                                        <div className="risk-item-left">
                                            <i className="fa-regular fa-triangle-exclamation"></i>
                                            <span>Pencurian &amp; Vandalisme</span>
                                        </div>
                                        <strong>+23% 2024</strong>
                                    </div>
                                    <div className="risk-item">
                                        <div className="risk-item-left">
                                            <i className="fa-solid fa-user-lock"></i>
                                            <span>Akses Tidak Sah</span>
                                        </div>
                                        <strong>+41% 2024</strong>
                                    </div>
                                    <div className="risk-item">
                                        <div className="risk-item-left">
                                            <i className="fa-solid fa-clipboard-list"></i>
                                            <span>Tanpa Audit Trail</span>
                                        </div>
                                        <strong>78% perusahaan</strong>
                                    </div>
                                </div>

                                <div className="risk-stats">
                                    <div className="risk-stat">
                                        <h3>3x</h3>
                                        <p>Deterrence effect vs tanpa sistem</p>
                                    </div>
                                    <div className="risk-stat">
                                        <h3>90%</h3>
                                        <p>Insiden terselesaikan dengan rekaman CCTV</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="foundation-right">
                            <div className="section-label">— MENGAPA SECURITY SYSTEM</div>
                            <h2>Keamanan Fisik adalah Fondasi dari Segalanya</h2>
                            <p className="section-desc">
                                Keamanan digital tidak akan berarti jika akses fisik ke fasilitas dan aset Anda tidak terkontrol.
                                Investasi pada sistem keamanan fisik yang tepat adalah langkah pertama perlindungan bisnis menyeluruh.
                            </p>

                            {features.map((f) => (
                                <div key={f.title} className="feature-card">
                                    <div className="feature-icon">
                                        <i className={f.icon}></i>
                                    </div>
                                    <div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="security-solutions">
                    <div className="solution-container">
                        <div className="solution-header">
                            <span className="solution-label">— SOLUSI KAMI</span>
                            <h2>Proteksi Fisik Berlapis dari Satu Integrator</h2>
                            <p>
                                UTI menyediakan portofolio Security System fisik yang komprehensif —
                                dari surveillance hingga command center — semuanya terintegrasi dalam
                                satu platform manajemen.
                            </p>
                        </div>

                        <div className="solution-grid">
                            {solutions.map((s) => (
                                <div key={s.num} className="solution-card">
                                    <div className="solution-number">{s.num}</div>
                                    <div className={`solution-icon ${s.iconClass}`}>
                                        <i className={`fa-solid ${s.icon}`}></i>
                                    </div>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                    <div className={`solution-tags ${s.tagClass}`}>
                                        {s.tags.map((t) => (
                                            <span key={t}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="industry-section">
                    <div className="industry-container">
                        <div className="industry-header">
                            <span className="industry-label">— APLIKASI PER INDUSTRI</span>
                            <h2>Solusi Keamanan untuk Setiap Lingkungan</h2>
                            <p>
                                Setiap industri punya kebutuhan dan tantangan keamanan fisik yang berbeda.
                                UTI menghadirkan konfigurasi yang tepat untuk setiap lingkungan.
                            </p>
                        </div>

                        <div className="industry-grid">
                            {industries.map((ind) => (
                                <div key={ind.title} className="industry-card">
                                    <div className="industry-icon">
                                        <i className={`fa-solid ${ind.icon}`}></i>
                                    </div>
                                    <h3>{ind.title}</h3>
                                    <p>{ind.desc}</p>
                                    <div className="industry-tags">
                                        {ind.tags.map((t) => (
                                            <span key={t}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="security-process">
                    <div className="process-container">
                        <div className="process-header">
                            <span className="process-label">— CARA KERJA KAMI</span>
                            <h2>Dari Survey Lapangan hingga Sistem Aktif</h2>
                            <p>
                                Tim security engineer UTI yang berpengalaman mengelola seluruh proses
                                — dari asesmen risiko hingga pemeliharaan rutin — dengan standar
                                kualitas tertinggi.
                            </p>
                        </div>

                        <div className="process-grid">
                            {processes.map((p) => (
                                <div key={p.num} className="process-card">
                                    <div className="process-number">{p.num}</div>
                                    <div className="process-icon">
                                        <i className={p.icon}></i>
                                    </div>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="security-platform">
                    <div className="platform-container">
                        <div className="platform-diagram">
                            <div className="platform-center">
                                <div className="platform-circle">
                                    <i className="fa-solid fa-layer-group"></i>
                                </div>
                                <h4>
                                    Integrated Security
                                    <br />
                                    Management Platform
                                </h4>
                            </div>

                            <div className="platform-grid">
                                <div className="platform-item">
                                    <i className="fa-solid fa-camera"></i>
                                    <span>CCTV &amp; VMS</span>
                                </div>
                                <div className="platform-item">
                                    <i className="fa-solid fa-lock"></i>
                                    <span>Access Control</span>
                                </div>
                                <div className="platform-item">
                                    <i className="fa-solid fa-triangle-exclamation"></i>
                                    <span>Alarm System</span>
                                </div>
                                <div className="platform-item">
                                    <i className="fa-solid fa-phone"></i>
                                    <span>Intercom</span>
                                </div>
                                <div className="platform-item">
                                    <i className="fa-solid fa-mobile-screen"></i>
                                    <span>Mobile App</span>
                                </div>
                                <div className="platform-item">
                                    <i className="fa-solid fa-chart-column"></i>
                                    <span>Analytics</span>
                                </div>
                            </div>
                        </div>

                        <div className="platform-content">
                            <span className="platform-label">— SISTEM TERINTEGRASI</span>
                            <h2>Satu Platform, Semua Subsistem Keamanan</h2>
                            <p>
                                Kekuatan sesungguhnya dari Security System UTI adalah integrasinya
                                — semua subsistem saling berkomunikasi, memungkinkan respons otomatis
                                dan visibilitas menyeluruh dari satu konsol.
                            </p>

                            <div className="integration-list">
                                {integrations.map((item) => (
                                    <div key={item.title} className="integration-card">
                                        <div className="integration-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <CTAForm backgroundColor="#0A1A3A" brandColor="#0A1A3A" />
        </>
    );
}
