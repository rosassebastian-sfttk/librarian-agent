import Link from "next/link";
import { Suspense } from "react";
import { assets } from "../lib/data";
import { Shell, Icon } from "../components/shell";
import { AssetCard } from "../components/assets";

function AnswerContent() { return <Shell active="ask"><div className="page-header"><div><p className="kicker">Librarian answer</p><h1 className="page-title">Here&apos;s what we found</h1><p className="page-subtitle">12 assets matched your question. Results include direct files from the internal inventory, ranked by relevance and freshness.</p></div><Link className="button button-secondary" href="/">New question <Icon name="spark" /></Link></div><div className="summary"><div className="summary-icon"><Icon name="spark" /></div><div><strong>There is a strong starting set for a CPG executive audience.</strong><p>We found executive-level thought leadership, a current Data &amp; AI whitepaper, and related proof from Retail. There is no Spanish conversion asset in this exact combination yet.</p></div></div><div className="results-toolbar"><h2>Matching assets</h2><span>Showing 6 of 12 · sorted by relevance</span></div><div className="asset-grid">{assets.slice(0, 6).map((asset) => <AssetCard key={asset.id} asset={asset} />)}</div></Shell>; }
export default function AnswerPage() { return <Suspense fallback={<Shell><p>Loading answer…</p></Shell>}><AnswerContent /></Suspense>; }
