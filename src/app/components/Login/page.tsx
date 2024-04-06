import React from "react";
import Image from "next/image";
import logo from "../../../../public/assets/octopos.png";

function Login() {
  return (
    <div className="grid place-items-center w-screen h-screen bg-[radial-gradient(58.43%_103.88%_at_56.74%_50%,#0085ff_0%,#003465_100%)] ">
      <div className="grid grid-cols-1 place-items-center w-[690px] h-[690px] bg-[rgba(88,130,193,0.28)] backdrop-blur-[12.5px] rounded-[40px]">
        <div className="grid grid-cols-1 gap-4 ">
          <Image
            src={logo}
            className="absolute left-[calc(65%-52.5px-196.5px)] top-[calc(45%-14.5px-282.5px)]"
            alt="Octopos Logo"
            width={200}
            height={24}
            priority
          />
          <p className="absolute w-26 h-7 left-[calc(50%-52.5px-196.5px)] top-[calc(50%+14.5px-282.5px)] flex items-center justify-center text-white font-mono text-3xl leading-10 mt-20">
            Welcome! Step into Octopos Prime
          </p>
          <div className="w-full px-4 mt-12">
            <form className="mb-5">
              {" "}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-mono font-black text-white dark:text-white"
                >
                  E-mail or Username:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email or username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-mono font-black text-white dark:text-white"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </form>
          </div>
          <div className="w-96 px-4">
            <button className="w-full h-[50px] bg-[#13497c] rounded-[12px] text-[#dff5ff] text-[18px] font-mono border-none cursor-pointer">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
