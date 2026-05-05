'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="glass-effect border-t border-white/10 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Xerion<span className="text-primary">X</span>
            </h3>
            <p className="text-gray-400 text-sm">
              The future of digital shopping for the Roblox community.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/info" className="hover:text-primary transition-colors">
                  Info
                </Link>
              </li>
              <li>
                <Link href="/produkte" className="hover:text-primary transition-colors">
                  Produkte
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="hover:text-primary transition-colors">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/impressum" className="hover:text-primary transition-colors">
                  {t('impressum')}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary transition-colors">
                  {t('cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} XerionX. {t('rights')}.
        </div>
      </div>
    </footer>
  );
}
