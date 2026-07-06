import type { ReactNode } from "react";
import Container from "../components/Container";

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

const TrendingDown = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </svg>
);

const Activity = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const TrendingUp = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const ShoppingBag = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const Heart = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const BarChart = ({ className }: IconProps) => (
  <svg className={className} {...svgBase}>
    <path d="M4 21h16" />
    <path d="M7 21v-8" />
    <path d="M12 21v-14" />
    <path d="M17 21v-19" />
  </svg>
);

/* Data ------------------------------------------------------------------ */

type Task = {
  title: string;
  desc?: string;
  icon: (p: IconProps) => ReactNode;
  iconColor: string; // text-* class for stroke color
  lime?: boolean;
  grow: string; // lg flex weight class
};

const row1: Task[] = [
  {
    title: "Снижение CPA и ДРР",
    desc: "Главная метрика эффективности ретаргетинговых кампаний",
    icon: TrendingDown,
    iconColor: "text-lime",
    grow: "lg:flex-[2]",
  },
  {
    title: "Увеличение частоты целевых действий",
    icon: Activity,
    iconColor: "text-purple",
    grow: "lg:flex-1",
  },
  {
    title: "Увеличение ARPPU",
    icon: TrendingUp,
    iconColor: "text-purple",
    grow: "lg:flex-1",
  },
];

const row2: Task[] = [
  {
    title: "Увеличение среднего чека",
    icon: ShoppingBag,
    iconColor: "text-purple",
    grow: "lg:flex-1",
  },
  {
    title: "Увеличение LTV пользователя",
    icon: Heart,
    iconColor: "text-purple",
    grow: "lg:flex-1",
  },
  {
    title: "Рост ROI",
    desc: "Итоговая отдача от вложений в рекламу",
    icon: BarChart,
    iconColor: "text-bg",
    lime: true,
    grow: "lg:flex-[2]",
  },
];

/* Card ------------------------------------------------------------------ */

function Card({ task }: { task: Task }) {
  const { lime } = task;
  const Icon = task.icon;
  return (
    <div
      data-seq-item
      className={[
        "flex flex-col gap-[22px] overflow-hidden rounded-[18px] px-5 pt-5 pb-[22px]",
        "lg:h-full lg:justify-between lg:gap-0 lg:rounded-[28px] lg:p-8",
        task.grow,
        lime
          ? "bg-lime"
          : "glass",
      ].join(" ")}
    >
      <div
        className={[
          "flex size-[46px] shrink-0 items-center justify-center rounded-[14px]",
          "lg:size-14 lg:rounded-2xl",
          lime ? "bg-white/40" : "glass",
        ].join(" ")}
      >
        <Icon className={`size-6 lg:size-[34px] ${task.iconColor}`} />
      </div>

      <div className="flex flex-col gap-2 lg:gap-2.5">
        <h3
          className={`font-display text-[26px] font-semibold leading-[1.04] lg:text-[32px] lg:leading-none ${
            lime ? "text-bg" : "text-text"
          }`}
        >
          {task.title}
        </h3>
        {task.desc && (
          <p
            className={`font-body text-[15px] font-normal leading-[1.4] lg:text-[18px] lg:leading-[1.3] ${
              lime ? "text-bg/70" : "text-text-muted"
            }`}
          >
            {task.desc}
          </p>
        )}
      </div>
    </div>
  );
}

/* Section --------------------------------------------------------------- */

export default function Tasks() {
  return (
    <section id="tasks" className="w-full py-[50px] lg:py-20">
      <Container className="flex flex-col">
        {/* Header */}
        <div data-reveal className="mb-10 lg:mb-16">
          <p className="mb-3 font-body text-[15px] text-text-muted lg:mb-4 lg:text-[18px]">
            Возможности
          </p>
          <h2 className="font-display text-[36px] font-bold leading-[1.0] text-text lg:text-[64px]">
            Какие задачи решает gloyal
          </h2>
        </div>

        {/* Bento grid — tiles appear one by one, left → right */}
        <div data-seq className="flex flex-col gap-3 lg:gap-6">
          <div className="flex flex-col gap-3 lg:h-[250px] lg:flex-row lg:gap-6">
            {row1.map((t) => (
              <Card key={t.title} task={t} />
            ))}
          </div>
          <div className="flex flex-col gap-3 lg:h-[240px] lg:flex-row lg:gap-6">
            {row2.map((t) => (
              <Card key={t.title} task={t} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
