import { Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { church, eventHighlights, monthFocus, serviceGroups } from "@/data/church";

const Events = () => {
  const weeklyGatherings = serviceGroups.flatMap((group) =>
    group.services.slice(0, 2).map((service) => ({
      day: group.day,
      ...service,
    })),
  );

  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="Events Calendar"
        subtitle="Stay Connected"
        description="Bethel's annual calendar includes worship services, conferences, crusades, youth events, prayer events, special services, and community outreach."
        image={church.assets.communityService}
        primaryCTA={{ text: "Plan Your Visit", link: "/visit" }}
        secondaryCTA={{ text: "Contact Us", link: "/contact" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Weekly Gatherings
            </div>
            <h2 className="mb-4">Regular Services and Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Start here for the ongoing weekly rhythm. Special events are added through the annual calendar and ministry announcements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {weeklyGatherings.map((event) => (
              <Card key={`${event.day}-${event.name}`} className="p-6 shadow-card hover:shadow-elegant transition-smooth border-2">
                <h3 className="text-xl mb-4">{event.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{event.day}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{church.addressLines[0]}</span>
                  </div>
                </div>
                {event.note && <p className="text-sm text-muted-foreground">{event.note}</p>}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
              Annual Calendar
            </div>
            <h2 className="mb-4">Monthly Ministry Focus</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The church calendar gives each month a ministry emphasis for planning, services, and department activity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {monthFocus.map((item) => (
              <Card key={item.month} className="p-5 shadow-card hover:shadow-elegant transition-smooth border-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">{item.month}</h3>
                    <div className="text-sm text-muted-foreground">{item.focus}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Special Events
            </div>
            <h2 className="mb-4">What to Watch For</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Final dates should be confirmed from the latest approved church calendar and ministry announcements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {eventHighlights.map((event) => (
              <Card key={event} className="p-6 shadow-card border-2">
                <Sparkles className="h-7 w-7 text-primary mb-4" />
                <h3 className="text-xl mb-2">{event}</h3>
                <p className="text-sm text-muted-foreground">
                  Contact the church office or follow Bethel on Facebook for current dates and details.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 gradient-primary text-primary-foreground shadow-elegant max-w-4xl mx-auto text-center">
            <CalendarDays className="h-12 w-12 mx-auto mb-4" />
            <h2 className="mb-4 text-primary-foreground">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90">
              Follow the church page or contact the office for the latest approved event dates, registration details, and service announcements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="accent" size="lg">
                <a href={church.facebookUrl} target="_blank" rel="noopener noreferrer">
                  Follow on Facebook
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-primary-foreground/95 hover:bg-primary-foreground text-foreground border-primary-foreground">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Events;
