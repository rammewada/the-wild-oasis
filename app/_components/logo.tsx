import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
export default function Logo() {
  return (
    <div>
      <Link href="/" className="flex items-center gap-4 relative z-50">
        {/* <Image
          src="/logo.png"
          width="60"
          height="60"
          alt="the wild oasis"
        ></Image> */}
        <Image
          src={logo}
          quality={100}
          width="60"
          height="60"
          alt="the wild oasis"
        ></Image>
        <span className="text-xl font-semibold text-primary-100">
          The Wild Oasis
        </span>
      </Link>
    </div>
  );
}
