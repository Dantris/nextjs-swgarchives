'use client';

import { motion } from 'framer-motion';

export default function GuideCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
            <p className="mt-2 text-gray-400 text-sm">{description}</p>
        </motion.div>
    );
}
