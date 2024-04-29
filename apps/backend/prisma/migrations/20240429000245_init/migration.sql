/*
  Warnings:

  - Added the required column `completed` to the `Quiz_User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quiz_User" ADD COLUMN     "completed" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "QuizQuestions" (
    "questionId" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "QuizQuestions_pkey" PRIMARY KEY ("questionId")
);
