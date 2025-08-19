import React from 'react';
import Button from '../ui/Button';
import type { MealImage, MealGalleryProps } from '../../types/Dashboard';

const MealGallery: React.FC<MealGalleryProps> = ({ meals }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-center w-full">
        <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold leading-[22px] sm:leading-[25px] lg:leading-[27px] text-left text-gray-800 mb-6 sm:mb-8 lg:mb-[34px] self-start w-full">
          MEAL GALLERY
        </h2>

        <div className="flex flex-row justify-start items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
            {meals.map((meal, index) => (
              <div key={index} className="flex flex-col justify-start items-start w-full">
                {/* Meal Image */}
                <div className="flex flex-row justify-center items-center w-full mb-2">
                  <div className="w-full h-[200px] sm:h-[250px] lg:h-[304px]">
                    <img src={meal.src} className="w-full h-full object-cover" alt={meal.label} />
                  </div>
                </div>

                {/* Meal Label Button */}
                <div className="relative w-full -mt-6 sm:-mt-7 lg:-mt-8">
                  <Button
                    className="text-[11px] sm:text-[13px] lg:text-[15px] font-normal leading-[14px] sm:leading-[16px] lg:leading-[19px] text-left text-global-1 bg-global-2 px-2 sm:px-3 lg:px-2 pt-0 pb-1 sm:pt-0 sm:pb-1.5 lg:pt-0 lg:pb-1 rounded-none"
                  >
                    {meal.label}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealGallery;
