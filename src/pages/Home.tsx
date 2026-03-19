import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, BarChart3, Database, ShieldCheck, Zap, FileText, MessageSquare, Workflow, Camera, TrendingUp, Users, LineChart } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

export default function Home() {
  const { lang } = useI18n();

  const solutions =
    lang === "en"
      ? [
          { name: "KnowledgeFlow", desc: "A governed knowledge entry point for SOPs, policies, FAQs, and training.", icon: Database },
          { name: "DocuMind", desc: "Turn PDFs, scans, forms, and contracts into structured, usable data.", icon: FileText },
          { name: "ServicePilot", desc: "Improve support efficiency and consistency with AI assistance.", icon: MessageSquare },
          { name: "WorkSprint", desc: "Accelerate summaries, emails, reporting, and cross-system lookup.", icon: Zap },
          { name: "FlowOps", desc: "Workflow agents for intake, routing, tracking, and approvals.", icon: Workflow },
          { name: "RiskLens", desc: "Compliance knowledge, clause comparison, audits, and document risk hints.", icon: ShieldCheck },
          { name: "FieldVision", desc: "Structure photos and inspection records to improve on-site operations.", icon: Camera },
          { name: "CommerceBoost", desc: "Enable sales & marketing to move faster from insight to proposal.", icon: TrendingUp },
          { name: "TalentDesk", desc: "Boost HR/admin efficiency for internal services and training.", icon: Users },
          { name: "FinSight", desc: "Finance insights via validation, cross-checks, and scenario modeling.", icon: LineChart },
        ]
      : [
          { name: "KnowledgeFlow 智識中樞", desc: "打造企業專屬的智慧知識入口，讓 SOP、制度、FAQ、培訓資料更容易被查詢與應用。", icon: Database },
          { name: "DocuMind 文件智匯", desc: "讓 PDF、掃描件、表單、合約從人工整理，轉為可擷取、可比對的結構化資訊。", icon: FileText },
          { name: "ServicePilot 智能客服引擎", desc: "透過 AI 提升客服效率、自助服務能力與回覆一致性，減少重複性問答負擔。", icon: MessageSquare },
          { name: "WorkSprint 協作加速器", desc: "協助企業加快會議摘要、郵件撰寫、報表整理、公告撰寫與跨系統資訊查詢。", icon: Zap },
          { name: "FlowOps 智動流程中台", desc: "將 AI 延伸到實際流程中，協助表單受理、工單分派、任務追蹤與審批流程優化。", icon: Workflow },
          { name: "RiskLens 合規洞察台", desc: "支援企業處理法遵、內規、條款比對、稽核與文件風險提示工作。", icon: ShieldCheck },
          { name: "FieldVision 現場視巡助手", desc: "將現場照片、巡檢紀錄、儀表資訊與影像證據整理流程導入 AI，提升現場管理效率。", icon: Camera },
          { name: "CommerceBoost 業務成長助手", desc: "協助業務與行銷團隊更快整理資訊、產出內容、推進商機與準備提案。", icon: TrendingUp },
          { name: "TalentDesk 人資行政助手", desc: "協助 HR、行政與內訓團隊提升履歷整理、制度溝通、訓練與內部服務效率。", icon: Users },
          { name: "FinSight 財務洞察引擎", desc: "支援財務文件整理、模型試算、數據檢查、關聯分析與預測輔助，強化財務分析能力。", icon: LineChart },
        ];

  const industries =
    lang === "en"
      ? [
          "Manufacturing",
          "Finance & Insurance",
          "Healthcare",
          "Retail & E-commerce",
          "Real Estate & Property",
          "Legal & Consulting",
          "Logistics & Transportation",
          "Education & Training",
          "SaaS & Software",
          "HR & Recruitment",
          "Government & NGO",
          "Hospitality & Food Service",
        ]
      : [
          "製造業",
          "金融 / 保險",
          "醫療 / 診所 / 健康服務",
          "零售 / 電商 / 品牌",
          "房地產 / 建設 / 物業管理",
          "法律 / 會計 / 顧問服務",
          "物流 / 倉儲 / 運輸",
          "教育 / 補教 / 培訓",
          "科技公司 / SaaS / 軟體服務",
          "人資服務 / 招募 / 企業 HR",
          "政府 / 公協會 / 非營利組織",
          "旅宿 / 餐飲 / 服務業",
        ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-200">
      {/* Hero Section */}
      <section className="relative bg-slate-950 overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-slate-950 to-accent/20 mix-blend-screen"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
                <span className="text-sm font-medium tracking-wide text-white/90">
                  {lang === "en" ? "Enterprise AI Solutions" : "企業級 AI 解決方案"}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                {lang === "en" ? (
                  <>
                    Bring AI into
                    <br className="hidden md:block" />
                    real operations
                  </>
                ) : (
                  <>
                    讓 AI 真正進入<br className="hidden md:block" />企業營運流程
                  </>
                )}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-6 leading-relaxed max-w-2xl font-light">
                {lang === "en"
                  ? "We help organizations deploy practical AI—integrated into everyday workflows to improve efficiency and accelerate growth."
                  : "我們協助企業導入可落地的 AI 解決方案，將 AI 真正整合進日常工作場景，幫助團隊提升效率、降低重工並加速成長。"}
              </p>
              <p className="text-sm text-slate-400 mb-10 leading-relaxed max-w-2xl">
                {lang === "en"
                  ? "Make knowledge searchable, documents structured, support faster, workflows smoother, and analytics more reliable."
                  : "讓知識更容易被查詢、文件更容易被整理、客服更快回應、流程更順暢、財務與營運分析更有依據。"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-light transition-all shadow-[0_0_15px_rgba(91,66,243,0.4)] hover:shadow-[0_0_25px_rgba(91,66,243,0.6)] hover:-translate-y-1"
                >
                  {lang === "en" ? "Book a call" : "預約諮詢"}
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex justify-center items-center gap-2 bg-primary-light/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-light/30 transition-all backdrop-blur-sm"
                >
                  {lang === "en" ? "Explore solutions" : "了解適合您的 AI 方案"}
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-light to-accent rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="AI Integration"
                className="relative rounded-3xl shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-slate-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-cyan-400">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium">營運效率提升</p>
                  <p className="text-2xl font-black text-white">+40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-24 bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team working"
                className="relative rounded-2xl shadow-lg object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-primary-light tracking-widest uppercase mb-3">
                企業為什麼需要真正可落地的 AI 導入
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                聚焦企業最常見、也最值得優先改善的營運痛點
              </h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                AI 的價值，不在於看起來先進，而在於是否真的能改善企業每天都在發生的問題。許多企業正在面對知識分散、文件量大、客服重工、流程斷點、會議與行政整理耗時，以及財務資料與報表彼此關聯複雜、人工難以及早發現錯誤等挑戰。
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                我們協助企業從實際工作場景出發，規劃可快速落地的 AI 應用，讓 AI 不只是展示用途，而是能真正進入知識管理、文件流、客服、工作流與財務分析流程中，產生可持續的營運效益。
              </p>
              
              <div className="bg-slate-950 p-6 rounded-2xl border border-white/5 mb-8">
                <h4 className="font-bold text-white mb-4">我們協助企業處理下列常見挑戰：</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "文件量大、整理與檢查耗時",
                    "知識分散，查找正確資訊不容易",
                    "客服重複回覆造成大量人力消耗",
                    "內部流程跨部門斷點多、追蹤不易",
                    "會議、郵件、報表與行政工作重工高",
                    "財務資料、模型與報表彼此關聯複雜",
                    "小錯誤導致整體分析失真，難以及早發現",
                    "需要在不大幅改變現有系統下導入 AI"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-slate-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary-light tracking-widest uppercase mb-3">
              我們的 AI 解決方案
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              從知識、文件、客服、流程到財務，<br />打造真正能落地的企業 AI 能力
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div key={idx} className="bg-slate-900 p-8 rounded-3xl border border-white/10 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary-light mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">{sol.name}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {sol.desc}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary-light font-bold hover:text-white transition-colors">
              查看完整解決方案介紹 <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-primary-light tracking-widest uppercase mb-3">
            適用產業
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
            依產業特性規劃適合的 AI 解決方案
          </h3>
          <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            不同產業有不同的流程、資訊型態與管理痛點，因此 AI 的導入方式也應有所不同。我們可依產業特性與部門需求，規劃最適合的 AI 解決方案組合。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry, idx) => (
              <span key={idx} className="bg-white/5 text-slate-300 border border-white/10 px-6 py-3 rounded-full font-medium hover:bg-primary/20 hover:text-primary-light hover:border-primary/30 transition-colors cursor-default">
                {industry}
              </span>
            ))}
          </div>
          
          <Link to="/industries" className="inline-flex items-center gap-2 text-primary-light font-bold hover:text-white transition-colors">
            查看各產業詳細解決方案 <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-24 bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-primary-light tracking-widest uppercase mb-3">
                我們的導入方式
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                從需求盤點到正式上線，<br />協助企業穩健推進 AI 導入
              </h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                我們可依企業目前的數位化程度、資料條件與導入目標，規劃適合的導入方式。無論是從單一部門試行、小範圍場景驗證，或是跨部門整合導入，我們都能協助企業以較低風險的方式逐步導入 AI。
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "1", title: "需求訪談與痛點盤點" },
                  { step: "2", title: "AI 導入場景規劃" },
                  { step: "3", title: "核心場景驗證定義" },
                  { step: "4", title: "系統、資料與流程整合" },
                  { step: "5", title: "正式上線與優化調整" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-950 p-4 rounded-xl border border-white/5">
                    <div className="w-10 h-10 bg-primary/20 text-primary-light rounded-full flex items-center justify-center font-black border border-primary/30 shrink-0">
                      {item.step}
                    </div>
                    <span className="font-bold text-white text-lg">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-950 p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">我們的導入特色</h3>
              <p className="text-slate-400 mb-8">讓企業更容易啟動 AI，也更容易做出成果</p>
              <ul className="space-y-4">
                {[
                  "聚焦可快速落地的企業 AI 解決方案",
                  "可依產業特性與部門需求彈性組合",
                  "可整合既有文件、知識、流程與系統",
                  "支援知識庫、文件智能、客服、Workflow Agent、財務分析等多元場景",
                  "可從小型驗證逐步推進到正式上線"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="text-cyan-400 shrink-0 mt-1" size={20} />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            與我們一起找到最適合您的 AI 導入方式
          </h2>
          <p className="text-xl text-blue-100 mb-12 font-light">
            如果您正在評估企業 AI 導入方向，無論是知識庫、文件處理、客服、自動化流程，或是財務分析與資料判讀相關應用，我們都能協助您從實際場景出發，規劃合適的解決方案。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-primary-light transition-all shadow-[0_0_15px_rgba(91,66,243,0.4)] hover:shadow-[0_0_25px_rgba(91,66,243,0.6)] hover:-translate-y-1"
            >
              預約 AI 導入諮詢
              <ArrowRight size={24} />
            </Link>
            <Link
              to="/industries"
              className="inline-flex justify-center items-center gap-2 bg-slate-900 text-primary-light border border-primary-light/30 px-10 py-5 rounded-full font-bold text-xl hover:bg-white/5 transition-all"
            >
              洽詢產業解決方案
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
