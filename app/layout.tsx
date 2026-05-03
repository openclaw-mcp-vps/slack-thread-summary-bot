import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackSumBot – AI Summaries of Long Slack Threads",
  description: "Automatically generate concise AI summaries of lengthy Slack threads. Save your team hours of reading. $29/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="231a5a31-5fcc-4aa8-98b6-72928c09b77f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
