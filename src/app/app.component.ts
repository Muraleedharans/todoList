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
  getList(item:any){
    this.list.push({id:this.list.length, select : false, task:item});
    console.log(this.list);
    this.count=(this.list.length!=0)? false:true;
    this.inputName.nativeElement.value = '';
  }
  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id)
    this.count=(this.list.length!=0)? false:true;
  }
  onChangeFood($event:any) {
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
    console.log(this.list);
  }
}