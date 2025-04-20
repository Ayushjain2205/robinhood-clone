"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, ChevronUp, Globe } from "lucide-react"

export default function Navbar({ setIsMobileMenuOpen }: { setIsMobileMenuOpen: (open: boolean) => void }) {
  const [isOfferMenuOpen, setIsOfferMenuOpen] = useState(false)
  const [isRegionMenuOpen, setIsRegionMenuOpen] = useState(false)

  return (
    <header className="border-b border-zinc-800 fixed w-full top-0 z-50 bg-black">
      <div className="px-9 flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <Image src="/robinhood.svg" alt="Robinhood" width={136} height={26} />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-sm hover:text-[#CBFF00]"
                onClick={() => setIsOfferMenuOpen(!isOfferMenuOpen)}
              >
                <span>What We Offer</span>
                {isOfferMenuOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {isOfferMenuOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-50">
                  <Link href="#" className="block px-4 py-3 text-sm hover:text-[#CBFF00]">
                    Invest
                  </Link>
                  <Link href="#" className="block px-4 py-3 text-sm hover:text-[#CBFF00]">
                    Crypto
                  </Link>
                  <Link href="#" className="block px-4 py-3 text-sm hover:text-[#CBFF00]">
                    Retirement
                  </Link>
                  <Link href="#" className="block px-4 py-3 text-sm hover:text-[#CBFF00]">
                    Options
                  </Link>
                  <Link href="#" className="block px-4 py-3 text-sm hover:text-[#CBFF00]">
                    Futures
                  </Link>
                  <Link href="#" className="block px-4 py-3 text-sm hover:text-[#CBFF00]">
                    Trading
                  </Link>
                  <Link href="#" className="block px-4 py-3 text-sm hover:text-[#CBFF00]">
                    Banking
                  </Link>
                  <Link href="#" className="block px-4 py-3 text-sm hover:text-[#CBFF00]">
                    Credit Card
                  </Link>
                </div>
              )}
            </div>
            <Link href="#" className="text-sm hover:text-[#CBFF00]">
              Strategies
            </Link>
            <Link href="#" className="text-sm hover:text-[#CBFF00]">
              Gold
            </Link>
            <Link href="#" className="text-sm hover:text-[#CBFF00]">
              Legend
            </Link>
            <Link href="#" className="text-sm hover:text-[#CBFF00]">
              Learn
            </Link>
            <Link href="#" className="text-sm hover:text-[#CBFF00]">
              Support
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          {/* Desktop navigation elements */}
          <div className="hidden md:flex items-center">
            <div className="relative mr-3">
              <button
                className="flex items-center hover:text-[#CBFF00]"
                onClick={() => setIsRegionMenuOpen(!isRegionMenuOpen)}
              >
                <Globe className="h-4 w-4 mr-1" />
                <span className="text-sm">US</span>
                {isRegionMenuOpen ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
              </button>
              {isRegionMenuOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-24 bg-black rounded-md shadow-lg py-1 z-50">
                  <Link href="#" className="block px-4 py-2 text-sm hover:text-[#CBFF00]">
                    US
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm hover:text-[#CBFF00]">
                    EU
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="#"
              className="border border-[#CBFF00] text-[#CBFF00] rounded-full px-8 h-12 text-sm hover:bg-[#CBFF00]/10 mr-3 flex items-center"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="bg-[#CBFF00] hover:bg-[#B8E600] text-black rounded-full px-8 h-12 text-sm font-medium flex items-center"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile elements */}
          <div className="flex items-center md:hidden">
            {/* Sign up button - visible on mobile */}
            <Link
              href="#"
              className="bg-[#CBFF00] hover:bg-[#B8E600] text-black rounded-full px-5 h-11 text-sm font-medium mr-3 flex items-center"
            >
              Sign up
            </Link>

            {/* Mobile menu button - 2 line hamburger */}
            <button
              className="flex flex-col justify-center space-y-1.5"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
