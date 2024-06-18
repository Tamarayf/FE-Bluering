import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEntriesComponent } from './expense-entries.component';

describe('ExpenseEntriesComponent', () => {
  let component: ExpenseEntriesComponent;
  let fixture: ComponentFixture<ExpenseEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseEntriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
