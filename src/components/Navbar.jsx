import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, data } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo variant="dark" stacked />
        </NavLink>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-charcoal/70 lg:flex">
            <span>PATROCINADOR OFICIAL</span>
            <img
              src="/src/assets/partners/estrella-damm.svg"
              alt="Estrella Damm"
              className="h-12 w-auto"
            />
          </div>
          <button
            type="button"
            className="burger-button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-charcoal/10 bg-off-white/95 px-6 py-8">
          <div className="mx-auto grid max-w-6xl gap-6">
            <NavLink to="/" onClick={() => setOpen(false)}>
              <Logo variant="dark" stacked />
            </NavLink>
            <div className="grid gap-4">
              {data.navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.3em] text-charcoal/80"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <NavLink to="/agenda" className="btn-secondary" onClick={() => setOpen(false)}>
                {data.labels.seeAgenda}
              </NavLink>
              <NavLink to="/contact" className="btn-primary" onClick={() => setOpen(false)}>
                {data.labels.reserve}
              </NavLink>
            </div>
            <div className="flex gap-2">
              {[
                { value: "es", label: "ES" },
                { value: "ca", label: "CA" },
                { value: "en", label: "EN" },
              ].map((lang) => (
                <button
                  key={lang.value}
                  type="button"
                  onClick={() => setLanguage(lang.value)}
                  className={`rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.25em] transition ${
                    language === lang.value
                      ? "border-charcoal bg-charcoal text-off-white"
                      : "border-charcoal/20 text-charcoal/70 hover:text-charcoal"
                  }`}
                  aria-pressed={language === lang.value}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
