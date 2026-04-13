import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, ChevronRight, ArrowLeft, Waves, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shows, showCategories } from "@/data/shows";
import { showGalleries, showHeroImages } from "@/data/showGalleries";
import { showVideos, generalShowreel } from "@/data/showVideos";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const thIcon = "https://aquavistas-website-media.s3.eu-north-1.amazonaws.com/Photos/TH%20Treasure%20Hunts/AV%20Icon%20TH.png";

const ShowDetail = () => {
  const { showId } = useParams();
  const show = shows.find((s) => s.id === showId);

  if (!show) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Show Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/shows">Back to Shows</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const heroImage = showHeroImages[show.id] || null;
  const gallery = showGalleries[show.id] || [];
  const videos = showVideos[show.id] || [];
  const primaryVideo = videos[0] || generalShowreel;
  const isTreasureHunt = show.id === "treasure-rush" || show.id === "lost-legacy";

  // Related shows: same category, excluding current, max 4
  const relatedShows = shows
    .filter((s) => s.category === show.category && s.id !== show.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className={`relative py-20 text-white ${heroImage ? "min-h-[50vh] flex items-end" : ""} bg-avs-navy`}>
        {heroImage && (
          <div className="absolute inset-0">
            <img src={heroImage} alt={show.name} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-avs-navy via-avs-navy/60 to-transparent" />
          </div>
        )}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/shows" className="inline-flex items-center text-avs-teal text-sm mb-6 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to All Shows
            </Link>
            <div className="flex items-start gap-5">
              {isTreasureHunt && (
                <img src={thIcon} alt="Treasure Hunts icon" className="w-20 h-20 rounded-full hidden md:block" />
              )}
              <div>
                <p className="text-avs-teal font-bold text-xs mb-3">
                  {showCategories[show.category]}
                  {show.subcategory && ` · ${show.subcategory}`}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{show.name}</h1>
                <p className="text-white/60 max-w-xl text-lg">{show.shortDescription}</p>
                <div className="flex flex-wrap gap-6 mt-6 text-sm text-white/50">
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-avs-teal" />{show.duration}</span>
                  <span className="flex items-center gap-2"><Users className="h-4 w-4 text-avs-teal" />{show.performers}</span>
                  {show.support && (
                    <span className="flex items-center gap-2"><Users className="h-4 w-4 text-avs-teal" />{show.support}</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-xl font-bold text-foreground mb-4">About This Show</h2>
              <p className="text-muted-foreground leading-relaxed">{show.description}</p>
            </div>
            <div className="md:col-span-2">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border mb-4">
                <video
                  src={primaryVideo.src}
                  controls
                  preload="metadata"
                  playsInline
                  poster={heroImage || undefined}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1.5">
                <Play className="h-3 w-3" /> {primaryVideo.label}
              </p>
              {videos.length > 1 && (
                <div className="space-y-2 mb-4">
                  {videos.slice(1).map((v, i) => (
                    <div key={i} className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                      <video
                        src={v.src}
                        controls
                        preload="metadata"
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
              <Button asChild className="w-full font-bold text-sm">
                <Link to={`/enquiry?show=${show.id}`}>
                  Enquire About This Show <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {gallery.length > 0 && (
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <h2 className="text-xl font-bold text-foreground mb-8 text-center">Gallery</h2>
            <div className={`grid gap-4 ${gallery.slice(0, 6).length <= 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-3"}`}>
              {gallery.slice(0, 6).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Shows */}
      {relatedShows.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <h2 className="text-xl font-bold text-foreground mb-8 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedShows.map((rs, i) => {
                const rsHero = showHeroImages[rs.id] || null;
                return (
                  <motion.div
                    key={rs.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Link to={`/shows/${rs.id}`} className="group block text-center">
                      <div className="aspect-square rounded-lg overflow-hidden bg-muted border border-border mb-3">
                        {rsHero ? (
                          <img src={rsHero} alt={rs.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Waves className="h-8 w-8 text-primary" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{rs.name}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ShowDetail;
