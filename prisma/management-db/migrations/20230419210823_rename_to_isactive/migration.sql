/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `ProjectMember` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProjectMember" DROP COLUMN "isDeleted",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;