/*
  Warnings:

  - You are about to drop the column `trackerNum` on the `Cluster` table. All the data in the column will be lost.
  - You are about to drop the `HabitInstance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HabitInstance" DROP CONSTRAINT "HabitInstance_habitId_fkey";

-- AlterTable
ALTER TABLE "Cluster" DROP COLUMN "trackerNum";

-- DropTable
DROP TABLE "HabitInstance";

-- CreateTable
CREATE TABLE "habitInstance" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "habitId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "habitInstance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "habitInstance" ADD CONSTRAINT "habitInstance_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
