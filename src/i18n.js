import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: {
        home: {
          name: "Travis",
          title: {
            lineOne: " Hi, I'm Dat",
            jobName: "Frontend Developer",
            location: "Based In Ho Chi Minh",
          },
        },
      },
    },
    vn: {
      translation: {
        home: {
          name: "Bá Đạt",
          title: {
            lineOne: " Hi, I'm Dat",
            jobName: "Lập Trình Viên Frontend",
            location: "Based In Ho Chi Minh",
          },
        },
      },
    },
  },
});

export default i18n;
