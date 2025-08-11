"use client";
import {
  RiInstagramFill,
  RiTwitterFill,
  RiFacebookBoxFill,
} from "react-icons/ri";

const SocialLinks = () => {
  return (
    <div>
      <div className="flex gap-4 md:gap-6 justify-center sm:justify-right">
        <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center  transition-all duration-300">
          <RiFacebookBoxFill
            size="2rem"
            color="white"
            className="hover:fill-orange-400"
          />
        </div>
        <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center rounded-full transition-all duration-300">
          <RiTwitterFill
            size="2rem"
            color="white"
            className="hover:fill-orange-400"
          />
        </div>

        <div className="flex h-[2.5rem] w-[2.5rem] cursor-pointer items-center justify-center">
          <RiInstagramFill
            size="2rem"
            color="white"
            className="hover:fill-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
