/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `academic_departments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `academic_faculties` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `faculties` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `students` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "academic_departments_title_key" ON "academic_departments"("title");

-- CreateIndex
CREATE UNIQUE INDEX "academic_faculties_title_key" ON "academic_faculties"("title");

-- CreateIndex
CREATE UNIQUE INDEX "faculties_email_key" ON "faculties"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");
