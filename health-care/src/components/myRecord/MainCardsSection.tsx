import React from 'react';

interface RecommendCardProps {
  title: string;
  subtitle: string;
  img: string;
}

const RecommendCard: React.FC<RecommendCardProps> = ({ title, subtitle, img }) => {
  return (
    <div className="flex flex-col w-full sm:w-1/3 px-2">
      {/* Outer yellow frame */}
      <div className="relative w-full aspect-square bg-yellow-400 flex items-center justify-center">
        {/* Inner image with much larger margin (inset-6 = gấp 3 lần inset-2) */}
        <div
          className="absolute inset-6 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-2 text-center px-2">
          <h3 className="text-[18px] sm:text-[20px] lg:text-[25px] font-normal leading-[24px] text-yellow-400">
            {title}
          </h3>
          <div className="bg-orange-400 px-3">
            <span className="text-[11px] sm:text-[12px] lg:text-[14px] font-light leading-[16px] text-white">
              {subtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainCardsSection: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-[48px] w-full mb-8 sm:mb-12 lg:mb-[56px]">
      <RecommendCard
        title="BODY RECORD"
        subtitle="自分のカラダの記録"
        img="/images/MyRecommend-1.jpg"
      />
      <RecommendCard
        title="MY EXERCISE"
        subtitle="自分の運動の記録"
        img="/images/MyRecommend-2.jpg"
      />
      <RecommendCard
        title="MY DIARY"
        subtitle="自分の日記"
        img="/images/MyRecommend-3.jpg"
      />
    </div>
  );
};

export default MainCardsSection;
