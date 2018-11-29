import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendateComponent } from './opendate.component';

describe('OpendateComponent', () => {
  let component: OpendateComponent;
  let fixture: ComponentFixture<OpendateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpendateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpendateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
