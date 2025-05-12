
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Plus, Upload, LogOut, Image, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import MediaGrid, { MediaItem } from "@/components/MediaGrid";

const AdminPage = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication
    const user = localStorage.getItem("portfolio_user");
    if (!user) {
      navigate("/login");
      return;
    }

    // This would normally be an API call to fetch all media
    // For now, we'll use mock data
    const mockMedia: MediaItem[] = [
      // Court métrages
      {
        id: "cm1",
        title: "Le Silence de l'Aube",
        type: "video",
        thumbnail: "/placeholder.svg",
        url: "#",
        category: "court-metrage"
      },
      {
        id: "cm2",
        title: "Ombres et Lumières",
        type: "video",
        thumbnail: "/placeholder.svg",
        url: "#",
        category: "court-metrage"
      },
      // Photos
      {
        id: "p1",
        title: "Portrait au Crépuscule",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "photo",
        subcategory: "Portrait"
      },
      {
        id: "p2",
        title: "Amis au Café",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "photo",
        subcategory: "Groupe"
      },
      // Publicités
      {
        id: "ad1",
        title: "Campagne Parfum Élégance",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "publicite"
      },
      {
        id: "ad2",
        title: "Spot Montres Luxe",
        type: "video",
        thumbnail: "/placeholder.svg",
        url: "#",
        category: "publicite"
      }
    ];

    setMedia(mockMedia);
    setIsLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("portfolio_user");
    toast({
      title: "Déconnexion réussie",
    });
    navigate("/");
  };

  const filterMediaByCategory = (category: string): MediaItem[] => {
    return media.filter(item => item.category === category);
  };

  return (
    <div className="portfolio-container py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Administration</h1>
          <p className="text-lavender mt-1">Gérez votre contenu</p>
        </div>
        
        <div className="flex gap-3">
          <Button className="bg-burgundy hover:bg-burgundy-light text-white">
            <Plus size={18} className="mr-2" />
            Ajouter un média
          </Button>
          
          <Button variant="outline" className="text-lavender hover:text-white" onClick={handleLogout}>
            <LogOut size={18} className="mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>
      
      <div className="bg-navy-light rounded-lg p-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="court-metrage">Court Métrage</TabsTrigger>
            <TabsTrigger value="photo">Photo</TabsTrigger>
            <TabsTrigger value="publicite">Publicité</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <h2 className="text-xl font-medium text-white mb-4">Tous les médias</h2>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-lavender">Chargement des médias...</p>
              </div>
            ) : (
              <MediaGrid items={media} />
            )}
          </TabsContent>
          
          <TabsContent value="court-metrage">
            <h2 className="text-xl font-medium text-white mb-4">Court Métrage</h2>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-lavender">Chargement des médias...</p>
              </div>
            ) : (
              <MediaGrid items={filterMediaByCategory("court-metrage")} />
            )}
          </TabsContent>
          
          <TabsContent value="photo">
            <h2 className="text-xl font-medium text-white mb-4">Photo</h2>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-lavender">Chargement des médias...</p>
              </div>
            ) : (
              <MediaGrid items={filterMediaByCategory("photo")} />
            )}
          </TabsContent>
          
          <TabsContent value="publicite">
            <h2 className="text-xl font-medium text-white mb-4">Publicité</h2>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-lavender">Chargement des médias...</p>
              </div>
            ) : (
              <MediaGrid items={filterMediaByCategory("publicite")} />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
