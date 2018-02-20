import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivacoesListComponent } from './derivacoes-list.component';

describe('DerivacoesListComponent', () => {
  let component: DerivacoesListComponent;
  let fixture: ComponentFixture<DerivacoesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivacoesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivacoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
