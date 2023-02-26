import React from "react";
import CategoryCourse from "../../components/CategoryCourse/CategoryCourse";
import Course from "../../components/Course/Course";
import SliderComponents from "../../components/SliderComponents/SliderComponents";

export default function Home() {
  return (
    <div>
      <SliderComponents />

      <CategoryCourse />

      {/* <div className="mb-10">
        <h2 className="mb-4">Khoa hoc pro</h2>
        <div className="text-black grid grid-cols-12 gap-4 w-[95%] mx-auto">
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </div>

      <div className="mb-10">
        <h2 className="mb-4">Khoa hoc pro</h2>
        <div className="text-black grid grid-cols-12 gap-4 w-[95%] mx-auto">
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </div> */}
    </div>
  );
}
