-- CreateTable
CREATE TABLE "Member" (
    "projectId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("projectId","email")
);

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;
