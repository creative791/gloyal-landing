// Logos of integration partners. Duplicated at render time for a seamless
// marquee loop (CSS animation added in a later pass — static row for now).
const logos = [
  { src: "/assets/integrations/mobidick.png", alt: "Mobidick", h: "h-7 lg:h-10" },
  { src: "/assets/integrations/vkontakte.png", alt: "ВКонтакте", h: "h-7 lg:h-[34px]" },
  {
    src: "/assets/integrations/yandex-partner.png",
    alt: "Сертифицированный партнёр Яндекса",
    h: "h-7 lg:h-[76px]",
  },
  { src: "/assets/integrations/appsflyer.png", alt: "AppsFlyer", h: "h-7 lg:h-[57px]" },
];

// Soft fade on both horizontal edges so logos dissolve into the background.
const edgeFade =
  "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)";

export default function Integrations() {
  // Render the set twice so the track is wide enough for a seamless future loop.
  const track = [...logos, ...logos];

  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col gap-6 py-10 lg:gap-10 lg:py-[72px]">
        {/* Header */}
        <div className="flex flex-col gap-2.5 px-5 lg:gap-[14px] lg:px-20">
          <p className="font-body text-[15px] font-medium leading-[1.3] text-text-muted lg:text-[18px]">
            Экосистема
          </p>
          <h2 className="font-display text-[34px] font-bold leading-[0.95] text-text lg:text-[64px]">
            Интеграции gloyal
          </h2>
        </div>

        {/* Full-bleed marquee row with edge fades */}
        <div
          className="w-full overflow-hidden"
          style={{ maskImage: edgeFade, WebkitMaskImage: edgeFade }}
        >
          <div className="flex w-max items-center gap-11 lg:gap-[84px]">
            {track.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                aria-hidden={i >= logos.length}
                draggable={false}
                className={`${logo.h} w-auto shrink-0 select-none`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
