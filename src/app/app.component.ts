import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('name') inputName: any;
  title = 'todoList';
  hideElement=true;
  count:any;
  list:any[]=[];
  getList(item:any){
    this.list.push({id:this.list.length,task:item});
    console.log(this.list);
    this.inputName.nativeElement.value = '';
  }
  constructor(){
    this.count=(this.list.length==0)? "true" : "false";
  }
  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id)
  }
}
