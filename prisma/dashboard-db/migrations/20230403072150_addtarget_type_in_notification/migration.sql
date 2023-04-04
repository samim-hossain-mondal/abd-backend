/*
  Warnings:

  - You are about to drop the column `author` on the `notification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "notification" DROP COLUMN "author",
ADD COLUMN     "targetType" TEXT,
ADD COLUMN     "tergetId" INTEGER,
ALTER COLUMN "content" DROP NOT NULL;
