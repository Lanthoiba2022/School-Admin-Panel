export interface Student {
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

export interface DashboardMetric {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'info';
  icon: string;
  iconColor: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

export interface AnalyticsData {
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
  monthlyEngagement: Array<{
    month: string;
    students: number;
    lessons: number;
  }>;
  performanceDistribution: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  monthlyImprovement: Array<{
    skill: string;
    improvement: number;
  }>;
}

export interface ClassEnrollment {
  class: string;
  students: number;
}

export interface SidebarItem {
  icon: string;
  label: string;
  path: string;
  active?: boolean;
}