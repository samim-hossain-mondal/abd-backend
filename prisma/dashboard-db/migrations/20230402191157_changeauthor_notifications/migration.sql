/*
  Warnings:

  - You are about to drop the column `memberId` on the `notification` table. All the data in the column will be lost.
  - Added the required column `author` to the `notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notification" DROP COLUMN "memberId",
ADD COLUMN     "author" INTEGER NOT NULL;
