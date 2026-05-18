import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import { Phone } from "lucide-react";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "GoalGuru - AI Career Guru",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: neobrutalism, 
    }}>

    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          >
          {/* header */}
          <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-300">
                <div className="flex items-center gap-3">
                  <img src="/goal5.png" alt="GoalGuru AI Logo" className="h-10 w-[8.5rem] object-contain" />
                </div>
                <div className="text-center max-w-md text-sm">
                  GoalGuru AI is an AI-powered career coach platform for personalized resume building,
                  interview prep, and career analytics. Built with Next.js, Gemini AI, and love.
                </div>
                <div className="flex gap-4 items-center">
                  <a href="https://www.linkedin.com/in/amankumar1018/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-white">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                  </a>
                  <a href="tel:+919918853260" target="_blank" rel="noopener" aria-label="Call" className="hover:text-white">
                    <Phone className="w-6 h-6 text-current" />
                  </a>
                  <a href="mailto:amankumaar1018@gmail.com" aria-label="Email" className="hover:text-white">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14h24v-14l-12.01 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z"/></svg>
                  </a>
                </div>
              </div>
              <div className="text-center text-xs text-gray-500 mt-6">
                &copy; {new Date().getFullYear()} GoalGuru AI. All rights reserved.
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}