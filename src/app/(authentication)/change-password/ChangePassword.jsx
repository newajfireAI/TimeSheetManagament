"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiLock2Fill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/libs/apiFetch";
import { toast, ToastContainer } from "react-toastify";

export default function ChangePassword() {
    const [viewPass, setViewPass] = useState(false);
    const [viewConfirmPass, setViewConfirmPass] = useState(false);
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch("password");

    useEffect(() => {
        // Get email from localStorage
        const storedEmail = localStorage.getItem("reset_email");
        if (storedEmail) {
            setEmail(storedEmail);
        } else {
            toast.error("No email found. Please start from forgot password page.");
            router.push("/forgot-password");
        }
    }, [router]);

    const onSubmit = async (formData) => {
        setIsLoading(true);
        try {
            const res = await apiFetch("/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: formData.password,
                    password_confirmation: formData.confirmPassword,
                }),
            });

            const result = await res.json();

            if (res.ok) {
                toast.success("Password changed successfully!");
                localStorage.removeItem("reset_email");
                setTimeout(() => {
                    router.push("/login");
                }, 2000);
            } else {
                toast.error(result.message || "Failed to change password");
            }
        } catch (error) {
            console.error("Change Password Error", error);
            toast.error(`Error: ${error.message || "An unexpected error occurred"}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen flex justify-center items-center text-black">
            <ToastContainer />
            <div className="bg-[#FFFFFF] w-[600px] py-8 z-10 border border-[#CED2E5] shadow relative rounded-[16px]">
                <Link href={"/login"}>
                    <div className="bg-[#F2F4FF] p-3 inline-flex rounded-[8px] absolute top-5 right-5">
                        <RxCross2 className="text-2xl font-black text-[#F46B6A]" />
                    </div>
                </Link>

                <div className="w-full h-full flex flex-col justify-center items-center px-24 py-10">
                    <p className="text-center text-7xl text-[#5069E5] w-full flex justify-center">
                        <RiLock2Fill />
                    </p>
                    <div className="w-[411px] text-center mt-9">
                        <h2 className="text-3xl font-semibold pb-4">Change Password</h2>
                        <p className="text-xl text-[#3D3D40]">Keep your account secure by updating your password.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8">
                        <fieldset className="fieldset text-black relative">
                            <legend className="fieldset-legend text-black">New Password</legend>
                            <input
                                type={viewPass ? "text" : "password"}
                                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 focus:outline-none pr-8"
                                placeholder="Enter your new password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                            />
                            <p
                                className="absolute z-20 top-1/2 right-2 -translate-y-1/2 text-xl text-[#6D6E73] cursor-pointer"
                                onClick={() => setViewPass(!viewPass)}
                            >
                                {viewPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </p>
                            {errors.password && (
                                <span className="text-red-600 text-sm">{errors.password.message}</span>
                            )}
                        </fieldset>

                        <fieldset className="fieldset text-black relative">
                            <legend className="fieldset-legend text-black">Confirm Password</legend>
                            <input
                                type={viewConfirmPass ? "text" : "password"}
                                className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 focus:outline-none pr-8"
                                placeholder="Confirm your new password"
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: (value) => value === password || "Passwords do not match",
                                })}
                            />
                            <p
                                className="absolute z-20 top-1/2 right-2 -translate-y-1/2 text-xl text-[#6D6E73] cursor-pointer"
                                onClick={() => setViewConfirmPass(!viewConfirmPass)}
                            >
                                {viewConfirmPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </p>
                            {errors.confirmPassword && (
                                <span className="text-red-600 text-sm">{errors.confirmPassword.message}</span>
                            )}
                        </fieldset>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-[#5069E5] mt-9 text-white w-full py-4 rounded-[4px] font-semibold text-xl cursor-pointer hover:bg-[#3d52c7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Changing Password...</span>
                                </div>
                            ) : (
                                "Change Password"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
