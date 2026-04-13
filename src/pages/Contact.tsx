import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-avs-navy text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-avs-teal font-bold text-xs mb-3">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Email</p>
                    <a href="mailto:shows@aquavistas.com" className="text-muted-foreground hover:text-primary transition-colors">
                      shows@aquavistas.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Phone</p>
                    <p className="text-muted-foreground">+44 7564 013196</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Location</p>
                    <p className="text-muted-foreground">London, United Kingdom</p>
                    <p className="text-sm text-muted-foreground/60">Operating across the Mediterranean & Caribbean</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-bold text-foreground mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {["Instagram", "LinkedIn", "Facebook"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-4 py-2 bg-card border border-border rounded-md text-xs font-medium text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">Ready to Book?</h2>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                For entertainment enquiries, our dedicated enquiry form captures all the details we need to design your perfect onboard experience.
              </p>
              <Button asChild className="w-full font-bold text-sm">
                <Link to="/enquiry">
                  Go to Enquiry Form <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Typically respond within 24 hours. For urgent requests, call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
