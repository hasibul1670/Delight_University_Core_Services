/*
  Warnings:

  - The primary key for the `Manufacturer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `manufacturer` on the `Manufacturer` table. All the data in the column will be lost.
  - Added the required column `manufacturer_name` to the `Manufacturer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inventory_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manufacturer" DROP CONSTRAINT "Manufacturer_pkey",
DROP COLUMN "manufacturer",
ADD COLUMN     "manufacturer_id" SERIAL NOT NULL,
ADD COLUMN     "manufacturer_name" TEXT NOT NULL,
ADD CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("manufacturer_id");

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "inventory_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_manufacturer_id_fkey" FOREIGN KEY ("manufacturer_id") REFERENCES "Manufacturer"("manufacturer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "Inventory"("inventory_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
