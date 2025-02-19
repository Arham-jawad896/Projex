import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Brain,
  Sparkles,
  AlertTriangle,
  Zap,
  Users,
  LineChart,
  RefreshCw,
  Settings2,
  BarChart3,
  Plus,
  FileText,
  UserPlus,
  Trophy,
} from "lucide-react";

const DashboardPage = () => {
  const [activeRole, setActiveRole] = useState("manager");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      name: "Frontend App",
      progress: 75,
      health: 92,
      tasks: 34,
      blockers: 2,
      team: ["Sarah", "Mike", "Alex"],
      achievements: ["Sprint Champion", "Zero Bugs Week"],
    },
    {
      id: 2,
      name: "Backend API",
      progress: 60,
      health: 85,
      tasks: 28,
      blockers: 4,
      team: ["John", "Emma", "David"],
      achievements: ["API Performance", "Security Award"],
    },
    {
      id: 3,
      name: "Mobile App",
      progress: 40,
      health: 78,
      tasks: 45,
      blockers: 3,
      team: ["Lisa", "Tom", "Anna"],
      achievements: ["UI Excellence", "Best Practice"],
    },
  ];

  const roleViews = {
    manager: [
      { type: "progress", label: "Overall Progress" },
      { type: "health", label: "Team Health" },
      { type: "efficiency", label: "Delivery Efficiency" },
    ],

    developer: [
      { type: "tasks", label: "Active Tasks" },
      { type: "blockers", label: "Technical Blockers" },
      { type: "performance", label: "Code Quality" },
    ],
  };

  const QuickActionsPanel = () => (
    <div className="flex gap-3 mb-8" data-oid="-z47zrd">
      <Button
        variant="outline"
        className="bg-[#2C3142]/50 hover:bg-[#2C3142] text-white border-0 flex items-center gap-2"
        data-oid="m-u7gwc"
      >
        <Plus className="h-4 w-4 text-purple-400" data-oid="jfd7kyd" />
        New Project
      </Button>
      <Button
        variant="outline"
        className="bg-[#2C3142]/50 hover:bg-[#2C3142] text-white border-0 flex items-center gap-2"
        data-oid="8s4pxat"
      >
        <FileText className="h-4 w-4 text-cyan-400" data-oid="o:kz9:n" />
        Create Task
      </Button>
      <Button
        variant="outline"
        className="bg-[#2C3142]/50 hover:bg-[#2C3142] text-white border-0 flex items-center gap-2"
        data-oid="f_6u-wf"
      >
        <UserPlus className="h-4 w-4 text-yellow-400" data-oid="27h9n9x" />
        Add Team
      </Button>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <Card
      className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300 cursor-pointer group"
      data-oid="9qgi.3l"
    >
      <CardHeader className="pb-2" data-oid="xeul6dj">
        <div className="flex items-center justify-between" data-oid="_dcn-b_">
          <CardTitle
            className="text-lg font-medium text-white"
            data-oid="ps0-nbg"
          >
            {project.name}
          </CardTitle>
          <Badge
            variant="outline"
            className={`${project.health >= 90 ? "bg-green-500/20 text-green-400" : project.health >= 70 ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"}`}
            data-oid="5azu7a9"
          >
            Health: {project.health}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent data-oid="b--gcr9">
        <div className="space-y-4" data-oid="l7rjuws">
          <div className="space-y-2" data-oid=".lcnctg">
            <div className="flex justify-between text-sm" data-oid="_sb7j0f">
              <span className="text-gray-400" data-oid="44xcv2m">
                Progress
              </span>
              <span className="text-white" data-oid="km4k5v0">
                {project.progress}%
              </span>
            </div>
            <Progress
              value={project.progress}
              className="h-1.5"
              data-oid="d.n_7s4"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2" data-oid="sm3xb1y">
            <div className="bg-[#2C3142]/50 p-3 rounded-lg" data-oid="6:8tjb4">
              <div className="flex items-center gap-2" data-oid="nt9blv:">
                <Sparkles
                  className="h-4 w-4 text-purple-400"
                  data-oid="m4vgji0"
                />

                <span className="text-sm text-gray-400" data-oid="q.pp-69">
                  Tasks
                </span>
              </div>
              <p
                className="text-xl font-bold mt-1 text-white"
                data-oid="88kt..-"
              >
                {project.tasks}
              </p>
            </div>
            <div className="bg-[#2C3142]/50 p-3 rounded-lg" data-oid="470o.q:">
              <div className="flex items-center gap-2" data-oid="4ib3tul">
                <AlertTriangle
                  className="h-4 w-4 text-orange-400"
                  data-oid=":uj3lr9"
                />

                <span className="text-sm text-gray-400" data-oid="4:e1x4w">
                  Blockers
                </span>
              </div>
              <p
                className="text-xl font-bold mt-1 text-white"
                data-oid="kxd7in0"
              >
                {project.blockers}
              </p>
            </div>
          </div>
          <div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            data-oid="5kd2swf"
          >
            <div className="pt-4 border-t border-[#2C3142]" data-oid="tkxovr1">
              <div className="flex items-center gap-2 mb-2" data-oid="bw8gwr1">
                <Trophy
                  className="h-4 w-4 text-yellow-400"
                  data-oid="5ul:7q2"
                />

                <span className="text-sm text-gray-400" data-oid="d001lwk">
                  Recent Achievements
                </span>
              </div>
              <div className="flex gap-2 flex-wrap" data-oid="i__15_9">
                {project.achievements.map((achievement, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-purple-500/20 text-purple-400 border-purple-500/30"
                    data-oid="n9ssuso"
                  >
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const MetricCard = ({ type, value, trend, label }) => (
    <Card
      className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142]"
      data-oid="c29nryb"
    >
      <CardContent className="pt-6" data-oid="4l:u7c3">
        <div
          className="flex items-center justify-between mb-4"
          data-oid="dps8:qc"
        >
          <div className="flex items-center gap-2" data-oid="d0qhx3.">
            {type === "progress" && (
              <BarChart3
                className="h-5 w-5 text-purple-400"
                data-oid="u3e.fg3"
              />
            )}
            {type === "health" && (
              <Users className="h-5 w-5 text-cyan-400" data-oid="grfjhqp" />
            )}
            {type === "efficiency" && (
              <Zap className="h-5 w-5 text-yellow-400" data-oid="dhlegtq" />
            )}
          </div>
          <Badge
            variant="outline"
            className={`${trend === "up" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
            data-oid="10:6:04"
          >
            {trend === "up" ? "+" : "-"}5%
          </Badge>
        </div>
        <div
          className="text-xl font-semibold text-white mb-2"
          data-oid="8.ge:.w"
        >
          {label}
        </div>
        <div
          className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          data-oid=":d_rjri"
        >
          {value}%
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div
      className="text-white container mx-auto px-4 py-8 max-w-7xl mt-[24px]"
      data-oid="0tn.-8a"
    >
      <div className="max-w-[1600px] mx-auto" data-oid="b0eng.w">
        <div
          className="flex items-center justify-between mb-8"
          data-oid="vk:mxe6"
        >
          <div data-oid="x.eclo5">
            <div className="flex items-center gap-3" data-oid="k6m0dp7">
              <h1
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                data-oid="ajjq68s"
              >
                Multi-Project Overview
              </h1>
              <Badge
                variant="outline"
                className="bg-purple-500/20 text-purple-400 border-purple-500/30"
                data-oid="pc-r:w3"
              >
                Live Updates
              </Badge>
            </div>
            <p className="mt-2 text-gray-400" data-oid="-v5evc8">
              Real-time insights across all active projects
            </p>
          </div>

          <div className="flex items-center gap-4" data-oid="qzca5ak">
            <Select
              value={activeRole}
              onValueChange={setActiveRole}
              data-oid="kks7e:-"
            >
              <SelectTrigger
                className="w-[180px] bg-[#2C3142] border-0 text-white"
                data-oid="osuf3n7"
              >
                <SelectValue data-oid="qnlbqt:" />
              </SelectTrigger>
              <SelectContent data-oid="y68-fqo">
                <SelectItem value="manager" data-oid="q7ubnd_">
                  Manager View
                </SelectItem>
                <SelectItem value="developer" data-oid=".y-37ct">
                  Developer View
                </SelectItem>
                <SelectItem value="designer" data-oid="a3phgv0">
                  Designer View
                </SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setRefreshKey((prev) => prev + 1)}
              className="text-white hover:bg-white/10 border-[#2C3142]"
              data-oid="8llp6w-"
            >
              <RefreshCw className="h-4 w-4" data-oid="-a2:gzp" />
            </Button>
          </div>
        </div>

        <QuickActionsPanel data-oid="z4orvl0" />

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          data-oid="48kkgbd"
        >
          {roleViews[activeRole].map((metric, i) => (
            <MetricCard
              key={metric.type}
              type={metric.type}
              value={75 + i * 5}
              trend={i % 2 === 0 ? "up" : "down"}
              label={metric.label}
              data-oid="tzxbige"
            />
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="dl4nk4i"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              data-oid="koe3kwa"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
