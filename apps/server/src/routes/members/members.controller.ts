import type { Request, Response, NextFunction } from "express";

export const httpGetMembersList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: "hello get list world" });
  } catch (error) {
    next(error);
  }
};

export const httpGetMembersPaginated = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: "hello paginated world" });
  } catch (error) {
    next(error);
  }
};

export const httpGetMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: "hello get single world" });
  } catch (error) {
    next(error);
  }
};

export const httpPostMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: "hello post member world" });
  } catch (error) {
    next(error);
  }
};

export const httpUpdateMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: "hello update member world" });
  } catch (error) {
    next(error);
  }
};

export const httpDeleteMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: "hello delete member world" });
  } catch (error) {
    next(error);
  }
};
