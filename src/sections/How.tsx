/* How — «Как работает gloyal»
   Asymmetric step grid (1–4) with two 3D mascots.
   Base = mobile (390), lg = desktop (1440). No animations. */

import type { ReactNode } from "react";

type Step = {
  num: string;
  title: string;
  grow: string; // lg flex weight
};

const row1: Step[] = [
  { num: "01", title: "Передача событий в Audience Builder gloyal", grow: "lg:flex-[2]" },
  { num: "02", title: "Формирование аудиторных сегментов под выбранный KPI", grow: "lg:flex-1" },
];

const row2: Step[] = [
  { num: "03", title: "Загрузка аудиторий в РК с персонализированными креативами", grow: "lg:flex-1" },
  { num: "04", title: "Автообновление аудиторий каждые 30 минут", grow: "lg:flex-[2]" },
];

function StepCard({ step, children }: { step: Step; children?: ReactNode }) {
  const isLast = step.num === "04";
  return (
    <div
      className={[
        "relative flex flex-col gap-3 rounded-[18px] bg-white/[0.09] px-5 py-[18px] backdrop-blur-[4px]",
        "shadow-[0px_4px_12px_-6px_rgba(0,0,0,0.18)]",
        "lg:h-full lg:justify-between lg:gap-0 lg:rounded-[28px] lg:p-6 lg:shadow-[0px_5px_14px_-6px_rgba(0,0,0,0.18)]",
        isLast ? "overflow-visible lg:overflow-hidden" : "overflow-hidden",
        step.grow,
      ].join(" ")}
    >
      {children}
      <span className="select-none font-display text-[56px] font-black leading-[0.9] text-white/[0.11] lg:text-[69px] lg:text-white/10">
        {step.num}
      </span>
      <h3 className="font-display text-[26px] font-semibold leading-[1.04] text-text lg:text-[30px]">
        {step.title}
      </h3>
    </div>
  );
}

export default function How() {
  return (
    <section id="how" className="w-full">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-[50px] lg:gap-12 lg:px-20 lg:py-20">
        {/* Header */}
        <div className="flex flex-col gap-2.5 lg:gap-3.5">
          <p className="font-body text-[13px] font-medium text-text-muted lg:text-[18px]">
            Как это устроено
          </p>
          <h2 className="font-display text-[44px] font-bold leading-[0.96] text-text lg:text-[72px] lg:leading-[0.95]">
            Как работает gloyal
          </h2>
        </div>

        {/* Step grid */}
        <div className="relative flex flex-col gap-3 lg:gap-6">
          <div className="flex flex-col gap-3 lg:h-[213px] lg:flex-row lg:gap-6">
            {row1.map((s) => (
              <StepCard key={s.num} step={s} />
            ))}
          </div>

          <div className="flex flex-col gap-3 lg:h-[200px] lg:flex-row lg:gap-6">
            <StepCard step={row2[0]} />
            <StepCard step={row2[1]}>
              {/* Green sphere — clipped into card corner on desktop, pokes above on mobile */}
              <img
                src="/assets/how/green-sphere.png"
                alt=""
                aria-hidden
                draggable={false}
                className="pointer-events-none absolute -top-9 right-4 z-10 w-[140px] rotate-[32deg] select-none lg:bottom-[-28px] lg:right-[-12px] lg:top-auto lg:w-[210px]"
              />
            </StepCard>
          </div>

          {/* Blue knot — top accent overlapping the grid */}
          <img
            src="/assets/how/blue-knot.png"
            alt=""
            aria-hidden
            draggable={false}
            className="pointer-events-none absolute -top-8 right-5 z-20 w-[130px] select-none lg:left-[36%] lg:right-auto lg:top-[-28px] lg:w-[280px]"
          />
        </div>
      </div>
    </section>
  );
}
