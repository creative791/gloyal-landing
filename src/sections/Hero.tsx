import Container from "../components/Container";
import { openContactForm } from "../components/ContactModal";

const tezisy = [
  "Мониторинг событий клиента из трекинга для создания и обновления аудиторий",
  "Глубокая проработка сценариев ретаргетинга для роста конверсий",
  "Обновление аудиторий каждые 30 минут и снижение затрат на рекламные кампании",
];

export default function Hero() {
  return (
    <section className="w-full">
      {/* pt clears the fixed Header (60px mobile / 88px desktop) + Figma top padding */}
      <Container className="flex flex-col gap-[22px] pt-[84px] pb-10 lg:gap-7 lg:pt-[144px] lg:pb-[44px]">
        {/* Badge */}
        <div
          className="intro glass flex w-fit items-center rounded-full px-4 py-2 lg:h-12 lg:px-[18px] lg:py-[9px]"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="whitespace-nowrap font-body text-[13px] font-medium text-text-muted lg:text-[15px]">
            Инструмент Мобио для ретаргетинга
          </span>
        </div>

        {/* Title */}
        <h1
          className="intro-title font-display font-extrabold text-text text-[72px] leading-[0.88] lg:max-w-[947px] lg:text-[180px] lg:leading-[0.7]"
          style={{ animationDelay: "0.5s" }}
        >
          Ретаргетинг с&nbsp;gloyal
        </h1>

        {/* Tezisy + CTA — appear left → right after the title */}
        <div className="flex flex-col gap-[22px] lg:mt-[13px] lg:flex-row lg:items-stretch lg:gap-5">
          {tezisy.map((t, i) => (
            <div
              key={t}
              className="intro glass flex flex-1 items-start gap-3 rounded-[18px] px-5 py-[18px] lg:flex-col lg:gap-4 lg:rounded-[20px] lg:px-7 lg:py-[26px]"
              style={{ animationDelay: `${1.05 + i * 0.22}s` }}
            >
              <span className="mt-[6px] size-2 shrink-0 rounded-full bg-lime lg:mt-0 lg:size-2.5" />
              <p className="font-body text-[16px] font-normal leading-[1.4] text-text-muted lg:text-[18px]">
                {t}
              </p>
            </div>
          ))}

          {/* CTA */}
          <button
            type="button"
            onClick={openContactForm}
            className="intro group relative flex items-center justify-center overflow-hidden rounded-full bg-purple px-7 py-[18px] text-center transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_14px_34px_-14px_rgba(194,247,49,0.55)] lg:flex-1 lg:rounded-[600px] lg:p-7"
            style={{ animationDelay: `${1.05 + tezisy.length * 0.22}s` }}
          >
            {/* lime fill sweeps up from the bottom on hover */}
            <span
              aria-hidden
              className="absolute inset-0 origin-bottom scale-y-0 rounded-[inherit] bg-lime transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
            />
            <span className="relative z-10 font-body text-[17px] font-semibold text-white transition-colors duration-300 group-hover:text-bg lg:text-[24px] lg:leading-[1.15]">
              Написать нам
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
}
