"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Plus } from "lucide-react";
import { supabase } from "@/utils/supabase/client.js"
import { Footer } from "@/components/footer";

export default function CategoryPage() {
  const { id: category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const { data, error } = await supabase
        .from("meal")
        .select(`*, cuisine(name)`)
        .eq("cuisine_id", decodeURIComponent(category));

      if (error) console.error(error);
      else setMeals(data);
    };

    fetchMeals();
  }, [category]);

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {meals[0]?.cuisine?.name || "Category"} <span className="text-primary">Meals</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover delicious meals from the <strong>{meals[0]?.cuisine?.name || "Category"}</strong> category
            </p>
          </div>

          {meals?.length === 0 ? (
            <p className="text-center text-muted-foreground">No meals found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {meals.map((meal, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={meal.img_url || "/placeholder.svg"}
                      alt={meal.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {meal.bestseller && (
                        <Badge className="bg-primary text-primary-foreground">Bestseller</Badge>
                      )}
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
                        <span className="font-bold text-lg">Rs. {meal.price}.00</span>
                        {meal.originalPrice && (
                          <span className="text-muted-foreground line-through text-sm">
                            {meal.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button size="sm">Add</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
