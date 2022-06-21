import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName = '';
  taskDate = '';
  editMode = false;
  config: { [key: string]: string } | null = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: true,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];

  constructor(){
    this.config = {
      title: 'Lista zadań',
      footer:  '© Lista zadań. All rights reserved.',
      date: new Date().toDateString()
    };
    this.sortTasks();
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };

    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = ''
    this.sortTasks();
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task){
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks(){
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
    a.done === b.done ? 0 : a.done ? 1 : -1
    )
  }
}
//(a: Task, b: Task) => a.done === b.done ? 0 : a.done ? 1 | -1
