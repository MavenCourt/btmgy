import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { church } from "@/data/church";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Ministries", path: "/ministries" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "Sermons", path: "/sermons" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  const ctaLinks = [
    { name: "Prayer", path: "/prayer", variant: "outline" as const, icon: Heart },
    { name: "Give", path: "/give", variant: "accent" as const },
    { name: "Plan a Visit", path: "/visit", variant: "hero" as const },
  ];

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-md border-b border-border z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3" aria-label={`${church.name} home`}>
            <img src={church.assets.logo} alt={church.name} className="h-12 w-12 object-contain" />
            <div className="hidden md:block">
              <div className="font-bold text-lg text-foreground">Bethel Tabernacle</div>
              <div className="text-xs text-muted-foreground">Ministries</div>
            </div>
          </Link>

          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md transition-smooth font-medium text-sm",
                  isActive(link.path)
                    ? "text-primary bg-secondary"
                    : "text-foreground hover:text-primary hover:bg-secondary/50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center space-x-3">
            {ctaLinks.map((cta) => {
              const Icon = cta.icon;
              return (
                <Button key={cta.path} asChild variant={cta.variant} size="default">
                  <Link to={cta.path}>
                    {Icon && <Icon className="h-4 w-4" />}
                    {cta.name}
                  </Link>
                </Button>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-md hover:bg-secondary transition-smooth"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="xl:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={cn(
                    "px-4 py-3 rounded-md transition-smooth font-medium",
                    isActive(link.path)
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid gap-2 pt-4 sm:grid-cols-3">
                {ctaLinks.map((cta) => {
                  const Icon = cta.icon;
                  return (
                    <Button key={cta.path} asChild variant={cta.variant} size="lg" className="w-full">
                      <Link to={cta.path} onClick={closeMenu}>
                        {Icon && <Icon className="h-4 w-4" />}
                        {cta.name}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
