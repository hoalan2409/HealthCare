import React from 'react';
import HexagonBackground from '../ui/HexagonBackground';
import type { MealCategory, MealCategoriesProps } from '../../types/Dashboard';

const MealCategories: React.FC<MealCategoriesProps> = ({ categories }) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[160px]">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Mobile: 2x2 grid, Desktop: Single row */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-6 xl:gap-12 justify-center items-center">
          {categories.map((category, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]">
                {/* Hexagonal Background */}
                <HexagonBackground gradientId={`hexGradient${index}`} />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
                  <img 
                    src={category.icon} 
                    className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] mb-2 filter brightness-0 invert" 
                    alt={category.name} 
                  />
                  <span className="text-[12px] lg:text-[14px] font-normal text-center">
                    {category.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealCategories;
