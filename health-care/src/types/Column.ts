// ArticleCard component
export interface ArticleCardProps {
  image: string;
  date: string; // "2021.05.17   23:25"
  title: string;
  tags: string;
}

// RecommendedCategory component
export interface RecommendedCategoryProps {
  title: string;   // "RECOMMENDED\nCOLUMN"
  subtitle: string; // "オススメ"
}

// Column page props
export interface ColumnProps {
  className?: string;
}
