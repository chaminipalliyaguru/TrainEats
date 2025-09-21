import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Train, Clock, Shield, Users, Award, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <Train className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">About TrainEats</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Revolutionizing train travel dining with fresh, delicious meals delivered right to your seat. Making every
              journey a culinary adventure.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded in 2023, TrainEats was born from a simple observation: train passengers deserved better food
                  options. We saw travelers settling for stale sandwiches and overpriced snacks, and knew there had to
                  be a better way.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Today, we partner with local restaurants and certified kitchens along major train routes to bring you
                  restaurant-quality meals at affordable prices, delivered fresh to your seat.
                </p>
                <Button className="bg-primary hover:bg-primary/90">Start Your Journey</Button>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground mb-4">Happy Travelers Served</div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground mb-4">Partner Restaurants</div>
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Major Train Routes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border bg-card">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Punctuality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We understand train schedules. Your meal arrives exactly when you need it, ensuring you never miss a
                    stop.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every meal is prepared fresh by certified kitchens and undergoes strict quality checks before
                    reaching you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We support local businesses along train routes, creating a network of culinary experiences across
                    the country.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Order Online</h3>
                <p className="text-muted-foreground">
                  Browse our menu and place your order using your train details and seat number.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fresh Preparation</h3>
                <p className="text-muted-foreground">
                  Our partner kitchens prepare your meal fresh and package it for train delivery.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Seat Delivery</h3>
                <p className="text-muted-foreground">
                  Your meal is delivered directly to your seat at the designated station stop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">Awards & Recognition</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Best Travel Food Service 2024</h3>
                  <p className="text-muted-foreground">Railway Passenger Association</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Innovation in Travel Dining</h3>
                  <p className="text-muted-foreground">National Transport Awards</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Transform Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of travelers who have upgraded their train dining experience with TrainEats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Order Your First Meal
              </Button>
              <Button size="lg" variant="outline">
                View Menu
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
