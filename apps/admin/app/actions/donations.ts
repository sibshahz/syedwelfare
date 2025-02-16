"use server";
// import { Donation } from "@repo/zod-utils";
import axios_default from "@/lib/api/axios-core";
export const getAllDonations = async () => {
  try {
    const response = await axios_default.get(`donations`);
    return response.data.message;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const getTotalDonationsAmount = async () => {
  try {
    const response = await axios_default.get(`donations/stats/total-amount`);
    return {
      success: true,
      data: response.data.message,
    };
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return {
      success: false,
      data: error,
    };
  }
};
