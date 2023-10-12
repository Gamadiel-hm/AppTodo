import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoList, todoInit } from 'src/app/core/models/todo';
import { DataTodoService } from '../services/data-todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formTodo: FormGroup = new FormGroup({});
  initTodo: TodoList = todoInit;
  contId: number = 1;
  @ViewChild('asmale') maleInput!: ElementRef;
  @ViewChild('asfemale') femaleInput!: ElementRef;

  constructor(private dataTodoServices: DataTodoService) {}

  getDataForm() {
    const { name, lastName, age, password, nationality, male, female } =
      this.formTodo.value;

    this.initTodo = {
      name,
      lastName,
      age,
      password,
      nationality,
      gender: '',
      id: this.contId,
    };
    if (this.maleInput.nativeElement.checked) this.initTodo.gender = male;
    else this.initTodo.gender = female;
    this.dataTodoServices.lisTodoAdd = this.initTodo;
    this.contId += 1;
  }

  ngOnInit(): void {
    this.formTodo = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      lastName: new FormControl('herna'),
      age: new FormControl('26'),
      password: new FormControl('125das'),
      male: new FormControl(''),
      female: new FormControl(''),
      gender: new FormControl('male'),
      nationality: new FormControl('mexican'),
    });
  }

  changeInputRadio(name: string): void {
    if (name === 'male') this.femaleInput.nativeElement.checked = false;
    else this.maleInput.nativeElement.checked = false;
  }

  clearForm(): void {
    this.formTodo.reset();
  }
}
