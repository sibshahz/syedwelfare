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

export const getAllPaymentsPaginated = async (page: number, limit: number) => {
  try {
    const response = await axios_default.get(
      `payments/paginated/${page - 1}/${limit}`
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

export const getTotalPaymentsAmount = async () => {
  try {
    const response = await axios_default.get(`payments/stats/total-amount`);
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

export const getTotalPayments = async () => {
  try {
    const response = await axios_default.get(`payments/stats/total-payments`);
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

export const getMemberTotalPaymentsById = async (memberid: string) => {
  try {
    const response = await axios_default.get(
      `payments/stats/total-member-payments/${memberid}`
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

export const getMemberPaymentsById = async (
  memberid: string,
  page: number,
  limit: number
) => {
  try {
    const response = await axios_default.get(
      `payments/paginated/member/${memberid}/${page - 1}/${limit}`
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

export const deletePayment = async (paymentid: string) => {
  try {
    const response = await axios_default.delete(`payments/${paymentid}`);
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

export const updatePayment = async (paymentid: string, payment: number) => {
  try {
    const response = await axios_default.put(`payments/${paymentid}`, {
      payment,
    });
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
