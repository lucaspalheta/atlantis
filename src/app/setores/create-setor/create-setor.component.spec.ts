import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSetorComponent } from './create-setor.component';

describe('CreateSetorComponent', () => {
  let component: CreateSetorComponent;
  let fixture: ComponentFixture<CreateSetorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSetorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
