"use client";

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, User, Train, Moon, Sun } from "lucide-react"

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDarkMode) {
      htmlElement.classList.add("dark")
    } else {
      htmlElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <Train className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">TrainEats</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/menu" className="text-muted-foreground hover:text-foreground transition-colors">
            Menu
          </a>
          <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors">
            Categories
          </a>
          <a href="#offers" className="text-muted-foreground hover:text-foreground transition-colors">
            Offers
          </a>
          <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button className="hidden sm:flex">Order Now</Button>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
