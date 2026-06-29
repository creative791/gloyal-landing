type Accent = "lime" | "purple";

type Metric = { value: string; label: string };
type Bullet = { bold: string; rest: string };
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
    goal: "Снижение ДРР на платформах Android и iOS за счёт оптимизации ретаргетинга",
    metrics: [
      { value: "-29%", label: "Снижение ДРР" },
      { value: "-20%", label: "Снижение CPA" },
      { value: "+28%", label: "Рост Revenue" },
    ],
    intro: [
      "Инструменты: Собственный бот Мобио, Appsflyer Audiences",
      "Провели RFM-анализ данных за год, в ходе которого разделили всю текущую аудиторию приложения на узкие сегменты. В работу взяли 3 наиболее релевантных сегмента. В рамках медиастратегии выбрали стратегию минимальной цены. Сначала протестировали подход на Android, а после получения положительных результатов подключили на iOS. Под каждый сегмент было создано по три уникальных сообщения с персонализированными предложениями и промокодами.",
    ],
    bullets: [],
  },
  {
    brand: "EKONIKA",
    accent: "purple",
    goal: "Увеличить ROI в 2 раза, уменьшив расходы на рекламу",
    metrics: [
      { value: "3×", label: "Снижение ДРР более чем в 3 раза за первые два месяца" },
      { value: "16 000", label: "Уникальных пользователей за 1 месяц" },
    ],
    intro: [
      "Сформировали сценарии ретаргетинга и подобрали к ним персонализированные предложения:",
    ],
    bullets: [
      {
        bold: "Положили товар в корзину, но не заказали",
        rest: " — Вернули в корзину для продолжения оформления заказа",
      },
      {
        bold: "Сделали только один заказ",
        rest: " — Увеличили частоту заказов с помощью разных подходов оптимизации",
      },
      {
        bold: "Не сделали ни одного заказа",
        rest: " — Замотивировали на первый заказ, показывая актуальные предложения и скидки",
      },
      {
        bold: "Раньше заказывали, а потом перестали",
        rest: " — Побудили заказать вновь и привили привычку разными подходами",
      },
      {
        bold: "Заказывают постоянно",
        rest: " — Увеличили частоту заказов, напоминая о возможностях, и сформировали привычку",
      },
    ],
  },
  {
    brand: "Aviasales",
    accent: "lime",
    goal: "Разбудить пользователей, которые давно ничего не покупали, а также тех, кто искал билеты по определенному направлению, но так и не сделал бронь",
    metrics: [
      { value: "40 000+", label: "Возврат пользователей" },
      { value: "2×", label: "Качество трафика выросло в 2 раза" },
    ],
    intro: [
      "Запустили ретаргетинговую кампанию в myTarget. При настройке ориентировались на три целевые аудитории пользователей:",
    ],
    bullets: [
      {
        bold: "Искали билеты последние 30 дней, но ничего не бронировали",
        rest: " — Вернули пользователя, предлагая завершить процесс бронирования",
      },
      {
        bold: "Последний раз бронировали более 30 дней назад",
        rest: " — Предлагали купить билеты «прямо сейчас»",
      },
      {
        bold: "Не сделали ни одного заказа",
        rest: " — Замотивировали на первый заказ, показывая актуальные предложения перелетов",
      },
    ],
  },
];

function accentText(a: Accent) {
  return a === "lime" ? "text-lime" : "text-purple";
}
function accentDot(a: Accent) {
  return a === "lime" ? "bg-lime" : "bg-purple";
}

export default function Cases() {
  return (
    <section id="cases" className="w-full">
      <div className="mx-auto max-w-[1280px] px-5 py-10 lg:px-20 lg:py-20">
        {/* Section header */}
        <div className="mb-[22px] flex flex-col gap-[10px] lg:mb-10 lg:gap-[14px]">
          <span className="font-body text-[13px] font-medium text-text-muted lg:text-[18px]">
            Кейсы
          </span>
          <h2 className="font-display font-bold text-text text-[44px] leading-[0.96] lg:text-[72px] lg:leading-[0.95]">
            Результаты наших клиентов
          </h2>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-[22px] lg:gap-6">
          {cases.map((c) => (
            <article
              key={c.brand}
              className="flex flex-col gap-[18px] rounded-[22px] bg-[rgba(255,255,255,0.09)] p-[22px] shadow-[0px_4px_12px_-6px_rgba(0,0,0,0.18)] backdrop-blur-[4px] lg:gap-7 lg:rounded-[32px] lg:p-11 lg:shadow-[0px_5px_14px_-6px_rgba(0,0,0,0.18)]"
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
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex w-[152px] flex-col gap-0.5 rounded-[14px] bg-[rgba(255,255,255,0.06)] px-4 py-3 lg:w-[248px] lg:gap-1 lg:rounded-[18px] lg:bg-[rgba(255,255,255,0.09)] lg:px-6 lg:py-[18px] lg:shadow-[0px_5px_14px_-6px_rgba(0,0,0,0.18)] lg:backdrop-blur-[4px]"
                  >
                    <span
                      className={`font-display font-black leading-none text-[40px] lg:text-[50px] ${accentText(
                        c.accent,
                      )}`}
                    >
                      {m.value}
                    </span>
                    <span className="font-body text-[13px] font-medium leading-[1.28] text-text-muted lg:text-[18px] lg:leading-[1.3]">
                      {m.label}
                    </span>
                  </div>
                ))}
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
                  <ul className="flex flex-col gap-[10px]">
                    {c.bullets.map((b) => (
                      <li key={b.bold} className="flex items-start gap-3">
                        <span
                          className={`mt-[7px] size-1.5 shrink-0 rounded-full lg:mt-[10px] lg:size-[7px] ${accentDot(
                            c.accent,
                          )}`}
                        />
                        <p className="font-body text-[14px] leading-[1.5] text-text-muted lg:text-[18px]">
                          <span className="font-semibold text-text">{b.bold}</span>
                          {b.rest}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
