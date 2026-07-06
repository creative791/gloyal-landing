import Container from "../components/Container";
import { openContactForm } from "../components/ContactModal";

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
            <button
              type="button"
              onClick={openContactForm}
              className="glass group relative mt-2 inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-[14px] font-body text-[18px] font-medium text-text-muted transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-16px_rgba(194,247,49,0.5)]"
            >
              {/* lime fill sweeps up from the bottom on hover */}
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 rounded-[inherit] bg-lime transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-bg">
                Написать нам
              </span>
            </button>
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
      </Container>
    </footer>
  );
}
