import React from "react";
import CategoryCourse from "../../components/CategoryCourse/CategoryCourse";
import Course from "../../components/Course/Course";
import SliderComponents from "../../components/SliderComponents/SliderComponents";

export default function Home() {
  return (
    <div>
      <SliderComponents />
      <CategoryCourse />
    </div>
  );
}
