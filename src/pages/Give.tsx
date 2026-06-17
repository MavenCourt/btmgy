import { Link } from "react-router-dom";
import { Building2, Gift, HandCoins, Heart, Mail, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { church, givingPurposes } from "@/data/church";

const givingMethods = [
  {
    icon: HandCoins,
    title: "In Person",
    description: "Give during a worship service or church program through the approved offering process.",
  },
  {
    icon: Building2,
    title: "Bank Transfer",
    description: "Contact the church office for current approved transfer instructions.",
  },
  {
    icon: Gift,
    title: "MMG / Mobile Giving",
    description: "Mobile giving options may be confirmed directly with the church office.",
  },
  {
    icon: Mail,
    title: "Giving Questions",
    description: "Email or call the office for finance-related guidance and receipts.",
  },
];

const Give = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="Give"
        subtitle="Generosity and Stewardship"
        description="Your faithful giving supports worship, discipleship, care, evangelism, community programs, and the ongoing ministry of Bethel Tabernacle Ministries."
        image={church.assets.churchExterior}
        primaryCTA={{ text: "Contact for Giving Details", link: "/contact" }}
        secondaryCTA={{ text: "Learn About Our Mission", link: "/about" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Biblical Giving
            </div>
            <h2 className="mb-5">Why We Give</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bethel teaches faithful stewardship through tithes, offerings, donations, and designated gifts handled according to church financial procedures and leadership-approved controls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {givingPurposes.map((purpose) => (
              <Card key={purpose.title} className="p-6 border-2 shadow-card hover:shadow-elegant transition-smooth">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl mb-3">{purpose.title}</h3>
                <p className="text-sm text-muted-foreground">{purpose.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
              Ways to Give
            </div>
            <h2 className="mb-4">Approved Giving Channels</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Public web pages should not publish private bank details or sensitive financial identifiers. Please confirm current instructions through the church office.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {givingMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="p-6 border-2 shadow-card">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl mb-3">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="p-8 border-2 shadow-elegant">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h2 className="mb-4">Stewardship and Accountability</h2>
              <p className="text-muted-foreground leading-relaxed">
                The master records emphasize financial planning, budgeting, receipts, supporting documents, proper counting procedures, and leadership-approved handling of designated gifts.
              </p>
            </Card>

            <Card className="p-8 border-2 shadow-elegant">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h2 className="mb-4">Request Giving Instructions</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For MMG, bank transfer, receipts, or designated giving, contact the church office.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Contact Office</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`mailto:${church.email}?subject=${encodeURIComponent("Giving information request")}`}>
                    Email Office
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;
