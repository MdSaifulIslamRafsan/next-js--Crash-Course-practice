import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"] ,   weight: '400', });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body className={poppins.className}>
        <nav className="bg-gray-600 text-center uppercase">
          <ul className="flex justify-center gap-5">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>

        </nav>
        {children}
        <footer className="bg-gray-600 text-center uppercase">this is footer</footer>
        </body>
    </html>
  );
}
