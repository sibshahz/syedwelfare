import express from "express";
import {
  httpGetMembersList,
  httpGetMembersPaginated,
  httpGetMember,
  httpPostMember,
  httpUpdateMember,
  httpDeleteMember,
  httpPayMember,
  httpGetTotalMembers,
  httpUpdateMemberStatus,
  httpAddMissingStatus,
  httpGetMemberStats,
} from "@/routes/members/members.controller";
import { authenticate } from "../auth/auth.controller";

const membersRouter = express.Router();

membersRouter.get("/", authenticate, httpGetMembersList);
membersRouter.get("/paginated/:page/:limit", httpGetMembersPaginated);
membersRouter.get("/total-members", httpGetTotalMembers); // Make sure this comes before the :memberid route
membersRouter.get("/:memberid", httpGetMember); // This should come after /total-members route
membersRouter.post("/", httpPostMember);
membersRouter.post("/:memberid/pay", httpPayMember);
membersRouter.put("/:memberid", httpUpdateMember);
membersRouter.put("/status/:memberid", httpUpdateMemberStatus);
membersRouter.get("/add/missing-status", httpAddMissingStatus);
membersRouter.delete("/delete/:memberid", httpDeleteMember);
membersRouter.get("/stats/member-stats", httpGetMemberStats);

export default membersRouter;
