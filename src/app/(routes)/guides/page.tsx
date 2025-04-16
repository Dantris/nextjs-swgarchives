'use client';

import { useState } from "react";
import GuideCard from "@/components/content/GuideCard";

const dummyGuides = [
    { title: "💫 Becoming a Jedi", description: "Steps to unlock the Force in SWG." },
    { title: "⚔️ Galactic Civil War", description: "Understand the Rebel vs Empire conflict." },
    { title: "🛰️ Starship Commands", description: "Your first steps in space combat." },
    { title: "🏹 Creature Handler 101", description: "How to tame wild beasts across the galaxy." },
];

export default function GuidesPage() {
    const [search, setSearch] = useState("");

    const filteredGuides = dummyGuides.filter((guide) =>
        guide.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section>
            <h1 className="text-3xl font-bold mb-6 text-blue-400">📚 Jedi Archives: Guides</h1>

            <input
                type="text"
                placeholder="Search the Archives..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full mb-8 px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />

            <div className="grid gap-6 sm:grid-cols-2">
                {filteredGuides.length > 0 ? (
                    filteredGuides.map((guide, idx) => (
                        <GuideCard key={idx} title={guide.title} description={guide.description} />
                    ))
                ) : (
                    <p className="text-gray-500">No guides found for that query.</p>
                )}
            </div>
        </section>
    );
}
