import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Baby, Clock, HeartHandshake, MapPin, Music, Send, Users } from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { church } from "@/data/church";
import { openMailDraft } from "@/lib/mailto";

const initialVisitor = {
  name: "",
  email: "",
  phone: "",
  visitDate: "",
  prayerNeed: "",
};

const expectations = [
  {
    icon: Music,
    title: "Worship",
    description: "Join the church family in worship, praise, prayer, and ministry of the Word.",
  },
  {
    icon: Users,
    title: "Welcome",
    description: "You can expect a warm church family and leaders who are ready to help you connect.",
  },
  {
    icon: Baby,
    title: "Children",
    description: "Sunday School helps children grow through Bible lessons, activities, and prayer.",
  },
  {
    icon: HeartHandshake,
    title: "Prayer",
    description: "Prayer and pastoral care are available through leadership and the prayer ministry.",
  },
];

const Visit = () => {
  const { toast } = useToast();
  const [visitor, setVisitor] = useState(initialVisitor);

  const updateField = (field: keyof typeof initialVisitor, value: string) => {
    setVisitor((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!visitor.name.trim() || (!visitor.email.trim() && !visitor.phone.trim())) {
      toast({
        title: "Missing contact details",
        description: "Please include your name and at least one way to contact you.",
        variant: "destructive",
      });
      return;
    }

    openMailDraft({
      to: church.email,
      subject: `Visitor Connect: ${visitor.name}`,
      body: [
        `Name: ${visitor.name}`,
        `Email: ${visitor.email || "Not provided"}`,
        `Phone / WhatsApp: ${visitor.phone || "Not provided"}`,
        `Planned visit date: ${visitor.visitDate || "Not provided"}`,
        "",
        `Prayer needs / notes:\n${visitor.prayerNeed || "None shared"}`,
      ].join("\n"),
    });

    toast({
      title: "Visitor email draft opened",
      description: "Your email app should open with the visitor details ready to send.",
    });
    setVisitor(initialVisitor);
  };

  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="Plan Your Visit"
        subtitle="You Are Welcome Here"
        description="Whether you are new to church, visiting Georgetown, or looking for a church home, we would be glad to welcome you at Bethel."
        image={church.assets.churchExterior}
        primaryCTA={{ text: "Visitor Connect", link: "/visit#connect" }}
        secondaryCTA={{ text: "Service Times", link: "/services" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 shadow-elegant border-2">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-7 w-7 text-primary" />
                <h2 className="text-3xl md:text-4xl">When We Meet</h2>
              </div>
              <div className="space-y-4">
                <div className="pb-4 border-b border-border">
                  <div className="font-semibold text-lg mb-1">Sunday</div>
                  <div className="text-muted-foreground">Worship Service: 11:00 AM</div>
                  <div className="text-muted-foreground">Sunday School: 3:00 PM</div>
                </div>
                <div className="pb-4 border-b border-border">
                  <div className="font-semibold text-lg mb-1">Wednesday</div>
                  <div className="text-muted-foreground">Noon-Day Prayer: 12:00 PM</div>
                  <div className="text-muted-foreground">Prayer & Intercession: 6:00 PM</div>
                </div>
                <div>
                  <div className="font-semibold text-lg mb-1">Friday and Saturday</div>
                  <div className="text-muted-foreground">Bible Study: Friday 7:00 PM</div>
                  <div className="text-muted-foreground">Youth Ministry: Saturday 4:00 PM</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-elegant border-2">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-7 w-7 text-primary" />
                <h2 className="text-3xl md:text-4xl">Where We Are</h2>
              </div>
              <p className="text-muted-foreground mb-4">{church.address}</p>
              <p className="text-muted-foreground mb-1">Phone: {church.phoneNumbers.join(" / ")}</p>
              <p className="text-muted-foreground mb-6">WhatsApp: {church.whatsapp}</p>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src={church.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bethel Tabernacle Ministries location map"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              First Time?
            </div>
            <h2 className="mb-4">What to Expect</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bethel is a worshiping, praying, Bible-centered church family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {expectations.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth border-2">
                  <div className="mb-4 flex justify-center">
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="connect" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Visitor Connect
              </div>
              <h2 className="mb-5">Let Us Know You Are Coming</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Share your contact details and any prayer needs so the church can follow up with you.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">General Contact</Link>
              </Button>
            </div>

            <Card className="p-8 border-2 shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="visitor-name">Name *</Label>
                  <Input
                    id="visitor-name"
                    value={visitor.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Your full name"
                    className="mt-2"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="visitor-email">Email</Label>
                    <Input
                      id="visitor-email"
                      type="email"
                      value={visitor.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="you@example.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="visitor-phone">Phone / WhatsApp</Label>
                    <Input
                      id="visitor-phone"
                      value={visitor.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      placeholder="Your contact number"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="visit-date">Planned Visit Date</Label>
                  <Input
                    id="visit-date"
                    value={visitor.visitDate}
                    onChange={(event) => updateField("visitDate", event.target.value)}
                    placeholder="Sunday, date, or unsure"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="visitor-prayer">Prayer Needs / Notes</Label>
                  <Textarea
                    id="visitor-prayer"
                    value={visitor.prayerNeed}
                    onChange={(event) => updateField("prayerNeed", event.target.value)}
                    placeholder="Share anything you would like us to know."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Send Visitor Connect
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;
