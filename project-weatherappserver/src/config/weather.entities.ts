import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Weather extends Model {

  @Column
  cname: String;

  @Column
  lname: String;

  @Column
  humidity: Number;

  @Column
  tname: Number;

  @Column
  lregion: String;

  @Column
  continent: String;
}
