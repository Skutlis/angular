import { Component, OnInit } from '@angular/core';
import { TodoRestService } from '../todo-rest.service';
import { todo } from 'src/todo'
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  private status = '';
  private pTodo = '';
  private postId = '';
  hello: todo[] = [];
  summary = '';
  description = '';
  public ELEMENT_DATA : todo[] = [];
  displayColumns: String[] = ['id', 'summary', 'description', 'delete'];
  public dataSource = new MatTableDataSource<todo>(this.ELEMENT_DATA);

  constructor(private service: TodoRestService) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  public getAllTodos() {
    let resp = this.service.getTodo();
    resp.subscribe(
      (report => this.dataSource.data = report as todo[]))

    
  }

  public delete(del: todo) {
    let resp = this.service.deleteTodo(del.id);
    resp.subscribe(() => this.status = '');

  }

  public putTodo() {
    this.pTodo = "{" +
      "summary: " + this.summary + ","
      + "description: " + this.description +
    "}";
  

    let resp = this.service.addTodo(this.pTodo)
    resp.subscribe()
    this.description = '';
    this.summary = '';


  }

  updateSummary(sum: any) {
    this.summary = sum.target.value;
  }

  updateDescription(des: any) {
    this.description = des.target.value;
  }

  

}
