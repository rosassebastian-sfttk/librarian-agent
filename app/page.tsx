"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { askPrompts } from "./lib/data";
import { Shell, Icon } from "./components/shell";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/answer?q=${encodeURIComponent(query || askPrompts[0].label)}`);
  };
  return <Shell active="ask"><section className="search-panel"><p className="kicker">Your content librarian</p><p className="page-subtitle">Ask in plain language. Get the actual asset, not another search result. Librarian searches across Softtek&apos;s global marketing inventory.</p><h1 className="page-title">What content already exists?</h1><form className="prompt-form" onSubmit={submit}><Icon name="spark" /><input aria-label="Ask the librarian" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask about content..." /><button className="button button-primary" type="submit">Ask <Icon name="arrow" /></button></form><p className="example-label">Try a question</p><div className="examples">{askPrompts.map((prompt) => <button className="example" key={prompt.id} onClick={() => router.push(`/answer?q=${encodeURIComponent(prompt.label)}`)}><span>{prompt.label}</span><Icon name="arrow" /></button>)}</div><div className="honesty"><Icon name="spark" /><div><strong>Search internal context, export public-safe.</strong>The librarian can match internal client names, but only anonymized descriptors appear in cards, previews, and downloads.</div></div></section></Shell>;
}
