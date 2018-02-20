import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturasListComponent } from './culturas-list.component';

describe('CulturasListComponent', () => {
  let component: CulturasListComponent;
  let fixture: ComponentFixture<CulturasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
