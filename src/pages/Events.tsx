import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, Clock, MapPin, X } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { church, serviceGroups } from "@/data/church";
import { calendar2026Months, type CalendarEvent, type CalendarEventCategory } from "@/data/events2026";

const calendarColors = ["#dfece9", "#f1b938", "#df624b", "#ffffff"];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const categoryLabels: Record<CalendarEventCategory, string> = {
  activity: "Activity",
  birthday: "Birthday",
  anniversary: "Anniversary",
  other: "Other",
  regular: "Regular",
};

const categoryStyles: Record<CalendarEventCategory, string> = {
  activity: "bg-[var(--coral)] text-white",
  birthday: "bg-[var(--sun)] text-[var(--ink)]",
  anniversary: "bg-[var(--mist)] text-[var(--ink)]",
  other: "bg-[var(--forest)] text-white",
  regular: "bg-white text-[var(--ink)] ring-1 ring-foreground/20",
};

const daysInMonth = (monthIndex: number) => new Date(2026, monthIndex + 1, 0).getDate();
const firstWeekday = (monthIndex: number) => new Date(2026, monthIndex, 1).getDay();

const eventHasDate = (event: CalendarEvent) =>
  Boolean(event.days?.length || typeof event.startDay === "number");

const firstEventDay = (event: CalendarEvent) =>
  event.days?.[0] ?? event.startDay ?? Number.MAX_SAFE_INTEGER;

const eventOccursOnDay = (event: CalendarEvent, day: number) => {
  if (event.days?.includes(day)) return true;
  if (typeof event.startDay === "number" && typeof event.endDay === "number") {
    return day >= event.startDay && day <= event.endDay;
  }
  return event.startDay === day;
};

const sortEvents = (events: CalendarEvent[]) =>
  [...events].sort((a, b) => firstEventDay(a) - firstEventDay(b) || a.title.localeCompare(b.title));

