import { Link } from "react-router-dom";
import { BookOpen, Heart, MapPin, Music, Users } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceTimes from "@/components/ServiceTimes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { church, sundayFocus } from "@/data/church";

const serviceFeatures = [
  {
    icon: Music,
    title: "Worship",
    description: "Gather with the church family in praise, worship, prayer, and ministry before the Lord.",
  },
  {
    icon: BookOpen,
    title: "Biblical Teaching",
    description: "Receive teaching from the Word of God for spiritual understanding, holiness, and daily obedience.",
  },
  {
    icon: Heart,
    title: "Prayer and Care",
    description: "Share prayer needs, receive encouragement, and connect with ministry leaders and members.",
  },
  {
    icon: Users,
    title: "Fellowship",
    description: "Build relationships with a church family committed to discipleship, service, and outreach.",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Service Times"
        subtitle="Join Us for Worship"
        description="Come worship with us at 74 Princess Street, Lodge, Georgetown. Bethel gathers weekly for worship, prayer, Bible study, and ministry programs."
        image={church.assets.heroWorship}
        primaryCTA={{ text: "Plan Your Visit", link: "/visit" }}
        secondaryCTA={{ text: "Prayer Request", link: "/prayer" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              What to Expect
            </div>
            <h2 className="mb-4">A Worshipful, Bible-Centered Gathering</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you are visiting for the first time or looking for a church home, you are welcome at Bethel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {serviceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth border-2">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceTimes />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="p-8 border-2 shadow-elegant">
              <h2 className="mb-5">Sunday Focus Rotation</h2>
              <div className="space-y-3">
                {sundayFocus.map((item) => (
                  <div key={item.week} className="flex gap-4 rounded-md bg-secondary/60 p-4">
                    <div className="font-bold text-primary min-w-24">{item.week}</div>
                    <div className="text-muted-foreground">{item.focus}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-2 shadow-elegant">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="h-7 w-7 text-primary" />
                <h2 className="text-3xl md:text-4xl">Location</h2>
              </div>
              <p className="text-muted-foreground mb-6">{church.address}</p>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-6">
                <iframe
                  src={church.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bethel Tabernacle Ministries location map"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/visit">Plan Your Visit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
