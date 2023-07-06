"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginForm from "../../components/partials/auth/login-form";
import Social from "../../components/partials/auth/social.jsx";
import useDarkMode from "../../hooks/useDarkMode.js";
import logolight from "../../../public/anisa-white.png";
import logodark from "../../../public/anisa-black.png";
import LoginHero from "../../../public/login.png"
import { useRouter } from "next/navigation";

// image import

const Login = () => {
  const [isDark] = useDarkMode();
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push('/app/dashboard/');
  }
  else{
  return (
    <>
      <div className="loginwrapper">
        <div className="lg-inner-column">
          <div className="left-column relative z-[1]">
            <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
              <Link href="/">
                <img
                  src={
                    isDark
                      ? (logolight)
                      : (logodark)
                  }
                  width={10}
                  height={10}
                  alt=""
                  className="mb-10"
                />
              </Link>
              <h4>
                Unlock your Project{" "}
                <span className="text-slate-800 dark:text-slate-400 font-bold">
                  performance
                </span>
              </h4>
            </div>
            <div className="absolute left-0 2xl:bottom-[-160px] bottom-[-130px] h-full w-full z-[-1]">
              <Image
                src={LoginHero}
                alt=""
                className="h-90 w-full object-contain"
              />
            </div>
          </div>
          <div className="right-column relative">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center">
                <div className="mobile-logo text-center mb-6 lg:hidden block">
                  <Link href="/">
                    <img
                      src={
                        isDark
                          ? "../../../public/anisa-white.png"
                          : "../../../public/anisa-black.png"
                      }
                      alt="Anisa"
                      className="mx-auto"
                    />
                  </Link>
                </div>
                <div className="text-center 2xl:mb-10 mb-4">
                  <h4 className="font-medium">Sign in</h4>
                  <div className="text-slate-500 text-base">
                    Sign in to your account to start using Anisa
                  </div>
                </div>
                <LoginForm />
                <div className="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                  <div className="absolute inline-block bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-slate-500 font-normal">
                    Or continue with
                  </div>
                </div>
                <div className="max-w-[242px] mx-auto mt-8 w-full">
                  <Social />
                </div>
                <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase text-sm">
                  Don’t have an account?{" "}
                  <Link
                    href="/app/register"
                    className="text-slate-900 dark:text-white font-medium hover:underline"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
              <div className="auth-footer text-center">
                Copyright 2023, Anisa All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
}

export default Login;
