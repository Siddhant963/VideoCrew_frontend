import React from "react";
import videologo from "../../assets/VIDEOP.png";
import Vectorcerw from "../../assets/Vector.png"

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">

        <div className="flex items-center gap-1">
          <img
            src={videologo}
            alt="VIDEO"
            className="h-8 w-auto object-contain"
          />
          <img
            src={Vectorcerw}
            alt="CREW"
            className="h-5 mb-2 w-auto object-contain px-1"
          />
        </div>

      
        <div className="text-[15px] leading-relaxed text-[#8D8D8D] font-montserrat ">
          <p className="mb-4 md:mb-0">
            <span className=" font-suit text-[#8D8D8D]  ">**비디오크루(Video Crew)** </span>는 (주)러닝크루 컨설팅그룹의 영상 전문 브랜드입니다.
            러닝크루 컨설팅그룹 공식 홈페이지{" "}
            <a href="#" className=" text-[#8D8D8D] ">
              바로가기
            </a>
          </p>
          <p>
            주소, 서울 성동구 연무장5가길 7(성수동2가, 성수역 현대테라스타워) 1001호~1003호 |
            이메일 <a href="mailto:info@learning-crew.com " className=" text-[#8D8D8D] ">info@learning-crew.com</a>
          </p>
        </div>

        <div className="text-[15px]   ">
          © 2025. Video Crew all rights reserved.
        </div>
      </div>
    </footer>
  );
}
