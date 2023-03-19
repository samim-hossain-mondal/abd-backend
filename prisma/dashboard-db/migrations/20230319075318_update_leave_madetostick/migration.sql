/*
  Warnings:

  - You are about to drop the column `userId` on the `Leave` table. All the data in the column will be lost.
  - Added the required column `memberId` to the `Leave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Leave` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberId` to the `MadeToStick` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `MadeToStick` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Leave" DROP COLUMN "userId",
ADD COLUMN     "memberId" INTEGER NOT NULL,
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "MadeToStick" ADD COLUMN     "memberId" INTEGER NOT NULL,
ADD COLUMN     "projectId" INTEGER NOT NULL;
