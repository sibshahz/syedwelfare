-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'DONOR', 'MEMBER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donor" (
    "id" TEXT NOT NULL,
    "cnic" TEXT,
    "name" TEXT NOT NULL,
    "password" TEXT,
    "fatherName" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "city" TEXT,
    "email" TEXT,

    CONSTRAINT "Donor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonorMedia" (
    "id" TEXT NOT NULL,
    "profilePic" TEXT,
    "cnicFront" TEXT,
    "cnicBack" TEXT,
    "donorId" TEXT NOT NULL,

    CONSTRAINT "DonorMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "cnic" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fatherName" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "city" TEXT,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'MEMBER',

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberPayments" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MemberPayments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberMedia" (
    "id" TEXT NOT NULL,
    "profilePic" TEXT,
    "cnicFront" TEXT,
    "cnicBack" TEXT,
    "memberId" TEXT NOT NULL,

    CONSTRAINT "MemberMedia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Donor_cnic_key" ON "Donor"("cnic");

-- CreateIndex
CREATE INDEX "Donor_cnic_phone_idx" ON "Donor"("cnic", "phone");

-- CreateIndex
CREATE INDEX "DonorMedia_donorId_idx" ON "DonorMedia"("donorId");

-- CreateIndex
CREATE INDEX "Donation_donorId_idx" ON "Donation"("donorId");

-- CreateIndex
CREATE UNIQUE INDEX "Member_cnic_key" ON "Member"("cnic");

-- CreateIndex
CREATE INDEX "Member_cnic_phone_idx" ON "Member"("cnic", "phone");

-- CreateIndex
CREATE INDEX "MemberPayments_memberId_idx" ON "MemberPayments"("memberId");

-- CreateIndex
CREATE INDEX "MemberMedia_memberId_idx" ON "MemberMedia"("memberId");

-- AddForeignKey
ALTER TABLE "DonorMedia" ADD CONSTRAINT "DonorMedia_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberPayments" ADD CONSTRAINT "MemberPayments_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberMedia" ADD CONSTRAINT "MemberMedia_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
