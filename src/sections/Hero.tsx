const tezisy = [
  "Мониторинг событий клиента из трекинга для создания и обновления аудиторий",
  "Глубокая проработка сценариев ретаргетинга для роста конверсий",
  "Обновление аудиторий каждые 30 минут и снижение затрат на рекламные кампании",
];

export default function Hero() {
  return (
    <section className="w-full">
      {/* pt clears the fixed Header (60px mobile / 88px desktop) + Figma top padding */}
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[22px] px-5 pt-[84px] pb-10 lg:gap-7 lg:px-20 lg:pt-[144px] lg:pb-[44px]">
        {/* Badge */}
        <div className="glass flex w-fit items-center rounded-full px-4 py-2 shadow-[0px_5px_14px_-6px_rgba(0,0,0,0.18)] lg:h-12 lg:px-[18px] lg:py-[9px]">
          <span className="whitespace-nowrap font-body text-[13px] font-medium text-text-muted lg:text-[15px]">
            Инструмент Мобио для ретаргетинга
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-text text-[72px] leading-[0.88] lg:max-w-[947px] lg:text-[240px] lg:leading-[0.7]">
          Ретаргетинг с gloyal
        </h1>

        {/* Tezisy + CTA */}
        <div className="flex flex-col gap-[22px] lg:mt-[13px] lg:flex-row lg:items-stretch lg:gap-5">
          {tezisy.map((t) => (
            <div
              key={t}
              className="glass flex flex-1 items-start gap-3 rounded-[18px] px-5 py-[18px] shadow-[0px_5px_14px_-6px_rgba(0,0,0,0.18)] lg:flex-col lg:gap-4 lg:rounded-[20px] lg:px-7 lg:py-[26px]"
            >
              <span className="mt-[6px] size-2 shrink-0 rounded-full bg-lime lg:mt-0 lg:size-2.5" />
              <p className="font-body text-[16px] font-normal leading-[1.4] text-text-muted lg:text-[18px]">
                {t}
              </p>
            </div>
          ))}

          {/* CTA */}
          <a
            href="#contacts"
            className="flex items-center justify-center gap-2 rounded-full bg-purple px-7 py-[18px] text-center lg:flex-1 lg:rounded-[600px] lg:p-7"
          >
            <span className="font-body text-[18px] font-semibold text-text lg:text-[28px] lg:leading-[1.15]">
              Написать нам
            </span>
            <svg
              className="size-5 shrink-0 text-text lg:size-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
