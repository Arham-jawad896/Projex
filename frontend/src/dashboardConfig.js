const dashboardConfig = [
  {
    key: 'home',
    path: '/home',
    sidebar: [
      { title: 'Dashboard Overview', path: 'dashboard-overview', component: 'DashboardOverview' },
      { title: 'Performance Metrics', path: 'performance-metrics', component: 'PerformanceMetrics' },
      { title: 'AI-Powered Forecasting', path: 'ai-powered-forecasting', component: 'AIPoweredForecasting' },
      { title: 'Daily Insights', path: 'Daily Insights', component: 'DailyInsights' },
      { title: 'AI Recommendations Hub', path: 'ai-recommendations-hub', component: 'AIRecommendationsHub' },
      { title: 'Achievements & Highlights', path: 'achievements-and-highlights', component: 'AchievementsAndHighlights' },
    ],
  },
  {
    key: 'projects',
    path: '/projects',
    sidebar: [
      { title: 'Project Catalog', path: 'project-catalog', component: 'ProjectCatalog' },
      { title: 'Kanban Board', path: 'kanban-board', component: 'KanbanBoard' },
      { title: 'Dynamic Gantt Chart', path: 'dynamic-gantt-chart', component: 'DynamicGanttChart' },
      { title: 'Risk & Issue Management', path: 'risk-issue-management', component: 'RiskAndIssueManagement' },
      { title: 'Project Health Monitor', path: 'project-health-monitor', component: 'ProjectHealthMonitor' },
      { title: 'AI Resource Allocation', path: 'ai-resource-allocation', component: 'AIResourceAllocation' },
    ],
  },
  {
    key: 'tasks',
    path: '/tasks',
    sidebar: [
      { title: 'My Tasks', path: 'my-tasks', component: 'Tasks' },
      { title: 'Smart Assignment', path: 'smart-assignment', component: 'SmartAssignment' },
      { title: 'Task Dependency Management', path: 'task-dependency-management', component: 'TaskDependencyManagement' },
      { title: 'Project Forecasting', path: 'project-forecasting', component: 'ProjectForecasting' },
      { title: 'Automated Time Tracking', path: 'automated-time-tracking', component: 'AutomatedTimeTracking' },
      { title: 'Task Intent Recognition', path: 'task-intent-recognition', component: 'TaskIntentRecognition' },
      { title: 'Automated Risk Detection', path: 'automated-risk-detection', component: 'AutomatedRiskDetection' },
    ],
  },
  {
    key: 'calendar',
    path: '/calendar',
    sidebar: [
      { title: 'Adaptive Scheduling', path: 'adaptive-scheduling', component: 'AdaptiveScheduling' },
      { title: 'Milestone Tracking', path: 'milestone-tracking', component: 'MilestoneTracking' },
      { title: 'Personalized Views', path: 'personalized-views', component: 'PersonalizedViews' },
      { title: 'Focus Mode', path: 'focus-mode', component: 'FocusMode' },
    ],
  },
  {
    key: 'team',
    path: '/team',
    sidebar: [
      { title: 'Team Dashboard', path: 'team-dashboard', component: 'TeamDashboard' },
      { title: 'Sentiment Analysis', path: 'sentiment-analysis', component: 'SentimentAnalysis' },
      { title: 'Skill-Based Task Allocation', path: 'skill-based-task-allocation', component: 'SkillBasedTaskAllocation' },
      { title: 'Collaborative Tools', path: 'collaborative-tools', component: 'CollaborativeTools' },
      { title: 'Emotion-Aware Task Assignment', path: 'emotion-aware-task-assignment', component: 'EmotionAwareTaskAssignment' },
      { title: 'Private Social Media for Teams', path: 'private-social-media', component: 'PrivateSocialMedia' },
    ],
  },
  {
    key: 'analytics',
    path: '/analytics',
    sidebar: [
      { title: 'Custom Dashboards', path: 'custom-dashboards', component: 'CustomDashboards' },
      { title: 'AI-Driven Reporting', path: 'ai-driven-reporting', component: 'AIDrivenReporting' },
      { title: 'Trend Analysis', path: 'trend-analysis', component: 'TrendAnalysis' },
      { title: 'Real-Time Data Visualization', path: 'data-visualization', component: 'DataVisualization' },
    ],
  },
  {
    key: 'integrations',
    path: '/integrations',
    sidebar: [
      { title: 'Github & Code Tools', path: 'github-code-tools', component: 'GithubCodeTools' },
      { title: 'Slack, Microsoft Teams', path: 'slack-microsoft-teams', component: 'SlackMicrosoftTeams' },
      { title: 'Google Drive', path: 'google drive', component: 'GoogleDrive' },
      { title: 'Custom Integrations', path: 'custom-integrations', component: 'CustomIntegrations' },
    ],
  },
  {
    key: 'settings',
    path: '/settings',
    sidebar: [
      { title: 'Personalization', path: 'personalization', component: 'Personalization' },
      { title: 'Roles & Permissions', path: 'roles-and-permissions', component: 'RolesAndPermissions' },
      { title: 'Account Security', path: 'account-security', component: 'AccountSecurity' },
      { title: 'Billing & Plans', path: 'billing-plans', component: 'BillingPlans' },
    ],
  },
  {
    key: 'settings',
    path: '/settings',
    sidebar: [
      { title: 'Personalization', path: 'personalization', component: 'Personalization' },
      { title: 'Roles & Permissions', path: 'roles-and-permissions', component: 'RolesAndPermissions' },
      { title: 'Account Security', path: 'account-security', component: 'AccountSecurity' },
      { title: 'Billing & Plans', path: 'billing-plans', component: 'BillingPlans' },
    ],
  },
  {
    key: 'help',
    path: '/help',
    sidebar: [
      { title: 'Guides & Tutorials', path: 'guides-and-tutorials', component: 'Personalization' },
      { title: 'AI Assistence', path: 'ai-assistence', component: 'AIAssistence' },
      { title: 'Feedback Portal', path: 'feedback-portal', component: 'Feedback Portal' },
    ],
  },
];

export default dashboardConfig;
