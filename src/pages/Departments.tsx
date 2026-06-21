import { ArrowUpRight, BookOpen, GraduationCap, HandHeart, Landmark, Mic2, Music, PersonStanding, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
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

const ministryImages = [church.assets.communityService, church.assets.heroWorship, church.assets.churchExterior];

const Departments = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Ministries"
        subtitle="Grow · Serve · Belong"
        description="Explore Bethel's ministry life and find the place where you can be discipled, encouraged, equipped, and released for service."
        image={church.assets.communityService}
        primaryCTA={{ text: "Join a Ministry", link: "/contact" }}
        secondaryCTA={{ text: "Prayer Request", link: "/prayer" }}
      />

      <section className="section-shell bg-white">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">There is a place for you</p>
            <h2 className="display-heading">Growing together through every season of life.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Each ministry has clear leadership, a regular meeting rhythm, and practical responsibility for the spiritual and relational life of the church.
          </p>
        </div>
      </section>

      <section className="section-shell section-mist section-rounded-top">
        <div className="section-inner">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry, index) => {
              const Icon = ministryIcons[ministry.id] || Users;
              return (
                <Link key={ministry.id} to={`/ministries/${ministry.id}`} className="group relative min-h-[420px] overflow-hidden rounded-md bg-[var(--ink)] text-white">
                  <img src={ministryImages[index % ministryImages.length]} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="relative flex h-full min-h-[420px] flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white/55">{String(index + 1).padStart(2, "0")}</span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/45"><Icon className="h-5 w-5" /></span>
                    </div>
                    <div>
                      <h3 className="mb-3 text-3xl uppercase text-white">{ministry.name}</h3>
                      <p className="mb-5 line-clamp-3 text-sm leading-6 text-white/70">{ministry.summary}</p>
                      <div className="flex items-center justify-between border-t border-white/25 pt-4 text-xs text-white/60">
                        <span>{ministry.leader}</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell section-coral">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow !text-white">Community development</p>
              <h2 className="max-w-4xl uppercase text-white">Practical help for stewardship, education, and family life.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-white/75 lg:justify-self-end">
              Bethel's development programs extend discipleship into the practical decisions and opportunities people face every day.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {communityPrograms.map((program) => {
              const Icon = program.name === "Finichance" ? Landmark : GraduationCap;
              return (
                <article key={program.name} className="border-t border-white/35 pt-6">
                  <Icon className="mb-12 h-9 w-9 text-[var(--sun)]" />
                  <p className="mb-2 text-xs font-bold uppercase text-white/65">{program.label}</p>
                  <h3 className="mb-5 text-4xl uppercase text-white">{program.name}</h3>
                  <p className="max-w-xl leading-7 text-white/78">{program.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="section-inner flex flex-col justify-between gap-8 border-t border-foreground/20 pt-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Ready to serve?</p>
            <h2 className="max-w-3xl uppercase">Let us help you find your ministry.</h2>
          </div>
          <Button asChild variant="default" size="lg"><Link to="/contact">Connect with a ministry <ArrowUpRight /></Link></Button>
        </div>
      </section>
    </main>
  );
};

export default Departments;
