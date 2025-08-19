import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ScrollButton from '../../components/common/ScrollButton';
import TopSection from '../../components/dashboard/TopSection';
import MealCategories from '../../components/dashboard/MealCategories';
import MealGallery from '../../components/dashboard/MealGallery';
import ViewMoreButton from '../../components/dashboard/ViewMoreButton';
import type { MealCategory, MealImage } from '../../types/Dashboard';

const Dashboard: React.FC = () => {
  const mealCategories: MealCategory[] = [
    { name: 'Morning', icon: '/images/img_icon_knife.svg' },
    { name: 'Lunch', icon: '/images/img_icon_knife.svg' },
    { name: 'Dinner', icon: '/images/img_icon_knife.svg' },
    { name: 'Snack', icon: '/images/img_icon_cup.svg' }
  ];

  const mealImages: MealImage[] = [
    { src: '/images/m01.jpg', label: '05.21.Morning', type: 'Morning' },
    { src: '/images/l03.jpg', label: '05.21.Lunch', type: 'Lunch' },
    { src: '/images/d01.jpg', label: '05.21.Dinner', type: 'Dinner' },
    { src: '/images/l01.jpg', label: '05.21.Snack', type: 'Snack' },
    { src: '/images/m01.jpg', label: '05.20.Morning', type: 'Morning' },
    { src: '/images/l02.jpg', label: '05.20.Lunch', type: 'Lunch' },
    { src: '/images/d02.jpg', label: '05.20.Dinner', type: 'Dinner' },
    { src: '/images/s01.jpg', label: '05.21.Snack', type: 'Snack' }
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-3">
      <Header />
      
      {/* Main Content */}
      <div className="flex flex-col gap-8 justify-start items-center w-full">
        
        {/* Top Section - Two Static Images Side by Side */}
        <TopSection />

        {/* Bottom Section - Hexagonal Meal Categories in Single Row */}
        <MealCategories categories={mealCategories} />

        {/* Meal Gallery */}
        <MealGallery meals={mealImages} />

        {/* View More Button */}
        <ViewMoreButton />
      </div>

      <Footer />
      
      {/* Scroll Button Component */}
      <ScrollButton />
    </div>
  );
};

export default Dashboard;