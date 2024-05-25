/*
  Warnings:

  - Added the required column `totalCards` to the `TimeSpent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_parentId_fkey";

-- AlterTable
ALTER TABLE "TimeSpent" ADD COLUMN     "totalCards" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
