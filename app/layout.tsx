import type { Metadata } from 'next';
import { Inter, Roboto, Source_Code_Pro } from 'next/font/google';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './globals.css';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const source = Source_Code_Pro({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'landing',
    template: `%s | EZRABABIT`,
  },
  robots: {
    follow: true,
    index: true,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${source.className} ${roboto.className}`}
      >
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
