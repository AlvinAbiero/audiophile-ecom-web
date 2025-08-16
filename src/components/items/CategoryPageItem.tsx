import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/models/Product";
import FadeInOnScroll from "../animation/FadeInOnScroll";

const CategoryPageItem = ({
  slug,
  name,
  category,
  description,
  new: isNew,
  categoryImage,
}: Product) => {
  return (
    <FadeInOnScroll>
      <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center even:lg:flex-row-reverse even:lg:[&>div:first-child]:ml-[7.8125rem] odd:lg:[&>div:first-child]:mr-[7.8125rem]">
        {/* Image Section */}
        <div className="lg:basis-[55%]">
          <picture>
            <source media="(min-width: 62em)" srcSet={categoryImage.desktop} />
            <source media="(min-width: 30em)" srcSet={categoryImage.tablet} />
            <Image
              src={categoryImage.mobile}
              alt={name}
              width={500}
              height={500}
              className="w-full rounded-lg"
            />
          </picture>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:basis-[45%]">
          <h2 className="uppercase text-[1.75rem] tracking-[0.0625rem] mb-6 max-w-[13ch] mx-auto lg:mx-0 font-bold text-black">
            {isNew && (
              <strong className="block uppercase text-orange-500 text-sm tracking-[0.625rem] font-normal mb-6 sm:mb-4">
                New Product
              </strong>
            )}
            {name}
          </h2>

          <p className="mb-6 px-0 sm:px-8 md:px-16 lg:px-0 text-gray-500">
            {description}
          </p>

          <Link href={`/${category}/${slug}`}>
            <button className="bg-orange-500/80 text-white px-6 py-3 uppercase tracking-wider hover:bg-orange-600 transition cursor-pointer">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </FadeInOnScroll>
  );
};

export default CategoryPageItem;
