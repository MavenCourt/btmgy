import { ArrowUpRight, Building2, Gift, HandCoins, Heart, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { church, givingPurposes } from "@/data/church";

const givingMethods = [
  { icon: HandCoins, title: "In Person", description: "Give during worship services and church programs through the approved offering process." },
  { icon: Building2, title: "Bank Transfer", description: "Contact the church office for the current approved transfer instructions." },
  { icon: Gift, title: "MMG / Mobile", description: "Confirm available mobile giving details directly with the church office." },
  { icon: Mail, title: "Receipts & Help", description: "Email or call the office for finance-related guidance and giving receipts." },
];

const Give = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Give to the Mission"
        subtitle="Generosity · Worship · Stewardship"
        description="Your faithful giving supports worship, discipleship, care, evangelism, community programs, and the ongoing ministry of Bethel Tabernacle Ministries."
        image={church.assets.churchExterior}
        primaryCTA={{ text: "Request Giving Details", link: "/contact" }}
        secondaryCTA={{ text: "Our Mission", link: "/about" }}
      />

      <section className="section-shell bg-white">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Why we give</p>
            <h2 className="display-heading mb-7">Generosity makes ministry possible.</h2>
            <p className="mb-7 text-lg leading-8 text-muted-foreground">Bethel teaches faithful stewardship through tithes, offerings, donations, and designated gifts handled according to church financial procedures and leadership-approved controls.</p>
            <Button asChild variant="default" size="lg"><Link to="/contact">Request instructions <ArrowUpRight /></Link></Button>
          </div>
          <div className="media-frame aspect-[4/3]"><img src={church.assets.heroWorship} alt="Worship at Bethel Tabernacle Ministries" /></div>
        </div>
      </section>

      <section className="section-shell section-mist section-rounded-top">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div><p className="eyebrow">What giving supports</p><h2 className="display-heading">Building the church. Blessing the community.</h2></div>
            <p className="max-w-lg text-sm leading-6 text-muted-foreground lg:justify-self-end">Every gift helps sustain the shared ministry, outreach, care, and development work of Bethel.</p>
          </div>
          <div className="grid border-l border-t border-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
            {givingPurposes.map((purpose, index) => (
              <article key={purpose.title} className="min-h-72 border-b border-r border-foreground/20 p-6">
                <div className="mb-20 flex items-center justify-between"><span className="text-xs text-muted-foreground">0{index + 1}</span><Heart className="h-6 w-6 text-accent" /></div>
                <h3 className="mb-3 text-2xl uppercase">{purpose.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{purpose.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-coral">
        <div className="section-inner">
          <div className="mb-12"><p className="eyebrow !text-white">Ways to give</p><h2 className="max-w-3xl uppercase text-white">Simple, approved giving channels.</h2></div>
          <div className="border-t border-white/35">
            {givingMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="grid gap-4 border-b border-white/30 py-7 md:grid-cols-[4rem_15rem_1fr] md:items-center">
                  <span className="text-xs text-white/55">0{index + 1}</span>
                  <h3 className="flex items-center gap-3 text-2xl uppercase text-white"><Icon className="h-5 w-5 text-[var(--sun)]" />{method.title}</h3>
                  <p className="max-w-xl text-sm leading-6 text-white/75">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="section-inner grid gap-8 lg:grid-cols-2">
          <div className="border-t border-foreground/20 pt-7"><ShieldCheck className="mb-10 h-8 w-8 text-primary" /><h2 className="mb-5 text-4xl uppercase">Stewardship and accountability</h2><p className="max-w-xl leading-7 text-muted-foreground">Bethel emphasizes budgeting, receipts, supporting documents, proper counting procedures, and leadership-approved handling of designated gifts.</p></div>
          <div className="border-t border-foreground/20 pt-7"><Mail className="mb-10 h-8 w-8 text-accent" /><h2 className="mb-5 text-4xl uppercase">Giving questions</h2><p className="mb-7 max-w-xl leading-7 text-muted-foreground">For MMG, bank transfer, receipts, or designated giving, contact the church office before sending funds.</p><div className="flex flex-wrap gap-3"><Button asChild variant="default" size="lg"><Link to="/contact">Contact office</Link></Button><Button asChild variant="outline" size="lg"><a href={`mailto:${church.email}?subject=${encodeURIComponent("Giving information request")}`}>Email office</a></Button></div></div>
        </div>
      </section>
    </main>
  );
};

export default Give;
