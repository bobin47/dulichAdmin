import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="flex justify-between items-start w-[70%] p-20 mx-auto">
        <div className=" text-gray-400 font-bold">
          <h3 className="text-white mb-5">LIÊN HỆ</h3>
          <div className="pb-2">Giới thiệu</div>
          <div className="pb-2">Điều khoảng</div>
          <div className="pb-2">Bảo mật</div>
          <div className="pb-2">Cơ hội việc làm</div>
          <div className="pb-2">Trơ giúp hôr trợ</div>
        </div>
        <div className=" text-gray-400">
          <h3 className="text-white mb-5  font-bold">SẢN PHẨM</h3>
          <div className="pb-2">Game Nester</div>
          <div className="pb-2">Game Css Dinner</div>
          <div className="pb-2">Game Forggy</div>
          <div className="pb-2">Game Scoops</div>
          <div className="pb-2">Game Food</div>
        </div>
        <div className=" text-gray-400">
          <h3 className="text-white mb-5  font-bold">CÔNG CỤ</h3>
          <div className="pb-2">Tạo CV xin việc</div>
          <div className="pb-2">Rút gọn liên kết</div>
          <div className="pb-2">Clip-path maker</div>
          <div className="pb-2">Snippet</div>
          <div className="pb-2">Cảnh báo sờ tay lên măt</div>
        </div>
        <div className=" text-gray-400  font-bold">
          <h3 className="text-white mb-5">CÔNG TY</h3>
          <div className="pb-2">Mã Số thuế</div>
          <div className="pb-2">Ngày thành lập</div>
          <div className="pb-2">
            Lĩnh vực : CNTT
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
