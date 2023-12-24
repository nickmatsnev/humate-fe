module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["de", "en", "ru"],
    localeDetection: false,
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/public/locales",
};
