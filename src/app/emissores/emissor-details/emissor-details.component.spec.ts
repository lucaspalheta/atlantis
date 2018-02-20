import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissorDetailsComponent } from './emissor-details.component';

describe('EmissorDetailsComponent', () => {
  let component: EmissorDetailsComponent;
  let fixture: ComponentFixture<EmissorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmissorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
