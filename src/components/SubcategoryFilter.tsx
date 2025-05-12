
import { Button } from "@/components/ui/button";

interface SubcategoryFilterProps {
  subcategories: string[];
  activeSubcategory: string | null;
  onSelect: (subcategory: string | null) => void;
}

const SubcategoryFilter = ({
  subcategories,
  activeSubcategory,
  onSelect
}: SubcategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button 
        variant={activeSubcategory === null ? "secondary" : "outline"}
        className={activeSubcategory === null ? "bg-burgundy text-white" : "text-lavender hover:text-white"}
        onClick={() => onSelect(null)}
      >
        Tous
      </Button>
      
      {subcategories.map((subcategory) => (
        <Button
          key={subcategory}
          variant={activeSubcategory === subcategory ? "secondary" : "outline"}
          className={activeSubcategory === subcategory ? "bg-burgundy text-white" : "text-lavender hover:text-white"}
          onClick={() => onSelect(subcategory)}
        >
          {subcategory}
        </Button>
      ))}
    </div>
  );
};

export default SubcategoryFilter;
