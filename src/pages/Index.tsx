
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import MediaGrid, { MediaItem } from "@/components/MediaGrid";

const IndexPage = () => {
  // Example featured items - this would normally come from a database
  const featuredItems: MediaItem[] = [
    {
      id: "1",
      title: "La Beauté de l'Aube",
      type: "image",
      thumbnail: "/placeholder.svg",
      url: "/placeholder.svg",
      category: "photo",
      subcategory: "Portrait"
    },
    {
      id: "2",
      title: "Horizons Urbains",
      type: "video",
      thumbnail: "/placeholder.svg",
      url: "#",
      category: "court-metrage"
    },
    {
      id: "3",
      title: "Campagne Hiver 2024",
      type: "image",
      thumbnail: "/placeholder.svg",
      url: "/placeholder.svg",
      category: "publicite"
    },
    {
      id: "4",
      title: "Souvenirs d'Été",
      type: "image",
      thumbnail: "/placeholder.svg",
      url: "/placeholder.svg",
      category: "photo",
      subcategory: "Group"
    },
    {
      id: "5",
      title: "L'Inconnu",
      type: "video",
      thumbnail: "/placeholder.svg",
      url: "#",
      category: "court-metrage"
    },
    {
      id: "6",
      title: "Série Nature",
      type: "image",
      thumbnail: "/placeholder.svg", 
      url: "/placeholder.svg",
      category: "photo",
      subcategory: "Landscape"
    }
  ];

  return (
    <>
      <HeroSection
        title="Foutriquet"
        subtitle="Photographie & Cinématographie"
        buttonText="Découvrir le Portfolio"
        buttonLink="/photo"
      />
      
      <div className="portfolio-container py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transformez vos histoires en images</h2>
          <p className="text-lavender text-lg">
            Photographe et cinéaste spécialisé dans la capture de moments authentiques et la création d'histoires visuelles captivantes.
          </p>
        </div>

        <CategorySection />
        
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Œuvres en Vedette</h2>
          <MediaGrid items={featuredItems} />
        </section>
      </div>
    </>
  );
};

export default IndexPage;
