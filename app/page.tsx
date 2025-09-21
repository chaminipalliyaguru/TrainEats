import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MealCategories } from "@/components/meal-categories"
import { SuggestedMeals } from "@/components/suggested-meals"
import { DiscountMeals } from "@/components/discount-meals"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SuggestedMeals />
        <MealCategories />
        <DiscountMeals />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
