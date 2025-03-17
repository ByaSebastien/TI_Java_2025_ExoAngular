import { Component } from '@angular/core';
import {TimePipe} from '../../../../shared/pipes/time.pipe';

@Component({
  imports: [
    TimePipe
  ],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {

  secondes: number = 0;
  timer: any;

  start(): void {
    if(this.timer) {
      return;
    }
    this.timer = setInterval(() => this.secondes++, 100);
  }

  stop(): void {
    if(!this.timer) {
      return;
    }
    clearInterval(this.timer);
    this.timer = null;
  }

  reset(): void {
    if(this.secondes === 0){
      return;
    }
    this.secondes = 0;
  }
}
