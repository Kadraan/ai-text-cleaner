import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Text Cleaner - Clean PDF Text for AI',
  description: 'Remove unwanted line breaks from PDF text while preserving paragraphs. Optimized for ChatGPT, Claude, and Gemini prompts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}
