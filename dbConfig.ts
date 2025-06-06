import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import {Property} from "./src/entities/property.entity";
import {PropertyFeature} from "./src/entities/propertyFeature.entity";

export const pgConfig: PostgresConnectionOptions = {
    // Don't put here

    type: "postgres",
    port: 3306,
    entities: [Property, PropertyFeature],
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // dev mode only
    synchronize: true,
}
