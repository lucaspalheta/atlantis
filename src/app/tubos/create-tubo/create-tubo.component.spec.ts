import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTuboComponent } from './create-tubo.component';

describe('CreateTuboComponent', () => {
  let component: CreateTuboComponent;
  let fixture: ComponentFixture<CreateTuboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTuboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
