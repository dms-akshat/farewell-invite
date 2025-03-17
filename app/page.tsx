import InvitationCard from "@/components/invitation-card"
import RsvpForm from "@/components/rsvp-form"
import { StarIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-10 left-1/4 w-40 h-40 bg-amber-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          >
            <StarIcon className="text-amber-300 opacity-30" size={Math.random() * 10 + 10} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl relative z-10">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <div className="absolute inset-0 bg-amber-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-amber-400 font-bold text-xl md:text-2xl">IEEE</span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">IEEE NITK Farewell</h1>
          <p className="text-amber-300 text-lg md:text-xl font-serif italic">The IEEE Awards Night</p>

          {/* Red carpet image */}
          {/* <div className="mt-6 relative h-16 md:h-20 mx-auto max-w-md overflow-hidden rounded-lg">
            <Image src="/red_carpet.png?height=100&width=600" alt="Red Carpet" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
          </div> */}
        </header>

        <InvitationCard />

        {/* Club photos gallery
        <div className="my-16">
          <h2 className="text-2xl font-bold text-center text-white mb-6 flex items-center justify-center gap-2">
            <StarIcon className="h-5 w-5 text-amber-400" />
            <span>Memories Worth Celebrating</span>
            <StarIcon className="h-5 w-5 text-amber-400" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-video relative rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:z-10">
              <Image src="/placeholder.svg?height=200&width=350" alt="IEEE NITK Event" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">
                Technical Workshop 2024
              </div>
            </div>

            <div className="aspect-video relative rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:z-10">
              <Image src="/placeholder.svg?height=200&width=350" alt="IEEE NITK Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">Annual Conference</div>
            </div>

            <div className="aspect-video relative rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:z-10">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="IEEE NITK Celebration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">
                Team Building Retreat
              </div>
            </div>
          </div>
        </div> */}

        <div className="my-16">
          <RsvpForm />
        </div>

        <footer className="text-center mt-20 pb-8 text-gray-400">
          <p className="mb-2">© {new Date().getFullYear()} IEEE NITK Student Branch</p>
          <p className="text-sm text-amber-500/60">Built with Next.js & React</p>
        </footer>
      </div>
    </main>
  )
}

