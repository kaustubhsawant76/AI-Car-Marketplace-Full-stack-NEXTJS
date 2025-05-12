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
import { Toaster } from "sonner";


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
       <Toaster richColors/>

      </body>
    </html>

    </ClerkProvider>
  );
}
