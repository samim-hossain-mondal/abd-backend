/*
  Warnings:

  - You are about to drop the column `userId` on the `CelebrationReactedUser` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `RequestTaggedUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[memberId,celebrationId]` on the table `CelebrationReactedUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `memberId` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberId` to the `Celebration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberId` to the `CelebrationReactedUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberId` to the `PONote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberId` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberId` to the `RequestTaggedUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberId` to the `SentimentMeter` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CelebrationReactedUser_userId_celebrationId_key";

-- AlterTable
ALTER TABLE "Announcement" ADD COLUMN     "memberId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Celebration" ADD COLUMN     "memberId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CelebrationReactedUser" DROP COLUMN "userId",
ADD COLUMN     "memberId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PONote" ADD COLUMN     "memberId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "memberId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RequestTaggedUser" DROP COLUMN "userId",
ADD COLUMN     "memberId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SentimentMeter" ADD COLUMN     "memberId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CelebrationReactedUser_memberId_celebrationId_key" ON "CelebrationReactedUser"("memberId", "celebrationId");
