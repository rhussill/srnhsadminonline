import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusDialogComponent } from './contactus-dialog.component';

describe('ContactusDialogComponent', () => {
  let component: ContactusDialogComponent;
  let fixture: ComponentFixture<ContactusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
