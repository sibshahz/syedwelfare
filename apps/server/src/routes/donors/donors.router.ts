import express from "express";
import {
  httpGetDonorsList,
  httpGetDonorsPaginated,
  httpGetDonor,
  httpPostDonor,
  httpUpdateDonor,
  httpDeleteDonor,
  httpPayDonor,
  httpGetTotalDonors,
} from "@/routes/donors/donors.controller";

const donorsRouter = express.Router();

donorsRouter.get("/", httpGetDonorsList);
donorsRouter.get("/paginated/:page/:limit", httpGetDonorsPaginated);
donorsRouter.get("/total-donors", httpGetTotalDonors); // Make sure this comes before the :memberid route
donorsRouter.get("/:donorid", httpGetDonor); // This should come after /total-donors route
donorsRouter.post("/", httpPostDonor);
donorsRouter.post("/:donorid/pay", httpPayDonor);
donorsRouter.put("/:donorid", httpUpdateDonor);
donorsRouter.delete("/:donorid", httpDeleteDonor);

export default donorsRouter;
