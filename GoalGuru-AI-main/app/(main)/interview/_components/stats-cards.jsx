import { Brain, Target, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatsCards({ assessments }) {

  // 🟦 Ensure assessments is always a valid array
  const safeAssessments = Array.isArray(assessments) ? assessments : [];

  // 🟩 Get average score safely
  const getAverageScore = () => {
    if (safeAssessments.length === 0) return 0;

    const total = safeAssessments.reduce(
      (sum, a) => sum + Number(a.quizScore || 0),
      0
    );

    return Number(total / safeAssessments.length).toFixed(1);
  };

  // 🟩 Return the latest assessment based on date
  const getLatestAssessment = () => {
    if (safeAssessments.length === 0) return null;

    return [...safeAssessments].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )[0];
  };

  // 🟩 Total questions answered
  const getTotalQuestions = () => {
    if (safeAssessments.length === 0) return 0;

    return safeAssessments.reduce(
      (sum, a) => sum + (a.questions?.length || 0),
      0
    );
  };

  // 🟦 Safely extract latest score
  const latest = getLatestAssessment();
  const latestScore = latest ? Number(latest.quizScore || 0).toFixed(1) : 0;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      
      {/* ⭐ Average Score */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          <Trophy className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getAverageScore()}%</div>
          <p className="text-xs text-muted-foreground">
            Across all assessments
          </p>
        </CardContent>
      </Card>

      {/* ⭐ Questions Practiced */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Questions Practiced</CardTitle>
          <Brain className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{getTotalQuestions()}</div>
          <p className="text-xs text-muted-foreground">Total questions</p>
        </CardContent>
      </Card>

      {/* ⭐ Latest Assessment Score */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Latest Score</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{latestScore}%</div>
          <p className="text-xs text-muted-foreground">Most recent quiz</p>
        </CardContent>
      </Card>

    </div>
  );
}
