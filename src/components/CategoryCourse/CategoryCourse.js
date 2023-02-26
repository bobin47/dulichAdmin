import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../Course/Course";
import {
  allCourseAction,
  categoryCourseAction,
} from "../../store/features/CourseSlice/CourseSlice";

export default function CategoryCourse() {
  const dispatch = useDispatch();
  const { categoryCourse } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(allCourseAction());
    dispatch(categoryCourseAction());
  }, []);

  return (
    <div>
      {categoryCourse &&
        categoryCourse.map((category, index) => {
          return (
            <div className="mb-10" key={index}>
              <h2 className="mb-4 font-black text-xl">{category.tenDanhMuc}</h2>
              <div className="text-black grid grid-cols-12 gap-4 w-[95%] mx-auto">
                <Course category={category.maDanhMuc} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
