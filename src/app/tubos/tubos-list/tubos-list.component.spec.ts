import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TubosListComponent } from './tubos-list.component';

describe('TubosListComponent', () => {
  let component: TubosListComponent;
  let fixture: ComponentFixture<TubosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TubosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TubosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
