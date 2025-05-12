
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import MediaGrid, { MediaItem } from "@/components/MediaGrid";

const CourtMetragePage = () => {
  const [videos, setVideos] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // This would normally be an API call to fetch videos
    // For now, we'll use mock data
    const mockVideos: MediaItem[] = [
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
      {
        id: "cm3",
        title: "L'Inconnu du Lac",
        type: "video",
        thumbnail: "/placeholder.svg",
        url: "#",
        category: "court-metrage"
      },
      {
        id: "cm4",
        title: "Derniers Jours d'Été",
        type: "video",
        thumbnail: "/placeholder.svg",
        url: "#",
        category: "court-metrage"
      }
    ];

    setVideos(mockVideos);
    setIsLoading(false);
  }, []);

  return (
    <>
      <HeroSection
        title="Court Métrage"
        subtitle="Histoires cinématographiques courtes et captivantes"
        backgroundImage="/placeholder.svg"
      />
      
      <div className="portfolio-container py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lavender text-lg">
            Des récits visuels qui explorent la condition humaine, les émotions et les relations interpersonnelles
            à travers une cinématographie soignée et des narrations originales.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-lavender">Chargement des vidéos...</p>
          </div>
        ) : (
          <MediaGrid items={videos} category="court-metrage" />
        )}
      </div>
    </>
  );
};

export default CourtMetragePage;
