/*
  Warnings:

  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LanguageCourse` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `languageName` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `languageName` on the `Flashcard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `languageName` to the `UserAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "languageName" AS ENUM ('javascript', 'react', 'html_css');

-- DropForeignKey
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_languageName_fkey";

-- DropForeignKey
ALTER TABLE "LanguageCourse" DROP CONSTRAINT "LanguageCourse_courseId_fkey";

-- DropForeignKey
ALTER TABLE "LanguageCourse" DROP CONSTRAINT "LanguageCourse_languageName_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "languageName" "languageName" NOT NULL;

-- AlterTable
ALTER TABLE "Flashcard" DROP COLUMN "languageName",
ADD COLUMN     "languageName" "languageName" NOT NULL;

-- AlterTable
ALTER TABLE "UserAnswer" ADD COLUMN     "languageName" "languageName" NOT NULL;

-- DropTable
DROP TABLE "Language";

-- DropTable
DROP TABLE "LanguageCourse";
