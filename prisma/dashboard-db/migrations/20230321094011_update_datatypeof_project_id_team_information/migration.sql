/*
  Warnings:

  - Changed the type of `projectId` on the `teamInformation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "teamInformation" DROP COLUMN "projectId",
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "teamInformation_projectId_memberId_key" ON "teamInformation"("projectId", "memberId");
