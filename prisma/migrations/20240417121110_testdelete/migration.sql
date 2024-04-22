-- DropForeignKey
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_languageName_fkey";

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_languageName_fkey" FOREIGN KEY ("languageName") REFERENCES "Language"("languageName") ON DELETE CASCADE ON UPDATE CASCADE;
