import { FC, useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { useTranslation } from "next-i18next";
import AppSettings, { LANGUAGES, Settings } from "@/utils/app/AppSettings";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const SettingDialog: FC<Props> = ({ open, onClose }) => {
  const { t } = useTranslation("settings");
  const [inputEmail, setInputEmail] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        window.addEventListener("mouseup", handleMouseUp);
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener("mouseup", handleMouseUp);
      onClose();
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [onClose]);

  const handleSave = () => {};

  if (!open) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="fixed inset-0 z-10 overflow-hidden">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          />

          <div
            ref={modalRef}
            className="dark:border-netural-400 inline-block max-h-[400px] transform overflow-y-auto rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
            role="dialog"
          >
            <div className="text-lg pb-4 font-bold text-black dark:text-neutral-200">
              {t("Settings")}
            </div>
            <div className="text-sm font-bold mb-2 text-black dark:text-neutral-200">
              {t("Theme")}
            </div>
            <select
              className="w-full cursor-pointer bg-white p-2 text-black"
              value={"dark"}
            >
              <option value="dark">{t("Dark mode")}</option>
              <option value="light">{t("Light mode")}</option>
            </select>
            <div className="text-sm font-bold mb-2 text-black dark:text-neutral-200">
              {t("Language")}
            </div>
            <select
              className="w-full cursor-pointer bg-white p-2 text-black"
              value={"dark"}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>

            <div className="text-sm font-bold mb-2 text-black dark:text-neutral-200">
              {t("Delete account")}
            </div>

            <div className="flex items-center space-x-6 text-black dark:text-black">
              <input
                type="text"
                className="border p-2 w-72 rounded"
                placeholder={
                  t("Enter your email to confirm") ||
                  "Enter your email to confirm"
                }
                value={inputEmail}
                onChange={(event) => setInputEmail(event.target.value)}
              />
              <button
                type="button"
                disabled={inputEmail !== "test@mail.ru"}
                className="px-4 py-2  rounded-lg shadow  text-white bg-red-500 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-900 focus:outline-none"
                onClick={async () => {
                  const isConfirmed = window.confirm(
                    "Are you sure you want to delete the account?",
                  );
                  if (isConfirmed) {
                  }
                }}
              >
                {t("Delete account")}
              </button>
            </div>

            <button
              type="button"
              className="btn-grad w-full px-4 py-2 mt-6 border rounded-lg shadow border-neutral-500 text-neutral-900 hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
              onClick={() => {
                handleSave();
                onClose();
              }}
            >
              {t("Save & Close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
