import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="sticky top-0">
      <ul className="flex mx-20 px-10 justify-center border-b-2 border-[#EDF6F9]">
        <Link href="renewal">
          <li className="px-6 py-5 text-xl md:text-sm font-semibold hover:bg-[#EDF6F9]">
            계산기
          </li>
        </Link>
        <Link href="result">
          <li className="px-6 py-5 text-xl md:text-sm font-semibold hover:bg-[#EDF6F9]">
            기록
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
