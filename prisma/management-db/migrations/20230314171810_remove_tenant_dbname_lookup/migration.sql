/*
  Warnings:

  - You are about to drop the column `dbName` on the `Project` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Project_dbName_key";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "dbName";
