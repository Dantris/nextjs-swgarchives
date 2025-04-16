'use client';

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function GuideEditor() {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [message, setMessage] = useState('');

    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Write your guide here...</p>',
    });

    const handleSubmit = async () => {
        const content = editor?.getHTML();
        const res = await fetch('/api/insert-guide', {
            method: 'POST',
            body: JSON.stringify({ title, tags, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            setMessage('✅ Guide saved!');
            editor?.commands.setContent('<p>Write your guide here...</p>');
            setTitle('');
            setTags('');
        } else {
            setMessage('❌ Failed to save guide');
        }
    };

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h2 className="text-xl font-bold mb-4">Create New Guide</h2>
            {message && <p className="mb-4 text-sm text-green-400">{message}</p>}

            <input
                className="w-full mb-4 p-2 border rounded bg-gray-900 text-white"
                placeholder="Guide Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                className="w-full mb-4 p-2 border rounded bg-gray-900 text-white"
                placeholder="Tags (comma separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
            />

            <div className="prose prose-invert bg-white text-black p-4 rounded mb-4">
                <EditorContent editor={editor} />
            </div>

            <button
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-white"
                onClick={handleSubmit}
            >
                Save Guide
            </button>
        </div>
    );
}
