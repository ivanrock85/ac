import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { reservationSchema } from "@/app/lib/schemas";

// Prevent multiple instances of Prisma Client in development
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const validation = reservationSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.format() },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Save to database
    const reservation = await prisma.reservation.create({
      data: {
        type: data.type,
        name: data.name,
        phone: data.phone,
        peopleCount: data.peopleCount,
        origin: data.origin,
        destination: data.destination,
        startDate: data.startDate,
        endDate: data.endDate,
        summary: data.summary,
        notes: data.notes,
        status: "pending",
      },
    });

    return NextResponse.json({ success: true, id: reservation.id }, { status: 201 });
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
