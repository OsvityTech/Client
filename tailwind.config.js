/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all files
    theme: {
      extend: {
        colors: {
          mycustomborder: "#002B6B", // ✅ No hyphens, all lowercase
        },
      },
    },
    plugins: [],
  };
  