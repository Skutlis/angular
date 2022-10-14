import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { todo } from 'src/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoRestService {

  constructor(private http: HttpClient) { }

  public getTodo(){
    return this.http.get("http://localhost:8080/todos")
  }

  public addTodo(t: string) {
    return this.http.post("http://localhost:8080/todos", t)
  }

  public deleteTodo(ID: String) {
    return this.http.delete("http://localhost:8080/todos/" + ID)
  }
}
