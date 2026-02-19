import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/Logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#services" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  // { label: "Showcase", href: "#work" },
  // { label: "Review", href: "#review" },  { label: "Team", href: "#team" },
  // { label: "Contact", href: "#contact" } testing,
];

const HEADER_OFFSET = 84;

function scrollToSection(hash, smooth) {
  if (!hash || hash.charAt(0) !== "#") return false;
  const target = document.querySelector(hash);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
  return true;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const rafId = window.requestAnimationFrame(() => {
      if (!scrollToSection(location.hash, false)) {
        window.setTimeout(() => {
          scrollToSection(location.hash, false);
        }, 120);
      }
    });

    return () => window.cancelAnimationFrame(rafId);
  }, [location.pathname, location.hash]);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setIsOpen(false);

    if (!href.startsWith("#")) {
      navigate(href);
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }

    scrollToSection(href, true);
    window.history.replaceState(null, "", href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-0" aria-label="Go to home">
          <img src={logo} alt="Savingo" className="h-20 w-auto" />
          <span className="-ml-2 text-2xl font-semibold leading-none tracking-tight text-emerald-600">Savingo</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href.startsWith("#") ? (location.pathname === "/" ? item.href : `/${item.href}`) : item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="https://play.google.com/store/apps/details?id=com.jasmeet.accountapp"
            target="_blank"
            rel="noreferrer"
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
                href={item.href.startsWith("#") ? (location.pathname === "/" ? item.href : `/${item.href}`) : item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://play.google.com/store/apps/details?id=com.jasmeet.accountapp"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Download
            </a>          </nav>
        </div>
      )}
    </header>
  );
}














