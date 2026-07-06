import type { ComponentPropsWithoutRef } from "react";

/**
 * Shared content container. Content is pinned to the page edges with fluid
 * gutters that match the Figma macet: 80px on desktop, shrinking to 40px on
 * narrower screens and 20px on mobile. No centered max-width block — everything
 * lines up to the left edge under the logo. Extra props (data-*, id, …) pass through.
 */
export default function Container({
  children,
  className = "",
  ...rest
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-[1920px] px-5 md:px-10 lg:px-20 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
