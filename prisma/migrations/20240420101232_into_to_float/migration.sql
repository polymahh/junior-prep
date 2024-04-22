/*
  Warnings:

  - You are about to drop the column `languageName` on the `Course` table. All the data in the column will be lost.
  - Changed the type of `languageName` on the `Flashcard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `languageName` on the `UserAnswer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "UserAnswer" DROP CONSTRAINT "UserAnswer_flashcardId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "languageName";

-- AlterTable
ALTER TABLE "Flashcard" DROP COLUMN "languageName",
ADD COLUMN     "languageName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserAnswer" ALTER COLUMN "easeFactor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "interval" SET DATA TYPE DOUBLE PRECISION,
DROP COLUMN "languageName",
ADD COLUMN     "languageName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Language" (
    "languageName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "LanguageCourse" (
    "languageName" TEXT NOT NULL,
    "courseId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Language_languageName_key" ON "Language"("languageName");

-- CreateIndex
CREATE UNIQUE INDEX "LanguageCourse_courseId_key" ON "LanguageCourse"("courseId");

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_flashcardId_fkey" FOREIGN KEY ("flashcardId") REFERENCES "Flashcard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_languageName_fkey" FOREIGN KEY ("languageName") REFERENCES "Language"("languageName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_languageName_fkey" FOREIGN KEY ("languageName") REFERENCES "Language"("languageName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageCourse" ADD CONSTRAINT "LanguageCourse_languageName_fkey" FOREIGN KEY ("languageName") REFERENCES "Language"("languageName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageCourse" ADD CONSTRAINT "LanguageCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
