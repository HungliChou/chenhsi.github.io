import { siteContent } from "../data/content";
import { Mail, MapPin, Send, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const FORMSUBMIT_URL = "https://formsubmit.co/support@chenhsiai.com";

const typeLabels: Record<string, string> = {
  consulting: "服務諮詢",
  partnership: "合作洽談",
  other: "其他",
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const name = (form.querySelector("#name") as HTMLInputElement).value.trim();
    const email = (form.querySelector("#email") as HTMLInputElement).value.trim();
    const company = (form.querySelector("#company") as HTMLInputElement).value.trim();
    const phone = (form.querySelector("#phone") as HTMLInputElement).value.trim();
    const type = (form.querySelector("#type") as HTMLSelectElement).value;
    const message = (form.querySelector("#message") as HTMLTextAreaElement).value.trim();

    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `網站聯絡表單：${name} - ${typeLabels[type] ?? type}`,
          _replyto: email,
          _template: "table",
          name,
          email,
          company: company || "(未填)",
          phone: phone || "(未填)",
          需求類型: typeLabels[type] ?? type,
          message: message || "(未填)",
        }),
      });
      if (!res.ok) throw new Error("送出失敗，請稍後再試");
      setIsSuccess(true);
      form.reset();
    } catch {
      setError("無法送出表單，請稍後再試或直接寄信至 support@chenhsiai.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-200">
            聯絡我們
          </h1>
          <h2 className="text-5xl font-black mb-6 leading-tight">
            準備好開啟您的<br />AI 轉型之旅了嗎？
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed font-light max-w-3xl mx-auto">
            聯繫我們的專家團隊，為您量身打造最適合的企業級 AI 解決方案。
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-black text-white mb-8">
                與我們聯繫
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-12">
                無論您是需要服務諮詢、合作洽談，或是對我們的解決方案有任何疑問，我們都樂意為您解答。
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary-light shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">公司地址</h4>
                    <p className="text-slate-400">台灣臺北市南港區玉成街66之7號地下一層</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary-light shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">電子郵件</h4>
                    <p className="text-slate-400">support@chenhsiai.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900 p-10 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-light"></div>

              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-cyan-400 mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">訊息已送出！</h3>
                  <p className="text-slate-400 mb-8">
                    感謝您的聯繫，我們的專員將在兩個工作日內與您聯繫。
                  </p>
                  <button
                    onClick={() => { setIsSuccess(false); setError(null); }}
                    className="text-primary-light font-bold hover:underline"
                  >
                    發送另一則訊息
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">姓名 <span className="text-red-500">*</span></label>
                      <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="您的姓名" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">電子郵件 <span className="text-red-500">*</span></label>
                      <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-slate-300 mb-2">公司名稱</label>
                      <input type="text" id="company" className="w-full px-4 py-3 rounded-xl border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="您的公司" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-300 mb-2">聯絡電話</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="您的電話" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-bold text-slate-300 mb-2">需求類型</label>
                    <div className="relative">
                      <select id="type" className="w-full px-4 py-3 rounded-xl border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-slate-900">
                        <option value="consulting">服務諮詢</option>
                        <option value="partnership">合作洽談</option>
                        <option value="other">其他</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2">詳細說明</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="請簡述您的需求..."></textarea>
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-light transition-all shadow-[0_0_15px_rgba(91,66,243,0.4)] hover:shadow-[0_0_25px_rgba(91,66,243,0.6)] disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        送出訊息
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-900 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary-light tracking-widest uppercase mb-3">
              常見問答
            </h2>
            <h3 className="text-4xl font-black text-white">
              為您解答疑惑
            </h3>
          </div>

          <div className="space-y-6">
            {siteContent.faq.map((item, idx) => (
              <div key={idx} className="bg-slate-950 p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4 flex items-start gap-4">
                  <span className="text-primary-light text-2xl leading-none">Q.</span>
                  {item.question}
                </h4>
                <p className="text-slate-400 leading-relaxed pl-10">
                  <span className="text-slate-500 font-bold mr-2">A.</span>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
