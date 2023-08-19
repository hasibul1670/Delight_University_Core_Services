/*
  Warnings:

  - A unique constraint covering the columns `[year,title,code,startMonth,endMonth]` on the table `academic_semesters` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "academic_semesters_year_title_code_startMonth_endMonth_key" ON "academic_semesters"("year", "title", "code", "startMonth", "endMonth");
