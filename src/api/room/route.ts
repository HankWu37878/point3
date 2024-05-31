import { NextResponse, type NextRequest } from "next/server";

import { z } from "zod";

import { db } from "@/db";
import { RoomInfoTable } from "@/db/schema";
import { eq } from "drizzle-orm";


const roomSchema = z.object({
    roomId: z.string(),
    roomName: z.string(),
    content: z.string(),
})

type roomRequest = z.infer<typeof roomSchema>

export async function POST(request: NextRequest){
    const data = await request.json();
    try {
        roomSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const {roomId, roomName, content} = data as roomRequest;

    try {
        await db
            .insert(RoomInfoTable)
            .values({
                RoomId: roomId,
                roomName: roomName,
                content: content,
            })
            .onConflictDoNothing()
            .execute();
        return NextResponse.json(
            { message: "Add room success!"},
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong when adding room" },
            { status: 500 },
        );
    }
}


export async function PUT(request: NextRequest){
    const data = await request.json();
    try {
        roomSchema.parse(data);
    } catch (error) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const {roomId, roomName, content} = data as roomRequest;

    try {
        await db
            .update(RoomInfoTable).set({
                roomName: roomName,
                content: content
            })
            .where(eq(RoomInfoTable.RoomId, roomId))
            .execute()
        return NextResponse.json(
            { message: "Room successfully update"},
            { status: 200 },
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong when updating room info" },
            { status: 500 },
        );
    }
}