import { siteContent } from "../data/content";
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-200">
            法務與隱私
          </h1>
          <h2 className="text-5xl font-black mb-6 leading-tight">
            隱私權聲明與服務條款
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed font-light max-w-3xl mx-auto">
            宸希科技重視您的隱私與資料安全，請查閱我們的隱私權聲明與服務條款以了解詳細信息。
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 p-10 md:p-16 rounded-3xl shadow-sm border border-white/10">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 pb-6 border-b border-white/10">
              <FileText size={16} />
              <span>最後更新日期：{siteContent.privacy.lastUpdated}</span>
            </div>

            <div className="space-y-12">
              {siteContent.privacy.content.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    {idx === 0 && <Shield className="text-primary-light" size={24} />}
                    {idx === 1 && <Lock className="text-primary-light" size={24} />}
                    {idx === 2 && <FileText className="text-primary-light" size={24} />}
                    {idx === 3 && <CheckCircle2 className="text-primary-light" size={24} />}
                    {section.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 bg-slate-950 p-8 rounded-2xl">
              <h4 className="font-bold text-white mb-2">聯絡隱私權團隊</h4>
              <p className="text-slate-400 mb-4">
                如果您對我們的隱私權政策有任何疑問，請透過以下方式與我們聯繫：
              </p>
              <a href="mailto:support@chenhsiai.com" className="text-primary-light font-bold hover:underline">
                support@chenhsiai.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
