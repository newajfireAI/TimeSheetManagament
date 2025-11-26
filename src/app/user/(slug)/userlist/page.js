"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Table from "@/components/Table";
import { apiFetch } from "@/libs/apiFetch";

// --------------------------------------
// Tabs
// --------------------------------------
const tabs = ["User", "Internal User", "Client", "Vendor", "Employee"];

export default function UserList() {
    const [activeTab, setActiveTab] = useState("User");
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // --------------------------------------
    // Read cookie
    // --------------------------------------
    const getCookie = (name) =>
        document.cookie
            .split("; ")
            .find((row) => row.startsWith(name + "="))
            ?.split("=")[1];

    // --------------------------------------
    // Reusable Fetch Function
    // --------------------------------------
    const fetchDataFromAPI = async (endpoint, token) => {
        try {
            const res = await apiFetch(endpoint, {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            });

            if (!res.ok) {
                const errMsg = await res.text();
                throw new Error(`Failed to fetch ${endpoint}: ${res.status} ${errMsg}`);
            }

            return await res.json();
        } catch (err) {
            setError(err.message);
            return null;
        }
    };

    // --------------------------------------
    // Dynamic Data Loader Based on Active
    // --------------------------------------
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const token = getCookie("auth_token");
                if (!token) {
                    setError("Token missing");
                    return;
                }

                let response;

                // --------------------
                // Fetch USERS
                // --------------------
                if (activeTab === "User") {
                    response = await fetchDataFromAPI("/users", token);

                    const formatted = response?.data?.map((u) => ({
                        name: u.name,
                        email: u.email,
                        phone: u.phone,
                        role: u.roles?.[0]?.name,
                        status: u.status,
                    }));

                    setTableData(formatted || []);
                }

                // --------------------
                // Fetch CLIENTS
                // --------------------
                else if (activeTab === "Client") {
                    response = await fetchDataFromAPI("/clients", token);

                    const formatted = response?.data?.map((c) => ({
                        name: c.name || "N/A",
                        email: c.email || "N/A",
                        phone: c.phone || "N/A",
                        address: c.address || "N/A",
                        zipCode: c.zip_code || "N/A",
                        remark: c.remarks || "N/A",
                    }));

                    setTableData(formatted || []);
                }

                // --------------------
                // Fetch VENDORS
                // --------------------
                else if (activeTab === "Vendor") {
                    response = await fetchDataFromAPI("/vendors", token);

                    const formatted = response?.data?.map((v) => ({
                        name: v.name || "N/A",
                        email: v.email || "N/A",
                        phone: v.phone || "N/A",
                        address: v.address || "N/A",
                        zipCode: v.zip_code || "N/A",
                        remark: v.remarks || "N/A",
                    }));

                    setTableData(formatted || []);
                }

                // --------------------
                // Fetch EMPLOYEES
                // --------------------
                else if (activeTab === "Employee") {
                    response = await fetchDataFromAPI("/employees", token);

                    const formatted = response?.data?.map((e) => ({
                        name: e.name || "N/A",
                        email: e.email || "N/A",
                        phone: e.phone || "N/A",
                        address: e.address || "N/A",
                        zipCode: e.zip_code || "N/A",
                        remark: e.remarks || "N/A",
                    }));

                    setTableData(formatted || []);
                }

                // --------------------
                // Internal User (Still Dummy – no API given)
                // --------------------
                else if (activeTab === "Internal User") {
                    setTableData([]); // empty for now
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [activeTab]);

    // --------------------------------------
    // Table Head Configurations
    // --------------------------------------
    const userTableHeads = [
        { Title: "Name", key: "name", width: "20%" },
        { Title: "Email", key: "email", width: "25%" },
        { Title: "Phone", key: "phone", width: "15%" },
        {
            Title: "Role",
            key: "role",
            width: "15%",
            render: (row) => {
                const style = {
                    Admin: "bg-[#E8F0FE] text-[#5069E5]",
                    User: "bg-[#E6FFFA] text-[#14B8A6]",
                    Supervisor: "bg-[#F3E8FF] text-[#9333EA]",
                };

                return (
                    <select
                        value={row.role}
                        onChange={(e) => {
                            // TODO: Implement role update API call
                            // For now, just update local state
                        }}
                        className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${style[row.role] || "bg-gray-100 text-gray-600"}`}
                    >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="Supervisor">Supervisor</option>
                    </select>
                );
            },
        },
        {
            Title: "Status",
            key: "status",
            width: "15%",
            render: (row) => {
                const style = {
                    Approved: "bg-[#F2FFFA] text-[#1B654A]",
                    Rejected: "bg-[#FFF7F7] text-[#EF4444]",
                    Pending: "bg-[#FFFEF7] text-[#F59E0B] border-2 border-[#FFF9B2]",
                };

                return (
                    <select
                        value={row.status}
                        onChange={(e) => {
                            // TODO: Implement status update API call
                            // For now, just update local state
                        }}
                        className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${style[row.status] || "bg-gray-100 text-gray-600"}`}
                    >
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Pending">Pending</option>
                    </select>
                );
            },
        },
    ];

    const clientTableHeads = [
        { Title: "Name", key: "name", width: "20%" },
        { Title: "Email", key: "email", width: "20%" },
        { Title: "Phone", key: "phone", width: "15%" },
        { Title: "Address", key: "address", width: "20%" },
        { Title: "Zip Code", key: "zipCode", width: "10%" },
        { Title: "Remark", key: "remark", width: "15%" },
    ];

    const tableHeads =
        activeTab === "User"
            ? userTableHeads
            : ["Client", "Vendor", "Employee"].includes(activeTab)
                ? clientTableHeads
                : userTableHeads;

    const buttonTextMap = {
        "Internal User": "Add User",
        Client: "Add Client",
        Vendor: "Add Vendor",
        Employee: "Add Employee",
    };

    const getButtonText = () => buttonTextMap[activeTab] || "Add User";

    // --------------------------------------
    // UI
    // --------------------------------------
    return (
        <div className="w-full h-full bg-[#F0F0F2] p-8">
            {/* Tabs */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-4 rounded-md font-medium transition-colors ${activeTab === tab
                                ? "bg-[#D9DFFF] text-[#5069E5]"
                                : "bg-white text-[#6D6E73] hover:bg-gray-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <Link href="/user">
                    <button className="bg-[#5069E5] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#3d52c7] transition-colors">
                        <span className="text-xl">+</span>
                        {getButtonText()}
                    </button>
                </Link>
            </div>

            {/* Table */}
            <Table TableHeads={tableHeads} TableRows={tableData} />
        </div>
    );
}
