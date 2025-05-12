
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import MediaGrid, { MediaItem } from "@/components/MediaGrid";
import SubcategoryFilter from "@/components/SubcategoryFilter";

const PhotoPage = () => {
  const [photos, setPhotos] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  
  const subcategories = ["Portrait", "Groupe", "Paysage", "Architecture", "Mode"];

  useEffect(() => {
    // This would normally be an API call to fetch photos
    // For now, we'll use mock data
    const mockPhotos: MediaItem[] = [
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
      {
        id: "p3",
        title: "Montagnes Brumeuses",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "photo",
        subcategory: "Paysage"
      },
      {
        id: "p4",
        title: "Rêverie Urbaine",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "photo",
        subcategory: "Architecture"
      },
      {
        id: "p5",
        title: "La Mystérieuse",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "photo",
        subcategory: "Portrait"
      },
      {
        id: "p6",
        title: "Collection Automne",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "photo",
        subcategory: "Mode"
      },
      {
        id: "p7",
        title: "Réunion de Famille",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "photo",
        subcategory: "Groupe"
      },
      {
        id: "p8",
        title: "Solitude",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "photo",
        subcategory: "Portrait"
      }
    ];

    setPhotos(mockPhotos);
    setIsLoading(false);
  }, []);

  // Filter photos based on active subcategory
  const filteredPhotos = activeSubcategory
    ? photos.filter((photo) => photo.subcategory === activeSubcategory)
    : photos;

  return (
    <>
      <HeroSection
        title="Photographie"
        subtitle="Capturer l'essence des moments"
        backgroundImage="/placeholder.svg"
      />
      
      <div className="portfolio-container py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lavender text-lg">
            Exploration visuelle à travers différents styles et thèmes, 
            mettant en valeur portraits, groupes, paysages et bien plus.
          </p>
        </div>

        <SubcategoryFilter 
          subcategories={subcategories}
          activeSubcategory={activeSubcategory}
          onSelect={setActiveSubcategory}
        />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-lavender">Chargement des photos...</p>
          </div>
        ) : (
          <MediaGrid items={filteredPhotos} category="photo" subcategory={activeSubcategory || undefined} />
        )}
      </div>
    </>
  );
};

export default PhotoPage;
