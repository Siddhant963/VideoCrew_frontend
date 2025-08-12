

import React from 'react'
import Header from "../../public/process/Group 90.png";
import frame1 from "../../public/process/Frame 395.png";
import frame2 from "../../public/process/Frame 396-2.png";
import frame3 from "../../public/process/Frame 397.png";
import frame4 from "../../public/process/Frame 396-1.png";
import frame5 from "../../public/process/Frame 423.png";
import frame6 from "../../public/process/Frame 396.png";
import Navbar from '../components/common/Navbar';


// const Process = () => {
//   return (
//     <div>Process</div>
//   )
// }
type Step = {
  number: string;
  titleKo: string;
  titleEn: string;
  description: string;
  image: string;
};
const steps: Step[] = [
  {
    number: "01",
    titleKo: "상담 및 목표 설정",
    titleEn: "(Consultation & Goal Setting)",
    description:
      "비디오크루는 고객님의 입장에서 먼저 고민합니다. 영상 제작의 궁극적인 목적(예: 브랜드 인지도 향상, 제품 판매 증진, 정보 전달)과 기대 효과, 주요 타겟 시청자,",
    image: frame1,
  },
  {
    number: "02",
    titleKo: "영상 기획 및 전략 수립",
    titleEn: "(Video Planning & Strategy)",
    description:
      "설정된 목표와 예산을 바탕으로 영상의 핵심 콘셉트, 주요 스토리라인, 창의적인 표현 전략을 구체화합니다. 비디오크루는 이 기획 단계를 영상의 성패를 좌우하는 가장 중요한...",
    image: frame2,
  },
  {
    number: "03",
    titleKo: "프리 프로덕션 및 구성안 확정",
    titleEn: "(Pre-Production & Storyboard / Script Confirmation)",
    description: "​확정된 기획안을 바탕으로 영상의 실제 제작을 위한 모든 세부 사항을 준비하고 설계합니다. 촬영용 최종 스크립트 작성, 각 장면의 구도와 움직임을 시각화하는 스토리보드(콘티) 제작,...",
    image: frame3,
  },
  {
    number: "04",
    titleKo: "제작 및 촬영",
    titleEn: "(Production & Filming)",
    description: "​확정된 기획안을 바탕으로 영상의 실제 제작을 위한 모든 세부 사항을 준비하고 설계합니다. 촬영용 최종 스크립트 작성, 각 장면의 구도와 움직임을 시각화하는 스토리보드(콘티) 제작,...",
    image: frame4,
  },
  {
    number: "05",
    titleKo: "편집 및 후반 작업",
    titleEn: "(Editing & Post-Production)",
    description: "촬영된 원본 영상을 편집하여 영상의 전체적인 흐름과 리듬을 만듭니다. 컷 편집, 색 보정(Color Grading), 사운드 믹싱, 필요한 경우 2D/3D 모션 그래픽 및 CG 작업,...",
    image: frame5,
  },
  {
    number: "06",
    titleKo: "최종 검토, 전달 및 활용 지원",
    titleEn: "(Final Review, Delivery & Utilization Support)",
    description: "완성된 영상은 내부 QA(품질 관리) 및 고객님의 최종 검토를 거쳐 최상의 퀄리티로 약속된 파일 형식(예: MP4, MOV 등) 및 사양으로 전달됩니다. 여기서 끝이 아닙니다...",
    image: frame6,
  },
];



const Process: React.FC = () => {
  const elements: JSX.Element[] = [];
  steps.forEach((step, index) => {
    const isLeft = index % 2 === 0;
    const card = (
      <div
        key={step.number}
        className={`relative flex flex-col text-[#1f1f1f] w-full`}
      >
        <div className="text-[147px] font-bold mb-4 opacity-70 leading-none">{step.number}</div>
        <div className="relative w-full overflow-hidden h-80">
          <img
            src={step.image}
            alt={step.titleKo}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-2xl font-bold text-white">{step.titleKo}</h3>
            <p className="text-md text-white font-bold mb-2">{step.titleEn}</p>
            <p className="text-[#8c8c8c]">{step.description}</p>
          </div>
        </div>
        {[0, 2, 4].includes(index) && (
          <>
            <div className="hidden md:block absolute top-full left-0 w-full h-16">
              <div className="absolute top-0 left-1/2 w-0 h-8 border-l-2 border-white border-dotted"></div>
              <div className="absolute top-8 left-1/2 w-[20%] h-0 border-t-2 border-white border-dotted"></div>
              <div className="absolute top-8 left-[80%] w-[20%] h-0 border-t-2 border-white border-dotted"></div>
              <div className="absolute top-8 left-full w-0 h-8 border-l-2 border-white border-dotted"></div>
            </div>
            <div className="md:hidden w-0 h-8 border-l-2 border-white border-dotted mx-auto"></div>
          </>
        )}
      </div>
    );
    const invisible = <div key={`inv-${index}`} className="hidden md:block w-full h-full"></div>;
    if (isLeft) {
      elements.push(card);
      elements.push(invisible);
    } else {
      elements.push(invisible);
      elements.push(card);
    }
  });

  return (
    <section className="bg-black text-white ">
       <div className="relative pt-2 z-10">
                           <Navbar />
                         </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20 mt-10 ">
        <div className="text-center text-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
            영상제작 프로세스
          </h2>
          <p className="text-[#8c8c8c]">
            비디오크루만의 영상제작 프로세스를 통해 <br /> 고객의 니즈에 부합하는 최적의 콘텐츠를 <br /> 디자인하여 제공합니다.​
          </p>

          <p className="md:mt-24 mt-14 text-[#8c8c8c]">*과업의 형태에 따라 프로세스는 <br /> 변동될 수 있습니다. </p>
        </div>
        <div>
          <img
            src={Header}
            alt="Process Header"
            className="w-full "
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 px-4">
        {elements}
      </div>
    </section>
  );
};

export default Process;
