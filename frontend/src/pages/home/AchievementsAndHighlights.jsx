import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Trophy,
  Star,
  Medal,
  Crown,
  Target,
  Sparkles,
  RefreshCw,
  Users,
  Flame,
} from "lucide-react";

const AchievementsAndHighlights = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const projectAchievements = [
    {
      title: "Sprint Champion",
      description: "Completed all sprint goals ahead of schedule",
      team: "Frontend Team",
      points: 1200,
      contributors: [
        { name: "Sarah Chen", contribution: 450 },
        { name: "Mike Ross", contribution: 400 },
        { name: "Alex Kim", contribution: 350 },
      ],
    },
    {
      title: "Quality Master",
      description: "Zero critical bugs for 30 days straight",
      team: "QA Team",
      points: 1000,
      contributors: [
        { name: "Emma Wilson", contribution: 400 },
        { name: "James Lee", contribution: 350 },
        { name: "Lisa Park", contribution: 250 },
      ],
    },
    {
      title: "Innovation Star",
      description: "Successfully implemented AI-powered features",
      team: "Backend Team",
      points: 1500,
      contributors: [
        { name: "David Wang", contribution: 600 },
        { name: "Rachel Kim", contribution: 500 },
        { name: "Tom Chen", contribution: 400 },
      ],
    },
  ];

  const personalHighlights = [
    {
      name: "Sarah Chen",
      role: "Frontend Lead",
      achievements: [
        { title: "Code Quality Champion", points: 500, icon: "star" },
        { title: "Team Mentor", points: 300, icon: "users" },
        { title: "Sprint MVP", points: 400, icon: "trophy" },
      ],

      streak: 15,
      level: 8,
    },
    {
      name: "David Wang",
      role: "Backend Engineer",
      achievements: [
        { title: "Performance Guru", points: 450, icon: "zap" },
        { title: "Bug Hunter", points: 350, icon: "target" },
        { title: "Innovation Leader", points: 400, icon: "sparkles" },
      ],

      streak: 12,
      level: 7,
    },
  ];

  const getAchievementIcon = (icon) => {
    switch (icon) {
      case "star":
        return <Star className="h-4 w-4 text-yellow-400" data-oid="v3.1m.f" />;
      case "users":
        return <Users className="h-4 w-4 text-cyan-400" data-oid=".u5xya5" />;
      case "trophy":
        return (
          <Trophy className="h-4 w-4 text-purple-400" data-oid="86xwfeb" />
        );

      case "target":
        return <Target className="h-4 w-4 text-red-400" data-oid="cblvl-c" />;
      case "sparkles":
        return (
          <Sparkles className="h-4 w-4 text-blue-400" data-oid="f04hnws" />
        );

      default:
        return <Medal className="h-4 w-4 text-yellow-400" data-oid="oxd.sgx" />;
    }
  };

  return (
    <div
      className="text-white container mx-auto px-4 py-8 max-w-7xl mt-[24px]"
      data-oid="vkh:zcm"
    >
      <div className="max-w-[1600px] mx-auto" data-oid="zta6mec">
        <div
          className="flex items-center justify-between mb-8"
          data-oid="n27qnd_"
        >
          <div data-oid="uxokuh2">
            <div className="flex items-center gap-3" data-oid="w2zsur_">
              <h1
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                data-oid="gmpgy89"
              >
                Achievements & Highlights
              </h1>
              <Badge
                variant="outline"
                className="bg-purple-500/20 text-purple-400 border-purple-500/30"
                data-oid="4s:4br-"
              >
                Gamified
              </Badge>
            </div>
            <p className="mt-2 text-gray-400" data-oid="9mkhe:1">
              Celebrating team and individual excellence
            </p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setRefreshKey((prev) => prev + 1)}
            className="text-white hover:bg-white/10 border-[#2C3142]"
            data-oid="m0ybe-c"
          >
            <RefreshCw className="h-4 w-4" data-oid="j9omr_z" />
          </Button>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          data-oid="hr:fljz"
        >
          {/* Project Achievements */}
          <Card
            className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300"
            data-oid="-dlmv64"
          >
            <CardHeader
              className="flex flex-row items-center justify-between pb-2"
              data-oid=".typ_6:"
            >
              <div className="flex items-center gap-2" data-oid="ij6cc2:">
                <Trophy
                  className="h-5 w-5 text-yellow-400"
                  data-oid="zk8q2cx"
                />

                <CardTitle className="text-xl font-bold" data-oid="vbasx8-">
                  Project Achievements
                </CardTitle>
              </div>
              <Badge
                variant="outline"
                className="bg-yellow-500/20 text-yellow-400"
                data-oid="tme22x0"
              >
                Top Teams
              </Badge>
            </CardHeader>
            <CardContent data-oid="m_vt0y7">
              <ScrollArea className="h-[500px] pr-4" data-oid=".f1h0wp">
                <div className="space-y-6" data-oid="gy4aqzn">
                  {projectAchievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-[#2C3142]/50 p-4 rounded-lg space-y-4"
                      data-oid="xcgy_q."
                    >
                      <div
                        className="flex items-center justify-between"
                        data-oid="6plrt4h"
                      >
                        <div
                          className="flex items-center gap-3"
                          data-oid="tlj:5r3"
                        >
                          <Crown
                            className="h-6 w-6 text-yellow-400"
                            data-oid="4cmmcdy"
                          />

                          <div data-oid="5eolblf">
                            <h3
                              className="font-bold text-lg"
                              data-oid="brd7anb"
                            >
                              {achievement.title}
                            </h3>
                            <p
                              className="text-gray-400 text-sm"
                              data-oid="mw34.vf"
                            >
                              {achievement.team}
                            </p>
                          </div>
                        </div>
                        <div className="text-right" data-oid="_2iof5f">
                          <div
                            className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                            data-oid="dd4-79h"
                          >
                            {achievement.points}
                          </div>
                          <div
                            className="text-xs text-gray-400"
                            data-oid="op-z8v5"
                          >
                            points
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-400" data-oid="kcwt3r-">
                        {achievement.description}
                      </p>

                      <div className="space-y-3" data-oid="kor11ky">
                        <div className="text-sm font-medium" data-oid="9hw3jpt">
                          Top Contributors
                        </div>
                        {achievement.contributors.map((contributor, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between"
                            data-oid="qq6:_-1"
                          >
                            <div
                              className="flex items-center gap-2"
                              data-oid="6r7jb3s"
                            >
                              <Medal
                                className={`h-4 w-4 ${idx === 0 ? "text-yellow-400" : idx === 1 ? "text-gray-400" : "text-orange-400"}`}
                                data-oid="p-e3vau"
                              />

                              <span className="text-sm" data-oid=".c3e2rr">
                                {contributor.name}
                              </span>
                            </div>
                            <span
                              className="text-sm text-cyan-400"
                              data-oid="yk6ezuy"
                            >
                              {contributor.contribution} pts
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Personal Highlights */}
          <Card
            className="bg-[#1A1F2B]/80 backdrop-blur-sm border-[#2C3142] hover:border-[#3C4152] transition-all duration-300"
            data-oid="4zuwr5t"
          >
            <CardHeader
              className="flex flex-row items-center justify-between pb-2"
              data-oid="-1aw1ys"
            >
              <div className="flex items-center gap-2" data-oid="rlt8poy">
                <Star className="h-5 w-5 text-purple-400" data-oid="l5fkh2h" />
                <CardTitle className="text-xl font-bold" data-oid="sdrq5kh">
                  Personal Highlights
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent data-oid="_ixo93i">
              <ScrollArea className="h-[500px] pr-4" data-oid="zpfe3co">
                <div className="space-y-6" data-oid="puu-yuy">
                  {personalHighlights.map((person, index) => (
                    <div
                      key={index}
                      className="bg-[#2C3142]/50 p-4 rounded-lg space-y-4"
                      data-oid="h74cv8n"
                    >
                      <div
                        className="flex items-center justify-between"
                        data-oid="u25i0w9"
                      >
                        <div data-oid="p48juxk">
                          <h3 className="font-bold text-lg" data-oid="z68ydrj">
                            {person.name}
                          </h3>
                          <p
                            className="text-gray-400 text-sm"
                            data-oid=":x56hee"
                          >
                            {person.role}
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-4"
                          data-oid="vror.:4"
                        >
                          <div className="text-center" data-oid="_f2jyg5">
                            <div
                              className="flex items-center gap-1"
                              data-oid="jfo_mz:"
                            >
                              <Flame
                                className="h-4 w-4 text-orange-400"
                                data-oid=".metubj"
                              />

                              <span className="font-bold" data-oid="dkpb6up">
                                {person.streak}
                              </span>
                            </div>
                            <div
                              className="text-xs text-gray-400"
                              data-oid="32qkeij"
                            >
                              day streak
                            </div>
                          </div>
                          <div className="text-center" data-oid="q.vaakm">
                            <div
                              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                              data-oid="jgdbt38"
                            >
                              {person.level}
                            </div>
                            <div
                              className="text-xs text-gray-400"
                              data-oid="ku_ik-p"
                            >
                              level
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-3" data-oid="dgxel5v">
                        {person.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between bg-[#1A1F2B]/50 p-3 rounded-lg"
                            data-oid="lo8wl16"
                          >
                            <div
                              className="flex items-center gap-2"
                              data-oid="8fqyrh."
                            >
                              {getAchievementIcon(achievement.icon)}
                              <span className="text-sm" data-oid="isl75mi">
                                {achievement.title}
                              </span>
                            </div>
                            <div
                              className="flex items-center gap-2"
                              data-oid="gyx-58u"
                            >
                              <span
                                className="text-sm text-cyan-400"
                                data-oid="2gyhjmb"
                              >
                                {achievement.points}
                              </span>
                              <span
                                className="text-xs text-gray-400"
                                data-oid="._id4vo"
                              >
                                pts
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Progress
                        value={75}
                        className="h-1 bg-purple-400/20"
                        data-oid="zzw4x-x"
                      />

                      <div
                        className="flex justify-between text-xs text-gray-400"
                        data-oid="gayalwo"
                      >
                        <span data-oid="-_w5h..">Progress to next level</span>
                        <span data-oid="agzsamj">750/1000 XP</span>
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

export default AchievementsAndHighlights;
