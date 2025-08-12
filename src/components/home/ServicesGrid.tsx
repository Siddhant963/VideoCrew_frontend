import React from 'react';
import Img5 from "../../../public/images/Image (4).png";
import Img6 from "../../../public/images/Group 237625.png";
import background from "../../../public/images/Background.png";
import content from "../../../public/images/Content.png";
import content2 from "../../../public/imagestwo/Group 41.png";
import content3 from "../../../public/imagestwo/Group 42.png";
import content4 from "../../../public/imagestwo/Group 44.png";
import content5 from "../../../public/imagestwo/Group 45.png";
import content6 from "../../../public/imagestwo/Group 46.png";
import content7 from "../../../public/imagestwo/Group 48.png";
import content8 from "../../../public/imagestwo/Rectangle 11.png";
import content9 from "../../../public/imagestwo/Rectangle 15.png";
import content10 from "../../../public/imagestwo/Rectangle 16.png";


const portfolioImages = [
  content2,
  content3,
  content4,
  content5,
  content6,
  content7, 
  content8,
  content9, 
  content10
];

const ServiceGrid: React.FC = () => {
   const firstRowImages = [content8, content2, content3, content4, content9];
   const secondRowImages = [content5, content6, content7, content10];
  return (
    <section className="relative bg-black text-white py-24 sm:py-32 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6 lg:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            비디오크루의 영상제작 사례
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400">
            당신이 상상하는 세상을 현실로, 모든 프레임에 가치를 담다.
          </p>
        </div>

        <div className="mt-16 text-center">
          <button className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            포트폴리오 둘러보기
          </button>
        </div>
      </div>


      <div className="w-full mt-16">
        <div className="mx-auto max-w-7xl px-0">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {firstRowImages.map((src, index) => (
                <img
                  key={`row1-${index}`}
                  src={src}
                  alt={`Portfolio image ${index + 1}`}
                  className="h-[96px] sm:h-[128px] md:h-[160px] w-auto object-cover select-none block"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {secondRowImages.map((src, index) => (
                <img
                  key={`row2-${index}`}
                  src={src}
                  alt={`Portfolio image ${firstRowImages.length + index + 1}`}
                  className="h-[96px] sm:h-[128px] md:h-[160px] w-auto object-cover select-none block"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <img src={Img5} alt="" className="mx-auto" />
      </div>

      <div className="flex justify-center text-center mt-8">
        <h1 className="text-xl sm:text-2xl font-bold leading-relaxed">
          이미 수많은 기업이 <br /> 비디오크루와 함께 하고 있습니다.
        </h1>
      </div>


      <div className="mt-8">
        <img src={Img6} alt="" className="mx-auto" />
      </div>

    <div
  className="relative w-full sm:h-[400px] h-[500px] mt-16 flex justify-center items-center bg-center bg-no-repeat bg-cover"
  style={{ backgroundImage: `url(${background})` }}
>
  <div className="sm:flex-row justify-center items-center sm:gap-40 text-white flex flex-col gap-8">
    
    <div className="flex flex-col items-center">
      <h1 className="text-[54px] sm:text-[64px] font-bold font-montserrat flex items-start gap-1">
        10
        <span className="text-3xl sm:text-4xl leading-none align-super">+</span>
      </h1>
      <p>다년간의 경험</p>
    </div>


    <div className="flex flex-col items-center">
      <h1 className="text-[54px] sm:text-[64px] font-bold font-montserrat flex items-start gap-1">
        100
        <span className="text-3xl sm:text-4xl leading-none align-super">+</span>
      </h1>
      <p>누적 프로젝트 수</p>
    </div>

    <div className="flex flex-col items-center">
      <h1 className="text-[54px] sm:text-[64px] font-bold font-montserrat flex items-start gap-1">
        100
        <span className="text-3xl sm:text-4xl leading-none align-super">%</span>
      </h1>
      <p>고객 만족도</p>
    </div>

    <div className="flex flex-col items-center">
      <h1 className="text-[54px] sm:text-[64px] font-bold font-montserrat flex items-start gap-1">
        90
        <span className="text-3xl sm:text-4xl leading-none align-super">%</span>
      </h1>
      <p>프로젝트 재수주율</p>
    </div>

  </div>
</div>


      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-24">
        <div className="w-full h-full border-t border-gray-700/50 rounded-[50%] bg-transparent shadow-[0_-10px_30px_-5px_rgba(0,119,255,0.1)]"></div>
      </div>
    </section>
  );
};

export default ServiceGrid;
