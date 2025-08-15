import { Student, DashboardMetric, AnalyticsData, ClassEnrollment } from '../types';

export const dashboardMetrics: DashboardMetric[] = [
  {
    title: "TOTAL STUDENTS",
    value: "245",
    change: "+12% from last month",
    changeType: "positive",
    icon: "Users",
    iconColor: "blue"
  },
  {
    title: "TOTAL CLASSES", 
    value: "8",
    change: "+8% from last month",
    changeType: "positive",
    icon: "BookOpen",
    iconColor: "green"
  },
  {
    title: "AVG. PERFORMANCE",
    value: "86.2%",
    change: "+5% from last month", 
    changeType: "positive",
    icon: "TrendingUp",
    iconColor: "purple"
  },
  {
    title: "TOP PERFORMER",
    value: "830 pts",
    change: "Ahan K. Class 8",
    changeType: "info",
    icon: "Star",
    iconColor: "orange"
  }
];

export const students: Student[] = [
  {
    id: "1",
    name: "Ahan Kumar",
    class: "Class 8",
    avatar: "/src/assets/student-1.jpg",
    points: 830,
    accuracy: 96,
    streak: 15,
    rank: 1,
    lessons: 68
  },
  {
    id: "2", 
    name: "Hvff",
    class: "Class 7",
    avatar: "/src/assets/student-2.jpg", 
    points: 295,
    accuracy: 94,
    streak: 12,
    rank: 2,
    lessons: 45
  },
  {
    id: "3",
    name: "Flower Girl", 
    class: "Class 6",
    avatar: "/src/assets/student-3.jpg",
    points: 190,
    accuracy: 93,
    streak: 8,
    rank: 3,
    lessons: 38
  },
  {
    id: "4",
    name: "12 June Child Test",
    class: "Class 5",
    avatar: "/src/assets/student-4.jpg",
    points: 165,
    accuracy: 92,
    streak: 6,
    rank: 4,
    lessons: 32
  },
  {
    id: "5",
    name: "Hcdff",
    class: "Class 4",
    avatar: "/src/assets/student-5.jpg",
    points: 160,
    accuracy: 91,
    streak: 5,
    rank: 5,
    lessons: 30
  },
  {
    id: "6",
    name: "Eva",
    class: "Class 3",
    avatar: "/src/assets/student-1.jpg",
    points: 145,
    accuracy: 90,
    streak: 4,
    rank: 6,
    lessons: 28
  },
  {
    id: "7",
    name: "Sophia Kim",
    class: "Class 2",
    avatar: "/src/assets/student-2.jpg",
    points: 138,
    accuracy: 89,
    streak: 7,
    rank: 7,
    lessons: 26
  },
  {
    id: "8",
    name: "James Wilson",
    class: "Class 6",
    avatar: "/src/assets/student-3.jpg",
    points: 132,
    accuracy: 88,
    streak: 3,
    rank: 8,
    lessons: 24
  },
  {
    id: "9",
    name: "Olivia Davis",
    class: "Class 5",
    avatar: "/src/assets/student-4.jpg",
    points: 128,
    accuracy: 87,
    streak: 9,
    rank: 9,
    lessons: 22
  },
  {
    id: "10",
    name: "Liam Garcia",
    class: "Class 1",
    avatar: "/src/assets/student-5.jpg",
    points: 120,
    accuracy: 86,
    streak: 2,
    rank: 10,
    lessons: 20
  },
  {
    id: "11",
    name: "Ava Martinez",
    class: "Class 3",
    avatar: "/src/assets/student-1.jpg",
    points: 100,
    accuracy: 85,
    streak: 1,
    rank: 11,
    lessons: 18
  },
  {
    id: "12",
    name: "Noah Thompson",
    class: "Class 4",
    avatar: "/src/assets/student-2.jpg",
    points: 95,
    accuracy: 83,
    streak: 1,
    rank: 12,
    lessons: 16
  }
];

export const classEnrollment: ClassEnrollment[] = [
  { class: "Class 1", students: 35 },
  { class: "Class 2", students: 32 },
  { class: "Class 3", students: 28 },
  { class: "Class 4", students: 30 },
  { class: "Class 5", students: 25 },
  { class: "Class 6", students: 28 },
  { class: "Class 7", students: 33 },
  { class: "Class 8", students: 34 }
];

export const analyticsData: AnalyticsData = {
  totalHours: 2847,
  lessonsCompleted: 1892,
  avgSessionTime: "24 min",
  activeStudents: 1156,
  skillPerformance: {
    vocabulary: 82,
    grammar: 78,
    pronunciation: 76,
    listening: 85,
    speaking: 74
  },
  monthlyEngagement: [
    { month: "Jan", students: 45, lessons: 6 },
    { month: "Feb", students: 52, lessons: 8 },
    { month: "Mar", students: 48, lessons: 12 },
    { month: "Apr", students: 58, lessons: 18 },
    { month: "May", students: 65, lessons: 24 }
  ],
  performanceDistribution: [
    { name: "Excellent (90-100%)", value: 45, color: "#10b981" },
    { name: "Good (80-89%)", value: 35, color: "#2563eb" },
    { name: "Average (70-79%)", value: 15, color: "#f59e0b" },
    { name: "Needs Improvement", value: 5, color: "#ef4444" }
  ],
  monthlyImprovement: [
    { skill: "Vocabulary", improvement: 5 },
    { skill: "Grammar", improvement: 8 },
    { skill: "Pronunciation", improvement: 12 },
    { skill: "Listening", improvement: 3 },
    { skill: "Speaking", improvement: 15 }
  ]
};