import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Brain,
  AlertTriangle,
  Users,
  Clock,
  CalendarDays,
  Zap,
  RefreshCw,
  Edit2,
  Link2,
  UserPlus,
  Calendar as CalendarIcon,
  Plus,
  ArrowRight,
  ChevronRight,
  Trophy,
} from "lucide-react";

const AiWidgets = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "API Integration",
      progress: 65,
      risk: "medium",
      start: "2024-01-01",
      end: "2024-01-15",
      assignee: "Alex",
      dependencies: ["Database Setup"],
      aiPrediction: 75,
      milestones: [
        { id: 1, name: "API Design", date: "2024-01-05", completed: true },
        {
          id: 2,
          name: "Integration Test",
          date: "2024-01-10",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      name: "UI Components",
      progress: 80,
      risk: "low",
      start: "2024-01-05",
      end: "2024-01-20",
      assignee: "Sarah",
      dependencies: [],
      aiPrediction: 90,
      milestones: [
        {
          id: 1,
          name: "Component Library",
          date: "2024-01-15",
          completed: true,
        },
      ],
    },
    {
      id: 3,
      name: "Database Setup",
      progress: 45,
      risk: "high",
      start: "2024-01-10",
      end: "2024-01-25",
      assignee: "Mike",
      dependencies: [],
      aiPrediction: 55,
      milestones: [
        { id: 1, name: "Schema Design", date: "2024-01-20", completed: false },
      ],
    },
  ]);

  const [teamWorkload, setTeamWorkload] = useState([
    {
      name: "Alex",
      load: 85,
      tasks: 4,
      prediction: "overloaded",
      skills: ["Frontend", "API"],
      availability: 0.8,
    },
    {
      name: "Sarah",
      load: 60,
      tasks: 3,
      prediction: "optimal",
      skills: ["UI/UX", "Frontend"],
      availability: 1.0,
    },
    {
      name: "Mike",
      load: 40,
      tasks: 2,
      prediction: "underutilized",
      skills: ["Backend", "Database"],
      availability: 0.9,
    },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleTaskUpdate = (taskId, updates) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updates } : task,
      ),
    );
  };

  const handleTeamMemberUpdate = (name, updates) => {
    setTeamWorkload((team) =>
      team.map((member) =>
        member.name === name ? { ...member, ...updates } : member,
      ),
    );
  };

  const handleAddDependency = (taskId, dependencyName) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            dependencies: [...task.dependencies, dependencyName],
          };
        }
        return task;
      }),
    );
  };

  const handleAssignResource = (taskId, resource) => {
    const targetMember = teamWorkload.find((m) => m.name === resource);
    if (targetMember && targetMember.load < 90) {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, assignee: resource };
          }
          return task;
        }),
      );
      handleTeamMemberUpdate(resource, { tasks: targetMember.tasks + 1 });
    }
  };

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
          className="bg-purple-500/20 text-purple-400 border-purple-500/30"
        >
          AI Optimized
        </Badge>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-6">
            {tasks.map((task) => (
              <div key={task.id} className="space-y-2 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-white font-medium cursor-pointer hover:text-purple-400 transition-colors"
                      onClick={() => setSelectedTask(task)}
                    >
                      {task.name}
                    </span>
                    {task.dependencies.length > 0 && (
                      <Popover>
                        <PopoverTrigger>
                          <Link2 className="h-4 w-4 text-gray-400 hover:text-purple-400 cursor-pointer" />
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="text-sm text-gray-400">
                            Dependencies: {task.dependencies.join(", ")}
                          </div>
                        </PopoverContent>
                      </Popover>
                    )}
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
                  <div className="flex items-center gap-2">
                    <Popover>
                      <PopoverTrigger>
                        <span className="text-gray-400 text-sm hover:text-purple-400 cursor-pointer">
                          {task.assignee}
                        </span>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="space-y-2">
                          <h4 className="font-medium">Assign Resource</h4>
                          <div className="flex flex-col gap-1">
                            {teamWorkload.map((member) => (
                              <Button
                                key={member.name}
                                variant="ghost"
                                className="justify-start"
                                onClick={() =>
                                  handleAssignResource(task.id, member.name)
                                }
                              >
                                <div className="flex items-center justify-between w-full">
                                  <span>{member.name}</span>
                                  <Badge
                                    variant="outline"
                                    className={`${
                                      member.load > 80
                                        ? "bg-red-500/20 text-red-400"
                                        : member.load > 60
                                          ? "bg-yellow-500/20 text-yellow-400"
                                          : "bg-green-500/20 text-green-400"
                                    }`}
                                  >
                                    {member.load}%
                                  </Badge>
                                </div>
                              </Button>
                            ))}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="relative">
                  <Progress value={task.progress} className="h-2" />

                  <div
                    className="absolute -top-2 left-[60%] w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    title="AI Predicted Completion"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <Dialog>
                    <DialogTrigger>
                      <div className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{task.start}</span>
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Task Timeline</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Start Date</h4>
                          <Calendar
                            mode="single"
                            selected={new Date(task.start)}
                            onSelect={(date) => {
                              handleTaskUpdate(task.id, {
                                start: date.toISOString().split("T")[0],
                              });
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Milestones</h4>
                          {task.milestones.map((milestone) => (
                            <div
                              key={milestone.id}
                              className="flex items-center gap-2"
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${milestone.completed ? "bg-green-400" : "bg-gray-400"}`}
                              />

                              <span>{milestone.name}</span>
                              <ChevronRight className="h-4 w-4" />

                              <span>{milestone.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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
            <div key={task.id} className="space-y-2 group">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{task.name}</span>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={task.progress}
                    onChange={(e) =>
                      handleTaskUpdate(task.id, {
                        progress: parseInt(e.target.value),
                      })
                    }
                    className="w-16 h-6 bg-[#2C3142] border-0 text-white text-sm"
                    min="0"
                    max="100"
                  />

                  <Badge
                    variant="outline"
                    className="bg-purple-500/20 text-purple-400"
                  >
                    AI: {task.aiPrediction}% expected
                  </Badge>
                </div>
              </div>
              <Progress value={task.progress} className="h-2" />

              <div className="flex justify-between text-xs text-gray-400">
                <span>Current: {task.progress}%</span>
                <span className="text-cyan-400">
                  AI Predicted: {task.aiPrediction}%
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
            <div key={index} className="space-y-2 group">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">{member.name}</span>
                  <span className="text-gray-400 text-sm">
                    {member.tasks} tasks
                  </span>
                  <Popover>
                    <PopoverTrigger>
                      <UserPlus className="h-4 w-4 text-gray-400 hover:text-purple-400 cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-white">
                          Skills
                        </div>
                        <div className="flex gap-1">
                          {member.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-purple-500/20 text-purple-400"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm text-gray-400">
                          Availability: {member.availability * 100}%
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
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
                  }`}
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
                className="bg-purple-500/20 text-purple-400 border-purple-500/30"
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

        {/* Task Details Dialog */}
        <Dialog
          open={!!selectedTask}
          onOpenChange={() => setSelectedTask(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedTask?.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Dependencies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTask?.dependencies.map((dep, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-purple-500/20 text-purple-400"
                    >
                      {dep}
                    </Badge>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-purple-400 border-purple-400/20"
                    onClick={() => {
                      const newDep = `Task ${tasks.length + 1}`;
                      handleAddDependency(selectedTask.id, newDep);
                    }}
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add Dependency
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AiWidgets;
