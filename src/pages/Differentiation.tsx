import React from "react";
import Header from "../../public/differentiation/Frame 394.png";
import Header1 from "../../public/differentiation/Frame 425.png";
import Header2 from "../../public/differentiation/Frame 426.png";
import Header3 from "../../public/differentiation/Frame 427.png";
import Header4 from "../../public/differentiation/Frame 398.png";
import BgImage from "../../public/differentiation/Group 237595.png";
import Navbar from "../components/common/Navbar";

const Differentiation: React.FC = () => {
  return (
    <section className="bg-black text-white">
      <div className="relative pt-2 z-10">
                     <Navbar />
                   </div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">

        <div className="pt-10 md:pt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
          <div className="flex-shrink-0">
            <p className="text-sm text-gray-400 mb-1 sm:mb-2">
              왜 비디오크루를 선택해야 할까요?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-snug">
              비디오크루만의 특별함
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-full md:max-w-3xl leading-relaxed">
            컨설턴트가 스토리를 입히고, 전문 디자이너와 촬영감독, PD가​ 1:1 맞춤 설계된 영상을 제공하며, 차별화된 스토리와 다양한 선택지를 제시합니다.​
          </p>
        </div>


        <div className="mt-6 sm:mt-8">
          <img
            src={Header}
            alt="Main Video"
            className="w-full rounded-lg object-cover"
          />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {[
            {
              title: <>예산을 초과하는​ 추가 비용이 <br /> 발생하진 않을까?​</>,
              desc: <>추가 비용이 발생하지 않으며,​ <br /> 처음부터 투명한 가격을 제시</>,
            },
            {
              title: <>기성 영상 템플릿에​ <br /> 내용을 끼워 맞추지는 않을까?​</>,
              desc: <>맞춤형 제작 방식으로,​고객사의 니즈를 100% <br /> 반영한​ 독창적인 영상만을 제공</>,
            },
            {
              title: <>진행 상황을​ <br /> 중간에 확인할 수 있을까?​</>,
              desc: <>주기적 보고서 제공으로,​ <br /> 프로젝트 진행 과정을​ 투명하게 공유</>,
            },
          ].map((box, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A0A] border border-gray-800 p-5 sm:p-6 rounded-lg"
            >
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 leading-snug">
                {box.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {box.desc}
              </p>
            </div>
          ))}
        </div>


        <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-16">
          {[
            {
              num: "01",
              title: "A/B 시안 제공",
              desc: "동일한 콘텐츠이라도 다양한 가능성을 고려하는 것이 중요합니다.​​디자인크루는 서로 다른 2가지 영상 시안을 제공하여 선택의 폭을 넓혀드립니다.​​ 샘플 파일을 통해 본 작업 전에 방향성을 명확히 확인할 수 있습니다.​",
              img: Header1,
            },
            {
              num: "02",
              title: "100% 투명한 정찰제",
              desc: "동일한 콘텐츠이라도 다양한 가능성을 고려하는 것이 중요합니다.​​ 디자인크루는 서로 다른 2가지 영상 시안을 제공하여 선택의 폭을 넓혀드립니다.​​ 샘플 파일을 통해 본 작업 전에 방향성을 명확히 확인할 수 있습니다.​",
              img: Header2,
            },
            {
              num: "03",
              title: "100% 고객사 맞춤형 제작",
              desc: "우리는 찍어내듯 만드는 틀에 박힌 영상 제작을 단호히 거부합니다. ​비디오크루의 모든 영상은 고객님의 고유한 브랜드 아이덴티티, 타겟 시청자의 특성, 전달하고자 하는 핵심 메시지에 맞춰 오직 하나뿐인 '오리지널 콘텐츠'로 탄생합니다.",
              img: Header3,
            },
            {
              num: "04",
              title: "결과에 대한 자신감",
              desc: "100% 고객 만족 책임 환불제​ 비디오크루는 제공하는 영상의 퀄리티와 고객 만족에 대해 업계 최고 수준의 자신감을 가지고 있습니다. ​만약 최종적으로 전달된 영상이 사전에 협의된 기획 의도 및 약속된 기준에서 현저히 벗어나 고객님께서 만족하지 못하실 경우,...",
              img: Header4,
            },
          ].map((step, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center`}
            >

              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative inline-block mb-3 sm:mb-4">
                  <img
                    src={BgImage}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-contain opacity-30 z-0"
                  />
                  <span className="relative z-10 text-[80px] sm:text-[120px] lg:text-[165px] font-bold text-white/20">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>


              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>


        <div className="mt-14 sm:mt-20 bg-gradient-to-r from-gray-800 via-black to-gray-800 p-6 sm:p-10 rounded-lg text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-snug">
            업계 최고 수준의 맞춤형 영상 콘텐츠
            <br /> 비디오크루와 함께하세요!
          </h3>
          <button className="mt-3 sm:mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors text-sm sm:text-base">
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
