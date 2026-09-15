import type { Metadata } from "next";
import { Suspense } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Providers from "./providers";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "TikTik - TikTok Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="xl:w-[1200px] m-auto overflow-hidden h-screen">
            <Navbar />
            <div className="flex gap-6 md:gap-20">
              <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
                <Suspense fallback={null}>
                  <Sidebar />
                </Suspense>
              </div>
              <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
                {children}
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
