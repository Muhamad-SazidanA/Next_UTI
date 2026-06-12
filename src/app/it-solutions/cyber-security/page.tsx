import CTAForm from "../../../components/CTAForm";

export default function Page() {
    return (
        <><main className="flex min-h-screen flex-col font-['Inter',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-[720px] bg-cover bg-center bg-no-repeat flex items-center justify-between px-20 max-md:px-6 max-md:flex-col max-md:gap-12 max-md:items-start overflow-hidden"
                style={{ backgroundImage: `url('/images/it-solutions/cyber-security.png')` }}>
                <div className="max-w-[580px]">
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/20 text-[#A9C8FF] text-[13px] font-medium backdrop-blur-md mb-6">
                        <i className="fa-solid fa-circle text-[10px] text-[#32D583]"></i>
                        Cyber Security Solutions
                    </div>
                    <h1 className="text-white text-[58px] max-md:text-[42px] font-extrabold leading-[1.05] mb-6">
                        Lindungi Bisnis dari
                        <span className="text-[#4DE2D4]"> Ancaman Siber</span>
                        yang Terus Berkembang
                    </h1>
                    <p className="text-white/75 text-[17px] leading-[1.8] max-w-[520px] mb-9">
                        PT. United Teknologi Integrasi menghadirkan solusi Cyber Security end-to-end —
                        dari Data Loss Prevention, Privilege Access Management,
                        hingga Mobile Device Management untuk menjaga aset digital
                        Anda tetap aman 24/7.
                    </p>
                    <div className="flex gap-3.5 mb-14 max-md:flex-wrap">
                        <a href="#" className="flex items-center gap-2.5 bg-white text-[#0B2D82] px-6 py-3.5 rounded-xl text-sm font-semibold no-underline">
                            <i className="fa-solid fa-phone"></i>
                            Konsultasi Gratis
                        </a>
                        <a href="#" className="flex items-center gap-2.5 text-white border border-white/25 px-6 py-3.5 rounded-xl text-sm font-medium no-underline">
                            Lihat Solusi
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="flex gap-12 max-md:gap-6 max-md:flex-wrap">
                        <div>
                            <h3 className="text-white text-[34px] font-extrabold">99.8%</h3>
                            <p className="text-white/65 text-[13px] mt-1.5">Threat Detection Rate</p>
                        </div>
                        <div>
                            <h3 className="text-white text-[34px] font-extrabold">&lt;1 Jam</h3>
                            <p className="text-white/65 text-[13px] mt-1.5">Response Time</p>
                        </div>
                        <div>
                            <h3 className="text-white text-[34px] font-extrabold">500+</h3>
                            <p className="text-white/65 text-[13px] mt-1.5">Endpoint Protected</p>
                        </div>
                    </div>
                </div>

                <div className="w-[500px] max-md:w-full max-md:max-w-[550px]">
                    <div className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-md">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-white/55 text-[11px] tracking-[1.5px] font-semibold">THREAT MONITOR</h4>
                            <div className="flex items-center gap-1.5 text-[#5BE39B] text-[11px] font-semibold">
                                <i className="fa-solid fa-circle text-[8px]"></i>
                                LIVE
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            {[
                                { icon: "fa-bug", title: "Ransomware Attempt", desc: "Endpoint · 192.168.1.42 · 2 min ago", status: "BLOCKED", statusClass: "bg-emerald-500/20 text-[#4ADE80]" },
                                { icon: "fa-user-shield", title: "Suspicious Privilege Escalation", desc: "PAM · admin@corp.com · 5 min ago", status: "MONITORED", statusClass: "bg-amber-500/20 text-[#FBBF24]" },
                                { icon: "fa-shield-halved", title: "CVE-2025-1234 Vulnerability", desc: "Server #3 · Critical · 12 min ago", status: "PATCHED", statusClass: "bg-blue-500/20 text-[#60A5FA]" },
                                { icon: "fa-lock", title: "Data Exfiltration Blocked", desc: "DLP · USB Device · 18 min ago", status: "SECURED", statusClass: "bg-emerald-500/20 text-[#4ADE80]" }
                            ].map((threat, idx) => (
                                <div key={idx} className="bg-white/10 border border-white/10 rounded-xl p-3.5 flex justify-between items-center">
                                    <div className="flex gap-3">
                                        <div className="text-[#6EE7B7] mt-0.5">
                                            <i className={`fa-solid ${threat.icon}`}></i>
                                        </div>
                                        <div>
                                            <h5 className="text-white text-[13px] mb-1">{threat.title}</h5>
                                            <p className="text-white/45 text-[11px]">{threat.desc}</p>
                                        </div>
                                    </div>
                                    <div className={`${threat.statusClass} px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.5px]`}>
                                        {threat.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 bg-white/10 rounded-2xl p-4 flex items-center gap-4">
                            <div className="w-[58px] h-[58px] rounded-full bg-emerald-500/20 flex items-center justify-center text-[#4ADE80] text-sm font-semibold">
                                96<br />/100
                            </div>
                            <div>
                                <h4 className="text-white text-sm mb-1">Security Score — Excellent</h4>
                                <p className="text-white/50 text-[11px] leading-relaxed">
                                    Sistem aktif melindungi & memonitor secara aktif.
                                    Zero breach dalam 365 hari terakhir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Threat Landscape Section */}
            <section className="bg-[#F5F7FB] py-28 px-20 max-md:px-6 max-md:py-20">
                <div className="max-w-[1300px] mx-auto grid grid-cols-[1.2fr_0.9fr] gap-16 max-lg:grid-cols-1">
                    <div>
                        <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[1.8px] text-[#2563EB] mb-4">
                            <span className="w-[18px] h-[2px] bg-[#2563EB]"></span>
                            LANSKAP ANCAMAN
                        </div>
                        <h2 className="text-[56px] max-md:text-[34px] leading-[1.08] font-extrabold text-[#112868] max-w-[680px]">
                            Ancaman Siber Makin
                            Canggih, Proteksi Anda
                            Harus <span className="text-[#2563EB]">Lebih Dulu</span>
                        </h2>
                        <p className="mt-5 max-w-[640px] text-[#667085] text-lg leading-relaxed">
                            Serangan siber tidak memilih korban berdasarkan ukuran bisnis.
                            Justru perusahaan yang tidak siap menjadi target utama peretas modern.
                        </p>
                        <div className="mt-10 flex flex-col gap-4">
                            {[
                                { icon: "fa-triangle-exclamation", title: "Ransomware & Data Breach", desc: "Serangan ransomware meningkat 150% setiap tahun. Data perusahaan Anda bernilai jutaan dolar bagi peretas yang terorganisir." },
                                { icon: "fa-user-shield", title: "Insider Threat & Privilege Abuse", desc: "60% kebocoran data berasal dari dalam organisasi — baik disengaja maupun akibat kelalaian manajemen akses berlebih." },
                                { icon: "fa-mobile-screen-button", title: "Mobile & Remote Work Risk", desc: "Proliferasi BYOD dan remote work memperluas attack surface secara drastis tanpa kontrol keamanan yang memadai." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-[#EEF2FF] border border-[#D9E1FF] rounded-2xl p-4 flex gap-3.5">
                                    <div className="w-[42px] h-[42px] min-w-[42px] flex items-center justify-center rounded-xl bg-[#F7FAFF] border border-[#C9D8FF] text-[#2563EB]">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>
                                    <div>
                                        <h4 className="text-base text-[#112868] mb-2 font-bold">{item.title}</h4>
                                        <p className="text-sm leading-relaxed text-[#667085]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                        <div className="bg-white rounded-2xl p-6 min-h-[150px] border border-[#FFD4D4]">
                            <h3 className="text-[42px] font-extrabold mb-3 text-[#E53935]">$4.45M</h3>
                            <p className="text-[#667085] leading-relaxed text-sm">Rata-rata biaya data breach global 2024 (IBM Report)</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 min-h-[150px] border border-[#FFE0A6]">
                            <h3 className="text-[42px] font-extrabold mb-3 text-[#D97706]">277</h3>
                            <p className="text-[#667085] leading-relaxed text-sm">Hari rata-rata waktu deteksi & respons insiden siber</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 min-h-[150px] border border-[#CFE1FF]">
                            <h3 className="text-[42px] font-extrabold mb-3 text-[#2563EB]">82%</h3>
                            <p className="text-[#667085] leading-relaxed text-sm">Insiden melibatkan faktor human error atau credential theft</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 min-h-[150px] border border-[#C8F1D6]">
                            <h3 className="text-[42px] font-extrabold mb-3 text-[#16A34A]">99.8%</h3>
                            <p className="text-[#667085] leading-relaxed text-sm">Tingkat deteksi ancaman dengan solusi terintegrasi UTI</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Solutions Section */}
            <section className="bg-[#F5F7FB] py-28 px-20 max-md:px-6 max-md:py-20">
                <div className="max-w-[1300px] mx-auto">
                    <div className="flex items-center gap-2.5 text-[#2563EB] text-[11px] font-bold tracking-[1.8px] mb-4">
                        <span className="w-[18px] h-[2px] bg-[#2563EB]"></span>
                        SOLUSI KAMI
                    </div>
                    <h2 className="text-[58px] max-md:text-[40px] font-extrabold leading-[1.08] text-[#112868]">
                        Proteksi Berlapis dari
                        <span className="text-[#2563EB]"> Berbagai</span><br />
                        <span className="text-[#2563EB]">Vektor Serangan</span>
                    </h2>
                    <p className="max-w-[620px] mt-5 text-[#667085] leading-relaxed text-[17px]">
                        UTI menyediakan portofolio Cyber Security komprehensif yang mencakup
                        seluruh lapisan perlindungan digital bisnis Anda — dari perimeter hingga data core.
                    </p>
                    <div className="mt-14 grid grid-cols-3 gap-5 max-xl:grid-cols-2 max-md:grid-cols-1">
                        {[
                            { num: "01 — DLP", icon: "fa-shield-halved", title: "Data Loss Prevention (DLP)", desc: "Cegah kebocoran data sensitif melalui email, USB, cloud storage, maupun web upload. DLP memastikan informasi kritis tidak keluar tanpa otorisasi dari sistem Anda.", tags: ["Forcepoint DLP", "Symantec DLP", "Microsoft Purview"], color: "dlp", borderColor: "#18D4C4" },
                            { num: "02 — PAM", icon: "fa-user-shield", title: "Privilege Access Management (PAM)", desc: "Kontrol dan monitor akses akun privileged secara granular. Hindari penyalahgunaan hak admin dengan session recording, just-in-time access, dan zero-trust enforcement.", tags: ["CyberArk", "BeyondTrust", "Delinea"], color: "pam", borderColor: "#4C6FFF" },
                            { num: "03 — NAC", icon: "fa-server", title: "Network Access Control (NAC)", desc: "Pastikan hanya perangkat yang sesuai kebijakan yang bisa terhubung ke jaringan. NAC memberikan visibilitas penuh atas semua endpoint dan menegakkan policy compliance otomatis.", tags: ["Cisco ISE", "Forescout", "Aruba ClearPass"], color: "nac", borderColor: "#FF4D4F" },
                            { num: "04 — EMAIL SEC", icon: "fa-envelope", title: "Mail Protection & Anti-Phishing", desc: "Blokir phishing, spam, malware, dan BEC sebelum mencapai inbox. Proteksi email gateway dengan analisis AI dan sandboxing attachment yang canggih dan real-time.", tags: ["Proofpoint", "Mimecast", "Barracuda"], color: "email", borderColor: "#F59E0B" },
                            { num: "05 — MDM", icon: "fa-mobile-screen-button", title: "Mobile Device Management (MDM)", desc: "Kelola dan amankan seluruh perangkat mobile karyawan dari satu konsol. Terapkan kebijakan keamanan, enkripsi, remote wipe, dan app management untuk BYOD maupun corporate device.", tags: ["Microsoft Intune", "Workspace ONE", "Jamf"], color: "mdm", borderColor: "#A855F7" },
                            { num: "06 — VA/PENTEST", icon: "fa-magnifying-glass", title: "Vulnerability Assessment & Pentest", desc: "Temukan celah keamanan sebelum peretas menemukannya. Tim engineer UTI melakukan asesmen menyeluruh, penetration testing, dan memberikan remediation roadmap yang actionable.", tags: ["Tenable Nessus", "Rapid7", "Manual Pentest"], color: "va", borderColor: "#22C55E" }
                        ].map((sol, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-5 min-h-[315px] border border-[#E6EAF5] transition-all hover:-translate-y-1.5" style={{ borderTop: `3px solid ${sol.borderColor}` }}>
                                <div className="text-[11px] font-bold tracking-[1.5px] mb-5" style={{ color: sol.borderColor }}>{sol.num}</div>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-lg" style={{ background: idx === 0 ? '#E8FFFC' : idx === 1 ? '#EEF2FF' : idx === 2 ? '#FFF1F1' : idx === 3 ? '#FFF8E8' : idx === 4 ? '#F5EDFF' : '#ECFFF3', color: sol.borderColor }}>
                                    <i className={`fa-solid ${sol.icon}`}></i>
                                </div>
                                <h3 className="text-[19px] font-bold text-[#112868] leading-tight mb-3.5">{sol.title}</h3>
                                <p className="text-[#667085] text-sm leading-relaxed mb-5">{sol.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {sol.tags.map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1.5 rounded-full text-[11px] font-semibold" style={{ background: idx === 0 ? '#E8FFFC' : idx === 1 ? '#EEF2FF' : idx === 2 ? '#FFF1F1' : idx === 3 ? '#FFF8E8' : idx === 4 ? '#F5EDFF' : '#ECFFF3', color: sol.borderColor }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Defense in Depth Section */}
            <section className="bg-[#F5F7FB] py-28 px-20 max-md:px-6 max-md:py-20">
                <div className="max-w-[1300px] mx-auto grid grid-cols-[1.05fr_0.95fr] gap-16 max-lg:grid-cols-1">
                    <div>
                        <div className="flex items-center gap-2.5 text-[#2563EB] text-[11px] font-bold tracking-[1.8px] mb-4">
                            <span className="w-[18px] h-[2px] bg-[#2563EB]"></span>
                            DEFENSE IN DEPTH
                        </div>
                        <h2 className="text-[50px] max-md:text-[40px] leading-[1.08] font-extrabold text-[#112868]">
                            Perlindungan Berlapis, <br />
                            Bukan <span className="text-[#2563EB]">Satu Titik</span>
                        </h2>
                        <p className="mt-5 max-w-[620px] text-[#667085] text-[17px] leading-relaxed">
                            Pendekatan UTI menggunakan metodologi Defense in Depth —
                            membangun multiple layer perlindungan sehingga jika satu lapisan
                            ditembus, lapisan berikutnya tetap melindungi aset bisnis Anda.
                        </p>
                        <div className="mt-10 flex flex-col gap-3">
                            {[
                                { num: "1", title: "Perimeter Security", desc: "NGFW, IPS/IDS, dan web filtering memblokir ancaman sebelum masuk ke jaringan internal perusahaan Anda." },
                                { num: "2", title: "Network Segmentation & NAC", desc: "Micro-segmentation memastikan lateral movement dibatasi — satu perangkat yang terkompromi tidak bisa menyebar bebas." },
                                { num: "3", title: "Identity & Access Control", desc: "PAM, MFA, dan zero-trust access policy memastikan hanya user terverifikasi dengan hak yang tepat mengakses resource." },
                                { num: "4", title: "Data Protection", desc: "DLP, enkripsi end-to-end, dan rights management menjaga data tetap aman bahkan jika layer sebelumnya ditembus." },
                                { num: "5", title: "Detection & Response (SOC)", desc: "SIEM, threat hunting, dan incident response plan memastikan setiap anomali terdeteksi dan direspons dalam hitungan menit." }
                            ].map((layer) => (
                                <div key={layer.num} className="bg-[#F8F7FF] border border-[#E4DEFF] rounded-2xl p-5 flex gap-3.5">
                                    <div className="w-9 h-9 min-w-9 bg-[#0F2E7A] text-white rounded-full flex items-center justify-center text-sm font-bold">{layer.num}</div>
                                    <div>
                                        <h4 className="text-[#112868] text-lg mb-2 font-bold">{layer.title}</h4>
                                        <p className="text-[#667085] text-sm leading-relaxed">{layer.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#EEF5FF] border border-[#CFE0FF] rounded-2xl p-6">
                            <div className="text-center text-[#8A98B5] text-[11px] tracking-[2px] font-bold mb-5">DEFENSE LAYER ARCHITECTURE</div>
                            {[
                                { left: "Perimeter Defense", leftIcon: "fa-globe", right: "NGFW · IPS/IDS · WAF", rightSpan: "Active" },
                                { left: "Network Segmentation", leftIcon: "fa-server", right: "NAC · Micro-segment", rightSpan: "Active" },
                                { left: "Identity & Access", leftIcon: "fa-user-shield", right: "PAM · MFA · Zero-Trust", rightSpan: "Active" },
                                { left: "Endpoint & Email", leftIcon: "fa-desktop", right: "MDM · DLP · Mail Protect", rightSpan: "Active" }
                            ].map((arch, idx) => (
                                <div key={idx} className="bg-white border border-[#D6E4FF] rounded-xl p-3.5 flex justify-between items-center mb-2.5 max-md:flex-col max-md:items-start max-md:gap-2.5">
                                    <div className="flex items-center gap-3 text-[#112868] text-sm font-bold">
                                        <i className={`fa-solid ${arch.leftIcon} text-[#6B7280]`}></i>
                                        {arch.left}
                                    </div>
                                    <div className="flex items-center gap-3.5 text-[#667085] text-xs">
                                        {arch.right}
                                        <span className="bg-[#DDF7EA] text-[#16A34A] px-2.5 py-1 rounded-full text-[11px] font-bold">{arch.rightSpan}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="bg-[#0F2E7A] rounded-xl p-3.5 flex justify-between items-center mb-0 max-md:flex-col max-md:items-start max-md:gap-2.5">
                                <div className="flex items-center gap-3 text-white text-sm font-bold">
                                    <i className="fa-solid fa-shield text-white"></i>
                                    Data Core — Protected
                                </div>
                                <div className="flex items-center gap-3.5 text-white/70 text-xs">
                                    Encryption · Backup · DR
                                    <span className="bg-[#0EA5A4] text-white px-2.5 py-1 rounded-full text-[11px] font-bold">SECURE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NIST Section */}
            <section className="relative bg-[#0C2A78] py-32 px-20 max-md:px-6 max-md:py-24 overflow-hidden"
                style={{
                    background: "radial-gradient(circle at top left, rgba(38,91,255,.18), transparent 35%), radial-gradient(circle at bottom right, rgba(0,209,255,.12), transparent 35%), #0C2A78"
                }}>
                <div className="max-w-[1300px] mx-auto relative z-10">
                    <div className="flex justify-center items-center gap-2.5 text-[#43E6D3] text-[11px] tracking-[2px] font-bold mb-5">
                        <span className="w-[26px] h-[2px] bg-[#43E6D3]"></span>
                        METODOLOGI NIST
                        <span className="w-[26px] h-[2px] bg-[#43E6D3]"></span>
                    </div>
                    <h2 className="text-center text-white text-[56px] max-md:text-[38px] font-extrabold leading-[1.1] mb-4">
                        Dari Asesmen hingga Proteksi Aktif
                    </h2>
                    <p className="text-center max-w-[700px] mx-auto text-white/70 leading-relaxed text-base">
                        Proses implementasi Cyber Security UTI mengikuti framework NIST
                        Cybersecurity — terstruktur, terukur, dan berkelanjutan untuk memastikan
                        perlindungan yang optimal.
                    </p>
                    <div className="mt-[70px] grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
                        {[
                            { num: "01", icon: "fa-magnifying-glass", step: "STEP 01 — IDENTIFY", title: "Assesment & Risk Mapping", desc: "Pemetaan aset kritis, risk profile, gap analysis, dan identifikasi attack surface bisnis Anda saat ini secara menyeluruh." },
                            { num: "02", icon: "fa-shield-halved", step: "STEP 02 — PROTECT", title: "Implementasi Solusi", desc: "Deploy DLP, PAM, NAC, Mail Protection, dan MDM sesuai prioritas risiko yang telah diidentifikasi dengan minimalkan disruption." },
                            { num: "03", icon: "fa-wave-square", step: "STEP 03 — DETECT", title: "NOC 24/7 Monitoring", desc: "SIEM, threat intelligence feed, dan behavioral analytics untuk mendeteksi anomali secara real-time sebelum berdampak ke bisnis." },
                            { num: "04", icon: "fa-circle-check", step: "STEP 04 — RESPOND & RECOVER", title: "Incident Response & Recovery", desc: "Incident response plan terstruktur, forensik digital, eradikasi ancaman, dan pemulihan sistem dengan minimal downtime operasional." }
                        ].map((nist) => (
                            <div key={nist.num} className="relative bg-white/5 border border-white/10 rounded-2xl p-7 min-h-[290px] backdrop-blur-md overflow-hidden">
                                <div className="absolute top-2 right-4 text-[64px] font-extrabold text-white/5 leading-none">{nist.num}</div>
                                <div className="w-[42px] h-[42px] flex items-center justify-center rounded-xl bg-[#24E0CE]/20 text-[#43E6D3] mb-4">
                                    <i className={`fa-solid ${nist.icon}`}></i>
                                </div>
                                <div className="text-[#43E6D3] text-[10px] tracking-[1.6px] font-bold mb-3">{nist.step}</div>
                                <h3 className="text-white text-xl font-bold leading-tight mb-3.5">{nist.title}</h3>
                                <p className="text-white/65 leading-relaxed text-sm">{nist.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
        <CTAForm backgroundColor="#0C2A78" brandColor="#0C2A78" />
        </>
    );
}