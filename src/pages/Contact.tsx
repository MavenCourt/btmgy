import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
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
  topic: "",
  message: "",
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Missing information",
        description: "Please include your name and message.",
        variant: "destructive",
      });
      return;
    }

    openMailDraft({
      to: church.email,
      subject: `Website contact: ${formData.topic || "General inquiry"}`,
      body: [
        `Name: ${formData.name}`,
        `Email: ${formData.email || "Not provided"}`,
        `Phone / WhatsApp: ${formData.phone || "Not provided"}`,
        `Topic: ${formData.topic || "General inquiry"}`,
        "",
        formData.message,
      ].join("\n"),
    });

    toast({
      title: "Email draft opened",
      description: "Your email app should open with this message ready to send.",
    });
    setFormData(initialForm);
  };

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Address",
      details: church.addressLines,
    },
    {
      icon: Phone,
      title: "Phone",
      details: church.phoneNumbers,
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: [church.whatsapp],
    },
    {
      icon: Mail,
      title: "Email",
      details: [church.email],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Hero
        title="Contact Us"
        subtitle="We Would Love to Hear From You"
        description="Reach out for prayer, visits, ministry questions, event information, or general church contact."
        image={church.assets.churchExterior}
        primaryCTA={{ text: "Prayer Request", link: "/prayer" }}
        secondaryCTA={{ text: "Plan Your Visit", link: "/visit" }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth border-2">
                  <div className="mb-4 flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg mb-3">{card.title}</h3>
                  {card.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm break-words">
                      {detail}
                    </p>
                  ))}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 shadow-elegant border-2">
              <h2 className="mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  <Label htmlFor="topic">Topic</Label>
                  <Input
                    id="topic"
                    value={formData.topic}
                    onChange={(event) => updateField("topic", event.target.value)}
                    placeholder="Visit, ministry, event, giving, administration"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="How can we help?"
                    rows={6}
                    className="mt-2"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 shadow-card border-2">
                <h3 className="text-xl mb-4">Find Us</h3>
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
                <p className="mt-4 text-sm text-muted-foreground">{church.address}</p>
              </Card>

              <Card className="p-6 gradient-primary text-primary-foreground shadow-elegant">
                <h3 className="text-xl mb-4 text-primary-foreground">Quick Links</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Button asChild variant="accent">
                    <Link to="/visit">Plan a Visit</Link>
                  </Button>
                  <Button asChild variant="outline" className="bg-primary-foreground/95 hover:bg-primary-foreground text-foreground border-primary-foreground">
                    <Link to="/prayer">Prayer Request</Link>
                  </Button>
                  <Button asChild variant="outline" className="bg-primary-foreground/95 hover:bg-primary-foreground text-foreground border-primary-foreground">
                    <a href={`mailto:${church.email}`}>Email Office</a>
                  </Button>
                  <Button asChild variant="outline" className="bg-primary-foreground/95 hover:bg-primary-foreground text-foreground border-primary-foreground">
                    <a href={church.facebookUrl} target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
