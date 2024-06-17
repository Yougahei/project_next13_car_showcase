import "./globals.css";

import {cn} from "@lib/utils";

// import { Footer, NavBar } from "@components";
import Footer from "@components/Footer";
import NavBar from "@components/Navbar";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
          <body className={cn('relative',
              "min-h-screen bg-background font-sans antialiased"
            )}
          >
              <NavBar/>
              {children}
              <Footer/>
          </body>
      </html>
  );
}
