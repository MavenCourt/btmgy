import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { church } from "@/data/church";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-32 pb-16 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <img src={church.assets.logo} alt={church.name} className="h-20 w-20 object-contain mx-auto mb-6" />
          <h1 className="mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you requested is not available.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
