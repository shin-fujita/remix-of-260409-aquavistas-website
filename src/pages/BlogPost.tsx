import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 bg-avs-navy text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="inline-flex items-center text-avs-teal text-sm mb-6 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
            </Link>
            <p className="text-avs-teal font-bold text-xs mb-3">Blog Post</p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {slug?.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
            </h1>
          </motion.div>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="aspect-[21/9] bg-muted rounded-lg flex items-center justify-center border border-border mb-8">
            <p className="text-muted-foreground text-sm">Featured image</p>
          </div>
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              This is a placeholder blog post. Full content will be added in a future update. In the meantime, explore our shows and get in touch to discuss your next superyacht entertainment experience.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From immersive murder mysteries to full-scale tribute concerts, Aquavistas delivers unforgettable onboard entertainment across the Mediterranean and Caribbean. Our team of professional performers and production crew ensure every detail is handled — from logistics to the final bow.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're a captain looking to surprise charter guests, a broker seeking unique selling points for your listings, or a concierge company organising bespoke itineraries — we're here to help create moments that matter.
            </p>
          </div>
          <Button asChild className="font-bold text-sm">
            <Link to="/enquiry">Enquire About Our Shows</Link>
          </Button>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
