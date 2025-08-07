import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/images/shared/desktop/logo.svg"
          height={25}
          width={144}
          alt="Audiophile logo - Home"
        />
      </Link>
    </div>
  );
};

export default Logo;
