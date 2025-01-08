import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Progress } from "../../../components/ui/progress";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Button } from "../../../components/ui/button";
import {
  Brain,
  AlertTriangle,
  Users,
  Clock,
  CalendarDays,
  Zap,
  RefreshCw,
} from "lucide-react";

const AiWidgets = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  // Simulated real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const tasks = [
    {
      id: 1,
      name: "API Integration",
      progress: 65,
      risk: "medium",
      start: "2024-01-01",
      end: "2024-01-15",
      assignee: "Alex",
    },
    {
      id: 2,
      name: "UI Components",
      progress: 80,
      risk: "low",
      start: "2024-01-05",
      end: "2024-01-20",
      assignee: "Sarah",
    },
    {
      id: 3,
      name: "Database Setup",
      progress: 45,
      risk: "high",
      start: "2024-01-10",
      end: "2024-01-25",
      assignee: "Mike",
    },
    {
      id: 4,
      name: "Testing Phase",
      progress: 30,
      risk: "medium",
      start: "2024-01-15",
      end: "2024-01-30",
      assignee: "Emma",
    },
  ];

  const teamWorkload = [
    { name: "Alex", load: 85, tasks: 4, prediction: "overloaded" },
    { name: "Sarah", load: 60, tasks: 3, prediction: "optimal" },
    { name: "Mike", load: 40, tasks: 2, prediction: "underutilized" },
    { name: "Emma", load: 75, tasks: 3, prediction: "high" },
  ];

  const SmartGanttChart = () => (
    <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-purple-400" />
          <CardTitle className="text-xl font-bold text-white">
            Smart Gantt Chart
          </CardTitle>
        </div>
        <Badge
          variant="outline"
          className="bg-purple-500/20 text-purple-400 border-purple-500/30 p-[5px]"
        >
          AI Predictions
        </Badge>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-6">
            {tasks.map((task) => (
              <div key={task.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{task.name}</span>
                    <Badge
                      variant="outline"
                      className={`${
                        task.risk === "high"
                          ? "bg-red-500/20 text-red-400"
                          : task.risk === "medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                      } p-[5px]`}
                    >
                      {task.risk} risk
                    </Badge>
                  </div>
                  <span className="text-gray-400 text-sm">{task.assignee}</span>
                </div>
                <div className="relative">
                  <Progress value={task.progress} className="h-2" />
                  <div
                    className="absolute -top-2 left-[60%] w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    title="AI Predicted Delay"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{task.start}</span>
                  <span>{task.end}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );

  const TaskProgressMeter = () => (
    <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-cyan-400" />
          <CardTitle className="text-xl font-bold text-white">
            Task Progress Meter
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {tasks.map((task) => (
            <div key={task.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{task.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">{task.progress}%</span>
                  <Badge
                    variant="outline"
                    className="bg-purple-500/20 text-purple-400 p-[5px]"
                  >
                    AI: {task.progress + 15}% expected
                  </Badge>
                </div>
              </div>
              <Progress value={task.progress} className="h-2" />
              <div className="flex justify-between text-xs text-gray-400">
                <span>Current: {task.progress}%</span>
                <span className="text-cyan-400">
                  AI Predicted: {task.progress + 15}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const TeamWorkloadHeatmap = () => (
    <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-yellow-400" />
          <CardTitle className="text-xl font-bold text-white">
            Team Workload Distribution
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {teamWorkload.map((member, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">{member.name}</span>
                  <span className="text-gray-400 text-sm">
                    {member.tasks} tasks
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className={`${
                    member.prediction === "overloaded"
                      ? "bg-red-500/20 text-red-400"
                      : member.prediction === "high"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : member.prediction === "optimal"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                  } p-[5px]`}
                >
                  {member.prediction}
                </Badge>
              </div>
              <div className="relative">
                <Progress
                  value={member.load}
                  className={`h-3 ${
                    member.load > 80
                      ? "bg-red-400"
                      : member.load > 60
                        ? "bg-yellow-400"
                        : "bg-green-400"
                  }`}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Current Load: {member.load}%</span>
                <span className="text-cyan-400">
                  AI Suggestion:{" "}
                  {member.prediction === "overloaded"
                    ? "Redistribute Tasks"
                    : member.prediction === "underutilized"
                      ? "Assign More Tasks"
                      : "Maintain Current Load"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="text-white container mx-auto px-4 py-8 max-w-7xl mt-[24px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered Project Widgets
              </h1>
              <Badge
                variant="outline"
                className="bg-purple-500/20 text-purple-400 border-purple-500/30 p-[5px]"
              >
                Real-time Updates
              </Badge>
            </div>
            <p className="mt-2 text-gray-400">
              Smart insights and predictions for your project timeline
            </p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setRefreshKey((prev) => prev + 1)}
            className="text-white hover:bg-white/10 border-[#2C3142]"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SmartGanttChart />
          <TaskProgressMeter />
          <TeamWorkloadHeatmap />
        </div>
      </div>
    </div>
  );
};

export default AiWidgets;
