import React from 'react';
import Button from './Button';

interface ViewMoreButtonProps {
  className?: string;
  onClick?: () => void;
  text: string; // Customizable text content
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ className, onClick, text }) => {
  return (
    <div className={`w-full flex justify-center items-center ${className || ''}`}>
      <Button
        className="text-[14px] sm:text-[16px] lg:text-[18px] font-light leading-[21px] sm:leading-[24px] lg:leading-[27px] text-center text-global-1 bg-[linear-gradient(33deg,#ffcc21_0%,_#ff963c_100%)] rounded-[5px] px-6 sm:px-8 lg:px-[34px] py-2 sm:py-3 lg:py-3"
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  );
};

export default ViewMoreButton;
