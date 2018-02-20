import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloDetailsComponent } from './solo-details.component';

describe('SoloDetailsComponent', () => {
  let component: SoloDetailsComponent;
  let fixture: ComponentFixture<SoloDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
