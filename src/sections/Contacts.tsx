import Container from "../components/Container";

export default function Contacts() {
  return (
    <footer id="contacts" className="w-full pt-[10px] pb-10 lg:pt-5 lg:pb-16">
      <Container className="flex flex-col items-start gap-6 lg:items-center lg:gap-16">
        {/* Top row: brand (desktop only) + contacts */}
        <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          {/* Brand — hidden on mobile per design */}
          <div className="hidden flex-col items-start gap-[14px] lg:flex">
            <img
              src="/assets/header/gloyal-logo.svg"
              alt="gloyal"
              className="h-[30px] w-[112.623px]"
            />
            <p className="font-body text-[18px] font-normal leading-[1.3] text-text-muted">
              Инструмент Мобио для работы с ретаргетингом
            </p>
            <a
              href="/policy"
              className="font-body text-[15px] font-normal text-text-muted/80 underline decoration-text-muted/40 underline-offset-4 transition-colors hover:text-text"
            >
              Политика конфиденциальности
            </a>
          </div>

          {/* Contacts */}
          <div className="flex flex-col items-start gap-2.5 lg:items-end lg:gap-3">
            <p className="font-body text-[13px] font-semibold text-lime lg:text-[18px] lg:leading-[1.3]">
              Контакты
            </p>
            <a
              href="mailto:newbiz@mobioagency.com"
              className="font-body text-[20px] font-semibold text-text lg:text-[22px] lg:leading-[1.3]"
            >
              newbiz@mobioagency.com
            </a>
            <p className="font-body text-[14px] font-normal leading-[1.5] text-text-muted lg:w-[420px] lg:text-right lg:text-[18px] lg:leading-[1.3]">
              127254, г. Москва, вн. тер. г. муниципальный округ Бутырский,
              проезд Огородный, д. 16/1, стр. 3, помещ. 807
            </p>
          </div>
        </div>

        {/* bottom row: privacy policy (mobile only — the brand block above is desktop-only) */}
        <div className="w-full lg:hidden">
          <a
            href="/policy"
            className="font-body text-[13px] font-normal text-text-muted/80 underline decoration-text-muted/40 underline-offset-4 transition-colors hover:text-text lg:text-[15px]"
          >
            Политика конфиденциальности
          </a>
        </div>
      </Container>
    </footer>
  );
}
