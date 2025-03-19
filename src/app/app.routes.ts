import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'timer',
    loadComponent: () =>
      import('./features/exercices/pages/timer/timer.component').then(m => m.TimerComponent),
  },
  {
    path: 'todo-list',
    loadComponent: () =>
      import('./features/exercices/pages/todo-list/todo-list.component').then(m => m.TodoListComponent),
  },
  {
    path: 'shopping-list',
    loadComponent: () =>
      import('./features/exercices/pages/shopping-list/shopping-list.component').then(m => m.ShoppingListComponent),
  },
];
