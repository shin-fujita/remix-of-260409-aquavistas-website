import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const pressItems = [
  {
    outlet: "Forbes",
    title: "The Rise of Bespoke Superyacht Entertainment",
    description: "Forbes features Aquavistas as the leading provider of premium onboard entertainment for the superyacht industry.",
    featured: true,
  },
  {
    outlet: "Yacht International",
    title: "Entertainment at Sea: A New Standard",
    description: "How Aquavistas is raising the bar for charter guest experiences across the Mediterranean.",
  },
  {
    outlet: "SuperYacht Times",
    title: "From Film Sets to Yacht Decks",
    description: "The production company bringing Hollywood-quality entertainment to the world's largest yachts.",
  },
  {
    outlet: "Boat International",
    title: "Charter Entertainment: What's New for the Season",
    description: "Aquavistas' latest shows featured in the annual charter entertainment roundup.",
  },
];

const testimonials = [
  {
    quote: "The Murder Mystery evening was the highlight of the entire charter. Our guests are still talking about it months later.",
    author: "Chief Stewardess",
    yacht: "M/Y Eclipse",
  },
  {
    quote: "Aquavistas made my job easy. They handled everything — I just had to open the door. The performers were incredible and completely professional.",
    author: "Captain",
    yacht: "M/Y Serene",
  },
  {
    quote: "We've used Aquavistas for three seasons now. They never disappoint. The variety of shows available is remarkable.",
    author: "Charter Broker",
    yacht: "Edmiston",
  },
];

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-avs-navy text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-avs-teal font-bold text-xs mb-3">Media</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Press & References</h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Press */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div {...fadeUp}>
            {pressItems.filter((p) => p.featured).map((item) => (
              <Card key={item.outlet} className="border-primary/30 mb-8">
                <CardContent className="p-8 md:p-12">
                  <p className="text-primary font-bold text-xs mb-2">Featured</p>
                  <p className="text-3xl font-bold italic text-foreground mb-2">{item.outlet}</p>
                  <h2 className="text-xl font-bold text-foreground mb-3">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  <Button variant="outline" size="sm" className="tracking-wider text-xs font-bold">
                    Read Article <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressItems.filter((p) => !p.featured).map((item, i) => (
              <motion.div key={item.outlet} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-sm font-bold text-primary mb-1">{item.outlet}</p>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">What They Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Quote className="h-6 w-6 text-primary/30 mb-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.quote}"</p>
                    <p className="text-sm font-bold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.yacht}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;
