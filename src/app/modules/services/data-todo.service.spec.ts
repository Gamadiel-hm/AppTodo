import { TestBed } from '@angular/core/testing';

import { DataTodoService } from './data-todo.service';

describe('DataTodoService', () => {
  let service: DataTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
