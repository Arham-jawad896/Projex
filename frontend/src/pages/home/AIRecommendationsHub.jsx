import React, { memo } from "react";
import { AlertTriangleIcon, CheckCircle2, LineChart, Activity } from "lucide-react";
import PropTypes from "prop-types";

const Card = memo(({ title, children, className = "", icon: Icon = null }) => {
    return (
        <div
            className={`p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${className}`}
            aria-labelledby={`card-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
        >
            <header className="flex items-center mb-4">
                {Icon && <Icon className="mr-3 text-white" size={24} alt={`${title} icon`} />}
                <h2
                    id={`card-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-2xl font-extrabold text-white tracking-wide"
                >
                    {title}
                </h2>
            </header>
            {children}
        </div>
    );
});

Card.displayName = "Card";

Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.elementType,
};

const AISuggestion = ({ title, description, className = "" }) => {
    return (
        <article
            className={`bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}
        >
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400 mt-2">{description}</p>
        </article>
    );
};

AISuggestion.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
};

const AIRecommendationsHub = () => {
    return (
        <main className="container mx-auto px-6 py-8 max-w-7xl mt-6">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-5xl font-extrabold text-white tracking-tight">
                    AI Recommendations Hub
                </h1>
                <p className="text-sm text-gray-400">Enhanced insights for project management</p>
            </header>

            {/* Milestone Adjustments */}
            <Card
                title="Milestone Adjustments"
                className="bg-gradient-to-r from-blue-800 to-blue-900"
                icon={LineChart}
            >
                <div className="space-y-4">
                    <AISuggestion
                        title="Extend Sprint Deadlines"
                        description="AI recommends extending sprint deadlines by 3 days based on current task velocity."
                    />
                    <AISuggestion
                        title="Adjust Scope"
                        description="Refine project scope to prioritize tasks with higher ROI."
                    />
                </div>
            </Card>

            {/* Workload Balancer */}
            <Card
                title="Workload Balancer"
                className="bg-gradient-to-r from-green-800 to-green-900 mt-8"
                icon={CheckCircle2}
            >
                <div className="space-y-4">
                    <AISuggestion
                        title="Redistribute High-Priority Tasks"
                        description="Balance workloads by assigning high-priority tasks to underutilized team members."
                    />
                    <AISuggestion
                        title="Reduce Overload"
                        description="Suggests limiting task assignments to prevent burnout for overloaded team members."
                    />
                </div>
            </Card>

            {/* Team Health Pulse */}
            <Card
                title="Team Health Pulse"
                className="bg-gradient-to-r from-red-800 to-red-900 mt-8"
                icon={Activity}
            >
                <div className="space-y-4">
                    <AISuggestion
                        title="Burnout Risk Detected"
                        description="Metrics indicate increased stress levels. Consider scheduling a team check-in."
                    />
                    <AISuggestion
                        title="Boost Morale"
                        description="Encourage casual virtual meetings or team-building exercises."
                    />
                </div>
            </Card>
        </main>
    );
};

export default AIRecommendationsHub;
