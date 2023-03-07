/*
  Warnings:

  - You are about to drop the `_ClusterToHabit` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clusterId` to the `Habit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ClusterToHabit" DROP CONSTRAINT "_ClusterToHabit_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClusterToHabit" DROP CONSTRAINT "_ClusterToHabit_B_fkey";

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "clusterId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ClusterToHabit";

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "Cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
