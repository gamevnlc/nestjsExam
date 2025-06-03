import {
    Body,
    Controller,
    Get,
    HttpCode,
    Param,
    ParseBoolPipe,
    ParseIntPipe, Patch,
    Post,
    Query, UsePipes,
    ValidationPipe,
    Headers
} from '@nestjs/common';
import {CreatePropertyDto} from "./dto/createProperty.dto";
import {IdParamDto} from "./dto/idParam.dto";
import {ParseIdPipe} from "./pipes/parseIdpipe";
import {ZodValidationPipe} from "./pipes/zodValidationPipe";
import {createPropertySchema, CreatePropertyZodDto} from "./dto/createPropertyZod.dto";
import {HeadersDto} from "./dto/headers.dto";
import {RequestHeader} from "./pipes/request-header";

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "All properties";
    }

    @Post()
    // @UsePipes(new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     groups: ['create'],
    //     always: true
    // }))
    // @HttpCode(202)
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(@Body() body: CreatePropertyZodDto) {
        return body;
    }

    // @Get(":id/:slug")
    // findOne(@Param("id") id: string, @Param("slug") slug: string) {
    //     return `Get property with id ${id} with name ${slug}`;
    // }
    @Get(':id')
    findOne(
        @Param('id', ParseIntPipe) id: number,
        @Query('sort', ParseBoolPipe) sort: boolean
    ) {
        return id;
    }

    @Patch(':id')
    // @UsePipes(new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     groups: ['update'],
    //     always: true
    // }))
    update(
        // @Param() {id}: IdParamDto,
        @Param('id', ParseIdPipe) id: number,
        @Body() body: CreatePropertyDto,
        @RequestHeader(HeadersDto) header: HeadersDto
    ) {
        return header;
    }
}
