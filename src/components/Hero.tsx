import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  return (
    <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden py-28 md:py-36">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {overlay && (
        <div className="absolute inset-0 gradient-hero" aria-hidden="true" />
      )}

      <div className="relative z-10 container mx-auto px-4 text-center">
        {subtitle && (
          <div className="inline-block rounded-full bg-accent/95 px-4 py-2 text-sm font-semibold text-accent-foreground shadow-card mb-6">
            {subtitle}
          </div>
        )}

        <h1 className="text-primary-foreground mb-6 max-w-4xl mx-auto">
          {title}
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCTA && (
              <Button asChild variant="hero" size="xl">
                <Link to={primaryCTA.link}>
                  {primaryCTA.text}
                </Link>
              </Button>
            )}
            {secondaryCTA && (
              <Button asChild variant="outline" size="xl" className="bg-card/95 hover:bg-card border-primary-foreground text-foreground">
                <Link to={secondaryCTA.link}>
                  {secondaryCTA.text}
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
