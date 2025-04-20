import Link from "next/link"

export default function TradingToolsSection() {
  return (
    <section
      className="relative py-40 md:py-40 bg-cover bg-center min-h-[500px] md:min-h-[600px] flex flex-col"
      style={{
        backgroundImage: `url("https://images.ctfassets.net/ilblxxee70tt/72AW6WOPCImTemmsfDxVFk/276b95a7314a0d484a27f3f51cc47a82/web_homepage_investing_2.jpeg")`,
      }}
    >
      <div className="container mx-auto py-8 px-4 md:px-6 relative z-10 flex flex-col flex-grow">
        <div className="md:max-w-md md:ml-[50%]">
          <h2 className="text-[#CBFF00] font-medium mb-3 text-2xl md:text-3xl">Intuitive trading tools</h2>
          <h3 className="text-2xl md:text-3xl mb-4 text-white">
            Build your strategy
            <br />
            and track market
            <br />
            trends, seamlessly
          </h3>
          <p className="text-zinc-300 mb-8">
            Trade stocks, options, crypto, and more on
            <br />
            Robinhood Legend and the Robinhood app.
          </p>
          <Link
            href="#"
            className="bg-[#CBFF00] hover:bg-[#B8E600] text-black rounded-full px-6 py-2 text-sm font-medium inline-block"
          >
            Learn more
          </Link>
        </div>
        <div className="mt-auto pt-16 md:text-right md:ml-auto md:max-w-md text-xs text-zinc-500">
          Stocks & funds offered through Robinhood Financial. Crypto offered through Robinhood Crypto. See our{" "}
          <Link href="#" className="underline">
            Fee Schedule
          </Link>{" "}
          for more details.
        </div>
      </div>
    </section>
  )
}
