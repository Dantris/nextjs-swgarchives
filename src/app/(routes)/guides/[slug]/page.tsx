// src/app/(routes)/guides/[slug]/page.tsx
import { getGuideBySlug } from "@/lib/supabase/fetch-guide";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const guide = await getGuideBySlug(params.slug);
    return {
        title: `${guide?.title} | SWG Archives`,
        description: `Read: ${guide?.title}`,
    };
}

export default async function GuidePage({ params }: Props) {
    const guide = await getGuideBySlug(params.slug);
    if (!guide) return notFound();

    return (
        <article className="prose prose-invert max-w-3xl mx-auto py-10 px-4">
            <h1>{guide.title}</h1>
            <div className="text-sm text-gray-400 mb-6">
                Written by {guide.author || "Unknown"} •{" "}
                {new Date(guide.updated_at).toLocaleDateString()}
            </div>
            <div
                className="guide-content"
                dangerouslySetInnerHTML={{ __html: guide.content }}
            />
        </article>
    );
}
