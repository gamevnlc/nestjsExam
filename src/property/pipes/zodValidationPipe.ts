import {ZodSchema} from "zod";
import {ArgumentMetadata, BadRequestException, PipeTransform} from "@nestjs/common";

export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodSchema) {

    }

    transform(value: any, metadata: ArgumentMetadata) {
        const parsedValue: any = this.schema.safeParse(value);
        if (parsedValue.success) {
            return parsedValue;
        }
        throw new BadRequestException(parsedValue.error.format())
    }
}
