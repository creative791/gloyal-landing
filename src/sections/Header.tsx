import { useEffect, useState } from "react";
import Container from "../components/Container";

const navLinks = [
  { label: "Что предлагаем", href: "/#tasks" },
  { label: "Кейсы", href: "/#cases" },
  { label: "Контакты", href: "/#contacts" },
];

function Logo() {
  return (
    <a href="/" className="block shrink-0" aria-label="gloyal">
      <img
        src="/assets/header/gloyal-logo.svg"
        alt="gloyal"
        className="h-[26px] w-[97.606px] lg:h-[30px] lg:w-[112.623px]"
      />
    </a>
  );
}

function NavLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="whitespace-nowrap font-body text-[18px] font-normal leading-[1.3] text-text-muted transition-colors hover:text-text"
        >
          {link.label}
        </a>
      ))}
    </>
  );
}

function Burger({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Меню"
      onClick={onClick}
      className="flex size-7 shrink-0 items-center justify-center lg:hidden"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="text-text-muted"
        aria-hidden="true"
      >
        <line x1="4" y1="8.5" x2="24" y2="8.5" />
        <line x1="4" y1="14" x2="24" y2="14" />
        <line x1="4" y1="19.5" x2="24" y2="19.5" />
      </svg>
    </button>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={[
        "fixed inset-0 z-[60] lg:hidden",
        open ? "" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      {/* dark backdrop fades in */}
      <div
        className={[
          "absolute inset-0 bg-[#16121d] transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      {/* panel slides down + fades */}
      <div
        className={[
          "relative flex h-full flex-col transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
        ].join(" ")}
      >
        {/* top bar: logo + close */}
        <div className="flex h-[60px] shrink-0 items-center justify-between px-5">
          <Logo />
          <button
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
            className="flex size-7 items-center justify-center text-text-muted transition-colors hover:text-text"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="7" y1="7" x2="21" y2="21" />
              <line x1="21" y1="7" x2="7" y2="21" />
            </svg>
          </button>
        </div>

        {/* links */}
        <nav className="flex flex-1 flex-col items-start justify-center gap-8 px-5 pb-24">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-display text-[34px] font-semibold leading-none text-text transition-colors hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const openMenu = () => setMenuOpen(true);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* TOP STATE — full width, no panel, blends into the hero bg. */}
        <div
          className={[
            "transition-all duration-300",
            scrolled
              ? "pointer-events-none -translate-y-2 opacity-0"
              : "translate-y-0 opacity-100",
          ].join(" ")}
        >
          <Container className="relative flex h-[60px] items-center justify-between lg:h-[88px]">
            <Logo />
            <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 lg:flex">
              <NavLinks />
            </nav>
            <Burger onClick={openMenu} />
          </Container>
        </div>

        {/* SCROLLED STATE — floating frosted pill that slides down into view. */}
        <div
          className={[
            "absolute inset-x-0 top-0 flex justify-center px-5 transition-all duration-300",
            scrolled
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0",
          ].join(" ")}
        >
          <div className="mt-3 flex w-full max-w-[640px] items-center justify-between gap-8 rounded-full bg-[#3d3b44]/65 px-6 py-3 backdrop-blur-[22px] backdrop-saturate-[60%] lg:w-fit lg:justify-start lg:gap-10 lg:px-10 lg:py-[18px]">
            <Logo />
            <nav className="hidden items-center gap-10 lg:flex">
              <NavLinks />
            </nav>
            <Burger onClick={openMenu} />
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
