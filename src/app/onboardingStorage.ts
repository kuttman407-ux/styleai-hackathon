const NAME_KEY = "styleai_onboarding_name";

export function saveOnboardingName(name: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(NAME_KEY, name);
}

export function getOnboardingName(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(NAME_KEY);
}

export function clearOnboardingStorage() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(NAME_KEY);
}

