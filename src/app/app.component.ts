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
  parentSelector: boolean = false;
  count=true;
  list:any[]=[];
  allList:any[]=[];
  activeList:any[]=[];
  completedList:any[]=[];
  showList:any[]=[];
  getList(item:any){
    if(item){
    this.list.push({id:this.list.length, select : false, task:item});
    console.log(this.list);
    this.count=(this.list.length!=0)? false:true;
    this.inputName.nativeElement.value = '';
    this.showList=this.list;
    }
  }
  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id)
    this.mandate();
    this.count=(this.list.length!=0)? false:true;
  }
  onChangeAll($event:any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.list = this.list.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }
      if (id == -1) {
        d.select = this.parentSelector;
        return d;
      }
      return d;
    });
    this.mandate();
  }
  showAll (){
    this.mandate();
    this.showList=this.list;
  }
  showActive(){
    this.mandate();
    this.showList=this.activeList;
  }
  showCompleted(){
    this.mandate();
    this.showList=this.completedList;
  }
  mandate(){
      this.showList=this.list;
      this.activeList=[];
      this.completedList=[];
      this.list.map((d) => {
      if (d.select == true) {
        this.completedList.push({id:d.id, select :d.select , task:d.task});
      }
      else{
        this.activeList.push({id:d.id, select :d.select , task:d.task});
      }
  });
  }
  
}