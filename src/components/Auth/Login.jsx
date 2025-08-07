import img from "../../assets/login.png";
import { IoIosClose } from "react-icons/io";

export default function Logoin() {
  return (
    <>
      <div className="px-50 py-10">
        <div className="flex flex-row w-full bg-gradient-to-r from-gray-100 to-yellow-100 p-4 rounded-4xl shadow-lg">
          <div className="w-1/2 pr-2 ">
            <form className="flex flex-col gap-6 items-center justify-center h-full p-8 rounded-lg ">
              <p className="text-3xl text-gray-600">Login</p>
              <div className="flex flex-col gap-4 items-center justify-center w-4/5">
                <lable className="self-start text-xs text-gray-500">
                  Email
                </lable>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-r-0 rounded-2xl bg-white p-3 pl-5 w-full text-sm text-gray-400"
                />
                <lable className="self-start text-xs text-gray-500">
                  Password
                </lable>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border-r-0 rounded-2xl bg-white p-3 pl-5 w-full text-sm text-gray-400"
                />
                <button
                  type="submit"
                  className="mt-4 p-3 w-full text-center text-gray-600 bg-amber-200 rounded-2xl"
                >
                  Login
                </button>
              </div>
              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-500">
                  Register
                </a>
              </p>
            </form>
          </div>
          <div className="w-1/2 h-full flex justify-center relative">
            <img
              src={img}
              alt="Login"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}
