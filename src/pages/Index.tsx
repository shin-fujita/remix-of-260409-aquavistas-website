import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Ship, Star, MapPin, Music, Sparkles, ChevronRight, Waves } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const S3 = "https://aquavistas-website-media.s3.eu-north-1.amazonaws.com/Photos/TH%20Treasure%20Hunts/";
const heroImg = `${S3}TH%20Adventurer%201.jpg`;
const thCave = `${S3}TH%20Adventurer%202.jpg`;
const thExplore = `${S3}TH%20Adventurer%203.jpg`;
const thCoin = `${S3}TH%20Coin.jpg`;
const thSkulls = `${S3}TH%20Skulls%20in%20Sand.jpg`;
const thSword = `${S3}TH%20Sword%20in%20Sand.jpg`;

const brokerages = [
  "Edmiston", "TWW", "Northrop & Johnson", "Fraser", "YachtZoo",
  "Baroque", "BWA", "Ocean Independence", "Burgess", "IYC",
];

const yachts = [
  "M/Y NERO", "M/Y OLGA I", "M/Y AFTER YOU", "M/Y ESMERELDA",
  "M/Y AL SAID", "M/Y LADY MOURA", "M/Y KATARA", "M/Y AL MIRQAB",
  "M/Y TOPAZ", "M/Y PHOENIX 2", "M/Y TITANIA", "M/Y LANA",
];

const locations = [
  { name: "Monaco", region: "Mediterranean" },
  { name: "Antibes", region: "Mediterranean" },
  { name: "Palma de Mallorca", region: "Mediterranean" },
  { name: "Ibiza", region: "Mediterranean" },
  { name: "Sardinia", region: "Mediterranean" },
  { name: "Amalfi Coast", region: "Mediterranean" },
  { name: "Mykonos", region: "Mediterranean" },
  { name: "Dubrovnik", region: "Mediterranean" },
  { name: "St. Barts", region: "Caribbean" },
  { name: "Antigua", region: "Caribbean" },
  { name: "St. Martin", region: "Caribbean" },
  { name: "Virgin Islands", region: "Caribbean" },
];

const steps = [
  { icon: Ship, title: "Plan", desc: "Tell us about your trip, dates and guests. We'll take it from there." },
  { icon: Sparkles, title: "We Design", desc: "Our creative team crafts a unique experience tailored to your vessel and occasion." },
  { icon: Star, title: "We Wow", desc: "Guests are left speechless. They have stories of a lifetime. You made it possible." },
];

