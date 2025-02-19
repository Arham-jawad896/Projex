import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Brain,
  AlertTriangle,
  Users,
  Clock,
  CalendarDays,
  Zap,
  RefreshCw,
  Heart,
  ArrowRight,
} from "lucide-react";

const AIRecommendationsHub = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const milestones = [
    {
      name: "Beta Launch",
      originalDate: "2024-03-15",
      suggestedDate: "2024-03-20",
      reason: "Resource constraints in QA team",
      impact: "medium",
      scope: ["Reduce initial feature set", "Phase testing cycles"],
    },
    {
      name: "Security Audit",
      originalDate: "2024-02-28",
      suggestedDate: "2024-03-05",
      reason: "Additional compliance requirements",
      impact: "high",
      scope: ["Split into multiple sessions", "Prioritize critical modules"],
    },
  ];

  const teamWorkload = [
    { name: "Frontend Team", current: 85, suggested: 70, tasks: 12 },
    { name: "Backend Team", current: 65, suggested: 75, tasks: 8 },
    { name: "DevOps Team", current: 90, suggested: 70, tasks: 15 },
  ];

  const healthMetrics = [
    {
      team: "Product Team",
      metrics: {
        collaboration: 85,
        productivity: 78,
        satisfaction: 72,
      },
      risks: ["High meeting load", "Sprint pressure"],
      suggestions: [
        "Implement no-meeting Wednesdays",
        "Review sprint capacity",
      ],
    },
    {
      team: "Engineering Team",
      metrics: {
        collaboration: 92,
        productivity: 88,
        satisfaction: 85,
      },
      risks: ["Approaching deadline pressure"],
      suggestions: ["Consider deadline extension", "Add temporary resources"],
    },
  ];

  return (
    <div className="text-white container mx-auto px-4 py-8 max-w-7xl mt-[24px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Recommendations Hub
              </h1>
              <Badge
                variant="outline"
                className="bg-purple-500/20 text-purple-400 border-purple-500/30"
              >
                Real-time Analysis
              </Badge>
            </div>
            <p className="mt-2 text-gray-400">
              Smart insights and recommendations for project optimization
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Milestone Adjustments */}
          <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-purple-400" />

                <CardTitle className="text-xl font-bold">
                  Milestone Adjustments
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="bg-[#2C3142]/50 p-4 rounded-lg space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{milestone.name}</span>
                        <Badge
                          variant="outline"
                          className={
                            milestone.impact === "high"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }
                        >
                          {milestone.impact} impact
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="space-y-1">
                          <div className="text-gray-400">Current Date</div>
                          <div>{milestone.originalDate}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />

                        <div className="space-y-1">
                          <div className="text-cyan-400">Suggested Date</div>
                          <div className="text-cyan-400">
                            {milestone.suggestedDate}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="text-orange-400 flex items-center gap-2">
                          <AlertTriangle className="h-3 w-3" />

                          {milestone.reason}
                        </div>
                        <div className="text-cyan-400">
                          <div className="mb-1">
                            Suggested Scope Adjustments:
                          </div>
                          <ul className="list-disc list-inside pl-2 space-y-1">
                            {milestone.scope.map((item, i) => (
                              <li key={i} className="text-gray-400">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Workload Balancer */}
          <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-cyan-400" />
                <CardTitle className="text-xl font-bold">
                  Workload Balancer
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {teamWorkload.map((team, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{team.name}</span>
                      <span className="text-gray-400">
                        {team.tasks} active tasks
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Current Load</span>
                        <span className="text-white">{team.current}%</span>
                      </div>
                      <Progress
                        value={team.current}
                        className={`h-2 ${team.current > 80 ? "bg-red-400" : team.current > 60 ? "bg-yellow-400" : "bg-green-400"}`}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-cyan-400">Suggested Target</span>
                        <span className="text-cyan-400">{team.suggested}%</span>
                      </div>
                      <Progress
                        value={team.suggested}
                        className="h-2 bg-cyan-400/50"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Health Pulse */}
          <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-400" />
                <CardTitle className="text-xl font-bold">
                  Team Health Pulse
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  {healthMetrics.map((team, index) => (
                    <div
                      key={index}
                      className="bg-[#2C3142]/50 p-4 rounded-lg space-y-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{team.team}</span>
                      </div>

                      <div className="space-y-3">
                        {Object.entries(team.metrics).map(([key, value]) => (
                          <div key={key} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400 capitalize">
                                {key}
                              </span>
                              <span className="text-white">{value}%</span>
                            </div>
                            <Progress
                              value={value}
                              className={`h-1.5 ${value > 80 ? "bg-green-400" : value > 60 ? "bg-yellow-400" : "bg-red-400"}`}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="text-orange-400 text-sm">
                          {team.risks.map((risk, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <AlertTriangle className="h-3 w-3" />

                              {risk}
                            </div>
                          ))}
                        </div>
                        <div className="text-cyan-400 text-sm">
                          {team.suggestions.map((suggestion, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Brain className="h-3 w-3" />
                              {suggestion}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendationsHub;
