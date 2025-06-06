import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import {Property} from "./src/entities/property.entity";
import {PropertyFeature} from "./src/entities/propertyFeature.entity";
require('dotenv').config();

export const pgConfig: PostgresConnectionOptions = {
    // Don't put here
    url: process.env.URL,
    type: "postgres",
    port: 3306,
    entities: [Property, PropertyFeature],
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // dev mode only
    synchronize: true,
}
