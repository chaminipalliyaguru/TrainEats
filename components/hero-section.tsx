import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Fresh Meals Delivered to <span className="text-primary">Your Train Seat</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            {
              "Skip the crowded pantry car. Order restaurant-quality meals and have them delivered directly to your seat during your journey."
            }
          </p>

          <div className="bg-card border border-border rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Enter your meal" className="pl-10" />
              </div>
              {/* <div className="flex-1 relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Seat number (e.g., A1-25)" className="pl-10" />
              </div> */}
              <Button size="lg" className="sm:w-auto w-full">
                <Search className="h-5 w-5 mr-2" />
                Find Meals
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {"30-45 min delivery"}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {"500+ menu items"}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {"Available on 200+ routes"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
