import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center">
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-background.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl lg:text-[100px] font-serif mb-6">
          Built for the
          <br />
          Future of Trading
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Analyze, buy, and sell with tools purpose-built for how you trade.
        </p>
        <Link
          href="#"
          className="bg-[#CBFF00] hover:bg-[#B8E600] text-black rounded-full px-8 py-3 text-sm font-medium inline-block"
        >
          Sign up
        </Link>
      </div>
    </section>
  )
}
