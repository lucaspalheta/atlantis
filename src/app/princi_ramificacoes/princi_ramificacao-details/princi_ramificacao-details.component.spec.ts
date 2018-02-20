import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Princi_ramificacaoDetailsComponent } from './princi_ramificacao-details.component';

describe('Princi_ramificacaoDetailsComponent', () => {
  let component: Princi_ramificacaoDetailsComponent;
  let fixture: ComponentFixture<Princi_ramificacaoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Princi_ramificacaoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Princi_ramificacaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
