import CTAForm from "../../../components/CTAForm";

export default function Page() {
    return (
        <><main className="flex min-h-screen flex-col">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

            {/* ========== HERO SECTION ========== */}
            <section className="relative flex min-h-screen flex-col items-center justify-between gap-[50px] overflow-hidden bg-cover bg-center px-[24px] py-20 font-sans lg:flex-row lg:gap-0 lg:px-[80px]" style={{ background: "linear-gradient(90deg, rgba(8,24,75,.88) 0%, rgba(8,24,75,.68) 40%, rgba(5,82,89,.45) 100%), url('/images/it-solutions/internet-of-things.png')", backgroundSize: "cover", backgroundPosition: "center", fontFamily: "'Inter', sans-serif" }}>
                <div className="max-w-[560px]">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 px-[14px] py-2 text-xs font-medium text-[#67E8F9]">Internet of Things Solutions</div>
                    <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] text-white md:text-5xl lg:text-[58px]">Hubungkan Segalanya, Otomasi <span className="text-[#67E8F9]">Bisnis Anda</span> dengan IoT</h1>
                    <p className="mb-9 text-[17px] leading-[1.9] text-white/80">PT. United Teknologi Integrasi menghadirkan solusi IoT terintegrasi untuk berbagai industri mulai dari Digital Banking, Digital Store, Smart Logistic, Smart Medical hingga Smart Manufacturing yang mengubah data menjadi keputusan bisnis yang cerdas.</p>
                    <div className="mb-[50px] flex gap-[14px]">
                        <a href="#" className="flex items-center gap-[10px] rounded-xl bg-white px-[22px] py-[14px] text-sm font-bold text-[#0D2D84] no-underline"><i className="fa-solid fa-circle-play"></i> Demo IoT Gratis</a>
                        <a href="#" className="flex items-center gap-[10px] rounded-xl border border-white/15 px-[22px] py-[14px] text-sm font-semibold text-white no-underline">Solusi per Industri <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="flex flex-wrap gap-10 border-t border-white/12 pt-6">
                        <div><h3 className="text-3xl font-extrabold text-white md:text-[32px]">5</h3><p className="mt-1.5 text-xs text-white/55">Industri Vertikal</p></div>
                        <div><h3 className="text-3xl font-extrabold text-white md:text-[32px]">Real-time</h3><p className="mt-1.5 text-xs text-white/55">Data Analytics</p></div>
                        <div><h3 className="text-3xl font-extrabold text-white md:text-[32px]">99.5%</h3><p className="mt-1.5 text-xs text-white/55">Device Uptime</p></div>
                    </div>
                </div>

                <div className="w-full max-w-[650px] lg:w-[560px]">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-[22px] backdrop-blur-[12px]">
                        <div className="mb-[18px] flex items-center justify-between"><div className="text-[11px] font-bold tracking-[1.5px] text-white/60">IOT DEVICE MONITOR</div><div className="text-[11px] font-bold text-[#2DF2D0]">● CONNECTED</div></div>
                        <div className="mb-[14px] grid grid-cols-1 gap-[10px] sm:grid-cols-2">
                            {[
                                { icon: "cash-register", name: "Smart POS Terminal", industry: "Digital Store", qty: "128", color: "bg-[#31F2A5]" },
                                { icon: "location-dot", name: "GPS Tracker", industry: "Smart Logistic", qty: "340", color: "bg-[#31F2A5]" },
                                { icon: "heart-pulse", name: "Patient Monitor", industry: "Smart Medical", qty: "56", color: "bg-[#31F2A5]" },
                                { icon: "microchip", name: "Machine Sensor", industry: "Smart Manufacturing", qty: "210", color: "bg-[#FFD84D]" }
                            ].map((device, i) => (
                                <div key={i} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 p-3">
                                    <div className="flex items-center gap-[10px]"><div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#67E8F9]/20 text-[#67E8F9]"><i className={`fa-solid fa-${device.icon}`}></i></div><div><h4 className="mb-0.5 text-xs text-white">{device.name}</h4><p className="text-[10px] text-white/45">{device.industry} · {device.qty} Unit</p></div></div>
                                    <div className={`h-1.5 w-1.5 rounded-full ${device.color}`}></div>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-3">
                            <div className="rounded-xl border border-white/10 bg-white/10 p-4 text-center"><h3 className="text-[28px] font-extrabold text-white">734</h3><p className="mt-1 text-[11px] text-white/50">Devices Online</p></div>
                            <div className="rounded-xl border border-white/10 bg-white/10 p-4 text-center"><h3 className="text-[28px] font-extrabold text-white">2.4M</h3><p className="mt-1 text-[11px] text-white/50">Data Points/hr</p></div>
                            <div className="rounded-xl border border-white/10 bg-white/10 p-4 text-center"><h3 className="text-[28px] font-extrabold text-white">99.5%</h3><p className="mt-1 text-[11px] text-white/50">Uptime</p></div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[60px] right-[70px] hidden items-center gap-3 rounded-xl bg-white p-3 px-4 md:flex"><i className="fa-solid fa-wave-square text-[#0EA5E9]"></i><div><h5 className="text-xs text-[#0F172A]">Real-time Analytics</h5><p className="text-[10px] text-[#64748B]">Edge to Cloud Processing</p></div></div>
            </section>

            {/* ========== WHY IOT SECTION ========== */}
            <section className="bg-[#F7F9FC] px-[24px] py-20 font-sans md:px-[80px] md:py-[110px]">
                <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-[70px] lg:grid-cols-2">
                    <div className="rounded-3xl border border-[#BEEAF3] bg-[#F4F9FF] p-6 md:p-10">
                        <div className="text-5xl font-extrabold leading-tight text-[#0D2D84] md:text-6xl lg:text-[78px]">$1.1T</div>
                        <p className="mt-2 text-sm text-[#475569]">Proyeksi nilai pasar IoT global 2026</p>
                        <div className="mt-[35px]">
                            {[
                                { label: "Efisiensi Ops", value: 88, color: "bg-[#06B6D4]" },
                                { label: "Reduksi Biaya", value: 76, color: "bg-[#6366F1]" },
                                { label: "Produktivitas", value: 82, color: "bg-[#10B981]" },
                                { label: "Kepuasan Customer", value: 71, color: "bg-[#F59E0B]" }
                            ].map((item, i) => (
                                <div key={i} className="mb-[18px]"><div className="mb-2 flex justify-between text-xs text-[#475569]"><span>{item.label}</span><strong>{item.value}%</strong></div><div className="h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]"><div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }}></div></div></div>
                            ))}
                        </div>
                        <div className="mt-[30px] grid grid-cols-1 gap-[15px] md:grid-cols-2">
                            <div className="rounded-[14px] bg-white p-[18px]"><h4 className="text-[28px] font-extrabold text-[#0D2D84]">30%</h4><p className="mt-1.5 text-xs text-[#64748B]">Penghematan energi rata-rata</p></div>
                            <div className="rounded-[14px] bg-white p-[18px]"><h4 className="text-[28px] font-extrabold text-[#0D2D84]">5× ROI</h4><p className="mt-1.5 text-xs text-[#64748B]">Dalam 3 tahun implementasi</p></div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-[18px] flex items-center gap-[10px] text-[11px] font-bold tracking-[2px] text-[#2563EB]"><span className="h-0.5 w-[18px] bg-[#2563EB]"></span>MENGAPA IOT</div>
                        <h2 className="max-w-[620px] text-3xl font-extrabold leading-[1.1] text-[#112868] md:text-4xl lg:text-[54px]">Bisnis yang Terhubung, Bisnis yang Unggul</h2>
                        <p className="mt-5 max-w-[600px] leading-[1.9] text-[#667085]">IoT bukan lagi teknologi masa depan — ini adalah keunggulan kompetitif yang sudah dimanfaatkan oleh pemimpin industri hari ini. UTI membantu Anda mengadopsinya dengan cepat dan tepat.</p>
                        <div className="mt-[35px] flex flex-col gap-4">
                            {[
                                { icon: "wave-square", title: "Visibilitas Data Real-time", desc: "Sensor IoT mengumpulkan data dari lapangan setiap detik untuk memberikan insight yang tidak tersedia dari laporan manual." },
                                { icon: "shield-halved", title: "Otomasi Proses Operasional", desc: "Kurangi intervensi manual dan human error melalui trigger otomatis berdasarkan kondisi yang terdeteksi sensor." },
                                { icon: "hexagon", title: "Ekosistem Terintegrasi End-to-End", desc: "Dari device edge hingga cloud analytics — UTI menyediakan seluruh stack: hardware, connectivity, platform, dan dashboard." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 rounded-2xl border border-[#E8EDF7] bg-white p-[18px]"><div className="flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-xl bg-[#EEF9FF] text-[#06B6D4]"><i className={`fa-solid fa-${item.icon}`}></i></div><div><h4 className="mb-1.5 text-base text-[#112868]">{item.title}</h4><p className="text-[13px] leading-[1.7] text-[#667085]">{item.desc}</p></div></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== INDUSTRY SOLUTIONS ========== */}
            <section className="bg-[#F4F4FB] px-[24px] py-20 font-sans md:px-[80px] md:py-[110px]">
                <div className="mb-[50px] max-w-[700px]"><div className="mb-[14px] flex items-center gap-[10px] text-[11px] font-bold tracking-[2px] text-[#2555D8]"><span className="h-0.5 w-[18px] bg-[#2555D8]"></span>SOLUSI PER INDUSTRI</div><h2 className="mb-3 text-3xl font-extrabold text-[#0F2B78] md:text-4xl lg:text-[42px]">5 Solusi IoT yang Kami Kuasai</h2><p className="max-w-[650px] text-sm leading-[1.8] text-[#667085]">Setiap industri punya tantangan unik. UTI menghadirkan solusi IoT yang dirancang spesifik untuk kebutuhan dan regulasi masing-masing sektor.</p></div>

                <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { number: "01", title: "DIGITAL BANKING", name: "Digital Banking Solution", icon: "credit-card", iconBg: "bg-[#E8F7FF]", iconColor: "text-[#27A6E5]", desc: "Transformasi layanan perbankan dengan infrastruktur IoT yang menghubungkan ATM, kiosk self-service, dan kantor cabang dalam satu ekosistem digital terpadu.", items: ["Smart ATM monitoring & predictive maintenance", "Self-service kiosk dengan biometric terintegrasi", "Queue management & customer analytics cabang", "Environmental monitoring ruang server & vault"] },
                        { number: "02", title: "DIGITAL STORE", name: "Digital Store Solution", icon: "store", iconBg: "bg-[#EAFBF4]", iconColor: "text-[#10B981]", desc: "Wujudkan toko cerdas yang merespons pelanggan secara real-time — dari smart shelf management, checkout tanpa kasir, hingga analitik perilaku pengunjung berbasis sensor.", items: ["Smart shelf & inventory tracking otomatis", "People counting & heatmap pengunjung", "Digital signage dinamis berbasis kondisi real-time", "Self-checkout & contactless payment integration"] },
                        { number: "03", title: "SMART LOGISTIC", name: "Smart Logistic Solution", icon: "truck-fast", iconBg: "bg-[#FFF3E5]", iconColor: "text-[#F59E0B]", desc: "Optimalkan rantai pasok end-to-end dengan visibilitas penuh atas armada, gudang, dan kondisi kargo — dari first mile hingga last mile delivery.", items: ["GPS fleet tracking & route optimization AI", "Cold chain monitoring suhu & kelembaban", "Smart warehouse dengan RFID & barcode scanning", "Driver behavior & fuel efficiency monitoring"] }
                    ].map((card, i) => (
                        <div key={i} className="rounded-2xl border border-[#E8EDF5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><div className={`mb-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-[10px] text-sm ${card.iconBg} ${card.iconColor}`}><i className={`fa-solid fa-${card.icon}`}></i></div><div className="mb-[10px] text-[10px] font-bold tracking-[1px] text-[#64748B]">{card.number} — {card.title}</div><h3 className="mb-3 text-[22px] font-extrabold text-[#0F2B78]">{card.name}</h3><p className="mb-[14px] text-[13px] leading-[1.7] text-[#667085]">{card.desc}</p><ul className="list-none p-0">{card.items.map((item, j) => (<li key={j} className="relative mb-2 pl-[14px] text-xs leading-[1.6] text-[#64748B] before:absolute before:left-0 before:top-[7px] before:h-1 before:w-1 before:rounded-full before:bg-[#60A5FA] before:content-['']">{item}</li>))}</ul></div>
                    ))}
                </div>

                <div className="mx-auto grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:w-2/3">
                    {[
                        { number: "04", title: "SMART MEDICAL", name: "Smart Medical Solution", icon: "heart-pulse", iconBg: "bg-[#FFF0F3]", iconColor: "text-[#F43F5E]", desc: "Tingkatkan kualitas layanan kesehatan dengan IoT medis yang menghubungkan perangkat monitoring pasien, manajemen aset rumah sakit, dan sistem keselamatan dalam satu platform terintegrasi.", items: ["Remote patient monitoring & vital signs tracking", "Medical asset tracking (bed, kursi roda, peralatan)", "Smart nurse call & emergency alert system", "Pharmacy automation & cold storage monitoring"] },
                        { number: "05", title: "SMART MANUFACTURING", name: "Smart Manufacturing Solution", icon: "microchip", iconBg: "bg-[#EEF2FF]", iconColor: "text-[#6366F1]", desc: "Wujudkan Industri 4.0 di fasilitas produksi Anda — dengan sensor mesin, predictive maintenance berbasis AI, dan kontrol kualitas otomatis yang meningkatkan OEE secara signifikan.", items: ["Predictive maintenance & anomaly detection mesin", "OEE monitoring & downtime analytics real-time", "Energy management & smart meter integration", "Quality control otomatis dengan computer vision"] }
                    ].map((card, i) => (
                        <div key={i} className="rounded-2xl border border-[#E8EDF5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><div className={`mb-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-[10px] text-sm ${card.iconBg} ${card.iconColor}`}><i className={`fa-solid fa-${card.icon}`}></i></div><div className="mb-[10px] text-[10px] font-bold tracking-[1px] text-[#64748B]">{card.number} — {card.title}</div><h3 className="mb-3 text-[22px] font-extrabold text-[#0F2B78]">{card.name}</h3><p className="mb-[14px] text-[13px] leading-[1.7] text-[#667085]">{card.desc}</p><ul className="list-none p-0">{card.items.map((item, j) => (<li key={j} className="relative mb-2 pl-[14px] text-xs leading-[1.6] text-[#64748B] before:absolute before:left-0 before:top-[7px] before:h-1 before:w-1 before:rounded-full before:bg-[#60A5FA] before:content-['']">{item}</li>))}</ul></div>
                    ))}
                </div>
            </section>

            {/* ========== PLATFORM CAPABILITIES ========== */}
            <section className="bg-[#F7F8FC] px-[24px] py-20 font-sans md:px-[80px] md:py-[110px]">
                <div className="mb-[45px] max-w-[620px]"><div className="mb-3 flex items-center gap-[10px] text-[11px] font-bold tracking-[2px] text-[#315DFF]"><span className="h-0.5 w-[18px] bg-[#315DFF]"></span>KAPABILITAS PLATFORM</div><h2 className="mb-[14px] text-3xl font-extrabold leading-[1.1] text-[#112868] md:text-4xl lg:text-[42px]">Fondasi Teknologi di Balik Setiap Solusi</h2><p className="text-sm leading-[1.8] text-[#667085]">UTI membangun solusi IoT di atas tiga pilar teknologi — Konektivitas, Komputasi, dan Kecerdasan — untuk memastikan sistem yang andal dan scalable.</p></div>
                <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-4">
                    {[
                        { icon: "wifi", title: "Multi-protocol Connectivity", desc: "Mendukung berbagai protokol komunikasi IoT — MQTT, CoAP, LoRaWAN, Zigbee, NB-IoT, 4G/5G — sesuai kebutuhan jarak, konsumsi daya, dan bandwidth." },
                        { icon: "desktop", title: "Edge Computing", desc: "Proses data di sumber — gateway edge yang mengurangi latency, menghemat bandwidth cloud, dan tetap berfungsi saat koneksi internet terganggu." },
                        { icon: "cloud", title: "Cloud IoT Platform", desc: "Centralized IoT management platform dengan time-series database, dashboard interaktif, alerting engine, dan API integration ke sistem ERP/CRM Anda." },
                        { icon: "star", title: "AI & Machine Learning", desc: "Model ML untuk anomaly detection, predictive analytics, dan pattern recognition — mengubah data mentah sensor menjadi insight bisnis yang bernilai." },
                        { icon: "shield-halved", title: "IoT Security by Design", desc: "Keamanan terintegrasi dari device hingga cloud — enkripsi TLS/DTLS, certificate-based auth, OTA update terenkripsi, dan network segmentation IoT." },
                        { icon: "chart-line", title: "Real-time Dashboard", desc: "Visualisasi data sensor secara real-time dengan custom widget, geospatial map, alert thresholding, dan laporan otomatis yang bisa diakses dari mana saja." },
                        { icon: "arrow-up-right-dots", title: "API & System Integration", desc: "Integrasi mulus dengan SAP, Oracle, Microsoft Dynamics, dan sistem legacy melalui REST API, webhook, dan pre-built connector yang tersedia." },
                        { icon: "building-columns", title: "Device Lifecycle Management", desc: "Provisioning, monitoring, OTA firmware update, dan decommissioning ribuan device IoT dari satu konsol manajemen terpusat tanpa perlu akses fisik." }
                    ].map((item, i) => (
                        <div key={i} className="min-h-[180px] rounded-[14px] border border-[#EEF2F8] bg-white p-[22px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"><div className="mb-[18px] flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-[#DCE8FF] bg-[#EFF5FF] text-[13px] text-[#4F7BFF]"><i className={`fa-solid fa-${item.icon}`}></i></div><h4 className="mb-[10px] text-sm font-bold leading-tight text-[#112868]">{item.title}</h4><p className="text-xs leading-[1.8] text-[#667085]">{item.desc}</p></div>
                    ))}
                </div>
            </section>

            {/* ========== IOT ARCHITECTURE ========== */}
            <section className="bg-[#0D2D84] px-[24px] py-20 font-sans md:px-[80px] md:py-[110px]">
                <div className="mx-auto mb-[60px] max-w-[700px] text-center"><div className="mb-4 flex items-center justify-center gap-[10px] text-[11px] font-bold tracking-[2px] text-[#67E8F9]"><span className="h-0.5 w-[22px] bg-[#67E8F9]"></span>ARSITEKTUR IOT</div><h2 className="mb-[14px] text-3xl font-extrabold text-white md:text-4xl lg:text-[38px]">Dari Sensor ke Insight dalam 4 Layer</h2><p className="text-sm leading-[1.8] text-white/65">Arsitektur IoT UTI mengikuti standar industri dengan 4 lapisan yang saling terintegrasi untuk memastikan skalabilitas, keamanan dan reliability.</p></div>
                <div className="mx-auto max-w-[900px]">
                    {[
                        { num: "1", title: "Perception Layer", subtitle: "Device & Sensor", tags: ["Temperature Sensor", "GPS Tracker", "RFID Reader", "Smart Camera", "Vibration Sensor", "Smart Meter"], bg: "bg-[rgba(15,101,181,.35)]", numBg: "bg-[#06B6D4]" },
                        { num: "2", title: "Network Layer", subtitle: "Connectivity & Transport", tags: ["LoRaWAN", "NB-IoT", "4G/5G", "Wi-Fi 6", "Zigbee", "MQTT Broker"], bg: "bg-[rgba(77,73,202,.35)]", numBg: "bg-[#6366F1]" },
                        { num: "3", title: "Processing Layer", subtitle: "Edge & Cloud Computing", tags: ["Edge Gateway", "Time-series DB", "Stream Processing", "ML Inference", "Rule Engine"], bg: "bg-[rgba(10,128,120,.35)]", numBg: "bg-[#10B981]" },
                        { num: "4", title: "Application Layer", subtitle: "Dashboard & Integration", tags: ["Real-time Dashboard", "Alert & Notification", "ERP Integration", "Mobile App", "REST API"], bg: "bg-[rgba(30,77,195,.35)]", numBg: "bg-[#3B82F6]" }
                    ].map((layer, i) => (
                        <div key={i} className={`mb-7 flex flex-col gap-6 rounded-2xl border border-white/10 p-5 md:flex-row md:items-center md:gap-[30px] md:p-[22px_28px] ${layer.bg}`}>
                            <div className="flex min-w-[180px] items-center gap-[14px]"><div className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white ${layer.numBg}`}>{layer.num}</div><div><h4 className="text-sm text-white">{layer.title}</h4><p className="text-[11px] text-white/50">{layer.subtitle}</p></div></div>
                            <div className="flex flex-wrap gap-2"><div className="flex flex-wrap gap-2">{layer.tags.map((tag, j) => (<span key={j} className="rounded-full border border-white/10 bg-white/10 px-3 py-[7px] text-[11px] text-[#D8F3FF]">{tag}</span>))}</div></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========== CASE STUDY ========== */}
            <section className="bg-[#F5F5FB] px-[24px] py-20 font-sans md:px-[80px] md:py-[110px]">
                <div className="mb-[50px] max-w-[700px]"><div className="mb-[14px] flex items-center gap-[10px] text-[11px] font-bold tracking-[2px] text-[#315DFF]"><span className="h-0.5 w-[18px] bg-[#315DFF]"></span>STUDI KASUS & IMPACT</div><h2 className="mb-[14px] text-3xl font-extrabold leading-[1.1] text-[#112868] md:text-4xl lg:text-[40px]">Hasil Nyata dari Implementasi IoT</h2><p className="max-w-[550px] leading-[1.8] text-[#667085]">Lihat bagaimana solusi IoT UTI memberikan dampak terukur bagi klien di berbagai sektor industri.</p></div>
                <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { badge: "DIGITAL BANKING", badgeClass: "bg-[#E7F7FF] text-[#00A8E8]", title: "Predictive ATM Maintenance", desc: "Bank nasional mengurangi downtime ATM secara drastis dengan sensor IoT yang mendeteksi anomali mekanis sebelum terjadi kerusakan — maintenance berubah dari reaktif ke prediktif.", result: "78%", resultLabel: "Penurunan downtime ATM" },
                        { badge: "DIGITAL STORE", badgeClass: "bg-[#EAFBF4] text-[#10B981]", title: "Smart Inventory Retail Chain", desc: "Jaringan minimarket mengimplementasikan smart shelf dengan sensor berat RFID — out-of-stock terdeteksi otomatis dan replenishment order dikirim ke supplier tanpa campur tangan manual.", result: "43%", resultLabel: "Penurunan lost sales akibat out-of-stock" },
                        { badge: "SMART LOGISTIC", badgeClass: "bg-[#FFF4E5] text-[#F59E0B]", title: "Cold Chain Monitoring Farmasi", desc: "Distributor farmasi memantau suhu seluruh rantai dingin dari gudang hingga pengiriman — alert real-time mencegah kerusakan produk senilai miliaran rupiah setiap bulan.", result: "99.2%", resultLabel: "Cold chain compliance rate" },
                        { badge: "SMART MEDICAL", badgeClass: "bg-[#FFF0F3] text-[#F43F5E]", title: "Patient Monitoring Tanpa Batas", desc: "Rumah sakit swasta menghubungkan ratusan perangkat monitoring pasien ke platform terpusat — perawat mendapat alert dini untuk pasien berisiko tinggi tanpa harus bolak-balik ke kamar.", result: "60%", resultLabel: "Lebih cepat respon darurat" },
                        { badge: "SMART MANUFACTURING", badgeClass: "bg-[#EEF2FF] text-[#6366F1]", title: "Predictive Maintenance Pabrik", desc: "Produsen FMCG memasang vibration & thermal sensor pada 200+ mesin produksi — AI mendeteksi pola kegagalan 2 minggu sebelum terjadi, menghilangkan unplanned downtime.", result: "35%", resultLabel: "Peningkatan OEE pabrik" },
                        { badge: "SMART MANUFACTURING", badgeClass: "bg-[#EEF2FF] text-[#6366F1]", title: "Energy Management Pabrik", desc: "Smart meter IoT dipasang di seluruh titik konsumsi listrik — analitik menunjukkan mesin mana yang boros energi dan jam operasi paling efisien, memotong tagihan listrik signifikan.", result: "28%", resultLabel: "Penghematan biaya energi" }
                    ].map((item, i) => (
                        <div key={i} className="rounded-[14px] border border-[#E8EDF5] bg-white p-[22px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><div className={`mb-4 inline-flex rounded-full px-3 py-1.5 text-[9px] font-bold tracking-[0.8px] ${item.badgeClass}`}>{item.badge}</div><h3 className="mb-3 text-base font-bold text-[#112868]">{item.title}</h3><p className="mb-5 text-[13px] leading-[1.8] text-[#667085]">{item.desc}</p><div className="border-t border-[#EEF2F7] pt-4"><strong className="text-[26px] font-extrabold text-[#112868]">{item.result}</strong><span className="mt-1 block text-[11px] text-[#98A2B3]">{item.resultLabel}</span></div></div>
                    ))}
                </div>
            </section>
        </main>
        <CTAForm backgroundColor="#08184B" brandColor="#08184B" />
        </>
    );
}