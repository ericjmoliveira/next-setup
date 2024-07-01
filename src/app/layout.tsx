import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn('dark min-h-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
