import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import OptimizelyClientProvider from "@/components/optimizely-provider";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Optimizely | Marketing liberation",
  description:
    "Demo site styled to Optimizely brand guidelines: experimentation, content, and commerce in one platform.",
};

const webExperimentationProjectId =
  process.env.NEXT_PUBLIC_OPTIMIZELY_WEB_PROJECT_ID;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoCondensed.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-1 text-dark-fir">
        {webExperimentationProjectId && (
          // Web Experimentation snippet must load before hydration to avoid
          // a flash of the un-personalized page.
          <Script
            src={`https://cdn.optimizely.com/js/${webExperimentationProjectId}.js`}
            strategy="beforeInteractive"
          />
        )}
        <OptimizelyClientProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </OptimizelyClientProvider>
      </body>
    </html>
  );
}
