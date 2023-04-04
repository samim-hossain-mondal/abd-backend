/*
  Warnings:

  - The `targetType` column on the `notification` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('TEAMREQUEST', 'CELEBRATION', 'ANNOUNCEMENT');

-- AlterTable
ALTER TABLE "notification" DROP COLUMN "targetType",
ADD COLUMN     "targetType" "NotificationType";
