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
} from "@/routes/members/members.controller";

const membersRouter = express.Router();

membersRouter.get("/", httpGetMembersList);
membersRouter.get("/paginated/:page/:limit", httpGetMembersPaginated);
membersRouter.get("/total-members", httpGetTotalMembers); // Make sure this comes before the :memberid route
membersRouter.get("/:memberid", httpGetMember); // This should come after /total-members route
membersRouter.post("/", httpPostMember);
membersRouter.post("/:memberid/pay", httpPayMember);
membersRouter.put("/:memberid", httpUpdateMember);
membersRouter.delete("/:memberid", httpDeleteMember);

export default membersRouter;
