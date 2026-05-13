import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import LanguageSwitcher from "../components/LanguageSwitcher";
import {
  Upload,
  Sparkles,
  Palette,
  Shirt,
  Scissors,
  Droplet,
  Calendar,
  ArrowRight,
  Star,
  Check,
  Play,
  ScanFace,
  Box,
} from "lucide-react";

export default function LandingPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Purple glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/20 blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/70">{t("badge")}</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight tracking-tight">
              {t("heroTitle")}
            </h1>

            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              {t("heroSubtitle")}
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <Button onClick={() => navigate("/onboarding/welcome")}>
                <ArrowRight className="w-5 h-5 inline mr-2" />
                {t("startAnalysis")}
              </Button>
              <Button variant="outline">
                <Play className="w-5 h-5 inline mr-2" />
                {t("watchDemo")}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-white/50">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>{t("socialProof")}</span>
            </div>
          </div>

          {/* 3D Avatar Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <GlassCard className="p-12">
              <div className="grid md:grid-cols-3 gap-4">
                <GlassCard hover className="text-center">
                  <div className="text-purple-400 mb-2">{t("colorType")}</div>
                  <div className="font-bold">Весна</div>
                  <div className="flex justify-center gap-1 mt-3">
                    {["#FFE5B4", "#FFDAB9", "#FFB6C1", "#E6E6FA"].map((color) => (
                      <div
                        key={color}
                        className="w-6 h-6 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </GlassCard>
                <GlassCard hover className="text-center">
                  <div className="text-blue-400 mb-2">{t("faceShape")}</div>
                  <div className="font-bold">Овал</div>
                  <ScanFace className="w-12 h-12 mx-auto mt-3 text-blue-400/50" />
                </GlassCard>
                <GlassCard hover className="text-center">
                  <div className="text-pink-400 mb-2">{t("figureType")}</div>
                  <div className="font-bold">Песочные часы</div>
                  <Box className="w-12 h-12 mx-auto mt-3 text-pink-400/50" />
                </GlassCard>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t("howItWorks")}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard hover className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("step1Title")}</h3>
              <p className="text-white/60">{t("step1Desc")}</p>
            </GlassCard>

            <GlassCard hover className="text-center relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
                <ArrowRight className="w-6 h-6 text-purple-400" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("step2Title")}</h3>
              <p className="text-white/60">{t("step2Desc")}</p>
            </GlassCard>

            <GlassCard hover className="text-center relative">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
                <ArrowRight className="w-6 h-6 text-purple-400" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <Shirt className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("step3Title")}</h3>
              <p className="text-white/60">{t("step3Desc")}</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t("features")}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard hover>
              <ScanFace className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("faceShapeTitle")}</h3>
              <p className="text-white/60">{t("faceShapeDesc")}</p>
            </GlassCard>

            <GlassCard hover>
              <Palette className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("colorPaletteTitle")}</h3>
              <p className="text-white/60">{t("colorPaletteDesc")}</p>
            </GlassCard>

            <GlassCard hover>
              <Shirt className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("outfitsTitle")}</h3>
              <p className="text-white/60">{t("outfitsDesc")}</p>
            </GlassCard>

            <GlassCard hover>
              <Scissors className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("hairstylesTitle")}</h3>
              <p className="text-white/60">{t("hairstylesDesc")}</p>
            </GlassCard>

            <GlassCard hover>
              <Droplet className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("skincareTitle")}</h3>
              <p className="text-white/60">{t("skincareDesc")}</p>
            </GlassCard>

            <GlassCard hover>
              <Calendar className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t("seasonalTitle")}</h3>
              <p className="text-white/60">{t("seasonalDesc")}</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 3D Try-On */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">{t("tryOnTitle")}</h2>
              <p className="text-xl text-white/60 mb-8">{t("tryOnDesc")}</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>{t("tryOnFeature1")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>{t("tryOnFeature2")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span>{t("tryOnFeature3")}</span>
                </li>
              </ul>

              <Button>
                {t("tryButton")}
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </Button>
            </div>

            <GlassCard className="p-12 text-center">
              <Box className="w-32 h-32 mx-auto text-purple-400/30" />
              <p className="text-white/50 mt-4">3D Model Preview</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{t("pricingTitle")}</h2>

          <div className="flex justify-center gap-4 mb-12">
            <button className="px-4 py-2 rounded-lg bg-purple-500/20 text-white">
              {t("monthly")}
            </button>
            <button className="px-4 py-2 rounded-lg text-white/60 hover:text-white">
              {t("yearly")} <span className="text-purple-400">{t("yearlyDiscount")}</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard hover>
              <div className="text-center mb-6">
                <div className="text-2xl font-bold mb-2">{t("free")}</div>
                <div className="text-5xl font-bold">$0</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t("feature1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t("feature2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t("feature3")}</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">{t("selectPlan")}</Button>
            </GlassCard>

            <GlassCard className="border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 px-4 py-1 rounded-full text-sm">
                {t("popular")}
              </div>
              <div className="text-center mb-6">
                <div className="text-2xl font-bold mb-2">{t("premium")}</div>
                <div className="text-5xl font-bold">$5</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t("feature4")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t("feature5")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t("feature6")}</span>
                </li>
              </ul>
              <Button className="w-full">{t("selectPlan")}</Button>
            </GlassCard>

            <GlassCard hover>
              <div className="text-center mb-6">
                <div className="text-2xl font-bold mb-2">{t("vip")}</div>
                <div className="text-5xl font-bold">$15</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t("feature7")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t("feature8")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t("feature9")}</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">{t("selectPlan")}</Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t("testimonialsTitle")}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard hover>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
                <div>
                  <div className="font-bold">Анна К.</div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/70">{t("testimonial1")}</p>
            </GlassCard>

            <GlassCard hover>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                <div>
                  <div className="font-bold">Марат Б.</div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/70">{t("testimonial2")}</p>
            </GlassCard>

            <GlassCard hover>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400" />
                <div>
                  <div className="font-bold">София Л.</div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/70">{t("testimonial3")}</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-bold">StyleAI</span>
              </div>
              <p className="text-white/50 text-sm">
                {t("heroSubtitle")}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("features")}</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>{t("faceShapeTitle")}</li>
                <li>{t("colorPaletteTitle")}</li>
                <li>{t("hairstylesTitle")}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("pricing")}</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>{t("free")}</li>
                <li>{t("premium")}</li>
                <li>{t("vip")}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("designers")}</h4>
              <LanguageSwitcher />
            </div>
          </div>

          <div className="text-center text-white/30 text-sm border-t border-white/5 pt-8">
            © 2026 StyleAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
