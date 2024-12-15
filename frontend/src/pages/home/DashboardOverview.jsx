import React, { memo, useMemo } from 'react';
import { ChartBar, Clock, TrendingUp, Users, AlertTriangle } from 'lucide-react';

// Memoized Card Component to prevent unnecessary re-renders
const Card = memo(({ 
  title, 
  children, 
  className = '', 
  icon: Icon = null 
}) => {
  return (
    <div 
      className={`bg-card-background w-full max-w-md p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-card-hover ${className}`}
      aria-labelledby={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex items-center mb-4">
        {Icon && <Icon className="mr-3 text-text-primary" size={24} />}
        <h2 
          id={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`} 
          className="text-2xl font-semibold text-text-primary"
        >
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
});

// Memoized Progress Indicator Component
const ProgressBar = memo(({ 
  value, 
  max = 100, 
  label, 
  color = 'bg-progressBar' 
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="mb-4" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax={max}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-text-primary">{label}</span>
        <span className="text-sm font-medium text-text-primary">{`${percentage.toFixed(0)}%`}</span>
      </div>
      <div className="w-full bg-divider rounded-full h-2.5">
        <div 
          className={`${color} h-2.5 rounded-full transition-all duration-500`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
});

// Memoized Role-Based Dashboard Section with useMemo for project columns
const RoleBasedDashboard = memo(() => {
  const projectColumns = useMemo(() => [
    { title: 'Project Timeline', content: 'Timeline Visualization' },
    { title: 'Project Status', content: 'Status Overview' },
    { title: 'Resource Allocation', content: 'Resource Distribution' }
  ], []);

  return (
    <div 
      className="w-full max-w-5xl bg-card-background rounded-lg p-6 shadow-lg"
      aria-label="Role-Based Project Dashboard"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectColumns.map((column, index) => (
          <div 
            key={index} 
            className="bg-card-background rounded-lg p-4"
            aria-label={column.title}
          >
            <h3 className="text-lg font-medium text-text-primary mb-3">
              {column.title}
            </h3>
            <div className="w-full h-32 bg-card-header rounded-md flex items-center justify-center text-text-secondary">
              {column.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

// Memoized Metrics Grid to prevent unnecessary re-renders
const MetricsGrid = memo(() => {
  const metrics = useMemo(() => [
    { label: "On-Time Delivery", value: "92%", icon: Clock },
    { label: "Customer Satisfaction", value: "88%", icon: Users },
    { label: "Revenue Growth", value: "15%", icon: TrendingUp },
    { label: "New Users", value: "540", icon: Users }
  ], []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-2">
            <metric.icon className="text-text-primary" size={20} />
          </div>
          <p className="text-sm text-white mb-1">{metric.label}</p>
          <h3 className="text-xl font-semibold text-text-primary">{metric.value}</h3>
        </div>
      ))}
    </div>
  );
});

// Main Overview Component with performance optimizations
const Overview = memo(() => {
  const projectProgressData = useMemo(() => [
    { name: "Project Alpha", progress: 75 },
    { name: "Project Beta", progress: 45 },
    { name: "Project Gamma", progress: 90 }
  ], []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl mt-[24px]">
      <header className="mb-12">
        <h1 
          className="text-4xl font-bold text-text-primary mb-6"
          data-testid="dashboard-title"
        >
          Dashboard Overview
        </h1>
      </header>

      {/* Key Performance Cards */}
      <section 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        aria-label="Key Performance Indicators"
      >
        {/* Overall Progress Card */}
        <Card 
          title="Overall Progress" 
          icon={ChartBar}
          className="flex flex-col"
        >
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center justify-center border-4 border-divider w-20 h-20 rounded-full bg-gradient-to-r from-cyan-700 to-blue-800"
              aria-label="Total Project Progress"
            >
              <span className="text-2xl font-bold text-white">78%</span>
            </div>
            <div className="text-right text-text-secondary">
              <p className="text-white">5 Projects</p>
              <p className="text-white">23 Tasks Remaining</p>
            </div>
          </div>
        </Card>

        {/* Health Scores Card */}
        <Card 
          title="Health Scores" 
          icon={AlertTriangle}
        >
          <ProgressBar 
            value={85} 
            label="Project A" 
            color="bg-green-700"
          />
          <ProgressBar 
            value={65} 
            label="Project B" 
            color="bg-yellow-700"
          />
          <ProgressBar 
            value={40} 
            label="Project C" 
            color="bg-red-700"
          />
        </Card>

        {/* Key Metrics Card */}
        <Card 
          title="Key Metrics" 
          icon={TrendingUp}
        >
          <MetricsGrid />
        </Card>
      </section>

      {/* Role-Based Dashboard */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-6">
          Role-Based Dashboard
        </h2>
        <RoleBasedDashboard />
      </section>

      {/* Dashboard Insights */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Smart Gantt Chart */}
        <div 
          className="bg-card-background rounded-lg p-6 shadow-lg"
          aria-label="Smart Gantt Chart"
        >
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Smart Gantt Chart
          </h3>
          <div className="w-full h-64 bg-gradient-to-br from-indigo-800 to-teal-700 rounded-md mb-4"></div>
          <div className="flex justify-between text-text-secondary">
            <span>Risks: 3</span>
            <span>Delays: 2</span>
            <span>Upcoming Milestones: 5</span>
          </div>
        </div>

        {/* Task Progress Meter */}
        <div 
          className="bg-card-background rounded-lg p-6 shadow-lg"
          aria-label="Task Progress Meter"
        >
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Task Progress Meter
          </h3>
          {projectProgressData.map((project, index) => (
            <ProgressBar 
              key={index}
              value={project.progress} 
              label={project.name}
              color={ 
                project.progress > 80 ? 'bg-green-700' : 
                project.progress > 50 ? 'bg-yellow-700' : 
                'bg-red-700'
              }
            />
          ))}
          <p className="text-sm text-white mt-2">
            AI-predicted completion rates shown
          </p>
        </div>
      </section>

      {/* Team Workload Distribution */}
      <section 
        className="bg-card-background rounded-lg p-6 mt-6 shadow-lg"
        aria-label="Team Workload Distribution"
      >
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          Team Workload Distribution
        </h3>
        <div className="w-full h-64 bg-gradient-to-r from-indigo-800 to-teal-700 rounded-md flex items-center justify-center">
          <p className="text-white font-semibold">Workload Visualization</p>
        </div>
      </section>
    </div>
  );
});

export default Overview;
