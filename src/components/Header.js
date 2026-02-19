import React, { useState } from "react";
import logo from "../images/Logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#services" },
  { label: "Showcase", href: "#work" },
  { label: "Review", href: "#review" },  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="inline-flex items-center gap-0" aria-label="Go to home">
          <img src={logo} alt="Savingo" className="h-20 w-auto" />
          <span className="-ml-2 text-2xl font-semibold leading-none tracking-tight text-emerald-600">Savingo</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="#download"
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Download
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
        >
          <span className="text-lg leading-none">{isOpen ? "X" : "Menu"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Download
            </a>          </nav>
        </div>
      )}
    </header>
  );
}

















