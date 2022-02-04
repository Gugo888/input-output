import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent  {

  @Input()
  sum1: number = 10

  @Input()
  sum2: number = 20

  @Output()
  sumAll = new EventEmitter<boolean>() 

  onInput(result: string) {
    if(this.sum1 + this.sum2 == Number(result)) {
      this.sumAll.emit(true)
    } else {
      this.sumAll.emit(false)
    }
  }
}
