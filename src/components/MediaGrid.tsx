
import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface MediaItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  thumbnail: string;
  url: string;
  category: string;
  subcategory?: string;
}

interface MediaGridProps {
  items: MediaItem[];
  category?: string;
  subcategory?: string;
}

const MediaGrid = ({ items, category, subcategory }: MediaGridProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Filter items based on category and subcategory if provided
  const filteredItems = items.filter(item => {
    if (category && item.category !== category) return false;
    if (subcategory && item.subcategory !== subcategory) return false;
    return true;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <Link 
          key={item.id}
          to={`/media/${item.id}`}
          className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-navy-light"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className={`w-full h-full object-cover image-hover ${
              hoveredItem === item.id ? 'opacity-60' : 'opacity-100'
            }`}
          />
          
          {/* Play button for videos */}
          {item.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-burgundy bg-opacity-80 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </div>
            </div>
          )}
          
          {/* Title overlay that appears on hover */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy to-transparent transition-all duration-300 ${
              hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h3 className="text-white font-medium text-lg">{item.title}</h3>
            {item.subcategory && (
              <p className="text-lavender text-sm">{item.subcategory}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MediaGrid;
