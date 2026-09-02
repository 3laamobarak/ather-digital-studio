import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ar" | "en";

const STORAGE_KEY = "athr-lang";

type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: <T>(value: Record<Lang, T>) => T;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") {
      setLangState(stored);
      return;
    }
    const browser = window.navigator.language?.toLowerCase() ?? "";
    setLangState(browser.startsWith("en") ? "en" : "ar");
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      dir,
      setLang,
      toggle: () => setLang(lang === "ar" ? "en" : "ar"),
      t: (value) => value[lang],
    }),
    [lang, dir, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
