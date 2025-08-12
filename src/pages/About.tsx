import React from "react";
import Navbar from "../components/common/Navbar";
import aboutPage from "../assets/Frame 422.webp";
import about1 from "../../public/images/Image (3).png";
import about2 from "../../public/images/Image (4).png";
import clientImage from "../../public/about/Frame 430.png";
import image1 from "../../public/about/image 4.png";
import image2 from "../../public/about/image 5.png";
import image3 from "../../public/about/image 6.png";
import placeholder1 from "../../public/about/Image/placeholder-1.png";
import placeholder2 from "../../public/about/Image/placeholder-2.png";
import placeholder3 from "../../public/about/Image/placeholder.png";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-black text-white  font-sans">
      <div className="relative z-10 pt-2">
        <Navbar />
      </div>

      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left mb-6">
            Who we are, Video Crew
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            <h1 className="text-xl text-center sm:text-3xl md:text-4xl lg:text-[45px] font-bold leading-snug mb-6">
              스토리로 말하는 영상 콘텐츠,
              <br />
              시선을 사로잡는 영상,
              <br />
              더 이상 고민하지 마세요!
            </h1>

            <div className="text-gray-400 text-sm sm:text-base leading-relaxed text-center">
              <p className="mb-4">
                우리는 영상이 단순한 기록을 넘어, 감동을 전달하고, 생각을 움직이며, 변화를 이끌어내는 가장 강력한 매체라고 믿습니다. 비디오크루는 모든 프로젝트에 진정성을 담아, 고객의 메시지가 세상에 가장 효과적으로 전달될 수 있도록 창의적인 영상을 연구하고 실현합니다.
              </p>
              <p className="text-[#6b6b6a] text-xs sm:text-sm md:text-base">
                "모든 프레임에 가치를 담아" 고객과 함께 성장하는 파트너가 되겠습니다.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-16">
            <div className="relative w-full h-[450px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <img src={aboutPage} alt="Video Production" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50"></div>

              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
                <p className="text-xs sm:text-sm text-white/70">회사소개</p>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white/80">Video Crew,</h2>
                <p className="text-xs sm:text-base text-white/70">Video Consulting Firm</p>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-16">
            <img className="w-full h-auto object-contain" src={clientImage} alt="Clients" />
          </div>
        </div>
      </section>

      <img className="w-full h-auto object-cover" src={about1} alt="Divider" />

      <section className="py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3">Core Value</h2>
      <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
        버디오크루가 지원하는 액살가치는 고객혼실, 문제해결, 손쉬움으로 현상 전공성 있게 고객을 대하는 것을 목표로 합니다.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {[
        { img: image1, title: "Customer-Centric", desc: "버디오크루가 지원하는 것은 고객의 성공입니다." },
        { img: image2, title: "Problem Solving", desc: "버디오크루는 디자인 이슈, 채업 컨널링 등 고객의 문제에 달용합니다." },
        { img: image3, title: "Candidates", desc: "업무를 수행함께 얻어서 손격하고 전공성 있게 판단됩니다." }
      ].map((val, idx) => (
        <div
          key={idx}
          className="relative aspect-square sm:aspect-[4/5]"
        >
          <img
            src={val.img}
            alt={val.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">{val.title}</h3>
            <p className="text-[#6b6b6a] text-xs sm:text-sm">{val.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <img className="w-full h-auto object-cover" src={about2} alt="Divider" />

      <section className="py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3">Work Culture</h2>
      <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
        바디오그루의 업무 문화는 애푸링 퍼포먼스, 효율성, 그리고 자녀 공유를 기반으로 합니다.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { img: placeholder1, title: "'Agile' Performance", sub: "결과동상의 유연한 과업 수행", desc: "바디오그루는 최적 중심으로 유연하고 싶문게 다중합니다." },
        { img: placeholder2, title: "Effectiveness", sub: "정부보다는 효과에 있음", desc: "바디오그루는 생산에서 돌아가보다는 상용성과 성격, 효과에 관중합니다." },
        { img: placeholder3, title: "Knowledge Sharing", sub: "콘텐츠의 완전", desc: "적사역소에 향상 서비스를 제공하는 바디오 컴퓨터로부터 역할을 수행합니다.", full: true }
      ].map((val, idx) => (
        <div
          key={idx}
          className={`relative ${
            val.full
              ? "sm:col-span-2 aspect-square sm:aspect-[2/1]"
              : "aspect-square sm:aspect-[3/2]"
          }`}
        >
          <img
            src={val.img}
            alt={val.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xs sm:text-lg font-bold text-[#6b6b6a]">{val.sub}</h3>
            <h4 className="text-sm sm:text-xl font-semibold text-white">{val.title}</h4>
            <p className="text-[#6b6b6a] text-xs sm:text-sm mt-2">{val.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutPage;