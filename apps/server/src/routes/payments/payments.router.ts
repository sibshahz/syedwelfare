import express from "express";
import {
  httpDeletePayment,
  httpGetMemberPaymentsPaginated,
  httpGetPaymentsById,
  httpGetPaymentsList,
  httpGetPaymentsPaginated,
  httpGetTotalMemberPayments,
  httpGetTotalPayments,
  httpGetTotalPaymentsAmount,
  httpUpdatePayment,
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
paymentsRouter.get("/:memberid", httpGetPaymentsById);
paymentsRouter.get("/stats/total-payments", httpGetTotalPayments);
paymentsRouter.get(
  "/stats/total-member-payments/:memberid",
  httpGetTotalMemberPayments
);
paymentsRouter.get("/stats/total-amount", httpGetTotalPaymentsAmount);
paymentsRouter.get("/paginated/:page/:limit", httpGetPaymentsPaginated);
// `payments/paginated/member/${memberid}/${page - 1}/${limit}`;
paymentsRouter.get(
  "/paginated/member/:memberid/:page/:limit",
  httpGetMemberPaymentsPaginated
);
paymentsRouter.put("/:paymentid", httpUpdatePayment);
paymentsRouter.delete("/:paymentid", httpDeletePayment);

export default paymentsRouter;
