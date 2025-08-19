import React from 'react';
import HexagonBackground from '../ui/HexagonBackground';
import type { MealCategory, MealCategoriesProps } from '../../types/Dashboard';

const MealCategories: React.FC<MealCategoriesProps> = ({ categories }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4 lg:gap-6 xl:gap-12 justify-center items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-center">
            <div className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]">
              <HexagonBackground gradientId={`hexGradient${index}`} />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
                <img src={category.icon} className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[28px] lg:h-[28px] mb-1 lg:mb-2 filter brightness-0 invert" alt={category.name} />
                <span className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal text-center">
                  {category.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealCategories;
