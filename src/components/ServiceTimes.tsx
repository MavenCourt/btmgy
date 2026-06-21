import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { church, serviceGroups } from "@/data/church";

const ServiceTimes = () => {
  return (
    <section className="section-shell section-forest section-rounded-top">
      <div className="section-inner">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="eyebrow !text-[var(--sun)]">Gather with us</p>
            <h2 className="max-w-3xl uppercase text-white">Worship, prayer, teaching, and fellowship.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/68 lg:justify-self-end">
            Bethel gathers throughout the week at 74 Princess Street, Lodge, with selected ministry meetings also held online.
          </p>
        </div>

        <div className="border-t border-white/25">
          {serviceGroups.map((group, index) => (
            <div key={group.day} className="grid gap-5 border-b border-white/20 py-7 md:grid-cols-[5rem_12rem_1fr] md:items-start">
              <span className="text-xs font-bold text-white/45">0{index + 1}</span>
              <h3 className="text-3xl uppercase text-white">{group.day}</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {group.services.map((service) => (
                  <div key={`${group.day}-${service.name}`}>
                    <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[var(--sun)]">
                      <Clock className="h-4 w-4" /> {service.time}
                    </div>
                    <p className="font-semibold text-white">{service.name}</p>
                    {service.note && <p className="mt-1 text-xs leading-5 text-white/55">{service.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-start gap-3 text-white/75">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--sun)]" />
            <div>
              <p className="font-semibold text-white">{church.address}</p>
              <p className="mt-1 text-sm">Phone {church.phoneNumbers.join(" / ")}</p>
            </div>
          </div>
          <Link to="/visit" className="editorial-link self-start text-white md:self-auto">
            Plan your visit <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
