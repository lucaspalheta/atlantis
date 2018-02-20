import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaisListComponent } from './principais-list.component';

describe('PrincipaisListComponent', () => {
  let component: PrincipaisListComponent;
  let fixture: ComponentFixture<PrincipaisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipaisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipaisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
