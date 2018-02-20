import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrinci_ramificacaoComponent } from './create-princi_ramificacao.component';

describe('CreatePrinci_ramificacaoComponent', () => {
  let component: CreatePrinci_ramificacaoComponent;
  let fixture: ComponentFixture<CreatePrinci_ramificacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePrinci_ramificacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrinci_ramificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
