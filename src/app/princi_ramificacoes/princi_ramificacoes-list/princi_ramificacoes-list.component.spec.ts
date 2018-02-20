import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Princi_ramificacoesListComponent } from './princi_ramificacoes-list.component';

describe('Princi_ramificacoesListComponent', () => {
  let component: Princi_ramificacoesListComponent;
  let fixture: ComponentFixture<Princi_ramificacoesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Princi_ramificacoesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Princi_ramificacoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
