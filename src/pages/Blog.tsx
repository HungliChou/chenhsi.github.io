import { siteContent } from "../data/content";
import { BookOpen, Calendar, Tag, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-950 pb-24">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-200">
            資源與部落格
          </h1>
          <h2 className="text-5xl font-black mb-6 leading-tight">
            掌握 AI 技術趨勢
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed font-light max-w-3xl mx-auto">
            訪問宸希科技資源中心，獲取最新 AI 導入實戰案例、技術指南與行業報告，與專家共同探討智能轉型。
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-3xl font-black text-white">最新文章與報告</h3>
            <button className="hidden md:flex items-center gap-2 text-primary-light font-bold hover:text-primary-light transition-colors">
              查看所有文章 <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.blog_posts.map((post, idx) => (
              <article key={idx} className="bg-slate-900 rounded-3xl shadow-sm border border-white/10 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="h-48 bg-white/20 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop&sig=${idx}`} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-light">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-primary-light transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-slate-400 mb-6 line-clamp-3 flex-grow">
                    {post.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-white/10 px-2 py-1 rounded-md">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="#" className="inline-flex items-center gap-2 text-primary-light font-bold hover:text-primary-light transition-colors mt-auto">
                    閱讀全文 <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 text-white/10">
              <BookOpen size={200} />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl font-black mb-4">下載《2026 企業 AI 導入白皮書》</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                深入了解各行業如何利用 AI 技術實現數位轉型，包含完整的架構規劃建議與 ROI 評估模型。
              </p>
            </div>
            <button className="relative z-10 shrink-0 inline-flex items-center gap-2 bg-slate-900 text-primary-light px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-colors shadow-lg">
              <Download size={20} />
              免費下載
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
