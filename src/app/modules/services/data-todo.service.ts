import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoList } from 'src/app/core/models/todo';

@Injectable({
  providedIn: 'root',
})
export class DataTodoService {
  listTodo: BehaviorSubject<TodoList[]> = new BehaviorSubject<TodoList[]>([
    {
      name: 'Pedr0',
      lastName: 'El memme',
      age: '34',
      gender: 'male',
      nationality: 'Mexican',
      password: 'hjgdas657',
      id: 0,
    },
  ]);
  constructor() {}

  get listTodoData(): BehaviorSubject<TodoList[]> {
    return this.listTodo;
  }

  set lisTodoAdd(todo: TodoList) {
    this.listTodo.next([...this.listTodo.getValue(), todo]);
  }

  updateListTodo(todoUpdate: TodoList) {
    this.listTodo.forEach((todo) => {
      todo[todoUpdate.id] = todoUpdate;
    });
  }

  deleteListTodoItem(todoDelete: TodoList) {
    this.listTodo.forEach((todo) => {
      const newTodoList = todo.filter((item) => item.id !== todoDelete.id);
      this.listTodo.next(newTodoList);
    });
  }
}
