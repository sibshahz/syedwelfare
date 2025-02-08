import express from "express";
import {
  httpGetPaymentsById,
  httpGetPaymentsList,
  // httpGetDonorsPaginated,
  // httpGetDonor,
  // httpPostDonor,
  // httpUpdateDonor,
  // httpDeleteDonor,
  // httpPayDonor,
  // httpGetTotalDonors,
} from "@/routes/payments/payments.controller";

const paymentsRouter = express.Router();

paymentsRouter.get("/", httpGetPaymentsList);
paymentsRouter.get("/:memberid",httpGetPaymentsById)
// donorsRouter.get("/:page/:limit", httpGetDonorsPaginated);
// donorsRouter.get("/total-donors", httpGetTotalDonors); // Make sure this comes before the :memberid route
// donorsRouter.get("/:donorid", httpGetDonor); // This should come after /total-donors route
// donorsRouter.post("/", httpPostDonor);
// donorsRouter.post("/:donorid/pay", httpPayDonor);
// donorsRouter.put("/:donorid", httpUpdateDonor);
// donorsRouter.delete("/:donorid", httpDeleteDonor);

export default paymentsRouter;
