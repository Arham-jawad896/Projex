import React, { useMemo, memo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Separator } from "../../../components/ui/separator";
import { Progress } from "../../../components/ui/progress";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import {
  Brain,
  Sparkles,
  AlertTriangle,
  Zap,
  Trophy,
  Target,
  Calendar,
  Download,
  Share2,
  ChevronDown,
  ChevronUp,
  Users,
} from "lucide-react";

// Move static data outside component to prevent recreation
const defaultInsights = [
  {
    category: "performance",
    title: "Sprint Velocity Optimization",
    description:
      "AI predicts 25% velocity increase possible by redistributing tasks based on team member expertise and historical performance patterns.",
    impact: "high",
    timeframe: "Next Sprint",
  },
  {
    category: "risk",
    title: "Potential Bottleneck Alert",
    description:
      "Backend API development may become a bottleneck. Consider allocating additional resources or implementing caching strategies.",
    impact: "medium",
    timeframe: "2-3 days",
  },
  {
    category: "opportunity",
    title: "Cross-team Synergy",
    description:
      "Similar project patterns detected in Team Alpha. Potential for knowledge sharing and resource optimization.",
    impact: "medium",
    timeframe: "This Week",
  },
  {
    category: "achievement",
    title: "Quality Milestone",
    description:
      "Test coverage increased by 15% while maintaining velocity. Great balance of speed and quality!",
    impact: "high",
    timeframe: "Today",
  },
  {
    category: "goal",
    title: "Sprint Goal Progress",
    description:
      "On track to exceed sprint goals. Consider pulling in additional stories from the backlog.",
    impact: "high",
    timeframe: "3 days",
  },
];

// Memoize static functions and mappings
const categoryIconMap = {
  performance: <Zap className="h-5 w-5 text-purple-400" />,
  risk: <AlertTriangle className="h-5 w-5 text-orange-400" />,
  opportunity: <Sparkles className="h-5 w-5 text-cyan-400" />,
  achievement: <Trophy className="h-5 w-5 text-yellow-400" />,
  goal: <Target className="h-5 w-5 text-green-400" />,
};

const getCategoryIcon = (category) => categoryIconMap[category] || categoryIconMap.performance;

