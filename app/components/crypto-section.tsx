import Link from "next/link"
import Image from "next/image"

export default function CryptoSection() {
  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px]"
      style={{
        backgroundImage: `url("https://images.ctfassets.net/ilblxxee70tt/1yBfcc0Y35v8vHS6eUXWMR/5ba2fd65e0cc48044084099e57625f94/web_crypto_hero.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-[#110E08]">
        <div className="md:max-w-md md:ml-[50%]">
          <div className="flex items-center mb-4">
            <Image src="/robinhood-crypto.svg" alt="Robinhood Crypto" width={260} height={32} className="mr-2 mb-1" />
           
          </div>
          <h3 className="text-3xl md:text-4xl mb-4">
            Get started with
            <br />
            Robinhood Crypto
            <br />
            Trade crypto 24/7
          </h3>
          <p className="mb-6">
            Start with as little as $1. Buy, sell, and transfer BTC, ETH,
            <br className="hidden md:block" />
            XRP, SOL, DOGE, SHIB, and more.
          </p>
          <div className="flex items-center mb-6">
            <div className="flex items-center text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              Crypto Risk Disclosures
            </div>
          </div>
          <Link
            href="#"
            className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-6 py-3 text-sm font-medium inline-block"
          >
            Learn more
          </Link>
          <div className="mt-16 text-xs opacity-70">Crypto offered through Robinhood Crypto.</div>
        </div>
      </div>
    </section>
  )
}
