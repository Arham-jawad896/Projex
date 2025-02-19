import React, { useMemo, memo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  performance: <Zap className="h-5 w-5 text-purple-400" data-oid="mca4bxh" />,
  risk: (
    <AlertTriangle className="h-5 w-5 text-orange-400" data-oid="l_z8xux" />
  ),

  opportunity: (
    <Sparkles className="h-5 w-5 text-cyan-400" data-oid="jz4tgvy" />
  ),

  achievement: (
    <Trophy className="h-5 w-5 text-yellow-400" data-oid="nxuathw" />
  ),

  goal: <Target className="h-5 w-5 text-green-400" data-oid="_eeb:h1" />,
};

const getCategoryIcon = (category) =>
  categoryIconMap[category] || categoryIconMap.performance;

const impactColorMap = {
  high: "bg-green-500/20 text-green-400 border-green-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  low: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

const getImpactColor = (impact) => impactColorMap[impact] || impactColorMap.low;

// Memoized sub-components
const MetricProgress = memo(({ metric }) => (
  <div className="space-y-2" data-oid="4shb.dd">
    <div className="flex justify-between text-sm" data-oid="uf-:8wt">
      <span className="text-gray-400" data-oid="zv4a:xw">
        {metric.label}
      </span>
      <span className="text-white" data-oid="0x4uwvs">
        {metric.value}/{metric.total}
      </span>
    </div>
    <Progress
      value={(metric.value / metric.total) * 100}
      className="h-1.5"
      data-oid="c3vg:zn"
    />
  </div>
));

const TrendItem = memo(({ item }) => (
  <div className="flex justify-between text-sm" data-oid="7oa0uw0">
    <span className="text-gray-400" data-oid="qdo8h92">
      {item.date}
    </span>
    <span className="text-white font-medium" data-oid="fl2u3ca">
      {item.value}%
    </span>
  </div>
));

const InsightCard = memo(
  ({ title = "Task Summary", type = "tasks", data, chartData }) => {
    const [expanded, setExpanded] = React.useState(false);

    const icon = useMemo(() => {
      const iconMap = {
        tasks: (
          <Sparkles className="h-5 w-5 text-purple-400" data-oid="8eu1m2h" />
        ),

        blockers: (
          <AlertTriangle
            className="h-5 w-5 text-orange-400"
            data-oid="cb1vc85"
          />
        ),

        mood: <Users className="h-5 w-5 text-cyan-400" data-oid="9pzinnp" />,
      };
      return iconMap[type] || iconMap.tasks;
    }, [type]);

    const toggleExpanded = useCallback(() => setExpanded((prev) => !prev), []);

    return (
      <Card
        className="bg-[#1A1F2B]/80 backdrop-blur-sm text-white shadow-lg transition-all duration-300 border-[#2C3142] hover:border-[#3C4152]"
        data-oid="wh0.-_h"
      >
        <CardHeader
          className="flex flex-row items-center justify-between pb-2"
          data-oid="3oizdzs"
        >
          <div className="flex items-center gap-2" data-oid="gldxurr">
            {icon}
            <CardTitle className="text-xl font-bold" data-oid="8dldv46">
              {title}
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleExpanded}
            className="text-white hover:bg-white/10"
            data-oid="j9idnau"
          >
            {expanded ? (
              <ChevronUp className="h-5 w-5" data-oid="3rxe3qq" />
            ) : (
              <ChevronDown className="h-5 w-5" data-oid="-r26.7d" />
            )}
          </Button>
        </CardHeader>
        <CardContent data-oid="_ce:o4m">
          <div className="mb-6" data-oid="pb_5:dk">
            <div
              className="flex items-center justify-between"
              data-oid="a9vgq6y"
            >
              <div
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                data-oid="r7euqf3"
              >
                {data.value}%
              </div>
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded-full ${data.trend === "up" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
                data-oid="juae3hg"
              >
                {data.trend === "up" ? "+" : "-"}
                {data.change}%
              </div>
            </div>
          </div>

          <div className="space-y-4" data-oid="cot08qc">
            {data.subMetrics?.map((metric, index) => (
              <MetricProgress key={index} metric={metric} data-oid="h7zuqst" />
            ))}
          </div>

          {expanded && (
            <div className="mt-6 space-y-4" data-oid="ndq0owh">
              <div
                className="rounded-lg bg-[#2C3142]/50 p-4"
                data-oid="w01i0:f"
              >
                <h4 className="mb-4 font-semibold" data-oid="pbcd3fn">
                  Trend Analysis
                </h4>
                <div className="space-y-3" data-oid="vd:9ydz">
                  {chartData?.map((item, index) => (
                    <TrendItem key={index} item={item} data-oid="wy8-r.h" />
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
);

const InsightItem = memo(({ insight, isLast }) => (
  <div className="space-y-3 bg-[#2C3142]/30 rounded-lg p-4" data-oid="82lyi3a">
    <div className="space-y-2" data-oid="6p6.9qi">
      <div className="flex items-center justify-between" data-oid="gg_j.vb">
        <div className="flex items-center gap-2" data-oid="-jzt-_a">
          {getCategoryIcon(insight.category)}
          <h3 className="text-lg font-medium text-white" data-oid="m83c5mb">
            {insight.title}
          </h3>
        </div>
      </div>
      <p className="text-sm text-gray-400" data-oid="0knr0hj">
        {insight.description}
      </p>
      <div className="flex items-center gap-2 mt-2" data-oid="00ydf8f">
        {insight.impact && (
          <Badge
            variant="outline"
            className={`p-2 ${getImpactColor(insight.impact)}`}
            data-oid="iph1eeu"
          >
            {insight.impact} impact
          </Badge>
        )}
        {insight.timeframe && (
          <Badge
            variant="outline"
            className="bg-blue-500/20 text-blue-400 border-blue-500/30 p-2"
            data-oid="cj2mnc0"
          >
            {insight.timeframe}
          </Badge>
        )}
      </div>
    </div>
    {!isLast && (
      <Separator className="mt-4 bg-gray-800/50" data-oid="pe0ys6w" />
    )}
  </div>
));

const AiInsightsPanel = memo(({ insights = defaultInsights }) => (
  <Card
    className="h-[680px] w-[350px] bg-[#1A1F2B]/80 backdrop-blur-sm p-6 border-[#2C3142] hover:border-[#3C4152] transition-all duration-300"
    data-oid=".o10u3e"
  >
    <div className="flex items-center gap-2 mb-6" data-oid="6:6:2n2">
      <Brain className="h-6 w-6 text-purple-400" data-oid="usm3y2f" />
      <h2 className="text-xl font-bold text-white" data-oid="oqe4824">
        Projex AI Insights
      </h2>
    </div>

    <ScrollArea className="h-[600px] pr-4" data-oid="sl2ffq:">
      <div className="space-y-6" data-oid="dukfme2">
        {insights.map((insight, index) => (
          <InsightItem
            key={index}
            insight={insight}
            isLast={index === insights.length - 1}
            data-oid="1fpwwmt"
          />
        ))}
      </div>
    </ScrollArea>
  </Card>
));

const DashboardPage = () => {
  // Memoize static data
  const initialData = useMemo(
    () => ({
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
    }),
    [],
  );

  const chartData = useMemo(
    () => [
      { date: "Mon", value: 65 },
      { date: "Tue", value: 70 },
      { date: "Wed", value: 75 },
      { date: "Thu", value: 80 },
      { date: "Fri", value: 85 },
    ],

    [],
  );

  return (
    <main
      className="text-white container mx-auto px-4 py-8 max-w-7xl mt-[24px]"
      data-oid="b23utdc"
    >
      <header
        className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        data-oid="iguh5yi"
      >
        <div data-oid="os957v.">
          <div className="flex items-center gap-3" data-oid="9ha.kf8">
            <h1
              className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent px-4"
              data-oid="2z8q1ny"
            >
              Project Insights
            </h1>
            <Badge
              variant="outline"
              className="bg-purple-500/20 text-purple-400 border-purple-500/30 p-[5px]"
              data-oid="n7nh6n9"
            >
              AI Powered
            </Badge>
          </div>
          <p className="mt-2 text-gray-400 px-4" data-oid="1.p9of3">
            Real-time analytics and AI-driven insights for your project
          </p>
        </div>
      </header>

      <section className="bg-[#0A0E14] min-h-[700px] p-6" data-oid="nge.bgs">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          data-oid="djoa96x"
        >
          <div
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            data-oid="nm.pmb4"
          >
            <InsightCard
              title="Task Summary"
              type="tasks"
              data={initialData.taskSummary}
              chartData={chartData}
              data-oid="ywrgg8g"
            />

            <InsightCard
              title="Active Blockers"
              type="blockers"
              data={initialData.blockersSummary}
              chartData={chartData}
              data-oid="4jt6k-g"
            />

            <InsightCard
              title="Team Mood"
              type="mood"
              data={initialData.moodSummary}
              chartData={chartData}
              data-oid="ui:6yr:"
            />
          </div>
          <div className="lg:col-span-1" data-oid="5d.qdrn">
            <AiInsightsPanel data-oid="nm8w24o" />
          </div>
        </div>
      </section>
    </main>
  );
};

// Add display names for better debugging
InsightCard.displayName = "InsightCard";
AiInsightsPanel.displayName = "AiInsightsPanel";
MetricProgress.displayName = "MetricProgress";
TrendItem.displayName = "TrendItem";
InsightItem.displayName = "InsightItem";

export default DashboardPage;
