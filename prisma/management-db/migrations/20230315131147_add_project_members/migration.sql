/*
  Warnings:

  - The primary key for the `Member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `projectId` on the `Member` table. All the data in the column will be lost.
  - Added the required column `role` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'LEADER', 'MEMBER');

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_projectId_fkey";

-- AlterTable
ALTER TABLE "Member" DROP CONSTRAINT "Member_pkey",
DROP COLUMN "projectId",
ADD COLUMN     "memberId" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "role" "Role" NOT NULL,
ADD CONSTRAINT "Member_pkey" PRIMARY KEY ("memberId");

-- CreateTable
CREATE TABLE "ProjectMember" (
    "projectId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "memberId" INTEGER NOT NULL,

    CONSTRAINT "ProjectMember_pkey" PRIMARY KEY ("projectId","email")
);

-- AddForeignKey
ALTER TABLE "ProjectMember" ADD CONSTRAINT "ProjectMember_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectMember" ADD CONSTRAINT "ProjectMember_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;
