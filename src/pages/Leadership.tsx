import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { church, leaders, ministries } from "@/data/church";

const portraitColors = ["#df624b", "#f1b938", "#2d6b5b", "#8eb7ad", "#274b67", "#b04c6b"];

const Leadership = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Leadership"
        subtitle="Serving the Body of Christ"
        description="Bethel's leaders serve under the headship of Jesus Christ with responsibility for spiritual oversight, administration, discipleship, care, and outreach."
        image={church.assets.heroWorship}
        primaryCTA={{ text: "Contact Leadership", link: "/contact" }}
        secondaryCTA={{ text: "Explore Ministries", link: "/ministries" }}
      />

      <section className="section-shell bg-white">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Called to serve</p>
            <h2 className="display-heading">Equipping people for a life of faith and purpose.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Our senior leadership and administration guide the spiritual, pastoral, and practical life of Bethel with prayer, accountability, and a shared commitment to the gospel.
          </p>
        </div>
      </section>

      <section className="section-shell section-mist section-rounded-top">
        <div className="section-inner">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Senior leadership</p>
              <h2 className="display-heading">The people who lead and care.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Portrait photographs can be added to these profiles when the church's approved media is ready.</p>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, index) => (
              <article key={leader.name}>
                <div
                  className="mb-5 flex aspect-[4/5] items-end overflow-hidden rounded-md p-7"
                  style={{ backgroundColor: portraitColors[index % portraitColors.length] }}
                >
                  <span className="font-heading text-[96px] font-bold leading-none text-white/88 md:text-[120px]">{leader.initials}</span>
                </div>
                <p className="mb-2 text-xs font-bold uppercase text-accent">{leader.role}</p>
                <h3 className="mb-3 text-2xl uppercase">{leader.name}</h3>
                <p className="mb-4 text-sm leading-6 text-muted-foreground">{leader.bio}</p>
                <p className="border-t border-foreground/20 pt-4 text-xs leading-5 text-muted-foreground">
                  <strong className="text-foreground">Ministry responsibility:</strong> {leader.responsibilities}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-dark">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="eyebrow !text-[var(--sun)]">Department leaders</p>
              <h2 className="max-w-3xl uppercase text-white">Shared responsibility across every ministry.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-white/60 lg:justify-self-end">
              Department heads work with senior leadership to organize ministry activity, steward resources, care for members, and develop volunteers.
            </p>
          </div>

          <div className="border-t border-white/20">
            {ministries.map((ministry, index) => (
              <Link
                key={ministry.id}
                to={`/ministries/${ministry.id}`}
                className="group grid gap-4 border-b border-white/20 py-6 sm:grid-cols-[4rem_1fr_1fr_auto] sm:items-center"
              >
                <span className="text-xs text-white/35">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl uppercase text-white transition-colors group-hover:text-[var(--sun)]">{ministry.name}</h3>
                <div className="text-sm text-white/60">
                  <p>{ministry.leader}</p>
                  <p className="mt-1 text-xs text-white/40">Oversight: {ministry.oversight}</p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="section-inner grid gap-8 lg:grid-cols-2">
          <div className="border-t border-foreground/20 pt-7">
            <ShieldCheck className="mb-10 h-8 w-8 text-primary" />
            <h2 className="mb-5 text-4xl uppercase">Governance</h2>
            <p className="max-w-xl leading-7 text-muted-foreground">
              Church Leadership is the highest decision-making and policy-making unit for spiritual matters. Church Administration functions as the implementation and management unit under leadership direction.
            </p>
          </div>
          <div className="border-t border-foreground/20 pt-7">
            <Mail className="mb-10 h-8 w-8 text-accent" />
            <h2 className="mb-5 text-4xl uppercase">Connect with a leader</h2>
            <p className="mb-7 max-w-xl leading-7 text-muted-foreground">
              Contact the church office for pastoral care, prayer, ministry involvement, or administrative questions. Your message will be directed appropriately.
            </p>
            <Button asChild variant="default" size="lg"><Link to="/contact">Contact the church <ArrowUpRight /></Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leadership;
