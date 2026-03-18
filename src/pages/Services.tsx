import { ArrowRight, CheckCircle2, Database, FileText, MessageSquare, Zap, Workflow, ShieldCheck, Camera, TrendingUp, Users, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    id: "knowledgeflow",
    icon: Database,
    name: "KnowledgeFlow 智識中樞",
    title: "讓企業知識真正能被找到、被理解、被使用",
    intro: "企業每天都在產生與累積大量知識，包括 SOP、制度規範、流程文件、常見問題、部門操作經驗、內訓資料與專案文件。然而，這些知識往往分散在不同資料夾、雲端空間、系統或個人手中，導致員工查找困難、交接成本高、重複詢問頻繁，也增加了新人培訓與跨部門協作的負擔。",
    description: "KnowledgeFlow 智識中樞協助企業把分散的知識資產整理成可搜尋、可引用、可控權限的 AI 知識入口。無論是查詢 SOP、制度、FAQ、部門知識，或是新人快速理解工作流程，都能透過更直覺的方式取得資訊，減少反覆詢問與資訊落差。",
    scenarios: ["SOP、內規、FAQ 分散在不同檔案與系統", "部門知識依賴少數資深人員口頭傳承", "新人培訓與知識交接效率低", "內部人員常花時間找文件、找規範、找正確版本"],
    applications: ["企業知識庫助手", "SOP / 制度 / 內規問答", "FAQ 智能問答", "多文件引用式回答", "新人訓練問答助手", "部門知識搜尋入口"],
    benefits: ["提升知識查找效率", "降低重複詢問成本", "改善知識傳承與新人培訓速度", "強化內部資訊一致性與可用性"]
  },
  {
    id: "documind",
    icon: FileText,
    name: "DocuMind 文件智匯",
    title: "讓企業文件從難整理，變成真正可運用的資料資產",
    intro: "許多企業每天都在處理大量 PDF、掃描件、表單、申請書、合約、發票、報價單與附件文件。這些文件通常格式多元、來源分散，若完全依賴人工整理與檢查，不僅耗時，也容易遺漏關鍵資訊。",
    description: "DocuMind 文件智匯協助企業將文件處理流程數位化與智慧化，透過 OCR、欄位擷取、文件分類、摘要與比對能力，讓文件不只是被保存，而是能被搜尋、分析、驗證與再利用。這能大幅減少人工逐份處理的負擔，也讓文件流轉效率與資料可用性同步提升。",
    scenarios: ["大量 PDF、掃描件、表單需要人工整理", "合約與申請文件需要人工逐份檢查", "文件版本與欄位差異不易追蹤", "紙本或附件文件難以快速轉為可用資料"],
    applications: ["OCR 文件擷取", "表單與欄位抽取", "合約摘要", "條款差異比對", "文件分類與整理", "文件缺漏檢查", "PDF / 掃描件結構化整理"],
    benefits: ["提升文件整理與查找效率", "降低人工檢查與輸入負擔", "改善文件流轉與審查速度", "強化文件資料的可用性與可分析性"]
  },
  {
    id: "servicepilot",
    icon: MessageSquare,
    name: "ServicePilot 智能客服引擎",
    title: "讓客服更快速、更一致，也更能專注在高價值服務",
    intro: "客服團隊往往需要處理大量重複性高、回應時效要求高的問題。當問題內容分散在 FAQ、文件、產品資訊與歷史紀錄中時，客服人員不僅要花時間查找資料，也容易因不同經驗與資訊來源而出現回覆落差。",
    description: "ServicePilot 智能客服引擎可協助企業建立 FAQ 問答、自助服務入口、客服回覆建議、客訴摘要與工單分流機制，讓第一線服務更快速、更一致，也讓客服人員把更多時間投入在高價值與複雜情境的處理上。",
    scenarios: ["客服需要大量回應重複問題", "回覆品質與說法不一致", "客訴與工單需要人工分類與整理", "多語客服或跨通路客服負擔高"],
    applications: ["AI 客服問答", "FAQ 自助服務", "客服回覆草稿建議", "客訴摘要與分類", "工單分流", "多語客服輔助", "客服知識推薦助手"],
    benefits: ["提升客服回應效率", "改善回覆一致性與服務品質", "降低客服重複作業負擔", "強化客服知識整合與自助服務能力"]
  },
  {
    id: "worksprint",
    icon: Zap,
    name: "WorkSprint 協作加速器",
    title: "讓會議、郵件、報表與日常行政工作更有效率",
    intro: "大量的日常行政工作與資訊整理任務，往往消耗企業許多時間與人力。從會議記錄、待辦整理、郵件撰寫、報表摘要、公告產出，到跨系統查詢與資訊整合，這些高頻但重複的工作常常讓團隊難以把時間投入在更重要的決策與執行上。",
    description: "WorkSprint 協作加速器協助企業把這些日常工作導入 AI，讓內容產出更快、整理更省力、資訊更容易被掌握，進一步改善團隊溝通效率與部門協作節奏。",
    scenarios: ["會議多、記錄整理耗時", "郵件、公告、報告初稿需大量撰寫", "主管需要快速掌握跨部門資訊", "員工常在不同系統間來回查資料"],
    applications: ["會議摘要與待辦整理", "郵件草稿生成", "報表摘要", "公告與行政文書撰寫", "部門資訊整合助手", "主管決策摘要助手", "跨系統查詢助手"],
    benefits: ["縮短會議與行政整理時間", "提升資訊傳遞效率", "降低日常文書與報表重工", "協助團隊更專注於高價值工作"]
  },
  {
    id: "flowops",
    icon: Workflow,
    name: "FlowOps 智動流程中台",
    title: "讓 AI 不只會回答問題，也能實際參與企業流程協作",
    intro: "許多企業已經有數位化系統，但在表單受理、工單分派、案件追蹤、審批流程與跨部門任務串接上，仍存在大量人工判斷、手動轉派與資訊斷點。這不僅造成流程延誤，也增加管理與追蹤難度。",
    description: "FlowOps 智動流程中台將 AI 延伸到實際流程中，協助任務分類、初步判斷、資料整理與工作分派，讓流程更清楚、更快速，也更容易管理。它不只是問答工具，而是能與企業既有工作流搭配的智能流程助手。",
    scenarios: ["工單、案件、表單需要人工受理與轉派", "任務追蹤容易遺漏或延誤", "審批與行政流程橫跨多部門", "郵件、申請與客服資訊需要整理後再進入流程"],
    applications: ["AI Agent Workflow", "表單受理助手", "工單建立與分派", "郵件分類與轉派", "審批流程輔助", "任務追蹤與提醒", "ERP / CRM 查詢 Agent"],
    benefits: ["提升流程運轉效率", "降低人工分派與追蹤負擔", "改善跨部門協作與資訊銜接", "讓 AI 真正參與日常營運流程"]
  },
  {
    id: "risklens",
    icon: ShieldCheck,
    name: "RiskLens 合規洞察台",
    title: "讓內規、法遵、稽核與條款審查更有依據、更有效率",
    intro: "對於重視合規、內控與文件審查的企業而言，文件量大、規範複雜與審查工作繁瑣，往往會造成龐大的時間成本。尤其在條款比對、風險提示、申請文件檢查與稽核證據整理等情境中，若完全依賴人工，既耗時又容易遺漏關鍵資訊。",
    description: "RiskLens 合規洞察台可協助企業快速查詢內規、比對條款差異、提示可能風險、整理稽核文件與檢查申請文件缺漏，讓合規作業更有效率，也讓審查流程更具一致性與可追溯性。",
    scenarios: ["內規、法遵文件多且更新頻繁", "合約與條款審查耗時", "申請文件缺漏檢查需大量人工", "稽核前資料整理與交叉檢查繁瑣"],
    applications: ["內規 / 法遵知識問答", "條款差異比對", "合約風險提示", "稽核清單助手", "稽核證據文件整理", "法規更新摘要", "申請文件缺失檢查"],
    benefits: ["提升合規與審查效率", "降低人工檢查負擔", "改善風險提示與文件一致性", "強化內控與稽核支援能力"]
  },
  {
    id: "fieldvision",
    icon: Camera,
    name: "FieldVision 現場視巡助手",
    title: "讓現場照片、巡檢紀錄與影像證據更容易整理與追蹤",
    intro: "在工地、門市、倉儲、設備巡檢或現場維運過程中，企業常需依賴大量人工紀錄、照片回傳與報告整理。若缺乏系統化處理方式，不僅後續追蹤困難，也容易造成資訊散失與管理落差。",
    description: "FieldVision 現場視巡助手可協助團隊快速整理現場照片、生成巡檢報告、辨識儀表與銘牌內容、彙整影像證據與異常紀錄，讓現場資訊回傳與後續追蹤更即時、更有系統。",
    scenarios: ["現場照片多、整理耗時", "巡檢紀錄仰賴人工彙整", "儀表、銘牌與現場表單需人工轉錄", "異常紀錄與影像證據難以管理"],
    applications: ["現場照片描述", "巡檢報告生成", "儀表 / 銘牌 OCR", "門市 / 工地 / 倉儲巡檢整理", "PPE 安全裝備稽核", "影像證據彙整", "現場異常紀錄整理"],
    benefits: ["提升現場資訊回傳效率", "降低照片與報告整理成本", "改善巡檢與異常追蹤管理", "讓現場資訊更容易進入後續流程"]
  },
  {
    id: "commerceboost",
    icon: TrendingUp,
    name: "CommerceBoost 業務成長助手",
    title: "讓業務、行銷與售前團隊更快推進商機與內容產出",
    intro: "業務與行銷團隊常面對提案準備、客戶需求整理、文案產出、售前溝通與商機追蹤等高頻任務。當資訊分散、內容更新快、需求同時來自多個客戶與通路時，團隊很容易把大量時間花在整理與撰寫，而非真正的商機推進與策略執行。",
    description: "CommerceBoost 業務成長助手可協助企業快速生成提案初稿、整理客戶需求、回覆 RFP / RFI、產出商品文案與摘要商機資訊，讓業務與行銷團隊把更多精力投入成交、優化與成長。",
    scenarios: ["提案書、商務文件與售前內容產出頻繁", "客戶需求與商機資訊分散", "文案更新速度要求高", "團隊需要更快整理商機與下一步建議"],
    applications: ["業務提案初稿生成", "客戶需求摘要", "RFP / RFI 回覆輔助", "商品與服務文案生成", "售前問答助手", "商機摘要與下一步建議", "業務知識庫問答"],
    benefits: ["加快提案與文案產出速度", "改善客戶需求掌握效率", "協助售前與業務團隊提升回應品質", "讓團隊更聚焦在商機推進與成交"]
  },
  {
    id: "talentdesk",
    icon: Users,
    name: "TalentDesk 人資行政助手",
    title: "讓人資、行政與內訓工作更有系統，也更省時",
    intro: "從招募、履歷整理、面試紀錄、新人 onboarding，到員工制度問答與內部教育訓練，HR 與行政團隊經常面對大量重複且繁瑣的資訊處理工作。若依賴人工逐項整理與回覆，不僅耗時，也容易影響服務體驗與作業品質。",
    description: "TalentDesk 人資行政助手可協助企業加快文件整理、制度查詢與行政支援流程，提升員工服務效率，也減少人工作業壓力，讓 HR 團隊有更多空間投入在人才與組織發展工作。",
    scenarios: ["招募與履歷整理耗時", "員工制度問題重複性高", "新人訓練與 onboarding 文件繁多", "行政與內訓內容準備工作量大"],
    applications: ["JD 生成", "履歷摘要", "面試紀錄整理", "新人 onboarding 助手", "員工手冊 / 制度問答", "內訓教材摘要", "員工自助服務助手"],
    benefits: ["提升 HR 行政處理效率", "改善制度傳達與員工服務體驗", "縮短招募與訓練支援時間", "降低行政與重複性作業負擔"]
  },
  {
    id: "finsight",
    icon: LineChart,
    name: "FinSight 財務洞察引擎",
    title: "讓財務文件、模型試算與分析判讀更快速、更穩健、更有洞察力",
    intro: "財務相關作業常涉及大量報表、試算表、模型、附件文件與跨文件交叉驗證，不僅人工檢查耗時，也容易因為某個關鍵數值、欄位或公式錯誤而影響整體分析結果。當不同報表與文件彼此存在高度關聯時，人工往往很難全面掌握，也難以及時發現潛在問題。",
    description: "FinSight 財務洞察引擎協助企業將財務文件、試算邏輯與分析流程更有系統地整理與強化，支援財務資料摘要、異常檢查、關聯比對，並具備快速調整財務模型、動態調整試算參數，以及同時產生多個方案進行比較的強大能力。這讓財務與經營分析工作不只是更快，也更有機會及早發現錯誤、找出關聯、看見風險與掌握變動帶來的影響。",
    scenarios: ["大量財務文件、報表與試算表需人工整理與檢查", "財務模型調整後，難快速評估整體影響", "需要快速調整財務模型與試算參數", "需要同時比較多種財務方案或情境", "預算、成本、損益與情境模擬分析耗時"],
    applications: ["財務模型快速調整", "多方案/多情境比較", "動態試算參數調整", "財務文件摘要與重點整理", "財務欄位擷取與交叉比對", "試算表與財務模型檢查輔助", "關聯數值異常提示", "預算、成本與損益分析助手", "多份財務文件的一致性檢查"],
    benefits: ["提升財務資料整理與判讀效率", "降低模型與報表錯誤風險", "協助團隊更快找出異常與關聯", "強化預算、損益與經營分析支援能力", "讓財務與管理層更快取得有用洞察"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-950 pb-24 font-sans text-slate-200">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-sm font-bold tracking-widest uppercase mb-4 text-blue-200">
            企業 AI 解決方案總覽
          </h1>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            從知識、文件、客服、流程到財務，<br className="hidden md:block" />
            打造真正能落地的企業 AI 能力
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed font-light max-w-4xl mx-auto">
            我們將企業常見的 AI 導入需求整理為多種可實際落地的解決方案模組，協助企業依照自身痛點、部門需求與產業場景，快速找到合適的導入方向。各方案可單獨部署，也可依需求整合成更完整的企業 AI 應用架構。
          </p>
        </div>
      </section>

      {/* Why Modular */}
      <section className="py-16 bg-slate-900 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">為什麼用模組化方案導入 AI？</h3>
          <p className="text-lg text-slate-400 leading-relaxed">
            企業在導入 AI 時，最重要的不是一次做得多大，而是先找到真正能產生效益的場景。透過模組化方案，企業可以更清楚理解每一種 AI 能力對應的問題、流程與預期效益，也更容易從小範圍驗證逐步擴大成果。
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Chips Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {solutions.map((sol) => (
              <button
                key={`chip-${sol.id}`}
                onClick={() => {
                  document.getElementById(sol.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bg-slate-900 border border-white/10 text-slate-300 hover:bg-primary/20 hover:text-primary-light hover:border-primary/30 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                {sol.name}
              </button>
            ))}
          </div>

          <div className="space-y-16">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <div key={solution.id} id={solution.id} className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-sm border border-white/10 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3 shrink-0">
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary-light mb-6 border border-white/10 shadow-inner">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">{solution.name}</h3>
                      <p className="text-xl font-bold text-primary-light mb-6">{solution.title}</p>
                      
                      <div className="mb-8">
                        <h4 className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-3">適合情境</h4>
                        <ul className="space-y-2">
                          {solution.scenarios.map((scenario, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                              <span className="text-red-500 mt-1 shrink-0">•</span>
                              {scenario}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 space-y-8">
                      <div>
                        <p className="text-lg text-slate-300 leading-relaxed mb-4">
                          {solution.intro}
                        </p>
                        <p className="text-lg text-slate-400 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-5 bg-cyan-400 rounded-full"></span>
                            核心應用
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {solution.applications.map((app, i) => (
                              <span key={i} className="bg-white/5 text-slate-300 border border-white/10 px-3 py-1.5 rounded-lg text-sm">
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-5 bg-accent rounded-full"></span>
                            預期效益
                          </h4>
                          <ul className="space-y-3">
                            {solution.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-24 bg-slate-900 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-8">
            從評估到落地，我們提供完整支援
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {['需求評估', '方案設計', '開發測試', '部署訓練'].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-16 h-16 mx-auto bg-slate-900 rounded-full flex items-center justify-center text-primary-light font-black text-2xl mb-4 relative z-10 border-4 border-white/20">
                  {idx + 1}
                </div>
                <p className="font-bold text-white">{step}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-white/10 -z-0"></div>
                )}
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-light transition-all shadow-[0_0_15px_rgba(91,66,243,0.4)] hover:shadow-[0_0_25px_rgba(91,66,243,0.6)] hover:-translate-y-1"
          >
            開始您的專案
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
