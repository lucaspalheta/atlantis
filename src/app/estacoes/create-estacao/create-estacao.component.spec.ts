import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstacaoComponent } from './create-estacao.component';

describe('CreateEstacaoComponent', () => {
  let component: CreateEstacaoComponent;
  let fixture: ComponentFixture<CreateEstacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEstacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEstacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
