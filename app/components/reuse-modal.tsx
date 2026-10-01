"use client";
import { useState } from "react";
import { Asset, assets } from "../lib/data";
import { Icon } from "./shell";

function Prefill({ asset }: { asset: Asset }) {
  return <>{assets.map((item) => item.id === asset.id ? <div className="prefill" key={item.id}><strong>{item.title}</strong>80% of this brief is ready from the source asset · {item.vertical} · {item.offering} · {item.owner}</div> : null)}</>;
}

export function ReuseModal({ asset, onClose }: { asset: Asset; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  return <div className="modal-backdrop" role="dialog" aria-modal="true"><div className="modal"><div className="modal-header"><div><p className="kicker">Demand Center request</p><h2>Request a reuse or adaptation</h2></div><button className="close" onClick={onClose} aria-label="Close">×</button></div><Prefill asset={asset}/>{asset.freshness === "Stale" && <div className="gap-card" style={{minHeight:0,marginBottom:18,padding:13}}><h3>Check the newer version first</h3><p>This asset is stale and has been superseded. Consider starting from the current replacement before requesting an adaptation.</p></div>}<div className="form-grid"><div className="form-field"><label htmlFor="language">Target language</label><select id="language" defaultValue="Spanish"><option>Spanish</option><option>English</option></select></div><div className="form-field"><label htmlFor="region">Target region</label><select id="region" defaultValue="Latin America"><option>Latin America</option><option>North America</option><option>Europe</option><option>Global</option></select></div><div className="form-field full"><label htmlFor="notes">Adaptation notes</label><textarea id="notes" defaultValue={`Localize ${asset.title} for a Spanish-speaking audience. Preserve the anonymized client descriptor and the ${asset.offering} proof point.`} /></div></div>{sent && <div className="toast">Request submitted to the Demand Center queue. Reference: REUSE-2841.</div>}<div className="modal-footer"><button className="button button-secondary" onClick={onClose}>Cancel</button><button className="button button-primary" onClick={() => setSent(true)}>{sent ? "Submitted" : "Submit request"} <Icon name="arrow" /></button></div></div></div>;
}
