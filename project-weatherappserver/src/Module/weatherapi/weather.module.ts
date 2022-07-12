import { Module } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { WeatherController } from "./weather.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Weather } from "src/config/weather.entities";

@Module({
    imports:[SequelizeModule.forFeature([Weather])],
    controllers:[WeatherController],
    providers:[WeatherService]
})
export class WeatherModule{}

