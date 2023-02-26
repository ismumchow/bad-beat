-- CreateTable
CREATE TABLE "HabitInstance" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isChecked" BOOLEAN NOT NULL DEFAULT false,
    "habitId" INTEGER,

    CONSTRAINT "HabitInstance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HabitInstance" ADD CONSTRAINT "HabitInstance_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
