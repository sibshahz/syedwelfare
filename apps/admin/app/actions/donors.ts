"use server";

import { Donor } from "@repo/zod-utils";
import axios_default from "@/lib/api/axios-core";
export const getAllDonor = async () => {
  try {
    const response = await axios_default.get(`donors`);
    return response.data.message;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const getDonorsPaginated = async (page: number, limit: number) => {
  try {
    const response = await axios_default.get(`donors/paginated/${page-1}/${limit}`);
    return {success: true, data:response.data.message};
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return {
      success: false,
      data: error,
    };
  }
}
export const getTotalDonor = async () => {
  try {
    const response = await axios_default.get(`donors/total-donors`);
    return response.data.message;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return 0;
  }
};
export const getDonorById = async (id: string) => {
  try {
    const response = await axios_default.get(`donors/${id}`);
    return response.data.message;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const createDonor = async (data: Donor) => {
  try {
    const response = await axios_default.post(`donors`, { data });
    return { success: true, data: response.data }; // Return a success flag
  } catch (error: any) {
    console.error("Failed to create donor:", error?.response?.data);
    return {
      success: false,
      error: error?.response?.data?.error || "An error occurred",
    };
  }
};

export const updateDonor = async (id: string, data: Donor) => {
  try {
    const response = await axios_default.put(`donors/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const payDonor = async (id: string, amount: number) => {
  try {
    const response = await axios_default.post(`donors/${id}/pay`, { amount });
    return response;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const deleteDonor = async (id: string) => {
  try {
    const response = await axios_default.delete(`donors/${id}`);
    return response;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};
