"use client";

import { type CSSProperties, type FormEvent } from "react";

const ctaFields = [
    { name: "first", label: "Nama Depan", type: "text", required: true },
    { name: "last", label: "Nama Belakang", type: "text" },
    { name: "company", label: "Asal Perusahaan", type: "text", required: true },
    { name: "position", label: "Posisi di Perusahaan", type: "text", required: true },
    { name: "email", label: "Email Kerja", type: "email", required: true },
    { name: "need", label: "Kebutuhan", type: "text", required: true },
    { name: "phone", label: "Nomor Ponsel", type: "tel", required: true, span: 2 },
];

type CTAFormProps = {
    backgroundColor?: string;
    brandColor?: string;
};

export default function CTAForm({
    backgroundColor = "#004799",
    brandColor = "#004799",
}: CTAFormProps) {
    const style = {
        "--cta-bg": backgroundColor,
        "--cta-brand": brandColor,
    } as CSSProperties;

    return (
        <section
            className="relative bg-[var(--cta-bg)] text-white pt-32 pb-20 md:pt-44 md:pb-24"
            style={style}
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-32 bg-white" />
            <div className="container-uti relative">
                <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_560px] items-center">
                    <div className="max-w-xl md:pr-8">
                        <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                            Siap Membangun Masa Depan Digital Perusahaan Anda?
                        </h3>
                        <p className="text-xs md:text-sm text-white/90 mt-3 leading-relaxed max-w-md">
                            Bergabunglah dengan ratusan klien enterprise yang telah mempercepat
                            pertumbuhan bisnis mereka melalui infrastruktur TI yang tangguh dan
                            solusi otomatisasi cerdas dari UTI.
                        </p>
                    </div>

                    <div
                        className="bg-white text-ink rounded-2xl p-7 md:p-10 shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.12),0_40px_90px_-30px_rgba(0,0,0,0.35)] w-full md:max-w-[560px] md:justify-self-end md:-mt-32"
                    >
                        <p className="text-xs font-semibold tracking-wider uppercase text-ink/60 mb-1">
                            Hubungi Kami
                        </p>
                        <h3 className="text-lg md:text-xl font-extrabold text-[var(--cta-brand)] mb-3">
                            Diskusikan Solusi Anda
                        </h3>
                        <form
                            className="grid gap-4 sm:grid-cols-2"
                            onSubmit={(e: FormEvent<HTMLFormElement>) => {
                                e.preventDefault();
                            }}
                        >
                            {ctaFields.map((f) => (
                                <label
                                    key={f.name}
                                    className={`text-[11px] font-medium text-[#404040] grid gap-1 ${f.span === 2 ? "sm:col-span-2" : ""
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-1">
                                        {f.label}
                                        {f.required && <span className="text-red-500">*</span>}
                                    </span>
                                    <input
                                        type={f.type}
                                        required={f.required}
                                        className="rounded-md border border-transparent bg-[#f2f2f2] px-4 py-3 text-[13px] text-[#404040] focus:outline-none focus:border-[var(--cta-brand)] transition"
                                    />
                                </label>
                            ))}
                            <button
                                type="submit"
                                className="mt-2 bg-[var(--cta-brand)] text-white font-semibold rounded-md py-3.5 text-xs md:text-sm hover:brightness-110 transition sm:col-span-2"
                            >
                                Kirim
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
