import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Heart, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { church, ministries } from "@/data/church";
import { openMailDraft } from "@/lib/mailto";

const Footer = () => {
  const [email, setEmail] = useState("");

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Ministries", path: "/ministries" },
    { name: "Events", path: "/events" },
    { name: "Sermons", path: "/sermons" },
    { name: "Prayer Request", path: "/prayer" },
    { name: "Give", path: "/give" },
  ];

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    openMailDraft({
      to: church.email,
      subject: "Newsletter signup",
      body: `Please add this email to Bethel Tabernacle Ministries announcements:\n\n${email.trim()}`,
    });
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={church.assets.logo} alt={church.name} className="h-12 w-12 rounded-full object-contain bg-background" />
              <div>
                <div className="font-bold">Bethel Tabernacle</div>
                <div className="text-sm opacity-80">Ministries</div>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              {church.vision}
            </p>
            <div className="flex space-x-3">
              <a href={church.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={church.facebookVideosUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth" aria-label="Video sermons">
                <Youtube className="h-5 w-5" />
              </a>
              <Link to="/prayer" className="hover:text-accent transition-smooth" aria-label="Prayer request">
                <Heart className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:text-accent hover:opacity-100 transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Ministries</h3>
            <ul className="grid grid-cols-2 gap-2">
              {ministries.slice(0, 10).map((ministry) => (
                <li key={ministry.id}>
                  <Link
                    to={`/ministries/${ministry.id}`}
                    className="text-sm opacity-80 hover:text-accent hover:opacity-100 transition-smooth"
                  >
                    {ministry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  {church.addressLines[0]}<br />{church.addressLines[1]}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-80">{church.phoneNumbers.join(" / ")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href={`mailto:${church.email}`} className="text-sm opacity-80 hover:text-accent transition-smooth break-all">
                  {church.email}
                </a>
              </div>
            </div>

            <form onSubmit={handleNewsletter} className="mt-5 flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email for announcements"
                className="bg-background text-foreground placeholder:text-muted-foreground"
                aria-label="Email for announcements"
              />
              <Button type="submit" variant="accent" size="icon" aria-label="Join announcements">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            Copyright {new Date().getFullYear()} {church.name}. All rights reserved.
          </p>
          <p className="text-xs opacity-60 mt-2">
            "{church.motto}" - {church.mottoReference}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
