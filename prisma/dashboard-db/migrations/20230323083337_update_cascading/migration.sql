-- DropForeignKey
ALTER TABLE "CelebrationReactedUser" DROP CONSTRAINT "CelebrationReactedUser_celebrationId_fkey";

-- DropForeignKey
ALTER TABLE "RequestTaggedUser" DROP CONSTRAINT "RequestTaggedUser_requestId_fkey";

-- AddForeignKey
ALTER TABLE "CelebrationReactedUser" ADD CONSTRAINT "CelebrationReactedUser_celebrationId_fkey" FOREIGN KEY ("celebrationId") REFERENCES "Celebration"("celebrationId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestTaggedUser" ADD CONSTRAINT "RequestTaggedUser_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Request"("requestId") ON DELETE CASCADE ON UPDATE CASCADE;
