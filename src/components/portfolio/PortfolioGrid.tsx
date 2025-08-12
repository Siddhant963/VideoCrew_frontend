import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import VideoModal from "./VideoModal";
import Navbar from "../common/Navbar";
import leftBg from "../../assets/left.png";
import rightBg from "../../assets/right.png";

// ✅ Import images directly so bundler recognizes them
import logisticImg from "../../assets/LOGISTC PROMO.png";
import channelImg from "../../assets/CHANNELL.png";
import pizzaImg from "../../assets/PIZZAA.png";
import nutellaImg from "../../assets/Nutella.png";
import hublotImg from "../../assets/HUBOLT.png";
import vdo from "../../assets/vdo.mp4"

const portfolioItems = [
  {
    title: "Logistics Promo",
    image: logisticImg,
    videoUrl:vdo,
  },
  {
    title: "Chanel Promotion",
    image: channelImg, 
    videoUrl:vdo,
   
  },
  {
    title: "Pizza Company",
    image: pizzaImg,
      videoUrl:vdo,
  },
  {
    title: "Nutella Recipe",
    image: nutellaImg,
      videoUrl:vdo,
  },
  {
    title: "Hublot Watch",
    image: hublotImg,
    videoUrl:vdo,
  },
];

const PortfolioGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto ">
        {/* Background images */}
      <img
        src={leftBg}
        alt=""
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] pointer-events-none select-none z-0"
      />
      <img
        src={rightBg}
        alt=""
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] pointer-events-none select-none z-0"
      />


      {/* Heading */}
      <div className="text-center mt-20 mb-8 relative z-10">
        <h2 className="sm:text-[12px] lg:text-[16px] uppercase text-white font-semibold tracking-widest">
          Portfolio
        </h2>
        <h1 className="text-[30px] sm:text-[40px] md:text-[64px] leading-tight font-semibold text-white font-montserrat mt-4">
          We Create Beautiful,
          <div className="text-[#2448FF]">Practical Works</div>
        </h1>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <button className="w-full sm:w-auto px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition text-[16px]">
          광고 · 홍보 영상
        </button>
        <button className="w-full sm:w-auto px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition text-[16px]">
          이러닝 영상
        </button>
        <button className="w-full sm:w-auto px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition text-[16px]">
          기업 행사 영상
        </button>
      </div>

    {/* Portfolio Grid */}
<div className="mt-10  h-auto grid grid-cols-1 md:grid-cols-1 gap-6">
  {portfolioItems.map((item, idx) => (
    <PortfolioCard
      key={idx}
      image={item.image}
      title={item.title}
      onClick={() => openModal(item.videoUrl)}
    />
  ))}
</div>
      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        videoUrl={selectedVideo}
        onClose={() => setIsModalOpen(false)}
      />

     <button
  className="
  mt-12
    bg-[#2448FF] 
    text-[#FFFFFF] 
    font-semibold 
    rounded-full 
    flex 
    items-center 
    justify-center 
    w-[140px] h-[40px]         /* default size */
    sm:w-[160px] sm:h-[44px]   /* small+ screens */
    lg:w-[222px] lg:h-[46px]   /* large screens */
    px-6 py-2
    transition-all 
    duration-300 
    hover:bg-[#1a34cc]
    mx-auto
  "
>
  Load More
</button>

    </div>
  );
};

export default PortfolioGrid;
