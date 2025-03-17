"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, ClockIcon, AwardIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Confetti from "@/components/confetti"
// import Papa from "papaparse"

// const fetchUserData = async (email: string) => {
//   const response = await fetch("/seniors.csv") // Ensure this file is inside /public
//   const csvText = await response.text()

//   const { data } = Papa.parse(csvText, { header: true }) // Convert CSV to JSON

//   const user = data.find((row) => row.email === email)

//   return user || {
//     name: "Dear Senior",
//     role: "IEEE NITK Member",
//   }
// }

// This would be replaced with actual API call to your backend
const fetchUserData = async (email: string) => {
  // Simulating API call with mock data
  // In a real application, this would be an API call to your backend
  const mockSeniors = {
    "aditya.sharma@nitk.edu.in": {
      name: "Aditya Sharma",
      role: "Chairperson",
      department: "Computer Science",
    },
    "priya.patel@nitk.edu.in": {
      name: "Priya Patel",
      role: "Vice Chairperson",
      department: "Electrical Engineering",
    },
    "rahul.verma@nitk.edu.in": {
      name: "Rahul Verma",
      role: "Secretary",
      department: "Electronics",
    },
    // Default user if email not found
    default: {
      name: "Dear Senior",
      role: "IEEE NITK Member",
      department: "Engineering",
    },
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Return user data or default if not found
  return mockSeniors[email as keyof typeof mockSeniors] || mockSeniors.default
}

export default function InvitationCard() {
  const [userData, setUserData] = useState({
    name: "Dear Senior",
    role: "IEEE NITK Member",
  })
  const [userEmail, setUserEmail] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [showConfetti, setShowConfetti] = useState(false)

  // Event details
  const eventDetails = {
    date: "May 28, 2025",
    time: "6:00 PM onwards",
    venue: "Le Sparrow Beach Resort",
    dress: "Award Show Attire",
    theme: "The IEEE Awards Night",
  }

  useEffect(() => {
    // In a real application, you would get the email from authentication
    // or from URL parameters. For demo purposes, we'll simulate this.
    const getEmailFromUrl = () => {
      // In a real app, you might get this from the URL or a cookie
      // For demo, we'll just return a mock email
      return "default"
    }

    const loadUserData = async () => {
      setIsLoading(true)
      const email = getEmailFromUrl()
      setUserEmail(email)

      try {
        const data = await fetchUserData(email)
        setUserData(data)
        // Show confetti after data loads
        setTimeout(() => setShowConfetti(true), 500)
      } catch (error) {
        console.error("Error fetching user data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUserData()
  }, [])

  return (
    <>
      {showConfetti && <Confetti />}
      <Card className="w-full overflow-hidden border-2 border-amber-500 shadow-lg bg-gray-900 relative">
        {/* Oscar statue silhouettes */}
        <div className="absolute top-0 right-0 opacity-10 w-32 h-32">
          <AwardIcon className="w-full h-full text-amber-500" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 w-32 h-32 rotate-180">
          <AwardIcon className="w-full h-full text-amber-500" />
        </div>

        <div className="bg-gradient-to-r from-amber-700 to-amber-500 p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=500')] opacity-10 bg-repeat"></div>
          <div className="flex items-center justify-center gap-2">
            <StarIcon className="h-6 w-6 text-white animate-pulse" />
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center">INVITATION</h2>
            <StarIcon className="h-6 w-6 text-white animate-pulse" />
          </div>
        </div>

        <CardContent className="p-6 md:p-8 relative">
          {/* Red carpet background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent"></div>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
            </div>
          ) : (
            <>
              <div className="text-center mb-8 relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-amber-500">{userData.name}!</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  You are cordially invited to walk the red carpet at the IEEE NITK Farewell -{" "}
                  <span className="italic font-semibold text-amber-400">"The IEEE Awards Night"</span>. As our esteemed Senior
                  , your presence will make this star-studded evening truly special.
                </p>
              </div>

              {/* Club Photo */}
              <div className="relative h-48 md:h-64 mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/full_club.jpg?height=300&width=800"
                  alt="IEEE NITK Club Photo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-shadow font-medium">IEEE NITK Student Branch - Batch of 2025</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 relative z-10">
                <div className="flex items-start space-x-3 bg-gray-800/50 p-3 rounded-lg border border-amber-500/20 transform transition-transform hover:scale-105">
                  <CalendarIcon className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Date</h4>
                    <p className="text-gray-300">{eventDetails.date}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-800/50 p-3 rounded-lg border border-amber-500/20 transform transition-transform hover:scale-105">
                  <ClockIcon className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Time</h4>
                    <p className="text-gray-300">{eventDetails.time}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-800/50 p-3 rounded-lg border border-amber-500/20 transform transition-transform hover:scale-105">
                  <MapPinIcon className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Venue</h4>
                    <p className="text-gray-300">{eventDetails.venue}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-gray-800/50 p-3 rounded-lg border border-amber-500/20 transform transition-transform hover:scale-105">
                  <svg
                    className="h-6 w-6 text-amber-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium text-white">Dress Code</h4>
                    <p className="text-gray-300">{eventDetails.dress}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center relative z-10">
                <div className="inline-block relative">
                  <p className="text-amber-300 italic font-serif text-lg md:text-xl relative z-10 px-8">
                    "And the memories we've made together deserve nothing less than a standing ovation."
                  </p>
                  <div className="absolute -left-2 top-0 text-amber-500 text-4xl opacity-50">"</div>
                  <div className="absolute -right-2 bottom-0 text-amber-500 text-4xl opacity-50">"</div>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </>
  )
}

