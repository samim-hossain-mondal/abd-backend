-- CreateTable
CREATE TABLE "Leave" (
    "leaveId" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "event" VARCHAR(255) NOT NULL,

    CONSTRAINT "Leave_pkey" PRIMARY KEY ("leaveId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Leave_leaveId_key" ON "Leave"("leaveId");
