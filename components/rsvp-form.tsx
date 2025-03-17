"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"
import { AwardIcon, StarIcon } from "lucide-react"

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    foodPreference: "",
    afterparty: "",
    alcohol: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "RSVP Submitted",
        description: "Thank you for your response!",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        attending: "",
        foodPreference: "",
        afterparty: "",
        alcohol: "",
      })
    }, 1500)
  }

  return (
    <Card className="w-full border-2 border-amber-500 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=500')] opacity-5 bg-repeat"></div>

      <CardHeader className="bg-gradient-to-r from-amber-700 to-amber-500 text-white relative">
        <div className="absolute top-2 right-2">
          <AwardIcon className="h-8 w-8 text-white opacity-20" />
        </div>
        <CardTitle className="text-2xl flex items-center gap-2">
          <StarIcon className="h-5 w-5" />
          RSVP
          <StarIcon className="h-5 w-5" />
        </CardTitle>
        <CardDescription className="text-amber-100">Please respond by May 5, 2025</CardDescription>
      </CardHeader>

      <CardContent className="pt-6 relative z-10">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-gray-800 border-gray-700 text-white focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="bg-gray-800 border-gray-700 text-white focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <div className="grid gap-3">
              <Label className="text-white">Will you be attending our awards ceremony?</Label>
              <RadioGroup
                value={formData.attending}
                onValueChange={(value) => handleRadioChange("attending", value)}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                  <RadioGroupItem value="yes" id="attending-yes" className="text-amber-500 border-amber-500" />
                  <Label htmlFor="attending-yes" className="cursor-pointer text-gray-200">
                    Yes, I'll walk the red carpet
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                  <RadioGroupItem value="no" id="attending-no" className="text-amber-500 border-amber-500" />
                  <Label htmlFor="attending-no" className="cursor-pointer text-gray-200">
                    No, I can't make it
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attending === "yes" && (
              <>
                <div className="grid gap-3">
                  <Label className="text-white">Food Preference</Label>
                  <RadioGroup
                    value={formData.foodPreference}
                    onValueChange={(value) => handleRadioChange("foodPreference", value)}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                      <RadioGroupItem value="veg" id="food-veg" className="text-amber-500 border-amber-500" />
                      <Label htmlFor="food-veg" className="cursor-pointer text-gray-200">
                        Vegetarian
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                      <RadioGroupItem value="nonveg" id="food-nonveg" className="text-amber-500 border-amber-500" />
                      <Label htmlFor="food-nonveg" className="cursor-pointer text-gray-200">
                        Non-Vegetarian
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-3">
                  <Label className="text-white">Will you join the afterparty?</Label>
                  <RadioGroup
                    value={formData.afterparty}
                    onValueChange={(value) => handleRadioChange("afterparty", value)}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                      <RadioGroupItem value="yes" id="afterparty-yes" className="text-amber-500 border-amber-500" />
                      <Label htmlFor="afterparty-yes" className="cursor-pointer text-gray-200">
                        Yes, ready for the VIP lounge
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                      <RadioGroupItem value="no" id="afterparty-no" className="text-amber-500 border-amber-500" />
                      <Label htmlFor="afterparty-no" className="cursor-pointer text-gray-200">
                        No, I'll skip the afterparty
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-3">
                  <Label className="text-white">Alcohol preference?</Label>
                  <RadioGroup
                    value={formData.alcohol}
                    onValueChange={(value) => handleRadioChange("alcohol", value)}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                      <RadioGroupItem value="yes" id="alcohol-yes" className="text-amber-500 border-amber-500" />
                      <Label htmlFor="alcohol-yes" className="cursor-pointer text-gray-200">
                        Yes, champagne please
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-colors">
                      <RadioGroupItem value="no" id="alcohol-no" className="text-amber-500 border-amber-500" />
                      <Label htmlFor="alcohol-no" className="cursor-pointer text-gray-200">
                        No, I'll stick to mocktails
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </>
            )}
          </div>

          <CardFooter className="flex justify-end px-0 pt-6">
            <Button type="submit" disabled={isSubmitting} className="bg-amber-600 hover:bg-amber-700 text-white">
              {isSubmitting ? "Submitting..." : "Submit RSVP"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}

