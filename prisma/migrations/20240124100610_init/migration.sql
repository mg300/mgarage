-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "time" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bulletDescription" TEXT,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);
