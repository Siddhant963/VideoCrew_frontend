import type React from "react";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import Navbar from "../components/common/Navbar";

const Portfolio: React.FC = () => {
  return (
    <>
      <section className="bg-black min-h-screen text-white">
        <div className="relative pt-2 z-10">
               <Navbar />
             </div>
       
        <PortfolioGrid />
      </section>
    </>
  );
};

export default Portfolio;
