import Link from "next/link";
import Image from "next/image";

export function Mark() {
  return <Image className="softtek-logo" src="/assets/softtek-logo.png" alt="Softtek" width={76} height={40} priority />;
}

export function Shell({ children, active = "ask" }: { children: React.ReactNode; active?: string }) {
  return <div className="app-shell"><header className="topbar"><Link href="/" className="wordmark"><Mark /></Link><div className="workspace">Marketing content intelligence <span className="workspace-dot" /></div><nav aria-label="Main navigation"><Link className={active === "ask" ? "active" : ""} href="/">Ask</Link><Link className={active === "library" ? "active" : ""} href="/library">Library</Link><Link className={active === "campaign" ? "active" : ""} href="/campaign">Campaign assembly</Link></nav><div className="top-actions"><button className="icon-button" aria-label="Help">?</button><div className="avatar">SR</div></div></header><main className="content">{children}</main></div>;
}

export function Icon({ name }: { name: "search" | "arrow" | "spark" | "filter" | "download" | "lock" | "back" | "external" }) {
  const paths: Record<string, string> = { search: "M11 19a8 8 0 1 1 5.65-2.35L22 22", arrow: "M5 12h14m-6-6 6 6-6 6", spark: "M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m5.2 5.2 2.8 2.8m0-10.8-2.8 2.8m-5.2 5.2-2.8 2.8", filter: "M4 6h16M7 12h10m-7 6h4", download: "M12 3v12m0 0 4-4m-4 4-4-4M4 21h16", lock: "M7 11V8a5 5 0 0 1 10 0v3m-11 0h12v9H6z", back: "M19 12H5m6-6-6 6 6 6", external: "M14 5h5v5m0-5-9 9M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" };
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>;
}
