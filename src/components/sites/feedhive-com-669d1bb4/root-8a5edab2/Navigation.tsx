"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Giải pháp", href: "/giai-phap" },
  { label: "Cách hoạt động", href: "/cach-hoat-dong" },
  { label: "Tuân thủ", href: "/tuan-thu" },
  { label: "FAQ", href: "/faq" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="relative z-30 px-4 pb-4 pt-4 sm:px-6 lg:px-8 lg:pb-5 lg:pt-5">
      <div className="mx-auto flex max-w-[1188px] items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/vlabel-logo.png"
            alt="Vlabel"
            width={34}
            height={38}
            className="h-9 w-auto"
            priority
          />
          <span
            className="text-[20px] font-bold tracking-[-0.02em] text-[#20232b]"
            style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
          >
            Vlabel
          </span>
        </a>

        {/* Nav links — desktop only */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const basePath = link.href.split("#")[0].replace(/\/$/, "") || "/";
            const isActive = !link.href.includes("#") && pathname === basePath;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-[15px] transition-colors hover:text-[#4457ff]",
                  isActive ? "font-semibold text-[#4457ff]" : "font-medium text-[#20232b]"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <div className="mr-1 hidden items-center rounded-full border border-[#e4e4ea] p-0.5 text-[13px] font-semibold sm:flex">
            <span className="rounded-full bg-[#eef0ff] px-2.5 py-1 text-[#4457ff]">VI</span>
            <span className="cursor-pointer rounded-full px-2.5 py-1 text-[#767b84] transition-colors hover:text-[#20232b]">
              EN
            </span>
          </div>
          <a
            href="/#tu-van"
            className="inline-flex h-9 items-center rounded-[11px] bg-[#4457ff] px-[18px] text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#4F5FD7]"
          >
            Nhận tư vấn
          </a>
        </div>
      </div>
    </header>
  );
}
