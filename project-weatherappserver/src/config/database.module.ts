// import { TypeOrmModule } from "@nestjs/typeorm";
import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Weather } from './weather.entities';

@Module({})
export class DatabaseModule {
  static forFeature(providers: Provider<any>[] = []): DynamicModule {
    return {
      module: DatabaseModule,
      providers: providers,
      exports: providers,
    };
  }

  static forRoot(): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigModule) => {
            return {
              dialect: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: 'postgres',
              database: 'weather',
              models: [Weather],
              logging: console.log,
              autoLoadModels: true,
              synchronize: true,
            };
          },
          inject: [ConfigService],
        }),
      ],
    };
  }
}
