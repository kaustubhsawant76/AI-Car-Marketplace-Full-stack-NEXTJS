import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


const inter=Inter({subsets:["latin"]})

export const metadata = {
  title: "Vehiql",
  description: "Find your dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
        <Header/>
       <main className="h-screen"> {children}</main>
       <footer className="bg-blue-50 py-7">
        <div className="container text-center mx-auto text-gray-600 px-4"><p>Made with ❤ by Kaustubh Sawant </p></div>
       </footer>
      </body>
    </html>

    </ClerkProvider>
  );
}
