/*
  Warnings:

  - Added the required column `type` to the `QuizQuestions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizQuestions" ADD COLUMN     "type" TEXT NOT NULL;
