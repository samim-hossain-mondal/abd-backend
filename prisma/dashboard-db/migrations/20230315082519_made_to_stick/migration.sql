-- CreateEnum
CREATE TYPE "MadeToStickType" AS ENUM ('IMAGE', 'TEXT');

-- CreateTable
CREATE TABLE "MadeToStick" (
    "i" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "backgroundColor" VARCHAR(255) NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "w" INTEGER NOT NULL,
    "h" INTEGER NOT NULL,
    "type" "MadeToStickType" NOT NULL,
    "emailId" TEXT NOT NULL,

    CONSTRAINT "MadeToStick_pkey" PRIMARY KEY ("i")
);

-- CreateIndex
CREATE UNIQUE INDEX "MadeToStick_i_key" ON "MadeToStick"("i");
