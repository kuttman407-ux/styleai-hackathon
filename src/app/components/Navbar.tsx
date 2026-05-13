import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate, useLocation } from "react-router";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./Button";
import { Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide navbar on onboarding and dashboard
  if (location.pathname.includes("/onboarding") || location.pathname.includes("/dashboard")) {
    return null;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <Sparkles className="w-6 h-6 text-purple-400" />
          <span className="text-xl font-bold text-white">StyleAI</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("features")} className="text-white/70 hover:text-white transition-colors">
            {t("features")}
          </button>
          <button onClick={() => scrollToSection("how-it-works")} className="text-white/70 hover:text-white transition-colors">
            {t("howItWorks")}
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-white/70 hover:text-white transition-colors">
            {t("pricing")}
          </button>
          <button className="text-white/70 hover:text-white transition-colors">
            {t("designers")}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <button className="text-white/70 hover:text-white transition-colors">
            {t("signIn")}
          </button>
          <Button onClick={() => navigate("/onboarding/welcome")}>{t("startFree")}</Button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111118] border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <button onClick={() => scrollToSection("features")} className="block w-full text-left text-white/70 hover:text-white transition-colors">
              {t("features")}
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="block w-full text-left text-white/70 hover:text-white transition-colors">
              {t("howItWorks")}
            </button>
            <button onClick={() => scrollToSection("pricing")} className="block w-full text-left text-white/70 hover:text-white transition-colors">
              {t("pricing")}
            </button>
            <button className="block w-full text-left text-white/70 hover:text-white transition-colors">
              {t("designers")}
            </button>
            <button className="block w-full text-left text-white/70 hover:text-white transition-colors">
              {t("signIn")}
            </button>
            <Button onClick={() => navigate("/onboarding/welcome")} className="w-full">{t("startFree")}</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
