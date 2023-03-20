/*
  Warnings:

  - The primary key for the `MadeToStick` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "MadeToStick" DROP CONSTRAINT "MadeToStick_pkey",
ALTER COLUMN "i" DROP DEFAULT,
ALTER COLUMN "i" SET DATA TYPE TEXT,
ADD CONSTRAINT "MadeToStick_pkey" PRIMARY KEY ("i");
DROP SEQUENCE "MadeToStick_i_seq";
