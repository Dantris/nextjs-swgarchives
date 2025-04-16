// src/lib/supabase/insert-guide.ts
import { createServerClient } from "@/lib/supabase/server";

export async function insertGuide(guide: {
    title: string;
    slug: string;
    content: string;
    author?: string;
    tags?: string[];
}) {
    const supabase = createServerClient();

    const { error } = await supabase.from("Guide").insert([{
        ...guide,
    }]);

    if (error) throw new Error("Failed to insert guide");
}
