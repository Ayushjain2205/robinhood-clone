import Link from "next/link"

export default function JoinSection() {
  return (
    <section className="py-32 md:py-40 bg-black relative overflow-hidden flex items-center min-h-[80vh]">
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://videos.ctfassets.net/ilblxxee70tt/3r1UZhjsj4AexVmCH9hrfH/1e7b93b16249b7ef73025a31d4cfae38/Dotcom_NewGeneration_Animation_WEB.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-8 md:mb-10">
          Join a new generation
          <br />
          of investors
        </h2>
        <Link
          href="#"
          className="bg-[#CBFF00] hover:bg-[#B8E600] text-black rounded-full px-8 py-4 text-base font-medium inline-block"
        >
          Sign up
        </Link>
      </div>
    </section>
  )
}
