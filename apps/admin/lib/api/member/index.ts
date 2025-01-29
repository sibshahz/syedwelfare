import { axios_default } from "../axios-core";
import { Member } from "@repo/zod-utils";

export const getAllMembers = async () => {
  try {
    const response = await axios_default.get(`members`);
    return response.data.message;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const getMemberById = async (id: string) => {
  try {
    const response = await axios_default.get(`members/${id}`);
    return response;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const createMember = async (data: Member) => {
  try {
    const response = await axios_default.post(`members`, { data });
    return response;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const updateMember = async (id: string, data: Member) => {
  try {
    const response = await axios_default.put(`members/${id}`, data);
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
