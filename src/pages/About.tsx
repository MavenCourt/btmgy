import { ArrowUpRight, BookOpen, Check, Cross, Flame, Globe2, Heart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { beliefs, church, historyTimeline, objectives, values } from "@/data/church";

const crestItems = [
  { icon: Cross, label: "The Cross", meaning: "The blessed hope in Jesus Christ" },
  { icon: Flame, label: "The Flame", meaning: "The promise and power of the Holy Spirit" },
  { icon: Globe2, label: "The Globe", meaning: "Ministry, evangelism, and the body of Christ" },
  { icon: BookOpen, label: "The Bible", meaning: "The inspired and authoritative Scriptures" },
  { icon: Heart, label: "The People", meaning: "The salvation and restoration of humanity" },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Story"
        subtitle={`Established ${church.established}`}
        description="A Christian ministry rooted in Scripture, empowered by the Holy Spirit, and committed to worship, discipleship, evangelism, and compassionate service."
        image={church.assets.churchExterior}
        primaryCTA={{ text: "Meet Leadership", link: "/leadership" }}
        secondaryCTA={{ text: "Plan Your Visit", link: "/visit" }}
      />

      <section className="section-shell bg-white">
        <div className="section-inner">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Who we are</p>
              <h2 className="display-heading">Faithful to the call. Present in the community.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
              Bethel Tabernacle Ministries is a religious, non-profit Christian ministry serving Georgetown and beyond under the headship of Jesus Christ, the direction of Scripture, and the power of the Holy Spirit.
            </p>
          </div>

          <div className="border-t border-foreground/20">
            {[
              ["Vision", church.vision],
              ["Mission", church.mission],
              ["Purpose", church.purpose],
            ].map(([title, copy], index) => (
              <div key={title} className="grid gap-5 border-b border-foreground/20 py-8 md:grid-cols-[4rem_13rem_1fr]">
                <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                <h3 className="text-3xl uppercase">{title}</h3>
                <p className="max-w-2xl leading-7 text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-mist section-rounded-top">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Our history</p>
            <h2 className="display-heading mb-7">From a Sunday School to an established ministry.</h2>
            <div className="media-frame aspect-[4/3]">
              <img src={church.assets.churchExterior} alt="Bethel Tabernacle Ministries church" />
            </div>
          </div>
          <div className="border-t border-foreground/20">
            {historyTimeline.map((item, index) => (
              <div key={`${item.year}-${item.title}`} className="grid gap-4 border-b border-foreground/20 py-7 sm:grid-cols-[6rem_1fr]">
                <span className="font-heading text-2xl font-bold text-accent">{item.year}</span>
                <div>
                  <h3 className="mb-3 text-2xl uppercase">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow">Our values</p>
              <h2 className="display-heading">The way we live the mission.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              These commitments shape our worship, leadership, relationships, and service to the wider community.
            </p>
          </div>

          <div className="grid border-l border-t border-foreground/20 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={value} className="min-h-52 border-b border-r border-foreground/20 p-7">
                <span className="mb-14 block text-xs font-bold text-accent">0{index + 1}</span>
                <h3 className="text-2xl uppercase">{value}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Why we exist</p>
              <h2 className="display-heading">Five clear objectives.</h2>
            </div>
            <div className="border-t border-foreground/20">
              {objectives.map((objective) => (
                <div key={objective} className="flex gap-4 border-b border-foreground/20 py-5">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="leading-7 text-muted-foreground">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-dark section-rounded-top">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow !text-[var(--sun)]">What we believe</p>
            <h2 className="max-w-xl uppercase text-white">Built on the Word of God.</h2>
            <p className="mt-6 max-w-lg leading-7 text-white/65">
              Bethel accepts the Holy Scriptures as the revealed will of God and the all-sufficient rule of faith and practice.
            </p>
          </div>
          <Accordion type="single" collapsible className="border-t border-white/25">
            {beliefs.map((belief, index) => (
              <AccordionItem key={belief} value={`belief-${index}`} className="border-white/20">
                <AccordionTrigger className="py-5 text-left font-heading text-xl font-bold uppercase text-white hover:text-[var(--sun)] hover:no-underline">
                  <span className="flex items-center gap-5"><span className="font-sans text-[10px] text-white/40">{String(index + 1).padStart(2, "0")}</span>{belief}</span>
                </AccordionTrigger>
                <AccordionContent className="max-w-xl pb-6 pl-10 leading-7 text-white/62">
                  This is one of Bethel's core doctrinal commitments as summarized from the church constitution and member handbook.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Our identity</p>
              <h2 className="display-heading">A crest filled with meaning.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">{church.affiliation}</p>
          </div>

          <div className="grid border-l border-t border-foreground/20 sm:grid-cols-2 lg:grid-cols-5">
            {crestItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="border-b border-r border-foreground/20 p-6">
                  <Icon className="mb-12 h-7 w-7 text-accent" />
                  <h3 className="mb-3 text-xl uppercase">{item.label}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.meaning}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-foreground/20 pt-8">
            <div className="flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-primary" /><span className="font-semibold">Served by accountable spiritual leadership</span></div>
            <Button asChild variant="default" size="lg"><Link to="/leadership">Meet the team <ArrowUpRight /></Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
