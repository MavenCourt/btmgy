import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, CheckCircle2, UserRound, UsersRound } from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { church, ministries } from "@/data/church";

const MinistryDetail = () => {
  const { ministryId } = useParams();
  const ministry = ministries.find((item) => item.id === ministryId);

  if (!ministry) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="mb-4">Ministry Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The ministry page you requested could not be found.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/ministries">View Ministries</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <Hero
        title={ministry.name}
        subtitle="Ministry Department"
        description={ministry.summary}
        image={church.assets.communityService}
        primaryCTA={{ text: "Contact This Ministry", link: "/contact" }}
        secondaryCTA={{ text: "All Ministries", link: "/ministries" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/ministries">
                <ArrowLeft className="h-4 w-4" />
                All Ministries
              </Link>
            </Button>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <Card className="p-7 border-2 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <UserRound className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl">Leadership</h2>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <span className="font-semibold text-foreground">Department Leader:</span> {ministry.leader}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Leadership Oversight:</span> {ministry.oversight}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Assistants / Notes:</span> {ministry.assistants}
                    </div>
                  </div>
                </Card>

                <Card className="p-7 border-2 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <CalendarDays className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl">Meeting Rhythm</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{ministry.meeting}</p>
                </Card>
              </div>

              <Card className="p-8 border-2 shadow-elegant">
                <div className="flex items-center gap-3 mb-5">
                  <UsersRound className="h-7 w-7 text-primary" />
                  <h2 className="text-3xl md:text-4xl">Ministry Responsibility</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-7">{ministry.summary}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {ministry.responsibilities.map((responsibility) => (
                    <div key={responsibility} className="flex gap-3 rounded-md bg-secondary/60 p-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 gradient-primary text-primary-foreground shadow-elegant max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-primary-foreground">Take the Next Step</h2>
            <p className="text-lg mb-8 opacity-90">
              Use the contact page to ask about meeting details, volunteer opportunities, or ministry membership.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Contact the Church</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MinistryDetail;
