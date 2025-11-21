"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/libs/apiFetch";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const [viewPass, setViewPass] = useState(false);
  const navigate = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    const fd = new FormData();
    fd.append("email", formData.email);
    fd.append("password", formData.password);

    console.log(fd);
    

    try {
      const res = await apiFetch("/login", {
        method: "POST",
        body: fd,
      });

      const result = await res.json();

      console.log(result);

        if (res.status === 401) {
        //   navigate.push("/login");
          toast(`${result.message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (res.status=== 403){

            toast(`${result.message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

        } else{ 
          toast("Login Successfull", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
    } catch (error) {
      console.log("Internal Server Error", error);
    } finally {
      //   reset();
    }

    console.log(result);
  };

  return (
    <div className="h-screen flex justify-center items-center">
        <ToastContainer />
      <div className="fixed top-0 left-0 w-full h-1/2 bg-[url('/assets/loginbanner.png')] bg-no-repeat bg-cover bg-center z-0"></div>
      <div className="bg-[#FFFFFF] w-[600px] h-[600px] z-10 border border-[#CED2E5] shadow rounded-[16px]">
        <div className="w-full h-full flex flex-col justify-center items-center px-24 py-10">
          <div className="w-[295px] text-center mb-16">
            <h2 className="text-3xl font-semibold pb-4 text-black">
              Welcome Back to ManageTP - 3.2.6 !
            </h2>
            <p className="text-xl text-[#3D3D40]">
              Sign in to continue to Time Sheet
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-2">
            <fieldset className="fieldset text-black">
              <legend className="fieldset-legend text-black">Email</legend>
              <input
                type="email"
                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none"
                placeholder="example@gmail.com"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </fieldset>

            <fieldset className="fieldset text-black relative">
              <legend className="fieldset-legend text-black">Password</legend>
              <input
                type={`${viewPass ? "text" : "password"}`}
                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1  focus:outline-none pr-8"
                placeholder="Enter your password"
                name="password"
                {...register("password", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Password is required</span>
              )}
              <p
                className="absolute z-20 top-1/2 right-2 -translate-y-1/2 text-xl text-[#6D6E73]"
                onClick={() => setViewPass(!viewPass)}
              >
                {viewPass ? <AiFillEye /> : <AiFillEyeInvisible />}
              </p>
            </fieldset>
            <div className="flex items-center gap-x-2 mb-8">
              <div>
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm text-black bg-[#F0F0F2] border-none -mt-[2px]"
                />
              </div>
              <p className="text-[#6D6E73]">Remember me</p>
            </div>

            <input
              type="submit"
              className="bg-[#5069E5] text-white w-full py-4 rounded-[4px] font-semibold text-xl"
            />
          </form>

          <div className="text-center text-base text-black space-y-2">
            <p className="text-[#0D2080]">
              <Link href={"/forgot-password"}>Forgot password?</Link>
            </p>
            <p>
              Don't have an account ?{" "}
              <span className="text-[#0D2080]">
                <Link href={"/signup"}>Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
