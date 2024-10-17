import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Uidocs',
  description: 'A documentation site for Uidu org',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
