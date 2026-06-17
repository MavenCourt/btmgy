import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  HandHeart,
  Landmark,
  Mic2,
  Music,
  PersonStanding,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { church, communityPrograms, ministries } from "@/data/church";

const ministryIcons: Record<string, typeof Users> = {
  men: Users,
  women: HandHeart,
  youth: Sparkles,
  "sunday-school": BookOpen,
  "worship-music": Music,
  prayer: ShieldCheck,
  evangelism: Mic2,
  care: HandHeart,
  dance: PersonStanding,
  seniors: Users,
};

const Departments = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="Ministries"
        subtitle="Grow, Serve, Belong"
        description="Explore Bethel's ministry life and find the place where you can be discipled, encouraged, and equipped for service."
        image={church.assets.communityService}
        primaryCTA={{ text: "Join a Ministry", link: "/contact" }}
        secondaryCTA={{ text: "Prayer Request", link: "/prayer" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Ministry Departments
            </div>
            <h2 className="mb-4">Every Department Has a Purpose</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each ministry includes leadership oversight, a department leader, meeting rhythm, and practical responsibility for the life of the church.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ministries.map((ministry) => {
              const Icon = ministryIcons[ministry.id] || Users;

              return (
                <Card key={ministry.id} id={ministry.id} className="p-6 shadow-card hover:shadow-elegant transition-smooth border-2 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-1">{ministry.name}</h3>
                      <div className="text-sm text-accent-foreground font-semibold">{ministry.meeting}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{ministry.summary}</p>
                  <div className="text-sm text-muted-foreground mb-5">
                    <div><span className="font-semibold text-foreground">Leader:</span> {ministry.leader}</div>
                    <div><span className="font-semibold text-foreground">Oversight:</span> {ministry.oversight}</div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/ministries/${ministry.id}`}>View Ministry</Link>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
              Community Programs
            </div>
            <h2 className="mb-4">Practical Help and Development</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bethel's improvement priorities include strengthening social programs that support stewardship, education, and family life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {communityPrograms.map((program) => (
              <Card key={program.name} className="p-8 border-2 shadow-elegant">
                <div className="flex items-center gap-3 mb-4">
                  {program.name === "Finichance" ? (
                    <Landmark className="h-8 w-8 text-primary" />
                  ) : (
                    <GraduationCap className="h-8 w-8 text-primary" />
                  )}
                  <div>
                    <h3 className="text-2xl">{program.name}</h3>
                    <p className="text-sm font-semibold text-accent-foreground">{program.label}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{program.summary}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 gradient-primary text-primary-foreground shadow-elegant max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-primary-foreground">Ready to Serve?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact the church office to ask about ministry involvement, training, and department meeting details.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Connect With a Ministry</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Departments;
