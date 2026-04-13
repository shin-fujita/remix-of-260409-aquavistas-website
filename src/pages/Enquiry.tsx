import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { shows } from "@/data/shows";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const locationOptions = {
  Mediterranean: [
    "South of France",
    "Sardinia",
    "Amalfi",
    "Sicily & Aeolians",
    "Greece - Cyclades",
    "Greece - Ionians",
    "Spain & Ibiza",
    "Croatia",
    "Other",
  ],
  Caribbean: [
    "Antigua",
    "St Barths",
    "Anguilla",
    "St Lucia",
    "St Kitts",
    "St Vincent & Grenadines",
    "Other",
  ],
};

type EnquiryType = "charter" | "general";

const Enquiry = () => {
  const [searchParams] = useSearchParams();
  const preselectedShow = searchParams.get("show") || "";

  const [enquiryType, setEnquiryType] = useState<EnquiryType>(preselectedShow ? "charter" : "charter");
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState<Date>();
  const [selectedShows, setSelectedShows] = useState<string[]>(preselectedShow ? [preselectedShow] : []);
  const [generalLocation, setGeneralLocation] = useState("");
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  role: "",
  boatName: "",
  specificLocation: "",
  guests: "",
  ages: "",
  nationalities: "",
  requests: "",
  message: "",
});

const handleChange = (e: any) => {
  const { id, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [id]: value,
  }));
};
  const toggleShow = (id: string) => {
    setSelectedShows((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (enquiryType === "charter" && !generalLocation) {
    alert("Please select a location");
    return;
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        enquiryType,
        generalLocation,
        date: date ? date.toISOString() : null,
        selectedShows,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong");
    }
  } catch (err) {
    console.error(err);
    alert("Error submitting form");
  }
};

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Your enquiry has been received. Our team will review your requirements and get back to you within 24 hours.
            </p>
            <Button asChild variant="outline" className="font-bold text-sm">
              <Link to="/">Return Home</Link>
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 bg-avs-navy text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-avs-teal font-bold text-xs mb-3">Book Entertainment</p>
            <h1 className="text-4xl md:text-5xl font-bold">Enquire Now</h1>
            <p className="text-white/60 mt-3 max-w-xl">
              Tell us about your yacht, your guests, and the occasion. We'll design the perfect entertainment experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {/* Enquiry Type Toggle */}
          <div className="mb-10">
            <div className="flex rounded-lg border border-border overflow-hidden">
              <button
                type="button"
                onClick={() => setEnquiryType("charter")}
                className={cn(
                  "flex-1 py-3 px-6 text-sm font-bold transition-colors",
                  enquiryType === "charter"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                Charter Enquiry
              </button>
              <button
                type="button"
                onClick={() => setEnquiryType("general")}
                className={cn(
                  "flex-1 py-3 px-6 text-sm font-bold transition-colors",
                  enquiryType === "general"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                General Enquiry
              </button>
            </div>
          </div>
{enquiryType === "general" ? (
  <form onSubmit={handleSubmit} className="space-y-8">
    <div>
      <h2 className="text-lg font-bold text-foreground mb-4">Your Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="mt-1" />
        </div>
      </div>
    </div>

    <div>
      <Label htmlFor="message">Your Message *</Label>
      <Textarea id="message" value={formData.message} onChange={handleChange} required placeholder="How can we help?" className="mt-1" rows={6} />
    </div>

    <label className="flex items-center gap-3">
      <input type="checkbox" className="rounded border-border" />
      <span className="text-sm text-muted-foreground">Subscribe to the Aquavistas newsletter for show updates and inspiration</span>
    </label>

    <Button type="submit" size="lg" className="w-full font-bold">
      Submit Enquiry
    </Button>
  </form>
) : (
  <form onSubmit={handleSubmit} className="space-y-8">
    {/* Contact Info */}
    <div>
      <h2 className="text-lg font-bold text-foreground mb-4">Your Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+44 7564 013196" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="role">Your Role</Label>
          <Input id="role" value={formData.role} onChange={handleChange} placeholder="Captain, Broker, Concierge..." className="mt-1" />
        </div>
      </div>
    </div>

    {/* Yacht Info */}
    <div>
      <h2 className="text-lg font-bold text-foreground mb-4">Yacht & Event Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="boatName">Boat Name *</Label>
          <Input id="boatName" value={formData.boatName} onChange={handleChange} required placeholder="M/Y Example" className="mt-1" />
        </div>

        {/* DATE (unchanged) */}
        <div>
          <Label>Show Date(s)</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className={cn("w-full justify-start text-left font-normal mt-1", !date && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="p-3 pointer-events-auto" />
            </PopoverContent>
          </Popover>
        </div>

        {/* LOCATION (unchanged) */}
        <div>
          <Label>General Location *</Label>
          <Select value={generalLocation} onValueChange={setGeneralLocation} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select a region..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Mediterranean</SelectLabel>
                {locationOptions.Mediterranean.map((loc) => (
                  <SelectItem key={loc} value={`Med - ${loc}`}>{loc}</SelectItem>
                ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Caribbean</SelectLabel>
                {locationOptions.Caribbean.map((loc) => (
                  <SelectItem key={loc} value={`Caribbean - ${loc}`}>{loc}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="specificLocation">Specific Location</Label>
          <Input id="specificLocation" value={formData.specificLocation} onChange={handleChange} placeholder="e.g. Port Hercule, Monaco" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="guests">Number of Guests</Label>
          <Input id="guests" value={formData.guests} onChange={handleChange} type="number" placeholder="e.g. 12" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="ages">Guest Ages</Label>
          <Input id="ages" value={formData.ages} onChange={handleChange} placeholder="e.g. Adults 30-50, Kids 5-10" className="mt-1" />
        </div>

        <div>
          <Label htmlFor="nationalities">Nationalities</Label>
          <Input id="nationalities" value={formData.nationalities} onChange={handleChange} placeholder="e.g. British, American" className="mt-1" />
        </div>
      </div>
    </div>

    {/* Shows (unchanged) */}
    <div>
      <h2 className="text-lg font-bold text-foreground mb-4">Shows Interested In</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {shows.map((show) => (
          <button
            key={show.id}
            type="button"
            onClick={() => toggleShow(show.id)}
            className={cn(
              "px-3 py-2 text-xs font-medium rounded-md border transition-colors text-left",
              selectedShows.includes(show.id)
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border text-foreground hover:border-primary/30"
            )}
          >
            {show.name}
          </button>
        ))}
      </div>
    </div>

    <div>
      <Label htmlFor="requests">Special Requests or Comments</Label>
      <Textarea id="requests" value={formData.requests} onChange={handleChange} placeholder="Any special requirements..." className="mt-1" rows={4} />
    </div>

    <Button type="submit" size="lg" className="w-full font-bold">
      Submit Enquiry
    </Button>
  </form>
)}
          
        
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enquiry;
