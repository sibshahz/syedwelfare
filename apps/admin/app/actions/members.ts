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
export const getMemberById = async (id: string) => {
  try {
    const response = await axios_default.get(`members/${id}`);
    return response.data.message;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const createMember = async (data: Member) => {
  try {
    const response = await axios_default.post(`members`, { data });
    return response;
  } catch (error: any) {
    console.error("Failed to fetch resources:", error);
    return { error: error.response.data };
  }
};

export const updateMember = async (id: string, data: Member) => {
  try {
    const response = await axios_default.put(`members/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const payMember = async (id: string, amount: number) => {
  try {
    const response = await axios_default.post(`members/${id}/pay`, { amount });
    return response;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const deleteMember = async (id: string) => {
  try {
    const response = await axios_default.delete(`members/${id}`);
    return response;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};
