import { FormEvent, useState } from "react";
import { ArrowUpRight, Facebook, Heart, Mail, MapPin, Send, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { church } from "@/data/church";
import { openMailDraft } from "@/lib/mailto";

const Footer = () => {
  const [email, setEmail] = useState("");

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

  const groups = [
    {
      title: "Explore",
      links: [
        ["About", "/about"],
        ["Leadership", "/leadership"],
        ["Services", "/services"],
        ["Events", "/events"],
        ["Gallery", "/gallery"],
      ],
    },
    {
      title: "Connect",
      links: [
        ["Plan a Visit", "/visit"],
        ["Sermons", "/sermons"],
        ["Prayer Request", "/prayer"],
        ["Give", "/give"],
        ["Contact", "/contact"],
      ],
    },
  ];

  return (
    <footer className="bg-[var(--ink)] px-5 pb-8 pt-16 text-white md:px-8 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <Link to="/" className="mb-7 flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white p-1.5">
                <img src={church.assets.logo} alt="" className="h-full w-full object-contain" />
              </span>
              <span>
                <span className="block font-heading text-2xl font-bold uppercase">Bethel Tabernacle</span>
                <span className="text-xs font-bold uppercase text-white/55">Ministries Guyana</span>
              </span>
            </Link>
            <p className="max-w-xl font-heading text-3xl font-bold uppercase leading-none text-white md:text-4xl">
              Equipping the church. Making disciples of change.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <p className="mb-5 text-xs font-bold uppercase text-[var(--sun)]">{group.title}</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {group.links.map(([name, path]) => (
                  <Link key={path} to={path} className="group flex items-center justify-between border-b border-white/10 pb-2 text-sm text-white/75 hover:text-white">
                    {name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 border-b border-white/15 py-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-[var(--sun)]">Sunday at Bethel</p>
            <p className="font-heading text-4xl font-bold uppercase">11:00 AM</p>
            <div className="mt-4 flex items-start gap-3 text-sm leading-6 text-white/65">
              <MapPin className="mt-1 h-4 w-4 shrink-0" />
              <span>{church.address}</span>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase text-[var(--sun)]">Church announcements</p>
            <p className="mb-5 max-w-lg text-sm text-white/65">Receive event reminders, service updates, and ministry announcements.</p>
            <form onSubmit={handleNewsletter} className="flex max-w-xl gap-3 border-b border-white/35 pb-2">
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="h-11 flex-1 rounded-none border-0 bg-transparent px-0 text-white placeholder:text-white/40 focus-visible:ring-0"
                aria-label="Email for church announcements"
              />
              <Button type="submit" variant="accent" size="icon" aria-label="Join church announcements">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="grid gap-5 text-sm text-white/60 sm:grid-cols-2">
            <a href={`mailto:${church.email}`} className="flex items-center gap-2 break-all hover:text-white">
              <Mail className="h-4 w-4 shrink-0" /> {church.email}
            </a>
            <span>Phone: {church.phoneNumbers.join(" / ")}</span>
          </div>
          <div className="flex gap-3">
            <a href={church.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:bg-white hover:text-foreground" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={church.facebookVideosUrl} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:bg-white hover:text-foreground" aria-label="Video sermons">
              <Youtube className="h-4 w-4" />
            </a>
            <Link to="/prayer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:bg-white hover:text-foreground" aria-label="Prayer request">
              <Heart className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/15 pt-6 text-[11px] text-white/45 sm:flex-row sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {church.name}. All rights reserved.</p>
          <p>{church.mottoReference}: {church.motto}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
