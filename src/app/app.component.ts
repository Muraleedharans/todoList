import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('name') inputName: any;
  title = 'todoList';
  hideElement=true;
  count=true;
  list:any[]=[];
  getList(item:any){
    this.list.push({id:this.list.length,task:item});
    console.log(this.list);
    this.count=(this.list.length!=0)? false:true;
    this.inputName.nativeElement.value = '';
  }
  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id)
    this.count=(this.list.length!=0)? false:true;
  }
}
