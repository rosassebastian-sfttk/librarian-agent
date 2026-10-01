"use client";
import { useState } from "react";
import Link from "next/link";
import { assets, stageOptions, Asset } from "../lib/data";
import { Shell, Icon } from "../components/shell";
import { AssetCard } from "../components/assets";

function StageCount({ stage, records }: { stage: { id: string; label: string }; records: Asset[] }) {
  return <>{records.map((asset) => asset.stage === stage.label ? <span key={asset.id} className="sr-only">{asset.title}</span> : null)}<span>{records.filter((asset) => asset.stage === stage.label).length} matches</span></>;
}

function FunnelStage({ stage }: { stage: { id: string; label: string } }) {
  const stageAssets = assets.filter((asset) => asset.stage === stage.label).slice(0, 2);
  return <section className="funnel-column"><div className="funnel-header"><h2>{stage.label}</h2><StageCount stage={stage} records={assets} /></div>{stage.label === "Conversion" && <div className="gap-card"><div className="gap-icon">!</div><h3>No conversion asset exists for this offering in Spanish</h3><p>We found English proof, but no Spanish conversion asset for Digital IT Operations. Request an adaptation from the closest current source.</p></div>}{stageAssets.map((asset) => <AssetCard key={asset.id} asset={asset} compact />)}</section>;
}

export default function CampaignPage() {
  const [name, setName] = useState("Connected Operations in Spanish");
  const [assembled, setAssembled] = useState(false);
  return <Shell active="campaign"><div className="page-header"><div><p className="kicker">Campaign assembly</p><h1 className="page-title">Build a campaign from what does exist</h1><p className="page-subtitle">Name a campaign and let Librarian map a practical asset set across the funnel. Gaps stay visible so teams can plan honestly.</p></div></div><div className="campaign-input"><input aria-label="Campaign name" value={name} onChange={(e) => setName(e.target.value)} /><button className="button button-primary" onClick={() => setAssembled(true)}>{assembled ? "Updated set" : "Assemble campaign"} <Icon name="spark" /></button><Link className="button button-secondary" href="/library"><Icon name="filter" /> Browse inventory</Link></div><div className="summary"><div className="summary-icon"><Icon name="spark" /></div><div>{assembled ? <strong>Asset set refreshed for {name}.</strong> : <strong>Suggested set for Connected Operations in Spanish. {name}.</strong>}<p>Coverage is strongest in awareness and consideration. One conversion gap needs a Demand Center request.</p></div></div><div className="funnel-grid">{stageOptions.map((stage) => <FunnelStage key={stage.id} stage={stage} />)}</div></Shell>;
}
