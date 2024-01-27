import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextResponse, { params }: any) {
  const ids = params.id.split(",").map((id: any) => parseInt(id));
  try {
    const data = await prisma.services.findMany({ where: { id: { in: ids } } });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
