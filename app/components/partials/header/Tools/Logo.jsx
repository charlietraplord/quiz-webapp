"use client";

import React, { Fragment } from "react";
import useDarkMode from "../../../../hooks/useDarkMode";
import Link from "next/link";
import useWidth from "../../../../hooks/useWidth";
import lightlogo from "../../../../../public/anisa-white.png"
import darklogo from "../../../../../public/anisa-black.png"

const Logo = () => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();

  return (
    <div>
      <Link href="/app/banking">
        <React.Fragment>
          {width >= breakpoints.xl ? (
            <img
              src={
                isDark
                  ? lightlogo
                  : darklogo
              }
              alt=""
            />
          ) : (
            <img
              src={
                isDark
                  ? lightlogo
                  : darklogo
              }
              alt=""
            />
          )}
        </React.Fragment>
      </Link>
    </div>
  );
};

export default Logo;
