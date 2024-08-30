import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Note } from './entity/note';

@Controller()
export class AppController {
  constructor(private readonly noteService: AppService) {}

  @Get()
  async findAll(): Promise<Note[]> {
    return this.noteService.findAll();
  }


  @Post()
  async create(@Body() note: Partial<Note>): Promise<Note> {
    return this.noteService.create(note);
  }


  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.noteService.delete(id);
  }
}
