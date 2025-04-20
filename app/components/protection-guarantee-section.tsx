import Link from "next/link"

export default function ProtectionGuaranteeSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1C180D] relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-5xl md:text-5xl mb-8 md:mb-10">
            <div className="mb-4">Robinhood Protection</div>
            <div>Guarantee</div>
          </div>
          <div className="mb-12 md:mb-16">
            <Link
              href="https://robinhood.com/us/en/our-commitments/"
              className="border border-white/30 hover:border-white/50 rounded-full px-4 md:px-6 py-2 text-sm inline-flex items-center transition-colors"
            >
              Learn more about our commitments
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center w-[300px]">
              <div className="mb-6">
                <img
                  src="https://images.ctfassets.net/ilblxxee70tt/4eSlnvgaWAu2jaCVAyRcrY/602aa63fb17d4448ef651bd2944e963a/illo_secure.svg"
                  alt="Security icon"
                  className="h-[200px] w-[200px]"
                />
              </div>
              <p className="text-lg text-white/80 max-w-[300px]">We work hard to keep your data safe and secure.</p>
            </div>
            <div className="flex flex-col items-center w-[300px]">
              <div className="mb-6">
                <img
                  src="https://images.ctfassets.net/ilblxxee70tt/DwoUYJLid0EWhDOJPjFYN/673186170fb52deebdfaeb3691a28cac/illo_protect.svg"
                  alt="Protection icon"
                  className="h-[200px] w-[200px]"
                />
              </div>
              <p className="text-lg text-white/80 max-w-[300px]">We protect your account from unauthorized activity.</p>
            </div>
            <div className="flex flex-col items-center w-[300px]">
              <div className="mb-6">
                <img
                  src="https://images.ctfassets.net/ilblxxee70tt/2KMkk3plAKjRG2fPBI69a1/18a5f48bbf278bc91008f6904096b559/illo_multi-factor.svg"
                  alt="Multi-factor icon"
                  className="h-[200px] w-[200px]"
                />
              </div>
              <p className="text-lg text-white/80 max-w-[300px]">
                We provide multi-factor authentication on all accounts.
              </p>
            </div>
            <div className="flex flex-col items-center w-[300px]">
              <div className="mb-6">
                <img
                  src="https://images.ctfassets.net/ilblxxee70tt/4u2J3HEANe8rXfdytWGpAC/72bd780bca181f59b40dcf8c51f0e996/illo_247.svg"
                  alt="24/7 support icon"
                  className="h-[200px] w-[200px]"
                />
              </div>
              <p className="text-lg text-white/80 max-w-[300px]">We've got your back. We're available to you 24/7.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
