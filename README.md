# 🎓 SpeakGenie Dashboard - School Management System

A modern, responsive React-based dashboard for educational institutions to manage students, track performance, and analyze learning analytics. Built with cutting-edge technologies and designed for optimal user experience.

![SpeakGenie Dashboard](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [📊 Core Screens](#-core-screens)
- [🔧 Configuration](#-configuration)
- [📱 Responsive Design](#-responsive-design)
- [🎯 Key Components](#-key-components)
- [📈 Data Management](#-data-management)
- [🔍 API Integration](#-api-integration)
- [📦 Build & Deployment](#-build--deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

### 🎯 Core Functionality
- **Dashboard Overview**: Real-time metrics and performance insights
- **Student Management**: Comprehensive student profiles and performance tracking
- **Analytics & Reports**: Detailed learning analytics and performance distribution
- **Leaderboard System**: Gamified learning with rankings and achievements
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Settings Management**: User preferences and system configuration
- **Data Export**: Export functionality for student data

### 🎨 UI/UX Features
- **Modern Design**: Clean, intuitive interface with smooth animations
- **Interactive Charts**: Dynamic data visualization with Recharts
- **Toast Notifications**: User feedback and status updates
- **Loading States**: Skeleton screens and progress indicators
- **Accessibility**: WCAG compliant with keyboard navigation
- **Custom Components**: Reusable UI components with shadcn/ui

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.8.3** - Type-safe development experience
- **Vite 5.4.19** - Lightning-fast build tool and dev server

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Tailwind CSS Animate** - Smooth animations

### Data & State Management
- **TanStack Query 5.83.0** - Server state management
- **React Hook Form 7.61.1** - Form handling and validation
- **Zod 3.25.76** - Schema validation

### Charts & Visualization
- **Recharts 3.1.2** - Composable charting library
- **Custom Chart Components** - Tailored for educational data

### Routing & Navigation
- **React Router DOM 6.30.1** - Client-side routing
- **Custom Layout System** - Responsive sidebar and navigation

### Development Tools
- **ESLint 9.32.0** - Code linting and formatting
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd speakgenie-dash-sparkle-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── cards/          # Dashboard cards and widgets
│   ├── charts/         # Data visualization components
│   ├── layout/         # Layout components (Header, Sidebar)
│   └── ui/             # Base UI components (shadcn/ui)
├── pages/              # Main application pages
│   ├── Dashboard.tsx   # Main dashboard view
│   ├── Analytics.tsx   # Analytics and reports
│   ├── Students.tsx    # Student management
│   ├── Leaderboard.tsx # Leaderboard system
│   └── Settings.tsx    # Application settings
├── data/               # Mock data and API simulation
│   └── mockData.ts     # Sample data for development
├── types/              # TypeScript type definitions
│   └── index.ts        # Core type interfaces
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets (images, icons)
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb` - Main brand color
- **Success Green**: `#10b981` - Positive actions and metrics
- **Warning Orange**: `#f59e0b` - Caution and alerts
- **Danger Red**: `#ef4444` - Errors and destructive actions
- **Accent Purple**: `#8b5cf6` - Secondary actions and highlights

### Typography
- **Font Family**: System fonts with fallbacks
- **Heading Sizes**: Responsive typography scale
- **Text Colors**: Primary, secondary, and muted variants

### Spacing & Layout
- **Grid System**: CSS Grid and Flexbox
- **Spacing Scale**: Consistent 4px base unit
- **Breakpoints**: Mobile-first responsive design

## 📊 Core Screens

### 🏠 Dashboard
- **Overview Metrics**: Total students, classes, performance, top performers
- **Performance Distribution**: Pie chart showing student performance levels
- **Class Enrollment**: Bar chart of student distribution across classes

### 👥 Students
- **Student Grid**: Card-based student profiles with performance data
- **Search & Filter**: Advanced filtering by class, performance level
- **Student Details**: Individual student performance metrics
- **Export Functionality**: Data export capabilities

### 📈 Analytics
- **Learning Analytics**: Comprehensive performance insights
- **Skill Performance**: Breakdown by learning areas (Vocabulary, Grammar, Pronunciation, Listening, Speaking)
- **Engagement Metrics**: Monthly activity and participation
- **Performance Distribution**: Student performance categorization

### 🏆 Leaderboard
- **Student Rankings**: Gamified leaderboard system
- **Performance Metrics**: Points, accuracy, streaks, and lessons completed
- **Achievement Tracking**: Student accomplishments and progress

### ⚙️ Settings
- **Profile Settings**: Personal information and contact details
- **System Settings**: Language preferences and timezone configuration
- **Notification Preferences**: Email and system notification settings
- **Data Management**: Export functionality for student data

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=SpeakGenie Dashboard
VITE_APP_VERSION=1.0.0
```

### Vite Configuration
The project uses Vite with the following configuration:
- **Port**: 8080
- **Host**: All interfaces (`::`)
- **Source Maps**: Enabled for debugging
- **Path Aliases**: `@` points to `src/`

### Tailwind Configuration
Custom Tailwind configuration with:
- **Custom Colors**: SpeakGenie brand colors
- **Custom Components**: Extended component classes
- **Animations**: Smooth transitions and effects

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

### Mobile-First Approach
- **Touch-Friendly**: Optimized for touch interactions
- **Collapsible Sidebar**: Mobile navigation menu
- **Responsive Grid**: Adaptive layout system
- **Optimized Charts**: Mobile-friendly data visualization

## 🎯 Key Components

### Layout Components
- **Layout.tsx**: Main application layout wrapper
- **Sidebar.tsx**: Navigation sidebar with collapsible functionality
- **Header.tsx**: Page headers with breadcrumbs and actions

### Card Components
- **MetricCard.tsx**: Key performance indicators
- **StudentCard.tsx**: Individual student profiles
- **LeaderboardCard.tsx**: Ranking and achievement cards
- **SummaryCard.tsx**: Summary statistics and overview

### Chart Components
- **BarChart.tsx**: Custom bar chart implementation
- **PieChart.tsx**: Performance distribution visualization
- **HorizontalBarChart.tsx**: Horizontal bar charts for comparisons

### UI Components
- **Button**: Multiple variants and sizes
- **Input**: Form inputs with validation
- **Select**: Dropdown selections
- **Modal**: Dialog and overlay components
- **Toast**: Notification system
- **Skeleton**: Loading state components

## 📈 Data Management

### Mock Data Structure
The application includes comprehensive mock data for development:

```typescript
interface Student {
  id: string;
  name: string;
  class: string;
  avatar: string;
  points: number;
  accuracy: number;
  streak: number;
  rank?: number;
  lessons: number;
}

interface DashboardMetric {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'info';
  icon: string;
  iconColor: string;
}

interface AnalyticsData {
  totalHours: number;
  lessonsCompleted: number;
  avgSessionTime: string;
  activeStudents: number;
  skillPerformance: {
    vocabulary: number;
    grammar: number;
    pronunciation: number;
    listening: number;
    speaking: number;
  };
}
```

### Data Sources
- **Mock Data**: Development and testing
- **Local Storage**: User preferences and settings
- **Session Storage**: Temporary data caching

## 🔍 API Integration

### API Structure
The application is designed for easy API integration:

```typescript
// Example API endpoints
GET /api/students          // Get all students
GET /api/students/:id      // Get specific student
GET /api/analytics         // Get analytics data
GET /api/leaderboard       // Get leaderboard data
POST /api/students         // Create new student
PUT /api/students/:id      // Update student
DELETE /api/students/:id   // Delete student
```

### Data Fetching
- **TanStack Query**: Server state management
- **Error Handling**: Comprehensive error states
- **Loading States**: Skeleton screens and spinners
- **Caching**: Intelligent data caching

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

### Build Output
- **Optimized Assets**: Minified and compressed
- **Code Splitting**: Automatic bundle splitting
- **Source Maps**: For debugging (optional)
- **Static Assets**: Optimized images and fonts

### Deployment Options
- **Vercel**: Zero-config deployment
- **Netlify**: Static site hosting
- **AWS S3**: Cloud storage hosting

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Code Standards
- **TypeScript**: Strict type checking
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Conventional Commits**: Standard commit messages

### Pull Request Guidelines
- **Clear Description**: Explain the changes
- **Screenshots**: For UI changes
- **Documentation**: Update docs if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **shadcn/ui** for the excellent component library
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for the utility-first CSS framework
- **Recharts** for the charting library
- **Lucide** for the beautiful icons

