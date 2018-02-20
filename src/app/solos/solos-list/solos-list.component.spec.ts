import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolosListComponent } from './solos-list.component';

describe('SolosListComponent', () => {
  let component: SolosListComponent;
  let fixture: ComponentFixture<SolosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
