"use client";
import React, { useEffect, useRef, useState } from "react";
import SettingsLayout from "../../SettingsLayout";
import Image from "next/image";

import { FaCaretDown, FaCaretUp, FaLink } from "react-icons/fa";
import Dropdown from "@/components/Dropdown";
import { apiFetch } from "@/libs/apiFetch";

export default function SettingProfile() {
  const [user, setUser] = useState(null);
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        // apiFetch automatically handles token from cookies
        const response = await apiFetch("/profile", {
          method: "GET",
        });

        const data = await response.json();


        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    getUser();
  }, []);


  const handleOptionSelect = (option) => {
  };

  return (
    <SettingsLayout>
      <div className="grid grid-cols-4 gap-12">
        <div>
          <div className="w-full ">
            <Image
              className="w-[396px] h-[396px]"
              src={"/assets/SettingProfileImage.png"}
              alt={"Change Profile Image"}
              height={500}
              width={500}
            />

            <button className="bg-[#5069E5] w-full py-[18px] text-white text-xl font-medium mt-12 rounded-[8px]">
              Upload Image
            </button>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="flex flex-col gap-2 ">
            <label className="font-roboto text-[#000000] text-[16px]">
              Name
            </label>
            <input
              className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
              placeholder="Name"
              defaultValue={user?.name}
            />
          </div>

          <div className="flex flex-col gap-2 mt-4 ">
            <label className="font-roboto text-[#000000] text-[16px]">
              Email
            </label>
            <input
              className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
              placeholder="example@gmail.com"
              defaultValue={user?.email}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 w-full  ">
            <label className="font-roboto text-[#000000] text-[16px]">
              Phone
            </label>

            <input
              className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
              placeholder="Phone Number"
              defaultValue={user?.phone}
            />
          </div>

          <div className="flex justify-between gap-[2%] mt-4 ">
            <Dropdown
              label="Gender"
              placeholder="Select Gender"
              options={["Male", "Female", "Others"]}
              onSelect={handleOptionSelect}
              className="mt-4"
              spanClass="hidden"
              value={user?.gender}
            />


            <Dropdown
              label="Blood Group"
              placeholder="Select Blood Group"
              options={["A+", "A−", "B+", "B−", "AB+", "AB−", "O+", "O−"]}
              onSelect={handleOptionSelect}
              className="mt-4 "
              spanClass="hidden"
            />
          </div>

          <div className="flex flex-col gap-2 mt-[26px] w-full  ">
            <label className="font-roboto text-[#000000] text-[16px]">
              Signature
            </label>
            <div onClick={() => fileRef.current.click()} className="relative">
              <input
                type="file"
                ref={fileRef}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setFileName(file.name);
                    if (file.type.startsWith("image/")) {
                      setSelectedImageUrl(URL.createObjectURL(file));
                    } else {
                      setSelectedImageUrl(null);
                    }
                  } else {
                    setFileName("");
                    setSelectedImageUrl(null);
                  }
                }}
                className="hidden"
              />

              <input
                className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder="No file choosen"
                readOnly
                value={fileName}
              />

              <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                <FaLink />
              </div>
              {selectedImageUrl && (
                <img
                  src={selectedImageUrl}
                  alt="Signature Preview"
                  className="absolute top-1/2 -translate-y-1/2 right-4 h-6 w-auto object-contain"
                />
              )}
            </div>
          </div>

          <div className="w-[200px] mx-auto">
            <button className="bg-[#5069E5] px-20 py-[18px] text-white text-xl font-medium mt-12 rounded-[8px] ">
              Save
            </button>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
}
