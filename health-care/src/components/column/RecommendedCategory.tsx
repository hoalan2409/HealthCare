import React from 'react';
import type { RecommendedCategoryProps } from '../../types/Column';

const RecommendedCategory: React.FC<RecommendedCategoryProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#2E2E2E] w-full sm:w-[216px] h-[140px] rounded-none">
      <span className="text-[#FFCC21] text-[14px] sm:text-[16px] font-normal tracking-[0.08em] whitespace-pre-line text-center leading-[1.4] uppercase">
        {title}
      </span>
      
      {/* White line separator */}
      <div className="w-8 h-[1px] bg-white my-2"></div>
      
      <span className="text-[12px] sm:text-[14px] text-white">{subtitle}</span>
    </div>
  );
};

export default RecommendedCategory;
