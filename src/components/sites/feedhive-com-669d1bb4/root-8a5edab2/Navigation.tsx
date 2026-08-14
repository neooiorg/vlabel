"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giải pháp", href: "/giai-phap" },
  { label: "Cách hoạt động", href: "/cach-hoat-dong" },
  { label: "Tuân thủ", href: "/tuan-thu" },
  { label: "FAQ", href: "/faq" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 px-4 pb-4 pt-4 sm:px-6 lg:px-8 lg:pb-5 lg:pt-5">
        <div className="mx-auto flex max-w-[1188px] items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/images/vlabel-logo.png"
              alt="Vlabel"
              width={34}
              height={38}
              sizes="40px"
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
            <a
              href="/#tu-van"
              className="hidden h-9 items-center rounded-[11px] bg-[#4457ff] px-[18px] text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#4F5FD7] sm:inline-flex"
            >
              Nhận tư vấn
            </a>
            {/* Hamburger — mobile only */}
            <div className="lg:hidden">
              <button
                onClick={() => setOpen(true)}
                aria-label="Mở menu"
                className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-black/10 text-[#20232b]"
              >
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
          {/* Backdrop */}
          <div
            className={cn("absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <div className={cn("absolute right-0 top-0 flex h-full w-[280px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out", open ? "translate-x-0" : "translate-x-full")}>
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
              <a href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <Image
                  src="/images/vlabel-logo.png"
                  alt="Vlabel"
                  width={28}
                  height={32}
                  sizes="32px"
                  className="h-7 w-auto"
                />
                <span className="text-[17px] font-bold tracking-[-0.02em] text-[#20232b]">
                  Vlabel
                </span>
              </a>
              <button
                onClick={() => setOpen(false)}
                aria-label="Đóng menu"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#767b84] hover:bg-[#f7f7fb] hover:text-[#20232b]"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-0.5 px-3 pt-3">
              {navLinks.map((link) => {
                const basePath = link.href.split("#")[0].replace(/\/$/, "") || "/";
                const isActive = !link.href.includes("#") && pathname === basePath;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-[10px] px-3 py-2.5 text-[15px] font-medium transition-colors",
                      isActive
                        ? "bg-[#eef0ff] text-[#4457ff]"
                        : "text-[#20232b] hover:bg-[#f7f7fb] hover:text-[#4457ff]"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* CTA at bottom */}
            <div className="mt-auto border-t border-black/5 p-4">
              <a
                href="/#tu-van"
                onClick={() => setOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-[12px] bg-[#4457ff] text-[15px] font-medium text-white transition-colors hover:bg-[#4F5FD7]"
              >
                Nhận tư vấn
              </a>
            </div>
          </div>
      </div>
    </>
  );
}
