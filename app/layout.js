import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import { Suspense } from "react";
import Loading from "./loading"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EDUsync",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <Suspense fallback={<Loading />} >
        <body className={inter.className}>
          {children}
          </body>
          </Suspense>
      </html>
    </ReduxProvider>
  );
}
