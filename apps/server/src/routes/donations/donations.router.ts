import express from "express";
import {
  httpGetDonationsList,
  httpGetTotalDonationsAmount,
  httpGetTotalDonations,
  httpGetDonationsById,
  httpGetTotalDonorDonations,
  httpGetDonationsPaginated,
  httpGetDonorDonationsPaginated,
  httpUpdateDonation,
  httpDeleteDonation,
} from "@/routes/donations/donations.controller";

const donationsRouter = express.Router();

donationsRouter.get("/", httpGetDonationsList);
donationsRouter.get("/:donorid", httpGetDonationsById);
donationsRouter.get("/stats/total-donations-count", httpGetTotalDonations);
donationsRouter.get(
  "/stats/total-donor-payments/:donorid",
  httpGetTotalDonorDonations
);
donationsRouter.get("/stats/total-amount", httpGetTotalDonationsAmount);
donationsRouter.get("/paginated/:page/:limit", httpGetDonationsPaginated);
donationsRouter.get(
  "/paginated/donor/:donorid/:page/:limit",
  httpGetDonorDonationsPaginated
);
donationsRouter.put("/:donationid", httpUpdateDonation);
donationsRouter.delete("/:donationid", httpDeleteDonation);
export default donationsRouter;
