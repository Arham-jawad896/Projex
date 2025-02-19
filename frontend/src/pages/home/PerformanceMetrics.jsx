import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Brain,
  MessageSquare,
  Users,
  AlertTriangle,
  Activity,
  RefreshCw,
  Zap,
  Timer,
  MessagesSquare,
  ArrowRight,
} from "lucide-react";

const PerformanceMetrics = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const collaborationData = [
    {
      day: "Mon",
      responseTime: 12,
      messages: 145,
      engagement: 89,
      teamActivity: 85,
    },
    {
      day: "Tue",
      responseTime: 8,
      messages: 167,
      engagement: 92,
      teamActivity: 88,
    },
    {
      day: "Wed",
      responseTime: 15,
      messages: 134,
      engagement: 85,
      teamActivity: 82,
    },
    {
      day: "Thu",
      responseTime: 10,
      messages: 156,
      engagement: 90,
      teamActivity: 87,
    },
    {
      day: "Fri",
      responseTime: 9,
      messages: 178,
      engagement: 94,
      teamActivity: 91,
    },
  ];

  const riskInsights = [
    {
      area: "Backend Team",
      risk: "high",
      metric: 78,
      trend: "up",
      warning: "High response times in API endpoints",
      suggestion: "Consider implementing caching layer",
      mitigation: [
        { action: "Implement Redis caching", priority: "high", owner: "Alex" },
        {
          action: "Optimize database queries",
          priority: "medium",
          owner: "Sarah",
        },
      ],
    },
    {
      area: "Frontend Team",
      risk: "medium",
      metric: 45,
      trend: "down",
      warning: "Increasing technical debt in legacy components",
      suggestion: "Schedule refactoring sprint",
      mitigation: [
        { action: "Code review backlog", priority: "medium", owner: "Mike" },
        { action: "Update component library", priority: "low", owner: "Emma" },
      ],
    },
    {
      area: "DevOps Team",
      risk: "low",
      metric: 23,
      trend: "down",
      warning: "Minor deployment delays",
      suggestion: "Optimize CI/CD pipeline",
      mitigation: [
        { action: "Pipeline optimization", priority: "low", owner: "Tom" },
      ],
    },
  ];

  const [selectedRisk, setSelectedRisk] = useState(null);
  const [selectedTeamMetrics, setSelectedTeamMetrics] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-white container mx-auto px-4 py-8 max-w-7xl mt-[24px]"
      data-oid="7kotq_o"
    >
      <div className="max-w-[1600px] mx-auto" data-oid="u-of65u">
        <div
          className="flex items-center justify-between mb-8"
          data-oid="yedlca."
        >
          <div data-oid="7xms6kq">
            <div className="flex items-center gap-3" data-oid="mde4_m-">
              <h1
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                data-oid="4cs61n."
              >
                Performance Analytics
              </h1>
              <Badge
                variant="outline"
                className="bg-purple-500/20 text-purple-400 border-purple-500/30"
                data-oid="dyq_8l6"
              >
                AI Enhanced
              </Badge>
            </div>
            <p className="mt-2 text-gray-400" data-oid="wq-ce3z">
              Real-time collaboration metrics and risk analysis
            </p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setRefreshKey((prev) => prev + 1)}
            className="text-white hover:bg-white/10 border-[#2C3142]"
            data-oid="dp._-ef"
          >
            <RefreshCw className="h-4 w-4" data-oid="vs7boi5" />
          </Button>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
          data-oid="uwklark"
        >
          {/* Team Collaboration Trends */}
          <Card
            className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300"
            data-oid="v_qiuyy"
          >
            <CardHeader
              className="flex flex-row items-center justify-between pb-2"
              data-oid="htk92td"
            >
              <div className="flex items-center gap-2" data-oid="pqnp.pn">
                <MessagesSquare
                  className="h-5 w-5 text-purple-400"
                  data-oid="j.5lua3"
                />

                <CardTitle className="text-xl font-bold" data-oid="iuhh7qh">
                  Team Collaboration Trends
                </CardTitle>
              </div>
              <Badge
                variant="outline"
                className="bg-green-500/20 text-green-400"
                data-oid="igm0.4j"
              >
                Healthy
              </Badge>
            </CardHeader>
            <CardContent data-oid="0a82kq5">
              <div className="space-y-6" data-oid="mcjlt:4">
                {collaborationData.map((day, index) => (
                  <div
                    key={index}
                    className="space-y-2 cursor-pointer hover:bg-[#2C3142]/50 p-2 rounded-lg transition-colors"
                    onClick={() => setSelectedTeamMetrics(day)}
                    data-oid="jq8tac5"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-oid="vd0n1bz"
                    >
                      <span className="text-gray-400" data-oid="t5x1f4w">
                        {day.day}
                      </span>
                      <div
                        className="flex items-center gap-4"
                        data-oid="9g7v78s"
                      >
                        <div
                          className="flex items-center gap-2"
                          data-oid="bl0i3oa"
                        >
                          <Timer
                            className="h-4 w-4 text-cyan-400"
                            data-oid="33rsmh."
                          />

                          <span className="text-sm" data-oid="6fnxs5b">
                            {day.responseTime}m avg response
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-2"
                          data-oid="xo2l4op"
                        >
                          <MessageSquare
                            className="h-4 w-4 text-purple-400"
                            data-oid="_t-jknj"
                          />

                          <span className="text-sm" data-oid="hm0dzrq">
                            {day.messages} messages
                          </span>
                        </div>
                      </div>
                    </div>
                    <Progress
                      value={day.engagement}
                      className="h-2"
                      data-oid="oytuy3u"
                    />

                    <div
                      className="flex justify-between text-xs text-gray-400"
                      data-oid="u71r-ru"
                    >
                      <span data-oid="svb68j7">Team Activity Score</span>
                      <span className="text-cyan-400" data-oid="22:t-pi">
                        {day.teamActivity}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Risk Insights */}
          <Card
            className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300"
            data-oid="y5.ee43"
          >
            <CardHeader
              className="flex flex-row items-center justify-between pb-2"
              data-oid="xgyigtt"
            >
              <div className="flex items-center gap-2" data-oid="4thzi2b">
                <Brain className="h-5 w-5 text-cyan-400" data-oid=":q855fb" />
                <CardTitle className="text-xl font-bold" data-oid="immzitk">
                  AI Risk Insights
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent data-oid="12sjv6z">
              <ScrollArea className="h-[400px] pr-4" data-oid="u8c77-9">
                <div className="space-y-6" data-oid="0k4jpo9">
                  {riskInsights.map((insight, index) => (
                    <div
                      key={index}
                      className="p-4 bg-[#2C3142]/50 rounded-lg space-y-4 cursor-pointer hover:bg-[#2C3142]/70 transition-colors"
                      onClick={() => setSelectedRisk(insight)}
                      data-oid="9ooti29"
                    >
                      <div
                        className="flex items-center justify-between"
                        data-oid="s8t2qqi"
                      >
                        <div
                          className="flex items-center gap-2"
                          data-oid="0gxwr7h"
                        >
                          <Activity
                            className="h-5 w-5 text-purple-400"
                            data-oid="42_2x_e"
                          />

                          <span className="font-medium" data-oid="f84.cmm">
                            {insight.area}
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className={`${
                            insight.risk === "high"
                              ? "bg-red-500/20 text-red-400"
                              : insight.risk === "medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-green-500/20 text-green-400"
                          }`}
                          data-oid="z3w868d"
                        >
                          {insight.risk} risk
                        </Badge>
                      </div>

                      <div className="space-y-2" data-oid="nn_e6ta">
                        <div
                          className="flex justify-between text-sm"
                          data-oid="0uc504i"
                        >
                          <span className="text-gray-400" data-oid="s20a2wz">
                            Risk Metric
                          </span>
                          <div
                            className="flex items-center gap-2"
                            data-oid=":b_olau"
                          >
                            <span data-oid="1jrmk.k">{insight.metric}%</span>
                            <Badge
                              variant="outline"
                              className={`${insight.trend === "up" ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"}`}
                              data-oid="446qi4:"
                            >
                              {insight.trend === "up" ? "+" : "-"}5%
                            </Badge>
                          </div>
                        </div>
                        <Progress
                          value={insight.metric}
                          className={`h-2 ${insight.metric > 66 ? "bg-red-400" : insight.metric > 33 ? "bg-yellow-400" : "bg-green-400"}`}
                          data-oid="pt25o2k"
                        />
                      </div>

                      <div className="space-y-2" data-oid="r4n228q">
                        <div
                          className="flex items-center gap-2"
                          data-oid="9inlwjn"
                        >
                          <AlertTriangle
                            className="h-4 w-4 text-orange-400"
                            data-oid="73of:v4"
                          />

                          <span
                            className="text-sm text-orange-400"
                            data-oid="2p4qa45"
                          >
                            {insight.warning}
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-2"
                          data-oid="vm_n9j-"
                        >
                          <Zap
                            className="h-4 w-4 text-cyan-400"
                            data-oid="447l4c5"
                          />

                          <span
                            className="text-sm text-cyan-400"
                            data-oid="caujc69"
                          >
                            {insight.suggestion}
                          </span>
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

      {/* Team Metrics Dialog */}
      <Dialog
        open={!!selectedTeamMetrics}
        onOpenChange={() => setSelectedTeamMetrics(null)}
        data-oid="a9sz:c-"
      >
        <DialogContent data-oid="qal.7fm">
          <DialogHeader data-oid="k-7soob">
            <DialogTitle data-oid="efryd32">
              Team Activity Details - {selectedTeamMetrics?.day}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4" data-oid="ecsarp4">
            <div className="grid grid-cols-2 gap-4" data-oid="nyo_uv8">
              <div
                className="bg-[#2C3142]/50 p-4 rounded-lg"
                data-oid="bfzlv1p"
              >
                <div className="text-sm text-gray-400 mb-2" data-oid="cb2zs.j">
                  Response Time
                </div>
                <div
                  className="text-2xl font-bold text-white"
                  data-oid="di2-hxs"
                >
                  {selectedTeamMetrics?.responseTime}m
                </div>
              </div>
              <div
                className="bg-[#2C3142]/50 p-4 rounded-lg"
                data-oid="fvaszui"
              >
                <div className="text-sm text-gray-400 mb-2" data-oid=".oypksg">
                  Messages
                </div>
                <div
                  className="text-2xl font-bold text-white"
                  data-oid="8:5lito"
                >
                  {selectedTeamMetrics?.messages}
                </div>
              </div>
            </div>
            <div className="space-y-2" data-oid="5n_kysw">
              <h4 className="text-sm font-medium" data-oid="-qb5rpt">
                Team Engagement
              </h4>
              <Progress
                value={selectedTeamMetrics?.engagement}
                className="h-2"
                data-oid="ootnjm9"
              />

              <div
                className="flex justify-between text-sm text-gray-400"
                data-oid="pmt.skq"
              >
                <span data-oid="enwt.qa">Score</span>
                <span data-oid="5gnp2o:">
                  {selectedTeamMetrics?.engagement}%
                </span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Risk Details Dialog */}
      <Dialog
        open={!!selectedRisk}
        onOpenChange={() => setSelectedRisk(null)}
        data-oid="jhsq3mo"
      >
        <DialogContent data-oid="2-7gcai">
          <DialogHeader data-oid="a1kfofs">
            <DialogTitle data-oid="cqful1d">
              {selectedRisk?.area} Risk Details
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4" data-oid="azqlbdc">
            <div className="space-y-2" data-oid="r4q68gu">
              <h4 className="text-sm font-medium" data-oid=":5aevmh">
                Mitigation Plan
              </h4>
              <div className="space-y-2" data-oid="jy6ddct">
                {selectedRisk?.mitigation.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-[#2C3142]/50 rounded-lg"
                    data-oid="3hqwyzw"
                  >
                    <div className="flex items-center gap-2" data-oid="3sd6tlh">
                      <ArrowRight
                        className="h-4 w-4 text-purple-400"
                        data-oid="j6qg.-."
                      />

                      <span data-oid="yc8vnwr">{item.action}</span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="-88cilh">
                      <Badge
                        variant="outline"
                        className="bg-purple-500/20 text-purple-400"
                        data-oid="39sstib"
                      >
                        {item.owner}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`${
                          item.priority === "high"
                            ? "bg-red-500/20 text-red-400"
                            : item.priority === "medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-green-500/20 text-green-400"
                        }`}
                        data-oid="2:eaodg"
                      >
                        {item.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PerformanceMetrics;
