import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { ConfigModule } from "@nestjs/config";


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.prod']
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.PASS,
      database: 'nest_tutor',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
