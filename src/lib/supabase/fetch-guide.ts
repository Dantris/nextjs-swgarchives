// src/lib/supabase/fetch-guide.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getGuideBySlug(slug: string) {
    const { data, error } = await supabase
        .from('Guide')
        .select('id, title, slug, content, tags, created_at, updated_at, author')
        .eq('slug', slug)
        .single();

    if (error) throw new Error("Failed to fetch guide");

    return data;
}
