import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmissorComponent } from './create-emissor.component';

describe('CreateEmissorComponent', () => {
  let component: CreateEmissorComponent;
  let fixture: ComponentFixture<CreateEmissorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmissorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmissorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
