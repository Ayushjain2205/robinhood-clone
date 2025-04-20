"use client"

import Link from "next/link"
import Image from "next/image"
import { Globe, X } from "lucide-react"

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 border-b border-zinc-800">
          <Link href="/" className="flex items-center">
            <Image src="/robinhood.svg" alt="Robinhood" width={136} height={26} />
          </Link>
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-sm">US</span>
            </div>
            <Link
              href="#"
              className="bg-[#CBFF00] hover:bg-[#B8E600] text-black rounded-full px-5 py-2 text-sm font-medium mr-3"
            >
              Sign up
            </Link>
            <button className="flex items-center" onClick={onClose} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <nav className="py-8">
          <ul className="space-y-6 text-2xl">
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Invest
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Crypto
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Retirement
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Options
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Futures
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Trading
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Banking
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Credit Card
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Strategies
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Gold
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Legend
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Learn
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#CBFF00]">
                Login
              </Link>
            </li>
            <li className="pt-4 border-t border-zinc-800">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <span className="text-base">Region: US</span>
              </div>
              <div className="mt-4 pl-6">
                <Link href="#" className="block text-base py-2 hover:text-[#CBFF00]">
                  United States
                </Link>
                <Link href="#" className="block text-base py-2 hover:text-[#CBFF00]">
                  European Union
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
