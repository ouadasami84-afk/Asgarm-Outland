import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Outland | Le Royaume d\'Asgarm',
  description: 'Rejoignez l\'élite sur Outland. Explorez les mystères d\'Asgarm dans une expérience immersive haut de gamme.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[#03040a] text-[#F8F8F8] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}