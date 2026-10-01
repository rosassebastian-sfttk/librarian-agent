"use client";
import { useMemo, useState } from "react";
import { assets, clearanceOptions, freshnessOptions, languageOptions, offerings, regionOptions, stageOptions, types, verticals } from "../lib/data";
import { Shell, Icon } from "../components/shell";
import { AssetCard } from "../components/assets";

type FilterOption = { id: string; label: string };
type Filter = { id: string; label: string; values: FilterOption[]; allLabel: string };
const filters: Filter[] = [
  { id: "vertical", label: "Vertical", values: verticals, allLabel: "All verticals" },
  { id: "offering", label: "Offering", values: offerings, allLabel: "All offerings" },
  { id: "type", label: "Asset type", values: types, allLabel: "All asset types" },
  { id: "stage", label: "Funnel stage", values: stageOptions, allLabel: "All funnel stages" },
  { id: "language", label: "Language", values: languageOptions, allLabel: "All languages" },
  { id: "region", label: "Region", values: regionOptions, allLabel: "All regions" },
  { id: "freshness", label: "Freshness", values: freshnessOptions, allLabel: "All freshness states" },
  { id: "clearance", label: "Clearance status", values: clearanceOptions, allLabel: "All clearance statuses" },
];
function FilterOption({ value }: { value: FilterOption }) { return <option value={value.label}>{value.label}</option>; }
function FilterOptions({ values }: { values: FilterOption[] }) { return <>{values.map((value) => <FilterOption key={value.id} value={value} />)}</>; }
function FilterSelect({ filter, selected, onChange }: { filter: Filter; selected: string; onChange: (value: string) => void }) { return <div className="filter-group"><label htmlFor={filter.id}>{filter.label}</label><select id={filter.id} value={selected} onChange={(event) => onChange(event.target.value)}><option value="">{filter.allLabel}</option><FilterOptions values={filter.values} /></select></div>; }
function ResultCount({ shown, total }: { shown: number; total: number }) { return <div className="filter-count">{shown} of {total} assets shown</div>; }

export default function LibraryPage() {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const filtered = useMemo(() => assets.filter((asset) => Object.entries(selected).every(([key, value]) => {
    if (!value) return true;
    if (key === "vertical") return asset.vertical === value;
    if (key === "offering") return asset.offering === value;
    if (key === "type") return asset.type === value;
    if (key === "stage") return asset.stage === value;
    if (key === "language") return asset.language === value;
    if (key === "region") return asset.region === value;
    if (key === "freshness") return asset.freshness === value;
    return true;
  })), [selected]);
  return <Shell active="library"><div className="page-header"><div><p className="kicker">Library browse</p><h1 className="page-title">Explore the full inventory</h1><p className="page-subtitle">Filter across the same taxonomy the Demand Center uses to publish, localize, and retire content.</p></div><ResultCount shown={filtered.length} total={assets.length} /></div><div className="layout-two"><aside className="filter-panel"><h2>Filter inventory</h2>{filters.map((filter) => <FilterSelect key={filter.id} filter={filter} selected={selected[filter.id] || ""} onChange={(value) => setSelected((current) => ({ ...current, [filter.id]: value }))} />)}<button className="button button-secondary" style={{marginTop:15,width:"100%",justifyContent:"center"}} onClick={() => setSelected({})}>Clear filters</button></aside><section><div className="results-toolbar"><h2>Available assets</h2><span>Click a card to inspect public copy and internal context</span></div>{filtered.length ? <div className="asset-grid">{filtered.map((asset) => <AssetCard key={asset.id} asset={asset} />)}</div> : <div className="gap-card"><div className="gap-icon">—</div><h3>No exact matches in the inventory</h3><p>Try removing a filter or ask Librarian to suggest the closest available assets. The absence is real: we do not have a published asset for every taxonomy combination.</p><button className="button button-secondary" style={{marginTop:18,width:"max-content"}} onClick={() => setSelected({})}><Icon name="filter" /> Show closest available</button></div>}</section></div></Shell>;
}
