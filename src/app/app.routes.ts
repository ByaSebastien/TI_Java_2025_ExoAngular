import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'timer',
    loadComponent: () =>
      import('./features/exercices/pages/timer/timer.component').then(m => m.TimerComponent),
  }
];
