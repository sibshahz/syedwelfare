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

export const getAllDonationsPaginated = async (page: number, limit: number) => {
  try {
    const response = await axios_default.get(
      `donations/paginated/${page - 1}/${limit}`
    );
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

export const getDonorDonationsById = async (
  donorid: string,
  page: number,
  limit: number
) => {
  try {
    const response = await axios_default.get(
      `donations/paginated/donor/${donorid}/${page - 1}/${limit}`
    );
    return {
      success: true,
      data: response.data.message,
    };
  } catch (error) {
    console.error("Error fetching payments for the member: ", error);
    return {
      success: false,
      data: error,
    };
  }
};

export const getDonorTotalDonationsById = async (id: string) => {
  try {
    const response = await axios_default.get(
      `donations/stats/total-donor-payments/${id}`
    );
    return {
      success: true,
      data: response.data.message,
    };
  } catch (error: any) {
    console.error("Failed to fetch resources:", error);
    return {
      success: false,
      data: error.response.data.error,
    };
  }
};

export const getTotalDonations = async () => {
  try {
    const response = await axios_default.get(
      `donations/stats/total-donations-count`
    );
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

export const updateDonation = async (donationid: string, donation: number) => {
  try {
    const response = await axios_default.put(`donations/${donationid}`, {
      donation,
    });
    return {
      success: true,
      data: response.data.message,
    };
  } catch (error) {
    console.error("Failed to update donation:", error);
    return {
      success: false,
      data: error,
    };
  }
};

export const deleteDonation = async (donationid: string) => {
  try {
    const response = await axios_default.delete(`donations/${donationid}`);
    return {
      success: true,
      data: response.data.message,
    };
  } catch (error) {
    console.error("Failed to delete donation:", error);
    return {
      success: false,
      data: error,
    };
  }
};
