import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const blogPosts = [
  {
    slug: "top-10-superyacht-entertainment-ideas",
    title: "Top 10 Superyacht Entertainment Ideas for the 2026 Season",
    excerpt: "From immersive murder mysteries to silent disco parties — discover the most requested onboard entertainment experiences for the upcoming charter season.",
    date: "February 2026",
    category: "Inspiration",
    featured: true,
  },
  {
    slug: "how-to-brief-guests",
    title: "How to Brief Charter Guests About Onboard Entertainment",
    excerpt: "A guide for crew and brokers on setting the stage for surprise performances without spoiling the magic.",
    date: "January 2026",
    category: "Crew Guide",
  },
  {
    slug: "mediterranean-entertainment-ports",
    title: "Best Mediterranean Ports for Yacht Entertainment",
    excerpt: "Discover which anchorages and marinas are ideal for hosting live shows, and how we deliver anywhere.",
    date: "December 2025",
    category: "Destinations",
  },
  {
    slug: "family-friendly-yacht-entertainment",
    title: "Family-Friendly Yacht Entertainment: Keeping All Ages Happy",
    excerpt: "How to plan entertainment that delights children and adults alike during a multi-generational charter.",
    date: "November 2025",
    category: "Families",
  },
  {
    slug: "murder-mystery-on-yacht",
    title: "Why Murder Mystery Dinners Are the Hottest Yacht Trend",
    excerpt: "Inside the most requested show format in superyacht entertainment and why guests can't get enough.",
    date: "October 2025",
    category: "Shows",
  },
  {
    slug: "charter-season-entertainment-planning",
    title: "Planning Ahead: Entertainment for the Charter Season",
    excerpt: "Booking tips for brokers and crew to secure the best entertainment well in advance of the peak season.",
    date: "September 2025",
    category: "Planning",
  },
];

const Blog = () => {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 bg-avs-navy text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-avs-teal font-bold text-xs mb-3">Insights</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">News & Insights</h1>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div {...fadeUp}>
              <Link to={`/blog/${featured.slug}`}>
                <Card className="overflow-hidden hover:border-primary/30 transition-colors">
                  <div className="aspect-[21/9] bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Featured image</p>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-primary">{featured.category}</span>
                      <span className="text-xs text-muted-foreground">{featured.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">{featured.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{featured.excerpt}</p>
                    <span className="inline-flex items-center text-sm font-bold text-primary">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div key={post.slug} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
                <Link to={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-primary/30 transition-colors">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground text-xs">Image</p>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-primary">{post.category}</span>
                        <span className="text-[10px] text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="font-bold text-foreground mb-2 text-sm leading-snug">{post.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
