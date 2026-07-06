/* How — «Как работает gloyal»
   Asymmetric step grid (1–4) with two 3D mascots.
   Base = mobile (390), lg = desktop (1440). No animations. */

import type { ReactNode } from "react";
import Container from "../components/Container";

type Step = {
  num: string;
  title: string;
  grow: string; // lg flex weight
};

const row1: Step[] = [
  { num: "01", title: "Передача событий в Audience Builder gloyal", grow: "lg:flex-[2]" },
  { num: "02", title: "Формирование аудиторных сегментов под выбранный KPI", grow: "lg:flex-1" },
];

const row2: Step[] = [
  { num: "03", title: "Загрузка аудиторий в РК с персонализированными креативами", grow: "lg:flex-1" },
  { num: "04", title: "Автообновление аудиторий каждые 30 минут", grow: "lg:flex-[2]" },
];

function StepCard({ step, children }: { step: Step; children?: ReactNode }) {
  return (
    <div
      data-seq-item
      className={[
        "glass relative flex flex-col gap-3 overflow-hidden rounded-[18px] px-5 py-[18px]",
        "lg:h-full lg:justify-between lg:gap-0 lg:rounded-[28px] lg:p-6",
        step.grow,
      ].join(" ")}
    >
      {/* 3D figure sits BEHIND the text (z-0); number + title stay readable on top (z-10) */}
      {children}
      <span className="relative z-10 select-none font-display text-[56px] font-black leading-[0.9] text-white/[0.11] lg:text-[69px] lg:text-white/10">
        {step.num}
      </span>
      <h3 className="relative z-10 font-display text-[26px] font-semibold leading-[1.04] text-text lg:text-[30px]">
        {step.title}
      </h3>
    </div>
  );
}

export default function How() {
  return (
    <section id="how" className="w-full py-[50px] lg:py-20">
      <Container className="flex flex-col">
        {/* Header */}
        <div data-reveal className="mb-10 lg:mb-16">
          <p className="mb-3 font-body text-[15px] text-text-muted lg:mb-4 lg:text-[18px]">
            Как это устроено
          </p>
          <h2 className="font-display text-[36px] font-bold leading-[1.0] text-text lg:text-[64px]">
            Как работает gloyal
          </h2>
        </div>

        {/* Step grid — steps reveal in order 1 → 2 → 3 → 4 */}
        <div data-seq className="relative flex flex-col gap-3 lg:gap-6">
          <div className="flex flex-col gap-3 lg:h-[213px] lg:flex-row lg:gap-6">
            <StepCard step={row1[0]}>
              {/* blue knot — inscribed into card 01, clipped by the card so it can never
                  spill out at any width */}
              <img
                src="/assets/how/blue-knot.png"
                alt=""
                aria-hidden
                draggable={false}
                className="pointer-events-none absolute right-[-6px] top-[-18px] z-0 w-[192px] select-none lg:right-[4%] lg:top-[-86px] lg:w-[300px]"
              />
            </StepCard>
            <StepCard step={row1[1]} />
          </div>

          <div className="flex flex-col gap-3 lg:h-[200px] lg:flex-row lg:gap-6">
            <StepCard step={row2[0]} />
            <StepCard step={row2[1]}>
              {/* green sphere — inscribed into card 04: big, pushed into the right edge so
                  the card's rounded rectangle crops it (overflow-hidden on the card) */}
              <img
                src="/assets/how/green-sphere.png"
                alt=""
                aria-hidden
                draggable={false}
                className="pointer-events-none absolute right-[-20px] top-1/2 z-0 w-[204px] -translate-y-1/2 select-none lg:right-[-136px] lg:w-[360px]"
              />
            </StepCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
