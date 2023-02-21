/*
  Warnings:

  - Made the column `userId` on table `Cluster` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Cluster" DROP CONSTRAINT "Cluster_userId_fkey";

-- AlterTable
ALTER TABLE "Cluster" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "deleted" BOOLEAN DEFAULT false;

-- AddForeignKey
ALTER TABLE "Cluster" ADD CONSTRAINT "Cluster_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
