import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, data } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-off-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo variant="dark" />
        </NavLink>
        <div className="hidden items-center gap-8 lg:flex">
          {data.navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => `nav-link ${isActive ? "text-charcoal" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-charcoal/20 bg-off-white p-1 text-[11px] uppercase tracking-[0.3em] md:flex">
            {[
              { value: "es", label: "ES" },
              { value: "ca", label: "CA" },
              { value: "en", label: "EN" },
            ].map((lang) => (
              <button
                key={lang.value}
                type="button"
                onClick={() => setLanguage(lang.value)}
                className={`rounded-full px-3 py-2 transition ${
                  language === lang.value
                    ? "bg-charcoal text-off-white"
                    : "text-charcoal/70 hover:text-charcoal"
                }`}
                aria-pressed={language === lang.value}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <select
            aria-label="Language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className="rounded-full border border-charcoal/20 bg-off-white px-3 py-2 text-[11px] uppercase tracking-[0.25em] md:hidden"
          >
            <option value="es">ES</option>
            <option value="ca">CA</option>
            <option value="en">EN</option>
          </select>
          <NavLink to="/agenda" className="btn-secondary hidden md:inline-flex">
            {data.labels.seeAgenda}
          </NavLink>
          <NavLink to="/contact" className="btn-primary hidden md:inline-flex">
            {data.labels.reserve}
          </NavLink>
          <button
            type="button"
            className="ml-2 inline-flex items-center justify-center rounded-full border border-charcoal/20 px-3 py-2 text-xs uppercase tracking-[0.2em] lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-charcoal/10 bg-off-white/95 px-6 py-6 lg:hidden">
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
            <div className="flex gap-3 pt-4">
              <NavLink to="/agenda" className="btn-secondary" onClick={() => setOpen(false)}>
                {data.labels.seeAgenda}
              </NavLink>
              <NavLink to="/contact" className="btn-primary" onClick={() => setOpen(false)}>
                {data.labels.reserve}
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
