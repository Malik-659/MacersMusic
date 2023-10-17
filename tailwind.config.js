/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'lead': "url('https://avatars.mds.yandex.net/i?id=b67abe3f3296e104cfbb4aeecc1334fb23226d68-5229005-images-thumbs&n=13')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
