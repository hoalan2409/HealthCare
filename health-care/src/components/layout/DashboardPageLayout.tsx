import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScrollButton from '../common/ScrollButton';
import TopSection from '../dashboard/TopSection';

interface DashboardPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardPageLayout: React.FC<DashboardPageLayoutProps> = ({ 
  children, 
  className = "bg-global-3"
}) => {
  return (
    <div className={`flex flex-col justify-start items-center w-full ${className}`}>
      <Header />
      
      {/* Top Section - Full width background */}
      <div className="w-full bg-global-1">
        <TopSection />
      </div>
      
      {/* Main Content with standard padding */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[94px]">
        {children}
      </div>
      
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default DashboardPageLayout;
