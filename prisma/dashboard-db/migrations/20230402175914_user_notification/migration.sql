-- CreateTable
CREATE TABLE "notification" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userNotification" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "readStatus" BOOLEAN NOT NULL DEFAULT false,
    "notificationId" INTEGER NOT NULL,

    CONSTRAINT "userNotification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "notification_id_key" ON "notification"("id");

-- CreateIndex
CREATE UNIQUE INDEX "userNotification_id_key" ON "userNotification"("id");

-- AddForeignKey
ALTER TABLE "userNotification" ADD CONSTRAINT "userNotification_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;
