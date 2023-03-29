/*
  Warnings:

  - You are about to drop the column `author` on the `SentimentMeter` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Sentiment" ADD VALUE 'NULL';

-- AlterTable
ALTER TABLE "SentimentMeter" DROP COLUMN "author";
