import { ArrowUpRight, BookOpen, Facebook, Headphones, Play, Radio, Video } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { church } from "@/data/church";

const mediaCategories = [
  { icon: Video, title: "Video Sermons", description: "Recent Sunday messages and ministry of the Word." },
  { icon: Radio, title: "Facebook Live", description: "Live services, special broadcasts, and announcements." },
  { icon: BookOpen, title: "Bible Studies", description: "Teaching sessions that help believers grow in Scripture." },
  { icon: Headphones, title: "Special Teachings", description: "Messages and teaching series organized for continued growth." },
];

const Sermons = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Sermons & Media"
        subtitle="Watch · Listen · Grow"
        description="Connect with Bethel online through live services, sermon videos, Bible studies, and special teachings."
        image={church.assets.heroWorship}
        primaryCTA={{ text: "Watch Online", link: "/sermons#watch" }}
        secondaryCTA={{ text: "Plan Your Visit", link: "/visit" }}
      />

      <section id="watch" className="section-shell bg-white">
        <div className="section-inner">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow">Latest teaching</p><h2 className="display-heading">Learn from God's Word.</h2></div>
            <a href={church.facebookVideosUrl} target="_blank" rel="noopener noreferrer" className="editorial-link self-start md:self-auto">All videos <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <a href={church.facebookVideosUrl} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-md">
            <img src={church.assets.heroWorship} alt="Bethel sermon and worship" className="h-[430px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] md:h-[650px]" />
            <div className="absolute inset-0 bg-black/30" />
            <span className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--sun)] text-[var(--ink)] md:h-36 md:w-36"><Play className="ml-1 h-10 w-10 fill-current" /></span>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 text-white md:p-10">
              <div><p className="mb-2 text-xs font-bold uppercase text-[var(--sun)]">Featured message</p><h3 className="text-3xl uppercase text-white md:text-5xl">Watch Bethel Online</h3></div>
              <ArrowUpRight className="hidden h-7 w-7 sm:block" />
            </div>
          </a>
        </div>
      </section>

      <section className="section-shell section-forest section-rounded-top">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div><p className="eyebrow !text-[var(--sun)]">Media library</p><h2 className="max-w-3xl uppercase text-white">Teaching for every part of the journey.</h2></div>
            <p className="max-w-lg text-sm leading-6 text-white/60 lg:justify-self-end">As Bethel's library grows, messages can be organized by speaker, date, series, Scripture, and ministry event.</p>
          </div>
          <div className="grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {mediaCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <article key={category.title} className="min-h-72 border-b border-r border-white/20 p-6">
                  <div className="mb-20 flex items-center justify-between"><span className="text-xs text-white/35">0{index + 1}</span><Icon className="h-6 w-6 text-[var(--sun)]" /></div>
                  <h3 className="mb-3 text-2xl uppercase text-white">{category.title}</h3>
                  <p className="text-sm leading-6 text-white/60">{category.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex aspect-square items-center justify-center rounded-md bg-[var(--coral)] text-white">
            <Facebook className="h-24 w-24" />
          </div>
          <div>
            <p className="eyebrow">Join the livestream</p>
            <h2 className="display-heading mb-6">Continue with Bethel wherever you are.</h2>
            <p className="mb-8 max-w-xl text-lg leading-8 text-muted-foreground">Bethel's public Facebook page is the primary online hub for live services, videos, and ministry announcements.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="default" size="lg"><a href={church.facebookUrl} target="_blank" rel="noopener noreferrer">Open Facebook <ArrowUpRight /></a></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Ask about media</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sermons;
