import React from "react";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  image: string;
  title: string;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group bg-black"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {/* Image container */}
      <div className="w-full  flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain group-hover:brightness-90 transition-all duration-300"
        />
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
       
      </motion.div>
    </motion.div>
  );
};

export default PortfolioCard;
