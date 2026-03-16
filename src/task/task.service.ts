import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

@Injectable()
export class TaskService {

  private tasks: Task[] = [
    { id: 1, title: 'create project', isCompleted: false},
    { id: 2, title: 'write documentation', isCompleted: true},
    { id: 3, title: 'connect to database', isCompleted: false},
    { id: 4, title: 'develop API endpoints', isCompleted: false}
  ];

  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
