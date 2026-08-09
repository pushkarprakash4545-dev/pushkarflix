import travel from "../assets/projects/travel.png";
import whatsapp from "../assets/projects/whatsapp.png";
import music from "../assets/projects/music.png";

import spam from "../assets/projects/spam.png";
import qr from "../assets/projects/qr.png";
import pdf from "../assets/projects/pdf.png";

import bmi from "../assets/projects/bmi.png";
import coin from "../assets/projects/coin.png";
import guess from "../assets/projects/guess.png";

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