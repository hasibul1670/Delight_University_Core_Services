/*
  Warnings:

  - You are about to drop the `buildComponents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `builders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `components` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "buildComponents" DROP CONSTRAINT "buildComponents_builderId_fkey";

-- DropForeignKey
ALTER TABLE "builders" DROP CONSTRAINT "builders_userId_fkey";

-- DropForeignKey
ALTER TABLE "components" DROP CONSTRAINT "components_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_componentId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userId_fkey";

-- DropTable
DROP TABLE "buildComponents";

-- DropTable
DROP TABLE "builders";

-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "components";

-- DropTable
DROP TABLE "reviews";

-- DropTable
DROP TABLE "users";
