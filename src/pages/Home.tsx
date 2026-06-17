import { Link } from "react-router-dom";
import { BookOpen, CalendarDays, HeartHandshake, MapPin, PlayCircle, Users } from "lucide-react";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import ServiceTimes from "@/components/ServiceTimes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { church, communityPrograms, eventHighlights, ministries, monthFocus } from "@/data/church";

const Home = () => {
  const featuredMinistries = ministries.filter((ministry) =>
    ["men", "women", "youth", "sunday-school"].includes(ministry.id),
  );

  return (
    <div className="min-h-screen">
      <Hero
        title="Bethel Tabernacle Ministries"
        subtitle={`${church.mottoReference} - ${church.motto}`}
        description="A Bible-centered church in Georgetown, Guyana, equipping the church and making disciples of change for the glory of Jesus Christ."
        primaryCTA={{ text: "Plan Your Visit", link: "/visit" }}
        secondaryCTA={{ text: "Watch Online", link: "/sermons" }}
        image={church.assets.heroWorship}
      />

      <QuickActions />

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] max-w-6xl mx-auto items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Welcome
              </div>
              <h2 className="mb-5">A Message from Apostle Cordel Joseph</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {church.welcome}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/about">Learn About BTM</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <Card className="p-8 border-2 shadow-elegant">
              <div className="grid gap-6">
                <div>
                  <h3 className="text-2xl mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">{church.vision}</p>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">{church.mission}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <ServiceTimes />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="p-8 border-2 shadow-card">
              <div className="flex items-center gap-3 mb-5">
                <CalendarDays className="h-7 w-7 text-primary" />
                <h2 className="text-3xl md:text-4xl">Upcoming Focus</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Bethel operates with an annual calendar rhythm that gives each month a clear ministry focus.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {monthFocus.slice(0, 6).map((item) => (
                  <div key={item.month} className="rounded-md border border-border p-3 bg-background">
                    <div className="text-sm font-bold text-primary">{item.month}</div>
                    <div className="text-sm text-muted-foreground">{item.focus}</div>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" size="lg" className="mt-6">
                <Link to="/events">View Full Calendar</Link>
              </Button>
            </Card>

            <Card className="p-8 border-2 shadow-card">
              <div className="flex items-center gap-3 mb-5">
                <PlayCircle className="h-7 w-7 text-accent" />
                <h2 className="text-3xl md:text-4xl">Latest Media</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Watch live services, sermon videos, Bible studies, and special teachings through Bethel's Facebook media page.
              </p>
              <div className="aspect-video rounded-lg bg-secondary overflow-hidden mb-6">
                <img
                  src={church.assets.communityService}
                  alt="Bethel Tabernacle Ministries community and worship"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href={church.facebookVideosUrl} target="_blank" rel="noopener noreferrer">
                    Watch Videos
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/sermons">Media Page</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Ministries
            </div>
            <h2 className="mb-4">Find Your Place to Grow and Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From children to seniors, every believer has a place to be discipled, encouraged, and equipped.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featuredMinistries.map((ministry) => (
              <Link key={ministry.id} to={`/ministries/${ministry.id}`}>
                <Card className="p-6 hover:shadow-elegant transition-smooth h-full border-2">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl mb-2">{ministry.name}</h3>
                  <p className="text-sm text-muted-foreground">{ministry.summary}</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/ministries">View All Ministries</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] max-w-6xl mx-auto items-center">
            <div>
              <img
                src={church.assets.churchExterior}
                alt="Bethel Tabernacle Ministries church exterior"
                className="rounded-lg shadow-elegant w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Community Impact
              </div>
              <h2 className="mb-5">Serving Georgetown and Beyond</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Bethel's ministry life includes worship, discipleship, evangelism, care, financial stewardship, and education support.
              </p>
              <div className="grid gap-4 mb-7">
                {communityPrograms.map((program) => (
                  <div key={program.name} className="flex gap-3">
                    <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold">{program.name}</div>
                      <div className="text-sm text-muted-foreground">{program.summary}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild variant="hero" size="lg">
                <Link to="/ministries">Explore Ministries</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 gradient-primary text-primary-foreground shadow-elegant max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <MapPin className="h-10 w-10 mb-4" />
                <h2 className="mb-3 text-primary-foreground">Visit Us This Sunday</h2>
                <p className="text-lg opacity-90">{church.address}</p>
                <p className="text-lg opacity-90">Sunday Worship Service at 11:00 AM</p>
              </div>
              <div className="flex flex-col gap-3 min-w-56">
                <Button asChild variant="accent" size="lg">
                  <Link to="/visit">Plan Your Visit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-primary-foreground/95 hover:bg-primary-foreground text-foreground border-primary-foreground">
                  <Link to="/prayer">
                    <HeartHandshake className="h-4 w-4" />
                    Prayer Request
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="mb-3">Events at a Glance</h2>
            <p className="text-muted-foreground">
              Conferences, crusades, youth events, prayer gatherings, special services, and community outreach remain part of the annual ministry rhythm.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {eventHighlights.slice(0, 4).map((event) => (
              <Card key={event} className="p-5 border-2 text-center shadow-card">
                <CalendarDays className="h-6 w-6 text-primary mx-auto mb-3" />
                <div className="font-semibold">{event}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
