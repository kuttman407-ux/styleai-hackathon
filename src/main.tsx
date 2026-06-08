import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights/next'; // Если хочешь отслеживать еще и скорость загрузки

// Инициализируем аналитику Vercel
inject();
injectSpeedInsights();

// Рендерим приложение (один раз, как и было изначально)
createRoot(document.getElementById("root")!).render(<App />);