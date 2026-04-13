import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Film, Globe, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import lthLogo from "@/assets/lth-logo.png";
import avsLogo from "@/assets/aquavistas-logo.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-avs-navy text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-avs-teal font-bold text-xs mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Entertainment Producers<br /><span className="text-avs-teal">Turned Superyacht Specialists</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Aquavistas was born from a decade of producing film, television, and commercials at the highest level. We took that expertise and brought it to the world's most exclusive stages — superyachts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div {...fadeUp} className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
            <p>
              Our journey began in the world of film and television production. With backgrounds spanning major studio productions, live events, and immersive theatre, our founding team understood one thing above all: the power of unforgettable experiences.
            </p>
            <p>
              When the opportunity arose to bring world-class entertainment to superyachts, we saw a gap that no one was filling properly. Charter guests deserved more than a local DJ or a generic band. They deserved the same production quality they'd experience at a West End show or a Hollywood premiere — or better.
            </p>
            <p>
              Today, Aquavistas delivers bespoke entertainment to superyachts across the Mediterranean and Caribbean. From intimate acoustic sets to full-scale immersive productions, every show is crafted with the same care and professionalism we brought to our film and TV work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LTH Connection */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div {...fadeUp} className="text-center">
            <p className="text-primary font-bold text-xs mb-3">One Company, One Brand</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Aquavistas & Luxury Treasure Hunts
            </h2>
            <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
              <img src={lthLogo} alt="Luxury Treasure Hunts logo" className="h-20 md:h-28 w-auto" />
              <div className="text-3xl md:text-4xl font-light text-muted-foreground">=</div>
              <img src={avsLogo} alt="Aquavistas logo" className="h-12 md:h-16 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Aquavistas is the entertainment label of <strong className="text-foreground">Luxury Treasure Hunts Ltd</strong> — the company that pioneered bespoke Treasure Hunt experiences for superyachts. We've unified our offerings under the Aquavistas brand to better represent the full range of premium onboard entertainment we deliver.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Same team. Same quality. Same unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Uniques */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">What Makes Us Different</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Film, title: "Film & TV Production Background", desc: "Our team comes from professional entertainment production. Every show is produced to Hollywood standards — scripted, rehearsed, and polished." },
              { icon: Globe, title: "Delivered Anywhere", desc: "Mediterranean, Caribbean, or wherever your superyacht takes you. We bring the entire production to your location — performers, equipment, and that secret magic touch." },
              { icon: Sparkles, title: "Completely Bespoke", desc: "No two yachts are the same. No two shows should be either. We tailor every experience to your vessel, guests, and occasion." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}>
                <Card className="h-full">
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

      {/* CTA */}
      <section className="py-20 bg-avs-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Let's Go For Unforgettable</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Ready to wow your next charter?
          </p>
          <Button asChild size="lg" className="font-bold">
            <Link to="/enquiry">Enquire Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;