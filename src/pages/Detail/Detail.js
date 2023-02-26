import React from "react";
import { useParams } from "react-router-dom";
export default function Detail() {
  let { id } = useParams();
  console.log(id);
  return <div>Detail</div>;
}
