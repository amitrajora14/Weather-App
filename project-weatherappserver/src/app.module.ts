import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.module';
import { Weather } from './config/weather.entities';
import { WeatherModule } from './Module/weatherapi/weather.module';

@Module({
  imports: [DatabaseModule.forRoot(),WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
