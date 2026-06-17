import { Link } from "react-router-dom";
import { Mail, Shield, UserRound, UsersRound } from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { church, leaders, ministries } from "@/data/church";

const Leadership = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="Leadership & Ministry Teams"
        subtitle="Serving the Body of Christ"
        description="Bethel's leaders serve under the headship of Jesus Christ with responsibility for spiritual oversight, administration, discipleship, care, and outreach."
        image={church.assets.heroWorship}
        primaryCTA={{ text: "Contact Leadership", link: "/contact" }}
        secondaryCTA={{ text: "Explore Ministries", link: "/ministries" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Current Leadership
            </div>
            <h2 className="mb-4">Senior Leadership and Administration</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Current leadership details are based on the 2024 Annual Report and 2025 organizational context.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {leaders.map((leader) => (
              <Card key={leader.name} className="p-6 shadow-card hover:shadow-elegant transition-smooth border-2 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                    {leader.initials || <UserRound className="h-9 w-9" />}
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">{leader.name}</h3>
                    <div className="text-sm text-accent-foreground font-semibold mb-3">{leader.role}</div>
                    <p className="text-sm text-muted-foreground mb-3">{leader.bio}</p>
                    <div className="text-sm">
                      <span className="font-semibold">Oversight: </span>
                      <span className="text-muted-foreground">{leader.responsibilities}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
              Department Leaders
            </div>
            <h2 className="mb-4">Ministry Responsibility</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Department heads work in harmony with the Senior Leader and carry responsibility for ministry organization, activities, reporting, attendance, and finance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {ministries.map((ministry) => (
              <Link key={ministry.id} to={`/ministries/${ministry.id}`}>
                <Card className="p-5 border-2 shadow-card hover:shadow-elegant transition-smooth h-full">
                  <div className="flex gap-3">
                    <UsersRound className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg mb-1">{ministry.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-semibold text-foreground">Leader:</span> {ministry.leader}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Oversight:</span> {ministry.oversight}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="p-8 border-2 shadow-elegant">
              <Shield className="h-9 w-9 text-primary mb-4" />
              <h2 className="mb-4">Governance</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Church Leadership is the highest decision-making and policy-making unit for spiritual matters. Church Administration functions as the implementation and management unit under leadership direction.
              </p>
            </Card>

            <Card className="p-8 border-2 shadow-elegant">
              <Mail className="h-9 w-9 text-primary mb-4" />
              <h2 className="mb-4">Get Connected</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For ministry involvement, pastoral care, prayer, or administrative questions, contact the church office and your message will be directed appropriately.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Contact the Church</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
