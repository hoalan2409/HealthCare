# HealthCare Application

## Overview
A responsive healthcare application built with React, TypeScript, and Tailwind CSS that provides users with health tracking, meal management, and personal record management features.

## Table of Contents
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Features](#features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Operation Verification](#operation-verification)
- [Code Quality Standards](#code-quality-standards)
- [Recent Refactoring](#recent-refactoring)

## Problem Statement
The application needed to be built from a Figma design with the following requirements:
- Reproduce the exact design specifications from Figma
- Implement responsive design for mobile and desktop
- Create a healthcare application with multiple pages (Dashboard, My Record, Column)
- Implement proper navigation and mobile menu functionality
- Ensure consistent styling and user experience across all screen sizes
- Maintain code consistency and avoid duplication across similar components

## Solution
The application was built using modern React patterns with TypeScript for type safety and Tailwind CSS for consistent styling. The solution includes:

- **Component-based architecture** for reusability and maintainability
- **Responsive design** that works seamlessly across all device sizes
- **Type-safe development** with TypeScript interfaces
- **Consistent styling** using Tailwind CSS utility classes
- **Proper separation of concerns** between data, logic, and UI components
- **Common component library** to eliminate code duplication

## Features

### 🏠 Dashboard
- Meal categories (Morning, Lunch, Dinner, Snack)
- Meal gallery with image display
- Responsive grid layout
- Hexagon-shaped category icons
- View More button: "記録をもっと見る" (View More Records)

### 📊 My Record
- Body record charts with period selection
- Exercise tracking section
- Personal diary entries
- Main cards section with health metrics
- View More button: "自分の日記をもっと見る" (View More My Diary)

### 📰 Column
- Article listing with pagination
- Category-based filtering
- Responsive card layout
- Image optimization
- View More button: "コラムをもっと見る" (View More Column)

### 🧭 Navigation
- Responsive header with logo
- Mobile hamburger menu with proper positioning
- Active page highlighting
- Smooth transitions

## Architecture

### Data Separation
The application maintains clear separation between data and UI:

```
src/
├── types/           # TypeScript interfaces and types
├── components/      # Reusable UI components
├── pages/          # Page-level components
└── data/           # Mock data and constants
```

### Component Structure
- **Layout Components**: `PageLayout`, `DashboardPageLayout`
- **UI Components**: `Button`, `HexagonBackground`, `ScrollButton`, `ViewMoreButton`
- **Feature Components**: `MealCategories`, `BodyRecordChart`, `ArticleCard`
- **Common Components**: `Header`, `Footer`, `MobileMenu`

### State Management
- Local component state using React hooks
- Props-based data flow
- No external state management libraries (keeping it simple)

## Recent Refactoring

### ViewMoreButton Component Consolidation
- **Before**: Each page had its own `ViewMoreButton` component with duplicate code
- **After**: Single common `ViewMoreButton` component in `ui/` folder
- **Benefits**: 
  - Eliminated code duplication (DRY principle)
  - Consistent styling across all pages
  - Easier maintenance and updates
  - Better component reusability

### Component Organization
- Moved `ViewMoreButton` to `ui/` folder for better organization
- Updated all import paths across Dashboard, MyRecord, and Column pages
- Maintained consistent interface with customizable text content

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Build Tool**: Vite for fast development and building
- **Routing**: React Router for navigation
- **Package Manager**: npm
- **Development**: ESLint, Prettier for code quality

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps
```bash
# Clone the repository
git clone <repository-url>
cd health-care

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup
The application uses environment variables for configuration:
```env
VITE_APP_TITLE=HealthCare
VITE_API_BASE_URL=http://localhost:3000
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Header, Footer, Navigation
│   ├── dashboard/      # Dashboard-specific components
│   ├── myRecord/       # My Record page components
│   ├── column/         # Column page components
│   ├── layout/         # Layout components
│   └── ui/            # Basic UI elements (Button, ViewMoreButton, etc.)
├── pages/              # Page components
│   ├── Dashboard/      # Dashboard page
│   ├── MyRecord/       # My Record page
│   └── Column/         # Column page
├── types/              # TypeScript type definitions
├── styles/             # Global styles and Tailwind config
├── Routes.tsx          # Application routing
└── main.tsx           # Application entry point
```

## Operation Verification

### 1. Basic Functionality Test
```bash
# Start the application
npm run dev

# Navigate to http://localhost:5173
# Verify the application loads without errors
```

### 2. Responsive Design Test
- **Mobile (320px - 768px)**: Check mobile menu, responsive layouts (F12 :D)
- **Tablet (768px - 1024px)**: Verify medium screen adaptations (F12 :D)
- **Desktop (1024px+)**: Ensure full desktop experience

### 3. Navigation Test
- Click logo → Navigate to Dashboard
- Click menu icon → Open mobile menu
- Navigate between pages → Verify routing works
- Check active page highlighting

### 4. Component Test
- **Dashboard**: Verify meal categories and gallery display
- **My Record**: Check Body Record section, exercise section, diary
- **Column**: Test article listing and pagination

### 5. Mobile Menu Test
- Open mobile menu on small screens
- Verify remove button positioning (above menu, not inside)
- Check menu height (not full screen)
- Test menu item navigation

### 6. Cross-browser Test
- Chrome, Edge
- Verify consistent rendering and functionality

## Code Quality Standards

### TypeScript Guidelines
- **Strict typing**: All components have proper TypeScript interfaces
- **Interface naming**: Descriptive names like `ViewMoreButtonProps`, `MealCategory`
- **Type safety**: No `any` types, proper generic usage

### React Best Practices
- **Functional components**: Using modern React hooks
- **Props destructuring**: Clean component signatures
- **Event handling**: Proper event types and handlers
- **Conditional rendering**: Clean conditional logic

### Code Consistency
- **Naming conventions**: camelCase for variables, PascalCase for components
- **File structure**: Consistent folder organization
- **Import statements**: Organized and grouped imports
- **Component structure**: Consistent component layout

### Maintainability
- **Component reusability**: Shared components across pages (ViewMoreButton, Button, etc.)
- **Separation of concerns**: Clear component responsibilities
- **Code comments**: Meaningful comments for complex logic
- **Error handling**: Graceful error states
- **DRY principle**: No duplicate code across similar components

### Performance
- **Image optimization**: Proper image sizing and formats
- **Lazy loading**: Component-based code splitting
- **Efficient rendering**: Proper React key usage
- **CSS optimization**: Tailwind utility classes

## Development Guidelines

### Adding New Components
1. Create component in appropriate folder (`ui/` for basic UI, `common/` for shared components)
2. Define TypeScript interface
3. Add proper JSDoc comments
4. Follow existing naming conventions
5. Test responsive behavior
6. Consider if component can be reused across pages

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow design system color palette
- Ensure responsive design principles
- Maintain consistent spacing and typography

### Testing Strategy
- Manual testing on different screen sizes
- Cross-browser compatibility testing
- Component integration testing
- User experience validation
- Consistency testing across similar components

## Troubleshooting

### Common Issues
- **Build errors**: Check TypeScript compilation
- **Styling issues**: Verify Tailwind CSS classes
- **Routing problems**: Check React Router configuration
- **Mobile menu**: Verify z-index and positioning
- **Component imports**: Check file paths after refactoring

## Contributing

1. Follow the established code structure
2. Maintain TypeScript strict mode
3. Use Tailwind CSS for styling
4. Test responsive behavior
5. Update documentation as needed
6. Avoid code duplication - use common components when possible
7. Keep components in appropriate folders (`ui/`, `common/`, etc.)

---

**Note**: This application is built according to the provided Figma design specifications and follows modern web development best practices for maintainability, performance, and user experience. Recent refactoring has improved code organization and eliminated duplication through the use of common components.
