import { ArrowUpRight, HeartHandshake, MapPin, Play, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { church } from "@/data/church";

const steps = [
  {
    title: "Visit This Sunday",
    description: "There is a place for you and your family at Bethel.",
    link: "/visit",
    image: church.assets.churchExterior,
    icon: MapPin,
  },
  {
    title: "Find a Ministry",
    description: "Grow, serve, and build meaningful relationships.",
    link: "/ministries",
    image: church.assets.communityService,
    icon: Users,
  },
  {
    title: "Watch a Message",
    description: "Join worship and biblical teaching wherever you are.",
    link: "/sermons",
    image: church.assets.heroWorship,
    icon: Play,
  },
  {
    title: "Request Prayer",
    description: "Share your prayer need, testimony, or praise report.",
    link: "/prayer",
    image: church.assets.communityService,
    icon: HeartHandshake,
  },
];

const NextSteps = () => {
  const location = useLocation();

  if (location.pathname === "*" || location.pathname.startsWith("/404")) return null;

  return (
    <section className="section-shell section-mist section-rounded-bottom overflow-hidden">
      <div className="section-inner">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Your next step</p>
            <h2 className="display-heading">Come closer. Find your place.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Worship with us, connect with a ministry, watch online, or let us stand with you in prayer.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Link
                key={step.title}
                to={step.link}
                className="group relative min-h-[360px] overflow-hidden rounded-md bg-[var(--ink)] text-white"
              >
                <img
                  src={step.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="relative flex h-full min-h-[360px] flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white/65">0{index + 1}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-3 text-3xl uppercase text-white">{step.title}</h3>
                    <p className="mb-5 text-sm leading-6 text-white/75">{step.description}</p>
                    <span className="editorial-link text-white">
                      Learn more <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
