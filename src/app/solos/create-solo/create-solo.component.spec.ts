import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSoloComponent } from './create-solo.component';

describe('CreateSoloComponent', () => {
  let component: CreateSoloComponent;
  let fixture: ComponentFixture<CreateSoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
