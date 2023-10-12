import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoList, todoInit } from 'src/app/core/models/todo';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnChanges {
  @Input() modalBoolean: boolean = true;
  @Input() buttonOption: string = '';
  @Output() updateModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() changeTodo: EventEmitter<TodoList> = new EventEmitter<TodoList>();
  @Output() deleteTodo: EventEmitter<TodoList> = new EventEmitter<TodoList>();
  formTodoModal: FormGroup = new FormGroup({});
  private todoInput: TodoList = todoInit;

  @Input()
  set todoItem(todo: TodoList) {
    this.todoInput = todo;
  }
  get todoItem() {
    return this.todoInput;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.formTodoModal = new FormGroup({
      name: new FormControl({
        value: this.todoItem.name,
        disabled: false,
      }),
      lastName: new FormControl(this.todoItem.lastName),
      age: new FormControl(this.todoItem.age),
      password: new FormControl(this.todoItem.password),
      gender: new FormControl(this.todoItem.gender),
      nationality: new FormControl(this.todoItem.nationality),
    });
  }

  modalChangeLogic() {
    this.updateModal.emit();
  }

  stopPropagation(event: any) {
    event.stopPropagation();
  }

  handleChangeTodo() {
    const todoEmitter: TodoList = {
      ...this.formTodoModal.value,
      $id: this.todoItem.$id,
    };
    this.modalChangeLogic();
    if (this.buttonOption === 'Update') this.changeTodo.emit(todoEmitter);
    else this.deleteTodo.emit(todoEmitter);
  }
}
