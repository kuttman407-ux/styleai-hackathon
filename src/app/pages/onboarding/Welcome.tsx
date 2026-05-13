import { useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import GlassCard from "../../components/GlassCard";
import Button from "../../components/Button";
import { LogOut, Sparkles } from "lucide-react";
import { clearOnboardingStorage, saveOnboardingName } from "../../onboardingStorage";

export default function OnboardingWelcome() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleNext = () => {
    if (name && age && gender) {
      saveOnboardingName(name.trim());
      navigate("/onboarding/upload");
    }
  };

  const handleExit = () => {
    clearOnboardingStorage();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
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
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>

          <h1 className="text-4xl font-bold mb-4">{t("welcome")}</h1>
        </div>

        <GlassCard>
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-sm text-white/70">{t("nameLabel")}</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("namePlaceholder")}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-white/70">{t("ageLabel")}</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="25"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-white/70">{t("genderLabel")}</label>
              <div className="grid grid-cols-3 gap-3">
                {["male", "female", "other"].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`py-3 rounded-lg border transition-all ${
                      gender === g
                        ? "bg-purple-500/20 border-purple-500 text-white"
                        : "bg-white/5 border-white/10 text-white/70 hover:border-purple-500/50"
                    }`}
                  >
                    {t(g)}
                  </button>
                ))}
              </div>
            </div>

            <Button onClick={handleNext} className="w-full mt-6">
              {t("next")}
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
