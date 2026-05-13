import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="dark size-full">
        <RouterProvider router={router} />
      </div>
    </LanguageProvider>
  );
}