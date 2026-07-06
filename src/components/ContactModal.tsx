import { useEffect, useState } from "react";

/** Dispatch this from any "Написать нам" button to open the form. */
export const openContactForm = () =>
  window.dispatchEvent(new Event("open-contact"));

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const empty = { name: "", phone: "", email: "" };

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(empty);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const onOpen = () => {
      setSent(false);
      setForm(empty);
      setConsent(false);
      setOpen(true);
    };
    window.addEventListener("open-contact", onOpen);
    return () => window.removeEventListener("open-contact", onOpen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify Forms (works automatically once deployed to Netlify)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    }).catch(() => {});
    setSent(true);
  };

  const inputCls =
    "w-full rounded-[8px] bg-white/[0.08] px-5 py-[14px] font-body text-[16px] text-text placeholder:text-text-muted outline-none transition-colors focus:bg-white/[0.13]";

  return (
    <div
      className={[
        "fixed inset-0 z-[70] flex items-center justify-center p-5 transition-opacity duration-300",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-hidden={!open}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-[6px]"
        onClick={() => setOpen(false)}
      />

      {/* card — solid dark panel for strong contrast against the page */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Напишите нам"
        className={[
          "relative w-full max-w-[460px] rounded-[8px] bg-[#241d2c] p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 lg:p-9",
          open ? "translate-y-0 scale-100" : "translate-y-3 scale-[0.98]",
        ].join(" ")}
      >
        {/* close */}
        <button
          type="button"
          aria-label="Закрыть"
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 flex size-8 items-center justify-center text-text-muted transition-colors hover:text-text"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        {sent ? (
          <div className="flex flex-col items-start gap-3 py-6">
            <div className="flex size-12 items-center justify-center rounded-full bg-lime">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2a2231" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-[32px] font-bold leading-[1.05] text-text">
              Спасибо!
            </h3>
            <p className="font-body text-[16px] leading-[1.4] text-text-muted">
              Заявка отправлена — мы свяжемся с вами в ближайшее время.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-lime px-7 py-3 font-body text-[16px] font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display text-[34px] font-bold leading-[1.0] text-text lg:text-[40px]">
              Напишите нам
            </h3>
            <p className="mt-2 font-body text-[16px] leading-[1.4] text-text-muted">
              и мы свяжемся с вами в&nbsp;ближайшее время
            </p>

            <form
              name="contact"
              onSubmit={submit}
              className="mt-6 flex flex-col gap-3"
            >
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={set("name")}
                placeholder="Имя"
                className={inputCls}
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={set("phone")}
                placeholder="Телефон"
                className={inputCls}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={set("email")}
                placeholder="Почта"
                className={inputCls}
              />

              {/* personal-data consent (required) */}
              <label className="mt-1 flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-[2px] size-[18px] shrink-0 cursor-pointer accent-lime"
                />
                <span className="font-body text-[13px] leading-[1.4] text-text-muted">
                  Я разрешаю сохранять и обрабатывать мои персональные данные
                </span>
              </label>

              {/* lime submit with sweep hover */}
              <button
                type="submit"
                className="group relative mt-2 flex items-center justify-center overflow-hidden rounded-[8px] bg-lime px-7 py-[15px] transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10 font-body text-[17px] font-semibold text-bg">
                  Отправить
                </span>
              </button>
              <p className="mt-1 text-center font-body text-[12px] leading-[1.4] text-text-muted/70">
                Укажите телефон или почту для связи
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
