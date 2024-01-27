/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Services` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "client" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "quality" TEXT NOT NULL,
    "mark" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "productionYear" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "engineCapacity" TEXT NOT NULL,
    "mileage" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "serviceIDs" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Services_name_key" ON "Services"("name");
