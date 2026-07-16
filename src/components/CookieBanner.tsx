import { useState } from "react";

const STORAGE_KEY = "gloyal-cookie-consent";

const readConsent = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
};

/**
 * Cookie consent bar — frosted pill pinned to the bottom of the viewport
 * (same glass recipe as the scrolled header). Dismissed state persists in
 * localStorage, so the banner never comes back after "Принять".
 */
export default function CookieBanner() {
  const [accepted, setAccepted] = useState(readConsent);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* private mode — hide for the session anyway */
    }
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div
      role="dialog"
      aria-label="Использование файлов cookie"
      className="intro fixed inset-x-5 bottom-5 z-[55] flex justify-center lg:inset-x-10 lg:bottom-8"
      style={{ animationDelay: "0.8s" }}
    >
      <div className="flex w-full max-w-[860px] flex-col items-start gap-4 rounded-[24px] bg-[#3d3b44]/65 px-6 py-5 backdrop-blur-[22px] backdrop-saturate-[60%] lg:flex-row lg:items-center lg:gap-8 lg:rounded-full lg:px-9 lg:py-5">
        <p className="font-body text-[14px] font-normal leading-[1.5] text-text-muted lg:text-[15px]">
          Мы используем файлы cookie для аналитики. Продолжая пользоваться
          сайтом, вы соглашаетесь с{" "}
          <a
            href="/policy"
            className="text-text underline decoration-text-muted/50 underline-offset-4 transition-colors hover:text-lime hover:decoration-lime/60"
          >
            политикой конфиденциальности
          </a>
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-lime px-7 py-[11px] font-body text-[15px] font-medium text-bg transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-16px_rgba(194,247,49,0.6)]"
        >
          Принять
        </button>
      </div>
    </div>
  );
}
