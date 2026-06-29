export default function Contacts() {
  return (
    <footer id="contacts" className="w-full">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-5 pt-[10px] pb-10 lg:items-center lg:gap-16 lg:px-20 lg:pt-5 lg:pb-16">
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
              Инструмент Мобио для работы с ретаргетингом
            </p>
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

        {/* Divider — hidden on mobile */}
        <div className="hidden h-px w-full bg-white/[0.08] lg:block" />

        {/* Copyright */}
        <p className="font-body text-[13px] font-normal text-text-muted lg:text-[18px]">
          © 2026 gloyal
        </p>
      </div>
    </footer>
  );
}
