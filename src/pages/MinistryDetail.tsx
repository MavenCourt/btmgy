import { ArrowLeft, ArrowUpRight, CalendarDays, Check, UserRound } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { church, ministries } from "@/data/church";

const MinistryDetail = () => {
  const { ministryId } = useParams();
  const ministry = ministries.find((item) => item.id === ministryId);

  if (!ministry) {
    return (
      <main className="min-h-screen bg-white px-5 pb-20 pt-36 text-center">
        <h1 className="mb-5 uppercase">Ministry not found</h1>
        <p className="mb-8 text-muted-foreground">The ministry page you requested could not be found.</p>
        <Button asChild variant="default" size="lg"><Link to="/ministries">View ministries</Link></Button>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero
        title={ministry.name}
        subtitle="Ministry at Bethel"
        description={ministry.summary}
        image={church.assets.communityService}
        primaryCTA={{ text: "Connect With This Ministry", link: "/contact" }}
        secondaryCTA={{ text: "All Ministries", link: "/ministries" }}
      />

      <section className="section-shell bg-white">
        <div className="section-inner">
          <Link to="/ministries" className="editorial-link mb-12"><ArrowLeft className="h-4 w-4" /> All ministries</Link>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="media-frame aspect-[4/5] lg:sticky lg:top-28">
              <img src={church.assets.communityService} alt={`${ministry.name} at Bethel`} />
            </div>
            <div>
              <p className="eyebrow">Purpose and responsibility</p>
              <h2 className="display-heading mb-7">Growing people. Serving the church.</h2>
              <p className="mb-10 text-lg leading-8 text-muted-foreground">{ministry.summary}</p>

              <div className="border-t border-foreground/20">
                <div className="grid gap-4 border-b border-foreground/20 py-7 sm:grid-cols-[11rem_1fr]">
                  <div className="flex items-center gap-2 font-heading text-xl font-bold uppercase"><UserRound className="h-5 w-5 text-accent" /> Leadership</div>
                  <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                    <p><strong className="text-foreground">Department leader:</strong> {ministry.leader}</p>
                    <p><strong className="text-foreground">Leadership oversight:</strong> {ministry.oversight}</p>
                    <p><strong className="text-foreground">Assistants:</strong> {ministry.assistants}</p>
                  </div>
                </div>
                <div className="grid gap-4 border-b border-foreground/20 py-7 sm:grid-cols-[11rem_1fr]">
                  <div className="flex items-center gap-2 font-heading text-xl font-bold uppercase"><CalendarDays className="h-5 w-5 text-accent" /> Meeting rhythm</div>
                  <p className="text-sm leading-6 text-muted-foreground">{ministry.meeting}</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="mb-5 text-xs font-bold uppercase text-primary">Areas of ministry</p>
                <div className="grid gap-0 border-l border-t border-foreground/20 sm:grid-cols-2">
                  {ministry.responsibilities.map((responsibility) => (
                    <div key={responsibility} className="flex min-h-28 gap-3 border-b border-r border-foreground/20 p-5">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="font-semibold">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild variant="default" size="lg" className="mt-10"><Link to="/contact">Contact this ministry <ArrowUpRight /></Link></Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MinistryDetail;
