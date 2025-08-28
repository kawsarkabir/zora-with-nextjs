import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative border-t border-border transition-colors duration-300 bg-background dark:bg-[#0b1222]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light 
                       bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              ProductHub
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Discover amazing products that enhance your lifestyle. Quality,
              innovation, and customer satisfaction are our top priorities.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary 
                             transform hover:scale-110 transition-all duration-200 
                             focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full p-1"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Login", href: "/login" },
                { name: "Dashboard", href: "/dashboard" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary 
                             transition-colors duration-200 transform hover:translate-x-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <div className="space-y-3">
              {[
                "Help Center",
                "Contact Us",
                "Returns & Exchanges",
                "Shipping Info",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-muted-foreground hover:text-primary 
                             transition-colors duration-200 hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="leading-tight">support@producthub.com</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="leading-tight">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="leading-tight">
                  123 Business St, City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-border/70" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2024 ProductHub. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary 
                           transition-colors duration-200 whitespace-nowrap"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Optional subtle corner decoration */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-5 
                      bg-gradient-conic from-primary via-transparent to-transparent rounded-full -z-0"
      ></div>
    </footer>
  );
};

export default Footer;