const uniques = [
  {
    icon: Sparkles,
    title: "We Wow",
    desc: "Everything we do is designed to wow those who've seen it all. And we're not only obsessed with the guests, but Captains and Brokers too.",
  },
  {
    icon: Anchor,
    title: "Logistics, Logistics, Logistics",
    desc: "We place a heavy focus on smooth logistics, to seamlessly work alongside crew planning. We arrive with everything — minimal footprint, zero hassle.",
  },
  {
    icon: Ship,
    title: "Experience on Water",
    desc: "With over 150 shows delivered beyond expectations, you're in safe hands. We work specifically with yachts — we understand the unique challenges and opportunities of performing at sea.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-avs-navy text-white min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-top"
            src="/showreel.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-avs-navy/90 via-avs-navy/70 to-avs-navy/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-24 md:py-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-avs-teal font-bold text-sm mb-4">
              Onboard, Anywhere
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Premium Entertainment<br />
              <span className="text-avs-teal">for Superyachts</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Award-winning onboard shows, live music and immersive experiences delivered anywhere from the Mediterranean to the Caribbean and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="tracking-wider font-bold text-sm">
                <Link to="/shows">Explore Our Shows</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="tracking-wider font-bold text-sm border-white/30 bg-white/10 text-avs-teal hover:bg-white/20 hover:text-avs-teal">
                <Link to="/enquiry">Enquire Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-muted-foreground font-bold mb-6">
            Trusted by the Yachting Community
          </p>
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-left gap-12 w-max">
              {[...brokerages, ...brokerages].map((name, i) => (
                <span key={i} className="text-sm font-medium text-muted-foreground whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proven Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-primary font-bold text-xs mb-2">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What to Expect</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Uniques */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-primary font-bold text-xs mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Brokers, Crew & Agents Choose Aquavistas
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {uniques.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="h-full border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs text-muted-foreground font-bold mb-6">As Featured In</p>
            <div className="flex items-center justify-center gap-12 flex-wrap">
              <span className="text-2xl font-bold text-foreground italic">Forbes</span>
              <span className="text-lg font-medium text-muted-foreground">Yacht International</span>
              <span className="text-lg font-medium text-muted-foreground">SuperYacht Times</span>
              <span className="text-lg font-medium text-muted-foreground">Boat International</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Yacht Portfolio */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-8">
            <p className="text-primary font-bold text-xs mb-2">Previously Seen On</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Yachts We've Performed On</h2>
          </motion.div>
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-left gap-10 w-max">
              {[...yachts, ...yachts].map((name, i) => (
                <span key={i} className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experience — Treasure Hunts */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-bold text-xs mb-2">Our Signature Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Treasure Hunts</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our flagship immersive adventure — a cinematic Treasure Hunt brought to life from your superyacht to the stunning shores of your dream location.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { src: thCave, alt: "Adventurer exploring ancient caves" },
              { src: thCoin, alt: "Pirate treasure coin prop" },
              { src: thSkulls, alt: "Skulls in the sand — Treasure Hunt props" },
              { src: thSword, alt: "Sword in the sand on a Mediterranean beach" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="overflow-hidden rounded-lg aspect-square"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="tracking-wider text-sm font-bold">
              <Link to="/shows/treasure-rush">
                Discover Treasure Rush <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trailers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-bold text-xs mb-2">See It In Action</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trailers</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <motion.div key={i} {...fadeUp}>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center">
                    <Waves className="h-10 w-10 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Video Trailer {i}</p>
                    <p className="text-xs text-muted-foreground/60">Coming soon</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-primary font-bold text-xs mb-2">What They Say</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Guest Reviews</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { quote: "A Hit!", author: "Capt. Busse", yacht: "M/Y NERO" },
              { quote: "10 Out of 10", author: "Capt. Morton", yacht: "M/Y OLGA I" },
              { quote: "Something that can't be found anywhere else in the world", author: "Capt. Kriedemann", yacht: "M/Y AFTER YOU" },
              { quote: "Once in a Lifetime experience", author: "Sam", yacht: "Guest" },
              { quote: "Most epic night ever. That was out of this world!", author: "Toby", yacht: "Guest" },
              { quote: "Best Birthday Ever!", author: "Charlotte, 7y/o", yacht: "Guest" },
              { quote: "Our guests were so happy", author: "Capt. Wyer", yacht: "M/Y ESMERELDA" },
              { quote: "Gave my guests a lifetime souvenir", author: "Kirsten", yacht: "Charter Broker" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative border-2 border-primary/30 rounded-xl p-6 text-center bg-background"
              >
                <span className="absolute top-3 left-4 text-4xl font-serif text-primary leading-none">"</span>
                <span className="absolute bottom-3 right-4 text-4xl font-serif text-primary leading-none">"</span>
                <p className="text-lg md:text-xl font-extrabold text-primary mt-4 mb-4 leading-tight">
                  {t.quote}
                </p>
                <p className="text-sm text-foreground font-medium">{t.author}</p>
                <p className="text-xs text-primary font-bold">{t.yacht}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-primary font-bold text-xs mb-2">Where We Perform</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Locations We Cover</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We deliver our shows all over the world. Here are some of our most popular destinations.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {locations.map((loc) => (
              <div key={loc.name} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{loc.name}</p>
                  <p className="text-xs text-muted-foreground">{loc.region}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Wow Your Guests?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Whether you're a Captain, Chief Stew, Broker, or Concierge — let's create something unforgettable.
            </p>
            <Button asChild size="lg" className="tracking-wider font-bold">
              <Link to="/enquiry">
                Enquire Now <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-avs-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Get the latest on new shows, destinations, and exclusive superyacht entertainment insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:border-avs-teal"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-avs-teal text-white font-bold text-sm rounded-md hover:bg-avs-teal/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <label className="flex items-center justify-center gap-2 mt-3 text-xs text-white/50">
              <input type="checkbox" className="rounded" />
              I agree to receive the Aquavistas newsletter
            </label>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
