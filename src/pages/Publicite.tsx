
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import MediaGrid, { MediaItem } from "@/components/MediaGrid";

const PublicitePage = () => {
  const [ads, setAds] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // This would normally be an API call to fetch ads
    // For now, we'll use mock data
    const mockAds: MediaItem[] = [
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
      },
      {
        id: "ad3",
        title: "Collection Mode Printemps",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "publicite"
      },
      {
        id: "ad4",
        title: "Promotion Restaurant Gastronomique",
        type: "video",
        thumbnail: "/placeholder.svg",
        url: "#",
        category: "publicite"
      },
      {
        id: "ad5",
        title: "Affiche Festival de Musique",
        type: "image",
        thumbnail: "/placeholder.svg",
        url: "/placeholder.svg",
        category: "publicite"
      }
    ];

    setAds(mockAds);
    setIsLoading(false);
  }, []);

  return (
    <>
      <HeroSection
        title="Publicité"
        subtitle="Créations publicitaires impactantes"
        backgroundImage="/placeholder.svg"
      />
      
      <div className="portfolio-container py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lavender text-lg">
            Des créations visuelles percutantes conçues pour captiver, 
            influencer et laisser une impression durable auprès des audiences.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-lavender">Chargement des publicités...</p>
          </div>
        ) : (
          <MediaGrid items={ads} category="publicite" />
        )}
      </div>
    </>
  );
};

export default PublicitePage;
