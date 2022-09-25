import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

//루트 모듈, springbootapplication 역할 
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
