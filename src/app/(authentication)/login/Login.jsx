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
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const res = await apiFetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await res.json();

      if (res.status === 401 || res.status === 403) {
        toast.error(result.message || "Login Failed", {
          position: "top-right",
          autoClose: 3000,
        });
      } else if (res.ok) {
        // Set cookie expiry based on Remember Me checkbox
        const maxAge = rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 7; // 30 days or 7 days
        const isSecure = window.location.protocol === 'https:';

        document.cookie = `auth_token=${result.token}; path=/; max-age=${maxAge}; ${isSecure ? 'Secure;' : ''} SameSite=Strict`;
        if (result.role) {
          document.cookie = `user_role=${result.role}; path=/; max-age=${maxAge}; ${isSecure ? 'Secure;' : ''} SameSite=Strict`;
        }

        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 3000,
        });

        router.push("/");
      } else {
        toast.error(result.message || "Something went wrong", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Login Error", error);
      toast.error(`Error: ${error.message || "An unexpected error occurred"}`, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
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
              {errors.password && (
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
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox checkbox-sm text-black bg-[#F0F0F2] border-none -mt-[2px]"
                />
              </div>
              <p className="text-[#6D6E73]">Remember me</p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#5069E5] text-white w-full py-4 rounded-[4px] font-semibold text-xl cursor-pointer hover:bg-[#3d52c7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Logging in...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
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
