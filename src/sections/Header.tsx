const navLinks = [
  { label: "Что предлагаем", href: "#tasks" },
  { label: "Кейсы", href: "#cases" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur-[18px]">
      <div className="relative mx-auto flex h-[60px] max-w-[1440px] items-center justify-between px-5 lg:h-[88px] lg:px-20">
        {/* Logo */}
        <a href="#" className="block shrink-0" aria-label="gloyal">
          <img
            src="/assets/header/gloyal-logo.svg"
            alt="gloyal"
            className="h-[26px] w-[97.606px] lg:h-[30px] lg:w-[112.623px]"
          />
        </a>

        {/* Desktop nav — centered */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-body text-[18px] font-medium leading-[1.3] text-text-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Меню"
          className="flex size-7 shrink-0 items-center justify-center lg:hidden"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-text-muted"
            aria-hidden="true"
          >
            <line x1="4" y1="8.5" x2="24" y2="8.5" />
            <line x1="4" y1="14" x2="24" y2="14" />
            <line x1="4" y1="19.5" x2="24" y2="19.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
