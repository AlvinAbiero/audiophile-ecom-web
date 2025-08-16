import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryLink = ({
  text,
  img,
  url,
}: {
  text: string;
  img?: string;
  url: string;
}) => {
  return (
    <div className="bg-gray-200 text-center rounded-md relative cursor-pointer hover:outline-[2px] hover:outline-dashed hover:outline-red-600 hover:outline-offset-[4px] flex-1">
      <Link href={url} passHref>
        <div className="pt-[5.5rem] pb-[1.375rem] px-4 sm:px-0">
          <Image
            src={img || ""}
            alt=""
            width={100}
            height={100}
            aria-hidden="true"
            objectFit="cover"
            className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-38%] w-[8rem]"
          />
          <h2 className="text-[1rem] font-semibold md:text-lg  mb-[.85rem] tracking-wider lg:tracking-widest lg:text-xl uppercase text-black">
            {text}
          </h2>
          <div className="flex justify-center items-center  hover:cursor-pointer gap-4">
            <p className="font-bold text-[.8rem] text-gray-400 uppercase cursor-pointer hover:text-orange-400">
              Shop
            </p>
            <Image
              src="/images/shared/desktop/icon-arrow-right.svg"
              alt=""
              width={10}
              height={10}
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryLink;
