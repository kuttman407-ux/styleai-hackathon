import { useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import GlassCard from "../../components/GlassCard";
import Button from "../../components/Button";
import { Sparkles, ArrowLeft, LogOut } from "lucide-react";
import { clearOnboardingStorage } from "../../onboardingStorage";

export default function OnboardingStyle() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  const styles = ["casual", "formal", "sport", "minimal", "streetwear", "classic"];

  const toggleStyle = (style: string) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  const handleStart = () => {
    navigate("/onboarding/loading");
  };

  const handleExit = () => {
    clearOnboardingStorage();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        <div className="flex justify-end mb-6">
          <Button variant="outline" onClick={handleExit} className="px-4 py-2 text-sm">
            <LogOut className="w-4 h-4 inline mr-2" />
            {t("exit")}
          </Button>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold">StyleAI</span>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>

          <h1 className="text-4xl font-bold mb-2">{t("styleTitle")}</h1>
          <p className="text-white/60">{t("styleDesc")}</p>
        </div>

        <GlassCard>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => toggleStyle(style)}
                className={`p-6 rounded-xl border transition-all ${
                  selectedStyles.includes(style)
                    ? "bg-purple-500/20 border-purple-500"
                    : "bg-white/5 border-white/10 hover:border-purple-500/50"
                }`}
              >
                <div className="text-lg font-bold">{t(style)}</div>
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => navigate("/onboarding/params")} className="w-full">
              <ArrowLeft className="w-5 h-5 inline mr-2" />
              {t("back")}
            </Button>
            <Button onClick={handleStart} className="w-full">
              {t("startAnalysisBtn")}
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
