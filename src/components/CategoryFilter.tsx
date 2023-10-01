
import React from 'react';
import { Button } from '@/components/ui/button';
import { categoryLabels, categoryIcons } from '@/data/videos';

type Category = 'all' | 'fails' | 'pranks' | 'reactions' | 'wtf' | 'wins';

interface CategoryFilterProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onSelectCategory }) => {
  const categories: Category[] = ['all', 'fails', 'pranks', 'reactions', 'wtf', 'wins'];
  
  return (
    <div className="flex flex-wrap gap-2 md:gap-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onSelectCategory(category)}
          className={activeCategory === category ? 
            (category !== 'all' ? `bg-category-${category} hover:bg-category-${category}/90` : '') : ''}
        >
          {category !== 'all' ? `${categoryIcons[category]} ${categoryLabels[category]}` : '🎬 All Videos'}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
