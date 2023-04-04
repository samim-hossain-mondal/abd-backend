/*
  Warnings:

  - You are about to drop the column `tergetId` on the `notification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "notification" DROP COLUMN "tergetId",
ADD COLUMN     "targetId" INTEGER;
