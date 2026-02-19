import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const handleNavClick = () => {
    if (document.activeElement && typeof document.activeElement.blur === "function") {
      document.activeElement.blur();
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  };

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white" style={{ paddingTop: "2.25rem", paddingBottom: "2.25rem" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-start">
          {/* Left - Brand */}
          <div>
            <h3 className="text-2xl font-bold" style={{ margin: 0, lineHeight: 1.2 }}>Savingo</h3>
            <p className="text-slate-300" style={{ margin: "0.35rem 0 0 0", lineHeight: 1.4 }}>Ledger, Money Manager</p>
            <p className="text-slate-400 text-sm" style={{ margin: "0.2rem 0 0 0", lineHeight: 1.45 }}>Simple, powerful expense tracking for everyone.</p>
          </div>

          {/* Right - Links */}
          <div className="flex justify-start md:justify-end gap-1 md:self-center mt-14">
            <Link to="/privacy-policy" onClick={handleNavClick} className="text-slate-300 hover:text-white transition-colors font-medium text-sm">
              Privacy Policy
            </Link>
            <span className="text-slate-300">|</span>
            <Link to="/terms-of-service" onClick={handleNavClick} className="text-slate-300 hover:text-white transition-colors font-medium text-sm">
              Terms of Service
            </Link>
            <span className="text-slate-300">|</span>
            <a href="mailto:contact@merasoftware.com" className="text-slate-300 hover:text-white transition-colors font-medium text-sm">
              Contact Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-4">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm" style={{ margin: 0, lineHeight: 1.4 }}>
              © {currentYear} Savingo: Ledger, Money Manager. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm" style={{ margin: 0, lineHeight: 1.4 }}>
              Developed by Mera Software
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
