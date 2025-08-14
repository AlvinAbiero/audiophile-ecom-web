import React from "react";
import YX1Earphones from "../products/YX1Earphones";
import ZX7Speaker from "../products/ZX7Speaker";
import ZX9Speaker from "../products/ZX9Speaker";

const MainGallery = () => {
  return (
    <div className="mt-[7.5rem] flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full">
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </div>
  );
};

export default MainGallery;
