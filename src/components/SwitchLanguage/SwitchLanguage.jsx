import { useTranslation } from "react-i18next";

const language = [
  { code: "en", native: "English" },
  { code: "vn", native: "Vietnamese" },
];

const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      {language.map((lng, i) => {
        const { code, native } = lng;
        return (
          <button
            key={i}
            onClick={() => handleTrans(code)}
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {native}
          </button>
        );
      })}
    </>
  );
};

export default SwitchLanguage;
