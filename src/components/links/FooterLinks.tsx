import Link from "next/link";

import { links } from "@/utils/links";

const FooterLinks = () => {
  return (
    <div>
      <ul className="flex md:space-x-8 sm:space-x-6 space-x-2">
        {links.map((link) => (
          <li
            className="sm:text-[.8rem] text-[.75rem] tracking-[.125rem] text-white hover:text-gray-300 transform transition-color transition-delay-[0.2s] transition-linear font-bold uppercase"
            key={link.id}
          >
            <Link href={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
