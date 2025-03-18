import { Component } from '@angular/core';
import {TodoListDtoModel} from '../../models/todo-list-dto.model';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  nextTaskId: number = 1;
  nextSectionId: number = 1;
  todoList: TodoListDtoModel[];
  taskTitle: string = '';
  sectionTitle: string = '';

  constructor() {
    this.todoList = [
      {
        id: this.nextSectionId++,
        title: 'Home',
        isOpen: false,
        tasks: [
          {
            id: this.nextTaskId++,
            title: 'Vider le lave vaisselle',
            isCompleted: false,
          },
          {
            id: this.nextTaskId++,
            title: 'Faire la lessive',
            isCompleted: true,
          }
        ]
      },
      {
        id: this.nextSectionId++,
        title: 'Work',
        isOpen: false,
        tasks: [
          {
            id: this.nextTaskId++,
            title: 'Préparer le cours de microservices',
            isCompleted: false,
          }
        ]
      },
      {
        id: this.nextSectionId++,
        title: 'Hobbies',
        isOpen: false,
        tasks: [
          {
            id: this.nextTaskId++,
            title: 'Apprendre unity',
            isCompleted: false,
          }
        ]
      }
    ];
  }

  addTask(sectionId: number) {
    let section = this.todoList.find(s => s.id === sectionId);
    if (!section) {
      return;
    }
    section.tasks.push({id:this.nextTaskId++,title:this.taskTitle,isCompleted: false});
    this.taskTitle = '';
  }

  removeTask(sectionId: number, taskId: number) {
    let section = this.todoList.find(s => s.id === sectionId);
    if (!section) {
      return;
    }
    let taskIndex = section.tasks.findIndex(task => task.id === taskId);
    section.tasks.splice(taskIndex, 1);
  }

  toggleCompleted(sectionId: number, taskId: number) {
    let section = this.todoList.find(s => s.id === sectionId);
    if (!section) {
      return;
    }
    let task = section.tasks.find(task => task.id === taskId);
    if (!task) {
      return;
    }
    task.isCompleted = !task.isCompleted;
  }

  toggleIsOpen(sectionId: number) {
    let section = this.todoList.find(s => s.id === sectionId);
    if (!section) {
      return;
    }
    for( let s of this.todoList ) {
      if(s.id === sectionId) {
        continue;
      }
      s.isOpen = false;
    }
    section.isOpen = !section.isOpen;
  }

  addSection() {
    this.todoList.push({id:this.nextSectionId++,title:this.sectionTitle,isOpen:false,tasks:[]});
    this.sectionTitle = '';
  }
}
