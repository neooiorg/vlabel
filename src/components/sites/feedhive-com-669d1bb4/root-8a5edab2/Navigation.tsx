import { ChevronDown } from "lucide-react";

export function Navigation() {
  return (
    <header className="relative z-30 px-4 pb-4 pt-4 sm:px-6 lg:px-8 lg:pb-5 lg:pt-5">
      <div className="mx-auto flex max-w-[1188px] items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2">
          <img
            src="/sites/feedhive-com-669d1bb4/shared/logo.webp"
            alt="FeedHive"
            className="h-8 w-auto"
          />
        </a>

        {/* Nav links — desktop only */}
        <nav className="hidden items-center gap-7 lg:flex">
          <a
            href="#"
            className="flex items-center gap-1 text-[15px] font-[450] text-[#20232b] transition-colors hover:text-[#4457ff]"
          >
            Product
            <ChevronDown className="h-3.5 w-3.5 opacity-50" />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-[15px] font-[450] text-[#20232b] transition-colors hover:text-[#4457ff]"
          >
            Socials
            <ChevronDown className="h-3.5 w-3.5 opacity-50" />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-[15px] font-[450] text-[#20232b] transition-colors hover:text-[#4457ff]"
          >
            Learn
            <ChevronDown className="h-3.5 w-3.5 opacity-50" />
          </a>
          <a
            href="#"
            className="text-[15px] font-[450] text-[#20232b] transition-colors hover:text-[#4457ff]"
          >
            Pricing
          </a>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-2">
          <a
            href="https://app.feedhive.com/login"
            className="hidden h-9 items-center rounded-[11px] border border-[#dfdfe4] px-[18px] text-[14px] font-[500] text-[#20232b] transition-colors hover:border-[#20232b] lg:inline-flex"
          >
            Login
          </a>
          <a
            href="https://app.feedhive.com/signup"
            className="inline-flex h-9 items-center rounded-[11px] bg-[#4457ff] px-[18px] text-[14px] font-[500] text-white transition-colors duration-300 hover:bg-[#4F5FD7]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
