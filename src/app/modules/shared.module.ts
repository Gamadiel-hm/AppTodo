import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { ModalComponent } from './modal/modal.component';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [FormComponent, TodoComponent, ModalComponent, SortPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormComponent, TodoComponent],
})
export class SharedModule {}
