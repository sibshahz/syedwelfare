-- CreateTable
CREATE TABLE "MemberMedia" (
    "id" TEXT NOT NULL,
    "profilePicId" TEXT,
    "cnicFrontId" TEXT,
    "cnicBackId" TEXT,

    CONSTRAINT "MemberMedia_pkey" PRIMARY KEY ("id")
);
