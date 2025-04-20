"use client"

import { useState } from "react"
import Navbar from "./components/navbar"
import MobileMenu from "./components/mobile-menu"
import HeroSection from "./components/hero-section"
import TradingToolsSection from "./components/trading-tools-section"
import CryptoSection from "./components/crypto-section"
import StrategiesSection from "./components/strategies-section"
import ProtectionGuaranteeSection from "./components/protection-guarantee-section"
import AppPromoSection from "./components/app-promo-section"
import JoinSection from "./components/join-section"
import Footer from "./components/footer"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <TradingToolsSection />
        <CryptoSection />
        <StrategiesSection />
        <ProtectionGuaranteeSection />
        <AppPromoSection />
        <JoinSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
