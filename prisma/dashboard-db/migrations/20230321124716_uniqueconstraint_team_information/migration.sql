/*
  Warnings:

  - A unique constraint covering the columns `[memberId,projectId]` on the table `teamInformation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "teamInformation_memberId_projectId_key" ON "teamInformation"("memberId", "projectId");
