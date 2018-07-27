import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService) {}
  newTask: any;
  title = 'App';

  ngOnInit(){
    this.newTask = {title: "", description: "", completed: false };
  }
  submitTask (){
    let createTask = this._httpService.newTask(this.newTask);
    createTask.subscribe(data => {
      console.log ("hello");
    });
  }
  

}

