export const LANGUAGES = ["en", "de", "ru"];
const STORAGE_KEY = "settings";

let instance: AppSettings | undefined = undefined;

export interface Settings {
  theme: "light" | "dark";
  language: string;
}

class AppSettings {
  settings: Settings;

  static getInstance(): AppSettings {
    if (!instance) {
      instance = new AppSettings();
    }

    return instance;
  }

  constructor() {
    this.settings = this.loadSettings();
  }

  static get(): Partial<Settings> {
    if (typeof window === "undefined") {
      return {};
    }
    return this.getInstance().settings;
  }

  static set(settings: Settings) {
    this.getInstance().storeSettings(settings);
  }

  private loadSettings(): Settings {
    let savedSettings: Partial<Settings> = {};
    try {
      const settingsJson = localStorage.getItem(STORAGE_KEY);
      if (settingsJson) {
        savedSettings = JSON.parse(settingsJson) as Settings;
      }
    } catch (e) {
      console.error(e);
    }

    return {
      theme: savedSettings.theme ?? "dark",
      language: savedSettings.language ?? getLanguageFromPath() ?? "en",
    };
  }

  private storeSettings(settings: Settings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    this.settings = settings;
  }
}

export function getLanguageFromPath() {
  const lang = window.location.pathname.split("/")[1];
  if (lang && LANGUAGES.includes(lang)) {
    return lang;
  }
  return null;
}

export default AppSettings;
