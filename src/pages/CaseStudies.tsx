import { siteContent } from "../data/content";
import { ArrowUpRight, Quote, Building2, Ship, ShoppingBag, Sun } from "lucide-react";

export default function CaseStudies() {
  const icons = [Building2, Ship, ShoppingBag, Sun];
  const caseImages = [
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80", // 法律：大量文件、效率感
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80", // 航運：港口貨櫃、起重機
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80", // 電商客服：客服耳麥、支援感
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80", // 商機篩選：太陽能
  ];

  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-200">
            成功案例
          </h1>
          <h2 className="text-5xl font-black mb-6 leading-tight">
            跨產業實證，<br />見證 AI 轉型力量
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed font-light max-w-3xl mx-auto">
            從跨國法律事務所到物流企業，宸希科技的 AI 解決方案已為多種產業帶來卓越效益，提升流程效率與決策品質。
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {siteContent.case_studies.map((caseStudy, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div key={idx} className="bg-slate-900 rounded-3xl shadow-sm border border-white/10 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-5 relative h-64 lg:h-auto bg-slate-900 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay pointer-events-none"></div>
                      <img 
                        src={caseImages[idx % caseImages.length]}
                        alt={caseStudy.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-90 transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="lg:col-span-7 p-10 lg:p-16">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-primary-light text-sm font-bold mb-6">
                        案例研究 {idx + 1}
                      </div>
                      <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                        {caseStudy.title}
                      </h3>
                      <p className="text-lg text-slate-400 leading-relaxed mb-10">
                        {caseStudy.paragraph}
                      </p>
                      
                      <div className="bg-slate-950 p-8 rounded-2xl border border-white/10 relative">
                        <Quote className="absolute top-6 left-6 text-primary-light/20" size={40} />
                        <blockquote className="relative z-10 text-lg font-medium text-slate-200 italic leading-relaxed pl-12">
                          {caseStudy.client_quote}
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