const impactColorMap = {
  high: "bg-green-500/20 text-green-400 border-green-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  low: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

const getImpactColor = (impact) => impactColorMap[impact] || impactColorMap.low;

// Memoized sub-components
const MetricProgress = memo(({ metric }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-gray-400">{metric.label}</span>
      <span className="text-white">
        {metric.value}/{metric.total}
      </span>
    </div>
    <Progress
      value={(metric.value / metric.total) * 100}
      className="h-1.5"
    />
  </div>
));

const TrendItem = memo(({ item }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-400">{item.date}</span>
    <span className="text-white font-medium">{item.value}%</span>
  </div>
));

const InsightCard = memo(({
  title = "Task Summary",
  type = "tasks",
  data,
  chartData,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const icon = useMemo(() => {
    const iconMap = {
      tasks: <Sparkles className="h-5 w-5 text-purple-400" />,
      blockers: <AlertTriangle className="h-5 w-5 text-orange-400" />,
      mood: <Users className="h-5 w-5 text-cyan-400" />,
    };
    return iconMap[type] || iconMap.tasks;
  }, [type]);

  const toggleExpanded = useCallback(() => setExpanded(prev => !prev), []);

  return (
    <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm text-white shadow-lg transition-all duration-300 border-[#2C3142] hover:border-[#3C4152]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleExpanded}
          className="text-white hover:bg-white/10"
        >
          {expanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {data.value}%
            </div>
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full ${data.trend === "up" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
            >
              {data.trend === "up" ? "+" : "-"}
              {data.change}%
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {data.subMetrics?.map((metric, index) => (
            <MetricProgress key={index} metric={metric} />
          ))}
        </div>

        {expanded && (
          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-[#2C3142]/50 p-4">
              <h4 className="mb-4 font-semibold">Trend Analysis</h4>
              <div className="space-y-3">
                {chartData?.map((item, index) => (
                  <TrendItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
});

const InsightItem = memo(({ insight, isLast }) => (
  <div className="space-y-3 bg-[#2C3142]/30 rounded-lg p-4">
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getCategoryIcon(insight.category)}
          <h3 className="text-lg font-medium text-white">
            {insight.title}
          </h3>
        </div>
      </div>
      <p className="text-sm text-gray-400">{insight.description}</p>
      <div className="flex items-center gap-2 mt-2">
        {insight.impact && (
          <Badge
            variant="outline"
            className={`p-2 ${getImpactColor(insight.impact)}`}
          >
            {insight.impact} impact
          </Badge>
        )}
        {insight.timeframe && (
          <Badge
            variant="outline"
            className="bg-blue-500/20 text-blue-400 border-blue-500/30 p-2"
          >
            {insight.timeframe}
          </Badge>
        )}

      </div>
    </div>
    {!isLast && <Separator className="mt-4 bg-gray-800/50" />}
  </div>
));

const AiInsightsPanel = memo(({ insights = defaultInsights }) => (
  <Card className="h-[680px] w-[350px] bg-[#1A1F2B]/80 backdrop-blur-sm p-6 border-[#2C3142] hover:border-[#3C4152] transition-all duration-300">
    <div className="flex items-center gap-2 mb-6">
      <Brain className="h-6 w-6 text-purple-400" />
      <h2 className="text-xl font-bold text-white">Projex AI Insights</h2>
    </div>

    <ScrollArea className="h-[600px] pr-4">
      <div className="space-y-6">
        {insights.map((insight, index) => (
          <InsightItem
            key={index}
            insight={insight}
            isLast={index === insights.length - 1}
          />
        ))}
      </div>
    </ScrollArea>
  </Card>
));

const DashboardPage = () => {
  // Memoize static data
  const initialData = useMemo(() => ({
    taskSummary: {
      value: 85,
      trend: "up",
      change: 12,
      subMetrics: [
        { label: "In Progress", value: 12, total: 15 },
        { label: "Code Review", value: 5, total: 8 },
        { label: "QA", value: 3, total: 5 },
      ],
    },
    blockersSummary: {
      value: 3,
      trend: "down",
      change: 2,
      subMetrics: [
        { label: "Critical", value: 1, total: 5 },
        { label: "High", value: 2, total: 8 },
        { label: "Medium", value: 5, total: 12 },
      ],
    },
    moodSummary: {
      value: 92,
      trend: "up",
      change: 5,
      subMetrics: [
        { label: "Satisfaction", value: 9, total: 10 },
        { label: "Engagement", value: 8, total: 10 },
        { label: "Work-Life", value: 7, total: 10 },
      ],
    },
  }), []);

  const chartData = useMemo(() => [
    { date: "Mon", value: 65 },
    { date: "Tue", value: 70 },
    { date: "Wed", value: 75 },
    { date: "Thu", value: 80 },
    { date: "Fri", value: 85 },
  ], []);

  return (
    <main className="text-white container mx-auto px-4 py-8 max-w-7xl mt-[24px]">
      <header className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent px-4">
              Project Insights
            </h1>
            <Badge
              variant="outline"
              className="bg-purple-500/20 text-purple-400 border-purple-500/30 p-[5px]"
            >
              AI Powered
            </Badge>
          </div>
          <p className="mt-2 text-gray-400 px-4">
            Real-time analytics and AI-driven insights for your project
          </p>
        </div>
      </header>

      <section className="bg-[#0A0E14] min-h-[700px] p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <InsightCard
              title="Task Summary"
              type="tasks"
              data={initialData.taskSummary}
              chartData={chartData}
            />
            <InsightCard
              title="Active Blockers"
              type="blockers"
              data={initialData.blockersSummary}
              chartData={chartData}
            />
            <InsightCard
              title="Team Mood"
              type="mood"
              data={initialData.moodSummary}
              chartData={chartData}
            />
          </div>
          <div className="lg:col-span-1">
            <AiInsightsPanel />
          </div>
        </div>
      </section>
    </main>
  );
};

// Add display names for better debugging
InsightCard.displayName = 'InsightCard';
AiInsightsPanel.displayName = 'AiInsightsPanel';
MetricProgress.displayName = 'MetricProgress';
TrendItem.displayName = 'TrendItem';
InsightItem.displayName = 'InsightItem';

export default DashboardPage;