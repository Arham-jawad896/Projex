import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Brain,
  AlertTriangle,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Timer,
  Zap,
  Bell,
  Calendar,
} from "lucide-react";

const AIPoweredForecasting = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [showRiskDialog, setShowRiskDialog] = useState(false);
  const [riskDetails, setRiskDetails] = useState(null);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "API Integration",
      deadline: "2024-02-15",
      risk: "high",
      riskReason: "Dependencies not resolved",
      suggestedDeadline: "2024-02-20",
      priority: 1,
      suggestedPriority: 3,
      notifications: [
        {
          type: "risk",
          message: "Critical dependency missing",
          impact: "high",
          timestamp: "2 hours ago",
        },
      ],
    },
    {
      id: 2,
      name: "User Authentication",
      deadline: "2024-02-10",
      risk: "medium",
      riskReason: "Resource availability concern",
      suggestedDeadline: "2024-02-12",
      priority: 2,
      suggestedPriority: 1,
      notifications: [
        {
          type: "risk",
          message: "Resource allocation needed",
          impact: "medium",
          timestamp: "1 hour ago",
        },
      ],
    },
    {
      id: 3,
      name: "Dashboard UI",
      deadline: "2024-02-18",
      risk: "low",
      riskReason: "On track",
      suggestedDeadline: "2024-02-18",
      priority: 3,
      suggestedPriority: 2,
      notifications: [],
    },
  ]);

  const [milestones, setMilestones] = useState([
    {
      name: "Beta Release",
      date: "2024-03-01",
      risk: "medium",
      impactedBy: ["API Integration", "User Authentication"],
      aiSuggestion: "Consider splitting into two phases",
      notifications: [
        {
          type: "warning",
          message: "Timeline at risk due to API delays",
          impact: "medium",
          timestamp: "1 hour ago",
        },
      ],
    },
    {
      name: "Security Audit",
      date: "2024-02-25",
      risk: "high",
      impactedBy: ["User Authentication"],
      aiSuggestion: "Schedule preliminary review earlier",
      notifications: [
        {
          type: "risk",
          message: "Security vulnerabilities detected",
          impact: "high",
          timestamp: "30 minutes ago",
        },
      ],
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleAcceptSuggestion = (taskId, type) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            deadline:
              type === "deadline" ? task.suggestedDeadline : task.deadline,
            priority:
              type === "priority" ? task.suggestedPriority : task.priority,
            notifications: task.notifications.filter((n) => n.type !== type),
          };
        }
        return task;
      }),
    );
  };

  const handleShowRiskDetails = (item, type) => {
    setRiskDetails({ ...item, type });
    setShowRiskDialog(true);
  };

  return (
    <div className="text-white container mx-auto px-4 py-8 max-w-7xl mt-[24px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered Forecasting
              </h1>
              <Badge
                variant="outline"
                className="bg-purple-500/20 text-purple-400 border-purple-500/30"
              >
                Predictive Insights
              </Badge>
            </div>
            <p className="mt-2 text-gray-400">
              Smart task prioritization and risk analysis
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
          {/* Risk Notifications */}
          <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-400" />
                <CardTitle className="text-xl font-bold">
                  Task & Milestone Risks
                </CardTitle>
              </div>
              <Badge
                variant="outline"
                className="bg-purple-500/20 text-purple-400"
              >
                {tasks.filter((t) => t.risk === "high").length} Critical
              </Badge>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="bg-[#2C3142]/50 p-4 rounded-lg space-y-3 cursor-pointer hover:bg-[#2C3142]/70 transition-colors"
                      onClick={() =>
                        handleShowRiskDetails(milestone, "milestone")
                      }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Timer className="h-4 w-4 text-purple-400" />
                          <span className="font-medium">{milestone.name}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className={`${milestone.risk === "high" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`}
                        >
                          {milestone.risk} risk
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-400">
                        Due: {milestone.date}
                      </div>
                      <div className="text-sm space-y-1">
                        <div className="text-orange-400 flex items-center gap-2">
                          <AlertTriangle className="h-3 w-3" />
                          Impacted by: {milestone.impactedBy.join(", ")}
                        </div>
                        <div className="text-cyan-400 flex items-center gap-2">
                          <Brain className="h-3 w-3" />
                          {milestone.aiSuggestion}
                        </div>
                      </div>
                      {milestone.notifications.map((notification, i) => (
                        <div
                          key={i}
                          className="mt-2 p-2 bg-[#2C3142]/30 rounded-lg"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Bell className="h-4 w-4 text-orange-400" />
                              <span className="text-sm text-orange-400">
                                {notification.message}
                              </span>
                            </div>
                            <Badge
                              variant="outline"
                              className={`${notification.impact === "high" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`}
                            >
                              {notification.impact}
                            </Badge>
                          </div>
                          <div className="mt-2 text-sm text-gray-400">
                            {notification.timestamp}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}

                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-[#2C3142]/50 p-4 rounded-lg space-y-3 cursor-pointer hover:bg-[#2C3142]/70 transition-colors"
                      onClick={() => handleShowRiskDetails(task, "task")}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-purple-400" />
                          <span className="font-medium">{task.name}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className={`${
                            task.risk === "high"
                              ? "bg-red-500/20 text-red-400"
                              : task.risk === "medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {task.risk} risk
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-400">
                        Current Deadline: {task.deadline}
                      </div>
                      <div className="text-sm space-y-1">
                        <div className="text-orange-400 flex items-center gap-2">
                          <AlertTriangle className="h-3 w-3" />
                          {task.riskReason}
                        </div>
                      </div>
                      {task.notifications.map((notification, i) => (
                        <div
                          key={i}
                          className="mt-2 p-2 bg-[#2C3142]/30 rounded-lg"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Bell className="h-4 w-4 text-orange-400" />
                              <span className="text-sm text-orange-400">
                                {notification.message}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className={`${notification.impact === "high" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`}
                              >
                                {notification.impact}
                              </Badge>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 text-green-400 hover:text-green-300 hover:bg-green-400/10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAcceptSuggestion(
                                    task.id,
                                    notification.type,
                                  );
                                }}
                              >
                                Accept
                              </Button>
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-gray-400">
                            {notification.timestamp}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Predictive Re-Prioritization */}
          <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-cyan-400" />
                <CardTitle className="text-xl font-bold">
                  AI Task Re-Prioritization
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-[#2C3142]/50 p-4 rounded-lg space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{task.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="bg-purple-500/20 text-purple-400"
                          >
                            Priority {task.priority}
                          </Badge>
                          <Zap className="h-4 w-4 text-cyan-400" />
                          <Badge
                            variant="outline"
                            className="bg-cyan-500/20 text-cyan-400"
                          >
                            Suggested {task.suggestedPriority}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="space-y-1">
                          <div className="text-gray-400">Current Deadline</div>
                          <div className="font-medium">{task.deadline}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                        <div className="space-y-1">
                          <div className="text-cyan-400">AI Suggested</div>
                          <div className="font-medium text-cyan-400">
                            {task.suggestedDeadline}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="text-sm text-cyan-400 flex items-center gap-2">
                          <Brain className="h-3 w-3" />
                          Suggestion based on risk analysis
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-400 border-green-400/20 hover:bg-green-400/10"
                            onClick={() =>
                              handleAcceptSuggestion(task.id, "deadline")
                            }
                          >
                            Accept
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-gray-400 border-gray-400/20 hover:bg-gray-400/10"
                            onClick={() => setSelectedTask(task)}
                          >
                            Modify
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Risk Details Dialog */}
        <Dialog open={showRiskDialog} onOpenChange={setShowRiskDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{riskDetails?.name} Risk Analysis</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Risk Level</h4>
                <Badge
                  variant="outline"
                  className={`${
                    riskDetails?.risk === "high"
                      ? "bg-red-500/20 text-red-400"
                      : riskDetails?.risk === "medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {riskDetails?.risk} risk
                </Badge>
              </div>

              {riskDetails?.notifications?.map((notification, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-sm font-medium">Risk Alert</h4>
                  <div className="p-3 bg-[#2C3142]/50 rounded-lg">
                    <div className="flex items-center gap-2 text-orange-400">
                      <AlertTriangle className="h-4 w-4" />
                      <span>{notification.message}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
                      {notification.timestamp}
                    </div>
                  </div>
                </div>
              ))}

              {riskDetails?.type === "task" && (
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    className="text-green-400 border-green-400/20 hover:bg-green-400/10"
                    onClick={() => {
                      handleAcceptSuggestion(riskDetails.id, "deadline");
                      setShowRiskDialog(false);
                    }}
                  >
                    Accept Suggestion
                  </Button>
                  <Button
                    variant="outline"
                    className="text-gray-400 border-gray-400/20 hover:bg-gray-400/10"
                    onClick={() => setShowRiskDialog(false)}
                  >
                    Review Later
                  </Button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AIPoweredForecasting;
