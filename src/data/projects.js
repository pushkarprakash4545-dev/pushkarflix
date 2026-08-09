import travel from "../assets/Projects/travel.png";
import whatsapp from "../assets/Projects/whatsapp.png";
import music from "../assets/Projects/music.png";

import spam from "../assets/Projects/spam.png";
import qr from "../assets/Projects/qr.png";
import pdf from "../assets/Projects/pdf.png";

import bmi from "../assets/Projects/bmi.png";
import coin from "../assets/Projects/coin.png";
import guess from "../assets/Projects/guess.png";

const projects = [
  {
    category: "⚛️ React Applications",
    items: [
      {
        id: 1,
        title: "Travelling App",
        tech: "React",
        image: travel,
      },
      {
        id: 2,
        title: "WhatsApp Clone",
        tech: "React",
        image: whatsapp,
      },
      {
        id: 3,
        title: "Music Player",
        tech: "React",
        image: music,
      },
    ],
  },

  {
    category: "🐍 Python Solutions",
    items: [
      {
        id: 4,
        title: "Message Spam Detection",
        tech: "Python",
        image: spam,
      },
      {
        id: 5,
        title: "QR Code Generator",
        tech: "Python",
        image: qr,
      },
      {
        id: 6,
        title: "PDF to CSV Converter",
        tech: "Python",
        image: pdf,
      },
    ],
  },

  {
    category: "🟨 JavaScript Projects",
    items: [
      {
        id: 7,
        title: "BMI Calculator",
        tech: "JavaScript",
        image: bmi,
      },
      {
        id: 8,
        title: "Coin Toss Game",
        tech: "JavaScript",
        image: coin,
      },
      {
        id: 9,
        title: "Number Guess Game",
        tech: "JavaScript",
        image: guess,
      },
    ],
  },
];

export default projects;