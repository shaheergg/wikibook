-- DropForeignKey
ALTER TABLE "Wiki" DROP CONSTRAINT "Wiki_folderId_fkey";

-- AddForeignKey
ALTER TABLE "Wiki" ADD CONSTRAINT "Wiki_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
