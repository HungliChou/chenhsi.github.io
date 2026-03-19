import { Users, Heart, Briefcase, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";
import { useSiteContent } from "../i18n/useSiteContent";

export default function Careers() {
  const { lang } = useI18n();
  const siteContent = useSiteContent();
  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-200">
            {lang === "en" ? "Careers" : "招募資訊"}
          </h1>
          <h2 className="text-5xl font-black mb-6 leading-tight">
            {lang === "en" ? (
              <>
                Join ChenHsi,
                <br />
                build the AI future
              </>
            ) : (
              <>
                加入宸希科技，<br />共創智能未來
              </>
            )}
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed font-light max-w-3xl mx-auto">
            {lang === "en"
              ? "We offer room to grow and strong benefits. If you like building practical AI, we’d love to meet you."
              : "我們提供成長空間與優渥福利，歡迎有志之士參與挑戰。"}
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-black text-white mb-6">
                {lang === "en" ? "Culture & benefits" : "我們的文化與福利"}
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                {siteContent.careers.culture}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Heart className="text-primary-light mb-4" size={32} />
                  <h4 className="font-bold text-white mb-2">{lang === "en" ? "Great benefits" : "優渥福利"}</h4>
                  <p className="text-slate-400 text-sm">
                    {lang === "en" ? "Flexible hours, annual health checks, and generous paid leave." : "彈性工時、年度健檢、優於勞基法的特休假。"}
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20">
                  <Users className="text-cyan-400 mb-4" size={32} />
                  <h4 className="font-bold text-white mb-2">{lang === "en" ? "Continuous learning" : "持續學習"}</h4>
                  <p className="text-slate-400 text-sm">
                    {lang === "en" ? "Learning stipend, tech talks, and internal training." : "提供進修補助、技術分享會與內部培訓課程。"}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="Team working"
                className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary-light tracking-widest uppercase mb-3">
              {lang === "en" ? "Open roles" : "職缺列表"}
            </h2>
            <h3 className="text-4xl font-black text-white">
              {lang === "en" ? "Your next challenge" : "尋找您的下一個挑戰"}
            </h3>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {siteContent.careers.openings.map((job, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-white/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                    {job.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Briefcase size={16} /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                    <span className="bg-white/10 px-2 py-1 rounded-md text-slate-300 font-medium">{job.type}</span>
                  </div>
                  <p className="text-slate-400 max-w-2xl">
                    {job.description}
                  </p>
                </div>
                
                <Link to="/contact" className="shrink-0 inline-flex items-center gap-2 bg-primary/10 text-primary-light px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
                  {lang === "en" ? "Apply" : "應徵此職位"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
