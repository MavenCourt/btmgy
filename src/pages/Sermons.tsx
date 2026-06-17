import { Link } from "react-router-dom";
import { BookOpen, Facebook, Headphones, Radio, Video } from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { church } from "@/data/church";

const mediaCategories = [
  {
    icon: Video,
    title: "Video Sermons",
    description: "Watch recent Sunday messages and ministry of the Word.",
  },
  {
    icon: Radio,
    title: "Facebook Live",
    description: "Join live services and special broadcasts through the church Facebook page.",
  },
  {
    icon: BookOpen,
    title: "Bible Studies",
    description: "Follow teaching sessions that help believers grow in the Word of God.",
  },
  {
    icon: Headphones,
    title: "Audio & Special Teachings",
    description: "A future library can organize audio messages, teachings, and series by topic.",
  },
];

const Sermons = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="Sermons & Media"
        subtitle="Watch and Listen"
        description="Connect with Bethel online through live services, sermon videos, Bible studies, and special teachings."
        image={church.assets.heroWorship}
        primaryCTA={{ text: "Watch Online", link: "/sermons#watch" }}
        secondaryCTA={{ text: "Plan Your Visit", link: "/visit" }}
      />

      <section id="watch" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 gradient-primary text-primary-foreground shadow-elegant">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
                <div className="w-20 h-20 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                  <Facebook className="h-10 w-10" />
                </div>
                <div>
                  <h2 className="mb-4 text-primary-foreground">Watch Live on Facebook</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Bethel's public Facebook page is the primary online media hub for live services, videos, and announcements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="accent" size="lg">
                      <a href={church.facebookUrl} target="_blank" rel="noopener noreferrer">
                        Open Facebook Page
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-primary-foreground/95 hover:bg-primary-foreground text-foreground border-primary-foreground">
                      <a href={church.facebookVideosUrl} target="_blank" rel="noopener noreferrer">
                        View Videos
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Media Library
            </div>
            <h2 className="mb-4">Organized for Growth</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As the website matures, media can be organized by speaker, date, teaching series, scripture, and ministry event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mediaCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="p-6 border-2 shadow-card hover:shadow-elegant transition-smooth h-full">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl mb-3">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Latest Videos
              </div>
              <h2 className="mb-5">Continue with Bethel Online</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Use the Facebook video page for the most current public media. A dedicated YouTube or podcast library can be added later if the church chooses to publish there.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href={church.facebookVideosUrl} target="_blank" rel="noopener noreferrer">
                    Latest Videos
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Ask About Media</Link>
                </Button>
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden shadow-elegant">
              <img
                src={church.assets.heroWorship}
                alt="Worship at Bethel Tabernacle Ministries"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
