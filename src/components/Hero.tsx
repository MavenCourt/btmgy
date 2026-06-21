import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-worship.jpg";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  image?: string;
  overlay?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image = heroImage,
  overlay = true,
}: HeroProps) => {
  const longTitle = title.length > 25;

  return (
    <header className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-[var(--ink)] pt-28 text-white md:min-h-[680px]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden="true"
      />
      {overlay && <div className="absolute inset-0 -z-10 gradient-hero" aria-hidden="true" />}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-gradient-to-t from-[var(--ink)]/75 to-transparent" />

      <div className="container mx-auto px-5 pb-14 md:px-8 md:pb-16">
        <div className="max-w-6xl">
          {subtitle && (
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-white/85">
              <span className="h-0.5 w-9 bg-[var(--sun)]" />
              {subtitle}
            </p>
          )}

          <h1
            className={cn(
              "max-w-[14ch] uppercase text-white text-balance",
              longTitle
                ? "text-5xl md:text-7xl lg:text-[96px]"
                : "text-6xl md:text-8xl lg:text-[132px]",
            )}
          >
            {title}
          </h1>

          <div className="mt-8 grid items-end gap-7 md:grid-cols-[minmax(0,1fr)_auto]">
            {description && (
              <p className="max-w-2xl text-base leading-relaxed text-white/82 md:text-lg">
                {description}
              </p>
            )}

            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-wrap gap-3">
                {primaryCTA && (
                  <Button asChild variant="accent" size="lg">
                    <Link to={primaryCTA.link}>
                      {primaryCTA.text}
                      <ArrowDownRight />
                    </Link>
                  </Button>
                )}
                {secondaryCTA && (
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                    <Link to={secondaryCTA.link}>{secondaryCTA.text}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
