import { SignupValues, LoginValues } from "@repo/zod-utils";
import axios_default from "@/lib/api/axios-core";

export const postLogin = async (data: LoginValues) => {
  try {
    const response = await axios_default.post(`auth/signin`, data);
    return response;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const postRegister = async (data: SignupValues) => {
  try {
    const response = await axios_default.post(`auth/signup`, data);
    return response;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};

export const putUpdateUser = async (data: any) => {
  try {
    const response = await axios_default.put(`auth/me`, data);
    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    console.error("Failed to fetch resources:", error);
    return {
      success: false,
      error: error.response.data.error,
    };
  }
};

export const getUser = async () => {
  try {
    const response = await axios_default.get(`auth/me`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return {
      success: false,
      error,
    };
  }
};

export const postLogout = async () => {
  try {
    const response = await axios_default.post(`auth/logout`);
    return response;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return error;
  }
};
