'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('Nav');

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/info', label: t('info') },
    { href: '/produkte', label: t('products') },
    { href: '/tutorials', label: t('tutorials') },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Xerion<span className="text-primary glow-text">X</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  pathname === link.href ? 'text-primary' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
            >
              {t('admin')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors hover:text-primary ${
                  pathname === link.href ? 'text-primary' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 bg-primary/20 text-primary rounded-lg"
            >
              {t('admin')}
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
