import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDerivacaoComponent } from './create-derivacao.component';

describe('CreateDerivacaoComponent', () => {
  let component: CreateDerivacaoComponent;
  let fixture: ComponentFixture<CreateDerivacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDerivacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDerivacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
