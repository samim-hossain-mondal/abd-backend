/*
  Warnings:

  - Added the required column `projectId` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Celebration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `PONote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `SentimentMeter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Announcement" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Celebration" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PONote" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SentimentMeter" ADD COLUMN     "projectId" INTEGER NOT NULL;
