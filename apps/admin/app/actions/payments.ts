"use server";
// import { Donation } from "@repo/zod-utils";
import axios_default from "@/lib/api/axios-core";
export const getAllPayments = async () => {
  try {
    const response = await axios_default.get(`payments`);
    return response.data.message;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const getTotalPayments = async () => {
  try {
    const response = await axios_default.get(`payments/total-payments`);
    return response.data.message;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return 0;
  }
}

export const getPaymentsById = async (memberid: string) => {
  try{
    const response = await axios_default.get(`payments/${memberid}`);
    return {
      success: true,
      data: response.data.message
    }
  }catch(error){
    console.error("Error fetching payments for the member: ", error);
    return {
      success: false,
      data: error
    }
  }
}