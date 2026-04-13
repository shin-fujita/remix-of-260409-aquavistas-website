import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Clock, Users, Star, Music, Filter, LayoutGrid, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { shows, Show, showCategories, celebrationSubcategories } from "@/data/shows";
import { showHeroImages } from "@/data/showGalleries";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import avsLogo from "@/assets/aquavistas-logo.png";

// ── Category colours ──
const categoryColors: Record<Show["category"], string> = {
  celebration: "bg-primary",
  family: "bg-avs-teal",
  kids: "bg-avs-navy",
};

// ── Filter types ──
type FilterType = "all" | "popular" | "bands" | "celebration" | "family" | "kids";

const filters: { key: FilterType; label: string; icon: typeof Star }[] = [
  { key: "all", label: "All Shows", icon: Filter },
  { key: "popular", label: "Most Popular", icon: Star },
  { key: "bands", label: "Bands", icon: Music },
  { key: "celebration", label: "Celebration", icon: Star },
  { key: "family", label: "Family", icon: Star },
  { key: "kids", label: "Little Ones", icon: Star },
];

// ── Hub-spoke layout ──
// Hubs radiate from center, shows radiate from their hub
interface HubDef {
  id: string;
  label: string;
  /** angle from center in degrees (0 = right, 90 = down) */
  angle: number;
  /** distance from center as % of half-width */
  radius: number;
  colorClass: string;
  /** show IDs that belong to this hub */
  showIds: string[];
  /** angular spread of child shows around the hub */
  childSpread: number;
  /** child distance from hub */
  childRadius: number;
  /** base angle offset for children (relative to hub angle) */
  childBaseAngle: number;
}

const hubDefs: HubDef[] = [
  {
    id: "music",
    label: "Music",
    angle: 0,
    radius: 30,
    colorClass: "bg-primary",
    showIds: ["abba", "daft-punk", "michael-jackson", "taylor-swift", "jazz-trio"],
    childSpread: 55,
    childRadius: 18,
    childBaseAngle: -27,
  },
  {
    id: "cabaret",
    label: "Cabaret",
    angle: 55,
    radius: 28,
    colorClass: "bg-primary",
    showIds: ["great-gatsby", "burlesque"],
    childSpread: 40,
    childRadius: 15,
    childBaseAngle: -20,
  },
  {
    id: "celebration-main",
    label: "Celebration",
    angle: 105,
    radius: 28,
    colorClass: "bg-primary",
    showIds: ["magic-mike", "classical", "bow-to-bow"],
    childSpread: 40,
    childRadius: 15,
    childBaseAngle: -20,
  },
  {
    id: "talent",
    label: "Got Talent",
    angle: 160,
    radius: 30,
    colorClass: "bg-primary",
    showIds: ["sean-heydon", "alex-trust", "magic-circle-president", "mind-2-mind", "seance", "markobi"],
    childSpread: 55,
    childRadius: 18,
    childBaseAngle: -27,
  },
  {
    id: "family",
    label: "Family",
    angle: 225,
    radius: 30,
    colorClass: "bg-avs-teal",
    showIds: ["visual-variety", "overboard", "murder-mystery", "treasure-rush", "lost-legacy"],
    childSpread: 55,
    childRadius: 18,
    childBaseAngle: -27,
  },
  {
    id: "kids",
    label: "Little Ones",
    angle: 300,
    radius: 28,
    colorClass: "bg-avs-navy",
    showIds: ["wizardly-party", "freestyle-football", "supercharged", "superhero-academy"],
    childSpread: 50,
    childRadius: 17,
    childBaseAngle: -25,
  },
];

const toXY = (angleDeg: number, radius: number) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 50 + radius * Math.cos(rad), y: 50 + radius * Math.sin(rad) };
};

// ── Info panel default content ──
const brandInfo = [
  { title: "Award Winning Shows", desc: "Brought to your yacht in 48hrs or less." },
  { title: "Onboard, Anywhere", desc: "We're a global company and deliver our shows wherever your yacht is." },
  { title: "Mediterranean & Caribbean", desc: "And on request." },
  { title: "Contactless", desc: "Neither performers nor equipment stay onboard. (Except Treasure if found!)" },
  { title: "We WOW", desc: "And that's what we're all about." },
];

