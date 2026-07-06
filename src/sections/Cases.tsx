import type { ReactNode } from "react";
import Container from "../components/Container";
import CountUp from "../components/CountUp";

/* Inline line icons (lucide-style, thin stroke) ------------------------- */

type IconProps = { className?: string };

const svgBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ShoppingCart = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const Package = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="M3.3 7 12 12l8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

const Gift = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);

const History = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </svg>
);

const Repeat = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <path d="m17 2 4 4-4 4" />
    <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
    <path d="m7 22-4-4 4-4" />
    <path d="M21 13v1a4 4 0 0 1-4 4H3" />
  </svg>
);

const Search = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const Clock = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const Plane = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

type Accent = "lime" | "purple";

type Metric = { value: string; label: string };
type Bullet = { icon: (p: IconProps) => ReactNode; bold: string; rest: string };
type CaseItem = {
  brand: string;
  accent: Accent;
  goal: string;
  metrics: Metric[];
  intro: string[];
  bullets: Bullet[];
};

const cases: CaseItem[] = [
  {
    brand: "Тануки",
    accent: "lime",
    goal: "Снижение ДРР на платформах Android и iOS за счёт оптимизации ретаргетинга",
    metrics: [
      { value: "-29%", label: "Снижение ДРР" },
      { value: "-20%", label: "Снижение CPA" },
      { value: "+28%", label: "Рост Revenue" },
    ],
    intro: [
      "Инструменты: Собственный бот Мобио, Appsflyer Audiences",
      "Провели RFM-анализ данных за год, в ходе которого разделили всю текущую аудиторию приложения на узкие сегменты. В работу взяли 3 наиболее релевантных сегмента. В рамках медиастратегии выбрали стратегию минимальной цены. Сначала протестировали подход на Android, а после получения положительных результатов подключили на iOS. Под каждый сегмент было создано по три уникальных сообщения с персонализированными предложениями и промокодами.",
    ],
    bullets: [],
  },
  {
    brand: "EKONIKA",
    accent: "purple",
    goal: "Увеличить ROI в 2 раза, уменьшив расходы на рекламу",
    metrics: [
      { value: "3×", label: "Снижение ДРР более чем в 3 раза за первые два месяца" },
      { value: "16 000", label: "Уникальных\nпользователей\nза 1 месяц" },
    ],
    intro: [
      "Сформировали сценарии ретаргетинга и подобрали к ним персонализированные предложения:",
    ],
    bullets: [
      {
        icon: ShoppingCart,
        bold: "Положили товар в корзину, но не заказали",
        rest: " — Вернули в корзину для продолжения оформления заказа",
      },
      {
        icon: Package,
        bold: "Сделали только один заказ",
        rest: " — Увеличили частоту заказов с помощью разных подходов оптимизации",
      },
      {
        icon: Gift,
        bold: "Не сделали ни одного заказа",
        rest: " — Замотивировали на первый заказ, показывая актуальные предложения и скидки",
      },
      {
        icon: History,
        bold: "Раньше заказывали, а потом перестали",
        rest: " — Побудили заказать вновь и привили привычку разными подходами",
      },
      {
        icon: Repeat,
        bold: "Заказывают постоянно",
        rest: " — Увеличили частоту заказов, напоминая о возможностях, и сформировали привычку",
      },
    ],
  },
  {
    brand: "Aviasales",
    accent: "lime",
    goal: "Разбудить пользователей, которые давно ничего не покупали, а также тех, кто искал билеты по определенному направлению, но так и не сделал бронь",
    metrics: [
      { value: "40 000+", label: "Возврат пользователей" },
      { value: "2×", label: "Качество трафика выросло в 2 раза" },
    ],
    intro: [
      "Запустили ретаргетинговую кампанию в myTarget. При настройке ориентировались на три целевые аудитории пользователей:",
    ],
    bullets: [
      {
        icon: Search,
        bold: "Искали билеты последние 30 дней, но ничего не бронировали",
        rest: " — Вернули пользователя, предлагая завершить процесс бронирования",
      },
      {
        icon: Clock,
        bold: "Последний раз бронировали\nболее 30 дней назад",
        rest: " — Предлагали купить билеты «прямо сейчас»",
      },
      {
        icon: Plane,
        bold: "Не сделали ни одного заказа",
        rest: " — Замотивировали на первый заказ, показывая актуальные предложения перелетов",
      },
    ],
  },
];

function accentText(a: Accent) {
  return a === "lime" ? "text-lime" : "text-purple";
}

