import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useLanguage } from "../../context/LanguageContext";
import GlassCard from "../../components/GlassCard";
import Button from "../../components/Button";
import { Upload, Sparkles, ArrowLeft, LogOut } from "lucide-react";
import { clearOnboardingStorage } from "../../onboardingStorage";

export default function OnboardingUpload() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  type UploadKey = "face" | "profile" | "fullBody";
  const uploadItems: { key: UploadKey; label: string }[] = [
    { key: "face", label: t("uploadFace") },
    { key: "profile", label: t("uploadProfile") },
    { key: "fullBody", label: t("uploadFullBody") },
  ];

  const [files, setFiles] = useState<Record<UploadKey, File | null>>({
    face: null,
    profile: null,
    fullBody: null,
  });

  const [previews, setPreviews] = useState<Record<UploadKey, string | null>>({
    face: null,
    profile: null,
    fullBody: null,
  });

  const previewUrlsRef = useRef<Record<UploadKey, string | null>>({
    face: null,
    profile: null,
    fullBody: null,
  });

  useEffect(() => {
    // Cleanup object URLs on unmount only.
    return () => {
      (Object.values(previewUrlsRef.current) as Array<string | null>).forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, []);

  const handleExit = () => {
    clearOnboardingStorage();
    navigate("/");
  };

  const setFileForKey = (key: UploadKey, file: File | null) => {
    setFiles((prev) => ({ ...prev, [key]: file }));

    setPreviews((prev) => {
      const next = { ...prev };
      if (next[key]) URL.revokeObjectURL(next[key]!);
      next[key] = file ? URL.createObjectURL(file) : null;
      previewUrlsRef.current = next;
      return next;
    });
  };

  const handleNext = () => {
    navigate("/onboarding/params");
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
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>

          <h1 className="text-4xl font-bold mb-4">{t("uploadTitle")}</h1>
        </div>

        <GlassCard>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {uploadItems.map((upload) => {
              const isSelected = !!files[upload.key];
              const previewUrl = previews[upload.key];
              const inputId = `upload-${upload.key}`;

              return (
                <label
                  key={upload.key}
                  htmlFor={inputId}
                  className={`aspect-square rounded-xl border-2 border-dashed transition-all flex flex-col items-center justify-center gap-3 cursor-pointer ${
                    isSelected ? "border-purple-500 bg-purple-500/10" : "border-white/20 bg-white/5 hover:border-purple-500/50"
                  }`}
                >
                  <input
                    id={inputId}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.currentTarget.files?.[0] ?? null;
                      setFileForKey(upload.key, file);
                      // Allow selecting the same file again
                      e.currentTarget.value = "";
                    }}
                  />

                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt={upload.label}
                      className="w-20 h-20 object-cover rounded-lg shadow-sm"
                    />
                  ) : (
                    <Upload className={`w-12 h-12 ${isSelected ? "text-purple-400" : "text-white/50"}`} />
                  )}

                  <div className="flex flex-col items-center">
                    <span className="text-sm">{upload.label}</span>
                    {files[upload.key] && (
                      <span className="text-xs text-white/50 mt-1 truncate max-w-[12rem]">{files[upload.key]!.name}</span>
                    )}
                  </div>
                </label>
              );
            })}
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => navigate("/onboarding/welcome")} className="w-full">
              <ArrowLeft className="w-5 h-5 inline mr-2" />
              {t("back")}
            </Button>
            <Button onClick={handleNext} className="w-full">
              {t("next")}
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
