import type { ReactNode } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";
import { globalStyles } from "@/lib/global-styles";
import { Providers } from "@/components/providers";
import { StudioHeader } from "@/components/StudioHeader";
import { BottomNav } from "@/components/BottomNav";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content="69c22f7b3c2c56b9bbd2f616" />
        <meta
          name="talentapp:project_verification"
          content="5920e03fe54fa06ada0c8dba2ae69f29a8a79e2537079347221062184b72f49a74cbfd8d7cec18844483fec59247df8bf1631273bffc8fe72eb9fcc1afaebc11"
        />
        <meta name="theme-color" content="#FFF8F2" />
        <meta name="application-name" content="name-vote" />
        <meta name="description" content="Naming submission tool for Base projects, NFT drops, and campaigns." />
        <title>name-vote</title>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <Providers>
          <div className="app-shell">
            <StudioHeader />
            <main className="page-shell">{children}</main>
            <BottomNav />
          </div>
        </Providers>
      </body>
    </html>
  );
}
