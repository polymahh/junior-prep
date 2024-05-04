/*
  Warnings:

  - Changed the type of `response` on the `UserAnswer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "userResponse" AS ENUM ('again', 'hard', 'good', 'easy');

-- AlterTable
ALTER TABLE "UserAnswer" DROP COLUMN "response",
ADD COLUMN     "response" "userResponse" NOT NULL;

-- DropEnum
DROP TYPE "languageName";
