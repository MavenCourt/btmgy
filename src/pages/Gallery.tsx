import { Link } from "react-router-dom";
import { Camera, Images, Upload } from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { church, galleryCollections } from "@/data/church";

const galleryCategories = [
  "Church Anniversary",
  "Youth Events",
  "Vacation Bible School",
  "Conferences",
  "Community Outreach",
  "Special Services",
];

const Gallery = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="Photo Gallery"
        subtitle="Church Life at Bethel"
        description="A place to celebrate worship, fellowship, ministry events, youth activities, VBS, conferences, and community outreach."
        image={church.assets.communityService}
        primaryCTA={{ text: "View Events", link: "/events" }}
        secondaryCTA={{ text: "Contact Us", link: "/contact" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Collections
            </div>
            <h2 className="mb-4">Featured Gallery Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Moments from worship, fellowship, outreach, and ministry life at Bethel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryCollections.map((collection) => (
              <Card key={collection.title} className="overflow-hidden border-2 shadow-card hover:shadow-elegant transition-smooth">
                <div className="aspect-[4/3] bg-muted">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <Images className="h-7 w-7 text-primary mb-3" />
                  <h3 className="text-xl mb-2">{collection.title}</h3>
                  <p className="text-sm text-muted-foreground">{collection.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] max-w-6xl mx-auto items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Organize Photos
              </div>
              <h2 className="mb-5">Recommended Albums</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Albums can follow the rhythm of Bethel's annual calendar and ministry departments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {galleryCategories.map((category) => (
                <Card key={category} className="p-5 border-2 shadow-card">
                  <Camera className="h-6 w-6 text-primary mb-3" />
                  <div className="font-semibold">{category}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 gradient-primary text-primary-foreground shadow-elegant max-w-4xl mx-auto text-center">
            <Upload className="h-12 w-12 mx-auto mb-4" />
            <h2 className="mb-4 text-primary-foreground">Share Church Moments</h2>
            <p className="text-lg mb-8 opacity-90">
              For anniversary services, youth events, VBS, conferences, and community outreach, contact the media team.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Contact Media Team</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
