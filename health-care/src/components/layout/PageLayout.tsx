import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScrollButton from '../common/ScrollButton';
import type { PageLayoutProps } from '../../types/Dashboard';

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  className = "bg-global-3",
  contentClassName = ""
}) => {
  return (
    <div className={`flex flex-col justify-start items-center w-full ${className}`}>
      <Header />
      <div className={`flex flex-col justify-start items-center w-full ${contentClassName}`}>
        {children}
      </div>
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default PageLayout;
