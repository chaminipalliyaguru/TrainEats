import { Card, CardContent } from "@/components/ui/card"
import { Train, Clock, Shield, Utensils, MapPin, Headphones } from "lucide-react"

const features = [
  {
    icon: Train,
    title: "Seat-Side Delivery",
    description: "Meals delivered directly to your train seat without any hassle",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "30-45 minute delivery window with real-time tracking",
  },
  {
    icon: Shield,
    title: "Hygienic Packaging",
    description: "Food safety certified with tamper-proof packaging",
  },
  {
    icon: Utensils,
    title: "Fresh & Hot",
    description: "Freshly prepared meals delivered hot to maintain quality",
  },
  {
    icon: MapPin,
    title: "200+ Routes",
    description: "Available on major train routes across India",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for any assistance",
  },
]

export function Features() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">TrainEats</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {"Experience the convenience of restaurant-quality meals during your train journey"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
