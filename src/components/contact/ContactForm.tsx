import React, { useState } from "react";
import axios from "axios";
import contactimg from "../../assets/contactimg.png";
import leftBg from "../../assets/left.png";
import rightBg from "../../assets/right.png";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    videoCount: "",
    shootDate: "",
    runningTime: "",
    targetAudience: "",
    productionPurpose: "",
    subject: "",
    uploadPlan: "",
    referenceLinks: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    if (!formData.name.trim()) {
      alert("성함 / 직책을 입력해주세요.");
      return;
    }

    if (!formData.email.trim()) {
      alert("이메일 주소를 입력해주세요.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/contact", formData);
      alert("문의가 성공적으로 제출되었습니다.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        videoCount: "",
        shootDate: "",
        runningTime: "",
        targetAudience: "",
        productionPurpose: "",
        subject: "",
        uploadPlan: "",
        referenceLinks: "",
        consent: false,
      });
    } catch (error) {
      alert("제출 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-black text-white pt-2 pb-14 overflow-hidden min-h-screen">
      <div className="relative z-10">
        <Navbar />
      </div>

      <img
        src={leftBg}
        alt=""
        className="absolute top-1/6 right-0 -translate-y-1/2 w-[450px] pointer-events-none select-none z-0"
      />
      <img
        src={rightBg}
        alt=""
        className="absolute top-1/6 left-0 -translate-y-1/2 w-[450px] pointer-events-none select-none z-0"
      />

    
      <div className="relative z-10 mt-10">
   
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8 border border-[#FFFFFF2E] shadow-lg">
          <div className="md:hidden text-center">
            <h2 className="text-[20px] font-bold mb-2 font-SUITVariable">문의하기</h2>
            <p className="text-[#8D8D8D] text-[12px] m-3.5 md:m-8 lg:m-12">
              비디오크루 서비스에 대해 궁금한 점이 있으시거나 프로젝트에 대한
              상의가 필요하신 경우 간략한 정보와 함께 문의를 남겨 주시면 상세히
              회신 드리겠습니다.
            </p>
          </div>

          <div className="order-2 md:order-1 flex md:block justify-center md:justify-start">
            <img
              src={contactimg}
              alt="Laptop"
              className="lg:w-[730px] lg:h-[570px] sm:w-[302px] sm:h-[182px] object-contain rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left order-3 lg:ml-8 md:order-2">
            <div className="hidden md:block">
              <h2 className="text-[45px] font-bold mb-2">문의하기</h2>
              <p className="mb-6 text-[#8D8D8D] w-[422px] text-[16px]">
                비디오크루 서비스에 대해 궁금한 점이 있으시거나 프로젝트에 대한
                상담이 필요하신 경우 아래 폼에 작성해 주시면 상세히 답변드리겠습니다.
              </p>
            </div>
            <h3 className="text-[45px] font-semibold">정보</h3>
            <p className="text-[#8D8D8D] mb-6 text-[16px] leading-[22px]">
              <span className="block font-bold mb-2 lg:text-[16px] sm:text-[12px]">ADDRESS</span>
              <span className="block w-[360px] lg:text-[14px] sm:text-[12px] text-white">
                7, Yeonmujang 5-ga-gil, Seongdong-gu, Seoul
                (Seongsu-dong 2-ga, Seongsu Station Hyundai Terra Tower) W1001-1003
              </span>
            </p>
            <div className="text-[#8D8D8D] space-y-6">
              <div>
                <span className="block font-bold mb-2 lg:text-[16px] sm:text-[12px]">CALL US</span>
                <span className="block mt-2 w-[360px] lg:text-[14px] sm:text-[12px] text-white">
                  393-88-01627
                </span>
              </div>
            </div>
          </div>
        </div>

      
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <h2 className="text-center text-[30px] sm:text-4xl md:text-5xl lg:text-[64px] font-bold mb-8">
            Contact Us
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:text-[16px] sm:text-[12px]"
          >
        
            <label htmlFor="name" className="sr-only text-[#FFFFFF99]">
              성함 / 직책
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="성함 / 직책"
              className="p-3 bg-zinc-900 border border-gray-700 rounded"
              required
            />

            <label htmlFor="runningTime" className="sr-only text-[#FFFFFF99]">
              러닝 타임 (분량)
            </label>
            <select
              id="runningTime"
              name="runningTime"
              value={formData.runningTime}
              onChange={handleChange}
              className="p-3 bg-zinc-900 border border-gray-700 rounded text-[#FFFFFF99]"
            >
              <option value="">런닝 타임 (분량)</option>
              <option value="0-5min">0-5분</option>
              <option value="5-10min">5-10분</option>
              <option value="10+min">10분 이상</option>
            </select>

            <label htmlFor="email" className="sr-only">
              이메일 주소
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일 주소"
              className="p-3 bg-zinc-900 border border-gray-700 rounded"
              required
            />

          
            <label htmlFor="targetAudience" className="sr-only">
              희망 예산 (러프하게 선택해주세요.)
            </label>
            <select
              id="targetAudience"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              className="p-3 bg-zinc-900 border border-gray-700 rounded text-[#FFFFFF99]"
            >
              <option value="">희망 예산 (러프하게 선택해주세요.)</option>
             
            </select>

  
            <label htmlFor="phone" className="sr-only">
              연락처
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="연락처"
              className="p-3 bg-zinc-900 border border-gray-700 rounded"
            />

         
            <label htmlFor="productionPurpose" className="sr-only">
              제작 목적
            </label>
            <select
              id="productionPurpose"
              name="productionPurpose"
              value={formData.productionPurpose}
              onChange={handleChange}
              className="p-3 bg-zinc-900 border border-gray-700 rounded text-[#FFFFFF99]"
            >
              <option value="">제작 목적</option>
             
            </select>

            <label htmlFor="company" className="sr-only">
              회사명 / 채널명
            </label>
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="회사명 / 채널명"
              className="p-3 bg-zinc-900 border border-gray-700 rounded"
            />

            
            <label htmlFor="uploadPlan" className="sr-only">
              영상을 어디에 업로드 할 예정인가요?
            </label>
            <select
              id="uploadPlan"
              name="uploadPlan"
              value={formData.uploadPlan}
              onChange={handleChange}
              className="p-3 bg-zinc-900 border border-gray-700 rounded text-[#FFFFFF99]"
            >
              <option value="">영상을 어디에 업로드 할 예정인가요?</option>
             
            </select>

            <label htmlFor="videoCount" className="sr-only">
              영상 제작 건수
            </label>
            <input
              id="videoCount"
              type="text"
              name="videoCount"
              value={formData.videoCount}
              onChange={handleChange}
              placeholder="영상 제작 건수"
              className="p-3 bg-zinc-900 border border-gray-700 rounded"
            />

         
            <label htmlFor="referenceLinks" className="sr-only">
              참고 영상 전달 (유튜브 링크, 전 작업물 등)
            </label>
            <input
              id="referenceLinks"
              type="text"
              name="referenceLinks"
              value={formData.referenceLinks}
              onChange={handleChange}
              placeholder="참고 영상 전달 (유튜브 링크, 전 작업물 등)"
              className="p-3 bg-zinc-900 border border-gray-700 rounded col-span-1"
            />

    
            <label htmlFor="shootDate" className="sr-only">
              희망 영상 납품 일시
            </label>
            <input
              id="shootDate"
              type="text"
              name="shootDate"
              value={formData.shootDate}
              onChange={handleChange}
              placeholder="희망 영상 납품 일시"
              className="p-3 bg-zinc-900 border border-gray-700 rounded col-span-1"
            />

            
            <label htmlFor="subject" className="sr-only">
              현재 보유한 홈페이지, SNS, 랜딩페이지 링크를 가능한 모두 적어주세요.
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="현재 보유한 홈페이지, SNS, 랜딩페이지 링크를 가능한 모두 적어주세요."
              className="p-3 bg-zinc-900 border border-gray-700 rounded col-span-1"
            />

        
             <div className=" max-w-7xl flex flex-col gap-2 col-span-1 md:col-span-2 text-sm text-[#FFFFFF99] border border-[#FFFFFF2E] shadow-lg p-4">
            <span className="font-semibold text-[19px]" > 개인정보 수집 및 이용 동의</span>
              <p>
                비디오크루(이하 “회사”)는 영상 제작 문의에 대한 원활한 응대 및 견적
                제공을 위해 다음과 같은 개인정보를 수집·이용하고자 합니다. <br /> 아래
                내용을 충분히 확인하신 후 동의 여부를 결정해 주시기 바랍니다.
              </p>
              <p>
                1. 수집 항목<br />
                - 필수 항목: 성함, 직책, 이메일 주소, 연락처, 회사명 또는 채널명,
                예산, 희망 영상 편수 및 러닝타임, 납품일시, 제작 목적<br />
                - 선택 항목: 참고 자료 링크(유튜브, 기존 작업물), 홈페이지 및 SNS
                주소 등
              </p>
            </div>

      
            <label className="flex items-center gap-2 col-span-1 md:col-span-2 lg:text-[16px] sm:text-[12px] text-[#FFFFFF99]">
              <input
                type="checkbox"
                name="consent"
            style={{ width: "20px", height: "20px" }}

                  
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              개인정보 수집 및 이용에 동의합니다.​
            </label>

          
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#2448FF] text-white py-3 text-[20px] w-[250px] h-[46px] flex items-center justify-center rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "제출 중..." : "제출하기"}
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}
