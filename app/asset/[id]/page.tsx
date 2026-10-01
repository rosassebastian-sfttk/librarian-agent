import { notFound } from "next/navigation";
import { assets } from "../../lib/data";
import { Shell } from "../../components/shell";
import { DetailClient } from "../../components/detail-client";
export default async function AssetDetailPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const asset = assets.find((item) => item.id === id); if (!asset) notFound(); return <Shell><DetailClient asset={asset} /></Shell>; }
