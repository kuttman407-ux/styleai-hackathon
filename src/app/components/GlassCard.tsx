import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = false }: GlassCardProps) {
  return (
    <div
      className={`
        rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl
        ${hover ? "transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(159,103,255,0.3)] hover:border-purple-500/50" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
