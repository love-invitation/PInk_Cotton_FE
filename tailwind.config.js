/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './Component/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'main-100': 'rgba(249, 130, 132, 1)', // 'main' 색상의 밝은 버전
                'main-200': 'rgba(255, 178, 178, 1)', // 'main' 색상의 더 밝은 버전
                'text-base': 'rgba(66, 66, 66, 1)', // 기본 텍스트 색상
                'gray-base': 'rgba(133, 133, 133, 1)', // 기본 회색
                'white-base': 'rgba(255, 255, 255, 1)', // 기본 흰색
                'green-base': 'rgba(0, 199, 60, 1)', // 기본 녹색
                'yellow-base': 'rgba(254, 229, 0, 1)', // 기본 노란색
            },
            size: {
                extraSmall: '0.5rem',
                small: '1rem',
                medium: '1.5rem',
                large: '2rem',
                extraLarge: '2.5rem',
                doubleLarge: '3rem',
                full: '100%',
                half: '50%',
                none: '0%',
            },
            weight: {
                regular: 400,
                medium: 500,
                semiBold: 600,
                bold: 700,
                extraBold: 800,
                black: 900,
            },
            device: {
                mobile: `(max-width: 480px)`,
                tablet: `(max-width: 768px)`,
                laptop: `(max-width: 1024px)`,
            },
        },
    },
    plugins: [],
};
