-- CreateEnum
CREATE TYPE "Status" AS ENUM ('APPROVED', 'PENDING', 'REJECTED');

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "husbandName" TEXT;

-- CreateTable
CREATE TABLE "MemberStatus" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MemberStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YearlyPayment" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YearlyPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YearlyDonation" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YearlyDonation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MemberStatus_memberId_idx" ON "MemberStatus"("memberId");

-- AddForeignKey
ALTER TABLE "MemberStatus" ADD CONSTRAINT "MemberStatus_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
