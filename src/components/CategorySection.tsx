
import { Link } from "react-router-dom";

interface CategoryProps {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
}

const CategorySection = () => {
  const categories: CategoryProps[] = [
    {
      title: "Court Métrage",
      slug: "/court-metrage",
      imageUrl: "/placeholder.svg",
      description: "Des histoires cinématographiques courtes et captivantes."
    },
    {
      title: "Photo",
      slug: "/photo",
      imageUrl: "/placeholder.svg",
      description: "Portraits, groupes, et autres captures visuelles saisissantes."
    },
    {
      title: "Publicité",
      slug: "/publicite",
      imageUrl: "/placeholder.svg",
      description: "Créations publicitaires impactantes et originales."
    }
  ];

  return (
    <section className="py-16">
      <div className="portfolio-container">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Catégories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.slug}
              to={category.slug}
              className="group"
            >
              <div className="bg-navy-light rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-burgundy/20">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={category.imageUrl} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-lavender mb-4">{category.description}</p>
                  <div className="text-burgundy font-medium group-hover:text-burgundy-light transition-colors">
                    Découvrir →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
