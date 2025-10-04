"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Percent } from "lucide-react"
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client.js"

const discountMeals = [
  {
    name: "Rajma Chawal Combo",
    description: "Homestyle rajma with steamed rice, pickle, and papad",
    price: "₹149",
    originalPrice: "₹199",
    discount: "25% OFF",
    rating: 4.4,
    reviews: 420,
    time: "30 min",
    image: "/rajma-chawal-with-pickle.jpg",
    vegetarian: true,
  },
  {
    name: "Chicken Fried Rice",
    description: "Wok-tossed rice with chicken, vegetables, and soy sauce",
    price: "₹199",
    originalPrice: "₹249",
    discount: "20% OFF",
    rating: 4.3,
    reviews: 380,
    time: "25 min",
    image: "/chicken-fried-rice-with-vegetables.jpg",
    vegetarian: false,
  },
  {
    name: "Aloo Paratha Combo",
    description: "Stuffed potato paratha with curd, pickle, and butter",
    price: "₹129",
    originalPrice: "₹169",
    discount: "24% OFF",
    rating: 4.2,
    reviews: 290,
    time: "20 min",
    image: "/aloo-paratha-with-curd-and-pickle.jpg",
    vegetarian: true,
  },
]

export function DiscountMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const { data, error } = await supabase.from("meal_discount").select("*");
      if (error) {
        console.error("Error fetching meals:", error);
      } else {
        setMeals(data);
      }
    };

    fetchMeals();
  }, []);

  return (
    <section id="offers" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Special Offers</span> & Discounts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {"Save more on your favorite meals with our limited-time offers"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {meals.map((meal, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-destructive text-destructive-foreground px-3 py-1 text-sm font-bold rounded-bl-lg flex items-center gap-1">
                  <Percent className="h-3 w-3" />
                  {meal.new_price}
                </div>
              </div>

              <div className="relative">
                <img
                  src={meal.image || "/placeholder.svg"}
                  alt={meal.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  variant={meal.vegetarian ? "secondary" : "outline"}
                  className="absolute bottom-3 left-3 bg-background/90"
                >
                  {meal.vegetarian ? "🟢 Veg" : "🔴 Non-Veg"}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{meal.name}</h3>
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
                    <span className="font-bold text-lg text-primary">{meal.price}</span>
                    <span className="text-muted-foreground line-through text-sm">{meal.originalPrice}</span>
                  </div>
                  <Button size="sm" variant="outline">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
