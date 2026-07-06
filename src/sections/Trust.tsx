import Container from "../components/Container";

// "Кто нам доверяет" — wall of client logos, each on a frosted-glass tile.
// Desktop: 9-column grid (Figma 1440). Mobile: 4-column grid (Figma 390).
// Logos exported from Figma as tight transparent PNGs; per-logo width keeps
// each mark at its Figma proportion (% of tile, so it scales across breakpoints).
type Logo = { src: string; alt: string; w?: string; baked?: boolean };

const DEFAULT_W = "w-[80%]";

// Order = Figma reading order (row-major), identical on desktop and mobile.
const logos: Logo[] = [
  { src: "/assets/trust/apteka.png", alt: "apteka.ru", w: "w-[72%]" },
  { src: "/assets/trust/wink.png", alt: "Wink" },
  { src: "/assets/trust/aviasales.png", alt: "Aviasales" },
  { src: "/assets/trust/deliveryclub.png", alt: "Delivery Club" },
  { src: "/assets/trust/yandex.png", alt: "Яндекс" },
  { src: "/assets/trust/koshelek.png", alt: "Кошелёк", w: "w-[68%]" },
  { src: "/assets/trust/dodopizza.png", alt: "Додо Пицца" },
  { src: "/assets/trust/letoile.png", alt: "Лэтуаль", w: "w-[82%]" },
  { src: "/assets/trust/obi.png", alt: "OBI", w: "w-[74%]" },

  { src: "/assets/trust/tbank.png", alt: "Т-Банк" },
  { src: "/assets/trust/autoru.png", alt: "auto.ru", w: "w-[73%]" },
  { src: "/assets/trust/lamoda.png", alt: "Lamoda" },
  { src: "/assets/trust/rabotaru.png", alt: "Работа.ру" },
  { src: "/assets/trust/ozon.png", alt: "OZON" },
  { src: "/assets/trust/sportmaster.png", alt: "Спортмастер" },
  { src: "/assets/trust/raiffeisen.png", alt: "Райффайзен Банк" },
  { src: "/assets/trust/okko.png", alt: "Okko" },
  { src: "/assets/trust/ivi.png", alt: "ivi", w: "w-[54%]" },

  { src: "/assets/trust/ostin.png", alt: "O'STIN", w: "w-[86%]" },
  { src: "/assets/trust/vk.png", alt: "VK", w: "w-[42%]" },
  { src: "/assets/trust/burgerking.png", alt: "Burger King", w: "w-[42%]" },
  { src: "/assets/trust/adamas.png", alt: "ADAMAS", w: "w-[75%]" },
  { src: "/assets/trust/perekrestok.png", alt: "Перекрёсток" },
  { src: "/assets/trust/joom.png", alt: "JOOM", w: "w-[75%]" },
  { src: "/assets/trust/skillbox.png", alt: "Skillbox" },
  { src: "/assets/trust/aliexpress.png", alt: "AliExpress" },
  { src: "/assets/trust/azbukavkusa.png", alt: "Азбука Вкуса" },

  { src: "/assets/trust/s7.png", alt: "S7 Airlines" },
  { src: "/assets/trust/kazanexpress.png", alt: "KazanExpress" },
  { src: "/assets/trust/tanuki.png", alt: "Тануки", w: "w-[84%]" },
  { src: "/assets/trust/hoff.png", alt: "Hoff", w: "w-[55%]" },
  { src: "/assets/trust/sbermegamarket.png", alt: "СберМегаМаркет" },
  { src: "/assets/trust/skyeng.png", alt: "Skyeng" },
  { src: "/assets/trust/sunlight.png", alt: "SUNLIGHT" },
  { src: "/assets/trust/sokolov.png", alt: "SOKOLOV" },
  { src: "/assets/trust/ekonika.png", alt: "ЕКОНИКА" },
];

export default function Trust() {
  return (
    <section className="w-full py-12 lg:py-20">
      <Container>
        {/* Header */}
        <div data-reveal className="mb-10 lg:mb-16">
          <p className="mb-3 font-body text-[15px] text-text-muted lg:mb-4 lg:text-[18px]">
            Нам доверяют
          </p>
          <h2 className="font-display text-[36px] font-bold leading-[1.0] text-text lg:text-[64px]">
            Кто нам доверяет
          </h2>
        </div>

        {/* Logo wall */}
        <div data-stagger data-stagger-each="0.07" className="grid grid-cols-4 gap-2.5 lg:grid-cols-9 lg:gap-[11px]">
          {logos.map((logo) =>
            logo.baked ? (
              <div
                key={logo.src}
                className="relative aspect-[80/52] lg:aspect-[132.444/78.4]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  draggable={false}
                  className="absolute block select-none object-fill pointer-events-none"
                  style={{
                    top: "-5.36%",
                    left: "-8.46%",
                    right: "-8.46%",
                    bottom: "-23.21%",
                  }}
                />
              </div>
            ) : (
              <div
                key={logo.src}
                className="glass relative flex aspect-[80/52] items-center justify-center overflow-hidden rounded-[12px] lg:aspect-[132.444/78.4] lg:rounded-[16.8px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  draggable={false}
                  className={`${logo.w ?? DEFAULT_W} h-auto select-none object-contain pointer-events-none`}
                />
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
