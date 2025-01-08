import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Separator } from "../../../components/ui/separator";
import { Progress } from "../../../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { Brain, Sparkles, AlertTriangle, Zap, Users, LineChart, RefreshCw, Settings2, BarChart3 } from "lucide-react";

const DashboardPage = () => {
  const [activeRole, setActiveRole] = useState("manager");
  const [refreshKey, setRefreshKey] = useState(0);

  // Simulated real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
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
      blockers: 2
    },
    {
      id: 2,
      name: "Backend API",
      progress: 60,
      health: 85,
      tasks: 28,
      blockers: 4
    },
    {
      id: 3,
      name: "Mobile App",
      progress: 40,
      health: 78,
      tasks: 45,
      blockers: 3
    }
  ];

  const roleViews = {
    manager: [
      { type: "progress", label: "Overall Progress" },
      { type: "health", label: "Team Health" },
      { type: "efficiency", label: "Delivery Efficiency" }
    ],
    developer: [
      { type: "tasks", label: "Active Tasks" },
      { type: "blockers", label: "Technical Blockers" },
      { type: "performance", label: "Code Quality" }
    ],
  };

  const ProjectCard = ({ project }) => (
    <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300 p-4">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium text-white">{project.name}</CardTitle>
          <Badge variant="outline"
            className={`${project.health >= 90 ? 'bg-green-500/20 text-green-400 p-[5px]' :
              project.health >= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-red-500/20 text-red-400'}`}>
            Health: {project.health}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Progress</span>
              <span className="text-white">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-1.5" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-[#2C3142]/50 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-400">Tasks</span>
              </div>
              <p className="text-xl font-bold mt-1 text-white">{project.tasks}</p>
            </div>
            <div className="bg-[#2C3142]/50 p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-gray-400">Blockers</span>
              </div>
              <p className="text-xl font-bold mt-1 text-white">{project.blockers}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const MetricCard = ({ type, value, trend, label }) => (
    <Card className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142]">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {type === "progress" && <BarChart3 className="h-5 w-5 text-purple-400" />}
            {type === "health" && <Users className="h-5 w-5 text-cyan-400" />}
            {type === "efficiency" && <Zap className="h-5 w-5 text-yellow-400" />}
          </div>
          <Badge variant="outline"
            className={`${trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'} p-[5px]`}>
            {trend === 'up' ? '+' : '-'}5%
          </Badge>
        </div>
        <div className="text-xl font-semibold text-white mb-2">{label}</div> {/* This line adds the label */}
        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {value}%
        </div>
      </CardContent>
    </Card>
  );


  return (
    <div className="text-white container mx-auto px-6 py-8 max-w-7xl mt-[24px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Multi-Project Overview
              </h1>
              <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/30 p-[5px]">
                Live Updates
              </Badge>
            </div>
            <p className="mt-2 text-gray-400">Real-time insights across all active projects</p>
          </div>

          <div className="flex items-center gap-4">
            <Select value={activeRole} onValueChange={setActiveRole}>
              <SelectTrigger className="w-[180px] bg-[#2C3142] border-0 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manager">Manager View</SelectItem>
                <SelectItem value="developer">Developer View</SelectItem>
                <SelectItem value="designer">Designer View</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setRefreshKey(prev => prev + 1)}
              className="text-white hover:bg-white/10 border-[#2C3142]"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {roleViews[activeRole].map((metric, i) => (
            <MetricCard
              key={metric.type}
              type={metric.type}
              value={75 + i * 5}
              trend={i % 2 === 0 ? 'up' : 'down'}
              label={metric.label}  
            />
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
