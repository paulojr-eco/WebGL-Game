import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: 'WebGL Game',
  description: 'Game created by Paulo Paiva',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${nunito.className} font-sans w-screen h-screen bg-background`}>
        {children}
      </body>
    </html>
  );
}
