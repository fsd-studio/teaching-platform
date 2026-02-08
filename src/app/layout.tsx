import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const fontPrimary = localFont({
    src: '../fonts/DO.otf',
    variable: '--font-primary',
    display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${fontPrimary.variable}`}>
            <body>
                {children}
            </body>
        </html>
    )
}