const Events = () => {
  const [activeMonthIndex, setActiveMonthIndex] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const weeklyGatherings = serviceGroups.flatMap((group) =>
    group.services.slice(0, 2).map((service) => ({ day: group.day, ...service })),
  );

  const selectedMonth = activeMonthIndex === null ? null : calendar2026Months[activeMonthIndex];

  const monthDays = useMemo(() => {
    if (!selectedMonth) return [];
    return Array.from({ length: daysInMonth(selectedMonth.monthIndex) }, (_, index) => index + 1);
  }, [selectedMonth]);

  const sortedMonthEvents = useMemo(
    () => (selectedMonth ? sortEvents(selectedMonth.events) : []),
    [selectedMonth],
  );

  const datedMonthEvents = sortedMonthEvents.filter(eventHasDate);
  const undatedMonthEvents = sortedMonthEvents.filter((event) => !eventHasDate(event));

  useEffect(() => {
    if (!selectedMonth) return;

    document.body.classList.add("menu-open");
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMonthIndex(null);
        setSelectedEvent(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMonth]);

  const openMonth = (monthIndex: number) => {
    setActiveMonthIndex(monthIndex);
    setSelectedEvent(null);
  };

  const closeMonth = () => {
    setActiveMonthIndex(null);
    setSelectedEvent(null);
  };

  const showPreviousMonth = () => {
    if (!selectedMonth) return;
    setActiveMonthIndex((current) => (current === null ? current : current === 0 ? 11 : current - 1));
    setSelectedEvent(null);
  };

  const showNextMonth = () => {
    if (!selectedMonth) return;
    setActiveMonthIndex((current) => (current === null ? current : current === 11 ? 0 : current + 1));
    setSelectedEvent(null);
  };

  return (
    <main className="min-h-screen">
      <Hero
        title="Events"
        subtitle="Worship - Gather - Serve"
        description="Stay connected with Bethel's worship services, conferences, crusades, youth events, prayer gatherings, special services, and community outreach."
        image={church.assets.eventHero}
        primaryCTA={{ text: "Open 2026 Calendar", link: "/events#calendar-2026" }}
        secondaryCTA={{ text: "Contact Us", link: "/contact" }}
      />

      <section className="section-shell bg-white">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="eyebrow">Weekly rhythm</p>
              <h2 className="display-heading">There is always a way to gather.</h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-muted-foreground lg:justify-self-end">
              Our regular services and ministry meetings form the foundation of life together at Bethel.
            </p>
          </div>
          <div className="border-t border-foreground/20">
            {weeklyGatherings.map((event, index) => (
              <div
                key={`${event.day}-${event.name}`}
                className="grid gap-4 border-b border-foreground/20 py-6 md:grid-cols-[4rem_9rem_1fr_8rem] md:items-center"
              >
                <span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-xs font-bold uppercase text-accent">{event.day}</p>
                <div>
                  <h3 className="text-2xl uppercase">{event.name}</h3>
                  {event.note && <p className="mt-1 text-xs text-muted-foreground">{event.note}</p>}
                </div>
                <p className="flex items-center gap-2 font-semibold">
                  <Clock className="h-4 w-4 text-primary" />
                  {event.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calendar-2026" className="section-shell section-dark section-rounded-top scroll-mt-28">
        <div className="section-inner">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow !text-[var(--sun)]">2026 calendar</p>
              <h2 className="max-w-3xl uppercase text-white">Click any month to open the full activity calendar.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-white/60 lg:justify-self-end">
              Each month opens in a lightbox with day-by-day activity blocks, birthdays, anniversaries, other activities, and regular ministry notes from the calendar of activities.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {calendar2026Months.map((item, index) => (
              <button
                key={item.month}
                type="button"
                onClick={() => openMonth(index)}
                className="group min-h-56 rounded-md p-6 text-left text-[var(--ink)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sun)]"
                style={{ backgroundColor: calendarColors[index % calendarColors.length] }}
              >
                <span className="mb-12 flex items-center justify-between text-xs font-bold uppercase">
                  {String(index + 1).padStart(2, "0")}
                  <CalendarDays className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </span>
                <h3 className="mb-2 text-3xl uppercase">{item.month}</h3>
                <p className="text-sm font-semibold">{item.focus}</p>
                <p className="mt-6 text-xs font-bold uppercase text-[var(--ink)]/65">
                  {item.events.length + item.regular.length} calendar entries
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="section-inner flex flex-col justify-between gap-8 border-t border-foreground/20 pt-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Stay updated</p>
            <h2 className="max-w-3xl uppercase">Follow Bethel for current event details.</h2>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {church.address}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="default" size="lg">
              <a href={church.facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      {selectedMonth && (
        <div
          className="fixed inset-0 z-[80] overflow-y-auto bg-black/82 px-3 py-5 text-[var(--ink)] backdrop-blur-sm md:px-6 md:py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedMonth.month} 2026 activity calendar`}
        >
          <div className="mx-auto max-w-7xl rounded-md bg-[var(--paper)] shadow-elegant">
            <header className="grid gap-5 border-b border-foreground/15 p-4 md:grid-cols-[auto_1fr_auto] md:items-center md:p-6">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPreviousMonth}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-white transition-colors hover:bg-[var(--ink)] hover:text-white"
                  aria-label="Previous month"
                  title="Previous month"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={showNextMonth}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-white transition-colors hover:bg-[var(--ink)] hover:text-white"
                  aria-label="Next month"
                  title="Next month"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="min-w-0">
                <p className="text-xs font-bold uppercase text-accent">Calendar of Activities 2026</p>
                <h2 className="text-5xl uppercase md:text-6xl">{selectedMonth.month}</h2>
                <p className="mt-1 text-sm font-semibold uppercase text-muted-foreground">{selectedMonth.focus}</p>
              </div>

              <button
                type="button"
                onClick={closeMonth}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-white transition-colors hover:bg-[var(--ink)] hover:text-white md:justify-self-end"
                aria-label="Close calendar"
                title="Close calendar"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="grid gap-6 p-4 lg:grid-cols-[1fr_22rem] lg:p-6">
              <section>
                <div className="mb-4 flex flex-wrap gap-2">
                  {(["activity", "birthday", "anniversary", "other"] as CalendarEventCategory[]).map((category) => (
                    <span key={category} className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase ${categoryStyles[category]}`}>
                      {categoryLabels[category]}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {weekdays.map((day) => (
                    <div key={day} className="rounded-md bg-[var(--ink)] px-2 py-2 text-center text-[10px] font-bold uppercase text-white">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: firstWeekday(selectedMonth.monthIndex) }, (_, index) => (
                    <div key={`blank-${index}`} className="min-h-28 rounded-md border border-dashed border-foreground/10 bg-white/35 sm:min-h-36" />
                  ))}
                  {monthDays.map((day) => {
                    const eventsForDay = datedMonthEvents.filter((event) => eventOccursOnDay(event, day));

                    return (
                      <div key={day} className="min-h-28 rounded-md border border-foreground/15 bg-white p-2 sm:min-h-36">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="font-heading text-xl font-bold">{day}</span>
                          {eventsForDay.length > 0 && (
                            <span className="rounded-full bg-[var(--mist)] px-2 py-0.5 text-[10px] font-bold">{eventsForDay.length}</span>
                          )}
                        </div>
                        <div className="grid max-h-24 gap-1 overflow-y-auto pr-1 sm:max-h-28">
                          {eventsForDay.map((event) => (
                            <button
                              key={`${event.id}-${day}`}
                              type="button"
                              onClick={() => setSelectedEvent(event)}
                              className={`w-full truncate rounded px-2 py-1 text-left text-[10px] font-bold uppercase leading-tight ${categoryStyles[event.category]}`}
                              title={event.title}
                            >
                              {event.time && event.time !== "-" ? `${event.time} ` : ""}
                              {event.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <aside className="grid content-start gap-4">
                {selectedEvent ? (
                  <article className="rounded-md bg-[var(--ink)] p-5 text-white shadow-elegant">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase ${categoryStyles[selectedEvent.category]}`}>
                        {categoryLabels[selectedEvent.category]}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedEvent(null)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-[var(--ink)]"
                        aria-label="Close event details"
                        title="Close event details"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <h3 className="mb-5 text-3xl uppercase text-white">{selectedEvent.title}</h3>
                    <dl className="grid gap-3 text-sm">
                      <div>
                        <dt className="text-xs font-bold uppercase text-white/50">Date</dt>
                        <dd>{selectedEvent.dateLabel}</dd>
                      </div>
                      {selectedEvent.time && (
                        <div>
                          <dt className="text-xs font-bold uppercase text-white/50">Time</dt>
                          <dd>{selectedEvent.time}</dd>
                        </div>
                      )}
                      {selectedEvent.responsibility && (
                        <div>
                          <dt className="text-xs font-bold uppercase text-white/50">Responsibility</dt>
                          <dd>{selectedEvent.responsibility}</dd>
                        </div>
                      )}
                      {selectedEvent.remarks && (
                        <div>
                          <dt className="text-xs font-bold uppercase text-white/50">Remarks</dt>
                          <dd>{selectedEvent.remarks}</dd>
                        </div>
                      )}
                      {selectedEvent.details && (
                        <div>
                          <dt className="text-xs font-bold uppercase text-white/50">Details</dt>
                          <dd>{selectedEvent.details}</dd>
                        </div>
                      )}
                    </dl>
                  </article>
                ) : (
                  <div className="rounded-md border border-foreground/15 bg-white p-5">
                    <p className="eyebrow mb-3">Event details</p>
                    <h3 className="text-2xl uppercase">Select any event on the calendar.</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Details will open here with the date, time, responsibility, remarks, and notes from the activity calendar.
                    </p>
                  </div>
                )}

                <section className="rounded-md border border-foreground/15 bg-white p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-2xl uppercase">Month list</h3>
                    <span className="text-xs font-bold uppercase text-muted-foreground">{selectedMonth.events.length} items</span>
                  </div>
                  <div className="grid max-h-80 gap-2 overflow-y-auto pr-1">
                    {sortedMonthEvents.map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => setSelectedEvent(event)}
                        className="rounded-md border border-foreground/10 p-3 text-left transition-colors hover:border-accent hover:bg-[var(--mist)]"
                      >
                        <span className="mb-1 block text-[10px] font-bold uppercase text-accent">{event.dateLabel}</span>
                        <span className="block text-sm font-bold uppercase">{event.title}</span>
                        {event.time && <span className="mt-1 block text-xs text-muted-foreground">{event.time}</span>}
                      </button>
                    ))}
                    {undatedMonthEvents.length > 0 && (
                      <p className="rounded-md bg-[var(--mist)] p-3 text-xs font-semibold text-muted-foreground">
                        Some items in this month did not include a specific date in the source calendar, so they appear in this list only.
                      </p>
                    )}
                  </div>
                </section>

                {selectedMonth.regular.length > 0 && (
                  <section className="rounded-md border border-foreground/15 bg-white p-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h3 className="text-2xl uppercase">Regular</h3>
                      <span className="text-xs font-bold uppercase text-muted-foreground">{selectedMonth.regular.length} notes</span>
                    </div>
                    <div className="grid max-h-72 gap-2 overflow-y-auto pr-1">
                      {selectedMonth.regular.map((event) => (
                        <button
                          key={event.id}
                          type="button"
                          onClick={() => setSelectedEvent(event)}
                          className="rounded-md border border-foreground/10 p-3 text-left transition-colors hover:border-accent hover:bg-[var(--mist)]"
                        >
                          <span className="mb-1 block text-[10px] font-bold uppercase text-accent">{event.dateLabel}</span>
                          <span className="block text-sm font-bold uppercase">{event.title}</span>
                          {event.time && <span className="mt-1 block text-xs text-muted-foreground">{event.time}</span>}
                        </button>
                      ))}
                    </div>
                  </section>
                )}
              </aside>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Events;
