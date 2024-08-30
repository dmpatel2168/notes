import { Injectable } from '@nestjs/common';
import { Note } from './entity/note';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  findAll(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async create(note: Partial<Note>): Promise<Note> {
    const totalNotes = await this.noteRepository.count();
    const newId = totalNotes + 1;

    const newNote = this.noteRepository.create({
      ...note,
      id: newId,
    });

    return this.noteRepository.save(newNote);
  }

  async delete(id: number): Promise<void> {
    await this.noteRepository.delete(id);
  }
}
