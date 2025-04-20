import Link from "next/link"

export default function AppPromoSection() {
  return (
    <section className="pt-16 md:pt-20 pb-0 bg-[#CBFF00] text-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-5xl mb-6 max-w-3xl">
            Become a better investor
            <br />
            on the go, right in the app
          </h2>
          <p className="text-base md:text-lg mb-8">Here's a preview of the things you can learn when you sign up.</p>
          <Link
            href="#"
            className="bg-black text-white hover:bg-zinc-800 rounded-full px-6 md:px-8 py-3 text-sm font-medium inline-block"
          >
            Sign up to access Robinhood Learn
          </Link>
        </div>

        <div className="relative h-[350px]">
          <img
            src="https://images.ctfassets.net/ilblxxee70tt/PKdx5QPF2hxl9vcbxm55W/b1942354f732fbb69a019c53c73bf46b/homepage_learn_phone_2x.png"
            alt="Robinhood Learn mobile app"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[350px] max-w-none"
          />
        </div>
      </div>
    </section>
  )
}
