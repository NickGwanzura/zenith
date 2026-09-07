import type { Metadata } from 'next';
import './globals.css';
import './hero.css';
import './surfaces.css';
import './products.css';
import './chrome.css';
import './whatsapp.css';
import WhatsAppBoot from './whatsapp-boot';

export const metadata: Metadata = {
  metadataBase: new URL('https://zenith-technologies-zimbabwe.sweet-mug-4574.chatgpt.site'),
  title: { default: 'Zenith Technologies | Smart living, thoughtfully connected.', template: '%s | Zenith Technologies' },
  description: 'Premium smart home automation, intelligent security and connected living environments in Zimbabwe.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Your home. Smarter.', description: 'Smart living, thoughtfully connected.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<WhatsAppBoot /></body></html>;
}
