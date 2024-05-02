/*
  Warnings:

  - You are about to drop the column `answer` on the `QuizQuestions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QuizQuestions" DROP COLUMN "answer",
ADD COLUMN     "correctAnswer1" TEXT[],
ADD COLUMN     "correctAnswer2" TEXT[],
ADD COLUMN     "possibleAnswers" TEXT[];
