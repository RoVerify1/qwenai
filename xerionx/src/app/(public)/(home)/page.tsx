'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/produkte"
                className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all hover:shadow-neon flex items-center justify-center gap-2"
              >
                {t('ctaPrimary')}
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/info"
                className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all border border-white/20"
              >
                {t('ctaSecondary')}
              </Link>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="glass-effect p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-400">Instant access to all products after purchase</p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-400">Your transactions are protected and safe</p>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-400">Join thousands of satisfied customers</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
