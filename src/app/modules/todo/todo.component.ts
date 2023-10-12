import { Component, OnInit } from '@angular/core';
import {
  ObjectSortTitles,
  TodoList,
  initSortTitles,
  todoInit,
} from 'src/app/core/models/todo';
import { DataTodoService } from '../services/data-todo.service';
import { SortTitle } from 'src/app/core/enums/enumSort';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList: TodoList[] = [];
  modalLogic: boolean = false;
  todoItem: TodoList = todoInit;
  buttonOptionModal: string = '';
  enumsTitle: SortTitle[] = [
    SortTitle.name,
    SortTitle.lastName,
    SortTitle.age,
    SortTitle.nationality,
    SortTitle.gender,
  ];
  objectTitleSort: ObjectSortTitles = initSortTitles;
  sortTitle: SortTitle = SortTitle.default;

  constructor(private dataTodoService: DataTodoService) {}

  ngOnInit(): void {
    this.dataTodoService.listTodo.subscribe((res) => {
      this.todoList = res;
    });
  }

  handleModalOpen(todo: TodoList, buttonOption: string) {
    this.modalLogic = !this.modalLogic;
    this.todoItem = todo;
    this.buttonOptionModal = buttonOption;
  }
  handleModalClose() {
    this.modalLogic = !this.modalLogic;
    this.todoItem = todoInit;
  }

  handleTodoEmit(todoEmitModal: TodoList) {
    this.dataTodoService.updateListTodo(todoEmitModal);
  }

  handleTodoDelete(todoEmitModalDelete: TodoList) {
    this.dataTodoService.deleteListTodoItem(todoEmitModalDelete);
  }

  // Fucntions Sorts

  handleSortTitle(title: SortTitle) {
    if (this.objectTitleSort.beforeTitle === title) {
      this.objectTitleSort.afterTitle = title;
    }

    this.objectTitleSort = {
      ...this.objectTitleSort,
      beforeTitle: title,
    };
    this.sortTitle = title;
  }
}
