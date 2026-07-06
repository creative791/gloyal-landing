import Container from "../components/Container";

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
  // Only 4 unique logos — a single pass (~950px) is narrower than the viewport, which
  // would leave an empty gap mid-loop. So we build a "loop unit" by repeating the set
  // until it's wider than any screen, then double THAT. translateX(-50%) then loops one
  // loop unit seamlessly with no empty space.
  const loopUnit = [...logos, ...logos, ...logos]; // ~2.8k px, wider than any viewport
  const track = [...loopUnit, ...loopUnit];

  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col py-10 lg:py-[72px]">
        {/* Header */}
        <Container data-reveal className="mb-10 lg:mb-16">
          <p className="mb-3 font-body text-[15px] text-text-muted lg:mb-4 lg:text-[18px]">
            Экосистема
          </p>
          <h2 className="font-display text-[36px] font-bold leading-[1.0] text-text lg:text-[64px]">
            Интеграции gloyal
          </h2>
        </Container>

        {/* Full-bleed marquee row with edge fades */}
        <div
          data-reveal
          className="w-full overflow-hidden"
          style={{ maskImage: edgeFade, WebkitMaskImage: edgeFade }}
        >
          <div className="marquee-track flex w-max items-center">
            {track.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                aria-hidden={i >= logos.length}
                draggable={false}
                className={`${logo.h} mr-11 w-auto shrink-0 select-none lg:mr-[84px]`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
