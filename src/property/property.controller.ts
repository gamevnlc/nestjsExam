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
    Headers, Delete
} from '@nestjs/common';
import {CreatePropertyDto} from "./dto/createProperty.dto";
import {IdParamDto} from "./dto/idParam.dto";
import {ParseIdPipe} from "./pipes/parseIdpipe";
import {ZodValidationPipe} from "./pipes/zodValidationPipe";
import {createPropertySchema, CreatePropertyZodDto} from "./dto/createPropertyZod.dto";
import {HeadersDto} from "./dto/headers.dto";
import {RequestHeader} from "./pipes/request-header";
import {PropertyService} from "./property.service";
import {UpdatePropertyDto} from "./dto/updateProperty.dto";

@Controller('property')
export class PropertyController {
    constructor(private propertyService: PropertyService) {
    }

    @Get()
    findAll() {
        return this.propertyService.findAll();
    }

    @Post()
    // @UsePipes(new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //     groups: ['create'],
    //     always: true
    // }))
    // @HttpCode(202)
    // @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(@Body() body: CreatePropertyDto) {
        console.log(body)
        return this.propertyService.create(body)
    }

    // @Get(":id/:slug")
    // findOne(@Param("id") id: string, @Param("slug") slug: string) {
    //     return `Get property with id ${id} with name ${slug}`;
    // }
    @Get(':id')
    findOne(
        @Param('id', ParseIntPipe) id: number,
        // @Query('sort', ParseBoolPipe) sort: boolean
    ) {
        return this.propertyService.findOne(id)
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
        @Body() body: UpdatePropertyDto,
        // @RequestHeader(HeadersDto) header: HeadersDto
    ) {
        return this.propertyService.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id', ParseIdPipe) id: number) {
        return this.propertyService.delete(id)
    }
}
