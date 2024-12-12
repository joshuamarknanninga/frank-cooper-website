// frontend/src/components/Cards.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaPodcast, FaChalkboardTeacher, FaBlog, FaShoppingCart, FaUser } from 'react-icons/fa';

const cardsData = [
  { title: 'About', icon: <FaUser size={40} />, link: '/about' },
  { title: 'Podcast', icon: <FaPodcast size={40} />, link: '/podcast' },
  { title: 'Books', icon: <FaBook size={40} />, link: '/books' },
  { title: 'Classes', icon: <FaChalkboardTeacher size={40} />, link: '/classes' },
  { title: 'Blog', icon: <FaBlog size={40} />, link: '/blog' },
  { title: 'Shop', icon: <FaShoppingCart size={40} />, link: '/shop' },
];

const Cards = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Link to={card.link} key={index}>
            <div
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:animate-fadeIn hover:animate-scaleUp animate-none"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {card.icon}
              <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cards;

