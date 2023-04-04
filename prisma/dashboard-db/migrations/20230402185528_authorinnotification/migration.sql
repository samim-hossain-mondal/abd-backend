/*
  Warnings:

  - Added the required column `memberId` to the `notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notification" ADD COLUMN     "memberId" INTEGER NOT NULL;
