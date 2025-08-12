import React from 'react';
import bannerImg from "../../../public/images/Banner_Image.png";
import Img1 from "../../../public/images/image 3.png";
import Img2 from "../../../public/images/image 2.png";
import Img3 from "../../../public/images/image 1.png";

export const HeroSection: React.FC = () => {
  return (
    <>

      <section className="relative">
        <div
          className="h-[480px] sm:h-[560px] md:h-[640px] xl:h-[720px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
 
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />


          <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 h-full flex items-end md:items-center">
            <div className="max-w-3xl pb-8 md:pb-0">
              <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 text-center">
                “이번엔 정말 제대로 된 연출을 하고 싶다... 혹시 이런 마음으로 여기까지 오셨나요? 축하드립니다!”
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center">
                비디오크루가 정답입니다!
              </h1>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-black text-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-[#8c8c8c] md:text-xl text-center text-lg mb-3 ">비디오크루의 차별점</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                영상 제작, <br /> 어떻게 하고 계신가요?
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg  max-w-3xl text-center text-[#8c8c8c]">
              비디오크루는 단순한 영상 제작을 넘어, 철저한 스토리보드와 독창적인 시각을 통한
              차별화된 콘텐츠를 제공합니다. 영상의 퀄리티를 높이는 전문적인 접근 방식으로
              프로젝트의 완성도를 높입니다.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">

            <div className="relative h-64 md:h-72 overflow-hidden">
              <img
                src={Img1}
                alt="Creative Solutions"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-white">
                  Creative Solutions
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  틀에 박힌 영상이 아닌, <br /> 메시지에 최적화된 독창적인 <br /> 아이디어를 제시합니다.
                </p>
              </div>
            </div>


            <div className="relative h-64 md:h-72 rounded-lg overflow-hidden">
              <img
                src={Img2}
                alt="Professional Quality"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-white">
                  Professional Quality
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  대기업과 협업중인 전문 컨설턴트들이 기획하며, <br />
                  최신 장비와 기술력을 바탕으로 모든 프로젝트에 <br />
                  최상의 퀄리티를 보장합니다.
                </p>
              </div>
            </div>


            <div className="relative h-64 md:h-72 rounded-lg overflow-hidden">
              <img
                src={Img3}
                alt="All-in-One Service"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-white">
                  All-in-One Service
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  복잡한 영상 제작 과정, 비디오크루에서는 <br />
                  기획부터 최종 납품까지 원스톱으로 <br /> 해결해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection