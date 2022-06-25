import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';

let pass='123456'
if (process.env.NODE_ENV=='prod') {
  pass = 'dCycy5h9[Gm/dsC.aVHm';
}
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: pass,
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
