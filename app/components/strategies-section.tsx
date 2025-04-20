import Link from "next/link"
import Image from "next/image"

export default function StrategiesSection() {
  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden flex items-center bg-cover bg-center min-h-[500px] md:min-h-[700px]"
      style={{
        backgroundImage: `url("https://images.ctfassets.net/ilblxxee70tt/2IeGSELP82mOWLNZHSE5R5/2dd98fffc51573df6d68de384a175435/RH25_Strategiespromo_wide_homepage_hero.jpeg")`,
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/robinhood-strategies.svg" alt="Robinhood" width={292} height={32} className="mr-2" />
            </div>
            <h3 className="text-3xl md:text-4xl mb-6">
              Your portfolio, handled
              <br />
              by the pros
            </h3>
            <p className="text-zinc-200 mb-6 max-w-md">
              Get timely market insights with an expert-managed portfolio that proactively adjusts your investments.
              Robinhood Gold members get zero management fees on every dollar over $100K.
            </p>
            <p className="text-zinc-400 mb-6 text-sm">Terms apply. Gold subscription $5/month.</p>
            <Link
              href="#"
              className="bg-[#CBFF00] hover:bg-[#B8E600] text-black rounded-full px-6 py-3 text-sm font-medium inline-block"
            >
              Get started
            </Link>
            <div className="mt-16 text-xs text-zinc-400 max-w-md">
              For illustrative purposes only. Portfolio management offered through Robinhood Asset Management
              ("Robinhood Strategies"), an SEC-registered investment advisor. Gold membership is offered by Robinhood
              Gold, LLC.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
