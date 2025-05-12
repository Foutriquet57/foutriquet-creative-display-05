
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { MediaItem } from "@/components/MediaGrid";
import { Button } from "@/components/ui/button";

const MediaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [media, setMedia] = useState<MediaItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is admin
    const user = localStorage.getItem("portfolio_user");
    if (user) {
      setIsAdmin(true);
    }

    // This would normally be an API call to fetch the specific media
    // For now, we'll use mock data and find the right item
    const mockMediaItems: MediaItem[] = [
      // Court métrages
      {
        id: "cm1",
        title: "Le Silence de l'Aube",
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
      // Publicités
      {
        id: "ad1",
        title: "Campagne Parfum Élégance",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "publicite"
      },
      // Add more to match the IDs used in other mock data
    ];

    const foundMedia = mockMediaItems.find(item => item.id === id);
    if (foundMedia) {
      setMedia(foundMedia);
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="portfolio-container py-16">
        <div className="flex justify-center items-center h-64">
          <p className="text-lavender">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!media) {
    return (
      <div className="portfolio-container py-16">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Média non trouvé</h2>
          <p className="text-lavender mb-6">Le média que vous recherchez n'existe pas.</p>
          <Link to="/">
            <Button variant="outline">Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryPath = (category: string): string => {
    switch (category) {
      case "court-metrage":
        return "/court-metrage";
      case "photo":
        return "/photo";
      case "publicite":
        return "/publicite";
      default:
        return "/";
    }
  };

  return (
    <div className="portfolio-container py-16">
      <div className="mb-8">
        <Link to={getCategoryPath(media.category)} className="inline-flex items-center text-lavender hover:text-white">
          <ArrowLeft size={16} className="mr-2" />
          Retour à {media.category === "court-metrage" ? "Court Métrage" : media.category === "photo" ? "Photo" : "Publicité"}
        </Link>
      </div>

      <div className="bg-navy-light rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{media.title}</h1>
          {media.subcategory && (
            <p className="text-lavender mb-6">{media.subcategory}</p>
          )}
        </div>

        <div className="aspect-video w-full bg-navy">
          {media.type === "image" ? (
            <img 
              src={media.url} 
              alt={media.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-lavender">
                [Vidéo: {media.title}]
                <p className="text-sm mt-2">Le lecteur vidéo serait intégré ici</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-navy px-3 py-1 rounded-full text-xs text-lavender">
              {media.category === "court-metrage" ? "Court Métrage" : media.category === "photo" ? "Photo" : "Publicité"}
            </span>
            {media.subcategory && (
              <span className="bg-navy px-3 py-1 rounded-full text-xs text-lavender">
                {media.subcategory}
              </span>
            )}
          </div>

          <div className="text-lavender">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
              nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          {isAdmin && (
            <div className="mt-8 pt-6 border-t border-navy">
              <div className="flex gap-3">
                <Button variant="outline" className="border-burgundy text-white hover:bg-burgundy hover:text-white">
                  Modifier
                </Button>
                <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-white">
                  Supprimer
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaDetail;
