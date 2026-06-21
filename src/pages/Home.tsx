import { ArrowUpRight, CalendarDays, Play, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ServiceTimes from "@/components/ServiceTimes";
import { Button } from "@/components/ui/button";
import { church, communityPrograms, eventHighlights, ministries, monthFocus } from "@/data/church";

const Home = () => {
  const featuredMinistries = ministries.filter((ministry) =>
    ["men", "women", "youth", "sunday-school"].includes(ministry.id),
  );

  return (
    <main className="min-h-screen">
      <Hero
        title="Bethel Tabernacle Ministries"
        subtitle={`${church.mottoReference} · ${church.motto}`}
        description="A Bible-centered church in Georgetown, Guyana, equipping the church and making disciples of change for the glory of Jesus Christ."
        primaryCTA={{ text: "Plan Your Visit", link: "/visit" }}
        secondaryCTA={{ text: "Watch Online", link: "/sermons" }}
        image={church.assets.heroWorship}
      />

      <section className="section-shell bg-white">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="media-frame aspect-[4/5] max-h-[620px]">
            <img src={church.assets.communityService} alt="Bethel church family in fellowship" />
          </div>
          <div>
            <p className="eyebrow">Welcome to Bethel</p>
            <h2 className="display-heading mb-8">Walking with Jesus. Growing together. Serving our world.</h2>
            <Quote className="mb-5 h-8 w-8 text-accent" />
            <p className="mb-6 text-lg leading-8 text-muted-foreground">{church.welcome}</p>
            <p className="mb-8 font-heading text-xl font-bold uppercase text-primary">Apostle Cordel A. Joseph · Senior Leader</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="default" size="lg">
                <Link to="/about">Our Story</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/leadership">Meet Our Leaders</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceTimes />

      <section className="section-shell bg-white">
        <div className="section-inner">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Featured teaching</p>
              <h2 className="display-heading">A word for your week.</h2>
            </div>
            <Link to="/sermons" className="editorial-link self-start md:self-auto">
              More sermons <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <a href={church.facebookVideosUrl} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-md">
            <img
              src={church.assets.heroWorship}
              alt="Watch Bethel Tabernacle Ministries teaching"
              className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-[620px]"
            />
            <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
            <span className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--sun)] text-[var(--ink)] transition-transform group-hover:scale-105 md:h-32 md:w-32">
              <Play className="ml-1 h-8 w-8 fill-current md:h-11 md:w-11" />
            </span>
            <span className="absolute bottom-6 left-6 text-xs font-bold uppercase text-white md:bottom-10 md:left-10">Watch latest message</span>
          </a>
        </div>
      </section>

      <section className="section-shell section-mist section-rounded-top">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Life at Bethel</p>
            <h2 className="display-heading mb-7">A church for every generation.</h2>
            <p className="mb-8 max-w-lg text-base leading-7 text-muted-foreground">
              Every believer has a place to be discipled, encouraged, equipped, and released to serve.
            </p>
            <div className="media-frame aspect-[4/3]">
              <img src={church.assets.communityService} alt="People connecting through Bethel ministries" />
            </div>
          </div>

          <div className="border-t border-foreground/20">
            {featuredMinistries.map((ministry, index) => (
              <Link
                key={ministry.id}
                to={`/ministries/${ministry.id}`}
                className="group grid gap-4 border-b border-foreground/20 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start"
              >
                <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                <div>
                  <h3 className="mb-3 text-3xl uppercase transition-colors group-hover:text-accent">{ministry.name}</h3>
                  <p className="max-w-xl text-sm leading-6 text-muted-foreground">{ministry.summary}</p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
              </Link>
            ))}
            <Link to="/ministries" className="editorial-link mt-8">
              Explore all ministries <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell section-dark">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="eyebrow !text-[var(--sun)]">This season at Bethel</p>
              <h2 className="max-w-4xl uppercase text-white">A year shaped by worship, outreach, and growth.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-white/60 lg:justify-self-end">
              Our ministry calendar gives each month a focus while making room for conferences, youth events, prayer, and community service.
            </p>
          </div>

          <div className="grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-3">
            {monthFocus.slice(0, 6).map((item, index) => (
              <div key={item.month} className="min-h-48 border-b border-r border-white/20 p-6">
                <span className="mb-10 block text-xs text-white/35">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-2 text-2xl uppercase text-white">{item.month}</h3>
                <p className="text-sm text-[var(--sun)]">{item.focus}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/20 pt-8 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase text-white/55">
              {eventHighlights.slice(0, 4).map((event) => (
                <span key={event} className="flex items-center gap-2"><CalendarDays className="h-3.5 w-3.5 text-[var(--sun)]" />{event}</span>
              ))}
            </div>
            <Link to="/events" className="editorial-link self-start text-white md:self-auto">
              Full calendar <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="section-inner grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Beyond Sunday</p>
            <h2 className="display-heading mb-7">Faith that moves into the community.</h2>
            <p className="mb-9 max-w-xl text-base leading-7 text-muted-foreground">
              Bethel’s ministry life joins worship and discipleship with compassionate care, practical education, stewardship, and evangelism.
            </p>
            <div className="border-t border-foreground/20">
              {communityPrograms.map((program) => (
                <div key={program.name} className="grid gap-3 border-b border-foreground/20 py-6 sm:grid-cols-[10rem_1fr]">
                  <h3 className="text-xl uppercase">{program.name}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{program.summary}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="media-frame aspect-[4/5]">
            <img src={church.assets.churchExterior} alt="Bethel Tabernacle Ministries in Georgetown" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
