
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-burgundy mb-6">404</h1>
        <p className="text-xl md:text-2xl text-white mb-8">Cette page n'existe pas</p>
        <p className="text-lavender mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/">
          <Button className="bg-burgundy hover:bg-burgundy-light text-white">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
