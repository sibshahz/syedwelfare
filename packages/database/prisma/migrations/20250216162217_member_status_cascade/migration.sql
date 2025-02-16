-- DropForeignKey
ALTER TABLE "MemberStatus" DROP CONSTRAINT "MemberStatus_memberId_fkey";

-- AddForeignKey
ALTER TABLE "MemberStatus" ADD CONSTRAINT "MemberStatus_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
