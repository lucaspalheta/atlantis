import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaDetailsComponent } from './cultura-details.component';

describe('CulturaDetailsComponent', () => {
  let component: CulturaDetailsComponent;
  let fixture: ComponentFixture<CulturaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
