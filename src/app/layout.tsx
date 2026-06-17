import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arcanum Prime | Enter the Arcane World',
  description: 'A premium luxury fantasy experience in the magical universe of Arcanum Prime.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[#080808] text-[#F8F8F8] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
