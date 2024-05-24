import { sql } from 'drizzle-orm'
import {
    index,
    integer,
    pgTable,
    serial,
    timestamp,
    unique,
    varchar,
    uuid
  } from "drizzle-orm/pg-core";

export const ReservationTable = pgTable(
    "Reservation",
    {
        id: serial("id").primaryKey(),
        displayName: varchar("name").notNull(),
        email: varchar("email"),
        Date: varchar("date", {length: 15}).notNull(),
        startTime: varchar("startTime").notNull(),
        endTime: varchar("endTime").notNull(),
        roomId: varchar("roomId").notNull()
    },
    (table) => ({
        emailIndex: index("email_index").on(table.email),
        roomIndex: index("room_index").on(table.roomId),
        uniqReservation: unique().on(table.roomId, table.Date, table.startTime, table.endTime),
    })
);

//email, name, time, which room, date