"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client.js"

export function MealCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("cuisine").select("*");
      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId: number) => {
    // Implement navigation to category-specific menu page
    window.location.href = `/category/${categoryId}`;
  }

  return (
    <section id="categories" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-primary">Meal Categories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {"From traditional Indian cuisines to international favorites, we have something for every taste bud"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="relative">
                <img
                  src={category.img_url || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {category.popular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Popular</Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.itemCount}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
