import { Link } from "react-router-dom";
import logo from "@/assets/aquavistas-logo.png";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Shows", to: "/shows" },
  { label: "About", to: "/about" },
  { label: "Press", to: "/press" },
  { label: "Blog", to: "/blog" },
  { label: "Enquiry", to: "/enquiry" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-avs-navy text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Aquavistas" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Award-winning onboard entertainment for superyachts. Bespoke shows, live music, and immersive experiences delivered anywhere in the Mediterranean & Caribbean.
            </p>
            <p className="text-xs text-white/50">
              Aquavistas is part of{" "}
              <span className="text-white/70 font-medium">Luxury Treasure Hunts Ltd</span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-avs-teal mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/70 hover:text-avs-teal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-avs-teal mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm text-white/70">
              <p>shows@aquavistas.com</p>
              <p>+44 7564 013196</p>
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-bold text-avs-teal mb-3">Newsletter</h3>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-avs-teal"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-avs-teal text-white text-sm font-bold rounded-md hover:bg-avs-teal/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <label className="flex items-center gap-2 mt-2 text-xs text-white/50">
                <input type="checkbox" className="rounded border-white/30" />
                Subscribe to our newsletter
              </label>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Aquavistas — Part of Luxury Treasure Hunts Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
