import { Link, Outlet } from "react-router-dom";
import { siteContent } from "../data/content";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "首頁", path: "/" },
    { name: "解決方案", path: "/services" },
    { name: "適用產業", path: "/industries" },
    { name: "客戶案例", path: "/case-studies" },
    { name: "關於我們", path: "/about" },
    // { name: "最新洞察", path: "/blog" },
  ];

  const footerLinks = [
    { name: "常見問答", path: "/faq" },
    // { name: "招募資訊", path: "/careers" },
    { name: "聯絡我們", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-200">
      {/* Navbar */}
      <header className="bg-slate-950/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img src="./logo.png" alt="宸希科技 Logo" className="h-10 w-auto" />
                <span className="font-bold text-2xl text-white tracking-tight">
                  {siteContent.companyNameZh}
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
              <Link
                to="/contact"
                className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-light transition-colors shadow-[0_0_15px_rgba(91,66,243,0.4)] hover:shadow-[0_0_25px_rgba(91,66,243,0.6)]"
              >
                立即諮詢
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
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-light transition-colors shadow-[0_0_15px_rgba(91,66,243,0.4)]"
                >
                  立即諮詢
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
                <img src="./logo.png" alt="宸希科技 Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl tracking-tight">
                  {siteContent.companyNameZh}
                </span>
              </div>
              <p className="text-slate-500 mb-6 max-w-md leading-relaxed">
                {siteContent.seo_meta.description}
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  in
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  f
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">快速連結</h3>
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
              <h3 className="text-lg font-semibold mb-6">聯絡資訊</h3>
              <ul className="space-y-4 text-slate-500">
                <li>台灣臺北市南港區玉成街66之7號地下一層</li>
                <li>support@chenhsiai.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {siteContent.companyName}. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-white transition-colors">隱私權聲明</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">服務條款</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
