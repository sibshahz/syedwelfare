import express from "express";
import {
  httpGetDonationsList,
  httpGetTotalDonationsAmount,
  // httpGetDonorsPaginated,
  // httpGetDonor,
  // httpPostDonor,
  // httpUpdateDonor,
  // httpDeleteDonor,
  // httpPayDonor,
  // httpGetTotalDonors,
} from "@/routes/donations/donations.controller";

const donationsRouter = express.Router();

donationsRouter.get("/", httpGetDonationsList);
donationsRouter.get("/stats/total-amount", httpGetTotalDonationsAmount);
// donorsRouter.get("/:page/:limit", httpGetDonorsPaginated);
// donorsRouter.get("/total-donors", httpGetTotalDonors); // Make sure this comes before the :memberid route
// donorsRouter.get("/:donorid", httpGetDonor); // This should come after /total-donors route
// donorsRouter.post("/", httpPostDonor);
// donorsRouter.post("/:donorid/pay", httpPayDonor);
// donorsRouter.put("/:donorid", httpUpdateDonor);
// donorsRouter.delete("/:donorid", httpDeleteDonor);

export default donationsRouter;
