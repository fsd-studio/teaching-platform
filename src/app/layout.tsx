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
    src: '../fonts/Bigilla.otf',
    variable: '--font-primary',
    display: 'swap',
});

const fontPrimaryBold = localFont({
    src: '../fonts/Bigilla-Bold.otf',
    variable: '--font-primary-bold',
    display: 'swap',
});

const fontSecondary = localFont({
    src: '../fonts/NMB.otf',
    variable: '--font-secondary',
    display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
        <html lang="hu" className={`${geistSans.variable} ${fontSecondary.variable} ${geistMono.variable} ${fontPrimary.variable} ${fontPrimaryBold.variable}`}>
            <body>
                {children}
            </body>
        </html>
    )
}