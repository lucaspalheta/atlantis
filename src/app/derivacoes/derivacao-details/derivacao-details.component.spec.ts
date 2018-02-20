import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivacaoDetailsComponent } from './derivacao-details.component';

describe('DerivacaoDetailsComponent', () => {
  let component: DerivacaoDetailsComponent;
  let fixture: ComponentFixture<DerivacaoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivacaoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivacaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
