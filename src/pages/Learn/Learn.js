import React from "react";
import CategoryCourse from "../../components/CategoryCourse/CategoryCourse";

export default function Learn() {
  return (
    <div className="w-[90%] m-auto">
      <div className="text-2xl text-black font-black mt-6">Khoá học</div>
      <div className=" text-gray-500 mt-4 mb-12">
        Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn
        phí, chất lượng, nội dung dễ hiểu.
      </div>
      <CategoryCourse />
    </div>
  );
}
