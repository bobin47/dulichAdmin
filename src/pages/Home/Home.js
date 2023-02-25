import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SliderComponents from "../../components/SliderComponents/SliderComponents";
import { ahihi } from "../../store/features/auth/authSlice";

export default function Home() {
  return (
    <div>
      <SliderComponents />
    </div>
  );
}
