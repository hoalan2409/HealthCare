// Exercise related interfaces
export interface ExerciseItem {
  id: number;
  name: string;
  duration: string;
  calories: string;
}

export interface MyExerciseSectionProps {
  exerciseData: ExerciseItem[];
}

// Diary related interfaces
export interface DiaryEntry {
  id: number;
  date: string;
  time: string;
  content: string;
}

export interface MyDiarySectionProps {
  diaryEntries: DiaryEntry[];
}

// Body Record Chart interfaces
export interface BodyRecordChartProps {
  periods: string[];
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

// Main Cards Section interfaces
export interface MainCardsSectionProps {
  className?: string;
}

// MyRecord page props
export interface MyRecordProps {
  className?: string;
}
  