/*
  Warnings:

  - You are about to drop the column `daysTracked` on the `Cluster` table. All the data in the column will be lost.
  - You are about to drop the column `clusterId` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `daysTracked` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the `HabitInstance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_clusterId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_userId_fkey";

-- DropForeignKey
ALTER TABLE "HabitInstance" DROP CONSTRAINT "HabitInstance_habitId_fkey";

-- AlterTable
ALTER TABLE "Cluster" DROP COLUMN "daysTracked";

-- AlterTable
ALTER TABLE "Habit" DROP COLUMN "clusterId",
DROP COLUMN "daysTracked",
DROP COLUMN "userId";

-- DropTable
DROP TABLE "HabitInstance";

-- CreateTable
CREATE TABLE "_ClusterToHabit" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClusterToHabit_AB_unique" ON "_ClusterToHabit"("A", "B");

-- CreateIndex
CREATE INDEX "_ClusterToHabit_B_index" ON "_ClusterToHabit"("B");

-- AddForeignKey
ALTER TABLE "_ClusterToHabit" ADD CONSTRAINT "_ClusterToHabit_A_fkey" FOREIGN KEY ("A") REFERENCES "Cluster"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClusterToHabit" ADD CONSTRAINT "_ClusterToHabit_B_fkey" FOREIGN KEY ("B") REFERENCES "Habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
