import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCulturaComponent } from './create-cultura.component';

describe('CreateCulturaComponent', () => {
  let component: CreateCulturaComponent;
  let fixture: ComponentFixture<CreateCulturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCulturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
