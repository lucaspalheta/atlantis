import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorDetailsComponent } from './setor-details.component';

describe('SetorDetailsComponent', () => {
  let component: SetorDetailsComponent;
  let fixture: ComponentFixture<SetorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
