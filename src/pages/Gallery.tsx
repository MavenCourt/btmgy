import { ArrowUpRight, Camera, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { church, galleryCollections } from "@/data/church";

const galleryCategories = ["Church Anniversary", "Youth Events", "Vacation Bible School", "Conferences", "Community Outreach", "Special Services"];

const Gallery = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Gallery"
        subtitle="Church Life at Bethel"
        description="Celebrating worship, fellowship, ministry events, youth activities, Vacation Bible School, conferences, and community outreach."
        image={church.assets.communityService}
        primaryCTA={{ text: "View Events", link: "/events" }}
        secondaryCTA={{ text: "Contact Us", link: "/contact" }}
      />

      <section className="section-shell bg-white">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div><p className="eyebrow">Church life</p><h2 className="display-heading">Moments of worship, joy, and service.</h2></div>
            <p className="max-w-lg text-base leading-7 text-muted-foreground lg:justify-self-end">This gallery framework is ready for Bethel's approved event photographs and video once the media is added.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-12">
            {galleryCollections.map((collection, index) => (
              <article key={collection.title} className={`group relative overflow-hidden rounded-md bg-[var(--ink)] ${index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-12"}`}>
                <img src={collection.image} alt={collection.title} className={`w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 ${index === 2 ? "h-[360px] md:h-[520px]" : "h-[430px] md:h-[600px]"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <p className="mb-2 text-xs font-bold uppercase text-[var(--sun)]">Featured collection 0{index + 1}</p>
                  <h3 className="mb-3 text-3xl uppercase text-white md:text-4xl">{collection.title}</h3>
                  <p className="max-w-lg text-sm leading-6 text-white/70">{collection.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-mist section-rounded-top">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="eyebrow">Album structure</p><h2 className="display-heading mb-6">A home for every memory.</h2><p className="text-sm leading-6 text-muted-foreground">Albums follow the rhythm of Bethel's annual calendar and ministry departments.</p></div>
          <div className="grid border-l border-t border-foreground/20 sm:grid-cols-2">
            {galleryCategories.map((category, index) => (
              <div key={category} className="min-h-44 border-b border-r border-foreground/20 p-6">
                <div className="mb-10 flex items-center justify-between"><span className="text-xs text-muted-foreground">0{index + 1}</span><Camera className="h-5 w-5 text-accent" /></div>
                <h3 className="text-2xl uppercase">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-forest">
        <div className="section-inner flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div><Upload className="mb-7 h-8 w-8 text-[var(--sun)]" /><p className="eyebrow !text-[var(--sun)]">Share church moments</p><h2 className="max-w-3xl uppercase text-white">Help the media team preserve Bethel's story.</h2></div>
          <Button asChild variant="accent" size="lg"><Link to="/contact">Contact media team <ArrowUpRight /></Link></Button>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
