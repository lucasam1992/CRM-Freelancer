/*
  Warnings:

  - Added the required column `companyName` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
