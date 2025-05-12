
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
}: HeroSectionProps) => {
  return (
    <div 
      className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
      
      {/* Content */}
      <div className="portfolio-container relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-lavender max-w-2xl mx-auto mb-6">{subtitle}</p>
        )}
        {buttonText && buttonLink && (
          <Link to={buttonLink}>
            <Button className="bg-burgundy hover:bg-burgundy-light text-white border-none">
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
