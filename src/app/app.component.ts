import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getName(){
    return this.model.user;
  }

  getItems(){
    return this.isDisplay ? this.model.items : this.model.items.filter(x => !x.action);
  }

  addItem(value){
    if(value != ""){
      this.model.items.push(new TodoItem(value, false));
    }
  }
}
