// eslint-disable-next-line no-unused-vars
import React from 'react';
import { AlertTriangle } from 'lucide-react';

// Progress bar component
// eslint-disable-next-line react/prop-types
const ProgressBar = ({ value, label, color }) => {
  const percentage = Math.min(value, 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-text-primary">{label}</span>
        <span className="text-sm font-medium text-text-primary">{`${percentage.toFixed(0)}%`}</span>
      </div>
      <div className="w-full bg-divider rounded-full h-3">
        <div className={`${color} h-3 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const AIForecasting = () => {
  // Example data for Task and Milestone Risk Notifications
  const riskData = [
    { label: 'Missed Deadlines', value: 75, color: 'bg-red-600' },
    { label: 'Resource Constraints', value: 60, color: 'bg-yellow-600' },
    { label: 'Dependency Risks', value: 50, color: 'bg-orange-600' },
  ];

  // Example data for Predictive Task Re-Prioritization
  const taskSuggestions = [
    { task: 'Finalize Design Review', priority: 'High', suggestion: 'Move deadline forward by 2 days to align with development.' },
    { task: 'Backend Integration Testing', priority: 'Medium', suggestion: 'Allocate additional resources to meet sprint goals.' },
    { task: 'Prepare Client Presentation', priority: 'Low', suggestion: 'Extend deadline by 3 days to ensure quality.' },
  ];
  // https://www.figma.com/design/txNFradFfQFQecddS11h3n/Untitled?node-id=46-2&t=7cN6H4pXjhrHAKzw-4
  return (
    <main className="container mx-auto px-4 py-10 max-w-7xl">
      {/* Header Section */}
      <header className="mb-14 text-center">
        <h1 className="text-4xl font-extrabold text-text-primary leading-tight mb-4 mt-[24px]">AI-Powered Forecasting</h1>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Leverage cutting-edge AI to proactively manage risks and optimize task priorities, ensuring seamless project execution and success.
        </p>
      </header>

      {/* Task and Milestone Risk Notifications Section */}
      <section className="mb-14">
        <h2 className="text-3xl font-bold text-text-primary mb-8">Task and Milestone Risk Notifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {riskData.map((risk, index) => (
            <article
              key={index}
              className="bg-card-background p-6 rounded-lg shadow-md hover:shadow-lg transition"
              aria-label={`Risk Notification - ${risk.label}`}
            >
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <AlertTriangle className="mr-3 text-text-primary" size={24} />
                  <h3 className="text-xl font-semibold text-text-primary">{risk.label}</h3>
                </div>
                <p className="text-lg font-bold text-text-primary">{`${risk.value}%`}</p>
              </div>
              <ProgressBar value={risk.value} label="Risk Level" color={risk.color} />
            </article>
          ))}
        </div>
      </section>

      {/* Predictive Task Re-Prioritization Section */}
      <section className="mb-14">
        <h2 className="text-3xl font-bold text-text-primary mb-8">Predictive Task Re-Prioritization</h2>
        <div className="bg-card-background p-6 rounded-lg shadow-md">
          <table className="w-full text-text-primary">
            <thead>
              <tr className="text-left text-lg font-semibold border-b border-divider">
                <th className="py-4">Task</th>
                <th className="py-4">Priority</th>
                <th className="py-4">AI Suggestion</th>
              </tr>
            </thead>
            <tbody>
              {taskSuggestions.map((task, index) => (
                <tr key={index} className="hover:bg-divider/25 transition">
                  <td className="py-4 text-base font-medium">{task.task}</td>
                  <td className="py-4 text-base font-medium capitalize text-highlight">{task.priority}</td>
                  <td className="py-4 text-base font-light">{task.suggestion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default AIForecasting;
