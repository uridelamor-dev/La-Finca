import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { data } = useLanguage();

  return (
    <footer className="border-t border-charcoal/10 bg-off-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo variant="dark" />
          <p className="text-sm text-charcoal/70">{data.footer.about}</p>
          <div className="text-xs uppercase tracking-[0.3em] text-charcoal/60">{data.footer.location}</div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="text-xs uppercase tracking-[0.3em] text-olive">{data.footer.explore}</div>
          {data.navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className="block text-charcoal/70 hover:text-charcoal">
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="space-y-4 text-sm">
          <div className="text-xs uppercase tracking-[0.3em] text-olive">{data.footer.inquiries}</div>
          <div className="text-charcoal/70">hello@lafinca.com</div>
          <div className="text-charcoal/70">+34 600 123 987</div>
          <div className="flex gap-3">
            <span className="chip">Instagram</span>
            <span className="chip">TikTok</span>
            <span className="chip">Spotify</span>
          </div>
        </div>
      </div>
      <div className="border-t border-charcoal/10 px-6 py-6 text-center text-xs uppercase tracking-[0.3em] text-charcoal/60">
        {data.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
