/*
  Warnings:

  - Changed the type of `height` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `weight` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "height",
ADD COLUMN     "height" INTEGER NOT NULL,
DROP COLUMN "weight",
ADD COLUMN     "weight" INTEGER NOT NULL;
