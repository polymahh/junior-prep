/*
  Warnings:

  - The primary key for the `Flashcard` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `languageId` on the `Flashcard` table. All the data in the column will be lost.
  - The `id` column on the `Flashcard` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Language` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `languageId` on the `LanguageCourse` table. All the data in the column will be lost.
  - The primary key for the `UserAnswer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `answer` on the `UserAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `UserAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `UserAnswer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[flashcardId,userId]` on the table `UserAnswer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `languageName` to the `Flashcard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `Flashcard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languageName` to the `LanguageCourse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `easeFactor` to the `UserAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interval` to the `UserAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastReviewed` to the `UserAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `response` to the `UserAnswer` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `flashcardId` on the `UserAnswer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_languageId_fkey";

-- DropForeignKey
ALTER TABLE "LanguageCourse" DROP CONSTRAINT "LanguageCourse_languageId_fkey";

-- DropForeignKey
ALTER TABLE "UserAnswer" DROP CONSTRAINT "UserAnswer_flashcardId_fkey";

-- AlterTable
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_pkey",
DROP COLUMN "languageId",
ADD COLUMN     "languageName" TEXT NOT NULL,
ADD COLUMN     "question" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Flashcard_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Language" DROP CONSTRAINT "Language_pkey",
DROP COLUMN "id";

-- AlterTable
ALTER TABLE "LanguageCourse" DROP COLUMN "languageId",
ADD COLUMN     "languageName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "creatorRole" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserAnswer" DROP CONSTRAINT "UserAnswer_pkey",
DROP COLUMN "answer",
DROP COLUMN "id",
DROP COLUMN "updateAt",
ADD COLUMN     "easeFactor" INTEGER NOT NULL,
ADD COLUMN     "interval" INTEGER NOT NULL,
ADD COLUMN     "lastReviewed" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "response" TEXT NOT NULL,
DROP COLUMN "flashcardId",
ADD COLUMN     "flashcardId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserAnswer_flashcardId_userId_key" ON "UserAnswer"("flashcardId", "userId");

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_flashcardId_fkey" FOREIGN KEY ("flashcardId") REFERENCES "Flashcard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_languageName_fkey" FOREIGN KEY ("languageName") REFERENCES "Language"("languageName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageCourse" ADD CONSTRAINT "LanguageCourse_languageName_fkey" FOREIGN KEY ("languageName") REFERENCES "Language"("languageName") ON DELETE RESTRICT ON UPDATE CASCADE;
