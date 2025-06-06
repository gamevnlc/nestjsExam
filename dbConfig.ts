import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import {Property} from "./src/entities/property.entity";

export const pgConfig: PostgresConnectionOptions = {
    // Don't put here
    url: "postgresql://neondb_owner:npg_xy7d6mgBkhML@ep-sweet-bird-a8usb0q4-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
    type: "postgres",
    port: 3306,
    entities: [Property],
    // dev mode only
    synchronize: true,
}
