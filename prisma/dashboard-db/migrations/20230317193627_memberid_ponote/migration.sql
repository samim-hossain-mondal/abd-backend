/*
  Warnings:

  - Added the required column `memberId` to the `PONote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PONote" ADD COLUMN     "memberId" INTEGER NOT NULL;
