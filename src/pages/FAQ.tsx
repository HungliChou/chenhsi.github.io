import { MessageCircleQuestion, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";
import { useSiteContent } from "../i18n/useSiteContent";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang } = useI18n();
  const siteContent = useSiteContent();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswer = (answer: string) => {
    const parts = answer.split("\n").map((s) => s.trim()).filter(Boolean);
    if (parts.length <= 1) return <p className="text-slate-400 leading-relaxed pt-4 border-t border-white/10">{answer}</p>;

    const [intro, ...rest] = parts;
    const items = rest.map((line) => line.replace(/^\d+\.\s*/, ""));
    return (
      <div className="pt-4 border-t border-white/10 text-slate-400 leading-relaxed space-y-3">
        <p>{intro}</p>
        <ol className="list-decimal pl-5 space-y-2">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-200">
            {lang === "en" ? "FAQ" : "常見問答"}
          </h1>
          <h2 className="text-5xl font-black mb-6 leading-tight">
            {lang === "en" ? "Answers to common questions" : "為您解答疑惑"}
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed font-light max-w-3xl mx-auto">
            {lang === "en"
              ? "Learn about our AI engagement process, technical approach, and support—so you can move forward with confidence."
              : "查閱宸希科技常見問答，了解 AI 服務流程、技術特色及客戶保障等資訊，協助您快速解決疑惑。"}
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {siteContent.faq.map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-900 rounded-2xl border transition-all duration-300 ${openIndex === idx ? 'border-primary shadow-md' : 'border-white/20 hover:border-primary/50'}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                >
                  <h4 className={`text-lg font-bold pr-8 ${openIndex === idx ? 'text-primary-light' : 'text-white'}`}>
                    {item.question}
                  </h4>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-primary text-white' : 'bg-white/10 text-slate-500'}`}>
                    {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {renderAnswer(item.answer)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-white/5 p-10 rounded-3xl border border-white/10">
            <MessageCircleQuestion className="mx-auto text-primary-light mb-4" size={48} />
            <h3 className="text-2xl font-black text-white mb-4">{lang === "en" ? "Still have questions?" : "找不到您要的答案？"}</h3>
            <p className="text-slate-400 mb-8">
              {lang === "en"
                ? "Our team is ready to help you evaluate the right enterprise AI approach."
                : "我們的專家團隊隨時準備為您解答任何關於企業 AI 導入的疑問。"}
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-light transition-colors shadow-[0_0_15px_rgba(91,66,243,0.4)] hover:shadow-[0_0_25px_rgba(91,66,243,0.6)]">
              {lang === "en" ? "Contact us" : "聯絡我們"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
