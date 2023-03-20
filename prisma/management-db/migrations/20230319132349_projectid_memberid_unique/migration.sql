/*
  Warnings:

  - A unique constraint covering the columns `[projectId,memberId]` on the table `ProjectMember` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProjectMember_projectId_memberId_key" ON "ProjectMember"("projectId", "memberId");
