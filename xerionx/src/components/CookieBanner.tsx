'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const t = useTranslations('CookieBanner');

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-white/10 p-4"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">{t('message')}</p>
          <div className="flex gap-4">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              {t('decline')}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('accept')}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
