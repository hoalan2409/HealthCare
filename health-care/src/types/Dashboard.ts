// Dashboard page props
export interface DashboardProps {
  className?: string;
}

// MealCategories component
export interface MealCategory {
  name: string;
  icon: string;
}

export interface MealCategoriesProps {
  categories: MealCategory[];
}

// MealGallery component
export interface MealImage {
  src: string;
  label: string;
  type: string;
}

export interface MealGalleryProps {
  meals: MealImage[];
}

// TopSection component
export interface TopSectionProps {
  className?: string;
}

// ViewMoreButton component
export interface ViewMoreButtonProps {
  className?: string;
  onClick?: () => void;
}