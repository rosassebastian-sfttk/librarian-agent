export type Freshness = "Fresh" | "Aging" | "Stale";
export type FunnelStage = "Awareness" | "Consideration" | "Conversion";

export type Asset = {
  id: string;
  title: string;
  type: string;
  vertical: string;
  offering: string;
  stage: FunnelStage;
  language: "English" | "Spanish";
  region: string;
  webTag: string;
  microservice: string;
  macroservice: string;
  publishDate: string;
  freshness: Freshness;
  descriptor: string;
  campaign: string;
  owner: string;
  why: string;
  views: string;
  clicks: string;
  ctr: string;
  supersededBy?: string;
  thumbnail: string;
  formats: { id: string; label: string }[];
};

export const assets: Asset[] = [
  { id: "retail-commerce", title: "Reimagining unified commerce for a global retailer", type: "Written case study", vertical: "Retail", offering: "Digital Product Engineering", stage: "Consideration", language: "English", region: "North America", webTag: "unified commerce", microservice: "Commerce experience", macroservice: "Digital transformation", publishDate: "Jun 18, 2025", freshness: "Fresh", descriptor: "a global specialty retailer", campaign: "Connected Commerce FY25", owner: "Demand Center · Priya Shah", why: "Direct match for Retail and unified commerce intent with strong consideration proof.", views: "12.4k", clicks: "1.8k", ctr: "14.5%", thumbnail: "retail", formats: [{ id: "pdf", label: "PDF" }, { id: "pptx", label: "PPTX" }] },
  { id: "cpg-executive", title: "The CPG executive guide to profitable personalization", type: "Whitepaper", vertical: "CPG", offering: "Data & AI", stage: "Awareness", language: "English", region: "Global", webTag: "executive audience", microservice: "Customer intelligence", macroservice: "Data modernization", publishDate: "Apr 02, 2025", freshness: "Aging", descriptor: "a multinational consumer goods company", campaign: "Intelligent Growth", owner: "Demand Center · Marco Ruiz", why: "Executive-ready thought leadership that maps CPG growth priorities to Data & AI.", views: "8.9k", clicks: "964", ctr: "10.8%", thumbnail: "cpg", formats: [{ id: "pdf", label: "PDF" }, { id: "pptx", label: "PPTX" }] },
  { id: "screening-case", title: "Modernizing candidate experiences at scale", type: "Video case study", vertical: "High Tech", offering: "Digital IT Operations", stage: "Conversion", language: "English", region: "EMEA", webTag: "candidate experience", microservice: "Platform reliability", macroservice: "Managed operations", publishDate: "Jan 14, 2024", freshness: "Stale", descriptor: "a global background screening provider", campaign: "Always-on Operations", owner: "Demand Center · Lila Chen", why: "Matches the operations proof-point and shows measurable platform reliability outcomes.", views: "5.2k", clicks: "410", ctr: "7.9%", supersededBy: "screening-case-new", thumbnail: "tech", formats: [{ id: "mp4", label: "MP4" }, { id: "pdf", label: "PDF" }] },
  { id: "screening-case-new", title: "Building resilient digital operations for trust at scale", type: "Written case study", vertical: "High Tech", offering: "Digital IT Operations", stage: "Conversion", language: "English", region: "EMEA", webTag: "resilient operations", microservice: "Platform reliability", macroservice: "Managed operations", publishDate: "Aug 21, 2025", freshness: "Fresh", descriptor: "a global background screening provider", campaign: "Always-on Operations", owner: "Demand Center · Lila Chen", why: "Newer conversion proof replaces the retired operations case study.", views: "3.1k", clicks: "522", ctr: "16.8%", thumbnail: "tech", formats: [{ id: "pdf", label: "PDF" }, { id: "pptx", label: "PPTX" }] },
  { id: "industrial-es", title: "Connected field service: a practical roadmap", type: "One-pager", vertical: "Industrial", offering: "Cloud Services", stage: "Awareness", language: "Spanish", region: "Latin America", webTag: "field service", microservice: "Connected workforce", macroservice: "Cloud transformation", publishDate: "Sep 09, 2025", freshness: "Fresh", descriptor: "a renewable energy equipment manufacturer", campaign: "Industrial Cloud Momentum", owner: "Demand Center · Ana Torres", why: "Spanish, Industrial, and Cloud filters align with the requested audience.", views: "2.6k", clicks: "298", ctr: "11.4%", thumbnail: "industrial", formats: [{ id: "pdf", label: "PDF" }] },
  { id: "banking-event", title: "Trust by design: banking modernization", type: "Event invite", vertical: "Banking", offering: "Enterprise Platforms/SAP", stage: "Awareness", language: "English", region: "Global", webTag: "banking modernization", microservice: "Core platforms", macroservice: "Enterprise transformation", publishDate: "Nov 11, 2025", freshness: "Fresh", descriptor: "a regional financial institution", campaign: "Future of Trust", owner: "Demand Center · Jae Williams", why: "A current banking invite for platform leaders and modernization conversations.", views: "4.1k", clicks: "611", ctr: "14.9%", thumbnail: "banking", formats: [{ id: "pdf", label: "PDF" }, { id: "pptx", label: "PPTX" }] },
  { id: "healthcare-es", title: "Historias de atención conectada", type: "Testimonial video", vertical: "Healthcare", offering: "Digital Product Engineering", stage: "Consideration", language: "Spanish", region: "Latin America", webTag: "connected care", microservice: "Patient experience", macroservice: "Digital products", publishDate: "May 27, 2025", freshness: "Aging", descriptor: "a national healthcare network", campaign: "Connected Care", owner: "Demand Center · Sofia Gómez", why: "Spanish testimonial evidence for Healthcare product experience programs.", views: "1.9k", clicks: "260", ctr: "13.7%", thumbnail: "health", formats: [{ id: "mp4", label: "MP4" }, { id: "pdf", label: "PDF" }] },
  { id: "travel-lp", title: "Designing the next guest journey", type: "Industry landing page", vertical: "Travel", offering: "Digital Product Engineering", stage: "Conversion", language: "English", region: "Global", webTag: "guest journey", microservice: "Experience design", macroservice: "Digital products", publishDate: "Mar 03, 2025", freshness: "Aging", descriptor: "a global travel and hospitality group", campaign: "Travel Experience", owner: "Demand Center · Noor Patel", why: "Landing page supports Travel conversion with a clear product engineering narrative.", views: "15.8k", clicks: "2.1k", ctr: "13.3%", thumbnail: "travel", formats: [{ id: "pdf", label: "PDF" }, { id: "pptx", label: "PPTX" }] },
  { id: "manufacturing-sap", title: "From fragmented plants to one operating view", type: "Offering page", vertical: "Industrial", offering: "Enterprise Platforms/SAP", stage: "Consideration", language: "English", region: "Europe", webTag: "plant operations", microservice: "SAP S/4HANA", macroservice: "Enterprise platforms", publishDate: "Jul 12, 2025", freshness: "Fresh", descriptor: "a diversified manufacturing conglomerate", campaign: "Smart Industry", owner: "Demand Center · Daniel Kim", why: "Industrial platform story with a strong consideration-stage operating model.", views: "6.8k", clicks: "734", ctr: "10.8%", thumbnail: "industrial", formats: [{ id: "pdf", label: "PDF" }, { id: "pptx", label: "PPTX" }] },
];

