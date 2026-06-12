import CTAForm from "../../../components/CTAForm";

export default function Page() {
    return (
        <><main className="flex min-h-screen flex-col">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

            {/* HERO SECTION */}
            <section className="relative min-h-[760px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/it-solutions/third-party-maintenance.png')", fontFamily: "'Inter', sans-serif" }}>
                <div className="absolute inset-0 bg-[rgba(4,50,78,.45)]"></div>
                <div className="relative z-[2] mx-auto max-w-[1280px] px-[30px] py-[110px]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
                        <div className="flex-1 max-w-[620px]">
                            <span className="inline-block rounded-[30px] bg-white/15 px-[14px] py-2 text-xs font-semibold text-white">IT SOLUTIONS • THIRD PARTY MAINTENANCE</span>
                            <h1 className="my-5 text-white text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.05]">Perpanjang Usia Perangkat, <span className="block text-[#14C8FF]">Hemat Biaya IT Hingga 70%</span></h1>
                            <p className="max-w-[550px] text-lg leading-[1.9] text-white/90">PT United Teknologi Integrasi menghadirkan layanan Third Party Maintenance (TPM) yang fleksibel dan hemat biaya — menjaga performa infrastruktur IT Anda tanpa harus bergantung pada kontrak mahal dari vendor OEM.</p>
                            <div className="mt-[35px] flex gap-4"><a href="#" className="inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#1577B8] no-underline"><i className="fa-solid fa-arrow-right"></i>Mulai Konsultasi</a><a href="#" className="inline-flex items-center rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white no-underline">Lihat Layanan Kami</a></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-full max-w-[520px] rounded-3xl bg-white p-7">
                                <div className="absolute -right-[25px] -top-[18px] flex items-center gap-3 rounded-[14px] border border-[#E5E7EB] bg-white p-3 px-4"><i className="fa-solid fa-check-circle text-[#17B26A]"></i><div><small className="block text-[#667085]">SLA Status</small><strong className="text-[13px] text-[#16A34A]">Compliance 99.9%</strong></div></div>
                                <h3 className="text-2xl font-bold text-[#101828]">Perbandingan Biaya Maintenance</h3>
                                <p className="mt-2 text-[#667085]">Estimasi penghematan dengan beralih ke TPM UTI</p>
                                <div className="mt-6 grid grid-cols-2 gap-3.5"><div className="rounded-[14px] border border-[#F4C6AE] bg-[#FFF5F0] p-[18px]"><span className="text-[11px] font-bold">OEM CONTRACT</span><h4 className="my-2 text-[34px] text-[#E25A17]">Rp 500 jt</h4><small className="text-[#667085]">per tahun</small></div><div className="rounded-[14px] border border-[#B7E1C1] bg-[#F1FAF3] p-[18px]"><span className="text-[11px] font-bold">UTI TPM</span><h4 className="my-2 text-[34px] text-[#16A34A]">Rp 150 jt</h4><small className="text-[#667085]">per tahun</small></div></div>
                                <div className="mt-6"><div className="mb-2.5 flex justify-between text-sm font-semibold"><span>Biaya TPM</span><span className="text-[#16A34A]">Hemat 70% ≈ Rp 350 jt/thn</span></div><div className="h-2 w-full rounded-full bg-[#E5E7EB] overflow-hidden"><div className="h-full w-[70%] rounded-full bg-[#22C55E]"></div></div></div>
                                <h5 className="mt-6 text-xs tracking-[1px] text-[#667085]">PERANGKAT YANG DIDUKUNG</h5>
                                <div className="mt-3.5 flex flex-wrap gap-2.5"><span className="rounded-full bg-[#F2F4F7] px-3.5 py-2 text-xs">Server</span><span className="rounded-full bg-[#F2F4F7] px-3.5 py-2 text-xs">Storage</span><span className="rounded-full bg-[#F2F4F7] px-3.5 py-2 text-xs">Networking</span><span className="rounded-full bg-[#F2F4F7] px-3.5 py-2 text-xs">Security</span><span className="rounded-full bg-[#F2F4F7] px-3.5 py-2 text-xs">Datacenter</span></div>
                                <div className="absolute -left-10 -bottom-6 flex items-center gap-2.5 rounded-[14px] border border-[#E5E7EB] bg-white p-3 px-4 z-10"><i className="fa-regular fa-clock text-[#14B8A6]"></i><div><small className="block text-[#667085]">Response Time</small><strong className="text-[13px] text-[#101828]">4 Jam On-site</strong></div></div>
                                <div className="absolute -right-6 -bottom-6 flex items-center gap-2.5 rounded-[14px] border border-[#E5E7EB] bg-white p-3 px-4"><i className="fa-solid fa-users text-[#14B8A6]"></i><div><small className="block text-[#667085]">Multi-Vendor</small><strong className="text-[13px] text-[#101828]">50+ Brand</strong></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY TPM SECTION */}
            <section className="py-[120px] bg-white">
                <div className="mx-auto max-w-[1280px] px-[30px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="rounded-3xl border border-[#E4E7EC] bg-[#F8FAFC] p-[30px]"><h3 className="text-lg font-bold text-[#101828] mb-6">OEM vs Third Party Maintenance (TPM)</h3>
                            <table className="w-full border-collapse"><thead><tr><th className="text-left p-3 text-xs font-bold">ASPEK</th><th className="text-left p-3 text-xs font-bold text-[#F04438]">OEM SUPPORT</th><th className="text-left p-3 text-xs font-bold text-[#16A34A]">UTI TPM</th></tr></thead>
                                <tbody><tr><td className="border-t border-[#EAECF0] p-3 text-sm font-semibold text-[#101828]">Biaya Tahunan</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F04438] mr-2"></span>Sangat Tinggi</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A] mr-2"></span>Hemat 40–70%</td></tr>
                                    <tr><td className="border-t border-[#EAECF0] p-3 text-sm font-semibold text-[#101828]">Usia Perangkat</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F04438] mr-2"></span>EOL dipaksakan</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A] mr-2"></span>Diperpanjang fleksibel</td></tr>
                                    <tr><td className="border-t border-[#EAECF0] p-3 text-sm font-semibold text-[#101828]">Multi-Vendor</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F04438] mr-2"></span>Vendor tunggal</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A] mr-2"></span>50+ brand ditangani</td></tr>
                                    <tr><td className="border-t border-[#EAECF0] p-3 text-sm font-semibold text-[#101828]">Fleksibilitas SLA</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F04438] mr-2"></span>Paket kaku</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A] mr-2"></span>Disesuaikan kebutuhan</td></tr>
                                    <tr><td className="border-t border-[#EAECF0] p-3 text-sm font-semibold text-[#101828]">Suku Cadang</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F04438] mr-2"></span>Harga premium</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A] mr-2"></span>Kompetitif & tersedia</td></tr>
                                    <tr><td className="border-t border-[#EAECF0] p-3 text-sm font-semibold text-[#101828]">Kontrak</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F04438] mr-2"></span>Jangka panjang</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A] mr-2"></span>Fleksibel per kebutuhan</td></tr>
                                    <tr><td className="border-t border-[#EAECF0] p-3 text-sm font-semibold text-[#101828]">Response Time</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F04438] mr-2"></span>Bervariasi</td><td className="border-t border-[#EAECF0] p-3 text-sm text-[#475467]"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A] mr-2"></span>Guaranteed SLA</td></tr>
                                </tbody></table>
                        </div>
                        <div><span className="inline-flex h-6 items-center justify-center rounded-full bg-[#EEF2FF] px-2.5 text-[10px] font-bold tracking-[0.5px] text-[#2954FF] uppercase">MENGAPA TPM?</span><h2 className="my-3 text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.1] text-[#101828]">Infrastruktur Tangguh <span className="block text-[#2954FF]">Tanpa Biaya Berlebih</span></h2><p className="mb-7 text-[15px] leading-[1.7] text-[#667085]">Banyak perusahaan terus membayar kontrak OEM mahal meski perangkat mereka masih sangat layak digunakan. TPM dari UTI hadir sebagai solusi cerdas — menjaga performa optimal sekaligus membebaskan anggaran IT Anda.</p>
                            <div className="flex flex-col gap-[18px]"><div className="flex gap-[18px]"><div className="flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-xl bg-[#EEF4FF]"><i className="fa-solid fa-dollar-sign text-[14px] text-[#2954FF]"></i></div><div><h4 className="mb-2 text-[15px] font-bold text-[#101828]">Hemat Anggaran IT 40–70%</h4><p className="text-[13px] leading-[1.6] text-[#667085]">Alihkan penghematan biaya maintenance ke inisiatif transformasi digital yang lebih bernilai bagi bisnis Anda.</p></div></div>
                                <div className="flex gap-[18px]"><div className="flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-xl bg-[#EEF4FF]"><i className="fa-solid fa-desktop text-[14px] text-[#2954FF]"></i></div><div><h4 className="mb-2 text-[15px] font-bold text-[#101828]">Perpanjang Masa Pakai Perangkat</h4><p className="text-[13px] leading-[1.6] text-[#667085]">Perangkat yang telah mencapai End-of-Life (EOL) tetap bisa dioperasikan secara optimal dengan dukungan teknis berpengalaman kami.</p></div></div>
                                <div className="flex gap-[18px]"><div className="flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-xl bg-[#EEF4FF]"><i className="fa-solid fa-users text-[14px] text-[#2954FF]"></i></div><div><h4 className="mb-2 text-[15px] font-bold text-[#101828]">Satu Vendor, Semua Merek</h4><p className="text-[13px] leading-[1.6] text-[#667085]">UTI mengelola maintenance dari berbagai merek sekaligus — Cisco, HPE, Dell, IBM, NetApp, dan puluhan lainnya dalam satu kontrak terpadu.</p></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TPM SERVICES SECTION */}
            <section className="py-[120px] bg-[#F8FAFC]">
                <div className="mx-auto max-w-[1280px] px-[30px]">
                    <div className="flex flex-col lg:flex-row justify-between gap-[60px] mb-[50px]"><div className="max-w-[600px]"><span className="inline-flex h-6 items-center justify-center rounded-full bg-[#EEF2FF] px-2.5 text-[10px] font-bold tracking-[0.5px] text-[#2954FF] uppercase">LAYANAN KAMI</span><h2 className="mt-4 text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] text-[#101828]">Solusi TPM Lengkap untuk <span className="block text-[#2954FF]">Setiap Kebutuhan</span></h2></div><div className="max-w-[420px]"><p className="text-[15px] leading-[1.8] text-[#667085]">Dari perbaikan hardware hingga monitoring proaktif, UTI menyediakan layanan pemeliharaan komprehensif yang dirancang khusus untuk operasional enterprise.</p></div></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[{ icon: "screwdriver-wrench", title: "Perbaikan & Suku Cadang", desc: "Layanan perbaikan hardware dan ketersediaan suku cadang yang luas — memastikan downtime minimal dengan respons cepat dan komponen berkualitas.", tags: ["Hardware Repair", "Spare Parts", "Fast Response"] },
                        { icon: "box", title: "Pemeliharaan Multi-Vendor", desc: "Kemampuan menangani perangkat dari berbagai produsen teknologi dalam satu kontrak — menyederhanakan manajemen vendor dan mengurangi kompleksitas operasional.", tags: ["Cisco", "HPE", "Dell EMC", "IBM"] },
                        { icon: "heart-pulse", title: "Monitoring Proaktif", desc: "Deteksi dini permasalahan infrastruktur sebelum berdampak pada operasional — dengan dashboard real-time, alerting otomatis, dan laporan performa berkala.", tags: ["24/7 NOC", "Real-time Alert", "Reporting"] },
                        { icon: "clock", title: "Dukungan Teknis 24/7", desc: "Tim ahli bersertifikat tersedia sepanjang waktu melalui helpdesk, remote support, dan on-site visit — menjaga kelangsungan bisnis Anda tanpa henti.", tags: ["Help Desk", "Remote Support", "On-site"] },
                        { icon: "shield", title: "Perpanjangan EOL Support", desc: "Perangkat End-of-Life (EOL) tidak harus langsung diganti. UTI memberikan dukungan lanjutan yang aman dan handal, memberi Anda fleksibilitas dalam merencanakan migrasi.", tags: ["EOL Extension", "Migration Plan"] },
                        { icon: "file-lines", title: "Asset Management", desc: "Kelola seluruh inventaris perangkat IT Anda secara terpusat — tracking status, history maintenance, lifecycle management, dan laporan audit yang komprehensif.", tags: ["Asset Tracking", "Lifecycle", "Audit"] }
                        ].map((s, i) => <div key={i} className="rounded-[22px] border border-[#E4E7EC] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"><div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#EEF4FF]"><i className={`fa-solid fa-${s.icon} text-lg text-[#2954FF]`}></i></div><h4 className="mb-3 text-lg font-bold text-[#101828]">{s.title}</h4><p className="mb-5 text-sm leading-[1.7] text-[#667085]">{s.desc}</p><div className="flex flex-wrap gap-2">{s.tags.map((t, j) => <span key={j} className="rounded-full bg-[#EEF2FF] px-3 py-1.5 text-[11px] font-semibold text-[#2954FF]">{t}</span>)}</div></div>)}
                    </div>
                </div>
            </section>

            {/* DEVICE COVERAGE SECTION */}
            <section className="py-[120px] bg-white">
                <div className="mx-auto max-w-[1280px] px-[30px]">
                    <div className="text-center mb-[60px]"><span className="inline-flex h-6 items-center justify-center rounded-full bg-[#EEF2FF] px-2.5 text-[10px] font-bold tracking-[0.5px] text-[#2954FF] uppercase">CAKUPAN PERANGKAT</span><h2 className="mt-3.5 text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] text-[#101828]">Semua Jenis Infrastruktur <span className="block text-[#2954FF]">Ditangani oleh UTI</span></h2></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[{ icon: "server", title: "Server", desc: "Rack server, blade server, tower server dari berbagai merek dan generasi." },
                        { icon: "database", title: "Storage", desc: "SAN, NAS, all-flash array, dan solusi penyimpanan enterprise lainnya" },
                        { icon: "globe", title: "Networking", desc: "Router, switch, wireless controller, dan perangkat jaringan lainnya" },
                        { icon: "shield", title: "Security Appliance", desc: "Firewall, IDS/IPS, VPN concentrator dan perangkat keamanan jaringan." },
                        { icon: "briefcase", title: "Data Center", desc: "UPS, PDU, cooling system dan infrastruktur data center lengkap." },
                        { icon: "shield", title: "Hyperconverged (HCI)", desc: "Platform HCI dan virtualization infrastructure dari semua vendor utama" },
                        { icon: "mobile-screen", title: "End User Device", desc: "PC, laptop, workstation, thin client dan perangkat pengguna akhir." },
                        { icon: "wave-square", title: "Legacy System", desc: "Sistem lama yang sudah EOL namun masih kritis untuk operasional bisnis" }
                        ].map((d, i) => <div key={i} className="rounded-[22px] border border-[#E4E7EC] bg-white p-[34px_24px] text-center transition-all hover:-translate-y-1"><div className="mx-auto mb-[18px] flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF4FF]"><i className={`fa-solid fa-${d.icon} text-[22px] text-[#2954FF]`}></i></div><h4 className="mb-2.5 text-lg font-bold text-[#101828]">{d.title}</h4><p className="text-[13px] leading-[1.7] text-[#667085]">{d.desc}</p></div>)}
                    </div>
                </div>
            </section>

            {/* TPM PROCESS SECTION */}
            <section className="py-[120px] bg-[#F8FAFC]">
                <div className="mx-auto max-w-[1280px] px-[30px]">
                    <div className="text-center mb-[60px]"><span className="inline-flex h-6 items-center justify-center rounded-full bg-[#EEF2FF] px-2.5 text-[10px] font-bold tracking-[0.5px] text-[#2954FF] uppercase">CARA KERJA</span><h2 className="mt-3.5 text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] text-[#101828]">Proses Onboarding TPM <span className="block text-[#2954FF]">yang Mudah & Cepat</span></h2></div>
                    <div className="relative mt-[70px]"><div className="absolute top-[22px] left-[10%] hidden lg:block w-[80%] h-0.5 bg-gradient-to-r from-[#2954FF] to-[#14C8FF]"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative">
                            {[{ num: "01", title: "Assessment", desc: "Audit menyeluruh seluruh inventaris dan kondisi perangkat IT Anda" },
                            { num: "02", title: "Proposal SLA", desc: "Rancangan kontrak TPM yang disesuaikan dengan kebutuhan dan anggaran" },
                            { num: "03", title: "Transisi", desc: "Proses serah terima mulus tanpa downtime dari kontrak lama ke UTI TPM" },
                            { num: "04", title: "Go Live", desc: "Aktivasi layanan monitoring, helpdesk, dan dukungan teknis penuh" },
                            { num: "05", title: "Review Berkala", desc: "Evaluasi performa, laporan SLA, dan optimisasi layanan secara periodik" }
                            ].map((p, i) => <div key={i} className="text-center"><div className="relative z-[2] mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2954FF] bg-white text-[15px] font-extrabold text-[#2954FF]">{p.num}</div><h4 className="mb-2.5 text-[15px] font-bold text-[#101828]">{p.title}</h4><p className="mx-auto max-w-[170px] text-[13px] leading-[1.7] text-[#667085]">{p.desc}</p></div>)}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY UTI SECTION */}
            <section className="py-[120px] bg-gradient-to-b from-[#1840B8] to-[#163AA8]">
                <div className="mx-auto max-w-[1280px] px-[30px]">
                    <div className="max-w-[720px] mb-[60px]"><span className="inline-flex h-7 items-center justify-center rounded-full bg-white/20 px-3 text-[10px] font-bold tracking-[0.8px] text-white">KEUNGGULAN UTI</span><h2 className="my-[18px] text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-[1.1] text-white">Dipercaya oleh Ratusan Enterprise <span className="block">di Seluruh Indonesia</span></h2><p className="max-w-[650px] text-[15px] leading-[1.9] text-white/75">Sejak 2005, UTI telah menjadi mitra terpercaya dalam pemeliharaan infrastruktur IT di berbagai industri — dari manufaktur, perbankan, hingga healthcare.</p></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[{ icon: "shield", title: "Certified Engineers", desc: "Tim teknisi bersertifikat dari vendor-vendor terkemuka dengan pengalaman menangani infrastruktur skala enterprise di berbagai industri." },
                        { icon: "users", title: "Multi-Vendor Expertise", desc: "Kemampuan menangani 50+ merek dan ratusan model perangkat — Cisco, HPE, Dell EMC, IBM, NetApp, Huawei, Juniper, dan masih banyak lagi." },
                        { icon: "clock", title: "Guaranteed SLA", desc: "Komitmen SLA yang tertuang dalam kontrak dengan penalti yang jelas — bukan sekadar janji. Kami bertanggung jawab penuh atas setiap komitmen waktu respons." },
                        { icon: "wave-square", title: "NOC 24/7", desc: "Network Operations Center aktif memantau infrastruktur Anda sepanjang waktu — mendeteksi dan menangani potensi masalah sebelum berdampak pada bisnis." },
                        { icon: "dollar-sign", title: "Penghematan Terbukti", desc: "Klien kami rata-rata menghemat 40–70% biaya maintenance dibandingkan kontrak OEM — dengan tingkat layanan yang sama atau bahkan lebih baik." },
                        { icon: "location-dot", title: "Jangkauan Nasional", desc: "Kantor di Jakarta Pusat, Pulo Gadung, dan Cikarang — dengan jaringan teknisi on-site yang siap menjangkau seluruh area operasional Anda." }
                        ].map((u, i) => <div key={i} className="rounded-[22px] border border-white/10 bg-white/10 p-[30px] backdrop-blur-sm transition-all hover:-translate-y-1"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10"><i className={`fa-regular fa-${u.icon === "shield" ? "shield" : u.icon === "users" ? "users" : u.icon === "clock" ? "clock" : u.icon === "wave-square" ? "wave-square" : u.icon === "dollar-sign" ? "dollar-sign" : "location-dot"} text-lg text-white`}></i></div><h4 className="mb-3 text-lg font-bold text-white">{u.title}</h4><p className="text-sm leading-[1.8] text-white/75">{u.desc}</p></div>)}
                    </div>
                </div>
            </section>
        </main>
        <CTAForm backgroundColor="#04324E" brandColor="#04324E" />
        </>
    );
}