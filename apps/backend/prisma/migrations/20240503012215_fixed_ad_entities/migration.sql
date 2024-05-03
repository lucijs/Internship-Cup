/*
  Warnings:

  - You are about to drop the column `price` on the `Ad` table. All the data in the column will be lost.
  - Made the column `description` on table `Ad` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Ad" DROP COLUMN "price",
ALTER COLUMN "description" SET NOT NULL;
