import { Controller, Get, Param, Post, Delete, Put, Patch, Body, Query } from '@nestjs/common';

// RequestMappaing  같은 엔트리 포인트 지정
@Controller('movies')
export class MoviesController {

    @Get()
    getAll():string {
        return 'This will return all movies';
    }
    //@RequestParam 역할 == Query()
    @Get("search")
    search(@Query('year')year: string){
        return `We are searching for a movie with a title after: ${year}`;
    }
    //@pathVariable == @Param() 키값은 동일하게 
    @Get('/:id')
    getOne(@Param("id")id:string){
        return `This will return one movie with the id : ${id}`;
    }

    // RequestBody와 같은 역할
    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }
    

    @Delete("/:id")
    remove(@Param('id')id:string){
        return `This will delete a movie id:${id}`;
    }

    //put or patch(일부만 변경)
    @Patch('/:id')
    path(@Param('id')movieId: string, @Body() updateData){
        return {
            updatedMovie : movieId,
            ...updateData
        };
    }

    
}
