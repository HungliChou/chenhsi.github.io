import React, { useState } from 'react';
import { ArrowRight, Briefcase, Building, Stethoscope, ShoppingCart, Home, Scale, Truck, GraduationCap, MonitorSmartphone, Users, Landmark, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from "../i18n/I18nProvider";

const industriesZh = [
  {
    id: 'manufacturing',
    icon: <Briefcase size={24} />,
    title: '製造業',
    subtitle: '讓 AI 成為製造現場、知識管理與營運流程的效率引擎',
    intro: '製造業的日常營運高度依賴 SOP、設備知識、維修經驗、巡檢記錄、品保文件與跨部門協作。當這些資訊分散在不同人員、Excel、表單與文件中時，現場處理效率、知識傳承與管理品質都容易受到影響。',
    painPoints: [
      'SOP、設備知識、維修經驗分散在不同部門與人員手中',
      '巡檢、維修、品保與工單紀錄大量依賴人工整理',
      '採購、訂單、供應商、品保文件管理繁瑣',
      '現場資訊回傳慢，跨部門追蹤效率低',
      '新人培訓與知識傳承成本高',
      '成本、採購與營運資料彼此關聯複雜，人工不易快速檢查'
    ],
    aiDirections: '企業可透過 AI 建立設備與作業知識庫、導入巡檢與現場照片整理、自動擷取採購與品保文件資訊、優化工單與任務分派流程，並提升成本分析與多份營運資料交叉檢查能力。',
    solutions: ['KnowledgeFlow 智識中樞', 'DocuMind 文件智匯', 'FlowOps 智動流程中台', 'FieldVision 現場視巡助手', 'WorkSprint 協作加速器', 'FinSight 財務洞察引擎'],
    applications: ['文件與 SOP 問答', '維修知識庫', '巡檢報告生成', '現場照片巡檢描述', '儀表 / 銘牌 OCR', '工單建立與分派', '採購 / 報價 / 訂單文件擷取', '品保與供應商文件整理', '安全規範問答', '教育訓練助手', '成本分析與採購財務資料整理', '多份營運與財務資料交叉檢查'],
    benefits: '協助製造業提升知識查找速度、減少文件與紀錄整理負擔、改善現場資訊回傳效率、提升跨部門協作順暢度，並強化營運與財務資料判讀能力。'
  },
  {
    id: 'finance',
    icon: <Landmark size={24} />,
    title: '金融 / 保險',
    subtitle: '讓 AI 協助金融與保險業提升文件效率、法遵掌握與服務品質',
    intro: '金融與保險產業同時面對大量文件、法遵要求、審查流程與服務時效壓力。當保單、理賠、申請資料、條款文件與報表持續增加時，如何在維持品質的前提下提升效率，是導入 AI 的重要切入點。',
    painPoints: [
      '內規、法遵、產品文件多且更新頻繁',
      '保單、理賠、申請文件審閱耗費大量人力',
      '客服需快速回答高頻問題，但回覆品質不易一致',
      '條款比對與文件缺漏檢查繁瑣',
      '稽核、報表與案件整理壓力高',
      '財務模型與經營數據調整時，影響範圍不易快速掌握'
    ],
    aiDirections: '可導入法遵與內規知識庫、申請文件擷取與檢查、條款比對與風險提示、客服回覆輔助、案件受理流程優化，以及財務報表與經營數據的分析輔助。',
    solutions: ['RiskLens 合規洞察台', 'DocuMind 文件智匯', 'ServicePilot 智能客服引擎', 'WorkSprint 協作加速器', 'FlowOps 智動流程中台', 'FinSight 財務洞察引擎'],
    applications: ['內規 / 法遵知識問答', '文件摘要與條款比對', '保單 / 理賠文件擷取', '客服輔助回覆', '申請文件缺漏檢查', '稽核清單助手', '合約審閱輔助', '報表摘要', '案件受理 Workflow Agent', '多文件交叉比對', '財務模型試算與調整影響分析', '財報與管理報表說明生成'],
    benefits: '協助金融與保險企業提升文件審查效率、強化法遵與稽核支援、改善客服與案件處理流程，並讓財務與經營分析更快速、更有依據。'
  },
  {
    id: 'healthcare',
    icon: <Stethoscope size={24} />,
    title: '醫療 / 診所 / 健康服務',
    subtitle: '以 AI 優化院所行政流程、知識查詢與服務溝通效率',
    intro: '醫療與健康服務機構除了專業服務本身，也需要面對大量行政、流程、病患溝通與內部知識管理工作。當資訊分散且處理流程繁瑣時，前線與後勤團隊都容易承受額外負擔。',
    painPoints: [
      '行政與表單處理量大',
      '院內作業流程與規範文件分散',
      '病患常見問題重複詢問頻繁',
      '多語溝通與衛教資訊整理耗時',
      '會議與個案討論紀錄整理不易',
      '營運、成本與預算資料整理耗時'
    ],
    aiDirections: '可建立院內流程與制度問答入口、自動整理表單與同意書、提升病患 FAQ 與預約服務效率、優化內部訓練與會議摘要流程，並支援行政與營運資料整理。',
    solutions: ['KnowledgeFlow 智識中樞', 'DocuMind 文件智匯', 'ServicePilot 智能客服引擎', 'WorkSprint 協作加速器', 'TalentDesk 人資行政助手', 'FinSight 財務洞察引擎'],
    applications: ['院內流程 / SOP 問答', '行政文件整理', '病患 FAQ 助手', '預約 / 問答客服', '表單 / 同意書 OCR 與整理', '會議 / 個案討論摘要', '內部教育訓練助手', '多語溝通輔助', '文件缺漏檢查', '醫材 / 服務說明問答', '營運報表與財務資料摘要', '預算與成本分析輔助'],
    benefits: '協助院所降低行政重工、加快資訊查找與回覆速度、改善病患與內部溝通效率，並提升營運與財務資料的整理與判讀能力。'
  },
  {
    id: 'retail',
    icon: <ShoppingCart size={24} />,
    title: '零售 / 電商 / 品牌',
    subtitle: '以 AI 提升客服效率、商品資訊管理與行銷轉換速度',
    intro: '零售與電商品牌同時需要面對商品資訊、活動內容、客服回覆、顧客評論、訂單查詢與門市管理等多種高頻工作。當通路越多、內容更新越快，資訊維護與前台服務的壓力也會越大。',
    painPoints: [
      '客服量大且重複性高',
      '商品資訊、FAQ、活動說明分散',
      '商品文案、行銷內容與活動資訊更新頻繁',
      '客訴與評論整理耗時',
      '門市巡檢與陳列紀錄品質不一致',
      '營收、毛利與活動成效分析需頻繁整理'
    ],
    aiDirections: '可導入商品與客服問答系統、客服回覆與工單分流、商品文案生成、評論摘要、門市巡檢整理，以及銷售與財務資料分析支援。',
    solutions: ['ServicePilot 智能客服引擎', 'CommerceBoost 業務成長助手', 'KnowledgeFlow 智識中樞', 'FieldVision 現場視巡助手', 'WorkSprint 協作加速器', 'FinSight 財務洞察引擎'],
    applications: ['商品知識問答', '客服 AI', '商品 FAQ Bot', '商品文案生成', 'EDM / 社群文案生成', '顧客評論摘要', '客訴分類', '門市巡檢照片整理', '門市 SOP 問答', '庫存 / 訂單查詢助手', '營收與損益分析輔助', '活動成效與財務關聯分析'],
    benefits: '協助零售與品牌企業提升客服回應速度、加快內容產出、改善門市與電商資訊整理效率，並支援營收與經營分析判讀。'
  },
  {
    id: 'realestate',
    icon: <Home size={24} />,
    title: '房地產 / 建設 / 物業管理',
    subtitle: '讓 AI 協助物件資訊、工地巡檢、住戶服務與文件處理全面加速',
    intro: '房地產、建設與物業管理產業通常需要處理大量合約、物件資料、工程文件、工地巡檢紀錄、住戶服務資訊與報修流程。當資訊分散在不同人員與系統中時，常導致查找不易、流程斷點與行政重工。',
    painPoints: [
      '合約、物件資料、工程文件量大且分散',
      '工地與物業巡檢記錄依賴人工整理',
      '客戶與住戶詢問問題重複性高',
      '報修、驗收、案件分派流程繁瑣',
      '業務提案與銷售資料整理費時',
      '專案損益與現金流資料需要持續追蹤與比對'
    ],
    aiDirections: '可建立物件與服務知識庫、整理工地與物業巡檢資料、進行合約與工程文件摘要比對、優化報修工單流程，並支援業務提案與營運財務資料分析。',
    solutions: ['DocuMind 文件智匯', 'FieldVision 現場視巡助手', 'ServicePilot 智能客服引擎', 'FlowOps 智動流程中台', 'CommerceBoost 業務成長助手', 'FinSight 財務洞察引擎'],
    applications: ['合約與條款摘要', '物件資料問答', '業務提案書生成', '客戶問答助手', '工地巡檢報告生成', '現場照片整理', '工程文件 OCR', '驗收文件整理', '物管 SOP 問答', '住戶客服助手', '報修工單分派', '專案損益與現金流分析輔助'],
    benefits: '協助房地產與物業團隊提升文件查找與處理效率、改善巡檢與報修流程，並強化專案與營運數據的分析支援。'
  },
  {
    id: 'legal',
    icon: <Scale size={24} />,
    title: '法律 / 會計 / 顧問服務',
    subtitle: '讓 AI 成為專業服務團隊的文件分析、摘要撰寫與知識協作助手',
    intro: '法律、會計與顧問服務團隊需要處理大量合約、法規、客戶文件、報表與提案資料，且常要求高效率、高一致性與高可追溯性。當專業知識與案例資料難以快速重用時，團隊產能與服務效率就容易受限。',
    painPoints: [
      '合約、法規、會計文件閱讀與整理耗時',
      '報告、提案與客戶文件草擬重工高',
      '客戶需求與案件資訊分散',
      '專業知識與歷史案例不易快速查詢',
      '財務模型與報表資料需要反覆驗證'
    ],
    aiDirections: '可導入合約摘要與條款比對、法規與案例問答、客戶文件整理、提案與報告輔助生成、專業知識庫，以及財務模型與分析文件整理支援。',
    solutions: ['DocuMind 文件智匯', 'RiskLens 合規洞察台', 'KnowledgeFlow 智識中樞', 'WorkSprint 協作加速器', 'CommerceBoost 業務成長助手', 'FinSight 財務洞察引擎'],
    applications: ['合約摘要與差異比對', '條款風險提示', '法規 / 內規問答', '會議摘要', '客戶文件整理', '提案書 / 報告初稿生成', '稅務 / 財務文件整理', 'RFP / RFI 回覆輔助', '客戶知識庫助手', '案件進度摘要', '財務模型檢查與關聯分析', '報表一致性驗證'],
    benefits: '協助專業服務團隊縮短文件處理時間、加快報告與提案產出、強化知識再利用能力，並提升財務與分析文件的整理效率。'
  },
  {
    id: 'logistics',
    icon: <Truck size={24} />,
    title: '物流 / 倉儲 / 運輸',
    subtitle: '透過 AI 強化文件流、任務分派、現場紀錄與客服查詢效率',
    intro: '物流、倉儲與運輸產業需要處理大量訂單、出貨單據、供應商文件、跨據點作業流程、客服查詢與現場異常紀錄。當資訊量大且節奏快時，人工整理與追蹤往往成為效率瓶頸。',
    painPoints: [
      '訂單、出貨、單據與供應商文件多且繁瑣',
      '倉儲與運輸現場異常紀錄不易整理',
      '客服與查件詢問量高',
      '跨據點 SOP、任務與資訊整合困難',
      '成本、運費與營運資料需要持續交叉檢查'
    ],
    aiDirections: '可導入文件擷取與單據整理、客服與查件助手、工單與任務分派流程、現場異常紀錄整理，以及營運與財務資料分析支援。',
    solutions: ['DocuMind 文件智匯', 'FlowOps 智動流程中台', 'FieldVision 現場視巡助手', 'ServicePilot 智能客服引擎', 'KnowledgeFlow 智識中樞', 'FinSight 財務洞察引擎'],
    applications: ['訂單 / 出貨文件擷取', '倉儲 SOP 問答', '現場照片與異常紀錄整理', '客服與查詢助手', '工單 / 任務派送 Agent', '報表摘要', '車隊 / 倉務行政助手', '供應商與採購文件整理', '表單受理 Agent', '多據點知識庫搜尋', '成本、運費與營運數據分析輔助'],
    benefits: '協助物流與運輸團隊提升單據處理速度、改善客服與現場資訊流、強化跨據點作業一致性，並提升成本與營運資料分析效率。'
  },
  {
    id: 'education',
    icon: <GraduationCap size={24} />,
    title: '教育 / 補教 / 培訓',
    subtitle: '讓 AI 協助教務、招生、行政與學員服務更即時、更有系統',
    intro: '教育與培訓機構需要持續處理招生詢問、校務與教務行政、教材整理、活動文案與學員服務。當課程與資料持續增加時，行政與溝通成本也會隨之上升。',
    painPoints: [
      '招生與學員常見問題重複性高',
      '教材、教務與行政文件分散',
      '會議、內訓與課程資料整理耗時',
      '活動與招生文案產出壓力大',
      '收支與課程營運資料需要整理與分析'
    ],
    aiDirections: '可建立招生與校務問答入口、整理教材與行政文件、導入學員服務助手、優化會議與行政摘要流程，並支援營運報表與財務資料分析。',
    solutions: ['ServicePilot 智能客服引擎', 'KnowledgeFlow 智識中樞', 'WorkSprint 協作加速器', 'CommerceBoost 業務成長助手', 'TalentDesk 人資行政助手', 'FinSight 財務洞察引擎'],
    applications: ['校務 / 行政 FAQ Bot', '招生客服助手', '教材摘要', '會議摘要', '教務流程問答', '多語翻譯與改寫', '教師 / 顧問知識庫', '報名文件整理', '招生活動文案生成', '學員服務問答', '收支與課程營運分析輔助'],
    benefits: '協助教育與培訓機構降低行政與招生回覆成本、加快教材與文件整理速度，並提升營運數據與財務資訊掌握能力。'
  },
  {
    id: 'tech',
    icon: <MonitorSmartphone size={24} />,
    title: '科技公司 / SaaS / 軟體服務',
    subtitle: '以 AI 強化產品知識、客服、內部協作與商務成長效率',
    intro: '科技公司與 SaaS 團隊往往同時面對產品文件、技術支援、售前提案、客戶成功、工單處理與跨團隊協作等多種資訊密集型工作。當內外部知識分散時，查詢效率與回應一致性都容易受到影響。',
    painPoints: [
      '產品文件、技術文件與客服知識分散',
      '內部協作與工單處理量大',
      '售前、客服與客戶成功團隊需快速取得一致資訊',
      '提案、回覆與產品更新整理耗時',
      '營運指標、財務模型與成長數據需持續分析'
    ],
    aiDirections: '可建立產品與技術知識問答入口、優化客服與 ticket 流程、強化售前與客戶成功支援、導入內部協作 Copilot，並支援營運與財務數據分析。',
    solutions: ['KnowledgeFlow 智識中樞', 'ServicePilot 智能客服引擎', 'WorkSprint 協作加速器', 'FlowOps 智動流程中台', 'CommerceBoost 業務成長助手', 'FinSight 財務洞察引擎'],
    applications: ['產品知識問答', '客服與技術支援助手', '開發文件搜尋助手', '內部 Copilot', 'CRM / Ticket 查詢 Agent', 'RFP / 提案回覆輔助', '產品更新摘要', '客戶成功知識助手', '工單摘要與分派', 'FAQ Bot', '財務模型、營運指標與成長數據分析輔助'],
    benefits: '協助科技團隊提升客服與售前效率、加快內部資訊流通、強化產品知識管理，並支援成長與財務分析判讀。'
  },
  {
    id: 'hr',
    icon: <Users size={24} />,
    title: '人資服務 / 招募 / 企業 HR',
    subtitle: '用 AI 協助招募、制度溝通、員工服務與內訓行政全面提速',
    intro: '招募與 HR 團隊經常需要處理大量履歷、面試紀錄、制度文件、員工常見問題、內訓資料與行政文書。當團隊人力有限且需求繁多時，流程效率與回應速度容易成為瓶頸。',
    painPoints: [
      '履歷初篩與資料整理耗時',
      '新人訓練與 onboarding 文件繁多',
      '員工制度問題重複詢問頻繁',
      'HR 行政與文書產出工作量高',
      '薪酬、預算與人力成本分析需持續整理'
    ],
    aiDirections: '可導入履歷整理、員工制度問答、新人 onboarding 助手、內訓內容摘要、行政文書輔助與 HR 服務流程優化。',
    solutions: ['TalentDesk 人資行政助手', 'KnowledgeFlow 智識中樞', 'WorkSprint 協作加速器', 'FlowOps 智動流程中台', 'FinSight 財務洞察引擎'],
    applications: ['JD 生成', '履歷摘要', '面試紀錄整理', 'HR FAQ Bot', '新人 onboarding 助手', '員工手冊 / 制度問答', '內訓教材摘要', '員工自助服務助手', '教育訓練助手', '內部政策問答', '行政文書生成', '員工自助服務 Agent', '薪酬、預算與人力成本分析輔助'],
    benefits: '協助 HR 團隊縮短行政處理時間、提升制度傳達效率、改善員工自助服務體驗，並支援人力成本與預算分析。'
  },
  {
    id: 'government',
    icon: <Building size={24} />,
    title: '政府 / 公協會 / 非營利組織',
    subtitle: '以 AI 提升公告查詢、申請文件整理、知識服務與內部行政效率',
    intro: '政府單位、公協會與非營利組織經常面對大量辦法、公告、申請文件、公文、會議紀錄與民眾或會員常見問題。當資訊分散且行政流程繁複時，往往容易增加服務與管理成本。',
    painPoints: [
      '辦法、公告、申請文件量大',
      '民眾與會員常見問題重複度高',
      '公文、會議與專案資料整理耗時',
      '申請文件初步檢查與缺漏確認繁瑣',
      '經費、補助與專案數據資料需整理分析'
    ],
    aiDirections: '可建立公告與辦法問答入口、導入申請文件整理與缺漏檢查、提供 FAQ 與民眾服務助手、強化公文與專案報告摘要，並支援經費與專案數據分析整理。',
    solutions: ['KnowledgeFlow 智識中樞', 'DocuMind 文件智匯', 'ServicePilot 智能客服引擎', 'WorkSprint 協作加速器', 'RiskLens 合規洞察台', 'FinSight 財務洞察引擎'],
    applications: ['公告 / 辦法問答', '申請文件整理', '申請資格文件缺漏檢查', '民眾 FAQ 助手', '內部知識庫問答', '公文摘要', '會議紀錄整理', '專案報告初稿', '稽核清單助手', '文件搜尋入口', '經費、補助與專案財務資料整理分析'],
    benefits: '協助組織提升公共資訊查詢效率、減少文件初審負擔、改善民眾與會員服務體驗，並強化專案與財務資料整理效率。'
  },
  {
    id: 'hospitality',
    icon: <Utensils size={24} />,
    title: '旅宿 / 餐飲 / 服務業',
    subtitle: '讓 AI 協助客服、門市管理、評論整理與現場作業標準化',
    intro: '旅宿、餐飲與服務業常面對訂位與服務詢問、門市與分店 SOP 落地困難、評論與客訴整理耗時、多據點人員訓練成本高，以及現場紀錄品質不一致等問題。AI 可成為提升服務品質與營運效率的重要助手。',
    painPoints: [
      '訂位、服務、常見問題回覆量大',
      '門市 / 分店 SOP 難一致落地',
      '顧客評論與客訴整理耗時',
      '巡檢與現場紀錄品質不一',
      '多店點資訊與人員訓練成本高',
      '營收、成本與店點績效分析需持續整理'
    ],
    aiDirections: '可建立訂位與服務問答助手、導入顧客評論摘要與客訴整理、支援門市 SOP 問答與訓練、強化巡檢與現場紀錄整理，並支援營收與成本分析。',
    solutions: ['ServicePilot 智能客服引擎', 'KnowledgeFlow 智識中樞', 'FieldVision 現場視巡助手', 'CommerceBoost 業務成長助手', 'TalentDesk 人資行政助手', 'FinSight 財務洞察引擎'],
    applications: ['客服與訂位問答', 'FAQ Bot', '門市 / 分店 SOP 問答', '巡檢報告生成', '顧客評論摘要', '客訴分類', '員工訓練助手', '行銷文案生成', '多語客服協助', '現場照片紀錄整理', '營收、成本與店點績效分析輔助'],
    benefits: '協助服務業提升回應速度與服務一致性、強化多據點管理效率、降低評論與客訴整理成本，並支援店點經營分析。'
  }
];

const industriesEn = [
  {
    id: 'manufacturing',
    icon: <Briefcase size={24} />,
    title: 'Manufacturing',
    subtitle: 'Use AI to accelerate shop-floor operations, knowledge transfer, and execution',
    intro: 'Manufacturing operations rely on SOPs, equipment knowledge, maintenance experience, inspection logs, QA documents, and cross-team collaboration. When information is scattered across people, spreadsheets, forms, and documents, execution slows down and management quality suffers.',
    painPoints: [
      'SOPs, equipment knowledge, and maintenance know-how are scattered across teams',
      'Inspections, maintenance, QA, and work orders require heavy manual consolidation',
      'Procurement, orders, suppliers, and QA document management is complex',
      'Slow feedback from the field; cross-team tracking is inefficient',
      'High onboarding and knowledge transfer cost',
      'Cost/procurement/operations data is interconnected and hard to validate quickly',
    ],
    aiDirections: 'Build equipment and operations knowledge bases, structure inspection photos and records, extract procurement/QA document fields, optimize work-order routing, and enhance cost analysis with cross-report validation.',
    solutions: ['KnowledgeFlow', 'DocuMind', 'FlowOps', 'FieldVision', 'WorkSprint', 'FinSight'],
    applications: ['SOP Q&A', 'Maintenance knowledge base', 'Inspection report generation', 'Photo-to-inspection descriptions', 'Meter/nameplate OCR', 'Work order creation & routing', 'Procurement/quote/order extraction', 'QA/supplier document organization', 'Safety policy Q&A', 'Training assistant', 'Cost analysis & validation', 'Cross-checks across ops/finance data'],
    benefits: 'Improve knowledge retrieval speed, reduce documentation burden, accelerate field-to-office feedback loops, strengthen cross-team coordination, and enhance operational/financial validation.',
  },
  {
    id: 'finance',
    icon: <Landmark size={24} />,
    title: 'Finance & Insurance',
    subtitle: 'Improve document throughput, compliance readiness, and service quality with AI',
    intro: 'Finance and insurance teams face heavy documentation, strict compliance, review workflows, and service-time pressure. As policies, claims, applications, clauses, and reports grow, AI becomes a practical lever to maintain quality while scaling efficiency.',
    painPoints: [
      'Rules, compliance, and product documents are numerous and frequently updated',
      'Policy/claims/application reviews consume significant manpower',
      'Support must answer high-frequency questions quickly with consistent quality',
      'Clause comparison and missing-field checks are tedious',
      'Audit prep, reporting, and case organization pressure is high',
      'Model and operating-metric changes make impact hard to assess quickly',
    ],
    aiDirections: 'Adopt compliance knowledge Q&A, application extraction and validation, clause comparison and risk hints, support reply assistance, workflow intake/routing, and analytics for management reports and models.',
    solutions: ['RiskLens', 'DocuMind', 'ServicePilot', 'WorkSprint', 'FlowOps', 'FinSight'],
    applications: ['Compliance/rules Q&A', 'Doc summarization & clause comparison', 'Policy/claim extraction', 'Support reply assistance', 'Missing-field checks', 'Audit checklist assistant', 'Contract review assistance', 'Report summaries', 'Case intake workflow agents', 'Multi-doc cross-checks', 'Model scenario impact analysis', 'Narratives for management reports'],
    benefits: 'Speed up reviews, strengthen compliance and audit support, improve service and case handling, and make financial/operational analysis faster and more reliable.',
  },
  {
    id: 'healthcare',
    icon: <Stethoscope size={24} />,
    title: 'Healthcare',
    subtitle: 'Streamline administration, knowledge lookup, and patient communication with AI',
    intro: 'Beyond clinical work, healthcare providers handle heavy administration, processes, patient communication, and internal knowledge management. When information is scattered and workflows are complex, both frontline and back-office teams carry extra load.',
    painPoints: [
      'High volume of admin work and forms',
      'Internal procedures and policies are distributed',
      'Patients ask repetitive questions frequently',
      'Multi-language communication and education materials take time',
      'Meeting/case discussion notes are hard to summarize',
      'Operations, cost, and budget data requires frequent consolidation',
    ],
    aiDirections: 'Create internal SOP/policy Q&A, digitize consent/forms with extraction, improve patient FAQ and scheduling support, summarize meetings, and assist with operational reporting and analysis.',
    solutions: ['KnowledgeFlow', 'DocuMind', 'ServicePilot', 'WorkSprint', 'TalentDesk', 'FinSight'],
    applications: ['Clinic SOP Q&A', 'Admin document organization', 'Patient FAQ assistant', 'Scheduling/support chat', 'Consent/form OCR', 'Meeting/case summaries', 'Training assistant', 'Multi-language assistance', 'Missing-field checks', 'Service/material Q&A', 'Ops & finance summaries', 'Budget/cost analysis assistance'],
    benefits: 'Reduce admin rework, accelerate information lookup and responses, improve patient and internal communication, and strengthen operations/finance consolidation.',
  },
  {
    id: 'retail',
    icon: <ShoppingCart size={24} />,
    title: 'Retail & E-commerce',
    subtitle: 'Boost support efficiency, product information management, and conversion speed',
    intro: 'Retail and e-commerce brands manage product info, campaign content, support replies, reviews, order inquiries, and store operations. More channels and faster updates increase the pressure on information maintenance and frontline service.',
    painPoints: [
      'High support volume and repetitive inquiries',
      'Product info, FAQs, and campaign details are scattered',
      'Copy and campaign content updates are frequent',
      'Complaints and reviews take time to process',
      'Store inspections and display records are inconsistent',
      'Revenue/margin/campaign performance analysis requires frequent consolidation',
    ],
    aiDirections: 'Adopt product/support Q&A, reply assistance and ticket routing, copy generation, review summarization, store inspection structuring, and sales/finance analytics support.',
    solutions: ['ServicePilot', 'CommerceBoost', 'KnowledgeFlow', 'FieldVision', 'WorkSprint', 'FinSight'],
    applications: ['Product Q&A', 'AI support', 'FAQ bot', 'Product copy generation', 'EDM/social copy generation', 'Review summaries', 'Complaint categorization', 'Store photo inspection organization', 'Store SOP Q&A', 'Inventory/order query assistant', 'Revenue & P&L analysis', 'Campaign-to-finance linkage analysis'],
    benefits: 'Faster responses, faster content production, improved store/e-commerce information workflows, and better revenue and operating analysis.',
  },
  {
    id: 'realestate',
    icon: <Home size={24} />,
    title: 'Real Estate & Property',
    subtitle: 'Accelerate asset info, site inspections, resident service, and documents with AI',
    intro: 'Real estate, construction, and property management handle heavy contracts, asset data, engineering documents, inspection logs, resident service info, and repair workflows. When information is spread across people and systems, it creates bottlenecks and rework.',
    painPoints: [
      'Contracts, asset data, and engineering docs are large and fragmented',
      'Site/property inspection records rely on manual consolidation',
      'Resident/customer questions are highly repetitive',
      'Repair/acceptance/case routing is complex',
      'Sales proposals and materials take time to assemble',
      'Project P&L and cashflow require continuous tracking and validation',
    ],
    aiDirections: 'Build asset/service knowledge bases, structure inspection data, summarize and compare contract/engineering docs, optimize repair ticket workflows, and support proposal and project finance analysis.',
    solutions: ['DocuMind', 'FieldVision', 'ServicePilot', 'FlowOps', 'CommerceBoost', 'FinSight'],
    applications: ['Contract summaries & clause checks', 'Asset data Q&A', 'Proposal generation', 'Customer Q&A assistant', 'Inspection report generation', 'Photo organization', 'Engineering OCR', 'Acceptance doc organization', 'Property SOP Q&A', 'Resident support assistant', 'Repair ticket routing', 'Project P&L/cashflow analysis assistance'],
    benefits: 'Faster document handling, smoother inspections and repairs, and stronger project/operating analytics support.',
  },
  {
    id: 'legal',
    icon: <Scale size={24} />,
    title: 'Legal / Accounting / Consulting',
    subtitle: 'AI assistance for document analysis, drafting, and knowledge collaboration',
    intro: 'Professional services teams handle large volumes of contracts, regulations, client documents, reports, and proposals—requiring speed, consistency, and traceability. When expertise and case history are hard to reuse, throughput is constrained.',
    painPoints: [
      'Reading and organizing contracts/regulations/accounting documents is time-consuming',
      'Reports, proposals, and client drafts involve heavy rework',
      'Client needs and case information is scattered',
      'Expert knowledge and historical cases are hard to retrieve quickly',
      'Financial models and report data require repeated validation',
    ],
    aiDirections: 'Adopt contract summarization and clause comparison, regulatory/case Q&A, client document organization, assisted drafting, knowledge bases, and finance model validation support.',
    solutions: ['DocuMind', 'RiskLens', 'KnowledgeFlow', 'WorkSprint', 'CommerceBoost', 'FinSight'],
    applications: ['Contract summaries & diffs', 'Clause risk hints', 'Regulatory/internal rules Q&A', 'Meeting summaries', 'Client doc organization', 'Proposal/report drafting', 'Tax/finance document organization', 'RFP/RFI response assistance', 'Client knowledge base assistant', 'Case progress summaries', 'Model validation & relationship analysis', 'Report consistency checks'],
    benefits: 'Shorter document cycle times, faster report/proposal output, stronger knowledge reuse, and improved validation for finance/analysis documents.',
  },
  {
    id: 'logistics',
    icon: <Truck size={24} />,
    title: 'Logistics / Warehousing / Transportation',
    subtitle: 'Improve document flow, task routing, field records, and support lookup with AI',
    intro: 'Logistics and warehousing teams handle orders, shipping docs, supplier files, multi-site SOPs, customer inquiries, and anomaly logs. High volume and fast cadence make manual consolidation a key bottleneck.',
    painPoints: [
      'Order/shipping documents and attachments are heavy and fragmented',
      'Multi-site processes and status updates are hard to synchronize',
      'Support frequently needs order/inventory/status information',
      'Field anomalies and handover notes are hard to track',
      'Task routing and approvals rely on manual coordination',
      'Monthly reporting takes time and is error-prone',
    ],
    aiDirections: 'Structure shipping documents and attachments, enable cross-system queries, automate matching/corrections, route tasks and approvals, and provide fast reporting with validations.',
    solutions: ['FlowOps', 'DocuMind', 'ServicePilot', 'WorkSprint', 'KnowledgeFlow', 'FinSight'],
    applications: ['Shipping doc extraction', 'Order/inventory/status query assistant', 'Customer inquiry support bot', 'Anomaly summarization', 'Task routing & approvals', 'Multi-site SOP Q&A', 'Report summaries', 'Cross-system reconciliation', 'Supplier document checks', 'Evidence organization', 'KPI dashboards', 'Data quality validation'],
    benefits: 'Higher throughput, faster cross-system coordination, better support response speed, improved tracking of anomalies, and more reliable reporting.',
  },
  {
    id: 'education',
    icon: <GraduationCap size={24} />,
    title: 'Education & Training',
    subtitle: 'Accelerate teaching operations, knowledge delivery, and student services',
    intro: 'Education and training organizations manage course materials, policies, student Q&A, admin workflows, and internal training documentation. With frequent updates and multiple stakeholders, consistent information delivery is hard.',
    painPoints: [
      'Course/policy materials update frequently and are hard to keep consistent',
      'High volume of repetitive student questions',
      'Admin workflows across departments are fragmented',
      'Training content preparation and summarization is time-consuming',
      'Multi-channel communication increases workload',
      'Reporting and operations data consolidation takes time',
    ],
    aiDirections: 'Build course and policy Q&A, automate material summarization, assist with content creation, support admin routing, and provide analytics summaries for operations.',
    solutions: ['KnowledgeFlow', 'ServicePilot', 'WorkSprint', 'FlowOps', 'DocuMind', 'TalentDesk'],
    applications: ['Student FAQ assistant', 'Course material Q&A', 'Policy Q&A', 'Material summarization', 'Email/announcement drafting', 'Ticket routing', 'Document extraction', 'Training assistant', 'Multi-language support', 'Knowledge search portal', 'Ops reporting summaries', 'Workflow reminders'],
    benefits: 'Faster responses, more consistent information delivery, reduced admin workload, and improved learning/support experience.',
  },
  {
    id: 'tech',
    icon: <MonitorSmartphone size={24} />,
    title: 'SaaS / Software',
    subtitle: 'Boost engineering, operations, and customer success productivity with AI',
    intro: 'Software organizations manage product documentation, support knowledge, incident workflows, release notes, and cross-tool context. When information is spread across ticketing, docs, repos, and chats, it slows down execution and support.',
    painPoints: [
      'Docs and knowledge bases are out of date and fragmented',
      'Support and success teams need fast, consistent answers',
      'Incident and workflow handoffs require manual summaries',
      'Release notes, emails, and announcements require frequent writing',
      'Cross-system queries (CRM/ERP/support/dev) are common',
      'Analytics and KPI tracking requires consolidation',
    ],
    aiDirections: 'Adopt knowledge Q&A with citations, assist support replies, summarize incidents and meetings, generate drafts, and provide cross-system query agents and analytics summaries.',
    solutions: ['KnowledgeFlow', 'ServicePilot', 'WorkSprint', 'FlowOps', 'DocuMind', 'FinSight'],
    applications: ['Docs Q&A', 'Support reply assistant', 'Incident summaries', 'Meeting/action items', 'Release note drafts', 'Cross-system query agents', 'Ticket routing', 'Knowledge recommendations', 'Doc extraction', 'Analytics summaries', 'KPI dashboards', 'Workflow reminders'],
    benefits: 'Faster execution, more consistent support, smoother handoffs, and better operational visibility.',
  },
  {
    id: 'hr',
    icon: <Users size={24} />,
    title: 'HR Services / Recruiting',
    subtitle: 'Speed up screening, internal services, and policy communication with AI',
    intro: 'HR teams handle resumes, interviews, onboarding, policy communication, and internal requests. Repetitive questions and fragmented documents create rework and slow response time.',
    painPoints: [
      'Resume screening and summarization is time-consuming',
      'Interview notes and hiring pipeline updates require manual effort',
      'Onboarding materials are fragmented across files and tools',
      'Policy questions are repetitive and inconsistent',
      'Internal requests require manual routing and tracking',
      'Training content preparation is heavy',
    ],
    aiDirections: 'Summarize resumes, structure interview notes, build policy Q&A, route internal requests, and summarize training materials for consistent internal services.',
    solutions: ['TalentDesk', 'KnowledgeFlow', 'WorkSprint', 'FlowOps', 'DocuMind', 'ServicePilot'],
    applications: ['Resume summaries', 'JD generation', 'Interview notes', 'Onboarding assistant', 'Policy Q&A', 'Internal request routing', 'Training summaries', 'Self-service portal', 'Document extraction', 'FAQ bot', 'Workflow reminders', 'Reporting summaries'],
    benefits: 'Faster hiring support, better employee experience, reduced repetitive workload, and more consistent policy communication.',
  },
  {
    id: 'public',
    icon: <Landmark size={24} />,
    title: 'Government / Associations / Nonprofits',
    subtitle: 'Improve public service, documentation, and cross-department workflows with AI',
    intro: 'Public-sector and nonprofit organizations handle heavy paperwork, policy documents, public inquiries, and cross-department coordination. Consistency, traceability, and speed are key.',
    painPoints: [
      'Policy and guideline documents are heavy and frequently updated',
      'Public inquiries are repetitive and high volume',
      'Cross-department workflows have many handoffs and delays',
      'Case documentation and evidence packaging takes time',
      'Meeting minutes and reports require repeated drafting',
      'Data consolidation for reporting is slow and error-prone',
    ],
    aiDirections: 'Adopt policy Q&A, automate intake and routing, summarize cases and meetings, structure documents, and support analytics summaries for reporting.',
    solutions: ['KnowledgeFlow', 'DocuMind', 'FlowOps', 'WorkSprint', 'ServicePilot', 'FinSight'],
    applications: ['Public FAQ assistant', 'Policy Q&A', 'Intake/routing workflows', 'Case summaries', 'Document extraction', 'Evidence organization', 'Meeting minutes', 'Report drafting', 'Cross-system queries', 'Data validation', 'KPI reporting', 'Knowledge search portal'],
    benefits: 'Faster public responses, smoother internal workflows, better traceability, and more reliable reporting.',
  },
  {
    id: 'hospitality',
    icon: <Utensils size={24} />,
    title: 'Hospitality & Food Service',
    subtitle: 'Improve service responses, multi-location SOPs, reviews, and field records with AI',
    intro: 'Hospitality and service businesses face high volumes of booking/service inquiries, challenges in standardizing SOPs across branches, time-consuming review/complaint processing, training costs, and inconsistent field record quality.',
    painPoints: [
      'High volume of booking/service FAQs',
      'Branch SOPs are difficult to standardize',
      'Review and complaint processing takes time',
      'Inspections and field records vary in quality',
      'Multi-location training cost is high',
      'Revenue, cost, and store performance analysis requires ongoing consolidation',
    ],
    aiDirections: 'Deploy booking/service assistants, summarize reviews and complaints, support SOP Q&A and training, structure inspection records and photos, and assist revenue/cost analysis.',
    solutions: ['ServicePilot', 'KnowledgeFlow', 'FieldVision', 'CommerceBoost', 'TalentDesk', 'FinSight'],
    applications: ['Booking/service Q&A', 'FAQ bot', 'Branch SOP Q&A', 'Inspection report generation', 'Review summaries', 'Complaint categorization', 'Training assistant', 'Marketing copy generation', 'Multi-language support', 'Photo record organization', 'Revenue/cost/store performance analysis assistance'],
    benefits: 'Faster responses, more consistent service, better multi-location operations, lower review/complaint handling cost, and stronger store performance analysis.',
  },
];

export default function Industries() {
  const { lang } = useI18n();
  const industries = lang === "en" ? industriesEn : industriesZh;
  const [activeTab, setActiveTab] = useState(industriesZh[0].id);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
            {lang === "en" ? "Industry-fit AI solutions" : "依產業特性規劃適合的 AI 解決方案"}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            {lang === "en"
              ? "Workflows and information types vary by industry. We tailor adoption paths by department needs and real-world constraints."
              : "不同產業有不同的流程、資訊型態與管理痛點，因此 AI 的導入方式也應有所不同。我們可依產業特性與部門需求，規劃最適合的 AI 解決方案組合。"}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4 shrink-0">
              <div className="sticky top-28 space-y-2">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${
                      activeTab === ind.id 
                        ? 'bg-primary text-white shadow-[0_0_15px_rgba(91,66,243,0.3)]' 
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                    }`}
                  >
                    <span className={activeTab === ind.id ? 'text-white' : 'text-slate-500'}>
                      {ind.icon}
                    </span>
                    <span className="font-bold">{ind.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:w-3/4">
              {industries.map((ind) => (
                <div 
                  key={ind.id} 
                  className={`transition-opacity duration-500 ${activeTab === ind.id ? 'block opacity-100' : 'hidden opacity-0'}`}
                >
                  <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-primary-light font-bold mb-6 border border-white/10">
                      {ind.icon}
                      {ind.title}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                      {ind.subtitle}
                    </h2>
                    
                    <p className="text-lg text-slate-400 leading-relaxed mb-12">
                      {ind.intro}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <span className="w-2 h-6 bg-red-500 rounded-full"></span>
                          {lang === "en" ? "Pain points" : "產業痛點"}
                        </h3>
                        <ul className="space-y-3">
                          {ind.painPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-400">
                              <span className="text-red-500 mt-1">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <span className="w-2 h-6 bg-primary-light rounded-full"></span>
                          {lang === "en" ? "AI adoption directions" : "AI 可導入方向"}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          {ind.aiDirections}
                        </p>
                      </div>
                    </div>

                    <div className="mb-12">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-6 bg-cyan-400 rounded-full"></span>
                        {lang === "en" ? "Recommended modules & key applications" : "推薦方案與核心應用"}
                      </h3>
                      <div className="mb-6">
                        <h4 className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-3">
                          {lang === "en" ? "Recommended solution modules" : "推薦解決方案模組"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {ind.solutions.map((sol, i) => (
                            <span key={i} className="bg-primary/20 text-primary-light border border-primary/30 px-3 py-1.5 rounded-lg text-sm font-medium">
                              {sol}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-3">
                          {lang === "en" ? "Key application scenarios" : "核心應用場景"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {ind.applications.map((app, i) => (
                            <span key={i} className="bg-white/5 text-slate-300 border border-white/10 px-3 py-1.5 rounded-lg text-sm">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/20 to-accent/10 p-6 rounded-2xl border border-primary/30">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-6 bg-accent rounded-full"></span>
                        {lang === "en" ? "Expected impact" : "預期效益"}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {ind.benefits}
                      </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center">
                      <Link
                        to="/contact"
                        className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-light transition-all shadow-[0_0_15px_rgba(91,66,243,0.4)] hover:shadow-[0_0_25px_rgba(91,66,243,0.6)] hover:-translate-y-1"
                      >
                        {lang === "en" ? `Discuss a ${ind.title} plan` : `洽詢${ind.title}專屬方案`}
                        <ArrowRight size={20} />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
