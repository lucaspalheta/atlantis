import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuboDetailsComponent } from './tubo-details.component';

describe('TuboDetailsComponent', () => {
  let component: TuboDetailsComponent;
  let fixture: ComponentFixture<TuboDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuboDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuboDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
