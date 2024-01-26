import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = await prisma.services.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    try {
      const orderData = await req.json();
      console.log(orderData);
      orderData.date = new Date(orderData.date);
      const order = await prisma.orders.create({
        data: orderData,
      });

      return new NextResponse(JSON.stringify(orderData), { status: 201 });
    } catch (error) {
      console.error("Error:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }
}
