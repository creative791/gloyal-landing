import type { ReactNode } from "react";
import Container from "../components/Container";

type IconProps = { className?: string };

/* ---- inline line icons (lucide-style, 1.6px stroke) ---- */
function IconBase({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ZapIcon = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M13 2L4.09 12.97a1 1 0 0 0 .77 1.63h6.14L11 22l8.91-10.97a1 1 0 0 0-.77-1.63H13L13 2z" />
  </IconBase>
);

const LayersIcon = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M12 2 2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </IconBase>
);

const SendIcon = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7z" />
  </IconBase>
);

const ClockIcon = (p: IconProps) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </IconBase>
);

const SlidersIcon = (p: IconProps) => (
  <IconBase {...p}>
    <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" />
    <path d="M2 14h4M10 8h4M18 16h4" />
  </IconBase>
);

const ShareIcon = (p: IconProps) => (
  <IconBase {...p}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </IconBase>
);

/* ---- shared bits ---- */
function IconChip({ children }: { children: ReactNode }) {
  return (
    <div className="flex size-[46px] shrink-0 items-center justify-center rounded-[14px] bg-white/10 lg:size-[52px] lg:rounded-[15px]">
      {children}
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-white/[0.06] px-[14px] py-[8px] font-body text-[14px] font-medium leading-none text-text-muted lg:px-[16px] lg:py-[10px] lg:text-[18px]">
      {label}
    </span>
  );
}

const tileTitle =
  "font-display text-[24px] font-semibold leading-[1.06] text-text lg:text-[30px] lg:leading-none";

const integrations = [
  "AppsFlyer",
  "Яндекс Директ",
  "VK Реклама",
  "Mobidick",
  "myTarget",
  "Appmetrica",
];

const sources = [
  "Event",
  "Revenue",
  "Operator",
  "Device",
  "OS",
  "City",
  "Wi-Fi",
  "Event Time",
];

export default function Why() {
  return (
    <section className="w-full pb-[50px] pt-[10px] lg:py-20">
      <Container>
        {/* header */}
        <div data-reveal className="mb-10 lg:mb-16">
          <p className="mb-3 font-body text-[15px] text-text-muted lg:mb-4 lg:text-[18px]">
            Преимущества
          </p>
          <h2 className="font-display text-[36px] font-bold leading-[1.0] text-text lg:text-[64px]">
            Почему вам стоит выбрать gloyal
          </h2>
        </div>

        {/* bento — tiles appear one by one, left → right */}
        <div data-seq className="flex flex-col gap-[12px] lg:gap-[24px]">
          {/* row 1: lime stat + integrations */}
          <div className="flex flex-col gap-[12px] lg:h-[250px] lg:flex-row lg:gap-[24px]">
            {/* purple stat tile (matches Figma source) */}
            <div data-seq-item className="flex flex-col gap-[8px] rounded-[18px] bg-purple px-[24px] py-[22px] text-white lg:h-full lg:flex-[5] lg:justify-between lg:gap-0 lg:rounded-[28px] lg:p-[32px]">
              <div className="hidden size-[52px] items-center justify-center rounded-[15px] bg-white/15 lg:flex">
                <ZapIcon className="size-[34px]" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-display text-[72px] font-black leading-[0.88] lg:text-[104px] lg:leading-[0.85]">
                  3 дня
                </p>
                <p className="font-body text-[16px] font-semibold leading-[1.3] lg:text-[18px]">
                  Запуск проекта от трёх дней
                </p>
              </div>
            </div>

            {/* integrations tile */}
            <div data-seq-item className="glass flex flex-col gap-[16px] rounded-[18px] p-[20px] lg:h-full lg:flex-[7] lg:justify-between lg:gap-0 lg:rounded-[28px] lg:p-[32px]">
              <div className="flex items-center gap-[14px] lg:gap-[18px]">
                <IconChip>
                  <LayersIcon className="size-6 text-purple lg:size-[34px]" />
                </IconChip>
                <h3 className="font-display text-[24px] font-semibold leading-none text-text lg:text-[32px]">
                  Интеграции
                </h3>
              </div>
              <div className="flex flex-wrap gap-[10px] lg:gap-[12px]">
                {integrations.map((label) => (
                  <Pill key={label} label={label} />
                ))}
              </div>
            </div>
          </div>

          {/* row 2: triptych */}
          <div className="flex flex-col gap-[12px] lg:h-[210px] lg:flex-row lg:gap-[24px]">
            <div data-seq-item className="glass flex flex-col gap-[16px] rounded-[18px] p-[20px] lg:h-full lg:flex-1 lg:justify-between lg:gap-0 lg:rounded-[28px] lg:p-[32px]">
              <IconChip>
                <SendIcon className="size-6 text-lime lg:size-[34px]" />
              </IconChip>
              <h3 className={tileTitle}>
                Бесплатная автопередача событий в Audience Builder gloyal
              </h3>
            </div>
            <div data-seq-item className="glass flex flex-col gap-[16px] rounded-[18px] p-[20px] lg:h-full lg:flex-1 lg:justify-between lg:gap-0 lg:rounded-[28px] lg:p-[32px]">
              <IconChip>
                <ClockIcon className="size-6 text-purple lg:size-[34px]" />
              </IconChip>
              <h3 className={tileTitle}>Неограниченные периоды сбора аудиторий</h3>
            </div>
            <div data-seq-item className="glass flex flex-col gap-[16px] rounded-[18px] p-[20px] lg:h-full lg:flex-1 lg:justify-between lg:gap-0 lg:rounded-[28px] lg:p-[32px]">
              <IconChip>
                <SlidersIcon className="size-6 text-lime lg:size-[34px]" />
              </IconChip>
              <h3 className={tileTitle}>
                Сегментирование по правилам на стороне gloyal — без аналитиков
              </h3>
            </div>
          </div>

          {/* row 3: full-width sources */}
          <div data-seq-item className="glass flex flex-col gap-[16px] rounded-[18px] p-[20px] lg:gap-[24px] lg:rounded-[28px] lg:p-[32px]">
            <div className="flex items-center gap-[14px] lg:gap-[18px]">
              <IconChip>
                <ShareIcon className="size-6 text-purple lg:size-[34px]" />
              </IconChip>
              <h3 className="font-display text-[24px] font-semibold leading-[1.06] text-text lg:text-[30px] lg:leading-none">
                Сегментация трафика по источникам
              </h3>
            </div>
            <div className="flex flex-wrap gap-[10px] lg:gap-[12px]">
              {sources.map((label) => (
                <Pill key={label} label={label} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
