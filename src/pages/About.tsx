import { siteContent } from "../data/content";
import { Users, Target, Award, CheckCircle2 } from "lucide-react";

export default function About() {
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

      {/* Stats & Trust */}
      <section className="py-24 bg-slate-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20">
            <div>
              <p className="text-5xl font-black text-primary-light mb-4">{siteContent.trust_elements.metrics.projects_completed}+</p>
              <p className="text-lg font-medium text-slate-400">成功專案交付</p>
            </div>
            <div>
              <p className="text-5xl font-black text-primary-light mb-4">{siteContent.trust_elements.metrics.client_satisfaction}</p>
              <p className="text-lg font-medium text-slate-400">客戶滿意度</p>
            </div>
            <div>
              <p className="text-5xl font-black text-primary-light mb-4">50+</p>
              <p className="text-lg font-medium text-slate-400">專業技術人才</p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">榮獲業界肯定</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {siteContent.trust_elements.awards.map((award, idx) => (
                <div key={idx} className="bg-slate-950 px-6 py-4 rounded-full border border-white/20 flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-400" size={20} />
                  <span className="font-medium text-slate-200">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
