import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacaoDetailsComponent } from './estacao-details.component';

describe('EstacaoDetailsComponent', () => {
  let component: EstacaoDetailsComponent;
  let fixture: ComponentFixture<EstacaoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacaoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
