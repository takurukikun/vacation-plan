/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `DateVacation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DateVacation_date_key" ON "DateVacation"("date");
