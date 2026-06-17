import { Link } from "react-router-dom";
import { CalendarCheck, HeartHandshake, MessageCircle, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: CalendarCheck,
    title: "Plan Your Visit",
    description: "Service times, location, and visitor connection",
    link: "/visit",
    color: "text-primary",
  },
  {
    icon: Video,
    title: "Watch Online",
    description: "Facebook Live, sermons, and Bible studies",
    link: "/sermons",
    color: "text-accent",
  },
  {
    icon: HeartHandshake,
    title: "Prayer Request",
    description: "Share prayer needs, testimonies, or praise reports",
    link: "/prayer",
    color: "text-primary",
  },
  {
    icon: MessageCircle,
    title: "Contact Us",
    description: "Call, WhatsApp, email, or send a message",
    link: "/contact",
    color: "text-accent",
  },
];

const QuickActions = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <Link key={action.title} to={action.link}>
                <Card className="p-6 text-center hover:shadow-elegant transition-smooth cursor-pointer group border-2 h-full">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:scale-105 transition-smooth">
                      <Icon className={`h-8 w-8 ${action.color}`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                  <Button variant="ghost" size="sm" className="w-full">
                    Open
                  </Button>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
