import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Sparkles, LogOut, Shirt, Scissors } from "lucide-react";
import { clearOnboardingStorage, getOnboardingName } from "../onboardingStorage";

export default function Dashboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>(() => getOnboardingName() || "Анна");

  const colorPalette = ["#FFE5B4", "#FFDAB9", "#FFB6C1", "#E6E6FA", "#D8BFD8", "#DDA0DD"];

  const outfits = [
    { id: 1, name: "Летний casual", colors: ["#FFE5B4", "#FFB6C1"] },
    { id: 2, name: "Офисный стиль", colors: ["#E6E6FA", "#D8BFD8"] },
    { id: 3, name: "Вечерний look", colors: ["#DDA0DD", "#FFB6C1"] },
    { id: 4, name: "Уличная мода", colors: ["#FFDAB9", "#FFE5B4"] },
  ];

  const hairstyles = [
    { id: 1, name: "Удлиненное каре", reason: "Подчеркивает овал лица" },
    { id: 2, name: "Мягкие волны", reason: "Добавляет объем" },
    { id: 3, name: "Высокий хвост", reason: "Открывает скулы" },
  ];

  const brands = [
    "Zara",
    "H&M",
    "Mango",
    "COS",
    "Massimo Dutti",
    "Reserved",
  ];

  useEffect(() => {
    setUserName(getOnboardingName() || "Анна");
  }, []);

  const handleLogout = () => {
    clearOnboardingStorage();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0A0A0F]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold">StyleAI</span>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/70 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              {t("exit")}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Greeting */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-2">
            {t("greeting")}, {userName}!
          </h1>
          <p className="text-2xl text-white/60">{t("analysisReady")}</p>
        </div>

        {/* Results Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <GlassCard hover>
            <div className="text-sm text-purple-400 mb-2">{t("faceShape")}</div>
            <div className="text-3xl font-bold">Овал</div>
          </GlassCard>

          <GlassCard hover>
            <div className="text-sm text-blue-400 mb-2">{t("colorType")}</div>
            <div className="text-3xl font-bold mb-3">Весна</div>
            <div className="flex gap-2">
              {colorPalette.map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white/20"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard hover>
            <div className="text-sm text-pink-400 mb-2">{t("figureType")}</div>
            <div className="text-3xl font-bold">Песочные часы</div>
          </GlassCard>
        </div>

        {/* Outfits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t("outfitsSection")}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {outfits.map((outfit) => (
              <GlassCard key={outfit.id} hover>
                <div className="aspect-[3/4] rounded-lg bg-gradient-to-br mb-4 flex items-center justify-center" style={{
                  background: `linear-gradient(135deg, ${outfit.colors[0]}, ${outfit.colors[1]})`
                }}>
                  <Shirt className="w-16 h-16 text-white/50" />
                </div>
                <h3 className="font-bold mb-3">{outfit.name}</h3>
                <Button variant="outline" className="w-full text-sm">
                  {t("tryOn")}
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Hairstyles Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{t("hairstylesSection")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hairstyles.map((hairstyle) => (
              <GlassCard key={hairstyle.id} hover>
                <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 flex items-center justify-center">
                  <Scissors className="w-16 h-16 text-purple-400/50" />
                </div>
                <h3 className="font-bold mb-2">{hairstyle.name}</h3>
                <div className="text-sm text-white/60">
                  <span className="text-purple-400">{t("whySuits")}:</span> {hairstyle.reason}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Recommended Brands */}
        <div>
          <h2 className="text-3xl font-bold mb-6">{t("recommendedBrands")}</h2>
          <GlassCard>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {brands.map((brand, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-white/5 flex items-center justify-center text-xl font-bold hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {brand}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="mt-12 text-center text-white/60">
          Подборка подготовлена для <span className="text-purple-400 font-medium">{userName}</span>
        </div>
      </div>
    </div>
  );
}
