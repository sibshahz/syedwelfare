"use server";
import { Member } from "@repo/zod-utils";
import axios_default from "@/lib/api/axios-core";
export const getAllMembers = async () => {
  try {
    const response = await axios_default.get(`members`);
    return response.data.message;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};
export const getTotalMembers = async () => {
  try {
    const response = await axios_default.get(`members/total-members`);
    return response.data.message;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return 0;
  }
};

export const updateMemberStatus = async (id: string, status: string) => {
  try {
    const response = await axios_default.put(`members/status/${id}`, {
      status,
    });
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

export const getMembersStats = async () => {
  try {
    const response = await axios_default.get(`members/stats/member-stats`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return {
      success: false,
      data: error,
    };
  }
};
export const getMembersPaginated = async (
  page: number,
  limit: number,
  name: string,
  cnic: string,
  phone: string,
  status: string
) => {
  try {
    const response = await axios_default.get(
      `members/paginated/${page - 1}/${limit}/?name=${name}&cnic=${cnic}&phone=${phone}&status=${status}`
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return {
      success: false,
      data: error,
    };
  }
};
export const getMemberById = async (id: string) => {
  try {
    const response = await axios_default.get(`members/${id}`);
    return { success: true, data: response.data.message };
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return {
      success: false,
      data: error,
    };
  }
};

export const createMember = async (data: Member) => {
  try {
    const response = await axios_default.post(`members`, { data });
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

export const updateMember = async (id: string, data: Member) => {
  try {
    const response = await axios_default.put(`members/${id}`, data);
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

export const payMember = async (id: string, amount: number) => {
  try {
    const response = await axios_default.post(`members/${id}/pay`, { amount });
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

export const deleteMember = async (id: string) => {
  try {
    const response = await axios_default.delete(`members/delete/${id}`);

    return {
      success: true,
      data: response.data.message,
    };
  } catch (error: any) {
    console.error("Failed to fetch resources:", error.response.data.error);
    return {
      success: false,
      data: error.response.data.error,
    };
  }
};
