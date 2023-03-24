-- CreateTable
CREATE TABLE "teamInformation" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "bio" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teamInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teamInformation_id_key" ON "teamInformation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teamInformation_projectId_memberId_key" ON "teamInformation"("projectId", "memberId");
