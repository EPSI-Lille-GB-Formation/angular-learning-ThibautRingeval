import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
   <h1> Liste de choses à faire</h1>
   <ul *ngFor="let todos of todolist>
  <li *ngIf="todos.isCompleted">{{todos.title}}</li>
   </ul>
   </div>
   `,
  styles: []
})
export class AppComponent {
  
  todoList = TODOS;
  constructor(){
    console.table(this.todoList);
    this.selectTodo(8);
   }
   selectTodo(id: number) {
    console.table(this.todoList[id-1]);
   }
  }
