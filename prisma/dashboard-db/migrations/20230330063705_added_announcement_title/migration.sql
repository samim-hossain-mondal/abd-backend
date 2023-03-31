/*
  Warnings:

  - Added the required column `title` to the `Announcement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Announcement" ADD COLUMN     "title" VARCHAR(255) NOT NULL,
ALTER COLUMN "content" SET DATA TYPE VARCHAR(2000);
