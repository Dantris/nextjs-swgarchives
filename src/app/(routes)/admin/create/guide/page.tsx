'use client';

import GuideEditor from '@/components/admin/GuideEditor';

export default function CreateGuidePage() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Create New Guide</h1>
                <GuideEditor />
            </div>
        </div>
    );
}
