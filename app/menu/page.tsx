import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Plus } from "lucide-react"
import { Header } from "@/components/header"

const suggestedMeals = [
  {
    name: "Butter Chicken Combo",
    description: "Creamy butter chicken with basmati rice, naan, and pickle",
    price: "₹299",
    originalPrice: "₹349",
    rating: 4.8,
    reviews: 1250,
    time: "35 min",
    image: "/butter-chicken-with-rice-and-naan.jpg",
    vegetarian: false,
    bestseller: true,
  },
  {
    name: "Paneer Tikka Masala",
    description: "Grilled paneer in rich tomato gravy with rice and roti",
    price: "₹249",
    originalPrice: "₹289",
    rating: 4.6,
    reviews: 890,
    time: "30 min",
    image: "/paneer-tikka-masala-with-rice.jpg",
    vegetarian: true,
    bestseller: false,
  },
  {
    name: "Hyderabadi Biryani",
    description: "Aromatic basmati rice with tender mutton and traditional spices",
    price: "₹399",
    originalPrice: "₹449",
    rating: 4.9,
    reviews: 2100,
    time: "40 min",
    image: "/hyderabadi-mutton-biryani-with-raita.jpg",
    vegetarian: false,
    bestseller: true,
  },
  {
    name: "Masala Dosa Combo",
    description: "Crispy dosa with potato filling, sambar, and coconut chutney",
    price: "₹179",
    originalPrice: "₹199",
    rating: 4.5,
    reviews: 650,
    time: "25 min",
    image: "/masala-dosa-with-sambar-and-chutney.jpg",
    vegetarian: true,
    bestseller: false,
  },
]

export default function SuggestedMeals() {
  return (
    <>
      <Header />
      <section id="menu" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Recommended</span> for You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {"Our most popular meals, loved by thousands of train travelers"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestedMeals.map((meal, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={meal.image || "/placeholder.svg"}
                  alt={meal.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {meal.bestseller && <Badge className="bg-primary text-primary-foreground">Bestseller</Badge>}
                  <Badge variant={meal.vegetarian ? "secondary" : "outline"} className="bg-background/90">
                    {meal.vegetarian ? "🟢 Veg" : "🔴 Non-Veg"}
                  </Badge>
                </div>
                <Button
                  size="icon"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{meal.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{meal.description}</p>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{meal.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">({meal.reviews})</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{meal.time}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{meal.price}</span>
                    <span className="text-muted-foreground line-through text-sm">{meal.originalPrice}</span>
                  </div>
                  <Button size="sm">Add</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
