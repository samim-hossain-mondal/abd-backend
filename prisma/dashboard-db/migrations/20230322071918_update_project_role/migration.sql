/*
  Warnings:

  - You are about to drop the column `role` on the `teamInformation` table. All the data in the column will be lost.
  - Added the required column `projectRole` to the `teamInformation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "teamInformation" DROP COLUMN "role",
ADD COLUMN     "projectRole" TEXT NOT NULL;
