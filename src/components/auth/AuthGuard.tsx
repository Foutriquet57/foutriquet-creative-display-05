
import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is authenticated
    const user = localStorage.getItem("portfolio_user");
    if (user) {
      setIsAuthenticated(true);
    } else {
      // If not authenticated and trying to access protected routes, redirect to login
      if (location.pathname.startsWith("/admin")) {
        toast({
          title: "Accès refusé",
          description: "Vous devez être connecté pour accéder à cette page",
          variant: "destructive",
        });
        navigate("/login");
      }
    }
    setIsLoading(false);
  }, [location.pathname, navigate, toast]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Chargement...</div>
      </div>
    );
  }

  if (!isAuthenticated && location.pathname.startsWith("/admin")) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
