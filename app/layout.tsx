import type { ReactNode } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";
import { globalStyles } from "@/lib/global-styles";
import {
  appDescription,
  appHeroImageUrl,
  appIconUrl,
  appName,
  appOgImageUrl,
  appSubtitle,
  appTagline,
  appUrl,
} from "@/lib/app-config";
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

const miniAppEmbed = JSON.stringify({
  version: "next",
  imageUrl: appHeroImageUrl,
  button: {
    title: "Open name-vote",
    action: {
      type: "launch_miniapp",
      name: appName,
      url: appUrl,
      splashImageUrl: appIconUrl,
      splashBackgroundColor: "#FFF8F2",
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content="69c9f1ab54fba99e37410fe6" />
        <meta
          name="talentapp:project_verification"
          content="5920e03fe54fa06ada0c8dba2ae69f29a8a79e2537079347221062184b72f49a74cbfd8d7cec18844483fec59247df8bf1631273bffc8fe72eb9fcc1afaebc11"
        />
        <meta name="theme-color" content="#FFF8F2" />
        <meta name="application-name" content={appName} />
        <meta name="description" content={appDescription} />
        <meta property="og:title" content={appName} />
        <meta property="og:site_name" content={appName} />
        <meta property="og:description" content={appDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={appUrl} />
        <meta property="og:image" content={appOgImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={appName} />
        <meta name="twitter:description" content={appDescription} />
        <meta name="twitter:image" content={appOgImageUrl} />
        <meta name="fc:miniapp" content={miniAppEmbed} />
        <meta name="fc:frame" content={miniAppEmbed} />
        <meta name="fc:miniapp:subtitle" content={appSubtitle} />
        <meta name="fc:miniapp:tagline" content={appTagline} />
        <link rel="canonical" href={appUrl} />
        <link rel="icon" href="/icon-1024.png" />
        <title>{appName}</title>
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
