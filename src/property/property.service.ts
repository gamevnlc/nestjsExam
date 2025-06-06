import {Injectable, NotFoundException} from "@nestjs/common";
import {Property} from "../entities/property.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {CreatePropertyDto} from "./dto/createProperty.dto";
import {UpdatePropertyDto} from "./dto/updateProperty.dto";

@Injectable()
export class PropertyService {
    constructor(
        @InjectRepository(Property) private propertyRepo: Repository<Property>) {
    }

    async findAll() {
        return await this.propertyRepo.find();
    }

    async findOne(id: number) {
        const result = await this.propertyRepo.findOne({
            where: {
                id: id
            }
        })
        if (!result) {
            throw new NotFoundException("Property not found");
        }
        return result;
    }

    async update(id: number, dto: UpdatePropertyDto) {
        return await this.propertyRepo.update({id}, dto)
    }

    async create(dto: CreatePropertyDto) {
        return await this.propertyRepo.save(dto);
    }

    async delete(id: number) {
        return await this.propertyRepo.delete({id});
    }
}