const Shows = () => {
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const [hoveredShow, setHoveredShow] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const isMobile = useIsMobile();

  const filteredShows = useMemo(() => {
    switch (activeFilter) {
      case "popular": return shows.filter((s) => s.isPopular);
      case "bands": return shows.filter((s) => s.isBand);
      case "celebration": return shows.filter((s) => s.category === "celebration");
      case "family": return shows.filter((s) => s.category === "family");
      case "kids": return shows.filter((s) => s.category === "kids");
      default: return shows;
    }
  }, [activeFilter]);

  const filteredIds = useMemo(() => new Set(filteredShows.map((s) => s.id)), [filteredShows]);

  // Build positioned nodes
  const { hubNodes, showNodes, lines } = useMemo(() => {
    const hubs: { id: string; label: string; x: number; y: number; colorClass: string }[] = [];
    const nodes: { show: Show; x: number; y: number; hubX: number; hubY: number }[] = [];
    const allLines: { x1: number; y1: number; x2: number; y2: number; type: "hub" | "show"; showId?: string }[] = [];

    for (const hub of hubDefs) {
      const visibleShowIds = hub.showIds.filter((id) => filteredIds.has(id));
      if (visibleShowIds.length === 0) continue;

      const hubPos = toXY(hub.angle, hub.radius);
      hubs.push({ id: hub.id, label: hub.label, x: hubPos.x, y: hubPos.y, colorClass: hub.colorClass });

      // Line from center to hub
      allLines.push({ x1: 50, y1: 50, x2: hubPos.x, y2: hubPos.y, type: "hub" });

      // Position children around the hub
      visibleShowIds.forEach((showId, i) => {
        const show = shows.find((s) => s.id === showId);
        if (!show) return;
        const count = visibleShowIds.length;
        const childAngle = hub.angle + hub.childBaseAngle + (count === 1 ? 0 : (hub.childSpread / (count - 1)) * i);
        const showPos = toXY(childAngle, hub.radius + hub.childRadius);
        nodes.push({ show, x: showPos.x, y: showPos.y, hubX: hubPos.x, hubY: hubPos.y });
        allLines.push({ x1: hubPos.x, y1: hubPos.y, x2: showPos.x, y2: showPos.y, type: "show", showId });
      });
    }
    return { hubNodes: hubs, showNodes: nodes, lines: allLines };
  }, [filteredIds]);

  const showsByCategory = useMemo(() => {
    const grouped: Record<Show["category"], Show[]> = { celebration: [], family: [], kids: [] };
    [...filteredShows].sort((a, b) => a.name.localeCompare(b.name)).forEach((s) => grouped[s.category].push(s));
    return grouped;
  }, [filteredShows]);

  const hoveredShowData = hoveredShow ? shows.find((s) => s.id === hoveredShow) : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-16 bg-avs-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-bold text-xs mb-3">Our Entertainment</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Shows</h1>
            <p className="text-white/60 max-w-xl mx-auto">
              Explore our constellation of world-class superyacht entertainment. Click any show to learn more.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters + View Toggle */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                  activeFilter === f.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                {f.label}
              </button>
            ))}
            {!isMobile && (
              <div className="flex items-center gap-1 ml-4 border border-border rounded-full p-1">
                <button
                  onClick={() => setViewMode("map")}
                  className={`p-2 rounded-full transition-all ${viewMode === "map" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  title="Map view"
                >
                  <Map className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-all ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  title="List view"
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Category legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {(Object.entries(showCategories) as [Show["category"], string][]).map(([key, label]) => (
              <div key={key} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <div className={`w-3 h-3 rounded-full ${categoryColors[key]}`} />
                {label}
              </div>
            ))}
          </div>

          {/* ── DESKTOP: Hub-spoke Constellation Map + Info Panel ── */}
          {!isMobile && viewMode === "map" && (
            <div className="flex gap-8 max-w-6xl mx-auto">
              {/* Map - 75% */}
              <div className="relative flex-1 aspect-square">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <AnimatePresence>
                    {lines.map((l) => {
                      const lineKey = l.type === "hub" ? `hub-${l.x2}-${l.y2}` : `show-${l.showId}`;
                      return (
                        <motion.line
                          key={lineKey}
                          initial={{ opacity: 0 }}
                          animate={{
                            x1: l.x1, y1: l.y1, x2: l.x2, y2: l.y2,
                            opacity: l.type === "hub" ? 0.3 : (hoveredShow === l.showId ? 0.6 : 0.15),
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          stroke="hsl(190 100% 38.4%)"
                          strokeWidth={l.type === "hub" ? "0.15" : "0.08"}
                        />
                      );
                    })}
                  </AnimatePresence>
                </svg>

                {/* Centre logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-primary/20">
                    <img src={avsLogo} alt="Aquavistas" className="w-14 h-14 md:w-18 md:h-18 object-contain" />
                  </div>
                </div>

                {/* Hub nodes */}
                <AnimatePresence>
                  {hubNodes.map((hub) => (
                    <motion.div
                      key={hub.id}
                      className="absolute z-10"
                      initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                      animate={{
                        left: `${hub.x}%`,
                        top: `${hub.y}%`,
                        opacity: 1,
                        scale: 1,
                        x: "-50%",
                        y: "-50%",
                      }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <div className={`${hub.colorClass} rounded-full px-3 py-1.5 text-white text-[9px] md:text-[10px] font-bold shadow-md whitespace-nowrap`}>
                        {hub.label}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Show nodes */}
                <AnimatePresence>
                  {showNodes.map(({ show, x, y }) => {
                    const isHovered = hoveredShow === show.id;
                    const heroImg = showHeroImages[show.id];
                    return (
                      <motion.div
                        key={show.id}
                        className="absolute z-10"
                        initial={{ opacity: 0, left: `${x}%`, top: `${y}%`, x: "-50%", y: "-50%" }}
                        animate={{
                          left: `${x}%`,
                          top: `${y}%`,
                          opacity: 1,
                          x: "-50%",
                          y: "-50%",
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <div
                          className="group relative"
                          onMouseEnter={() => setHoveredShow(show.id)}
                          onMouseLeave={() => setHoveredShow(null)}
                          onClick={() => setSelectedShow(show)}
                          style={{
                            transform: `scale(${isHovered ? 1.25 : 1})`,
                            transformOrigin: "center center",
                            transition: "transform 0.2s ease-out",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-[7px] md:text-[9px] leading-tight text-center p-1 transition-shadow overflow-hidden ${
                              categoryColors[show.category]
                            } ${isHovered ? "shadow-lg shadow-primary/30 ring-2 ring-white/50" : ""}`}
                          >
                            {heroImg ? (
                              <img src={heroImg} alt={show.name} className="w-full h-full object-cover rounded-full" />
                            ) : (
                              show.name.length > 12 ? show.name.split(" ")[0] : show.name
                            )}
                          </div>
                          {/* Tooltip label */}
                          <div className={`absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] md:text-[9px] font-bold transition-opacity ${isHovered ? "opacity-100 text-foreground" : "opacity-0"}`}>
                            {show.name}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Info Panel - 25% */}
              <div className="w-72 flex-shrink-0">
                <div className="sticky top-24 border border-border rounded-xl bg-card p-6 shadow-sm">
                  <AnimatePresence mode="wait">
                    {hoveredShowData ? (
                      <motion.div
                        key={hoveredShowData.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {showHeroImages[hoveredShowData.id] && (
                          <div className="aspect-video rounded-lg overflow-hidden mb-4">
                            <img src={showHeroImages[hoveredShowData.id]} alt={hoveredShowData.name} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <p className="text-xs font-bold text-primary mb-1">
                          {showCategories[hoveredShowData.category]}
                          {hoveredShowData.subcategory && ` · ${hoveredShowData.subcategory}`}
                        </p>
                        <h3 className="text-lg font-bold text-foreground mb-2">{hoveredShowData.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{hoveredShowData.shortDescription}</p>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-primary" />
                            {hoveredShowData.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-3.5 w-3.5 text-primary" />
                            {hoveredShowData.performers}
                          </div>
                        </div>
                        <Button asChild size="sm" className="w-full text-xs font-bold">
                          <Link to={`/shows/${hoveredShowData.id}`}>
                            View Details <ChevronRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="brand-info"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex justify-center mb-5">
                          <img src={avsLogo} alt="Aquavistas" className="w-16 h-16 object-contain" />
                        </div>
                        <div className="space-y-5">
                          {brandInfo.map((item) => (
                            <div key={item.title} className="text-center">
                              <h4 className="text-sm font-bold text-foreground mb-1">{item.title}</h4>
                              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 text-center">
                          <Button asChild size="sm" className="tracking-wider text-xs font-bold">
                            <Link to="/enquiry">Ask Us How!</Link>
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}

          {/* ── DESKTOP: List View ── */}
          {!isMobile && viewMode === "list" && (
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredShows.map((show, i) => {
                  const heroImg = showHeroImages[show.id];
                  return (
                    <motion.div
                      key={show.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.03 }}
                    >
                      <Link
                        to={`/shows/${show.id}`}
                        className="group block border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg hover:border-primary/30 transition-all"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-muted">
                          {heroImg ? (
                            <img
                              src={heroImg}
                              alt={show.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className={`w-full h-full flex items-center justify-center ${categoryColors[show.category]}`}>
                              <span className="text-white font-bold text-lg">{show.name}</span>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-2 h-2 rounded-full ${categoryColors[show.category]}`} />
                            <span className="text-[10px] font-bold text-primary">
                              {showCategories[show.category]}
                              {show.subcategory && ` · ${show.subcategory}`}
                            </span>
                          </div>
                          <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {show.name}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {show.shortDescription}
                          </p>
                          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-primary" /> {show.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3 text-primary" /> {show.performers}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          )}

          {/* ── MOBILE: A-Z Accordion by Category ── */}
          {isMobile && (
            <Accordion type="multiple" defaultValue={["celebration", "family", "kids"]} className="space-y-3">
              {(Object.entries(showCategories) as [Show["category"], string][]).map(([key, label]) => {
                const catShows = showsByCategory[key];
                if (catShows.length === 0) return null;

                if (key === "celebration") {
                  const noSub = catShows.filter((s) => !s.subcategory);
                  const grouped = celebrationSubcategories.map((sub) => ({
                    name: sub,
                    shows: catShows.filter((s) => s.subcategory === sub),
                  })).filter((g) => g.shows.length > 0);

                  return (
                    <AccordionItem key={key} value={key} className="border border-border rounded-lg overflow-hidden bg-card">
                      <AccordionTrigger className="px-4 py-3 hover:no-underline">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${categoryColors[key]}`} />
                          <span className="font-bold text-sm text-foreground">{label}</span>
                          <span className="text-xs text-muted-foreground ml-1">({catShows.length})</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-0 pb-0">
                        <div className="divide-y divide-border">
                          {noSub.map((show) => (
                            <ShowListItem key={show.id} show={show} onClick={() => setSelectedShow(show)} />
                          ))}
                          {grouped.map((group) => (
                            <div key={group.name}>
                              <div className="px-4 py-2 bg-muted/50">
                                <p className="text-xs font-bold text-primary">{group.name}</p>
                              </div>
                              {group.shows.map((show) => (
                                <ShowListItem key={show.id} show={show} onClick={() => setSelectedShow(show)} />
                              ))}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                return (
                  <AccordionItem key={key} value={key} className="border border-border rounded-lg overflow-hidden bg-card">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${categoryColors[key]}`} />
                        <span className="font-bold text-sm text-foreground">{label}</span>
                        <span className="text-xs text-muted-foreground ml-1">({catShows.length})</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-0 pb-0">
                      <div className="divide-y divide-border">
                        {catShows.map((show) => (
                          <ShowListItem key={show.id} show={show} onClick={() => setSelectedShow(show)} />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          )}

          {/* "More on Request" */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see what you're looking for?</p>
            <Button asChild variant="outline" className="tracking-wider text-sm font-bold">
              <Link to="/enquiry">Request a Custom Show</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Show Detail Modal */}
      <Dialog open={!!selectedShow} onOpenChange={() => setSelectedShow(null)}>
        <DialogContent className="max-w-2xl">
          {selectedShow && (
            <>
              <DialogHeader>
                <div className={`w-16 h-16 rounded-full ${categoryColors[selectedShow.category]} flex items-center justify-center text-white font-bold text-xs mb-4 overflow-hidden`}>
                  {showHeroImages[selectedShow.id] ? (
                    <img src={showHeroImages[selectedShow.id]} alt={selectedShow.name} className="w-full h-full object-cover" />
                  ) : (
                    selectedShow.name.split(" ")[0]
                  )}
                </div>
                <DialogTitle className="text-2xl font-bold">{selectedShow.name}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {showCategories[selectedShow.category]}
                  {selectedShow.subcategory && ` · ${selectedShow.subcategory}`}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{selectedShow.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {selectedShow.duration}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    {selectedShow.performers}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild className="tracking-wider text-xs font-bold flex-1">
                    <Link to={`/enquiry?show=${selectedShow.id}`}>
                      Enquire About This Show <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="tracking-wider text-xs font-bold flex-1">
                    <Link to={`/shows/${selectedShow.id}`}>
                      View Full Details
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

// ── Reusable show list item for mobile ──
const ShowListItem = ({ show, onClick }: { show: Show; onClick: () => void }) => {
  const heroImg = showHeroImages[show.id];
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors"
    >
      <div className={`w-8 h-8 rounded-full ${categoryColors[show.category]} flex items-center justify-center text-white text-[7px] font-bold flex-shrink-0 overflow-hidden`}>
        {heroImg ? (
          <img src={heroImg} alt={show.name} className="w-full h-full object-cover" />
        ) : (
          show.name.charAt(0)
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-foreground">{show.name}</p>
        <p className="text-xs text-muted-foreground truncate">{show.shortDescription}</p>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
    </button>
  );
};

export default Shows;
