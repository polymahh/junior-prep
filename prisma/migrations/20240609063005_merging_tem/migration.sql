/*
  Warnings:

  - You are about to drop the column `ProjectId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `githubRepo` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `searchTerms` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TeamId` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_teamId_fkey";

-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_ProjectId_fkey";

-- DropIndex
DROP INDEX "comment_ProjectId_idx";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "githubRepo" TEXT NOT NULL,
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "searchTerms" TEXT NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "comment" DROP COLUMN "ProjectId",
ADD COLUMN     "TeamId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Project";

-- CreateIndex
CREATE INDEX "comment_TeamId_idx" ON "comment"("TeamId");

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_TeamId_fkey" FOREIGN KEY ("TeamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
