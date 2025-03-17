import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {

  count = 0;
  timer: any;

  constructor() {

    this.timer = setInterval(() => {
      console.log(this.count++);
    },200)

  }

  truc(){
    clearInterval(this.timer);
  }
}
