/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luynes-red': '#BE0000',
        'luynes-red-hover': '#990000',
        'luynes-red-light': '#FF3333',
        'luynes-red-soft': 'rgba(190, 0, 0, 0.1)',
        'luynes-dark': '#0a0a0a',
        'luynes-slate-50': '#f8fafc',
        'luynes-slate-100': '#f1f5f9',
        'luynes-slate-200': '#e2e8f0',
        'luynes-slate-300': '#cbd5e1',
        'luynes-slate-400': '#94a3b8',
        'luynes-slate-500': '#64748b',
        'luynes-slate-600': '#475569',
        'luynes-slate-700': '#334155',
        'luynes-slate-800': '#1e293b',
        'luynes-slate-900': '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
