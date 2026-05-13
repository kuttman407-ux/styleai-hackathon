import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import { LogOut, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { clearOnboardingStorage } from "../../onboardingStorage";

export default function OnboardingLoading() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [statusIndex, setStatusIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const statuses = [t("analyzing"), t("detectingColors"), t("ready")];

  const handleExit = () => {
    clearOnboardingStorage();
    navigate("/");
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStatusIndex((prev) => {
        if (prev < statuses.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          timeoutRef.current = window.setTimeout(() => navigate("/dashboard"), 1000);
          return prev;
        }
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [navigate, statuses.length]);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white px-6">
      <div className="max-w-7xl mx-auto py-6 flex justify-end">
        <button
          onClick={handleExit}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/70 hover:text-white transition-colors"
        >
          <LogOut className="w-4 h-4" />
          {t("exit")}
        </button>
      </div>

      <div className="min-h-[calc(100vh-72px)] flex items-center justify-center">
        <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-8 h-8 text-purple-400" />
          <span className="text-2xl font-bold">StyleAI</span>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <div className="w-2 h-2 rounded-full bg-purple-500" />
        </div>

        <motion.div
          className="w-24 h-24 mx-auto mb-8 rounded-full border-4 border-purple-500/30 border-t-purple-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        <motion.h2
          key={statusIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
        >
          {statuses[statusIndex]}
        </motion.h2>
      </div>
      </div>
    </div>
  );
}
