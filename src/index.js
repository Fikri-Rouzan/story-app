import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "./generated/locale-codes";

const STORAGE_KEY = "story-app";

const { getLocale: originalGetLocale, setLocale: originalSetLocale } =
  configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`./generated/locales/${locale}.js`),
  });

export const setLocale = (newLocale) => {
  originalSetLocale(newLocale);
  localStorage.setItem(STORAGE_KEY, newLocale);
};

export const getLocale = originalGetLocale;

const initialLocale = localStorage.getItem(STORAGE_KEY) || sourceLocale;
setLocale(initialLocale);

import "./app.js";
