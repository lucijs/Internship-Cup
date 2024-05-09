-- CreateTable
CREATE TABLE "DailyMessage" (
    "dailyMessageId" SERIAL NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "DailyMessage_pkey" PRIMARY KEY ("dailyMessageId")
);

-- CreateTable
CREATE TABLE "Reward" (
    "rewardId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("rewardId")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyMessage_message_key" ON "DailyMessage"("message");

-- CreateIndex
CREATE UNIQUE INDEX "Reward_title_key" ON "Reward"("title");

-- AddForeignKey
ALTER TABLE "Reward" ADD CONSTRAINT "Reward_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;
