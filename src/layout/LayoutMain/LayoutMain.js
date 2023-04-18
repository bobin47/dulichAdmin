import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigate from "../../components/Navigate/Navigate";

export default function LayoutMain({ children }) {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Navigate />
        </div>
        <div className="col-span-11">{children}</div>
      </div>
      <Footer />
    </>
  );
}