export const verticals = [
  { id: "cpg", label: "CPG" }, { id: "retail", label: "Retail" }, { id: "travel", label: "Travel" },
  { id: "industrial", label: "Industrial" }, { id: "high-tech", label: "High Tech" }, { id: "banking", label: "Banking" }, { id: "healthcare", label: "Healthcare" },
];
export const offerings = [
  { id: "digital-product-engineering", label: "Digital Product Engineering" }, { id: "digital-it-operations", label: "Digital IT Operations" },
  { id: "data-ai", label: "Data & AI" }, { id: "cloud-services", label: "Cloud Services" }, { id: "enterprise-platforms-sap", label: "Enterprise Platforms/SAP" },
];
export const types = [
  { id: "landing-page", label: "Landing page" }, { id: "written-case-study", label: "Written case study" }, { id: "video-case-study", label: "Video case study" },
  { id: "offering-page", label: "Offering page" }, { id: "whitepaper", label: "Whitepaper" }, { id: "event-invite", label: "Event invite" },
  { id: "one-pager", label: "One-pager" }, { id: "social-card", label: "Social card" }, { id: "testimonial-video", label: "Testimonial video" }, { id: "industry-landing-page", label: "Industry landing page" },
];
export const stages: FunnelStage[] = ["Awareness", "Consideration", "Conversion"];
export const stageOptions = [
  { id: "consideration", label: "Consideration" as FunnelStage }, { id: "awareness", label: "Awareness" as FunnelStage }, { id: "conversion", label: "Conversion" as FunnelStage },
];
export const askPrompts = [
  { id: "cpg", label: "What do we have for a CPG executive audience?" },
  { id: "operations", label: "Show me every Digital IT Operations asset from the last six months?" },
  { id: "retail", label: "Do we have a case study with a Retail client on unified commerce?" },
  { id: "industrial", label: "What exists in Spanish for the Industrial vertical?" },
];
export const languageOptions = [{ id: "english", label: "English" }, { id: "spanish", label: "Spanish" }];
export const regionOptions = [
  { id: "global", label: "Global" }, { id: "north-america", label: "North America" }, { id: "latin-america", label: "Latin America" },
  { id: "europe", label: "Europe" }, { id: "emea", label: "EMEA" },
];
export const freshnessOptions = [{ id: "fresh", label: "Fresh" }, { id: "aging", label: "Aging" }, { id: "stale", label: "Stale" }];
export const clearanceOptions = [{ id: "approved", label: "Approved" }, { id: "internal-only", label: "Internal only" }];
