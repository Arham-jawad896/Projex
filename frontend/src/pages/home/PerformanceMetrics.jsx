import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle } from 'lucide-react';

// Progress bar component
const ProgressBar = ({ value, label, color }) => {
  const percentage = Math.min(value, 100);
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-text-primary">{label}</span>
        <span className="text-sm font-medium text-text-primary">{`${percentage.toFixed(0)}%`}</span>
      </div>
      <div className="w-full bg-divider rounded-full h-2.5">
        <div className={`${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

// PerformanceMetrics component
const PerformanceMetrics = () => {
  // Data for Team Collaboration Trends (line chart)
  const collaborationData = useMemo(() => ([
    { name: 'Week 1', teamResponsiveness: 65, communicationEffectiveness: 60 },
    { name: 'Week 2', teamResponsiveness: 70, communicationEffectiveness: 65 },
    { name: 'Week 3', teamResponsiveness: 75, communicationEffectiveness: 80 },
    { name: 'Week 4', teamResponsiveness: 85, communicationEffectiveness: 88 },
    { name: 'Week 5', teamResponsiveness: 90, communicationEffectiveness: 95 },
  ]), []);

  // Data for AI-Powered Risk Insights (progress bars)
  const riskInsightsData = useMemo(() => [
    { label: 'Bottlenecks', value: 55, color: 'bg-yellow-700' },
    { label: 'Underperforming Areas', value: 40, color: 'bg-red-700' },
    { label: 'Burnout Indicators', value: 30, color: 'bg-orange-700' },
  ], []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-6 mt-[24px]">Performance Metrics</h1>
      </header>

      {/* Team Collaboration Trends Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-text-primary mb-6">Team Collaboration Trends</h2>
        <div className="bg-card-background p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-text-primary mb-4">
            Communication & Responsiveness Over Time
          </h3>
          <div className="relative" style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={collaborationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#d1d5db" />
                <YAxis stroke="#d1d5db" />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', color: '#d1d5db' }} />
                <Legend wrapperStyle={{ color: '#d1d5db' }} />
                <Line type="monotone" dataKey="teamResponsiveness" stroke="#38bdf8" fill="#38bdf8" />
                <Line type="monotone" dataKey="communicationEffectiveness" stroke="#9333ea" fill="#9333ea" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* AI-Powered Risk Insights Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-text-primary mb-6">AI-Powered Risk Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {riskInsightsData.map((risk, index) => (
            <div
              key={index}
              className="bg-card-background p-6 rounded-lg shadow-lg"
              aria-label={`Risk Insight - ${risk.label}`}
            >
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <AlertTriangle className="mr-3 text-text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-text-primary">{risk.label}</h3>
                </div>
                <p className="text-lg font-bold text-text-primary">{`${risk.value}%`}</p>
              </div>
              <ProgressBar value={risk.value} label="Risk Level" color={risk.color} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PerformanceMetrics;
