import { NextResponse, type NextRequest } from "next/server";

import { z } from "zod";

import { db } from "@/db";
import { ReservationTable, RoomInfoTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import nodemailer from 'nodemailer';

const reservationSchema = z.object({
    displayName: z.string(),
    email: z.string(),
    Date: z.string(),
    span: z.number(),
    roomId: z.string(),
})

type reservationRequest = z.infer<typeof reservationSchema>

export async function POST(request: NextRequest){
    const data = await request.json();
    try {
        reservationSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const {displayName, email, Date, span, roomId} = data as reservationRequest;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'point3.tw@gmail.com',
            pass: 'point'
        }
    });
    const [room] = await db
        .select({
            roomName: RoomInfoTable.roomName
        })
        .from(RoomInfoTable)
        .where(eq(RoomInfoTable.RoomId, roomId))
        .execute()
    // Define the email options
    const mailOptions = {
        from: 'point3.tw@gmail.com',
        to: email,
        subject: '預約成功通知！',
        text: `${displayName}您好！\n您在${Date},${span+10}:00~${span+11}:00預約${room.roomName}，預定成功。給我準時來歐~`
    };

    try {
        await db
            .insert(ReservationTable)
            .values({
                displayName: displayName,
                email: email,
                Date: Date,
                span: span,
                roomId: roomId,
            })
            .onConflictDoNothing()
            .execute();
        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { message: "reservation success!"},
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong when making reservation" },
            { status: 500 },
        );
    }
}


export async function GET(request: NextRequest){
    const data = await request.json();
    try {
        reservationSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const {Date, roomId} = data as reservationRequest;
    var availableRoom = [1,1,1,1,1,1,1,1,1,1,1,1]

    try {
        const temp = await db
            .select({
                span: ReservationTable.span,
            })
            .from(ReservationTable)
            .where(and(eq(ReservationTable.Date, Date), eq(ReservationTable.roomId, roomId)))
            .execute()
        temp.forEach((element)=>{
            availableRoom[element.span] = 0
        })
        return NextResponse.json(
            { availableRooms: availableRoom},
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong: GET" },
            { status: 500 },
        );
    }
}