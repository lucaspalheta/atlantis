import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoresListComponent } from './setores-list.component';

describe('SetoresListComponent', () => {
  let component: SetoresListComponent;
  let fixture: ComponentFixture<SetoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
