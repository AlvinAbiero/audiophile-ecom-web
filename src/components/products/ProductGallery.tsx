import Image from "next/image";
import { CategoryImage } from "@/models/Product";

type ProductGalleryProps = {
  first?: CategoryImage;
  second?: CategoryImage;
  third?: CategoryImage;
};

const ProductGallery = ({ first, second, third }: ProductGalleryProps) => {
  return (
    <div
      className="
        grid gap-5 mt-[5.5rem]
        sm:mt-[7.5rem] lg:mt-[10rem]
        sm:grid-cols-[40%_1fr] sm:grid-rows-[auto_auto] 
      "
    >
      {/* First Image */}
      <picture className="col-start-1 row-start-1">
        <source media="(min-width: 62em)" srcSet={first?.desktop} />
        <source media="(min-width: 30em)" srcSet={first?.tablet} />
        <Image
          src={first?.mobile || ""}
          alt=""
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-md"
        />
      </picture>

      {/* Second Image */}
      <picture className="cols-start-1 row-start-2">
        <source media="(min-width: 62em)" srcSet={second?.desktop} />
        <source media="(min-width: 30em)" srcSet={second?.tablet} />
        <Image
          src={second?.mobile || ""}
          alt=""
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-md"
        />
      </picture>

      {/* Third Image */}
      <picture className="cols-start-2 row-start-1 row-span-2">
        <source media="(min-width: 62em)" srcSet={third?.desktop} />
        <source media="(min-width: 30em)" srcSet={third?.tablet} />
        <Image
          src={third?.mobile || ""}
          alt=""
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-md"
        />
      </picture>
    </div>
  );
};

export default ProductGallery;
