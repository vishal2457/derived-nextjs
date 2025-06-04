import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";


const driver = postgres(process.env.DATABASE_URL as string);
export const db = drizzle({ client: driver, casing: "snake_case" });

