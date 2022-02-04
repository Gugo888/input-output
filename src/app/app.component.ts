import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  truty = 0;
  falsy = 0;

  sum(param:boolean) {
   if(param) {
     ++this.truty
   } else {
     ++this.falsy
   }
  }
  title = 'OutputExperiment';
}
