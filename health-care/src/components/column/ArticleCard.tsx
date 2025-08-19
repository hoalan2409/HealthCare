import React from 'react';
import type { ArticleCardProps } from '../../types/Column';

const ArticleCard: React.FC<ArticleCardProps> = ({ image, date, title, tags }) => {
  return (
    <div className="flex flex-col bg-white rounded-none overflow-hidden shadow-none">
      {/* Image + date badges */}
      <div className="relative w-full">
        <img
          src={image}
          className="w-full h-[200px] object-cover"
          alt="Article"
        />
        <div className="absolute bottom-1 left-0">
          <span className="bg-[#FFCC21] px-2 py-[6px] text-[12px] sm:text-[13px] text-white leading-none">
            {date}
          </span>
        </div>
      </div>

      {/* Title + Tags */}
      <div className="px-3 pt-5 pb-3 flex flex-col gap-2">
        <p className="text-[14px] sm:text-[15px] font-normal leading-[22px] text-[#414141] line-clamp-2">
          {title}
        </p>
        <span className="text-[11px] sm:text-[12px] text-[#FF963C]">{tags}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
