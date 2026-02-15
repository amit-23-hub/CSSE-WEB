import React from "react";
import CsseTextAnimation from "../../components/csseTextAnimation/csseTextAnimation";

export default function SliderInfo() {
  return (
    <div className="flex flex-col items-center text-white px-4">
      <div className="flex flex-col sm:flex-row items-center text-white gap-10 sm:gap-16">
        <div className="w-full sm:w-auto">
          <CsseTextAnimation />
        </div>

        <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
          <p className="text-2xl sm:text-3xl mb-4 flex-wrap">
            Computer Society of Software Engineers
          </p>
          <p className="text-lg sm:text-xl mb-4 italic">
            Departmental society of{" "}
            <span className="italic underline mx-2">Information Technology,</span> MMMUT Gorakhpur
          </p>
        </div>
      </div>
    </div>
  );
}
