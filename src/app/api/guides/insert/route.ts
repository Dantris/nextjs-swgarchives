import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
    const body = await req.json();
    const { title, slug, content, tags } = body;

    if (!title || !slug || !content) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const { data, error } = await supabase
        .from('Guide')
        .insert([
            {
                title,
                slug,
                content,
                tags,
            },
        ])
        .select('slug')
        .single();

    if (error) {
        console.error('[GUIDE INSERT ERROR]', error.message);
        return NextResponse.json({ error: 'Failed to insert guide' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
}
