// eslint-disable-next-line no-unused-vars
import React, { memo, useState, useEffect, useMemo } from "react";
import { AlertTriangleIcon, CheckCircle2, LineChart } from "lucide-react";
import PropTypes from "prop-types";

// Card component for sleek and modern design
const Card = memo(({ title, children, className = "", icon: Icon = null }) => {
    return (
        <div
            className={`bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l ${className}`}
            aria-labelledby={`card-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
        >
            <header className="flex items-center mb-4">
                {Icon && <Icon className="mr-3 text-gold-500" size={24} alt={`${title} icon`} />}
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

const DailyInsights = () => {
    const [heights, setHeights] = useState([]);

    // Memoize random heights to avoid recalculating on re-renders
    useEffect(() => {
        const randomHeights = Array.from({ length: 5 }, () => Math.floor(Math.random() * 250) + 50);
        setHeights(randomHeights);
    }, []);

    // Memoized days array to prevent unnecessary recalculations
    const days = useMemo(() => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], []);

    return (
        <main className="container mx-auto px-6 py-8 max-w-7xl mt-6">
            <header className="flex justify-between items-center mb-6">
                <h1
                    className="text-5xl font-extrabold text-white tracking-tight"
                    data-testid="dashboard-title"
                >
                    Daily Insights
                </h1>
                <p className="text-sm text-gray-400">Today, December 13, 2024</p>
            </header>
            <button
                className="bg-gradient-to-r from-gold-500 to-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white font-medium shadow-lg transition duration-300 transform hover:scale-105"
                aria-label="Export Report"
            >
                Export Report
            </button>

            {/* Team Summary Section */}
            <Card title="Team Summary" className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="flex flex-col justify-between bg-gradient-to-r from-teal-700 to-teal-900 p-6 rounded-2xl shadow-2xl text-white transform hover:scale-105 transition-all">
                        <CheckCircle2 className="self-end text-teal-500" />
                        <div>
                            <h3 className="text-lg font-semibold">Completed Tasks</h3>
                            <p className="text-4xl font-extrabold">24/30</p>
                            <p className="text-sm text-gray-400">+15% from yesterday</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-gradient-to-r from-red-800 to-red-900 p-6 rounded-2xl shadow-2xl text-white transform hover:scale-105 transition-all">
                        <AlertTriangleIcon className="self-end text-yellow-400" />
                        <div>
                            <h3 className="text-lg font-semibold">Blockers</h3>
                            <p className="text-4xl font-extrabold">3</p>
                            <p className="text-sm text-gray-400">Critical attention needed</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-gradient-to-r from-indigo-800 to-indigo-900 p-6 rounded-2xl shadow-2xl text-white transform hover:scale-105 transition-all">
                        <LineChart className="self-end text-indigo-400" />
                        <div>
                            <h3 className="text-lg font-semibold">Team Performance</h3>
                            <p className="text-4xl font-extrabold">92%</p>
                            <p className="text-sm text-gray-400">Above target</p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* AI Suggestions Section */}
            <Card title="AI Suggestions" className="mt-8">
                <div className="flex flex-col gap-6">
                    <AISuggestion
                        title="Optimize Sprint Planning"
                        description="Consider redistributing tasks based on current velocity metrics."
                    />
                    <AISuggestion
                        title="Improve Collaboration"
                        description="Encourage daily stand-ups to ensure blockers are addressed sooner."
                    />
                </div>
            </Card>

            {/* Team Mood Tracker Section */}
            {/* Team Mood Tracker Section */}
<Card title="Team Mood Tracker" className="mt-8">
    {/* Container for both the Design Team cards and the bar chart */}
    <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
        {/* Design Team Card 1 */}
        <div className="flex justify-between items-center bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-6 shadow-xl text-white w-full md:w-[588px]">
            <h1 className="text-lg font-semibold text-gray-300">Design Team</h1>
            <h1 className="text-sm text-green-400 font-light">Very Positive</h1>
        </div>

        {/* Design Team Card 2 */}
        <div className="flex justify-between items-center bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-6 shadow-xl text-white w-full md:w-[588px]">
            <h1 className="text-lg font-semibold text-gray-300">Design Team</h1>
            <h1 className="text-sm text-green-400 font-light">Very Positive</h1>
        </div>
    </div>

    {/* Bar Chart Section */}
    <div className="w-full md:w-[588px] h-[316px] mt-6 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800">
        <div className="flex items-end justify-between space-x-4 h-full p-4">
            {heights.map((height, index) => (
                <div key={index} className="flex flex-col items-center w-full sm:w-auto">
                    <div
                        style={{
                            height: `${Math.max(height, 50)}px`, // Ensure a minimum height
                            width: '95%', // Make the width responsive
                        }}
                        className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-t-xl transition-all"
                    />
                    <p className="text-sm text-white mt-2">{days[index]}</p>
                </div>
            ))}
        </div>
    </div>
</Card>

        </main>
    );
};

export default DailyInsights;
