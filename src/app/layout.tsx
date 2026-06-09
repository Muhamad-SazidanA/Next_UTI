import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "~/components/site-header-footer";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "UTI - United Teknologi Integrasi",
    description:
        "Enterprise Intelligence & Infrastructure Ecosystem. Solusi AI, Automation, dan Infrastruktur IT untuk perusahaan modern.",
    icons: {
        icon: "/images/MainLogo-Uti.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="id" suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
            </head>
            <body className="min-h-screen">
                <SiteHeader />
                {children}
                <SiteFooter />
            </body>
        </html>
    );
}
