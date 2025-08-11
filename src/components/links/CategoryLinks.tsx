import React from "react";
import { links } from "@/utils/links";
import CategoryLink from "./CategoryLink";

const CategoryLinks = () => {
  return (
    <div className="flex md:flex-row flex-column xl:gap-[4rem] lg:gap-[1.875rem] gap-[0.625rem] mt-[4.75rem] md:mt-[12.5rem] sm:mt-[9.25rem]">
      {links.slice(1).map((link) => (
        <CategoryLink {...link} key={link.id} />
      ))}
    </div>
  );
};

export default CategoryLinks;
