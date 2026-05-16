import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelancer Time Billing Accuracy Checker",
  description: "Verify freelancer time tracking accuracy. Analyze screen activity, app usage, and typing patterns to validate billable hours and detect time inflation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="814baa15-f4f1-4c56-88bd-10816e4fbcdd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
