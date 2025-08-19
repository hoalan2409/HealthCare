import React from 'react';
import type { TopSectionProps } from '../../types/Dashboard';

const TopSection: React.FC<TopSectionProps> = ({ className }) => {
  return (
    <section className="w-full">
      <div className="w-full mx-auto">
        {/* Mobile: Stacked layout, Desktop: Side by side */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch h-auto lg:h-[350px]">
          
          {/* Left Image - Food Layout */}
          <div className="flex justify-center items-center w-full lg:w-[35%] h-[200px] lg:h-full">
            <div className="relative w-full h-full">
              <img 
                src="/images/top_left.png" 
                className="w-full h-full object-cover"
                alt="Food layout with bowls and dishes"
              />
            </div>
          </div>

          {/* Right Image - Chart Section */}
          <div className="flex justify-center lg:justify-end items-center w-full lg:w-[65%] h-[200px] lg:h-full">
            <div className="relative w-full h-full">
              <img 
                src="/images/top_right.png" 
                className="w-full h-full object-contain"
                alt="Chart section with line graph and month labels"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
