-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('CHIEF', 'MANAGER', 'SUPERVISOR', 'OFFICER', 'TRAINEE');

-- CreateEnum
CREATE TYPE "public"."Department" AS ENUM ('EXECUTIVE_OFFICE', 'HR', 'FINANCE_AND_ACCOUNTING', 'HEALTH_CLAIMS', 'NON_HEALTH_CLAIMS', 'LEGAL_AND_COMPLIANCE', 'SALES_AND_MARKETING', 'UNDERWRITING');

-- CreateEnum
CREATE TYPE "public"."SopStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'APPROVED', 'REJECTED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL,
    "department" "public"."Department" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Sop" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "department" "public"."Department" NOT NULL,
    "version" TEXT NOT NULL DEFAULT '1.0',
    "status" "public"."SopStatus" NOT NULL DEFAULT 'DRAFT',
    "steps" TEXT,
    "attachments" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "requesterId" INTEGER NOT NULL,

    CONSTRAINT "Sop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Approval" (
    "id" SERIAL NOT NULL,
    "sopId" INTEGER NOT NULL,
    "approverId" INTEGER NOT NULL,
    "role" "public"."Role" NOT NULL,
    "status" TEXT NOT NULL,
    "signature" TEXT,
    "comments" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Approval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "Sop_status_idx" ON "public"."Sop"("status");

-- CreateIndex
CREATE INDEX "Sop_department_idx" ON "public"."Sop"("department");

-- CreateIndex
CREATE INDEX "Approval_sopId_idx" ON "public"."Approval"("sopId");

-- CreateIndex
CREATE INDEX "Approval_approverId_idx" ON "public"."Approval"("approverId");

-- AddForeignKey
ALTER TABLE "public"."Sop" ADD CONSTRAINT "Sop_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Approval" ADD CONSTRAINT "Approval_sopId_fkey" FOREIGN KEY ("sopId") REFERENCES "public"."Sop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Approval" ADD CONSTRAINT "Approval_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
