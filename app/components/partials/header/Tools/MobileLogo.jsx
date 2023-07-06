import React from "react";
import Link from "next/link";
import useDarkMode from "../../../../hooks/useDarkMode";

import MainLogo from "@/assets/images/logo/logo.svg";
import LogoWhite from "@/assets/images/logo/logo-white.svg";

import lightlogo from "../../../../../public/anisa-white.png";
import darklogo from "../../../../../public/anisa-black.png";

const MobileLogo = () => {
  const [isDark] = useDarkMode();
  return (
    <Link href="/app/banking">
      <img src={isDark ? lightlogo : darklogo} alt="Anisa" />
    </Link>
  );
};

export default MobileLogo;
