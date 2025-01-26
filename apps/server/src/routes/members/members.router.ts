import express from "express";
import {
  httpGetMembersList,
  httpGetMembersPaginated,
  httpGetMember,
  httpPostMember,
  httpUpdateMember,
  httpDeleteMember,
} from "@/routes/members/members.controller";

const membersRouter = express.Router();

membersRouter.get("/", httpGetMembersList);
membersRouter.get("/:page/:limit", httpGetMembersPaginated);
membersRouter.get("/:memberid", httpGetMember);
membersRouter.post("/", httpPostMember);
membersRouter.put("/:memberid", httpUpdateMember);
membersRouter.delete("/:memberid", httpDeleteMember);

export default membersRouter;
