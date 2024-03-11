import "./globals.css";
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const SansitaOne = localFont({
  src: './SansitaOne.woff2',
  variable: '--sansita-one-font',
  display: 'swap',
})

export const metadata = {
  title: "Local Ds",
  description: "Manchester based doghnuts store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${SansitaOne.variable}`}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