export default function Cases() {
  return (
    <section id="cases" className="w-full py-10 lg:py-20">
      <Container>
        {/* Section header */}
        <div data-reveal className="mb-10 lg:mb-16">
          <span className="mb-3 block font-body text-[15px] text-text-muted lg:mb-4 lg:text-[18px]">
            Кейсы
          </span>
          <h2 className="font-display font-bold text-text text-[36px] leading-[1.0] lg:text-[64px]">
            Результаты наших клиентов
          </h2>
        </div>

        {/* Cases */}
        <div data-stagger className="flex flex-col gap-[22px] lg:gap-6">
          {cases.map((c) => (
            <article
              key={c.brand}
              className="glass flex flex-col gap-[18px] rounded-[22px] p-[22px] lg:gap-7 lg:rounded-[32px] lg:p-11"
            >
              {/* Card head: brand + goal */}
              <div className="flex flex-col gap-[18px] lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                <div className="flex flex-col gap-[18px] lg:gap-[14px]">
                  <span
                    className={`flex w-fit items-center rounded-full bg-[rgba(255,255,255,0.09)] px-3 py-1.5 font-body text-[12px] font-medium lg:bg-[rgba(255,255,255,0.08)] lg:text-[18px] ${accentText(
                      c.accent,
                    )}`}
                  >
                    Кейс
                  </span>
                  <h3 className="font-display font-bold text-text text-[40px] leading-[0.96] lg:text-[54px] lg:leading-[0.95]">
                    {c.brand}
                  </h3>
                </div>
                <p className="font-body text-[15px] font-normal leading-[1.4] text-text-muted lg:w-[460px] lg:text-right lg:text-[18px]">
                  {c.goal}
                </p>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-[10px] lg:gap-[14px]">
                {c.metrics.map((m, i) => {
                  // only the FIRST metric tile is coloured, in the case's accent;
                  // the rest stay on dark glass
                  const colored = i === 0;
                  const lime = c.accent === "lime";
                  const tileBg = colored ? (lime ? "bg-lime" : "bg-purple") : "glass-dark";
                  const numColor = colored
                    ? lime
                      ? "text-bg"
                      : "text-white"
                    : accentText(c.accent);
                  const labelColor = colored
                    ? lime
                      ? "text-bg/80"
                      : "text-white/85"
                    : "text-text-muted";
                  return (
                    <div
                      key={m.label}
                      className={`flex w-[152px] flex-col gap-0.5 rounded-[14px] px-4 py-3 lg:w-[248px] lg:gap-1 lg:rounded-[18px] lg:px-6 lg:py-[18px] ${tileBg}`}
                    >
                      <CountUp
                        value={m.value}
                        className={`font-display font-black leading-none text-[40px] lg:text-[50px] ${numColor}`}
                      />
                      <span
                        className={`whitespace-pre-line font-body text-[13px] font-medium leading-[1.28] lg:text-[18px] lg:leading-[1.3] ${labelColor}`}
                      >
                        {m.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[rgba(255,255,255,0.1)] lg:bg-[rgba(255,255,255,0.09)]" />

              {/* Mechanics */}
              <div className="flex flex-col gap-[14px] lg:gap-4">
                <span
                  className={`font-body text-[14px] font-semibold lg:text-[18px] ${accentText(
                    c.accent,
                  )}`}
                >
                  Механика
                </span>
                {c.intro.map((p) => (
                  <p
                    key={p}
                    className="font-body text-[14px] font-normal leading-[1.5] text-text-muted lg:text-[18px] lg:leading-[1.55]"
                  >
                    {p}
                  </p>
                ))}
                {c.bullets.length > 0 && (
                  <ul className="grid gap-2.5 lg:grid-cols-3 lg:gap-3">
                    {c.bullets.map((b) => (
                      <li
                        key={b.bold}
                        className="glass-dark flex flex-col gap-2.5 rounded-[16px] p-4 lg:gap-3 lg:rounded-[20px] lg:p-5"
                      >
                        <b.icon className="size-[22px] text-text-muted/60 lg:size-[26px]" />
                        <p className="whitespace-pre-line font-body text-[14px] font-semibold leading-[1.35] text-text lg:text-[17px]">
                          {b.bold}
                        </p>
                        <p className="mt-auto font-body text-[13px] leading-[1.45] text-text-muted lg:text-[15px]">
                          {b.rest.replace(/^\s*—\s*/u, "")}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
