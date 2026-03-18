import { siteContent } from "../data/content";
import { Target, Award, MessageCircleQuestion, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-200">
              {siteContent.about_title}
            </h1>
            <h2 className="text-5xl font-black mb-6 leading-tight">
              深耕企業智能，<br />專業團隊首選
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed font-light">
              累積多年實戰經驗，服務多元產業。我們致力於解鎖 AI 價值，為客戶創造商業奇蹟。
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-black text-white mb-6">
                我們的使命：解鎖 AI 價值，創造商業奇蹟
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                {siteContent.about_paragraph}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary-light shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">客戶為先</h4>
                    <p className="text-slate-400">深入了解產業痛點，量身打造最適合的解決方案。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-cyan-400 shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">永續創新</h4>
                    <p className="text-slate-400">持續挑戰技術極限，保持業界領先地位。</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h3 className="text-3xl font-black text-white">常見問答</h3>
            <p className="text-slate-400 mt-4">
              快速了解合作流程、時程與導入條件，若需要更細節的建議也歡迎直接聯繫我們。
            </p>
          </div>

          <div className="space-y-4">
            {siteContent.faq.map((item, idx) => (
              <div
                key={idx}
                className={`bg-slate-900 rounded-2xl border transition-all duration-300 ${
                  openIndex === idx ? "border-primary shadow-md" : "border-white/20 hover:border-primary/50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                >
                  <h4 className={`text-lg font-bold pr-8 ${openIndex === idx ? "text-primary-light" : "text-white"}`}>
                    {item.question}
                  </h4>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === idx ? "bg-primary text-white" : "bg-white/10 text-slate-500"
                    }`}
                  >
                    {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                <div
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-400 leading-relaxed pt-4 border-t border-white/10">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white/5 p-10 rounded-3xl border border-white/10">
            <MessageCircleQuestion className="mx-auto text-primary-light mb-4" size={48} />
            <h4 className="text-2xl font-black text-white mb-4">想更快釐清需求？</h4>
            <p className="text-slate-400 mb-8">我們可以協助您用最短時間確認可行方案、時程與預期效益。</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-light transition-colors shadow-[0_0_15px_rgba(91,66,243,0.4)] hover:shadow-[0_0_25px_rgba(91,66,243,0.6)]"
            >
              聯絡我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
