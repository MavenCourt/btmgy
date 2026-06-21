import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { HeartHandshake, Lock, Send, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { church } from "@/data/church";
import { openMailDraft } from "@/lib/mailto";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  type: "Prayer Request",
  message: "",
  shareWithTeam: false,
};

const PrayerRequest = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialForm);

  const updateField = (field: keyof typeof initialForm, value: string | boolean) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Missing information",
        description: "Please include your name and request.",
        variant: "destructive",
      });
      return;
    }

    openMailDraft({
      to: church.prayerEmail,
      subject: `Website ${formData.type}: ${formData.name}`,
      body: [
        `Type: ${formData.type}`,
        `Name: ${formData.name}`,
        `Email: ${formData.email || "Not provided"}`,
        `Phone / WhatsApp: ${formData.phone || "Not provided"}`,
        `Can share with prayer team: ${formData.shareWithTeam ? "Yes" : "No"}`,
        "",
        formData.message,
      ].join("\n"),
    });

    toast({
      title: "Prayer email draft opened",
      description: "Your email app should open with the request ready to send.",
    });
    setFormData(initialForm);
  };

  return (
    <main className="min-h-screen">
      <Hero
        title="Prayer Request"
        subtitle="We Are Here to Pray With You"
        description="Submit a prayer request, testimony, praise report, or counseling request and it will be directed to church leadership."
        image={church.assets.heroWorship}
        primaryCTA={{ text: "Send Request", link: "/prayer#form" }}
        secondaryCTA={{ text: "Contact Us", link: "/contact" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="p-7 border-2 shadow-card">
                <HeartHandshake className="h-9 w-9 text-primary mb-4" />
                <h2 className="mb-4">Prayer, Testimony, and Praise</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Share what you need prayer for, how God has answered prayer, or a praise report that encourages the church family.
                </p>
              </Card>

              <Card className="p-7 border-2 shadow-card">
                <Lock className="h-9 w-9 text-primary mb-4" />
                <h2 className="mb-4">Care and Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Requests should be handled with pastoral care. For urgent matters, call or WhatsApp the church directly.
                </p>
              </Card>
            </div>

            <Card id="form" className="form-panel">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-7 w-7 text-primary" />
                <h2>Submit Your Request</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      placeholder="Your full name"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(event) => updateField("type", event.target.value)}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option>Prayer Request</option>
                      <option>Testimony</option>
                      <option>Praise Report</option>
                      <option>Counseling Request</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="you@example.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      placeholder="Your contact number"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Request / Report *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="Share your request or testimony."
                    rows={7}
                    className="mt-2"
                    required
                  />
                </div>

                <label className="flex gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={formData.shareWithTeam}
                    onChange={(event) => updateField("shareWithTeam", event.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                  This may be shared with the prayer team for intercession.
                </label>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Send Prayer Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 gradient-primary text-primary-foreground shadow-elegant max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-primary-foreground">Need to Speak With Someone?</h2>
            <p className="text-lg mb-8 opacity-90">
              You can also call, WhatsApp, or email the church office for prayer and pastoral care.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Contact the Church</Link>
            </Button>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default PrayerRequest;
