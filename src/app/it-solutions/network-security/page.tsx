import CTAForm from "../../../components/CTAForm";

export default function Page() {
    return (
        <><main className="flex min-h-screen flex-col">
            {/* Fonts and Styles - moved to a CSS module or global CSS in a real app */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

            {/* Hero Section */}
            <section className="network-security-hero relative min-h-[760px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('/images/it-solutions/network-security.png')` }}>
                <div className="hero-overlay absolute inset-0"></div>

                <div className="container relative z-[2] max-w-[1280px] mx-auto px-[30px] py-[120px]">
                    <div className="hero-content flex items-center justify-between gap-[60px] flex-col lg:flex-row text-center lg:text-left">

                        {/* LEFT */}
                        <div className="hero-left flex-1 max-w-[620px] lg:max-w-[620px]">
                            <span className="hero-tag text-[#d5e5ff] text-xs tracking-[2px] font-semibold uppercase">
                                IT SOLUTIONS • NETWORK & SECURITY
                            </span>

                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-extrabold my-5">
                                Amankan & Optimalkan
                                <span className="block text-[#7bb5ff]">Infrastruktur Jaringan</span>
                                Bisnis Anda
                            </h1>

                            <p className="text-[#dbe4ff] text-lg leading-[1.9] max-w-[580px] mx-auto lg:mx-0">
                                PT United Teknologi Integrasi menghadirkan solusi Network &
                                Security enterprise-grade dari routing dan switching hingga
                                firewall generasi terbaru untuk melindungi dan
                                mengakselerasi operasional bisnis Anda.
                            </p>

                            <div className="hero-buttons flex gap-[15px] mt-[35px] justify-center lg:justify-start">
                                <a href="#" className="btn-primary inline-flex items-center gap-[10px] bg-[#2b7fff] text-white no-underline px-[28px] py-[14px] rounded-[10px] font-semibold">
                                    <i className="fa-solid fa-arrow-right"></i>
                                    Mulai Konsultasi
                                </a>

                                <a href="#" className="btn-secondary inline-flex items-center text-white no-underline border border-white/25 px-[28px] py-[14px] rounded-[10px] font-semibold">
                                    Lihat Solusi Kami
                                </a>
                            </div>

                            <div className="hero-stats flex gap-[60px] mt-[55px] justify-center lg:justify-start flex-wrap">
                                <div className="stat-item">
                                    <h3 className="text-white text-[34px] font-extrabold m-0">20+</h3>
                                    <span className="text-[#c6d6ff] text-sm">Tahun Pengalaman</span>
                                </div>

                                <div className="stat-item">
                                    <h3 className="text-white text-[34px] font-extrabold m-0">500+</h3>
                                    <span className="text-[#c6d6ff] text-sm">Klien Enterprise</span>
                                </div>

                                <div className="stat-item">
                                    <h3 className="text-white text-[34px] font-extrabold m-0">24/7</h3>
                                    <span className="text-[#c6d6ff] text-sm">Dukungan Teknis</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="hero-right flex-1 flex justify-center">
                            <div className="network-card w-[480px] h-[520px] bg-white/10 border border-white/30 rounded-3xl relative max-w-[450px] md:max-w-[480px]">
                                <div className="card-header p-5 flex justify-end">
                                    <div className="status bg-white text-[#35c36c] text-xs px-3 py-2 rounded-[10px] flex gap-2 items-center">
                                        <i className="fa-solid fa-circle"></i>
                                        Network Secure
                                    </div>
                                </div>

                                <div className="network-center relative w-full h-[380px]">
                                    <div className="node node-top absolute top-[35px] left-1/2 -translate-x-1/2 w-[85px] h-12 bg-white rounded-[10px] border-2 border-[#4d7fff] flex items-center justify-center text-center text-[11px] font-bold text-[#234]">ROUTER</div>
                                    <div className="node node-left-top absolute top-[110px] left-[60px] w-[85px] h-12 bg-white rounded-[10px] border-2 border-[#4d7fff] flex items-center justify-center text-center text-[11px] font-bold text-[#234]">VPN</div>
                                    <div className="node node-right-top absolute top-[110px] right-[60px] w-[85px] h-12 bg-white rounded-[10px] border-2 border-[#4d7fff] flex items-center justify-center text-center text-[11px] font-bold text-[#234]">SERVER</div>
                                    <div className="node node-left-bottom absolute top-[220px] left-[60px] w-[85px] h-12 bg-white rounded-[10px] border-2 border-[#4d7fff] flex items-center justify-center text-center text-[11px] font-bold text-[#234]">ACCESS<br />POINT</div>
                                    <div className="node node-right-bottom absolute top-[220px] right-[60px] w-[85px] h-12 bg-white rounded-[10px] border-2 border-[#4d7fff] flex items-center justify-center text-center text-[11px] font-bold text-[#234]">SWITCH</div>
                                    <div className="node node-bottom absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[85px] h-12 bg-white rounded-[10px] border-2 border-[#4d7fff] flex items-center justify-center text-center text-[11px] font-bold text-[#234]">DEVICE<br />SECURE</div>

                                    <div className="firewall absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full bg-[#2858ff] text-white flex items-center justify-center text-xs font-bold">
                                        FIREWALL
                                    </div>
                                </div>

                                <div className="threat-box absolute -left-[10px] bottom-[25px] bg-white rounded-xl p-[14px]">
                                    <small className="block text-[#888]">Threats Blocked</small>
                                    <strong className="text-[#2563eb]">147 Today</strong>
                                </div>

                                <div className="uptime-box absolute -right-[10px] bottom-[25px] bg-white rounded-xl p-[14px]">
                                    <small className="block text-[#888]">Uptime</small>
                                    <strong className="text-[#ff6b35]">99.92%</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUSI KAMI */}
            <section className="network-solutions py-[120px] bg-white">
                <div className="container max-w-[1280px] mx-auto px-[30px]">
                    <div className="solutions-header grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[30px] lg:gap-[80px] items-center mb-[60px]">
                        <div className="header-left">
                            <span className="section-label inline-block bg-[#EEF2FF] text-[#2954FF] text-xs font-bold px-3 py-1.5 rounded-[20px] mb-[18px] tracking-[0.5px]">
                                SOLUSI KAMI
                            </span>

                            <h2 className="text-[#101828] text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-extrabold m-0 max-w-[700px]">
                                Perlindungan Menyeluruh untuk
                                <span className="block text-[#2954FF]">Setiap Lapis Jaringan</span>
                            </h2>
                        </div>

                        <div className="header-right">
                            <p className="text-[#667085] text-lg leading-[1.9] m-0">
                                Dari edge hingga core, UTI menyediakan solusi terintegrasi yang
                                mencakup seluruh aspek keamanan dan performa jaringan
                                enterprise Anda.
                            </p>
                        </div>
                    </div>

                    <div className="solutions-grid grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* CARD 1 */}
                        <div className="solution-card bg-white border border-[#E4E7EC] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                            <div className="icon-box w-[54px] h-[54px] rounded-[14px] bg-[#F2F4F7] flex items-center justify-center mb-6">
                                <i className="fa-solid fa-lock text-[22px] text-[#2954FF]"></i>
                            </div>

                            <h3 className="text-2xl font-bold text-[#101828] mb-4">Network Security</h3>

                            <p className="text-[#667085] leading-[1.8] mb-[22px]">
                                Proteksi menyeluruh dari ancaman siber dengan arsitektur keamanan
                                berlapis yang dirancang khusus untuk lingkungan enterprise.
                            </p>

                            <ul className="m-0 pl-[18px]">
                                <li className="text-[#2954FF] text-sm leading-8">Next-Generation Firewall (NGFW)</li>
                                <li className="text-[#2954FF] text-sm leading-8">Intrusion Detection & Prevention System (IDS/IPS)</li>
                                <li className="text-[#2954FF] text-sm leading-8">Enkripsi end-to-end & VPN tunneling</li>
                                <li className="text-[#2954FF] text-sm leading-8">Zero Trust Network Access (ZTNA)</li>
                            </ul>
                        </div>

                        {/* CARD 2 */}
                        <div className="solution-card bg-white border border-[#E4E7EC] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                            <div className="icon-box w-[54px] h-[54px] rounded-[14px] bg-[#F2F4F7] flex items-center justify-center mb-6">
                                <i className="fa-regular fa-circle text-[22px] text-[#2954FF]"></i>
                            </div>

                            <h3 className="text-2xl font-bold text-[#101828] mb-4">Cloud Security</h3>

                            <p className="text-[#667085] leading-[1.8] mb-[22px]">
                                Keamanan komprehensif untuk lingkungan cloud public, privat,
                                maupun hybrid dengan visibilitas dan kontrol penuh.
                            </p>

                            <ul className="m-0 pl-[18px]">
                                <li className="text-[#2954FF] text-sm leading-8">Cloud Access Security Broker (CASB)</li>
                                <li className="text-[#2954FF] text-sm leading-8">AI-powered threat detection & response</li>
                                <li className="text-[#2954FF] text-sm leading-8">Multi-cloud security posture management</li>
                                <li className="text-[#2954FF] text-sm leading-8">Secure SD-WAN integration</li>
                            </ul>
                        </div>

                        {/* CARD 3 */}
                        <div className="solution-card bg-white border border-[#E4E7EC] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                            <div className="icon-box w-[54px] h-[54px] rounded-[14px] bg-[#F2F4F7] flex items-center justify-center mb-6">
                                <i className="fa-solid fa-database text-[22px] text-[#2954FF]"></i>
                            </div>

                            <h3 className="text-2xl font-bold text-[#101828] mb-4">Data Protection</h3>

                            <p className="text-[#667085] leading-[1.8] mb-[22px]">
                                Safeguard aset data bisnis Anda dari ancaman internal maupun
                                eksternal dengan sistem backup, enkripsi, dan recovery enterprise.
                            </p>

                            <ul className="m-0 pl-[18px]">
                                <li className="text-[#2954FF] text-sm leading-8">Automated backup & disaster recovery</li>
                                <li className="text-[#2954FF] text-sm leading-8">Data Loss Prevention (DLP)</li>
                                <li className="text-[#2954FF] text-sm leading-8">Enkripsi at-rest & in-transit</li>
                                <li className="text-[#2954FF] text-sm leading-8">Compliance & audit trail management</li>
                            </ul>
                        </div>

                        {/* CARD 4 */}
                        <div className="solution-card bg-white border border-[#E4E7EC] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                            <div className="icon-box w-[54px] h-[54px] rounded-[14px] bg-[#F2F4F7] flex items-center justify-center mb-6">
                                <i className="fa-solid fa-wave-square text-[22px] text-[#2954FF]"></i>
                            </div>

                            <h3 className="text-2xl font-bold text-[#101828] mb-4">Network Optimization</h3>

                            <p className="text-[#667085] leading-[1.8] mb-[22px]">
                                Desain dan implementasi arsitektur jaringan yang efisien,
                                scalable, dan siap mendukung pertumbuhan bisnis Anda di masa depan.
                            </p>

                            <ul className="m-0 pl-[18px]">
                                <li className="text-[#2954FF] text-sm leading-8">Network design & architecture consulting</li>
                                <li className="text-[#2954FF] text-sm leading-8">Performance monitoring & management</li>
                                <li className="text-[#2954FF] text-sm leading-8">QoS & traffic shaping</li>
                                <li className="text-[#2954FF] text-sm leading-8">Network automation & orchestration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* HARDWARE SECTION */}
            <section className="hardware-section py-[120px] bg-[#F8FAFC]">
                <div className="container max-w-[1280px] mx-auto px-[30px]">
                    <div className="hardware-header grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[30px] lg:gap-[80px] items-center mb-[60px]">
                        <div className="hardware-title pl-0 lg:pl-[30px]">
                            <span className="section-label inline-block bg-[#EEF2FF] text-[#2954FF] text-xs font-bold px-3 py-1.5 rounded-[20px] mb-[18px] tracking-[0.5px]">
                                PRODUK & HARDWARE
                            </span>

                            <h2 className="text-[#101828] text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-extrabold m-0 max-w-[700px]">
                                Solusi Hardware
                                <span className="block text-[#2954FF]">Terpercaya & Bersertifikat</span>
                            </h2>
                        </div>

                        <div className="hardware-desc">
                            <p className="text-[#667085] text-lg leading-[1.9]">
                                UTI adalah mitra resmi vendor-vendor networking terkemuka dunia,
                                memastikan kualitas dan dukungan purna jual yang optimal.
                            </p>
                        </div>
                    </div>

                    <div className="hardware-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
                        <div className="hardware-card bg-white border border-[#E4E7EC] rounded-2xl p-[30px_24px] text-center transition-all duration-300 hover:-translate-y-1">
                            <div className="hardware-icon w-[58px] h-[58px] mx-auto rounded-full bg-[#EEF4FF] flex items-center justify-center mb-5">
                                <i className="fa-solid fa-globe text-[22px] text-[#315EFB]"></i>
                            </div>

                            <h3 className="text-lg font-bold mb-3 text-[#16213E]">Router</h3>

                            <p className="text-sm leading-[1.8] text-[#667085] mb-[18px]">
                                Perangkat routing enterprise grade untuk konektivitas jaringan yang handal dan efisien
                            </p>

                            <span className="hardware-tag inline-block px-[14px] py-[7px] bg-[#F2F4F7] rounded-[30px] text-xs font-semibold text-[#315EFB]">Core Network</span>
                        </div>

                        <div className="hardware-card bg-white border border-[#E4E7EC] rounded-2xl p-[30px_24px] text-center transition-all duration-300 hover:-translate-y-1">
                            <div className="hardware-icon w-[58px] h-[58px] mx-auto rounded-full bg-[#EEF4FF] flex items-center justify-center mb-5">
                                <i className="fa-solid fa-briefcase text-[22px] text-[#315EFB]"></i>
                            </div>

                            <h3 className="text-lg font-bold mb-3 text-[#16213E]">Switch</h3>

                            <p className="text-sm leading-[1.8] text-[#667085] mb-[18px]">
                                Managed switch L2/L3 dengan kapasitas throughput tinggi untuk data center dan enterprise
                            </p>

                            <span className="hardware-tag inline-block px-[14px] py-[7px] bg-[#F2F4F7] rounded-[30px] text-xs font-semibold text-[#315EFB]">Switching</span>
                        </div>

                        <div className="hardware-card bg-white border border-[#E4E7EC] rounded-2xl p-[30px_24px] text-center transition-all duration-300 hover:-translate-y-1">
                            <div className="hardware-icon w-[58px] h-[58px] mx-auto rounded-full bg-[#EEF4FF] flex items-center justify-center mb-5">
                                <i className="fa-solid fa-wifi text-[22px] text-[#315EFB]"></i>
                            </div>

                            <h3 className="text-lg font-bold mb-3 text-[#16213E]">Access Point</h3>

                            <p className="text-sm leading-[1.8] text-[#667085] mb-[18px]">
                                Wireless enterprise dengan kapasitas besar, coverage optimal, dan keamanan WPA3 enterprise
                            </p>

                            <span className="hardware-tag inline-block px-[14px] py-[7px] bg-[#F2F4F7] rounded-[30px] text-xs font-semibold text-[#315EFB]">Wireless</span>
                        </div>

                        <div className="hardware-card bg-white border border-[#E4E7EC] rounded-2xl p-[30px_24px] text-center transition-all duration-300 hover:-translate-y-1">
                            <div className="hardware-icon w-[58px] h-[58px] mx-auto rounded-full bg-[#EEF4FF] flex items-center justify-center mb-5">
                                <i className="fa-solid fa-shield-halved text-[22px] text-[#315EFB]"></i>
                            </div>

                            <h3 className="text-lg font-bold mb-3 text-[#16213E]">Firewall</h3>

                            <p className="text-sm leading-[1.8] text-[#667085] mb-[18px]">
                                Next-generation firewall dengan deep packet inspection, SSL inspection, dan threat intelligence
                            </p>

                            <span className="hardware-tag inline-block px-[14px] py-[7px] bg-[#F2F4F7] rounded-[30px] text-xs font-semibold text-[#315EFB]">Security</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="process-section py-[120px] bg-white">
                <div className="container max-w-[1280px] mx-auto px-[30px]">
                    <div className="process-header text-center mb-[90px]">
                        <span className="section-label inline-block bg-[#EEF2FF] text-[#2954FF] text-xs font-bold px-3 py-1.5 rounded-[20px] mb-[18px] tracking-[0.5px]">
                            CARA KERJA KAMI
                        </span>

                        <h2 className="text-[#101828] text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-extrabold m-0 mt-[18px]">
                            Dari Konsultasi Hingga
                            <span className="block text-[#2954FF]">Implementasi Penuh</span>
                        </h2>
                    </div>

                    <div className="process-timeline relative grid grid-cols-1 lg:grid-cols-4 gap-[50px] lg:gap-[30px]">
                        <div className="timeline-line absolute top-[20px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#315EFB] to-[#69B7FF] hidden lg:block"></div>

                        <div className="process-item text-center relative z-[2]">
                            <div className="step-circle w-[42px] h-[42px] rounded-full bg-white border-2 border-[#315EFB] flex items-center justify-center mx-auto mb-[25px] text-[#315EFB] font-bold text-sm">
                                01
                            </div>

                            <h3 className="text-lg font-bold text-[#16213E] mb-[14px]">Konsultasi & Assessment</h3>

                            <p className="text-sm leading-[1.8] text-[#667085] max-w-[230px] mx-auto">
                                Tim ahli kami menganalisis kondisi infrastruktur dan kebutuhan keamanan jaringan bisnis Anda secara menyeluruh.
                            </p>
                        </div>

                        <div className="process-item text-center relative z-[2]">
                            <div className="step-circle w-[42px] h-[42px] rounded-full bg-white border-2 border-[#315EFB] flex items-center justify-center mx-auto mb-[25px] text-[#315EFB] font-bold text-sm">
                                02
                            </div>

                            <h3 className="text-lg font-bold text-[#16213E] mb-[14px]">Desain Solusi</h3>

                            <p className="text-sm leading-[1.8] text-[#667085] max-w-[230px] mx-auto">
                                Merancang arsitektur jaringan dan keamanan yang optimal, terukur, dan sesuai dengan anggaran Anda.
                            </p>
                        </div>

                        <div className="process-item text-center relative z-[2]">
                            <div className="step-circle w-[42px] h-[42px] rounded-full bg-white border-2 border-[#315EFB] flex items-center justify-center mx-auto mb-[25px] text-[#315EFB] font-bold text-sm">
                                03
                            </div>

                            <h3 className="text-lg font-bold text-[#16213E] mb-[14px]">Implementasi</h3>

                            <p className="text-sm leading-[1.8] text-[#667085] max-w-[230px] mx-auto">
                                Proses deployment terstruktur dengan zero downtime, memastikan transisi yang mulus tanpa mengganggu operasional.
                            </p>
                        </div>

                        <div className="process-item text-center relative z-[2]">
                            <div className="step-circle w-[42px] h-[42px] rounded-full bg-white border-2 border-[#315EFB] flex items-center justify-center mx-auto mb-[25px] text-[#315EFB] font-bold text-sm">
                                04
                            </div>

                            <h3 className="text-lg font-bold text-[#16213E] mb-[14px]">Managed Support</h3>

                            <p className="text-sm leading-[1.8] text-[#667085] max-w-[230px] mx-auto">
                                Monitoring proaktif, maintenance rutin, dan dukungan teknis 24/7 untuk memastikan performa optimal jangka panjang.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY UTI SECTION */}
            <section className="why-uti bg-[#173CA8] py-[120px] overflow-hidden">
                <div className="container max-w-[1280px] mx-auto px-[30px]">
                    <div className="why-header max-w-[700px] mb-[60px]">
                        <span className="section-label inline-block bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-[20px] mb-[18px] tracking-[0.5px]">
                            KEUNGGULAN UTI
                        </span>

                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-extrabold m-0 mt-[18px] mb-5">
                            Mengapa Ratusan Perusahaan Mempercayai UTI
                        </h2>

                        <p className="text-white/75 text-lg leading-[1.8] max-w-[600px]">
                            Sejak 2005, UTI telah melayani ratusan klien enterprise di berbagai
                            industri di Indonesia dengan dedikasi penuh.
                        </p>
                    </div>

                    <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
                        <div className="why-card bg-white/10 border border-white/10 rounded-[18px] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                            <div className="why-icon w-[52px] h-[52px] rounded-xl bg-white/10 flex items-center justify-center mb-[22px]">
                                <i className="fa-regular fa-shield text-white text-xl"></i>
                            </div>

                            <h3 className="text-white text-[22px] font-bold mb-[14px]">Certified Engineers</h3>

                            <p className="text-white/75 text-sm leading-[1.9] m-0">
                                Tim insinyur bersertifikat internasional — Cisco
                                CCNP/CCIE, Fortinet NSE, Palo Alto PCNSE — siap
                                menangani kebutuhan teknis paling kompleks
                                sekalipun.
                            </p>
                        </div>

                        <div className="why-card bg-white/10 border border-white/10 rounded-[18px] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                            <div className="why-icon w-[52px] h-[52px] rounded-xl bg-white/10 flex items-center justify-center mb-[22px]">
                                <i className="fa-regular fa-clock text-white text-xl"></i>
                            </div>

                            <h3 className="text-white text-[22px] font-bold mb-[14px]">24/7 Proactive Monitoring</h3>

                            <p className="text-white/75 text-sm leading-[1.9] m-0">
                                Network Operations Center (NOC) aktif memantau
                                infrastruktur Anda sepanjang waktu. Ancaman
                                terdeteksi dan ditangani sebelum berdampak pada
                                bisnis.
                            </p>
                        </div>

                        <div className="why-card bg-white/10 border border-white/10 rounded-[18px] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                            <div className="why-icon w-[52px] h-[52px] rounded-xl bg-white/10 flex items-center justify-center mb-[22px]">
                                <i className="fa-solid fa-wave-square text-white text-xl"></i>
                            </div>

                            <h3 className="text-white text-[22px] font-bold mb-[14px]">Proven Performance</h3>

                            <p className="text-white/75 text-sm leading-[1.9] m-0">
                                Rekam jejak lebih dari 500 proyek network & security
                                sukses di berbagai industri — manufaktur,
                                perbankan, healthcare, retail, dan telekomunikasi.
                            </p>
                        </div>

                        <div className="why-card bg-white/10 border border-white/10 rounded-[18px] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                            <div className="why-icon w-[52px] h-[52px] rounded-xl bg-white/10 flex items-center justify-center mb-[22px]">
                                <i className="fa-solid fa-users text-white text-xl"></i>
                            </div>

                            <h3 className="text-white text-[22px] font-bold mb-[14px]">Vendor-Agnostic Approach</h3>

                            <p className="text-white/75 text-sm leading-[1.9] m-0">
                                Sebagai authorized partner dari berbagai brand
                                terkemuka — Cisco, Fortinet, Palo Alto, Juniper, HPE
                                Aruba — kami merekomendasikan solusi terbaik,
                                bukan yang paling mahal.
                            </p>
                        </div>

                        <div className="why-card bg-white/10 border border-white/10 rounded-[18px] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                            <div className="why-icon w-[52px] h-[52px] rounded-xl bg-white/10 flex items-center justify-center mb-[22px]">
                                <i className="fa-regular fa-file-lines text-white text-xl"></i>
                            </div>

                            <h3 className="text-white text-[22px] font-bold mb-[14px]">Compliance Ready</h3>

                            <p className="text-white/75 text-sm leading-[1.9] m-0">
                                Solusi kami dirancang mengikuti standar kepatuhan
                                internasional — ISO 27001, PCI-DSS, NIST —
                                membantu bisnis Anda memenuhi regulasi yang
                                berlaku.
                            </p>
                        </div>

                        <div className="why-card bg-white/10 border border-white/10 rounded-[18px] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                            <div className="why-icon w-[52px] h-[52px] rounded-xl bg-white/10 flex items-center justify-center mb-[22px]">
                                <i className="fa-solid fa-location-dot text-white text-xl"></i>
                            </div>

                            <h3 className="text-white text-[22px] font-bold mb-[14px]">Nationwide Coverage</h3>

                            <p className="text-white/75 text-sm leading-[1.9] m-0">
                                Dengan kantor di Jakarta Pusat, Pulo Gadung, dan
                                Cikarang, kami memberikan dukungan on-site yang
                                cepat di seluruh area Jabodetabek dan sekitarnya.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <CTAForm backgroundColor="#173CA8" brandColor="#173CA8" />
        </>
    );
}