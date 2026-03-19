import { Link, Outlet } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";
import { useSiteContent } from "../i18n/useSiteContent";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang } = useI18n();
  const siteContent = useSiteContent();

  const navLinks = [
    { name: lang === "en" ? "Home" : "首頁", path: "/" },
    { name: lang === "en" ? "Solutions" : "解決方案", path: "/services" },
    { name: lang === "en" ? "Industries" : "適用產業", path: "/industries" },
    { name: lang === "en" ? "Case Studies" : "客戶案例", path: "/case-studies" },
    { name: lang === "en" ? "About" : "關於我們", path: "/about" },
    // { name: "最新洞察", path: "/blog" },
  ];

  const footerLinks = [
    { name: lang === "en" ? "FAQ" : "常見問答", path: "/faq" },
    // { name: "招募資訊", path: "/careers" },
    { name: lang === "en" ? "Contact" : "聯絡我們", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-200">
      {/* Navbar */}
      <header className="bg-slate-950/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="./logo.png"
                  alt={lang === "en" ? "ChenHsi logo" : "宸希科技 Logo"}
                  className="h-10 w-auto bg-transparent"
                  style={{ background: "transparent" }}
                />
                <span
                  className={
                    lang === "en"
                      ? "font-brand-en text-xl sm:text-2xl text-white leading-none"
                      : "font-bold text-2xl text-white tracking-tight"
                  }
                >
                  {lang === "en" ? siteContent.companyName : siteContent.companyNameZh}
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-slate-300 hover:text-white font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => setLang(lang === "zh" ? "en" : "zh")}
                className="text-slate-300 hover:text-white font-medium transition-colors px-3 py-2 rounded-full border border-white/10 hover:border-white/30"
                aria-label="Toggle language"
              >
                {lang === "zh" ? "EN" : "中文"}
              </button>
              <Link
                to="/contact"
                className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-light transition-colors shadow-[0_0_15px_rgba(91,66,243,0.4)] hover:shadow-[0_0_25px_rgba(91,66,243,0.6)]"
              >
                {lang === "en" ? "Get in touch" : "立即諮詢"}
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-white/10">
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <button
                  type="button"
                  onClick={() => {
                    setLang(lang === "zh" ? "en" : "zh");
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-center border border-white/10 text-slate-200 px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-colors mb-3"
                >
                  {lang === "zh" ? "切換到 English" : "Switch to 中文"}
                </button>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-light transition-colors shadow-[0_0_15px_rgba(91,66,243,0.4)]"
                >
                  {lang === "en" ? "Get in touch" : "立即諮詢"}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img
                  src="./logo.png"
                  alt={lang === "en" ? "ChenHsi logo" : "宸希科技 Logo"}
                  className="h-8 w-auto bg-transparent"
                  style={{ background: "transparent" }}
                />
                <span
                  className={
                    lang === "en"
                      ? "font-brand-en text-lg sm:text-xl text-white leading-none"
                      : "font-bold text-xl tracking-tight"
                  }
                >
                  {lang === "en" ? siteContent.companyName : siteContent.companyNameZh}
                </span>
              </div>
              <p className="text-slate-500 max-w-md leading-relaxed">
                {siteContent.seo_meta.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">{lang === "en" ? "Quick links" : "快速連結"}</h3>
              <ul className="space-y-4">
                {[...navLinks, ...footerLinks].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-slate-500 hover:text-white transition-colors flex items-center gap-1">
                      <ChevronRight size={16} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">{lang === "en" ? "Contact" : "聯絡資訊"}</h3>
              <ul className="space-y-4 text-slate-500">
                <li>{lang === "en" ? "B1, No. 66-7, Yucheng St., Nangang Dist., Taipei, Taiwan" : "台灣臺北市南港區玉成街66之7號地下一層"}</li>
                <li>support@chenhsiai.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {siteContent.companyName}. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-white transition-colors">{lang === "en" ? "Privacy" : "隱私權聲明"}</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">{lang === "en" ? "Terms" : "服務條款"}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
