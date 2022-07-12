import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Weather } from 'src/config/weather.entities';
import { CreateWeatherDto } from './create-weather.dto';
import { WeatherModel } from './weather.interface';
import axios from 'axios';

@Injectable()
export class WeatherService {
  constructor(
    @InjectModel(Weather) private readonly weatherService: typeof Weather,
  ) {}

  async fetch(cityName) {
    try {
      var response = await axios.get(
        'https://api.weatherapi.com/v1/current.json?key=b60904deefcc4bac928104405222906&q=' +
          cityName,
      );
      await this.create({
        lname: response.data.location.name,
        cname: response.data.location.country,
        lregion: response.data.location.region,
        tname: response.data.current.temp_c,
        humidity: response.data.current.humidity,
        continent: response.data.location.tz_id,
      });
      return this.weatherService.findAll({ where: { lname: cityName } });
    } catch (err) {
      return err;
    }
  }

  async create(data) {
    const doesExist: any = await this.doesExists({
      where: { lname: data?.lname },
    });
    if (doesExist.length > 0) {
      return this.update(data);
    }
    return this.weatherService.create(data);
  }

  async update(data) {
    return this.weatherService.update(data, { where: { lname: data?.lname } });
  }

  async doesExists(entitiesToFilter: any) {
    return this.weatherService.findAll(entitiesToFilter);
  }
}
