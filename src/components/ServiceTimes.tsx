import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { church, serviceGroups } from "@/data/church";

const ServiceTimes = () => {
  return (
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
            Join Us
          </div>
          <h2 className="mb-4">Service Times & Weekly Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Worship, prayer, Bible study, and ministry gatherings throughout the week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
          {serviceGroups.map((group) => (
            <Card key={group.day} className="p-5 shadow-card hover:shadow-elegant transition-smooth border-2">
              <div className="flex items-center space-x-2 mb-4">
                <CalendarDays className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">{group.day}</h3>
              </div>
              <div className="space-y-3">
                {group.services.map((service) => (
                  <div key={`${group.day}-${service.name}`} className="pb-3 border-b border-border last:border-0 last:pb-0">
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm">{service.name}</div>
                        <div className="text-sm text-muted-foreground">{service.time}</div>
                        {service.note && <div className="text-xs text-muted-foreground mt-1">{service.note}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 max-w-4xl mx-auto">
          <Card className="p-6 border-2 shadow-card">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold">Location</h3>
                  <p className="text-muted-foreground">{church.address}</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                <div>Phone: {church.phoneNumbers.join(" / ")}</div>
                <div>WhatsApp: {church.whatsapp}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
