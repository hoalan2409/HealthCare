import React from 'react';
import Button from '../ui/Button';
import type { MealImage, MealGalleryProps } from '../../types/Dashboard';

const MealGallery: React.FC<MealGalleryProps> = ({ meals }) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-[160px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-row gap-4 justify-center items-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4 w-full">
            {meals.map((meal, index) => (
              <div key={index} className="flex flex-col justify-start items-center w-full">
                <div className="flex flex-col justify-start items-start w-full mb-1 sm:mb-2 lg:mb-[6px]">
                  <img 
                    src={meal.src} 
                    className="w-full aspect-square object-cover" 
                    alt={meal.label} 
                  />
                  <div className="relative w-full -mt-6 sm:-mt-7 lg:-mt-8">
                    <Button
                      className="text-[11px] sm:text-[13px] lg:text-[15px] font-normal leading-[14px] sm:leading-[16px] lg:leading-[19px] text-left text-global-1 bg-global-2 px-2 sm:px-3 lg:px-2 py-1 sm:py-1.5 lg:py-1 rounded-none"
                    >
                      {meal.label}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealGallery;
