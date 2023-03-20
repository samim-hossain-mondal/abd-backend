-- CreateTable
CREATE TABLE "Project" (
    "projectId" SERIAL NOT NULL,
    "projectName" TEXT NOT NULL,
    "dbName" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projectId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_dbName_key" ON "Project"("dbName");
