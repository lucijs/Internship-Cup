-- CreateTable
CREATE TABLE "City" (
    "cityId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("cityId")
);

-- CreateTable
CREATE TABLE "Institution" (
    "institutionId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("institutionId")
);

-- CreateTable
CREATE TABLE "Institution_City" (
    "cityId" INTEGER NOT NULL,
    "institutionId" INTEGER NOT NULL,

    CONSTRAINT "Institution_City_pkey" PRIMARY KEY ("cityId","institutionId")
);

-- CreateTable
CREATE TABLE "Ad" (
    "adId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Ad_pkey" PRIMARY KEY ("adId")
);

-- CreateTable
CREATE TABLE "Ad_City" (
    "cityId" INTEGER NOT NULL,
    "adId" INTEGER NOT NULL,

    CONSTRAINT "Ad_City_pkey" PRIMARY KEY ("cityId","adId")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "Ad_Category" (
    "categoryId" INTEGER NOT NULL,
    "adId" INTEGER NOT NULL,

    CONSTRAINT "Ad_Category_pkey" PRIMARY KEY ("categoryId","adId")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "quizId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "earnedPoints" INTEGER NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("quizId")
);

-- CreateTable
CREATE TABLE "Quiz_Category" (
    "categoryId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,

    CONSTRAINT "Quiz_Category_pkey" PRIMARY KEY ("categoryId","quizId")
);

-- CreateTable
CREATE TABLE "Examination" (
    "examinationId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "institutionId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" INTEGER NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL,

    CONSTRAINT "Examination_pkey" PRIMARY KEY ("examinationId")
);

-- CreateTable
CREATE TABLE "Examination_Category" (
    "categoryId" INTEGER NOT NULL,
    "examinationId" INTEGER NOT NULL,

    CONSTRAINT "Examination_Category_pkey" PRIMARY KEY ("categoryId","examinationId")
);

-- CreateTable
CREATE TABLE "Code" (
    "codeId" SERIAL NOT NULL,
    "autenticationCode" TEXT NOT NULL,

    CONSTRAINT "Code_pkey" PRIMARY KEY ("codeId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "points" INTEGER NOT NULL,
    "streak" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "lastStreakDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Quiz_User" (
    "userId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "Quiz_User_pkey" PRIMARY KEY ("userId","quizId")
);

-- CreateTable
CREATE TABLE "QuizQuestion" (
    "questionId" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "possibleAnswers" TEXT[],
    "correctAnswer1" TEXT[],
    "correctAnswer2" TEXT[],
    "type" TEXT NOT NULL,
    "quizId" INTEGER NOT NULL,

    CONSTRAINT "QuizQuestion_pkey" PRIMARY KEY ("questionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "City_name_key" ON "City"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Institution_name_key" ON "Institution"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ad_name_key" ON "Ad"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_name_key" ON "Quiz"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Institution_City" ADD CONSTRAINT "Institution_City_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("cityId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institution_City" ADD CONSTRAINT "Institution_City_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("institutionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ad_City" ADD CONSTRAINT "Ad_City_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("cityId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ad_City" ADD CONSTRAINT "Ad_City_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad"("adId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ad_Category" ADD CONSTRAINT "Ad_Category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ad_Category" ADD CONSTRAINT "Ad_Category_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad"("adId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz_Category" ADD CONSTRAINT "Quiz_Category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz_Category" ADD CONSTRAINT "Quiz_Category_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("quizId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Examination" ADD CONSTRAINT "Examination_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("institutionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Examination_Category" ADD CONSTRAINT "Examination_Category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Examination_Category" ADD CONSTRAINT "Examination_Category_examinationId_fkey" FOREIGN KEY ("examinationId") REFERENCES "Examination"("examinationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz_User" ADD CONSTRAINT "Quiz_User_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz_User" ADD CONSTRAINT "Quiz_User_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("quizId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizQuestion" ADD CONSTRAINT "QuizQuestion_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("quizId") ON DELETE RESTRICT ON UPDATE CASCADE;
