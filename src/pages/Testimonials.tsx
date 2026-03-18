import { siteContent } from "../data/content";
import { Quote, PlayCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-200">
            客戶見證
          </h1>
          <h2 className="text-5xl font-black mb-6 leading-tight">
            閱讀我們客戶的<br />真實見證
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed font-light max-w-3xl mx-auto">
            了解宸希科技如何幫助企業實現 AI 創新並提升競爭力。
          </p>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {siteContent.testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-900 p-10 rounded-3xl shadow-sm border border-white/10 relative group hover:shadow-xl transition-all duration-300">
                <Quote className="absolute top-10 right-10 text-primary-light/5 group-hover:text-primary-light/10 transition-colors" size={80} />
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">{testimonial.name}</h3>
                    <p className="text-slate-500 font-medium">{testimonial.position}</p>
                    <p className="text-primary-light text-sm font-bold mt-1">{testimonial.company}</p>
                  </div>
                </div>

                <div className="relative z-10 space-y-6">
                  <p className="text-xl text-slate-200 font-medium leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {testimonial.video_script && (
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-6">
                      <div className="flex items-center gap-2 text-primary-light font-bold mb-3">
                        <PlayCircle size={20} />
                        <span>見證訪談摘要</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        {testimonial.video_script}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
