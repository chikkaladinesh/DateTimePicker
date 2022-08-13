import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GettingStarted';
  public selectedMoment = new Date();
  minDate: Date = new Date(new Date(new Date().setDate(new Date().getDate() )).setHours(9, 0, 0));
  //minDate: Date = new Date();
  public myFilter(heur : Date) : boolean {
    let nowHour = heur.getHours();
    let listHours = []; 
    for (let i =17; i<= 23; i++) {
      for (let j = 1; j<9; j++) {
        listHours.push(i,j)
      }   
    };
    return !listHours.includes(nowHour)     
   }
}
