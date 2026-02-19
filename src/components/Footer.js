import React from "react";
import { Dribbble, Facebook, Instagram, Twitter, Video } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Vimeo", href: "https://vimeo.com", icon: Video },
  { label: "Dribbble", href: "https://dribbble.com", icon: Dribbble },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://x.com", icon: Twitter },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-sm">(c) Savingo. All rights reserved. Savingo app concept, workflow, and system design are proprietary.</p>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition-colors hover:bg-slate-800"
      >
        ↑
      </button>
    </>
  );
}


