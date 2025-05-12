
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple authentication (in a real app, this would be a backend call)
    if (username === "Foutriquet" && password === "TEST4S") {
      // Success - store authentication in localStorage
      localStorage.setItem("portfolio_user", JSON.stringify({ username }));
      
      toast({
        title: "Connexion réussie",
        description: "Bienvenue dans l'interface d'administration",
      });
      
      // Redirect to admin dashboard
      navigate("/admin");
    } else {
      // Failed login
      toast({
        title: "Échec de la connexion",
        description: "Nom d'utilisateur ou mot de passe incorrect",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-navy-light rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white text-center mb-6">Administration</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">Nom d'utilisateur</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-navy border-navy-light text-white placeholder:text-lavender"
              placeholder="Entrez votre nom d'utilisateur"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-navy border-navy-light text-white placeholder:text-lavender"
              placeholder="Entrez votre mot de passe"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-burgundy hover:bg-burgundy-light text-white"
            disabled={isLoading}
          >
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
