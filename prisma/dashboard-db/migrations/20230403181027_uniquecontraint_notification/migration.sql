/*
  Warnings:

  - The values [TEAMREQUEST] on the enum `NotificationType` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[memberId,notificationId]` on the table `userNotification` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "NotificationType_new" AS ENUM ('TEAM_REQUEST', 'CELEBRATION', 'ANNOUNCEMENT');
ALTER TABLE "notification" ALTER COLUMN "targetType" TYPE "NotificationType_new" USING ("targetType"::text::"NotificationType_new");
ALTER TYPE "NotificationType" RENAME TO "NotificationType_old";
ALTER TYPE "NotificationType_new" RENAME TO "NotificationType";
DROP TYPE "NotificationType_old";
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "userNotification_memberId_notificationId_key" ON "userNotification"("memberId", "notificationId");
