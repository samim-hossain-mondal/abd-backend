-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
CREATE SEQUENCE project_projectid_seq;
ALTER TABLE "Project" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "projectId" SET DEFAULT nextval('project_projectid_seq');
ALTER SEQUENCE project_projectid_seq OWNED BY "Project"."projectId";
