import React,{useEffect ,useState} from "react";
import { SearchOutlined, SmileFilled } from "@ant-design/icons";
import {safePolygon,useFloating,useInteractions, autoUpdate,
    offset,
    flip,
    shift,useHover, useDismiss,useRole,useClick} from '@floating-ui/react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {searchCourseAction} from '../../store/features/CourseSlice/CourseSlice'

export default function SearchHeader() {
    const [valueSearch,setValueSearch] = useState(null)
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const {courseResearch} = useSelector(state=>state.course)
    const [maKhoahoc,setMaKhoahoc] = useState('')


    const {x, y, strategy, refs, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
      });

      const hover = useClick(context, {
        handleClose: safePolygon({
          restMs: 50,
        }),
      });

      const handleSearch = (e) =>{
        setValueSearch(e.target.value)
        console.log(valueSearch)
      }
    
      useEffect(() => {
        dispatch(searchCourseAction(valueSearch))
      }, [valueSearch,dispatch])

      const {getReferenceProps, getFloatingProps} = useInteractions([
        hover,
      ]);
  
  return (
    <div className="border flex justify-start items-center focus:border-black rounded-2xl w-[400px] text-[13px]">
          <SearchOutlined
            twoToneColor="#9AA3B0"
            className="m-2 fill-gray-400"
          />
          <input
            className="w-full border-none outline-none"
            placeholder="Tìm kiếm khoá học"
            onChange={(e)=>handleSearch(e)}
            ref={refs.setReference} {...getReferenceProps()}
          ></input>
            <div>
        
      {isOpen && (
        <div
          ref={refs.setFloating}
          className="bg-white shadow-xl border "
          style={{
            position: strategy,
            top: y ?? 0,
            left: x-10 ?? 0,
            width: '400px',
            borderRadius:'10px'
          }}
          {...getFloatingProps()}
        >
         <div className="p-4">
         {valueSearch ? <h1 className="text-[20px]">Khoá Học</h1>:<h1 className="text-[20px]">Tìm Kiếm</h1>}
          {courseResearch && courseResearch.map((course)=>{
            return <NavLink key={course.maKhoaHoc} className="flex items-center gap-2 cursor-pointer mt-3" to={`/detail/${course.maKhoaHoc}`}>
            <img src={course.hinhAnh} 
                  className="w-[40px] h-[40px] r rounded-3xl border"></img>
            <div className="text-[15px]">{course.tenKhoaHoc}</div>
          </NavLink>
          })}
          
         </div>
        </div>
      )}
            </div>
        </div>
  )
}
