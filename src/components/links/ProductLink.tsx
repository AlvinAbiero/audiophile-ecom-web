import { OtherProductsProps } from "@/models/Product";
import Image from "next/image";
import Link from "next/link";
const ProductLink = ({ slug, name, image }: OtherProductsProps) => {
  return (
    <div className="mx-auto">
      <div>
        <Image
          src={image.desktop}
          alt={name}
          width={600}
          height={500}
          className="hidden lg:block"
        />
        <Image
          src={image.tablet}
          alt={name}
          width={600}
          height={500}
          className="lg:hidden md:block hidden"
        />
        <Image
          src={image.mobile}
          alt={name}
          objectFit="cover"
          width={300}
          height={300}
          className="block md:hidden rounded-md"
        />
      </div>
      <h3 className="text-[1.5rem] mt-[2rem] tracking-wider uppercase text-black font-semibold">
        {name}
      </h3>
      <Link href={`/${slug}`}>
        <button className="cursor-pointer mt-6 text-white bg-orange-500/80 hover:bg-orange-600 py-2 px-6 uppercase text-[.7rem]">
          See Product
        </button>
      </Link>
    </div>
  );
};

export default ProductLink;
