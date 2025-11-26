"use client";
import { apiFetch } from "@/libs/apiFetch";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";

export default function SignUp() {
  const [viewPass, setViewPass] = useState(false);
  const [viewConPass, setViewConPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useRouter("")


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Password not matched");
      return;
    }

    const fd = new FormData();
    fd.append("name", formData.firstName + " " + formData.lasttName);
    fd.append("email", formData.email);
    fd.append("company_name", formData.companyName);
    fd.append("phone", formData.mobile);
    fd.append("password", formData.password);

    try {
      const res = await apiFetch("/register", {
        method: "POST",
        body: fd,
      });

      const result = await res.json();

      if (result.success === true) {
        navigate.push("/login")
        toast("Registration Succesfull", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });

      } else {
        toast("This Email is already used. try another", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      }
    } catch (error) {
      // Handle error silently or show user-friendly message
      setError("An error occurred during registration. Please try again.");
    } finally {
      reset();
    }
  };

  return (
    <div className="h-screen flex justify-center items-center text-black">
      <ToastContainer />
      <div className="bg-[#FFFFFF] w-[1175px]  z-10 border border-[#CED2E5] shadow rounded-[16px] grid grid-cols-2">
        <div className="w-full ">
          <Image
            className="w-full rounded-l-[15px]"
            src={"/assets/signupbanner.png"}
            alt={`Signup page banner`}
            height={300}
            width={200}
          />
        </div>

        <div className="px-12 flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-x-6 gap-y-2 "
          >
            <fieldset className="fieldset text-black">
              <legend className="fieldset-legend text-black">
                First Name{" "}
                <span className="text-[#F46B6A] text-lg -ml-2">*</span>
              </legend>
              <input
                type="text"
                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-red-600">First Name is required</span>
              )}
            </fieldset>

            <fieldset className="fieldset text-black">
              <legend className="fieldset-legend text-black">
                Last Name<span className="text-[#F46B6A] text-lg -ml-2">*</span>
              </legend>
              <input
                type="text"
                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none"
                placeholder="Last Name"
                {...register("lasttName", { required: true })}
              />
              {errors.lasttName && (
                <span className="text-red-600">Last Name is required</span>
              )}
            </fieldset>

            <fieldset className="fieldset text-black">
              <legend className="fieldset-legend text-black">
                Company Name
                <span className="text-[#F46B6A] text-lg -ml-2">*</span>
              </legend>
              <input
                type="text"
                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none"
                placeholder="Company Name"
                {...register("companyName", { required: true })}
              />
              {errors.companyName && (
                <span className="text-red-600">Company Name is required</span>
              )}
            </fieldset>

            <fieldset className="fieldset text-black">
              <legend className="fieldset-legend text-black">
                Mobile<span className="text-[#F46B6A] text-lg -ml-2">*</span>
              </legend>
              <input
                type="number"
                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none"
                placeholder="example@gmail.com"
                {...register("mobile", { required: true })}
              />
              {errors.mobile && (
                <span className="text-red-600">Mobile is required</span>
              )}
            </fieldset>

            <fieldset className="fieldset text-black col-span-2">
              <legend className="fieldset-legend text-black">
                Email<span className="text-[#F46B6A] text-lg -ml-2">*</span>
              </legend>
              <input
                type="email"
                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none"
                placeholder="example@gmail.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </fieldset>

            <fieldset className="fieldset text-black relative">
              <legend className="fieldset-legend text-black">
                Password<span className="text-[#F46B6A] text-lg -ml-2">*</span>
              </legend>
              <input
                type={`${viewPass ? "text" : "password"}`}
                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1  focus:outline-none pr-8"
                placeholder="Enter your password"
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

            <fieldset className="fieldset text-black relative">
              <legend className="fieldset-legend text-black">
                Confirm password
                <span className="text-[#F46B6A] text-lg -ml-2">*</span>
              </legend>
              <input
                type={`${viewConPass ? "text" : "password"}`}
                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1  focus:outline-none pr-8"
                placeholder="Enter your password"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <span className="text-red-600">
                  Confirm Password is required
                </span>
              )}
              <span className="text-red-600">{error}</span>
              <p
                className="absolute z-20 top-1/2 right-2 -translate-y-1/2 text-xl text-[#6D6E73]"
                onClick={() => setViewConPass(!viewConPass)}
              >
                {viewConPass ? <AiFillEye /> : <AiFillEyeInvisible />}
              </p>
            </fieldset>

            <div className="flex  gap-x-2 col-span-2 ">
              <div>
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm text-black bg-[#F0F0F2] border-none -mt-[2px]"
                  {...register("tearmsCondition", { required: true })}
                />
              </div>
              <p className="text-[#6D6E73]">
                By clicking on "start free trial". You acknowledge having read
                our "Privacy Policy" and "Term and Condition".
              </p>
            </div>
            {errors.tearmsCondition && (
              <span className="text-red-500">This field is required</span>
            )}
            <input
              type="submit"
              className="bg-[#5069E5] mt-8 text-white w-full py-4 rounded-[4px] font-semibold text-xl col-span-2"
            />
          </form>

          <p className="text-center mt-4">
            Already have an account ?{" "}
            <span className="text-[#0D2080]">
              <Link href={"/login"}>Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
