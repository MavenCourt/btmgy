import { useEffect, useState } from "react";
import { ArrowUpRight, Heart, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { church } from "@/data/church";

const primaryLinks = [
  { name: "About", path: "/about" },
  { name: "Ministries", path: "/ministries" },
  { name: "Sermons", path: "/sermons" },
];

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Leadership", path: "/leadership" },
  { name: "Ministries", path: "/ministries" },
  { name: "Service Times", path: "/services" },
  { name: "Events", path: "/events" },
  { name: "Sermons", path: "/sermons" },
  { name: "Gallery", path: "/gallery" },
  { name: "Prayer Request", path: "/prayer" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 h-20 border-b border-white/10 bg-[var(--ink)] text-white">
        <div className="mx-auto grid h-full max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 md:px-7 lg:grid-cols-[1fr_auto_1fr]">
          <div className="hidden items-center gap-7 lg:flex">
            {primaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs font-bold uppercase text-white/78 transition-colors hover:text-[var(--sun)]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/" className="flex min-w-0 items-center justify-self-start gap-3 lg:justify-self-center" aria-label={`${church.name} home`}>
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1">
              <img src={church.assets.logo} alt="" className="h-full w-full object-contain" />
            </span>
            <span className="hidden min-w-0 sm:block lg:hidden xl:block">
              <span className="block truncate font-heading text-sm font-bold uppercase">Bethel Tabernacle</span>
              <span className="block text-[10px] font-semibold uppercase text-white/60">Ministries Guyana</span>
            </span>
          </Link>

          <div className="flex items-center justify-end gap-2 md:gap-3">
            <Button asChild variant="ghost" size="sm" className="hidden text-white hover:bg-white/10 hover:text-white md:inline-flex">
              <Link to="/give">Give</Link>
            </Button>
            <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
              <Link to="/visit">Plan a Visit</Link>
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-foreground"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-[var(--ink)] pt-24 text-white transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl gap-10 px-6 pb-10 pt-8 lg:grid-cols-[1fr_21rem] lg:px-10">
          <div className="grid content-start gap-x-12 sm:grid-cols-2">
            {menuLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                tabIndex={isOpen ? 0 : -1}
                className="group flex items-center justify-between border-t border-white/18 py-4 font-heading text-3xl font-bold uppercase leading-none transition-colors hover:text-[var(--sun)] md:text-5xl"
              >
                <span className="flex items-center gap-4">
                  <span className="font-sans text-[10px] text-white/45">{String(index + 1).padStart(2, "0")}</span>
                  {link.name}
                </span>
                <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <aside className="border-t border-white/18 pt-6 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
            <p className="mb-8 text-xs font-bold uppercase text-[var(--sun)]">Connect with Bethel</p>
            <p className="mb-2 text-sm text-white/55">Sunday Worship</p>
            <p className="mb-8 font-heading text-3xl font-bold uppercase">11:00 AM</p>
            <p className="mb-8 max-w-xs text-sm leading-6 text-white/70">{church.address}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/prayer" tabIndex={isOpen ? 0 : -1}>
                  <Heart /> Prayer
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                <Link to="/contact" tabIndex={isOpen ? 0 : -1}>Contact</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Navigation;
