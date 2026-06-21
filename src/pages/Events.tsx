import { ArrowUpRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { church, eventHighlights, monthFocus, serviceGroups } from "@/data/church";

const calendarColors = ["#dfece9", "#f1b938", "#df624b", "#ffffff"];

const Events = () => {
  const weeklyGatherings = serviceGroups.flatMap((group) =>
    group.services.slice(0, 2).map((service) => ({ day: group.day, ...service })),
  );

  return (
    <main className="min-h-screen">
      <Hero
        title="Events"
        subtitle="Worship · Gather · Serve"
        description="Stay connected with Bethel's worship services, conferences, crusades, youth events, prayer gatherings, special services, and community outreach."
        image={church.assets.communityService}
        primaryCTA={{ text: "Plan Your Visit", link: "/visit" }}
        secondaryCTA={{ text: "Contact Us", link: "/contact" }}
      />

      <section className="section-shell bg-white">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div><p className="eyebrow">Weekly rhythm</p><h2 className="display-heading">There is always a way to gather.</h2></div>
            <p className="max-w-lg text-base leading-7 text-muted-foreground lg:justify-self-end">Our regular services and ministry meetings form the foundation of life together at Bethel.</p>
          </div>
          <div className="border-t border-foreground/20">
            {weeklyGatherings.map((event, index) => (
              <div key={`${event.day}-${event.name}`} className="grid gap-4 border-b border-foreground/20 py-6 md:grid-cols-[4rem_9rem_1fr_8rem] md:items-center">
                <span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-xs font-bold uppercase text-accent">{event.day}</p>
                <div><h3 className="text-2xl uppercase">{event.name}</h3>{event.note && <p className="mt-1 text-xs text-muted-foreground">{event.note}</p>}</div>
                <p className="flex items-center gap-2 font-semibold"><Clock className="h-4 w-4 text-primary" />{event.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-dark section-rounded-top">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div><p className="eyebrow !text-[var(--sun)]">Annual calendar</p><h2 className="max-w-3xl uppercase text-white">Every month carries a ministry focus.</h2></div>
            <p className="max-w-lg text-sm leading-6 text-white/60 lg:justify-self-end">The calendar helps departments plan together while keeping worship, discipleship, care, and evangelism at the center.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {monthFocus.map((item, index) => (
              <article key={item.month} className="min-h-52 rounded-md p-6 text-[var(--ink)]" style={{ backgroundColor: calendarColors[index % calendarColors.length] }}>
                <span className="mb-16 block text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-2 text-2xl uppercase">{item.month}</h3>
                <p className="text-sm font-semibold">{item.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-mist">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Special gatherings</p>
            <h2 className="display-heading mb-6">Mark the moments that shape us.</h2>
            <p className="text-sm leading-6 text-muted-foreground">Final dates are confirmed through the latest approved church calendar and ministry announcements.</p>
          </div>
          <div className="grid border-l border-t border-foreground/20 sm:grid-cols-2">
            {eventHighlights.map((event, index) => (
              <article key={event} className="min-h-44 border-b border-r border-foreground/20 p-6">
                <CalendarDays className="mb-10 h-6 w-6 text-accent" />
                <h3 className="text-2xl uppercase">{event}</h3>
                <span className="mt-3 block text-xs text-muted-foreground">Event series {String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="section-inner flex flex-col justify-between gap-8 border-t border-foreground/20 pt-8 md:flex-row md:items-center">
          <div><p className="eyebrow">Stay updated</p><h2 className="max-w-3xl uppercase">Follow Bethel for current event details.</h2><p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{church.address}</p></div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="default" size="lg"><a href={church.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight /></a></Button>
            <Button asChild variant="outline" size="lg"><Link to="/contact">Contact us</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
