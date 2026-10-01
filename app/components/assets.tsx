import Link from "next/link";
import { Asset, assets } from "../lib/data";
import { Icon } from "./shell";

export function FreshnessBadge({ status }: { status: Asset["freshness"] }) { return <span className={`badge freshness-${status.toLowerCase()}`}><span className="status-dot" />{status}</span>; }

function thumbClass(asset: Asset) { return `thumb thumb-${asset.thumbnail}`; }

function AssetCardContent({ asset, compact }: { asset: Asset; compact: boolean }) {
  return <article className={`asset-card ${compact ? "compact" : ""}`}><div className="asset-link"><Link href={`/asset/${asset.id}`} className="thumb-link"><div className={thumbClass(asset)}><span className="thumb-label">{asset.vertical}</span><span className="thumb-icon">{asset.type === "Video case study" || asset.type === "Testimonial video" ? "▶" : "↗"}</span></div></Link><div className="asset-body"><div className="card-top"><span className="eyebrow">{asset.type}</span><FreshnessBadge status={asset.freshness} /></div><h3><Link href={`/asset/${asset.id}`}>{asset.title}</Link></h3><p className="descriptor">{asset.descriptor}</p><div className="tag-row"><span>{asset.vertical}</span><span>{asset.offering}</span><span>{asset.language}</span></div><div className="metric-row"><span><strong>{asset.views}</strong> views</span><span><strong>{asset.clicks}</strong> clicks</span><span><strong>{asset.ctr}</strong> CTR</span></div><p className="why"><span>Why matched</span> {asset.why}</p>{asset.supersededBy && <Link className="superseded" href={`/asset/${asset.supersededBy}`}>Superseded by a newer version <Icon name="arrow" /></Link>}</div></div></article>;
}

export function AssetCard({ asset, compact = false }: { asset: Asset; compact?: boolean }) {
  return <>{assets.map((item) => item.id === asset.id ? <AssetCardContent key={item.id} asset={item} compact={compact} /> : null)}</>;
}

export function Tag({ label, value }: { label: string; value: string }) { return <div className="taxonomy-tag"><span>{label}</span><strong>{value}</strong></div>; }
