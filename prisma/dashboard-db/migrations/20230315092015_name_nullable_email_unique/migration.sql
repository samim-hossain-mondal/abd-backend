/*
  Warnings:

  - The `projectId` column on the `Member` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "name" DROP NOT NULL,
DROP COLUMN "projectId",
ADD COLUMN     "projectId" INTEGER[];

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");
