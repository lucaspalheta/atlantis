import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissoresListComponent } from './emissores-list.component';

describe('EmissoresListComponent', () => {
  let component: EmissoresListComponent;
  let fixture: ComponentFixture<EmissoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmissoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
