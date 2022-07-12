import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateWeatherDto } from "./create-weather.dto";
import { WeatherService } from "./weather.service";

@Controller('weather')
export class WeatherController{
    constructor (private readonly weatherService:WeatherService){}

@Post()
get(@Body() {cityName}){
    return this.weatherService.fetch(cityName)
}
}


