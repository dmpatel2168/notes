import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/entity/note';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'dhruv',
      entities: [Note],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Note]),
  ],
})
export class DatabaseModule {}
