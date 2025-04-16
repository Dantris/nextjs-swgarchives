import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        color: '#e5e7eb', // Light gray
                        a: { color: '#3b82f6' },
                    },
                },
            },
            fontFamily: {
                sans: ['var(--font-orbitron)', 'sans-serif'],
            },
        },
    },
    plugins: [typography],
};

export default config;
