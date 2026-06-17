import { Link } from "react-router-dom";
import { BookMarked, CheckCircle2, Cross, Flame, Globe2, Heart, ShieldCheck } from "lucide-react";
import Hero from "@/components/Hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { beliefs, church, historyTimeline, objectives, values } from "@/data/church";

const crestItems = [
  { icon: Cross, label: "Cross", meaning: "The Blessed Hope" },
  { icon: Flame, label: "Flame", meaning: "The Promise of the Father, the Holy Spirit" },
  { icon: Globe2, label: "Globe", meaning: "Ministry, evangelism, and the edifying of the body of Christ" },
  { icon: BookMarked, label: "Bible", meaning: "The inspired Scriptures" },
  { icon: Heart, label: "People", meaning: "The salvation of man" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="About Bethel Tabernacle Ministries"
        subtitle={`Established ${church.established}`}
        description="A religious, non-profit Christian ministry serving Georgetown, Guyana, under the headship of Jesus Christ and the authority of Scripture."
        image={church.assets.churchExterior}
        primaryCTA={{ text: "Meet Leadership", link: "/leadership" }}
        secondaryCTA={{ text: "Plan Your Visit", link: "/visit" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-7 shadow-card border-2">
              <h3 className="mb-3">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">{church.vision}</p>
            </Card>
            <Card className="p-7 shadow-card border-2">
              <h3 className="mb-3">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">{church.mission}</p>
            </Card>
            <Card className="p-7 shadow-card border-2">
              <h3 className="mb-3">Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">{church.purpose}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              History
            </div>
            <h2 className="mb-4">From Sunday School to Established Ministry</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bethel's story reflects decades of worship, discipleship, pastoral leadership, and faithful ministry in Guyana.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {historyTimeline.map((item, index) => (
              <div key={`${item.year}-${item.title}`} className="grid grid-cols-[6rem_1rem_1fr] gap-5">
                <div className="text-right font-bold text-primary pt-1">{item.year}</div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent mt-2" />
                  {index < historyTimeline.length - 1 && <div className="w-0.5 flex-1 min-h-20 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Objectives
              </div>
              <h2 className="mb-5">Why We Exist</h2>
              <div className="space-y-3">
                {objectives.map((objective) => (
                  <div key={objective} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 shadow-elegant border-2">
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck className="h-7 w-7 text-primary" />
                <h2 className="text-3xl md:text-4xl">Church Values</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {values.map((value) => (
                  <div key={value} className="rounded-md bg-secondary/60 px-4 py-3 text-sm font-semibold">
                    {value}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              What We Believe
            </div>
            <h2 className="mb-4">Statement of Faith</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bethel accepts the Holy Scriptures as the revealed will of God and the all-sufficient rule of faith and practice.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {beliefs.map((belief, index) => (
                <AccordionItem
                  key={belief}
                  value={`belief-${index}`}
                  className="border-2 rounded-lg px-6 shadow-card bg-background"
                >
                  <AccordionTrigger className="text-left hover:text-primary">
                    <span className="font-bold">{belief}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    This is one of Bethel's core doctrinal commitments as summarized from the church constitution and member handbook.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
              Crest & Affiliation
            </div>
            <h2 className="mb-4">Identity and Symbolism</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The church crest is the official symbol of the ministry and reflects Bethel's biblical identity and mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto mb-10">
            {crestItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="p-5 border-2 text-center shadow-card">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.meaning}</p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 max-w-4xl mx-auto border-2 shadow-elegant text-center">
            <h3 className="mb-3">Affiliation</h3>
            <p className="text-muted-foreground leading-relaxed">{church.affiliation}</p>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 gradient-primary text-primary-foreground shadow-elegant max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-primary-foreground">Meet the People Who Serve</h2>
            <p className="text-lg mb-8 opacity-90">
              Bethel is served by senior leadership, administration, department leaders, ministry workers, and faithful members.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link to="/leadership">View Leadership</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
