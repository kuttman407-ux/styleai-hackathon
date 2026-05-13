import { useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import GlassCard from "../../components/GlassCard";
import Button from "../../components/Button";
import { Sparkles, ArrowLeft, LogOut } from "lucide-react";
import { clearOnboardingStorage } from "../../onboardingStorage";

export default function OnboardingParams() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bodyType, setBodyType] = useState("");

  const bodyTypes = ["rectangle", "triangle", "inverted-triangle", "hourglass", "apple"];

  const handleExit = () => {
    clearOnboardingStorage();
    navigate("/");
  };

  const handleNext = () => {
    navigate("/onboarding/style");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
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
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>

          <h1 className="text-4xl font-bold mb-4">{t("paramsTitle")}</h1>
        </div>

        <GlassCard>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm text-white/70">{t("height")}</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="170"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-white/70">{t("weight")}</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="65"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block mb-3 text-sm text-white/70">{t("bodyType")}</label>
              <div className="grid grid-cols-5 gap-3">
                {bodyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setBodyType(type)}
                    className={`aspect-square rounded-lg border transition-all flex items-center justify-center ${
                      bodyType === type
                        ? "bg-purple-500/20 border-purple-500"
                        : "bg-white/5 border-white/10 hover:border-purple-500/50"
                    }`}
                  >
                    <div className={`w-8 h-12 rounded ${bodyType === type ? "bg-purple-400" : "bg-white/30"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="outline" onClick={() => navigate("/onboarding/upload")} className="w-full">
                <ArrowLeft className="w-5 h-5 inline mr-2" />
                {t("back")}
              </Button>
              <Button onClick={handleNext} className="w-full">
                {t("next")}
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
