import {ExecutionContext, createParamDecorator, BadRequestException} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

export const RequestHeader = createParamDecorator(
    async (targetDTo: any, ctx: ExecutionContext) => {
        const headers = ctx.switchToHttp().getRequest().headers;
        const dto = plainToInstance(targetDTo, headers, {
            excludeExtraneousValues: true,
        });
        try {
            await validateOrReject(dto);
        } catch (error) {
            throw new BadRequestException("Missing or invalid access token");
        }

        return dto;
    },
);
